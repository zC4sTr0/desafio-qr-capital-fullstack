import React from "react";
import getCoinList from "../../api/CryptoCompare";

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
    };
  }

  componentDidMount = () => {
    this.getCoins();
  };

  getCoins = async () => {
    let coinList = await getCoinList();
    coinList = coinList.Data;
    console.log(coinList);
    this.setState({ coinList });
  };

  savedSettings() {
    const savedSettings = localStorage.getItem("settings");
    if (!savedSettings) {
      console.log("primeira vez");
      return { page: "settings", firstVisit: true };
    }

    return {
      firstVisit: false,
      page: "dashboard",
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
