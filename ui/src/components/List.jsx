import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { baseUrl } from "../utils/CommonUtils";
import AddIdea from "../modals/AddIdea";
import CustomSnackBar from "../modals/CustomSnackBar";

const columns = [
  { field: "ideaName", headerName: "Idea Name", width: 130 },
  { field: "createdBy", headerName: "Created By", width: 130 },
];

function List(props) {
  const [rows, setRows] = useState([]);
  const [listIdeas, setListIdeas] = useState(true);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await axios.get(`${baseUrl}/idea`);

    console.log(res.data._embedded.idea);
    setRows(res.data._embedded.idea);
  };

  const handleAddIdea = () => {
    setListIdeas(false);
  };

  const handleAddIdeaClose = () => {
    setListIdeas(true);
    setMessageInfo("Data Saved", "success");
    getList();
  }

  const setMessageInfo = (_message, _messageType) => {
    setMessage(_message);
    setMessageType(_messageType);
  }

  if (listIdeas) {
    return (
      <div>
        <Button onClick={handleAddIdea} color="primary">
          Add Idea
        </Button>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
        <div>
        <CustomSnackBar message={message} messageType={messageType} />
      </div>
      </div>
    );
  } else {
    return <AddIdea handleClose={handleAddIdeaClose}/>;
  }
}

export default List;
