const express = require("express");
const sequelize = require("./config/database");
const noteRoutes = require("./routes/notesRoutes");

const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Testing Testing");
});

require("./schema/notes");
app.use("/api/v1/notes", noteRoutes);

const port = process.env.PORT || 5000;
sequelize
  .sync()
  .then(() => {
    console.log("Database ready");
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("DB ERROR:");
    console.error(err);
    process.exit(1);
  });

console.log("DB CONFIG CHECK:", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  name: process.env.DB_NAME,
});
