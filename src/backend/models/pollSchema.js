import { Sequelize, DataTypes } from 'sequelize';
import mysql2 from 'mysql2';
import createPoll from './poll.js';
import createVotes from './votes.js';
import 'dotenv/config';

const sequelize = new Sequelize(`mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@localhost:3306/pollapp`, {
  dialectModule: mysql2
  });

const Poll = createPoll(sequelize, DataTypes);
const Votes = createVotes(sequelize, DataTypes);
Poll.hasMany(Votes, {foreignKey: 'pollId', as: 'votes'});
Votes.belongsTo(Poll, {foreignKey: 'pollId', as: 'poll'});
export {sequelize, Poll, Votes};
