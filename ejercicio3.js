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
}, { sequelize, modelName: 'tabla 3' });


sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Loco',
    lastName: 'Lope'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })
  .then(() => Cars.create({
    firstName: 'Pipo',
    lastName: 'Gorosito'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })
  .then(() => Cars.create({
    firstName: 'Guillermo',
    lastName: 'Moreno'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })
  .then(() => Cars.create({
    firstName: 'Ernesto',
    lastName: 'Laclau'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  })
  .then(() => {
      Cars.update({firstName : 'Mario Guillermo'}, {
      where:{
          firstName: 'Guillermo'
      }})
  })
  .then(() => {
    Cars.update({firstName : 'Don Pipo'}, {
    where:{
        firstName: 'Pipo'
    }})
})