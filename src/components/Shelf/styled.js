import styled from "styled-components";

export const ShelfTitle = styled.h3`
  margin-top: 25px;
  font-family: "Nunito", sans-serif;
  font-weight: 900;
  color: #000;
  font-size: 20px;
  margin-bottom: 20px;
  &::after {
    content: "";
    width: 65px;
    height: 4px;
    background-color: #c0c0c0;
    display: block;
    margin-top: 6px;
  }
`;

export const ShelfWrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  & .slick-list {
    padding-left: 37px;
  }
  & .slick-slide {
    > div {
      display: flex;
    }
  }
`;

export const ShelfProductWrapper = styled.div`
  position: relative;
  max-width: 216px;
  overflow: hidden;
  &:hover {
    .shelf-product__data {
      background-color: #e6e8ea;
      transition: background-color 300ms linear;
    }
    .shelf-product__button {
      opacity: 1;
      transition: opacity 300ms linear;
    }
  }
`;

export const ShelfProductSeal = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(-45deg) translate(80%, -15%);
  width: 0;
  height: 0;
  border-top: 70px solid transparent;
  border-bottom: 70px solid transparent;
  border-left: 70px solid #f8475f;
`;

export const ShelfProductSealText = styled.span`
  display: block;
  position: absolute;
  top: 15px;
  right: 7.5px;
  font-size: 16px;
  font-weight: 900;
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  color: #fff;
`;

export const ShelfProductImage = styled.img`
  width: 216px;
  height: 200px;
  display: block;
`;

export const ShelfProductData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7px;
  padding-bottom: 14.5px;
  height: 153px;
  width: 100%;
  box-sizing: border-box;
  transition: background-color 200ms linear;
`;

export const ShelfProductName = styled.p`
  color: #7a7a7a;
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const ShelfProductStarsWrapper = styled.ul`
  margin-bottom: 7px;
  display: flex;
`;

export const ShelfProductStars = styled.li``;

export const ShelfProductListPrice = styled.p`
  height: 12px;
  font-size: 12px;
  font-weight: 400;
  font-family: "Nunito", sans-serif;
  text-decoration: line-through;
  color: #7a7a7a;
  margin-bottom: 5px;
`;

export const ShelfProductPrice = styled.p`
  height: 18px;
  font-size: 18px;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  color: #000;
  margin-bottom: 5px;
`;

export const ShelfProductInstallments = styled.p`
  height: 11px;
  font-size: 11px;
  font-weight: 400;
  font-family: "Nunito", sans-serif;
  color: #7a7a7a;
  margin-bottom: 8px;
`;

export const ShelfProductButton = styled.button`
  width: 125px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-family: "Nunito", sans-serif;
  font-size: 12px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 300ms linear;
`;
