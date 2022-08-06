import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImEye } from "react-icons/im";
import { Container, FormMain, LinkForm } from "./style";
export const FormLogin = () => {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormMain onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

      <label htmlFor="email">Email</label>
      <input placeholder="Email" {...register("email")} />

      <label htmlFor="password">Senha</label>

      <Container>
        <input
          placeholder="Senha"
          type={showPassword ? "password" : "text"}
          {...register("password")}
        />
        <ImEye
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        />
      </Container>

      <button type="submit">Entrar</button>

      <div>
        <p>Ainda não possui uma conta?</p>
        <LinkForm to={"/register"}>Cadastre-se</LinkForm>
      </div>
    </FormMain>
  );
};

export const FormRegister = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormMain onSubmit={handleSubmit(onSubmit)}>
      <h1>Crie sua conta</h1>
      <p>Rapido e grátis, vamos nessa</p>

      <label htmlFor="name">Nome</label>
      <input placeholder="digite aqui seu nome" {...register("nome")} />

      <label htmlFor="email">Email</label>
      <input placeholder="digite aqui seu email" {...register("email")} />

      <label htmlFor="password">Senha</label>
      <input
        placeholder="Digite aqui sua senha"
        type="password"
        {...register("password")}
      />

      <label htmlFor="passwordConfirm">Confirmar Senha</label>
      <input
        type="password"
        placeholder="Confirme sua senha"
        {...register("passwordConfirm")}
      />

      <label htmlFor="bio">Bio</label>
      <input placeholder="Fale sobre você" {...register("bio")} />

      <label htmlFor="contact">Contato</label>
      <input placeholder="Opções de contato" {...register("contact")} />

      <label htmlFor="module">Selecionar módulo</label>
      <select name="module" id="module" {...register("module")}>
        <option value="1">Primeiro Módulo</option>
        <option value="2">Segundo Módulo</option>
        <option value="3">Terceiro Módulo</option>
        <option value="4">Quarto Módulo</option>
        <option value="5">Quinto Módulo</option>
        <option value="6">Sexto Módulo</option>
      </select>

      <button type="submit">Cadastrar</button>
    </FormMain>
  );
};
