const { genQr } = require("../../utils/qr");

const createQr = async (payload) => {
  const { url } = payload;
  const isValidURL = url.includes("https://");
  if (!isValidURL) throw new Error("Invalid URL");
  const result = await genQr({ text: url });
  return result;
};
module.exports = { createQr };
