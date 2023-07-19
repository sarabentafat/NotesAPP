const mongoose =require ("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://yansara:yansara1234@cluster0.l9hussc.mongodb.net/notesDB?retryWrites=true&w=majority",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`Mongo db connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};
module.exports=connectDB;
