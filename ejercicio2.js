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
}, { sequelize, modelName: 'tabla 2' });


sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Loco',
    lastName: 'Lope'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  }).then(() =>{
    Cars.destroy({
        where: {
          lastName: 'Lope'
        }
      })
  }).then(() => {
        console.log("Elimina2");
    });