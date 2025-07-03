import express from 'express';
import "dotenv/config";
import cors from 'cors';
import http from "http";

import morganMiddleware from './middleware/morgan';

const app = express();
app.use(morganMiddleware);
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '4mb' }));
app.use(cors());

app.use(
    "/api/status",
    (req, res) => {
        res.status(200).json({ status: "Server is running" });
    }
);


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});