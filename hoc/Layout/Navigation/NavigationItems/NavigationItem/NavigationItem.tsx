import { css } from "@emotion/react";
import { Typography } from "@material-ui/core";
import Link from "next/link";
import React, { FC } from "react";
import { NavItemType } from "../../../../../types/NavItemType";

export const NavigationItem: FC<NavItemType> = (props) => {
  const styles = {
    root: css`
      margin: 0 60px;
      cursor: pointer;
      font-weight: 600;
      color: #ffffff;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      line-height: 28px;
      :hover {
        color: #402249bf;
        transition: 0.7s;
      }
      :active {
        background: #402249bf;
      }
    `,
  };

  return (
    <>
      <Link href={props.href}>
        <Typography variant="h6" css={styles.root}>
          {props.title}
        </Typography>
      </Link>
    </>
  );
};
