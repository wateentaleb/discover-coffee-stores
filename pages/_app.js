import "../styles/globals.css";
import Image from "next/image";
import { createContext, useReducer } from "react";

const StoreContext = createContext();

const ACTION_TYPES = {
  SET_LAT_LONG: "SET_LAT_LONG",
  SET_COFFEE_STORES: "SET_COFFEE_STORES",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LAT_LONG: {
      return { ...state, latLong: action.payload.latLong };
    }
    case ACTION_TYPES.SET_COFFEE_STORES: {
      return { ...state, coffee: action.payload.coffee };
    }
    default: {
      throw new Error(`Invalid action ${action.type}`);
    }
  }
};

const StoreProvider = ({ children }) => {
  const initalState = { latLong: "", coffeeStores: [] };

  const [state, dispatch] = useReducer(storeReducer, initalState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
