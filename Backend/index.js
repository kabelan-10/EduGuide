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
app.get("/GetUser" , async(req,res)=>{
    const email = req.query.Email; 
    try{
         const result = await pool.query(`SELECT * FROM public."Users" WHERE email=$1 ` , [email]);
         console.log(result.rows);
         res.status(200).json(result.rows);
    }
    catch{
        res.status(500).send({message : "Error in database" })
    }
})
app.get("/GetUserDetails" , async(req,res)=>{
    const email = req.query.Email; 
    console.log(email)
    try {
        const result = await pool.query(
          `SELECT * FROM public."stuDetails" WHERE "Email"=$1`, 
          [email]
        );
      
        if (result.rows.length === 0) {
          // If no rows are found, return a message indicating that data has not been entered
          res.status(404).json({ message: "Yet to enter data for this email" });
          
        } else {
          // If rows are found, return the data
          console.log(result.rows);
          res.status(200).json(result.rows);
        }
      } catch (error) {
        // In case of any error, send a 500 status code with an error message
        res.status(500).send({ message: "Error in database" });
      }
      
})
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
app.post("/stuDetails", async (req, res) => {
  const bd = req.body;

  try {
    // Insert or update the student details if the email already exists
    const result = await pool.query(`
      INSERT INTO public."stuDetails" (name, "Email", age, hobbies, "Nationality")
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT ("Email") 
      DO UPDATE SET
        name = EXCLUDED.name,
        age = EXCLUDED.age,
        hobbies = EXCLUDED.hobbies,
        "Nationality" = EXCLUDED."Nationality"
      RETURNING *;
    `, [bd.name, bd.email, bd.age, bd.hobbies, bd.nationality]);

    console.log("Database result:", result.rows);

    res.status(200).send({ message: "Successfully updated or inserted student details" });
  } catch (err) {
    console.error("Error in database operation:", err);
    res.status(500).send({ message: "Error in database" });
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
