import { css } from "@emotion/react";
import React from "react";
import { NavigationItem } from "./NavigationItem/NavigationItem";
import { routeList } from "./routeList";

export const NavigationItems = () => {
  const styles = {
    root: css`
      display: flex;
    `,
  };

  return (
    <>
      <div css={styles.root}>
        {routeList.map((nav) => {
          return (
            <NavigationItem key={nav.title} title={nav.title} href={nav.href} />
          );
        })}
      </div>
    </>
  );
};
