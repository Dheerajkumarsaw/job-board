import express from "express";
import sequelize from "./database/database";
import { router } from "./routes/routes";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", router);

sequelize.sync().then(() => {
   console.log('Database synced');
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
