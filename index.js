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
sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
