import React, { useState, useEffect, useRef } from "react";
import {
  AsyncStorage,
  View,
  TouchableHighlight,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import styles from "../assets/styles";

import { Ionicons } from "@expo/vector-icons";
import {
  userLoginRequest,
  setAuthToken,
  getSiteID,
} from "../../actions/rest-module";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login(props) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const { signIn } = React.useContext(AuthContext);
  const isMountedRef = useRef();

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  });
  function signInAsync() {
    if (isMountedRef.current) {
      setisLoading(true);
      userLoginRequest({ username, password })
        .then(function (response) {
          var description = response.data["description"];
          if (description === "Successful") {
            console.log("In Success");

            //If login successful, store user token
            const usrtoken = response.data["token"];
            let roles = response.data["roles"];
            AsyncStorage.setItem("userToken", usrtoken);
            AsyncStorage.setItem("username", username);
            AsyncStorage.setItem("roles", roles.toString());
            setAuthToken(usrtoken);
            getSiteID()
              .then(function (response) {
                const sites = [];
                response.data.sites.forEach((element) => {
                  sites.push({
                    label: element.sitename,
                    value: element.siteid,
                  });
                });
                AsyncStorage.setItem("Sites", JSON.stringify(sites));
                signIn();
              })
              .catch(function (error) {
                console.log(error);
              });
            setisLoading(false);
          } else {
            seterrorMessage(response.data["description"]);
            setusername("");
            setpassword("");
            setisLoading(false);
          }
        })
        .catch(function (error) {
          console.log(error);
          setisLoading(false);
        });
    }
    isMountedRef.current = false;
  }
  return (
    <KeyboardAvoidingView style={styles.containerSignIn} behavior="padding">
      <Image
        style={styles.logo}
        source={require("../../assets/images/LCRA.png")}
      ></Image>
      <View style={styles.form}>
        {errorMessage !== "" && (
          <Text style={styles.error}>{errorMessage}</Text>
        )}
        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcon}
            name={Platform.OS === "ios" ? "ios-person" : "md-person"}
            size={20}
            color="#000"
          />
          <TextInput
            style={styles.textInput}
            name={"firstTextInput"}
            value={username}
            onChangeText={(username) => setusername(username)}
            placeholder={Strings.username}
            //placeholderTextColor = {Colors.noticeText}
            autoCorrect={false}
            returnKeyType="next"
            selectionColor={Colors.switchSelect}
            onSubmitEditing={() => {
              secondTextInput.focus();
            }}
            underlineColorAndroid="transparent"
            blurOnSubmit={false}
          ></TextInput>
        </View>
        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcon}
            name={Platform.OS === "ios" ? "ios-lock" : "md-lock"}
            size={20}
            color="#000"
          />
          <TextInput
            name={"secondTextInput"}
            value={password}
            onChangeText={(password) => setpassword(password)}
            style={styles.textInput}
            placeholder={Strings.password}
            //placeholderTextColor = {Colors.noticeText}
            secureTextEntry
            label="Password"
            returnKeyType="done"
            selectionColor={Colors.switchSelect}
            underlineColorAndroid="transparent"
            ref={(input) => {
              secondTextInput = input;
            }}
            onSubmitEditing={signInAsync}
          ></TextInput>
        </View>
        <TouchableHighlight style={styles.buttonSignIn} onPress={signInAsync}>
          <Text style={styles.text}> SIGN IN </Text>
        </TouchableHighlight>
      </View>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.tabIconSelected} />
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

Login.navigationOptions = {
  header: null,
};
