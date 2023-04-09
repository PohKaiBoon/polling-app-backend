module.exports = (sequelize, Sequelize) => {
  const Answer = sequelize.define(
    "answer",
    {
      sid: {
        type: Sequelize.INTEGER,
      },
      qid: {
        type: Sequelize.INTEGER,
      },
      answers: {
        type: Sequelize.BOOLEAN,
      },
    },
    { timestamps: false }
  );

  return Answer;
};
