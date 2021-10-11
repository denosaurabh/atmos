// import React, { useState } from "react";
// import { Flex } from "@chakra-ui/react";
// import { CarousalItemI } from "@lib/carousel";

// export default function Item({
//   setTrackIsActive,
//   setActiveItem,
//   activeItem,
//   constraint,
//   itemWidth,
//   positions,
//   children,
//   index,
//   gap,
// }: CarousalItemI) {
//   const [userDidTab, setUserDidTab] = useState(false);

//   return (
//     <Flex
//       onFocus={() => {
//         setTrackIsActive(true);
//       }}
//       onBlur={() => {
//         userDidTab && index + 1 === positions.length && setTrackIsActive(false);
//         setUserDidTab(false);
//       }}
//       onKeyUp={(event) =>
//         event.keyCode === 9 &&
//         !(activeItem === positions.length - constraint) &&
//         setActiveItem(index)
//       }
//       onKeyDown={(event) => event.keyCode === 9 && setUserDidTab(true)}
//       w={`${itemWidth}px`}
//       _notLast={{
//         mr: `${gap}px`,
//       }}>
//       {children}
//     </Flex>
//   );
// }
