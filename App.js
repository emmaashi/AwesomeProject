import { ImageBackground, StyleSheet, Text, View, Button } from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapView from "react-native-maps";

const Stack = createNativeStackNavigator();

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};

const ProfileScreen = ({ route }) => {
  return (
    <MapView
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

class ReactApp extends Component {
  constructor() {
    super();
    this.state = {
      myText: "My Original Text",
    };
  }
  updateText = () => {
    this.setState({ myText: "My Changed Text" });
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
        <Text style={styles.text}>{this.state.myText}</Text>
        <Button
          onPress={() =>
            this.props.navigation.navigate("Profile", { name: "Jane" })
          }
          title="Press Me"
        />
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="React"
          component={ReactApp}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
