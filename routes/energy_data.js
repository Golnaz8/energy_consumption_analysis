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
            SUM(TOTAL_CONSUMPTION) AS TOTAL_CONSUMPTION,
            SUM(PREDICTED_CONSUMPTION) AS PREDICTED_CONSUMPTION
        FROM energy_data 
        WHERE FSA = ? AND DATE = ?
        GROUP BY FSA, DATE, CUSTOMER_TYPE
    `;

    
        const rows = await sequelize.query(query, { 
            replacements: [postalcode, date], 
            type: sequelize.QueryTypes.SELECT 
        });

        if (!Array.isArray(rows) || rows.length === 0) {
            return res.status(404).json({ error: 'No data found for this postal code and date' });
        }

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch energy data' });
    }
});


// Fetch unique postal codes from the database
router.get('/postal-codes', async (req, res) => {
    console.log("Accessing /postal-codes route...");

    try {
        const query = `SELECT DISTINCT FSA FROM energy_data ORDER BY FSA`;

        console.log("Executing query:", query);

        // Force MySQL to return an array
        const result = await sequelize.query(query, { type: sequelize.QueryTypes.SELECT });

        // Ensure result is always an array
        const rows = Array.isArray(result) ? result : [result];

        console.log("Query result:", rows);

        if (rows.length === 0) {
            console.log("No postal codes found in the database.");
            return res.status(404).json({ error: 'No postal codes found' });
        }

        res.json({ postalCodes: rows.map(row => row.FSA) });

    } catch (err) {
        console.error("Error accessing postal codes:", err);
        res.status(500).json({ error: 'Failed to fetch postal codes', details: err.message });
    }
});

module.exports = router;
