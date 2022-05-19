const mongoose = require('mongoose');

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB);
    console.log(`MongoDb Connected: ${connection.connection.host} 🤬`);
    return connection;
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`)   
  }
};

module.exports = connectToDb;
