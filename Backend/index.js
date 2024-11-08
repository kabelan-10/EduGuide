import express from "express";
import cors from "cors";
import bcrypt from "bcrypt"

const app = express();
app.use(cors());
app.use(express.json());

// Use your router for routes related to UOM

// app.use('/api/', Upload);
// app.use('/api/' , itemsRouter)
// dbpg.js

import pkg from 'pg';  // Import the entire 'pg' module as a default import
const { Pool } = pkg;

// Create a new pool instance with configuration options
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "DTH",
    password: "k1062005",
    port: 5432,           // Default PostgreSQL port
    
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`http://localhost:${port}`);
});

app.post("/Register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the email already exists
        const emailCheck = await pool.query(
            `SELECT * FROM public."Users" WHERE email = $1`,
            [email]
        );
        if (emailCheck.rows.length > 0) {
            return res.status(409).json({ error: "Email already registered. Please log in." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

        // Insert the new user with the hashed password
        await pool.query(
            `INSERT INTO public."Users" (username, email, password)
             VALUES ($1, $2, $3)`,
            [username, email, hashedPassword]
        );

        res.status(201).json({ message: "Registration successful. Please log in." });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({ error: "An error occurred. Please try again later." });
    }
});
app.post("/Login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists with the given email
        const userResult = await pool.query(
            `SELECT * FROM public."Users" WHERE email = $1`,
            [email]
        );

        if (userResult.rows.length === 0) {
            return res.status(404).json({ error: "User not found. Please register." });
        }

        const user = userResult.rows[0];

        // Compare the hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid email or password. Please try again." });
        }

        res.json({ message: "Login successful", user: { username: user.username, email: user.email } });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "An error occurred. Please try again later." });
    }
});
