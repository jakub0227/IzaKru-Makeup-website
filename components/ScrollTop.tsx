import { css } from "@emotion/react";
import { useScrollTrigger, Zoom } from "@material-ui/core";
import React, { FC } from "react";

interface ScrollTopProps {
  window?: () => Window;
  children: React.ReactElement;
}

export const ScrollTop: FC<ScrollTopProps> = (props) => {
  const styles = {
    root: css`
      position: flex-end;
      margin: 15px;
    `,
  };

  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <>
      <Zoom in={trigger}>
        <div onClick={handleClick} css={styles.root}>
          {children}
        </div>
      </Zoom>
    </>
  );
};
