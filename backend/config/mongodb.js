import mongoose from "mongoose";
import dns from "dns";

// Force Node.js to use Google DNS instead of router DNS
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Force IPv4 priority
dns.setDefaultResultOrder("ipv4first");
const connectDB = async()=>{

    mongoose.connection.on('connected',()=>{
        console.log("DB connected");
        
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}

export default connectDB;