import React, { memo } from 'react';
import { SnapList, SnapItem } from 'react-snaplist-carousel';
import useSWR from 'swr';

import CourseMainBox from '@components/courseMainBox';
import { CourseMainBoxskeleton } from '@skeletons';

const Carousal = () => {
  const { data } = useSWR('/api/courses');

  // const [cursor, setCoursor] = useState('grab');
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // const contaninerRef = useRef();

  // const onMouseDownHandler = (e) => {
  //   setCoursor('grabbing');

  //   setMousePos({ x: e.clientX, y: e.clientY });
  // };

  // const onMouseUpHandler = (e) => {
  //   setCoursor('grab');
  // };

  // const onMouseMoveHandler = (e) => {
  //   e.persist();

  //   console.log(e);

  //   // How far the mouse has been moved
  //   const dx = e.clientX - mousePos.x;

  //   // Scroll the element
  //   if (!contaninerRef.current) return;

  //   contaninerRef.current.scrollLeft = mousePos.x - dx;
  // };

  return (
    <SnapList direction="horizontal">
      {/* <CourseMainBoxskeleton /> */}
      {[...Array(6)].map((_, i) => {
        if (data) {
          return (
            <SnapItem
              key={i}
              margin={{ left: '15px', right: '15px' }}
              snapAlign="center"
            >
              <CourseMainBox key={i} {...data.data[0]} />
            </SnapItem>
          );
        } else {
          return (
            <SnapItem
              key={i}
              margin={{ left: '15px', right: '15px' }}
              snapAlign="center"
            >
              <CourseMainBoxskeleton />
            </SnapItem>
          );
        }
      })}

      {/* {courses.map((data, i) => (
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <CourseMainBox {...data} key={i} />
        </SnapItem>
      ))}

      {courses.map((data, i) => (
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <CourseMainBox {...data} key={i} />
        </SnapItem>
      ))}

      {courses.map((data, i) => (
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <CourseMainBox {...data} key={i} />
        </SnapItem>
      ))}

      {courses.map((data, i) => (
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <CourseMainBox {...data} key={i} />
        </SnapItem>
      ))}

      {courses.map((data, i) => (
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <CourseMainBox {...data} key={i} />
        </SnapItem>
      ))}

      {courses.map((data, i) => (
        <SnapItem margin={{ left: '15px', right: '15px' }} snapAlign="center">
          <CourseMainBox {...data} key={i} />
        </SnapItem>
      ))} */}
    </SnapList>
  );
};

/* 


    <Container py={8} px={0} width="100vw" maxW={'100%'}>
      <ChakraCarousel gap={32} ref={contaninerRef}>
        {courses.map((data, index) => (
          <CourseMainBox {...data} key={index} />
        ))}
      </ChakraCarousel>

       <Flex
        flexDirection="row"
        width="100%"
        overflowX="scroll"
        cursor={cursor}
        onMouse
        // onMouseDown={onMouseDownHandler}
        // onMouseUp={onMouseUpHandler}
        // onMouseMove={onMouseMoveHandler}
      > 
      <ScrollContainer
        style={{
          display: 'flex',
          width: '100%',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none', // For Firefox
          // '::-webkit-scrollbar': {
          //   display: 'none',
          // },
        }}
      >
        {courses.map((data, i) => (
          <CourseMainBox {...data} key={i} />
        ))}

        {courses.map((data, i) => (
          <CourseMainBox {...data} key={i} />
        ))}

        {courses.map((data, i) => (
          <CourseMainBox {...data} key={i} />
        ))}

        {courses.map((data, i) => (
          <CourseMainBox {...data} key={i} />
        ))}

        {courses.map((data, i) => (
          <CourseMainBox {...data} key={i} />
        ))}

        {courses.map((data, i) => (
          <CourseMainBox {...data} key={i} />
        ))}
      </ScrollContainer>
       </Flex> 
    </Container>




*/

export default memo(Carousal);
