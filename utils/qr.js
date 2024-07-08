const Qrcode = require("qrcode");

const genQr = async ({ text }) => {
  try {
    const qr = await Qrcode.toDataURL(text);
    return qr;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { genQr };
