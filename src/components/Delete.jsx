// import { React, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
// import DeleteIcon from "@material-ui/icons/Delete";
// import { Button } from "@material-ui/core";
// import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default function Delete() {
//   // event.stopPropagation();
//   const classes = useStyles();
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const hc = (e) => {
//     e.stopPropagation();
//     e.preventDefault();
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const [epassword, setEpassword] = useState("");
//   function watchepw(event) {
//     setEpassword(event.target.value);
//     // console.log(epassword);
//     event.preventDefault();
//   }
//   return (
//     <div>
//       <button onClick={handleOpen}>
//         <DeleteIcon />
//       </button>
//       <Modal
//         // disableBackdropClick
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <div className={classes.paper}>
//             <h2 id="transition-modal-title">
//               Please enter password to continue..
//             </h2>
//             <p id="transition-modal-description">enter below..</p>
//             <TextField
//               name="epassword"
//               value={epassword}
//               id="standard-password-input"
//               label="Password"
//               type="password"
//               variant="outlined"
//               autoComplete="current-password"
//               onChange={watchepw}
//             />
//             <p></p>
//             <Button
//               className="button1"
//               variant="contained"
//               color="secondary"
//               onClick={
//                 console.log("delete clicked")
//                 // { pw: password } === epassword ? deleteItem({ id: id }) : null

//                 // handleClose();
//               }
//             >
//               Delete0
//             </Button>
//           </div>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }
