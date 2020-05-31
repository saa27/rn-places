import React, { useState } from "react";
import { AppLoading } from "expo";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import ReduxThunk from "redux-thunk";
import { init } from "./helpers/db";

import PlacesNavigator from "./navigation/PlacesNavigator";
import placesReducer from "./store/reducers/places-reducer";

init()
  .then(() => {
    console.log("Initialized database.");
  })
  .catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
  });

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk)); // redux thunk is plugged in redux flow

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider> //so that every screen in Navigator has access to store
  );
}
