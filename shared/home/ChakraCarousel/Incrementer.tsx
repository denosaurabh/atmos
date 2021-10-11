// import React from "react";
// import { IconButton, HStack, Tooltip } from "@chakra-ui/react";
// import { LeftArrow, RightArrow, Drag } from "@components/icons";
// import { CarousalIncrementerI } from "@lib/carousel";

// export default function Incrementer({
//   setActiveItem,
//   activeItem,
//   constraint,
//   positions,
// }: CarousalIncrementerI) {
//   return (
//     <HStack p={1} alignSelf="center">
//       <IconButton
//         aria-label="Switch to Left Course"
//         onClick={() =>
//           !(activeItem === positions.length - positions.length) &&
//           setActiveItem((prev: number) => prev - 1)
//         }
//         variant="solid"
//         icon={
//           <LeftArrow
//             _hover={{
//               cursor: "pointer",
//             }}
//           />
//         }></IconButton>

//       <Tooltip
//         letterSpacing="wide"
//         label="Drag above"
//         bg="blueGray.d100"
//         placement="top"
//         fontSize="xs"
//         hasArrow>
//         <Drag boxSize={3} />
//       </Tooltip>

//       <IconButton
//         aria-label="Switch to Right Course"
//         onClick={() =>
//           !(activeItem === positions.length - constraint) &&
//           setActiveItem((prev: number): number => prev + 1)
//         }
//         variant="solid"
//         icon={<RightArrow />}
//       />
//     </HStack>
//   );
// }
