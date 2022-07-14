import React from "react";
import { AppContext } from "../../components/StateProvider/StateProvider";

export default function CurrentPage({ name, children }) {
  return (
    <AppContext.Consumer>
      {({ page }) => {
        if (page !== name) {
          return null;
        }
        return <div> {children} </div>;
      }}
    </AppContext.Consumer>
  );
}
