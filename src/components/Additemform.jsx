import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1),
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[15],
    margin: theme.spacing(0.5),
    padding: theme.spacing(2, 4, 3),
  },
}));

function Additemform() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [name, setName] = useState("");
  const [blog, setblog] = useState("");
  const [time, setTime] = useState("");
  // const [likes, setLikes] = useState(0);
  // const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection("items")
      .add({
        name,
        blog,
        time,
        // likes,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), //get timestamp from the firebase's server
        // password,
      })

      .then(
        () => setName(""),
        setName(""),
        setblog(""),
        setTime("")
        // setLikes("")
        // setPassword("")
      );
  };

  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var currentdate = new Date();
  var datetime =
    monthNames[currentdate.getMonth()] +
    " " +
    currentdate.getDate() +
    " · " +
    currentdate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

  function time1() {
    setTime(datetime);
  }
  // function Iterate() {
  //   setLikes(likes + 1);
  // }

  return (
    <div>
      {/* <Button onClick={Iterate}>like</Button> */}
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create Blog <AddCircleOutlineIcon />
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
            <h2 id="transition-modal-title">
              Create a Blog, express your feelings..
            </h2>
            <p id="transition-modal-description"></p>
            <form onSubmit={onSubmit} className={classes.root}>
              <TextField
                name="name"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                placeholder="your good name please"
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.currentTarget.value)}
              />
              &nbsp; &nbsp; {""}
              {/* <TextField
                name="password"
                onChange={(e) => setPassword(e.currentTarget.value)}
                value={password}
                id="standard-password-input"
                label="Password"
                type="password"
                variant="outlined"
                autoComplete="current-password"
              /> */}
              <div class="form-group">
                <label for="exampleFormControlTextarea1"></label>
                <textarea
                  value={blog}
                  onChange={(e) => setblog(e.currentTarget.value)}
                  name="blog"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Write your thoughts here :)"
                ></textarea>
              </div>
              <Button
                onClick={() => {
                  time1();
                  handleClose(); // capture current date and time + close the modal
                }}
                variant="contained"
                color="secondary"
                type="submit"
                disabled={!(blog && name)} // cannot post empty
              >
                Publish
                <SendIcon />
              </Button>
              {/* <Button
                onClick={() => {
                  Iterate();
                }}
              >
                like
              </Button> */}
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Additemform;
