import React, { FC, useState } from "react";
import { Backdrop, Icon } from "@material-ui/core";
import { routeList } from "../NavigationItems/routeList";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/lab";
import { useRouter } from "next/dist/client/router";
import { css } from "@emotion/react";

export const MobileMenu: FC = () => {
  const styles = {
    root: css`
      position: absolute;
      top: 10px;
      left: 15px;
      .MuiSpeedDial-fab {
        background: rgb(159, 157, 174, 0.9);
        color: white;
        border-radius: 15px;
      }
      .MuiSpeedDialAction-staticTooltipLabel {
        width: 125px;
        text-align: center;
        font-weight: 400;
        letter-spacing: 0.07rem;
        border-radius: 5px;
        background-color: rgb(159, 157, 174, 0.9);
        color: white;
        text-transform: uppercase;
      }
    `,
    navDial: css`
      border-radius: 15px;
      margin: 12px 0;
      color: #ffff;
      background-color: rgba(147, 132, 151, 0.9);
    `,
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const router = useRouter();
  return (
    <>
      <Backdrop open={open} transitionDuration={750} />
      <SpeedDial
        css={styles.root}
        ariaLabel="Mobile Menu"
        icon={
          <SpeedDialIcon
            icon={<Icon>menu</Icon>}
            openIcon={<Icon>close</Icon>}
          />
        }
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction="down"
        transitionDuration={750}
      >
        <SpeedDialAction
          css={styles.navDial}
          icon={<Icon color="inherit">home</Icon>}
          onClick={() => router.push("/")}
          tooltipTitle="Start"
          tooltipPlacement="right"
          tooltipOpen
        />
        {routeList.map((el) => (
          <SpeedDialAction
            css={styles.navDial}
            key={el.href}
            onClick={() => router.push(`${el.href}`)}
            icon={<Icon>{el.icon}</Icon>}
            tooltipTitle={el.title}
            tooltipPlacement="right"
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </>
  );
};

// almost ready - test with other mobile page layouts
