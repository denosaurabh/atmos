import { Wrap, Flex, Text, Image, Avatar } from '@chakra-ui/react';

import {
  Home,
  Star,
  Video,
  Bag,
  Chat,
  Settings,
  Message,
  ChatFill,
  Folder,
  List,
  Bookmark,
  Trending,
} from '@components/icons';

import { NavButton } from '@components';
import {
  FeedsSectionI,
  SidebarExtended,
  SidebarSectionsContainerI,
} from '@lib/components';

const SectionsContainer = ({ title, children }: SidebarSectionsContainerI) => {
  return (
    <Wrap flexDirection="column" marginBottom={8}>
      <Text
        as="span"
        marginLeft="2"
        color="grey-o-dark"
        fontWeight="medium"
        fontSize="xs"
        paddingLeft={2}
        paddingBottom={3}
        isTruncated
      >
        {title}
      </Text>
      {children}
    </Wrap>
  );
};

export const FeedsSection = ({ extended, isUser, user }: FeedsSectionI) => {
  return (
    <SectionsContainer title="Feeds">
      <NavButton extended={extended} link="/" icon={<Home />}>
        New Courses
      </NavButton>
      <NavButton extended={extended} link="/trending" icon={<Trending />}>
        Trending
      </NavButton>

      {isUser ? (
        <>
          <NavButton extended={extended} link="/mycourses" icon={<Video />}>
            Your Courses
          </NavButton>
          <NavButton
            extended={extended}
            link="/wishlist"
            icon={<Star />}
            notifications={user?.wishlist?.length}
          >
            Your Wishlist
          </NavButton>
          <NavButton
            extended={extended}
            link="/cart"
            icon={<Bag />}
            notifications={2}
          >
            Shopping Cart
          </NavButton>
        </>
      ) : null}
    </SectionsContainer>
  );
};

export const InsightsSection = ({ extended }: SidebarExtended) => {
  return (
    <SectionsContainer title="Insights">
      <NavButton
        extended={extended}
        link="/chat"
        icon={<Chat />}
        notifications={4}
      >
        Chat
      </NavButton>
      <NavButton extended={extended} link="/inbox" icon={<Message />}>
        Inbox
      </NavButton>
      <NavButton extended={extended} link="/settings" icon={<Settings />}>
        Settings
      </NavButton>
    </SectionsContainer>
  );
};

export const TopInstructorsSection = ({ extended }: SidebarExtended) => {
  return (
    <SectionsContainer title="Top Instuctors">
      <NavButton
        extended={extended}
        link="/instructor/1"
        icon={<Avatar size="xs" src="/assets/avatars/human.png" />}
      >
        Dylan Hodges
      </NavButton>
      <NavButton
        extended={extended}
        link="/instructor/2"
        icon={<Avatar size="xs" src="/assets/avatars/human.png" />}
      >
        Vincent Parks
      </NavButton>
      <NavButton
        extended={extended}
        link="/instructor/3"
        icon={<Avatar size="xs" src="/assets/avatars/human.png" />}
      >
        Richard Bowers
      </NavButton>
      <NavButton
        extended={extended}
        link="/instructor/4"
        icon={<Avatar size="xs" src="/assets/avatars/human.png" />}
      >
        Isaac Lambert
      </NavButton>
      <NavButton
        extended={extended}
        link="/instructor/5"
        icon={<Avatar size="xs" src="/assets/avatars/human.png" />}
      >
        Lillie Nash
      </NavButton>
      <NavButton
        extended={extended}
        link="/instructor/6"
        icon={<Avatar size="xs" src="/assets/avatars/human.png" />}
      >
        Edith Cain
      </NavButton>
    </SectionsContainer>
  );
};

export const CourseLearningSection = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Image
        marginTop={6}
        marginBottom={12}
        width="3rem"
        rounded="full"
        src="/assets/avatars/human.png"
      />

      <NavButton
        mb={3}
        extended={false}
        link="/course/[uid]/learning/lecture/[id]"
        icon={<Video />}
      />
      <NavButton
        mb={3}
        extended={false}
        link="/course/1/learning/bookmarks"
        icon={<Bookmark />}
      />
      <NavButton
        mb={3}
        extended={false}
        link="/course/1/learning/qa"
        icon={<ChatFill />}
        notifications={4}
      />
      <NavButton
        mb={3}
        extended={false}
        link="/course/1/learning/community"
        icon={<Folder />}
      />
      <NavButton
        mb={3}
        extended={false}
        link="/course/1/learning/resources"
        icon={<List />}
      />
    </Flex>
  );
};