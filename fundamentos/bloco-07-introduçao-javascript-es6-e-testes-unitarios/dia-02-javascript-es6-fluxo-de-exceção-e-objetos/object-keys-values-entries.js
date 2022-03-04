// for para acessar chaves de um objeto

// const coolestTvShow = {
//   name: "BoJack Horseman",
//   genre: "adult animation",
//   createdBy: "Raphael Bob-Waksberg",
//   favoriteCharacter: "Princess Carolyn",
//   quote: "Princess Carolyn always lands on her feet.",
//   seasons: 6,
// };

// for (const key in coolestTvShow) {
//   console.log(key);
// }

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};


console.log(Object.keys(coolestTvShow));
console.log(Object.values(coolestTvShow));
console.log(Object.entries(coolestTvShow));

// Com Object.key