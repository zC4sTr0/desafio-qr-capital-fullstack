const baseURL = "https://min-api.cryptocompare.com/data/";
let apiKey = "7597a9919714d4ca350b916b59c6a2a32433c4f64d546bb6f6184719269c23d8";

async function fetchJSON(url) {
  return await fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(
          "Error while fetching the JSON from CryptoCompare API! Error Code: " +
            response.status +
            " - " +
            response.statusText
        );
      }
    })
    .then((body) => {
      if (body.Response === "Error") {
        throw new Error(body.Message);
      }
      return body;
    });
}

const getCoinList = async () => {
  return await fetchJSON(
    baseURL +
      "blockchain/list" +
      "?api_key=" +
      apiKey +
      "&extraParams=QRCapital-Full-Stack-Challenge"
  );
};

export default getCoinList;
