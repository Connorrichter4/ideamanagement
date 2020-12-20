import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MainNav from "./navigations/MainNav";
import LoginAndRegistration from "./modals/LoginAndRegistration";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [authenticated] = useState(
    sessionStorage.getItem("authenticated")
  );

  if (authenticated) {
    return (
      <div className={classes.root}>
        <MainNav />
      </div>
    );
  } else {
    return (
      <div>
        <LoginAndRegistration />
      </div>
    );
  }
}

export default App;
