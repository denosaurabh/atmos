import { Flex } from "@chakra-ui/react";
import { Category } from "@components";
import { CategoryI } from "@lib/components";

const Categories = () => {
  return (
    <Flex direction="column">
      {[
        {
          image: "programming",
          title: "Programming",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "business",
          title: "Business",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "camera",
          title: "Photography",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "design",
          title: "Design",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "finance",
          title: "Finance",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "health",
          title: "Health",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "IT",
          title: "IT & Software",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "lifestyle",
          title: "Lifestyle",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "marketing",
          title: "Marketing",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "music",
          title: "Music",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "personal",
          title: "Personal",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "productivity",
          title: "Productivity",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
        {
          image: "teaching",
          title: "Teaching",
          description:
            "Learn how to do Game Development with popular programming languages.",
        },
      ]
        .slice(1, 6)
        .map(({ title, image, description }: CategoryI, i) => {
          const completeImgUrl = `/assets/categories/${image}.webp`;

          return (
            <Category
              title={title}
              image={completeImgUrl}
              description={description}
              key={i}
            />
          );
        })}
    </Flex>
  );
};

export default Categories;
