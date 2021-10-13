import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NotificationNumber from '@components/notificationNumber';
import NotificationIcon from '@components/notificationIcon';

import { NavButtonI } from '@lib/components';

const NavButton = ({
  icon,
  link,
  children,
  notifications,
  extended,
  mb,
  ...rest
}: NavButtonI) => {
  const router = useRouter();
  const isActive = router.pathname === link;

  return (
    <Link href={link}>
      <Button
        mb={mb}
        extended={extended ? 'true' : undefined}
        variant="nav"
        size="nav-button"
        _active={isActive}
        leftIcon={
          notifications && !extended ? (
            <NotificationIcon icon={icon} number={notifications} />
          ) : (
            icon
          )
        }
        {...rest}
      >
        {children}
        {notifications && extended ? (
          <NotificationNumber>{notifications}</NotificationNumber>
        ) : null}
      </Button>
    </Link>
  );
};

export default NavButton;
