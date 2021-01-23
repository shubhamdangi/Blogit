import React from "react";
// import firebase from "../firebase";
import Additemform from "./Additemform";
import ItemList from "./Itemlist";

function Feed() {
  // firebase
  //   .firestore()
  //   .collection("items")
  //   .add({
  //     name: "",
  //     title: "",
  //     blog: "",
  //     time: "",
  //     likes: "",
  //   })
  //   .then((ref) => {
  //     console.log("Blog published with id: ", ref.id);
  //   });
  //

  return (
    <>
      <nav class="navbar navbar-dark navbar-static-top bg-dark">
        <a class="navbar-brand" href="#">
          Blogit XZ
        </a>

        <Additemform />
      </nav>

      <ItemList />
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        class="navbar navbar-dark navbar-static-top bg-dark"
      >
        <a
          class="navbar-brand active"
          target="_blank"
          href="https://technoshubham.github.io/"
        >
          About Us
        </a>
      </nav>
    </>
  );
}

export default Feed;
