import MenuTab from "@components/menuTab";
import { BreakpointsEnum } from "@lib/ui";

const TabsContent = () => {
  return (
    <MenuTab
      changeAt={BreakpointsEnum.sl}
      options={{
        Courses: <p>courses</p>,
        About: <p>About</p>,
        Reviews: <p>Reviews</p>,
        Commnunity: <p>Commnunity</p>,
      }}
    />
  );
};

export default TabsContent;
