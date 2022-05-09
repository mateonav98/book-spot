const User = require('./User');
const Book = require('./Book');
const Review = require('./Review');

User.hasMany(Book, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Book.belongsTo(User, {
    foreignKey: 'user_id'
});

Book.hasMany(Review, {
    foreignKey: 'book_id',
})

Review.belongsTo(Book,{
    foreignKey: 'book_id',
})

Review.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Book, Review };
  