const pdf2js = require("html2pdf.js");
const outputav1 = document.querySelector("#outputav1");
const downloadAsPDF = document.querySelector("#download");

downloadAsPDF.addEventListener("click", () => {
  pdf2js().from(outputav1).save();
});
