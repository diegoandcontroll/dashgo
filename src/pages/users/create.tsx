import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Head from "next/head";
type CreateUsersData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};
const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});
const Create = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;
  const handleCreateUsers: SubmitHandler<CreateUsersData> = async (
    users: CreateUsersData
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(users);
  };
  return (
    <>
      <Head>
        <title>Dashgo | Users</title>
      </Head>
      <Box>
        <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />
          <Box
            flex="1"
            borderRadius={8}
            bg="gray.800"
            p="8"
            as="form"
            onSubmit={handleSubmit(handleCreateUsers)}
          >
            <Heading size="lg" fontWeight="normal">
              Criar usuário
            </Heading>
            <Divider my="6" borderColor="gray.700" />
            <VStack>
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input
                  type="text"
                  label="Nome completo"
                  {...register("name")}
                  name="name"
                  error={errors.name}
                />
                <Input
                  type="email"
                  label="E-mail"
                  {...register("email")}
                  name="email"
                  error={errors.email}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input
                  type="password"
                  label="Senha"
                  {...register("password")}
                  name="password"
                  error={errors.password}
                />
                <Input
                  type="password"
                  label="Confirmação da senha"
                  {...register("password_confirmation")}
                  name="password_confirmation"
                  error={errors.password_confirmation}
                />
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha">
                    Cancelar
                  </Button>
                </Link>
                <Button
                  colorScheme="pink"
                  type="submit"
                  isLoading={formState.isSubmitting}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
export default Create;
