import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anirbanguha88:Tfd4Qn89RUinvd2g@cluster0.7m33x7q.mongodb.net/food-delivery').then(()=> console.log("DB Connected"));
}