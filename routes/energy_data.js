
const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');

// Fetch energy data by postal code & date
router.get('/', async (req, res) => {
    try {
        const { postalcode, date } = req.query;

        if (!postalcode || !date) {
            return res.status(400).json({ error: 'Missing postalcode or date in query parameters' });
        }

        const query = `
        SELECT 
            FSA AS postalcode, 
            DATE, 
            CUSTOMER_TYPE, 
            SUM(TOTAL_CONSUMPTION) AS TOTAL_CONSUMPTION
        FROM energy_data 
        WHERE FSA = ? AND DATE = ?
        GROUP BY FSA, DATE, CUSTOMER_TYPE
    `;    

        const [rows] = await sequelize.query(query, { replacements: [postalcode, date] });

        if (rows.length === 0) {
            return res.status(404).json({ error: 'No data found for this postal code and date' });
        }

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch energy data' });
    }
});

module.exports = router;

