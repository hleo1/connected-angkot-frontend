import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Component } from "react";

const styles = {
  paperStyle: { padding: 20, height: "70vh", width: 280, margin: "20px auto" },
  avatarStyle: { backgroundColor: "#1bbd7e" },
  btnstyle: { margin: "8px 0" },
};


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      
    };
  }
  

  updateEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  updatePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.props
      .login_func(this.state.email, this.state.password)
      .then(function (response) {
        // console.log("succeeded");
        localStorage.setItem("BearerToken", response.data.token);
        window.history.push("/homepage");
        
      })
      .catch(function (error) {
        // console.log("Oh no");
        //   console.log(error);
      });
  };

  
  render() {
    return (
      <Grid>
        <Paper elevation={10} style={styles.paperStyle}>
          <Grid align="center">
            <Avatar style={styles.avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Email"
            placeholder="Enter Email"
            fullWidth
            required
            onChange={this.updateEmail}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            onChange={this.updatePassword}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={styles.btnstyle}
            fullWidth
            onClick={this.handleSubmit}
          >
            Sign in
          </Button>
          <Typography>
            {" "}
            Do you have an account ?<Link to="/register">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    );
  }
}

export default Login;
