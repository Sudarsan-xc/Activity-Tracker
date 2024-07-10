const { genPDF } = require("../../utils/pdf.js");

const createPDF = async (payload) => {
  const { text, imagePath } = payload;

  // Validate text input
  if (typeof text !== "string" || text.trim() === "") {
    throw new Error("Invalid text input");
  }

  // Validate imagePath input
  if (typeof imagePath !== "string" || imagePath.trim() === "") {
    throw new Error("Invalid imagePath input");
  }

  // Generate PDF
  await genPDF({ text, imagePath });

  // Return success message
  return { message: "PDF generated successfully" };
};
module.exports = { createPDF };
