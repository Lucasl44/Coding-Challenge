export default function createVotes(sequelize, DataTypes) {
  return sequelize.define('Votes', {
    option: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  })
}
