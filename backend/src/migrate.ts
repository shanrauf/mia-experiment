import sequelizeLoader from './loaders/sequelize';
/*
  This file is used to setup the dev environment;
  It was used once in production to setup the prod db, but will never be used again
*/
if (process.env.NODE_ENV === 'production') {
  throw new Error('DO NOT DO THIS...');
}
sequelizeLoader()
  .then(sequelize => {
    sequelize.sync({
      force: true
    });
  })
  .catch(() => {
    console.error('Failed to force sync the database');
  });
