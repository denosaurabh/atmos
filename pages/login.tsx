import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Button,
  CloseButton,
  Divider,
  Flex,
  Heading,
  Text,
  useToast,
  useColorMode,
} from '@chakra-ui/react';
import Input from '@components/input';
import { supabase } from '@supabase/client';
import { useAuth } from '@contexts/useAuth';

const Login = () => {
  const { signinWithGoogle } = useAuth();

  const { colorMode, toggleColorMode } = useColorMode();
  if (colorMode === 'dark') toggleColorMode();

  const toast = useToast();
  const router = useRouter();

  const [form, setForm] = useState({
    email: '',
    password: '',
    isLoading: false,
    error: null,
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setForm({ ...form, isLoading: true });

    const { email, password } = form;

    try {
      const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        console.log(error);
      }

      console.log(user, session, error);
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

  const onGoogleSignInClick = async () => {
    try {
      // await supabase.auth.signIn({ provider: 'google' });
      await signinWithGoogle();
    } catch (err) {
      toast({
        position: 'top',
        title: 'Something went wrong please try again later!',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      color="grey"
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
        height={{ base: '90%', sl: '45rem' }}
        width={{ base: '100%', sl: '30rem' }}
        padding={{ base: 6, sl: 10 }}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Heading fontWeight="semibold" color="grey-s-darkest">
            Log In
          </Heading>
          <Link href="/">
            <CloseButton size="lg" />
          </Link>
        </Flex>
        <Text display="flex" mt={6} mb={8} color="grey">
          New User?
          <Text
            as="span"
            ml={2}
            fontWeight="semibold"
            color="secondary-s-medium"
          >
            <Link href="/signup">Sign Up</Link>
          </Text>
        </Text>

        <form
          onSubmit={onFormSubmit}
          style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <Flex flexDirection="column">
            <Input
              name="email"
              label="Your Email"
              type="email"
              placeHolder="maggie@gmail.com"
              padding={0}
              flexBasis="100%"
              mb={8}
              required
              onChangeHandler={onChange}
              value={form.email}
            />
            <Input
              name="password"
              label="Your Password"
              type="password"
              placeHolder="*******"
              padding={0}
              flexBasis="100%"
              required
              onChangeHandler={onChange}
              value={form.password}
            />
          </Flex>

          <Flex flexDirection="column" mt="auto">
            <Button
              type="submit"
              width="full"
              mb={5}
              isLoading={form.isLoading}
            >
              Log In
            </Button>
            <Divider colorScheme="grey" stroke="grey" />
            <Button
              width="full"
              variant="secondary"
              mt={5}
              onClick={onGoogleSignInClick}
            >
              SignIn with Google
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default Login;
