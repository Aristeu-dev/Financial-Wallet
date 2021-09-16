import React from "react";
import { Container, Content, Background } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import logo from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />
      <form>
        <h1>Faça o seu login</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
        <a href="">
          <FiLogIn />
          Criar conta
        </a>
      </form>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
