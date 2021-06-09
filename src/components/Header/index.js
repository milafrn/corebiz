import React from "react";
import Logo from "../../assets/logo.svg";
import SearchIcon from "../../assets/search.svg";
import UserIcon from "../../assets/user.svg";
import CartIcon from "../../assets/cart.svg";
import { BrowserRouter, Link } from "react-router-dom";

import * as S from "./styled";

const Header = () => {
  return (
    <S.Header>
      <BrowserRouter>
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </BrowserRouter>
      <S.SearchWrapper>
        <S.SearchInput placeholder="O que está procurando?" />
        <SearchIcon className="search-icon" />
      </S.SearchWrapper>
      <S.UserWrapper>
        <UserIcon className="user-icon" />
        <S.UserText>Minha Conta</S.UserText>
      </S.UserWrapper>
      <S.CartWrapper>
        <CartIcon />
        <S.CartQuantity>1</S.CartQuantity>
      </S.CartWrapper>
    </S.Header>
  );
};

export default Header;
