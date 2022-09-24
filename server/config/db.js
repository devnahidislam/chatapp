import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connection SUCCESS');
  } catch (error) {
    console.error('MongoDB Connection FAILED');
    process.exit(1);
  }
};

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected...');
});
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB connection Failed...');
});

export default connectDB;
