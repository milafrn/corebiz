import React from "react";
import bannerImage from "../../assets/banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as S from "./styled";

const Banner = () => {
  const settings = {
    // autoplay: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.BannerWrapper>
      <Slider {...settings}>
        <S.Banner>
          <S.BannerTextWrapper>
            <S.BannerTextTitle>
              Olá, o que você está buscando?
            </S.BannerTextTitle>
            <S.BannerTextSubTitle>
              Criar ou migrar seu
              <br /> e-commerce?
            </S.BannerTextSubTitle>
          </S.BannerTextWrapper>
          <img
            src={bannerImage}
            className="banner-image"
            alt="Criar ou migrar seu e-commerce? banner"
          />
        </S.Banner>

        <S.Banner>
          <S.BannerTextWrapper>
            <S.BannerTextTitle>
              Olá, o que você está buscando?
            </S.BannerTextTitle>
            <S.BannerTextSubTitle>
              Criar ou migrar seu
              <br /> e-commerce?
            </S.BannerTextSubTitle>
          </S.BannerTextWrapper>
          <img
            src={bannerImage}
            className="banner-image"
            alt="Criar ou migrar seu e-commerce? banner"
          />
        </S.Banner>

        <S.Banner>
          <S.BannerTextWrapper>
            <S.BannerTextTitle>
              Olá, o que você está buscando?
            </S.BannerTextTitle>
            <S.BannerTextSubTitle>
              Criar ou migrar seu
              <br /> e-commerce?
            </S.BannerTextSubTitle>
          </S.BannerTextWrapper>
          <img
            src={bannerImage}
            className="banner-image"
            alt="Criar ou migrar seu e-commerce? banner"
          />
        </S.Banner>

        <S.Banner>
          <S.BannerTextWrapper>
            <S.BannerTextTitle>
              Olá, o que você está buscando?
            </S.BannerTextTitle>
            <S.BannerTextSubTitle>
              Criar ou migrar seu
              <br /> e-commerce?
            </S.BannerTextSubTitle>
          </S.BannerTextWrapper>
          <img
            src={bannerImage}
            className="banner-image"
            alt="Criar ou migrar seu e-commerce? banner"
          />
        </S.Banner>
      </Slider>
    </S.BannerWrapper>
  );
};

export default Banner;
