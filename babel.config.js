module.exports = api => {
  api.cache(false);

  const presets = [
    "@babel/preset-typescript",
    "@parcel/babel-preset-env"
  ];

  return { presets };
};