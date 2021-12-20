import React, { FC, useEffect } from "react";
import { css } from "@emotion/react";
import useTheme from "@material-ui/core/styles/useTheme";
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  telephone: string;
  serviceType: string;
  textMessage: string;
}

const defaultValues: FormValues = {
  name: "",
  email: "",
  telephone: "",
  serviceType: "",
  textMessage: "",
};

export const ContactForm: FC = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        name: "",
        email: "",
        telephone: "",
        serviceType: "",
        textMessage: "",
      });
    }
  }, [isSubmitSuccessful, reset]);

  const theme = useTheme();
  const styles = {
    root: css`
      height: 450px;
      width: 994px;
      background-color: rgba(243, 222, 214, 0.85);
      ${theme.breakpoints.down("sm")} {
        width: 100%;
        height: 100%;
      }
    `,
    contentWrapper: css`
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `,
    inputWrapper: css`
      background-color: white;
      border-radius: 5px;
      padding: 5px;
      margin: 2px;
    `,
    selectWrapper: css`
      background-color: white;
      border-radius: 5px;
      padding: 5px;
      margin: 2px;
    `,
    formShort: css`
      background-color: #fff;
      border-radius: 5px;
    `,
    select: css`
      background-color: #fff;
      border-radius: 5px;
      text-align: left;
    `,
    formMessage: css`
      width: 100%;
      background: #ffffff;
      border-radius: 5px;
    `,
    btnSubmit: css`
      margin-top: 25px;
      border-radius: 5px;
      width: 150px;
      height: 48px;
      background: rgba(64, 34, 73, 0.6);
      color: #ffff;
      :hover {
        background-color: #ffff;
        transition: 0.7s;
        color: rgba(64, 34, 73, 0.8);
      }
      ${theme.breakpoints.up("md")} {
        min-width: 180px;
      }
      ${theme.breakpoints.down("sm")} {
        min-width: 180px;
        border-radius: 15px;
        margin-bottom: 25px;
      }
    `,
  };
  return (
    <div css={styles.root}>
      <Container
        component="form"
        maxWidth="md"
        css={styles.contentWrapper}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box css={styles.inputWrapper}>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    css={styles.formShort}
                    label="Imię"
                    spellCheck="false"
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
                name="name"
                control={control}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box css={styles.inputWrapper}>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    css={styles.formShort}
                    label="E-mail"
                    spellCheck="false"
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
                name="email"
                control={control}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box css={styles.inputWrapper}>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    css={styles.formShort}
                    label="Telefon"
                    spellCheck="false"
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
                name="telephone"
                control={control}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box css={styles.selectWrapper}>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    css={styles.select}
                    label="Usługa"
                    variant="outlined"
                    name="serviceType"
                    required
                    fullWidth
                  >
                    <MenuItem value={"Makijaż"}>Makijaż</MenuItem>
                    <MenuItem value={"Rzęsy/brwi"}>Rzęsy / Brwi</MenuItem>
                    <MenuItem value={"Szkolenia"}>Szkolenia</MenuItem>
                    <MenuItem value={"Inne"}>Inne</MenuItem>
                  </TextField>
                )}
                name="serviceType"
                control={control}
              />
            </Box>
          </Grid>
          <Grid item md={12} xs={12}>
            <Box css={styles.inputWrapper}>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    css={styles.formMessage}
                    label="Treść wiadomości"
                    multiline
                    rows={4}
                    spellCheck="false"
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
                name="textMessage"
                control={control}
              />
            </Box>
          </Grid>
        </Grid>
        <Button
          variant="outlined"
          css={styles.btnSubmit}
          color="secondary"
          type="submit"
        >
          Wyślij wiadomość
        </Button>
      </Container>
    </div>
  );
};
