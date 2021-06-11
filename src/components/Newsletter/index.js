import axios from "axios";
import React, { useEffect, useState } from "react";

import * as S from "./styled";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  const [newForm, setNewForm] = useState(true);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email) ? "" : "Preencha com um e-mail válido";
  };

  const validateName = (name) => {
    const regex = /^\w+( \w+)+$/i;
    return regex.test(name) ? "" : "Preencha com seu nome completo";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {
      name: validateName(name),
      email: validateEmail(email),
    };
    setErrors(errors);

    const hasError = Object.values(errors).some((error) => Boolean(error));
    if (hasError) return;

    axios
      .post(`https://corebiz-test.herokuapp.com/api/v1/newsletter`, {
        name,
        email,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setNewForm(false);
        setName("");
        setEmail("");
        setErrors({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {newForm ? (
        <S.NewsletterWrapper>
          <S.NewsletterTitle>
            Participe de nossas news com promoções e novidades!
          </S.NewsletterTitle>
          <S.NewsletterFormWrapper onSubmit={handleSubmit}>
            <S.NewsletterInputWrapper>
              <S.NewsletterInput
                placeholder="Digite seu nome"
                onChange={handleChangeName}
                error={Boolean(errors.name)}
              />

              <S.NewsletterErrorMessage>{errors.name}</S.NewsletterErrorMessage>
            </S.NewsletterInputWrapper>
            <S.NewsletterInputWrapper>
              <S.NewsletterInput
                placeholder="Digite seu email"
                onChange={handleChangeEmail}
                error={Boolean(errors.email)}
              />
              <S.NewsletterErrorMessage>
                {errors.email}
              </S.NewsletterErrorMessage>
            </S.NewsletterInputWrapper>
            <S.NewsletterButton type="submit">Eu quero!</S.NewsletterButton>
          </S.NewsletterFormWrapper>
        </S.NewsletterWrapper>
      ) : (
        <S.NewsletterWrapper>
          <S.NewsletterTitle small>
            Seu e-mail foi cadastrado com sucesso!
          </S.NewsletterTitle>
          <S.NewsletterSubTitle>
            A partir de agora você receberá as novidades e ofertas exclusivas.
          </S.NewsletterSubTitle>

          <S.NewsletterButton onClick={() => setNewForm(true)} big>
            Cadastrar novo e-mail
          </S.NewsletterButton>
        </S.NewsletterWrapper>
      )}
    </>
  );
};

export default Newsletter;
