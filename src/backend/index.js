import express from 'express';
import path from 'path';
import cors from 'cors';
import router from './routes/pollRoutes.js';
import { sequelize } from './models/pollSchema.js';

const app = express();
const port = 9876;

app.use(express.static(path.join('dist', 'frontend')))
app.use(cors());

app.use(express.json());
app.use('/api/polls', router);

sequelize.sync().then(() => {
  console.log('DataBase connected');
});

app.listen(port, () => {
  console.log('server listening on', port);
});
