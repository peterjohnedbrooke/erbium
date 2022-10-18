module.exports = function () {
  return {
    "/index": [
      {
        key: "mediaPosts",
        data: async () => ({ test: "some text" }),
      },
    ],
  };
};
