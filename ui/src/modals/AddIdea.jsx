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

export default function AddIdea(props) {
  const [ideaName, setIdeaName] = useState("");
  const [modalAddIdea, setModalAddIdea] = useState(true);

  const handleSaveAndClose = async () => {
    if (ideaName !== "") {
      const value = {
        ideaName: ideaName,
        createdBy: sessionStorage.getItem("userName"),
      };
      await axios.post(`${baseUrl}/idea`, value);
      
      console.log("*****", props);
      props.handleClose();
    }
  };

  const handleCancel = () => {
    setModalAddIdea(false);
    props.handleClose();
  };

  const toggleAddIdea = () => {
    setModalAddIdea(!modalAddIdea);
  };

  return (
    <div>
      <div>
        <Dialog open={modalAddIdea} onClose={toggleAddIdea}>
          <DialogTitle>Add Idea</DialogTitle>
          <DialogContent>
            <TextField
              placeholder="Idea Name"
              onChange={(e) => setIdeaName(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSaveAndClose} color="primary">
              Save
            </Button>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      
    </div>
  );
}
