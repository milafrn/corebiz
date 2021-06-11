import React, { useEffect, useState } from "react";
import axios from "axios";
import { ReactComponent as StarIconUnfilled } from "../../assets/star-icon-unfilled.svg";
import { ReactComponent as StarIconFilled } from "../../assets/star-icon-filled.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";
import Slider from "react-slick";

import * as S from "./styled";

const Shelf = ({ shelfTitle, productQuantity }) => {
  const [shelfs, setShelfs] = useState([]);

  useEffect(() => {
    axios
      .get(`https://corebiz-test.herokuapp.com/api/v1/products`)
      .then((response) => {
        setShelfs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(shelfs);

  const priceConvert = (price) => {
    let priceConvert = Number(price).toFixed(2) / 100;
    return priceConvert.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const settings = {
    // autoplay: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <>
      <S.ShelfWrapper>
        <S.ShelfTitle>{shelfTitle}</S.ShelfTitle>
        <Slider {...settings}>
          {shelfs.map((shelf, index) => (
            <S.ShelfProductWrapper key={index}>
              {shelf.listPrice ? (
                <>
                  <S.ShelfProductSeal></S.ShelfProductSeal>{" "}
                  <S.ShelfProductSealText>Off</S.ShelfProductSealText>{" "}
                </>
              ) : null}
              <S.ShelfProductImage
                src={shelf.imageUrl}
                alt={`imagem ${shelf.productName}`}
              ></S.ShelfProductImage>
              <S.ShelfProductData className="shelf-product__data">
                <S.ShelfProductName>{shelf.productName}</S.ShelfProductName>
                <S.ShelfProductStarsWrapper>
                  {Array.from({ length: 5 }, (_, index) =>
                    index <= shelf.stars - 1 ? "filled" : "unfilled"
                  ).map((item, index) => {
                    return item === "filled" ? (
                      <S.ShelfProductStars key={index}>
                        <StarIconFilled />
                      </S.ShelfProductStars>
                    ) : (
                      <S.ShelfProductStars key={index}>
                        <StarIconUnfilled />
                      </S.ShelfProductStars>
                    );
                  })}
                </S.ShelfProductStarsWrapper>

                <S.ShelfProductListPrice>
                  {shelf.listPrice ? `de ${priceConvert(shelf.listPrice)}` : ""}
                </S.ShelfProductListPrice>
                <S.ShelfProductPrice>{`por ${priceConvert(
                  shelf.price
                )}`}</S.ShelfProductPrice>
                <S.ShelfProductInstallments>
                  {shelf.installments.length > 0
                    ? `ou em ${
                        shelf.installments[0].quantity
                      }x de ${priceConvert(shelf.installments[0].value)}`
                    : ""}
                </S.ShelfProductInstallments>
                <S.ShelfProductButton
                  className="shelf-product__button"
                  onClick={() =>
                    productQuantity((prevValue) => {
                      console.log(prevValue);
                      const newValue = prevValue + 1;
                      localStorage.setItem("quantity", newValue);
                      console.log(newValue);
                      return newValue;
                    })
                  }
                >
                  Comprar
                </S.ShelfProductButton>
              </S.ShelfProductData>
            </S.ShelfProductWrapper>
          ))}
        </Slider>
      </S.ShelfWrapper>
    </>
  );
};

export default Shelf;
