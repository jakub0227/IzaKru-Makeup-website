import { css } from "@emotion/react";
import { Paper, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useTheme } from "@material-ui/core/styles";
import { infoImages } from "../data";
import { AnimatedHeading } from "../components/AnimatedHeading/AnimatedHeading";

const AboutPage: FC = () => {
  const theme = useTheme();
  const styles = {
    root: css`
      display: flex;
      min-height: 100vh;
      width: 100%;
      ${theme.breakpoints.up("md")} {
        flex-direction: row;
      }
      ${theme.breakpoints.down("sm")} {
        flex-direction: column;
      }
    `,
    leftContent: css`
      background: #b9a0a7;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ${theme.breakpoints.up("md")} {
        width: 50%;
      }
      ${theme.breakpoints.down("sm")} {
        flex-direction: column;
        width: 100%;
      }
    `,
    title: css`
      color: #ffff;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 25px;
      ${theme.breakpoints.up("md")} {
        font-size: 48px;
        line-height: 58px;
        font-style: normal;
        font-weight: normal;
      }
      ${theme.breakpoints.down("sm")} {
        margin-top: 90px;
        font-size: 38px;
        line-height: 38px;
        font-style: normal;
        font-weight: normal;
        width: 100%;
      }
    `,
    line: css`
      justify-self: center;
      width: 320px;
      height: 0px;
      border: 3px solid #ffffff;
      background-color: #fff;
      margin-bottom: 20px;
    `,
    leftContentText: css`
      color: #fff;
      ${theme.breakpoints.up("md")} {
        width: 90%;
        padding: 15px;
      }
      ${theme.breakpoints.down("sm")} {
        margin-top: 25px;
        margin-bottom: 5px;
        line-height: 26px;
        max-width: 70%;
        letter-spacing: 0.01em;
        font-size: 1rem;
        text-align: justify;
      }
    `,
    rightContent: css`
      background: rgb(159, 157, 174, 0.9);
      display: flex;
      ${theme.breakpoints.up("md")} {
        width: 50%;
        flex-direction: row;
        flex-wrap: wrap;
      }
      ${theme.breakpoints.down("sm")} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `,
    gallery: css`
      margin: 20px;
      width: 100%;
      display: flex;
      flex-flow: row wrap;
      gap: 20px;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      ${theme.breakpoints.only("md")} {
        margin-top: 20%;
        flex-wrap: wrap;
        gap: 15px;
      }
    `,
    paper: css`
      margin: 5px;
      border: 3px solid #ffffff;
      border-radius: 10px;
      ${theme.breakpoints.up("md")} {
        width: 250px;
        height: 220px;
      }
      ${theme.breakpoints.down("sm")} {
        width: 327px;
        height: 280px;
      }
    `,
    image: css`
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    `,
  };
  return (
    <>
      <div css={styles.root}>
        <div css={styles.leftContent}>
          <AnimatedHeading>
            <Typography css={styles.title} variant="h2" id="back-to-top-anchor">
              O mnie
            </Typography>
            <div css={styles.line} />
          </AnimatedHeading>
          <Typography css={styles.leftContentText} align="left" variant="h6">
            Makija??em zajmuj?? si?? od 2009 roku. To moja wieloletnia pasja.
            Dzi??ki niej realizuj?? si?? i spe??niam zawodowo. Jestem estetk?? i
            perfekcjonistk??. Nieustannie rozwijam sw??j warsztat i talent.
            Inspiracje czerpi?? ze wszystkiego co mnie otacza, ale przede
            wszystkim inspiruj?? mnie ludzie. Ka??dego dnia ucz?? si?? czego??
            nowego, aby zapewni?? jak najwy??szy poziom moich us??ug.
          </Typography>
          <Typography css={styles.leftContentText} align="left" variant="h6">
            Zadowolenie klientki jest dla mnie najwa??niejsze, dlatego do ka??dej
            podchodz?? indywidualnie. W przemy??lany spos??b dobieram kosmetyki
            oraz makija??, tak aby ka??da z moich klientek czu??a si?? wyj??tkowo.
          </Typography>
          <Typography css={styles.leftContentText} align="left" variant="h6">
            Posiadam du??e do??wiadczenie w pracy, zar??wno z klientkami
            indywidualnymi jak i przy sesjach zdj??ciowych, produkcjach
            telewizyjnych, pokazach mody czy innych du??ych wydarzeniach.
          </Typography>
          <Typography css={styles.leftContentText} align="left" variant="h6">
            Wsp????pracowa??am r??wnie?? z wieloma markami kosmetycznymi, jako
            wiza??ysta: Smashbox, Korres, Art Deco, Pupa, Isa Dora, Revlon. W
            2014 roku podj????am wsp????prac?? z mark?? Urban Decay jako szkoleniowiec
            oraz National Makeup Artist.
          </Typography>
          <Typography css={styles.leftContentText} align="left" variant="h6">
            Obecnie realizuje si?? jako freelance Makeup Artist dla klientek z
            Warszawy i okolic. Zapraszam do zapoznania si?? z moj?? ofert?? us??ug
            oraz do kontaktu !
          </Typography>
        </div>
        <div css={styles.rightContent}>
          <div css={styles.gallery}>
            {infoImages.map((el) => (
              <Paper key={el.id} css={styles.paper} square elevation={6}>
                <img css={styles.image} src={el.src} alt={el.alt} />
              </Paper>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
