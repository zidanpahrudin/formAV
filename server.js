require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/formav1.html");
});

app.post("/form-av1", function (req, res) {
  const result = [
    ({
      tanggal,
      nama_pewawancara,
      hasil_kunjungan,
      provinsi,
      kabupaten,
      kecamatan,
      puskesmas,
      kelurahan,
      nomor_kasus_kematian,
      nama_pengawas,
      tanggal_pengawasan,
      editor,
      kode_pengentri,
      nama_responden,
      nama_almarhum,
      nik_almarhum,
      jenis_kelamin_almarhum,
      tanggal_lahir_almarhum,
      tanggal_meninggal_almarhum,
      apakah_lahir_mati,
      umur_jam,
      umur_hari,
      tempat_meninggal_almarhum,
      tempat_meninggal_almarhum,
      status_kependudukan_almarhum,
    } = req.body),
  ];

  res.render("outputav1", { result });
});

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log(`listen on port ${listener.address().port}`);
});
