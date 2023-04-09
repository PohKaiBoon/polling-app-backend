module.exports = (sequelize, Sequelize) => {
  const Question = sequelize.define(
    "question",
    {
      qid: {
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.STRING,
      },
      toggle: {
        type: Sequelize.BOOLEAN,
      },
    },
    { timestamps: false }
  );

  return Question;
};
