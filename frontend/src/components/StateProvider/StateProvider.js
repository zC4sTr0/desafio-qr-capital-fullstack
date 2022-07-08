import React from "react";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
    };
  }

  savedSettings() {
    const savedSettings = localStorage.getItem("settings");
    if (!savedSettings) {
      console.log("primeira vez");
      return { page: "settings", firstVisit: true };
    }
    return {
      firstVisit: true,
      favorites: [],
    };
  }

  confirmFavorites() {
    this.setState({
      firstVisit: false,
      page: "dashboard",
    });
  }

  setPage = (page) => {
    this.setState({ page });
    console.log(page);
  };

  render() {
    return (
      <AppContext.Provider value={{ ...this.state, setPage: this.setPage }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
