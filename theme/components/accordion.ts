const Accordion = {
  parts: ["container", "button", "panel", "icon"],
  baseStyle: ({ colorMode }) => ({
    container: {
      border: "none",
    },
    button: {
      rounded: "xl",
      px: 6,
      py: 5,
      backgroundColor: colorMode === "light" ? "grey-s-light" : "white-100",
      mb: 4,
    },
    panel: {
      display: "flex",
      justifyContent: "space-between",
      px: 4,
      py: 5,
      borderBottomWidth: "1px",
      cursor: "pointer",
    },
  }),
};

export default Accordion;
