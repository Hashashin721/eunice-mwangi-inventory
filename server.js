import express from "express";
import path from "path";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json());

// serve your static site
app.use(express.static(path.join(process.cwd(), "public")));

// mount auth routes
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
