import { Box } from "@material-ui/core";
import React, { FC } from "react";

interface TabGalleryCategoryProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabGalleryCategory: FC<TabGalleryCategoryProps> = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <>
      <div
        role="galleryContent"
        hidden={value !== index}
        id={`gallery-content-${index}`}
        aria-labelledby={`gallery-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={2}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    </>
  );
};
