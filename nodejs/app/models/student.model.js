module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define(
    "student",
    {
      sid: {
        type: Sequelize.INTEGER,
      },
      fullname: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );

  return Student;
};
