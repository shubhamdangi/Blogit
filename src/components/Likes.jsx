import React, { useState } from "react";
// import firebase from "firebase";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Button } from "@material-ui/core";
import WhatshotIcon from "@material-ui/icons/Whatshot";

// const useItems = () => {
//   const [items, setItems] = useState([]);
//   useEffect(() => {
//     const unsubscribe = firebase
//       .firestore()
//       .collection("items1")
//       .orderBy("timestamp", "desc") // display latest post on top

//       .onSnapshot((snapshot) => {
//         const listItems = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setItems(listItems);
//       });
//     return () => unsubscribe();
//   }, []);
//   return items;
// };

// function get() {
//   firebase.firestore
//     .collection("items1")
//     .doc("SF")
//     .onSnapshot(function (doc) {
//       doc.data();
//     });
// }

function Likes() {
  const [likes, setLikes] = useState(null);
  const [fire, setFire] = useState(null);

  // const onClick2 = () => {
  //   // e.preventDefault();
  //   firebase
  //     .firestore()
  //     .collection("items1")
  //     .add({
  //       likes,
  //       // timestamp: firebase.firestore.FieldValue.serverTimestamp(), //get timestamp from the firebase's server
  //       // password,
  //     })
  //     //   .onSnapshot((snapshot) => {
  //     //     const listItems = snapshot.docs.map((doc) => ({
  //     //       id: doc.id,
  //     //       ...doc.data(),
  //     //     }));
  //     //     setLikes(likes + 1);
  //     //   });

  //     .then(
  //       // (likes = likes)
  //       () => setLikes(likes + 1)
  //       // setPassword("")
  //     );
  // };
  function iterate() {
    setLikes(likes + 1);
  }
  function iterate2() {
    setFire(fire + 1);
  }
  return (
    <>
      {/* {Likes.map((item) => ( */}
      <div>
        <Button
          value={likes}
          onClick={() => {
            iterate();
            // onClick2();
          }}
        >
          <FavoriteIcon />
          {likes}
        </Button>
        <Button onClick={iterate2}>
          {" "}
          <WhatshotIcon /> {fire}
        </Button>
      </div>
      {/* ))} */}
    </>
  );
}

export default Likes;
