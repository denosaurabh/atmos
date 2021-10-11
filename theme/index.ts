import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import colors from "@theme/foundations/colors";
import fonts from "@theme/foundations/fonts";
import breakpoints from "@theme/foundations/breakpoints";

import Heading from "@theme/components/heading";
import Button from "@theme/components/button";
import Menu from "@theme/components/menu";
import Tag from "@theme/components/tag";
import Select from "@theme/components/select";
import Input from "@theme/components/input";
import Accordion from "@theme/components/accordion";
import Tabs from "@theme/components/tabs";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  colors,
  fonts,
  breakpoints,
  config,
  components: {
    Heading,
    Button,
    Menu,
    Tag,
    Select,
    Input,
    Accordion,
    Tabs,
  },
};

const newTheme = extendTheme(overrides);

export default newTheme;
