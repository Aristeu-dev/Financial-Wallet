import React, { useCallback } from "react";
import { Container, Content, Background, AnimationContainer } from "./styles";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import logo from "../../assets/logo.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErros";
import { useRef } from "react";
import { FormHandles } from "@unform/core";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import { useToast } from "../../hooks/toast";

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}
const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório"),
          email: Yup.string()
            .email("Digite um e-mail válido")
            .required("E-mail obrigatório"),
          password: Yup.string().min(6, "No mínimo 6 dígitos"),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await api.post("/users", data);
        addToast({
          type: "sucess",
          title: "cadastro realizado com sucesso",
          description: "Vocẽ já pode fazer o seu login",
        });
        history.push("/");
      } catch (err) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          console.log(errors);
          formRef.current?.setErrors(errors);
          return;
        }
        addToast({
          type: "error",
          title: "cadastro não realizado",
          description: "Tente novamente mais tarde",
        });
      }
    },
    [addToast, history]
  );
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
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

            <Link to="/">
              <FiArrowLeft />
              Voltar
            </Link>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
