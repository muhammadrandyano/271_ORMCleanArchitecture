// Sesuaikan path require ini dengan struktur folder models kamu
// Jika model komik kamu ada di models/komik.js, gunakan require('../models/komik')
const { Komik } = require('../models'); 

module.exports = {
    // 1. GET ALL (Mendapatkan semua data komik)
    getAllKomik: async (req, res) => {
        try {
            const komiks = await Komik.findAll();
            res.status(200).json({
                message: "Berhasil mendapatkan semua data komik",
                data: komiks
            });
        } catch (error) {
            res.status(500).json({
                message: "Terjadi kesalahan pada server",
                error: error.message
            });
        }
    },

    // 2. GET BY ID (Mendapatkan 1 komik berdasarkan ID)
    getKomikById: async (req, res) => {
        try {
            const { id } = req.params;
            const komik = await Komik.findByPk(id);

            if (!komik) {
                return res.status(404).json({ message: "Komik tidak ditemukan" });
            }

            res.status(200).json({
                message: `Berhasil mendapatkan komik dengan ID ${id}`,
                data: komik
            });
        } catch (error) {
            res.status(500).json({
                message: "Terjadi kesalahan pada server",
                error: error.message
            });
        }
    },

    // 3. CREATE (Menambahkan komik baru)
    createKomik: async (req, res) => {
        try {
            const { title, description, author } = req.body;

            if (!title || !author) {
                return res.status(400).json({ message: "Title dan Author wajib diisi" });
            }

            const komikBaru = await Komik.create({
                title,
                description,
                author
            });

            res.status(201).json({
                message: "Berhasil menambahkan komik baru",
                data: komikBaru
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal menambahkan komik",
                error: error.message
            });
        }
    },
}