import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  View,
} from "react-native";
import firebase from "../components/Firebase/firebaseConfig";
import "firebase/auth";
import "firebase/storage";

import FormImagePicker from "../components/Forms/FormImagePicker";

import { Form, FormPicker as Picker } from "../components/Forms";

let user = firebase.auth().currentUser;

class ListingEditScreen extends Component {
  constructor() {
    super();
    this.dbRef = firebase.firestore().collection("listings");
    this.state = {
      title: "",
      price: "",
      description: "",
      images: [""],
      isLoading: false,
    };
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  storeUser() {
    if (this.state.name === "") {
      alert("cannot be empty");
    } else {
      this.setState({
        isLoading: true,
      });
      this.dbRef
        .add({
          title: this.state.title,
          price: this.state.price,
          description: this.state.description,
          images: [""],
          uid: firebase.auth().currentUser.uid,
        })
        .then((res) => {
          this.setState({
            title: "",
            price: "",
            description: "",
            images: [""],
            isLoading: false,
          });
          this.props.navigation.navigate("Mina Enheter");
          console.log(this.state.images);
        })
        .catch((err) => {
          console.error("Error found: ", err);
          this.setState({
            isLoading: false,
          });
        });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        {/* <Button title={"test"} onPress={() => console.log(this.state.images)} /> */}
        <Form
          initialValues={{
            images: [],
          }}
        >
          <View style={styles.inputGroup}>
            <FormImagePicker
              name="images"
              images={(images) => console.log(images)}
              value={this.state.images}
            />
            <TextInput
              placeholder={"Title"}
              value={this.state.title}
              onChangeText={(val) => this.inputValueUpdate(val, "title")}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder={"Price"}
              value={this.state.price}
              onChangeText={(val) => this.inputValueUpdate(val, "price")}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              placeholder={"Description"}
              value={this.state.description}
              onChangeText={(val) => this.inputValueUpdate(val, "description")}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Listing"
              onPress={() => this.storeUser()}
              color="#19AC52"
            />
          </View>
        </Form>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListingEditScreen;
