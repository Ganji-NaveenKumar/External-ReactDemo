const Path = "/assets";

export const ImagePath = {
  BitCoin: `${Path}/BitCoin.svg`,
  Ethereum: `${Path}/Ethereum.svg`,
  XRP: `${Path}/XRP.svg`,
  Tether: `${Path}/Tether.svg`,
};

const Data = [
  {
    image: ImagePath.BitCoin,
    Header: "BitCoin",
    Body: "Moves tightly together",
    TotalAmount: "$3,285,553.73",
    Percentage: "100%",
  },
  {
    image: ImagePath.Ethereum,
    Header: "Ethereum",
    Body: "Moves tightly together",
    TotalAmount: "$ 230,966.85",
    Percentage: "86%",
  },
  {
    image: ImagePath.XRP,
    Header: "XRP",
    Body: "Moves tightly together",
    TotalAmount: "$60.20",
    Percentage: "10%",
  },
  {
    image: ImagePath.Tether,
    Header: "Tether",
    Body: "Moves tightly together",
    TotalAmount: "$74.28",
    Percentage: "2%",
  },
];

export default Data;
