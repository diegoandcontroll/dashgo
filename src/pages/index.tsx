import type { NextPage } from "next";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
type SignInDataType = {
  email: string;
  password: string;
};
const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});
const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;
  const handleSignIn: SubmitHandler<SignInDataType> = async (values, event) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(values);
  };
  return (
    <>
      <Head>
        <title>Dashgo | Login</title>
      </Head>
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          w="100%"
          maxW={360}
          bg="gray.800"
          p="8"
          rounded={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="4">
            <Input
              type="email"
              label="E-mail"
              {...register("email")}
              name="email"
              error={errors.email}
            />
            <Input
              type="password"
              label="Senha"
              error={errors.password}
              {...register("password")}
              name="password"
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
