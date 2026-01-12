const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://rutukhodke_db_user:bJ4CeoheXxdaqXr3@cluster0.ybg6861.mongodb.net/ecommerce?retryWrites=true&w=majority'
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
