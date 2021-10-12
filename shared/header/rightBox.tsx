import { RefObject, useRef, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@supabase/client';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Wrap,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';

import Message from '@icons/message';
import Bell from '@icons/bell';
import Profile from '@icons/profile';
import Video from '@icons/video';
import Logout from '@icons/logout';
import Settings from '@icons/settings';

import { useAuth } from '@contexts/useAuth';

const RightBox: React.FC = () => {
  const { user } = useAuth();

  return (
    <Wrap
      spacing={{ base: 6, lg: 6, ml: 8 }}
      marginLeft="auto"
      justify="space-between"
      align="center"
      width="max-content"
      fill="grey-s-darkest"
    >
      <Text
        fontSize="sm"
        fontWeight="light"
        display={{ base: 'none', ml: 'unset' }}
      >
        Become an Instructor
      </Text>

      {!user ? (
        <Link href="/login">
          <Button size="sm">Sign Up / Log In</Button>
        </Link>
      ) : (
        <>
          <Message />
          <BellMenu />

          <AvatarMenu avatar={user.avatar} />
        </>
      )}
    </Wrap>
  );
};

const BellMenu = () => {
  return (
    <Menu size="md">
      <MenuButton>
        <Bell />
      </MenuButton>
      <MenuList>
        <Text fontWeight="medium" paddingLeft={4} marginBottom={4}>
          Recent Notifications
        </Text>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Courses</MenuItem>
        <MenuItem>Inbox</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

const AvatarMenu = ({ avatar }: { avatar: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef: RefObject<any> = useRef();

  const onLogOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch {
      console.log('error signing out!');
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Menu variant="profile" isLazy>
        <MenuButton cursor="pointer">
          <Avatar
            src={avatar || '/assets/avatars/human.png'}
            userSelect="none"
          />
        </MenuButton>
        <MenuList>
          <Link href="/">
            <MenuItem>
              <Profile />
              Profile
            </MenuItem>
          </Link>
          <Link href="/mycourses">
            <MenuItem>
              <Video /> My Courses
            </MenuItem>
          </Link>

          <Link href="/inbox">
            <MenuItem>
              <Message />
              Inbox
            </MenuItem>
          </Link>

          <Link href="/settings">
            <MenuItem>
              <Settings /> Settings
            </MenuItem>
          </Link>

          <MenuItem
            color="accent02-s-dark"
            _hover={{ color: 'accent02-s-dark' }}
            onClick={() => setIsOpen(true)}
          >
            <Logout />
            Logout
          </MenuItem>
        </MenuList>
      </Menu>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent rounded="2xl" p="2">
            <AlertDialogHeader fontSize="2xl" fontWeight="semibold">
              Logout Confirm
            </AlertDialogHeader>
            <AlertDialogBody>Are you sure to Logout?</AlertDialogBody>
            <AlertDialogFooter mt={6}>
              <Button variant="light" ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                backgroundColor="accent02-s-dark"
                onClick={onLogOut}
                ml={3}
              >
                Logout
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default RightBox;
