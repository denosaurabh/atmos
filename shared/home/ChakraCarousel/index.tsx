// import React, { useEffect, useMemo, useCallback, useState } from "react";
// import { useTheme, useMediaQuery } from "@chakra-ui/react";
// import Slider from "./Slider";
// import Track from "./Track";
// import Item from "./Item";
// import { CarousalIndexI } from "@lib/carousel";

// export default function ChakraCarousel({ children, gap }: CarousalIndexI) {
//   const [trackIsActive, setTrackIsActive] = useState(false);
//   const [multiplier, setMultiplier] = useState(0.35);
//   const [sliderWidth, setSliderWidth] = useState(0);
//   const [activeItem, setActiveItem] = useState(0);
//   const [constraint, setConstraint] = useState(0);
//   const [itemWidth, setItemWidth] = useState(0);

//   const initSliderWidth = useCallback((width) => setSliderWidth(width), []);

//   const positions = useMemo(
//     () => children.map((_, index) => -Math.abs((itemWidth + gap) * index)),
//     [children, itemWidth, gap]
//   );

//   const { breakpoints } = useTheme();

//   const [isBetweenBaseAndSM] = useMediaQuery(
//     `(min-width: ${breakpoints.base}) and (max-width: ${breakpoints.sm})`
//   );

//   const [isBetweenSMAndSL] = useMediaQuery(
//     `(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.sl})`
//   );

//   const [isBetweenSLAndMD] = useMediaQuery(
//     `(min-width: ${breakpoints.sl}) and (max-width: ${breakpoints.md})`
//   );

//   const [isBetweenMdAndLG] = useMediaQuery(
//     `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`
//   );

//   const [isBetweenLGAndML] = useMediaQuery(
//     `(min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.ml})`
//   );

//   const [isBetweenMLAndXL] = useMediaQuery(
//     `(min-width: ${breakpoints.ml}) and (max-width: ${breakpoints.xl})`
//   );

//   const [isBetweenXLAndXXL] = useMediaQuery(
//     `(min-width: ${breakpoints.xl}) and (max-width: ${breakpoints.xxl})`
//   );

//   const [isGreaterThanXXL] = useMediaQuery(`(min-width: ${breakpoints.xl})`);

//   useEffect(() => {
//     /*
//     console.table({
//       isBetweenBaseAndSM,
//       isBetweenSMAndSL,
//       isBetweenSLAndMD,
//       isBetweenMdAndLG,
//       isBetweenLGAndML,
//       isBetweenMLAndXL,
//       isGreaterThanXL,
//     });
//     */

//     if (isBetweenBaseAndSM) {
//       setItemWidth(sliderWidth / 1.2 - gap);
//       setMultiplier(0.1); // 0.65
//       setConstraint(1);
//     }
//     if (isBetweenSMAndSL) {
//       setItemWidth(sliderWidth / 1.1 - gap);
//       setMultiplier(0.5);
//       setConstraint(2);
//     }
//     if (isBetweenSLAndMD) {
//       setItemWidth(sliderWidth / 1.1 - gap);
//       setMultiplier(0.35);
//       setConstraint(3);
//     }

//     if (isBetweenMdAndLG) {
//       setItemWidth(sliderWidth / 1.2 - gap);
//       setMultiplier(0.1); // 0.65
//       setConstraint(1);
//     }
//     if (isBetweenLGAndML) {
//       setItemWidth(sliderWidth / 1.4 - gap);
//       setMultiplier(0.5);
//       setConstraint(2);
//     }
//     if (isBetweenMLAndXL) {
//       setItemWidth(sliderWidth / 1.9 - gap);
//       setMultiplier(0.5);
//       setConstraint(2);
//     }

//     if (isBetweenXLAndXXL) {
//       setItemWidth(sliderWidth / 2.2 - gap);
//       setMultiplier(0.5);
//       setConstraint(2);
//     }

//     if (isGreaterThanXXL) {
//       setItemWidth(sliderWidth / 2.3 - gap);
//       setMultiplier(0.35);
//       setConstraint(3);
//     }
//   }, [
//     isBetweenBaseAndSM,
//     isBetweenSMAndSL,
//     isBetweenSLAndMD,
//     isBetweenMdAndLG,
//     isBetweenLGAndML,
//     isBetweenMLAndXL,
//     isBetweenXLAndXXL,
//     isGreaterThanXXL,
//     sliderWidth,
//     gap,
//   ]);

//   const sliderProps = {
//     initSliderWidth,
//     gap,
//   };

//   const trackProps = {
//     setTrackIsActive,
//     trackIsActive,
//     setActiveItem,
//     sliderWidth,
//     activeItem,
//     constraint,
//     multiplier,
//     itemWidth,
//     positions,
//     gap,
//   };

//   const itemProps = {
//     setTrackIsActive,
//     trackIsActive,
//     setActiveItem,
//     activeItem,
//     constraint,
//     itemWidth,
//     positions,
//     gap,
//   };

//   return (
//     <Slider {...sliderProps}>
//       <Track {...trackProps}>
//         {children.map((child, index) => {
//           return (
//             <Item {...itemProps} index={index} key={index}>
//               {child}
//             </Item>
//           );
//         })}
//       </Track>
//     </Slider>
//   );
// }
