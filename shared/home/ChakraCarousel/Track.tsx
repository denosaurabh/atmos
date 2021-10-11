// import React, { useState, useRef, useCallback, useEffect } from "react";
// import { motion, useAnimation, useMotionValue } from "framer-motion";
// import { Flex, VStack, Progress } from "@chakra-ui/react";
// import Incrementer from "./Incrementer";
// import { percentage } from "@utils";
// import { CarousalTrackI } from "@lib/carousel";

// const MotionFlex = motion(Flex);

// const transitionProps = {
//   stiffness: 400,
//   type: "spring",
//   damping: 60,
//   mass: 3,
// };

// export default function Track({
//   setTrackIsActive,
//   trackIsActive,
//   setActiveItem,
//   activeItem,
//   constraint,
//   multiplier,
//   itemWidth,
//   positions,
//   children,
// }: CarousalTrackI) {
//   const [dragStartPosition, setDragStartPosition] = useState(0);
//   const controls = useAnimation();
//   const node = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0);

//   const incrementerProps = {
//     setActiveItem,
//     constraint,
//     activeItem,
//     positions,
//   };

//   const onDragStart = () => setDragStartPosition(positions[activeItem]);

//   const onDragEnd = (_, info) => {
//     const distance = info.offset.x;
//     const velocity = info.velocity.x * multiplier;
//     const direction = velocity < 0 || distance < 0 ? 1 : -1;

//     const extrapolatedPosition =
//       dragStartPosition +
//       (direction === 1
//         ? Math.min(velocity, distance)
//         : Math.max(velocity, distance));

//     const closestPosition = positions.reduce((prev, curr) => {
//       return Math.abs(curr - extrapolatedPosition) <
//         Math.abs(prev - extrapolatedPosition)
//         ? curr
//         : prev;
//     }, 0);

//     if (!(closestPosition < positions[positions.length - constraint])) {
//       setActiveItem(positions.indexOf(closestPosition));
//       controls.start({
//         x: closestPosition,
//         transition: {
//           velocity: info.velocity.x,
//           ...transitionProps,
//         },
//       });
//     } else {
//       setActiveItem(positions.length - constraint);
//       controls.start({
//         x: positions[positions.length - constraint],
//         transition: {
//           velocity: info.velocity.x,
//           ...transitionProps,
//         },
//       });
//     }
//   };

//   const handleResize = useCallback(
//     (_) => {
//       controls.start({
//         x: positions[activeItem],
//         transition: {
//           ...transitionProps,
//         },
//       });
//     },
//     [activeItem, controls, positions]
//   );

//   const handleClick = useCallback(
//     (event) => {
//       if (node.current?.contains(event.target)) {
//         setTrackIsActive(true);
//       } else setTrackIsActive(false);
//     },
//     [setTrackIsActive]
//   );

//   const handleKeyDown = useCallback(
//     (event) => {
//       if (trackIsActive) {
//         if (activeItem < positions.length - constraint) {
//           event.key === "ArrowRight" && setActiveItem((prev) => prev + 1);
//           event.key === "ArrowUp" && setActiveItem((prev) => prev + 1);
//         }

//         if (activeItem > positions.length - positions.length) {
//           event.key === "ArrowLeft" && setActiveItem((prev) => prev - 1);
//           event.key === "ArrowDown" && setActiveItem((prev) => prev - 1);
//         }
//       }
//     },
//     [trackIsActive, setActiveItem, activeItem, constraint, positions.length]
//   );

//   useEffect(() => {
//     handleResize(positions);

//     document.addEventListener("keydown", handleKeyDown);
//     document.addEventListener("mousedown", handleClick);
//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.removeEventListener("mousedown", handleClick);
//     };
//   }, [handleClick, handleResize, handleKeyDown, positions]);

//   return (
//     <>
//       {itemWidth && (
//         <VStack ref={node} spacing={5} alignItems="stretch">
//           <MotionFlex
//             dragConstraints={node}
//             onDragStart={onDragStart}
//             onDragEnd={onDragEnd}
//             animate={controls}
//             style={{ x }}
//             drag="x"
//             _active={{ cursor: "grabbing" }}
//             minWidth="min-content"
//             flexWrap="nowrap"
//             cursor="grab">
//             {children}
//           </MotionFlex>

//           <Progress
//             value={percentage(activeItem, positions.length - constraint)}
//             w={`${itemWidth / 2}px`}
//             alignSelf="center"
//             bg="blueGray.900"
//             h="1px"
//             mt={8}
//             sx={{
//               "> div": {
//                 backgroundColor: "gray.400",
//               },
//             }}
//           />

//           <Incrementer {...incrementerProps} />
//         </VStack>
//       )}
//     </>
//   );
// }
