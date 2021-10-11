import { Wrap, Heading } from "@chakra-ui/react";
import { Hamburger } from "@components/icons";
import { SidebarHeaderI } from "@lib/components";

const Header = ({
  extended,
  breakpointForResSidebar,
  toggleExtended,
}: SidebarHeaderI) => {
  const onHamburgerClick = () => toggleExtended();

  return (
    <Wrap
      justify={extended ? "space-between" : "center"}
      visibility={{ base: "hidden", [breakpointForResSidebar[0]]: "visible" }}
      align="center"
      paddingY={4}
      marginBottom={8}>
      <Heading
        fontWeight="medium"
        fontSize="xl"
        width="auto"
        display={extended ? "unset" : "none"}>
        Course App
      </Heading>
      <Hamburger onClick={onHamburgerClick} _hover={{ cursor: "pointer" }} />
    </Wrap>
  );
};

export default Header;
