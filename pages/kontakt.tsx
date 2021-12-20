import { css } from "@emotion/react";
import React, { FC } from "react";
import useTheme from "@material-ui/core/styles/useTheme";
import { Typography } from "@material-ui/core";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { contactPageData } from "../data";
import { Contact } from "../types/ContactType";

const ContactPage: FC = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      background-image: url("https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
      background-size: cover;
      justify-content: center;
      ${theme.breakpoints.up("md")} {
        align-items: center;
        overflow-y: hidden;
      }
      ${theme.breakpoints.down("sm")} {
        text-align: center;
        background-position: center;
      }
    `,
    contentContainer: css`
      color: #fff;
      margin-top: 79px;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      ${theme.breakpoints.up("md")} {
        flex-direction: row;
        justify-content: center;
        height: 400px;
        width: 994px;
        background-color: rgba(185, 160, 167, 0.85);
      }
      ${theme.breakpoints.down("sm")} {
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 35%;
        background-color: rgba(185, 160, 167, 0.45);
      }
    `,
    wrapperLeft: css`
      width: 100%;
      display: flex;
      ${theme.breakpoints.up("md")} {
        flex-direction: column;
      }
      ${theme.breakpoints.down("sm")} {
        flex-direction: column;
        justify-items: center;
        align-items: center;
      }
    `,
    infoMainTxt: css`
      margin-left: 45px;
      flex-grow: 1;
      font-style: normal;
      font-weight: bold;
      font-size: 76px;
      line-height: 100px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      width: 6ch;
      ${theme.breakpoints.down("sm")} {
        font-size: 56px;
        line-height: 95px;
        margin: 0 auto;
      }
    `,
    vertical: css`
      flex-grow: 1;
      width: 100%;
      height: 0px;
      border: 6px solid #ffffff;
      background-color: #fff;
      transform: rotate(90deg);
      ${theme.breakpoints.down("sm")} {
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
        width: 350px;
        height: 0px;
        border: 3px solid #ffffff;
        background-color: #fff;
        transform: rotate(0deg);
      }
    `,
    wrapperRight: css`
      flex-grow: 1;
      width: 100%;
      height: 303.11px;
      font-size: 36px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      ${theme.breakpoints.down("sm")} {
        margin: 0 auto;
      }
    `,
    contactTitle: css`
      margin: 10px 0;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      ${theme.breakpoints.down("sm")} {
        margin: 0 auto;
        font-size: 26px;
        line-height: 30px;
      }
    `,
  };
  return (
    <>
      <div css={styles.root}>
        <div css={styles.contentContainer}>
          <div css={styles.wrapperLeft}>
            <Typography
              css={styles.infoMainTxt}
              variant="h1"
              id="back-to-top-anchor"
            >
              Napisz do mnie
            </Typography>
          </div>
          <div css={styles.vertical} />
          <div css={styles.wrapperRight}>
            {contactPageData.map((el: Contact) => (
              <div key={el.id}>
                <Typography variant="h3" css={styles.contactTitle}>
                  {el.title}
                </Typography>
                <Typography variant="h5">{el.details}</Typography>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactPage;
