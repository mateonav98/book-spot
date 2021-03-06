const sequelize = require('../config/connection');
const { User, Review, Book } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const bookData = require('./bookData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    const books = await Book.bulkCreate(bookData, {
        individualHooks: true,
        returning: true,
    });

    const reviews = await Review.bulkCreate(reviewData, {
        individualHooks: true,
        returning: true,
    });
  
    process.exit(0);
  };
  
 seedDatabase();