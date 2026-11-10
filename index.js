const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk membaca JSON
app.use(express.json());

// Panggil route api
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes); // Semua route akan diawali dengan /api

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});