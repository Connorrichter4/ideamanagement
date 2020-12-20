import React, { useState } from "react";
import { Snackbar, Slide } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const CustomSnackBar = (props) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.message !== '' && <Snackbar open={open} 
            autoHideDuration={6000} 
            onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.messageType}>
          {props.message}
        </Alert>
      </Snackbar>}
    </div>
  );
};

export default CustomSnackBar;
