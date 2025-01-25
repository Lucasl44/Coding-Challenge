import express from 'express';
import path from 'path';
import router from './routes/pollRoutes';
import { sequelize } from './models/pollSchema';

const app = express();
const port = 9876;

app.use(express.static(path.join('dist', 'frontend')))
app.use('/api/polls', router);

sequelize.sync().then(() => {
  console.log('DataBase connected');
});

app.listen(port, () => {
  console.log('server listening on', port);
});
