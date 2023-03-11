const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://lapankhuongnguyen:6IoOsJOBDAZvI7Os@ims.q4ijqpw.mongodb.net/Ims?retryWrites=true&w=majority");
    console.log("DB connected Sunccessfully!");
  } catch (error) {
    console.log("DB connection failed!");
  }
};

dbConnect();
