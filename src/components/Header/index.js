import React from "react";
import {ReactComponent as Logo} from "../../assets/logo.svg";
import {ReactComponent as SearchIcon} from "../../assets/search.svg";
import {ReactComponent as UserIcon} from "../../assets/user.svg";
import {ReactComponent as CartIcon} from "../../assets/cart.svg";
import { Link } from "react-router-dom";

import * as S from "./styled";

const Header = () => {
  return (
    <S.Header>
      <Link to="/">
        <Logo className="logo" />
      </Link>
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
