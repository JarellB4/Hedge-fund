import React, { useReducer, useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useClientContext } from "../utils/ClientState";
import { useContractorContext } from "../utils/ContractorState";
import { useContractorJobsContext } from "../utils/ContractorJobsState";
import { CURRENT_CLIENT } from "../utils/actions";
import { CURRENT_CONTRACTOR } from "../utils/actions";
import { CONTRACTOR_JOBS } from "../utils/actions";
import API from "../utils/API";

const SignIn = (props) => {
  const [clientState, clientDispatch] = useClientContext([]);
  const [contractorState, contractorDispatch] = useContractorContext([]);
  const [contractorJobsState, contractorJobsDispatch] =
    useContractorJobsContext([]);

    const emailRef = useRef();
    const passwordRef = useRef();
    let history = useHistory();

  function handleBtnClick() {
    API.getClientByEmail(emailRef.current.value)
      .then((res) => {
        clientDispatch({
          type: CURRENT_CLIENT,
          client: res.data,
        });
      })
      .catch((err) => console.log(err));

    API.clientLogin(emailRef.current.value, passwordRef.current.value)
    .then((res) => {
      clientDispatch({
        type: CURRENT_CLIENT,
        client: res.data,
      });
      API.getContractorJobs(res.data._id).then((result) => {
        contractorJobsDispatch({
          type: CONTRACTOR_JOBS,
          contractorJobs: result.data,
        });
      });
      contractorDispatch({
        type: CURRENT_CONTRACTOR,
        contractor: res.data,
      });
    })
    .catch((err) => console.log(err));


  //-----add validation of the forms
  history.push("./ClientMain");
}
  function handleContractorBtnClick() {
    API.getContractorByEmail(emailRef.current.value)
      .then((res) => {
        API.getContractorJobs(res.data._id).then((result) => {
          contractorJobsDispatch({
            type: CONTRACTOR_JOBS,
            contractorJobs: result.data,
          });
        });
        contractorDispatch({
          type: CURRENT_CONTRACTOR,
          contractor: res.data,
        });
      })
      .catch((err) => console.log(err));

    API.contractorLogin(emailRef.current.value, passwordRef.current.value)
    .then((res) => {
      API.getContractorJobs(res.data._id).then((result) => {
        contractorJobsDispatch({
          type: CONTRACTOR_JOBS,
          contractorJobs: result.data,
        });
      });
      contractorDispatch({
        type: CURRENT_CONTRACTOR,
        contractor: res.data,
      });
    })
    .catch((err) => console.log(err));
    
      //-----add validation of the form
    history.push("./ContractorQuotes");
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <br />
      <br />
      <br />

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                inputRef={emailRef}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                inputRef={passwordRef}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>

            <Button
              onClick={handleBtnClick}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Client Log in
            </Button>
            <Button
              onClick={handleContractorBtnClick}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Contractor Log in
            </Button>

            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  to="./ClientSignup"
                  className={
                    window.location.pathname === "/ClientSignup"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Don't have an account? Sign up as a Client
                </Link>
                <Link
                  to="./ContractorSignup"
                  className={
                    window.location.pathname === "/ContractorSignup"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Don't have an account? Sign up as a Contractor
                  <br />
                  <br />
                  <br />
                  <br />
                </Link>
              </Grid>
            </Grid>

          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
};
export default SignIn;
