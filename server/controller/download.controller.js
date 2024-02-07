const Barang = require("../models").barangs;
const excelJs = require("exceljs");

module.exports.excelBarang = async (req, res) => {
  const workbook = new excelJs.Workbook();
  const worksheet = workbook.addWorksheet("barang");

  const path = "./files";

  worksheet.columns = [
    { header: "Id", key: "id", width: 10 },
    { header: "Nama", key: "nama", width: 10 },
    { header: "Harga", key: "harga", width: 10 },
    { header: "Stok", key: "stok", width: 10 },
  ];

  let counter = 1;

  try {
    const barangs = await Barang.findAll(); // Assuming barangs is a Sequelize model
    barangs.forEach((barang) => {
      barang.id = counter;
      worksheet.addRow(barang.dataValues); // Use dataValues to get the actual data
      counter++;
    });

    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    const data = await workbook.xlsx.writeFile(`${path}/barang.xlsx`);
    res.send({
      status: "success",
      message: "file successfully downloaded",
      path: `${path}/barang.xlsx`,
    });
  } catch (error) {
    console.error(error);

    res.status(500).send({
      status: "error",
      message: "something went wrong while creating the Excel file",
      error: error.message, // Include the error message for debugging purposes
    });
  }
};
