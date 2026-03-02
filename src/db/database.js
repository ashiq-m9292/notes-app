import mongoose from "mongoose";

const dbConnect = async (DB_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: process.env.DB_NAME,
        }
        await mongoose.connect(DB_URL, DB_OPTIONS).then(() => {
            console.log("Database connected");
        }).catch((err) => {
            console.log('error in database', err);
        })
    } catch (error) {
        console.log('error in database', error);
    }
}

export default dbConnect;