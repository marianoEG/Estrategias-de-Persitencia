const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



class Cars extends Sequelize.Model {}
Cars.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'tabla 1' });


sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Papu',
    lastName: 'Gomez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  }).then(() =>{
    Cars.update({ firstName: "Jorge" }, {
        where: {
          lastName: 'Gomez'
        }
      })
  }).then(() => {
        console.log("Done");
    });


