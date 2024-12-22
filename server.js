require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db');
const authRoutes = require("./routes/auth-routes");
const homeRoutes = require("./routes/home-routes");
const adminRoutes = require("./routes/admin-routes");
const uploadImageRoutes = require("./routes/image-routes");

// Connect to Database
connectToDB();
const app = express();
const port = parseInt(process.env.PORT, 10);

//Middlewares
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/image", uploadImageRoutes);
// Start the Server

app.listen(port, () => {
  console.log(`Server is now listeining to PORT ${port}`);
});


