const PDFDocument = require('pdfkit');
const fs = require('fs');

const genPDF=({text,imagePath})=>{
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('output.pdf'));
    doc.fontSize(25)
    .text(text, 100, 100);
    doc.image(imagePath, {
        fit: [250, 300],
        align: 'center',
        valign: 'center'
      });
    doc.end();
}
genPDF({text:'Hello World',imagePath:'./image.png'});