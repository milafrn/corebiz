import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 213px;
  background-color: #000;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterInstitutionalWrapper = styled.div`

`;

export const FooterInstitutionalTitle = styled.p`
  color: #fff;
  font-size: 20px;
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  &::after {
    display: block;
    content: "";
    width: 45px;
    height: 5px;
    background-color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const FooterInstitutionalText = styled.p`
  color: #fff;
  font-size: 13px;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  line-height: 25px;
`;

export const FooterInstitutionalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 195px;
  height: 38px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  margin-top: 25px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  &:first-child {
    margin: 0;
  }

  & .icon {
    margin-right: 18px;
  }
`;

export const FooterInstitutionalIcon = styled.span`
  display: inline-flex;
  flex-direction: column;
  color: #fff;
  font-size: 10px;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  cursor: pointer;
  & .logo {
    margin-right: 25px;
    margin-top: 4px;
  }
  & .vtex {
    margin-top: 4px;
  }
`;
