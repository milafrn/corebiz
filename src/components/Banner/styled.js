import styled from "styled-components";

export const BannerWrapper = styled.ul`
  width: 100%;
  & .slick-dots {
    bottom: 37px;
    & .slick-active {
      button {
        background-color: #f8475f;
      }
    }
    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #bdbdbd;
      &::before {
        content: "";
      }
    }
  }
`;

export const Banner = styled.li`
  position: relative;
  width: 100%;
  & > .banner-image {
    width: 100%;
    height: auto;
  }
`;

export const BannerTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
`;

export const BannerTextTitle = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
`;

export const BannerTextSubTitle = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 45px;
  font-weight: 900;
  color: #fff;
`;
