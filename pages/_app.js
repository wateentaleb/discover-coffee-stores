import "../styles/globals.css";
import Image from "next/image";
import { createContext } from "react";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const initalState = { latLong: "", coffeeStores: [] };
  return (
    <StoreContext.Provider value={{ state: { initalState } }}>
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
