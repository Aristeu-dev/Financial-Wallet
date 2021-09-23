import React from "react";
import { Container, Content, Background } from "./styles";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import logo from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";

const SignUp: React.FC = () => {
  function handleSubmit(data: Object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça o seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>

          <a href="">
            <FiArrowLeft />
            Voltar
          </a>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
