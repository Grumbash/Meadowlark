var fortunes = [
  "Win your fears or they will defeat you.",
  "Rivers need sources.",
  "Do not be afraid of the unknown.",
  "You will have a pleasant surprise",
  "Be easier wherever you can",
  "A lot of letters, not a few letters"
];

exports.getFor = function () {
  var idx = Math.floor(Math.random() * fortunes.length);
  return fortunes[idx];
};
