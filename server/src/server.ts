const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes/index.js';
import { sequelize } from './models/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
// Serves static files in the entire client's dist folder
app.use(express.static('../client/dist'));
app.use(routes);

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
