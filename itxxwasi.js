const express = require('express');
const app = express();
const wasiqr = require('./wasiqr');
const pair = require('./Pair');

// Use your routes
app.use('/wasiqr', wasiqr);
app.use('/pair', pair);

// Set your port or use environment variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
