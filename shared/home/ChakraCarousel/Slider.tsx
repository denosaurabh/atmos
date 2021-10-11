// import React, { useEffect } from 'react';
// import { useBoundingRect } from '../hooks';
// import { Box } from '@chakra-ui/react';
// import { CarousalSliderI } from '@lib/carousel';
// import { RectDimensionsI } from '@lib/hooks';

// export default function Slider({
//   children,
//   initSliderWidth,
//   gap,
// }: CarousalSliderI) {
//   const [ref, { width }]: [
//     React.LegacyRef<HTMLDivElement> | undefined,
//     RectDimensionsI,
//     HTMLElement | null
//   ] = useBoundingRect();

//   useEffect(() => initSliderWidth(Math.round(width)), [width, initSliderWidth]);

//   return (
//     <Box
//       ref={ref}
//       overflow="hidden"
//       position="relative"
//       px={`${gap / 2}px`}
//       _before={{
//         content: "''",
//         position: 'absolute',
//         zIndex: 1,
//         top: 0,
//         left: 0,
//         h: '100%',
//         w: `${gap / 2}px`,
//         bgGradient: 'linear(to-r, blueGray.d400, transparent)',
//       }}
//       _after={{
//         content: "''",
//         position: 'absolute',
//         zIndex: 1,
//         top: 0,
//         right: 0,
//         h: '100%',
//         w: `${gap / 2}px`,
//         bgGradient: 'linear(to-l, blueGray.d400, transparent)',
//       }}
//     >
//       {children}
//     </Box>
//   );
// }
