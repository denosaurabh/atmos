import { forwardRef, RefObject } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import { FocusableElement } from '@chakra-ui/utils';

import RightContent from '@shared/course/learning/lecture/rightContent';

const ContentDrawer = forwardRef<
  RefObject<FocusableElement> | undefined,
  { isOpen: any; onClose: any }
>(({ isOpen, onClose }, btnRef) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontFamily="body" fontSize="2xl" fontWeight="medium">
            Content
          </DrawerHeader>

          <DrawerBody>
            <RightContent />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="light" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});

ContentDrawer.displayName = 'Content Drawer';

export default ContentDrawer;
