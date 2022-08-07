import * as yup from "yup";

export let schemaRegister = yup.object({
  name: yup.string().required("obrigatório"),
  email: yup.string().email("email inválido").required("obrigatório"),
  password: yup
    .string()
    .matches(/[A-Z]/, "falta 1 letra maiúscula")
    .matches(/([a-z])/, "falta 1 letra minúscula")
    .matches(/\d/, "falta 1 número")
    .matches(/\W/, "falta 1 caracter especial")
    .min(8, "minimo de 8 caracteres"),
  passwordConfirm: yup.string().oneOf([yup.ref("password")], "senha diferente"),
  bio: yup.string().required("obrigatório"),
  contact: yup.string().required("obrigatório"),
});

export let schemaLogin = yup.object({
  email: yup.string().email("email inválido").required("obrigatório"),
  password: yup.string().required("obrigatório"),
});
