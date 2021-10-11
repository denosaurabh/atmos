import { Menu, MenuButton, MenuList, Box, Image, Text } from '@chakra-ui/react';

const Categories = () => {
  return (
    <Menu isLazy>
      <MenuButton
        display={{ base: 'none', lg: 'unset' }}
        fontSize={['sm', 'base']}
        color="grey-s-dark"
      >
        Categories &nbsp; &nbsp; &darr;
      </MenuButton>
      <MenuList width="2xl" height="max-content" display="flex" flexWrap="wrap">
        {[
          {
            image: 'programming',
            title: 'Programming',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'business',
            title: 'Business',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'camera',
            title: 'Photography',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'design',
            title: 'Design',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'finance',
            title: 'Finance',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'health',
            title: 'Health',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'IT',
            title: 'IT & Software',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'lifestyle',
            title: 'Lifestyle',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'marketing',
            title: 'Marketing',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'music',
            title: 'Music',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'personal',
            title: 'Personal',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'productivity',
            title: 'Productivity',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
          {
            image: 'teaching',
            title: 'Teaching',
            description:
              'Learn how to do Game Development with popular programming languages.',
          },
        ].map(({ title, image }, i) => {
          const completeImgUrl = `/assets/categories/${image}.webp`;

          return (
            <Box
              textAlign="center"
              width={32}
              height={44}
              key={i}
              padding={4}
              marginBottom={5}
              cursor="pointer"
            >
              <Image
                height="80%"
                borderRadius="xl"
                objectFit="cover"
                marginBottom={4}
                src={completeImgUrl}
              />
              <Text>{title}</Text>
            </Box>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default Categories;
