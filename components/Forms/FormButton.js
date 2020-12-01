import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";
import firebase from "../Firebase/firebaseConfig";
import "firebase/auth";

export default function FormButton({ title }) {
  const createUser = () => {
    const dbRef = firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid);
    dbRef
      .set({ userType: "Admin" })
      .then(() => console.log("Added admin user"));
  };

  /*
  storeUser() {
    if (this.state.name === "") {
      alert("cannot be empty");
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbRef
        .add({
          name: this.state.name,
          email: this.state.email,
          description: this.state.description,
          // uid: this.state.uid,
        })
        .then((res) => {
          this.setState({
            title: "",
            price: "",
            description: "",
            isLoading: false,
          });
          // this.props.navigation.navigate("Mina Enheter");
        })
        .catch((err) => {
          console.error("Error found: ", err);
          this.setState({
            isLoading: false,
          });
        });
    }
  }*/

  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}
