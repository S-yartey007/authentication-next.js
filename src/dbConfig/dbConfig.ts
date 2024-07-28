import mongoose from "mongoose";
console.log(process.env.MONGO_URL);
export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on('connected',() => {
            console.log("Mongodb connected")
        })

        connection.on('error',(err) => {
            console.log("Error occured")

        })


    } catch(error) {
        console.log("Datebase Error");
        console.log(error)
    }
}