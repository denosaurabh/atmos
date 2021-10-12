import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
  Button,
  CloseButton,
  Divider,
  Flex,
  Heading,
  Text,
  useToast,
  useColorMode,
  Checkbox,
} from '@chakra-ui/react';
import { Input } from '@components';

import { useAuth } from '@contexts/useAuth';

const SignUp = () => {
  const { signUpWithEmailAndPassword } = useAuth();

  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === 'dark') toggleColorMode();

  const toast = useToast();
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    isLoading: false,
    error: null,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setForm({ ...form, isLoading: true });

    const { name, email, password } = form;

    try {
      await signUpWithEmailAndPassword(name, email, password);

      setForm({ ...form, password: '' });
    } catch (err) {
      toast({
        position: 'top',
        title: 'Check check your Email and Password',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });

      setForm({ ...form, isLoading: false });
    } finally {
      router.push('/');
    }
  };

  return (
    <Flex
      backgroundImage="url(/assets/categories/design.webp)"
      backgroundSize="cover"
      width="100%"
      height="100vh"
      alignItems={{ base: 'flex-end', sl: 'center' }}
      justifyContent="center"
    >
      <Flex
        flexDirection="column"
        shadow="xl"
        backgroundColor="white"
        rounded="3xl"
        height={{ base: '90%', sl: '50rem' }}
        width={{ base: '100%', sl: '30rem' }}
        padding={{ base: 6, sl: 10 }}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Heading fontWeight="semibold">Sign Up</Heading>
          <Link href="/">
            <CloseButton size="lg" />
          </Link>
        </Flex>
        <Text display="flex" mt={6} mb={8} color="grey">
          Existing User?
          <Text
            as="span"
            ml={2}
            fontWeight="semibold"
            color="secondary-s-medium"
          >
            <Link href="/login">Log In</Link>
          </Text>
        </Text>

        <Flex
          as="form"
          flexDirection="column"
          height="100%"
          onSubmit={onFormSubmit}
        >
          <Flex flexDirection="column" mb="auto">
            <Input
              name="name"
              label="Your Full Name"
              type="name"
              placeHolder="Maggie Peter"
              padding={0}
              flexBasis="100%"
              mb={8}
              value={form.name}
              onChangeHandler={onChange}
            />

            <Input
              name="email"
              label="Your Email"
              type="email"
              placeHolder="maggie@gmail.com"
              padding={0}
              flexBasis="100%"
              mb={8}
              value={form.email}
              onChangeHandler={onChange}
            />
            <Input
              name="password"
              label="Your Password"
              type="password"
              placeHolder="*******"
              padding={0}
              flexBasis="100%"
              value={form.password}
              onChangeHandler={onChange}
            />
          </Flex>

          <Flex flexDirection="column">
            <Checkbox defaultIsChecked mb={4} mt="auto">
              You accept our use of Terms and conditions
            </Checkbox>

            <Button width="full" mb={5} type="submit">
              Sign Up
            </Button>

            <Divider colorScheme="grey" stroke="grey" />
            <Button width="full" variant="secondary" mt={5}>
              SignUp with Google
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;
