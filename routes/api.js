const express = require('express');
const router = express.Router();

// Memanggil controller. Pastikan nama file dan foldernya benar.
const komikController = require('../controller/komikController');

// Route untuk Komik
router.get('/komik', komikController.getAllKomik);
router.get('/komik/:id', komikController.getKomikById);
router.post('/komik', komikController.createKomik);
router.put('/komik/:id', komikController.updateKomik);
router.delete('/komik/:id', komikController.deleteKomik);

module.exports = router;