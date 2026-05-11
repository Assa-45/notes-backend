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

const port = process.env.PORT || 3000;
sequelize.sync().then(() => {
    console.log("Database ready");
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:");
    console.error(err);
  });
