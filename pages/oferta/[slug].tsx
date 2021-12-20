import { css } from "@emotion/react";
import { Typography } from "@material-ui/core";
import { GetStaticPaths } from "next";
import { useTheme } from "@material-ui/core/styles";
import React, { FC } from "react";
import { OfferCardType } from "../../types/OfferCardType";
import { dataOffers } from "../../data";

interface OfferCardProps {
  foundOffer: OfferCardType;
}

const ProjectDetails: FC<OfferCardProps> = (props) => {
  const theme = useTheme();
  const styles = {
    root: css`
      position: relative;
      overflow: hidden;
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      background: #9f9dae;
    `,
    heading: css`
      background-clip: content-box;
    `,
    title: css`
      position: absolute;
      color: #fff;
      text-transform: uppercase;
      ${theme.breakpoints.up("md")} {
        left: 50px;
        top: 25%;
        font-weight: 500;
        font-size: 3.95rem;
      }
      ${theme.breakpoints.down("sm")} {
        left: 25px;
        top: 15%;
        font-weight: 400;
        max-width: 20ch;
        font-size: 2.5rem;
        text-align: center;
      }
    `,
    content: css`
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
    `,
    image: css`
      ${theme.breakpoints.up("md")} {
        opacity: 70%;
        width: 100%;
        height: 470px;
        object-fit: cover;
        mix-blend-mode: soft-light;
      }

      ${theme.breakpoints.down("sm")} {
        opacity: 70%;
        width: 100%;
        height: 270px;
        object-fit: cover;
      }
    `,
    description: css`
      ${theme.breakpoints.up("md")} {
        margin-top: 50px;
        font-weight: 400;
        font-size: 1.2rem;
        max-width: 64ch;
      }
      ${theme.breakpoints.down("sm")} {
        font-weight: 400;
        font-size: 1.2rem;
        max-width: 38ch;
        margin: 15px;
        text-align: justify;
      }
    `,
  };

  return (
    <>
      <div css={styles.root}>
        <div css={styles.heading}>
          <img
            css={styles.image}
            src={props.foundOffer.image}
            alt={props.foundOffer.title}
          />
          <Typography
            css={styles.title}
            align="center"
            variant="h3"
            id="back-to-top-anchor"
          >
            {props.foundOffer.title}
          </Typography>
        </div>
        <div css={styles.content}>
          <Typography css={styles.description} variant="h6">
            {props.foundOffer.description}
          </Typography>
          <Typography variant="h4">Cennik</Typography>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = dataOffers.map((p) => ({ params: { slug: p.slug } }));
  return {
    paths,
    fallback: false,
  };
};

type Params = {
  params: { slug: string };
};

export const getStaticProps = async ({ params }: Params) => {
  const slug = params.slug;
  const data = dataOffers.find((p) => p.slug === slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      foundOffer: data,
    },
  };
};

export default ProjectDetails;
