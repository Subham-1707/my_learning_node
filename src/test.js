const tokens = [
  {
    token: {
      type: "string",
      required: "true",
    },
  },
];
exports.testfun = function () {
  tokens.filter((token) => {
    console.log(token.token);
  });
};
