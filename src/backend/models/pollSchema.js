import { Sequelize, DataTypes } from 'sequelize';
import mysql2 from 'mysql2';
import createPoll from './poll.js';
import createVotes from './votes.js';

const sequelize = new Sequelize('mysql://root:T1nkerbe1144-@localhost:3306/pollapp', {
  dialectModule: mysql2
  });

const Poll = createPoll(sequelize, DataTypes);
const Votes = createVotes(sequelize, DataTypes);

Poll.hasMany(Votes, {foreignKey: pollId});
Votes.belongsTo(Poll);

export {sequelize, Poll, Votes};
