import React, { useState } from "react";
import { Snackbar, Slide } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const CustomSnackBar = (props) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const slideTransition = (props) => {
    return <Slide {...props} direction="up" />;
  };

  return (
    <div>
      {props.message !== '' && <Snackbar
        id="id-success-snackbar"
        className="success-snackbar"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}

        /* set this to the function below */
        TransitionComponent={slideTransition}

        message={props.message}
      />}
    </div>
  );
};

export default CustomSnackBar;
