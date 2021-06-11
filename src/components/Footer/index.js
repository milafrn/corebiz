import React from "react";
import { ReactComponent as Logo } from "../../assets/logo-white.svg";
import { ReactComponent as VtexIcon } from "../../assets/vtex.svg";
import { ReactComponent as IconEmail } from "../../assets/icon-email.svg";
import { ReactComponent as IconPhone } from "../../assets/icon-phone.svg";

import * as S from "./styled";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterWrapper>
        <S.FooterInstitutionalWrapper>
          <S.FooterInstitutionalTitle>Localização</S.FooterInstitutionalTitle>
          <S.FooterInstitutionalText>
            Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
            Alphavile SP <br />
            brasil@corebiz.ag <br />
            +55 11 3090 1039
          </S.FooterInstitutionalText>
        </S.FooterInstitutionalWrapper>

        <S.FooterInstitutionalWrapper>
          <S.FooterInstitutionalButton>
            <IconEmail className="icon"/>
            Entre em contato
          </S.FooterInstitutionalButton>
          <S.FooterInstitutionalButton>
            <IconPhone className="icon"/>
            Fale com o nosso
            <br /> consultor online
          </S.FooterInstitutionalButton>
        </S.FooterInstitutionalWrapper>

        <S.FooterInstitutionalWrapper>
          <S.FooterInstitutionalIcon>
            Created by
            <Logo className="logo" />
          </S.FooterInstitutionalIcon>
          <S.FooterInstitutionalIcon>
            Powered by
            <VtexIcon className="vtex" />
          </S.FooterInstitutionalIcon>
        </S.FooterInstitutionalWrapper>
      </S.FooterWrapper>
    </S.Footer>
  );
};

export default Footer;
