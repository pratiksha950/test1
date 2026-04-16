import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  closeBuyWindow: () => {},
});

function GeneralContextProvider(props) {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  function handleOpenBuyWindow(uid) {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  }

  function handleCloseBuyWindow() {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  }

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}

      {isBuyWindowOpen && (
        <BuyActionWindow uid={selectedStockUID} />
      )}
    </GeneralContext.Provider>
  );
}

export { GeneralContextProvider };
export default GeneralContext;