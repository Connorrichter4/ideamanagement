import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

import axios from "axios";
import { baseUrl } from "../utils/CommonUtils";

function LoginAndRegistration() {
  const [modalLogin, setModalLogin] = useState(true);
  const [modalRegister, setModalRegister] = useState(false);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState('');

  const toggleLogin = () => {
    setModalLogin(!modalLogin);
  };

  const toggleRegister = () => {
    setModalRegister(!modalRegister);
  };

  const handleLogin = () => {
    if (emailId !== '' && password !== '') {
      axios
        .get(
          `${baseUrl}/user/search/findOneByEmailIdAndPassword?emailId=${emailId}&password=${password}`
        )
        .then((result) => {
            console.log(result.data);
          sessionStorage.setItem("authenticated", true);
          sessionStorage.setItem("emailId", emailId);
          sessionStorage.setItem("userName", result.data.userName);
          window.location.href = "/";
        })
        .catch((error) => {
          setEmailId('');
          setPassword('');
          sessionStorage.setItem("authenticated", false);
          sessionStorage.setItem("emailId", "");
          sessionStorage.setItem("userName", '');
          console.log('error', error)
        });
    }
  };

  const handleRegister = () => {
    setModalRegister(true);
    setModalLogin(false);
  };

  const handleBackToLogin = () => {
    setModalRegister(false);
    setModalLogin(true);
  }

  const handleSave = async () => {
    if (emailId !== '' && password !== '') {
        const value = { "emailId": emailId, "userName": username, "password": password }
        await axios.post(`${baseUrl}/user`, value );
    }
    handleBackToLogin();
  }

  return (
    <div>
      <Dialog open={modalLogin} onClose={toggleLogin}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            placeholder="email id"
            onChange={(e) => setEmailId(e.target.value)}
          />{" "}
          <br />
          <TextField
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRegister} color="primary">
            Register
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={modalRegister} onClose={toggleRegister}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField
            placeholder="email id"
            onChange={(e) => setEmailId(e.target.value)}
          />
          <br />
          <TextField
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <TextField
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
          <Button onClick={handleBackToLogin} color="primary">
            Back to Login
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}

export default LoginAndRegistration;
