import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const UpdateItem = ({ setEditing, currentItem, UpdateItem }) => {
  const [item, setItem] = useState(currentItem);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setItem(currentItem);
    console.log("useEffect passes the currentItem ", currentItem);
  }, [currentItem]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("on submit passes the id and items", item);
    UpdateItem({ currentItem }, item);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <div>
      <Button
        onClick={() => {
          handleOpen();
        }}
      >
        <EditIcon />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Update Post</h2>
            <p id="transition-modal-description"></p>

            <form onSubmit={onSubmit} className={classes.root}>
              <TextField
                name="name"
                id="outlined-basic"
                label="Name"
                value={item.name}
                onChange={onChange}
                variant="outlined"
                placeholder="your good name please"
                // value={item.name}
                autoComplete="off"
                // onChange={(e) => setName(e.currentTarget.value)}
              />
              &nbsp; &nbsp; {""}
              <div class="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea
                  value={item.blog}
                  name="blog"
                  onChange={onChange}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Write your thoughts here :)"
                ></textarea>
              </div>
              <Button
                onClick={() => {
                  // time1();
                  handleClose(); // capture current date and time + close the modal
                }}
                variant="contained"
                color="secondary"
                type="submit"
                // disabled={!(blog && name)} // cannot post empty
              >
                Update
                <SendIcon />
              </Button>
              <Button onClick={() => handleClose()}>Cancel</Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default UpdateItem;
