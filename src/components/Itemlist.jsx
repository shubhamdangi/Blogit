import React, { useState, useEffect } from "react";
import firebase from "../firebase";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button } from "@material-ui/core";
// import UpdateItem from "./UpdateItem";
import Likes from "../components/Likes";

// import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
// import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
// import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("items")
      .orderBy("timestamp", "desc") // display latest post on top

      .onSnapshot((snapshot) => {
        const listItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(listItems);
      });
    return () => unsubscribe();
  }, []);
  return items;
};

const deleteItem = (id) => {
  firebase.firestore().collection("items").doc(id).delete();
};

const ItemList = () => {
  const listItem = useItems();
  ///

  ///

  return (
    <>
      {listItem.map((item) => (
        <div class="jumbotron jumbotron-fluid" key={item.id}>
          <div class="container">
            <h5>
              @{item.name} | {item.time}
            </h5>
            <h4>{item.blog}</h4>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Likes />
              <Button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                <DeleteIcon />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
