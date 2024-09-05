const express = require('express');
const distanceConversions = require('./distanceConversions');
const cors = require('cors');

const app = express();
const port = 3000;

// Use the cors middleware to enable CORS
app.use(cors({
    origin: '*', // Allow all origins. Adjust this as needed for your use case.
    methods: ['GET'], // Allow only GET requests. Adjust this if you need other methods.
    allowedHeaders: ['Content-Type'], // Allow only these headers.
}));

// Route to handle distance conversions
app.get('/v1/distances/:unit.json', (req, res) => {
    const unit = req.params.unit;
    const conversion = distanceConversions[unit];

    if (conversion) {
        res.json({ [unit]: conversion });
    } else {
        res.status(404).json({ error: 'Unit not found' });
    }
});

app.listen(port, () => {
    console.log(`Distance API listening at http://localhost:${port}`);
});
