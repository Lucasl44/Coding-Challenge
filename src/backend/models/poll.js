export default function createPoll(sequelize, DataTypes) {
  return sequelize.define('Poll', {
    question: {
      type: DataTypes.STRING,
      allowNull: false
    },
    options: {
      type: DataTypes.JSONB,
      allowNull: false
    }
  });
}
