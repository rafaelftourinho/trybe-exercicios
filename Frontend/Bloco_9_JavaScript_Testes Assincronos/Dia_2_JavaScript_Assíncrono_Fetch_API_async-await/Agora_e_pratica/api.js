
// const fetchCrypto = async() => {
//   const API_URL = 'https://api.coincap.io/v2/assets';
  
//   const coin = await fetch(API_URL)
//     .then((response) => response.json())
//     .then(({ data }) => data)
//     .catch((error) => error.toString());

//     return coin;
// }

const fetchCrypto = async () => {
  const API_URL = 'https://api.coincap.io/v2/assets';

  try {
    const coin = await fetch(API_URL);
    const json = await coin.json();
    const { data } = json;

    return data;

  } catch(error) {
    error.toString();
  }
};


const setCoins = async () => {
  const coins =  await fetchCrypto();

  const coinList = document.getElementById('cripto');

  coins
  .filter((coin) => Number(coin.rank) <= 10)
  .forEach((coin) => {
    const li = document.createElement('li');
    const usdPrice = Number(coin.priceUsd);

    li.innerText = `${coin.name} (${coin.symbol}): ${usdPrice}`;

    coinList.appendChild(li);
  })
}

window.onload = () => setCoins();
