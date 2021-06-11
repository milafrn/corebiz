import styled from "styled-components";

export const NewsletterWrapper = styled.div`
  width: 100%;
  height: 146px;
  box-sizing: border-box;
  padding: 24px 0 36px 0;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

export const NewsletterTitle = styled.p`
  font-family: "Lato", sans-serif;
  font-size: ${props => props.small ? '14px' : '22px'};
  font-weight: bold;
  color: #333333;
`;

export const NewsletterSubTitle = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #333333;
  margin-bottom: 15px;
`;

export const NewsletterFormWrapper = styled.form`
  display: flex;
margin-top: 16px;
`;


export const NewsletterInputWrapper = styled.div`
`;

export const NewsletterInput = styled.input`
  border: none;
  width: 280px;
  height: 48px;
  border-radius: 5px;
  background-color: #fff;
  padding: 17px;
  font-family: "Lato", sans-serif;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
  border: ${props => props.error ? '1px solid #D7182A' : ''};

  &::placeholder {
    color: #585858;
  } 
`;

export const NewsletterErrorMessage = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 12px;
  color: #D7182A;
  margin-top: 8px;
`

export const NewsletterButton = styled.button`
  border: none;
  background-color: #000;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: ${props => props.big ? '328px' : '140px'};
  height: 48px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  box-sizing: border-box;
`;


