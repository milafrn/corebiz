import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
  margin: 0 auto;
  & > .logo {
    cursor: pointer;
  }
`;

export const SearchWrapper = styled.div`
  width: 58%;
  min-width: 280px;
  height: 23px;
  position: relative;
  & > .search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 1px solid #7a7a7a;
`;

export const UserWrapper = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  & > .user-icon {
    margin-right: 6.5px;
  }
`;

export const UserText = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 13px;
  color: #7a7a7a;
`;

export const CartWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const CartQuantity = styled.span`
  font-family: "Nunito", sans-serif;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #f8475f;
  color: #fff;
  font-weight: 700;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`;
