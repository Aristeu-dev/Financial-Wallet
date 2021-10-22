import React, { useRef, useCallback, useContext } from "react";
import { Container, Content, AnimationContainer, Background } from "./styles";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import logo from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErros";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import { Link, useHistory } from "react-router-dom";
interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();
  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .email("Digite um e-mail válido")
            .required("E-mail obrigatório"),
          password: Yup.string().required("A senha é obrigatória"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({ email: data.email, password: data.password });
        history.push("./dashboard");
      } catch (err) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: "error",
          title: "Erro na autenticação",
          description:
            "Ocorreu um erro na autenticação, cheque os dados de acesso!",
        });
      }
    },
    [signIn, addToast, history]
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
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
            <Link to="./signup">
              <FiLogIn />
              Criar conta
            </Link>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
