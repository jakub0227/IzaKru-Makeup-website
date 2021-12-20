import { Slide, useScrollTrigger } from "@material-ui/core";
import React, { FC } from "react";

interface HideOnScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

export const HideOnScroll: FC<HideOnScrollProps> = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    target: window ? window() : undefined,
    threshold: 20,
  });

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    </>
  );
};
