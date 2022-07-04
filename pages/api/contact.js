import { MongoClient } from "mongodb";
const messageHandler=async(req,res)=>{
    const {name,email,subject}=req.body
    if (req.method==="POST") {
        const message = {
            name,
            email,
            subject
        }
        if (!name || name.trim().length<=0 || !email || !email.includes("@") || !subject || subject.trim().length<=0) {
            res.status(422).json({"message":"Invalid Inputs Please try again!"})
            return
        }
        let client
        const connectionString=`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.iv9bk.mongodb.net/${process.env.mongodb_dbName}?retryWrites=true&w=majority`
        try {
             client=await MongoClient.connect(connectionString)
            
        } catch (error) {
            res.status(422).json({"message":"Connecting to database failed"})
            return
        }
        const db = client.db()
        try {
            await db.collection('userContact').insertOne(message)
        } catch (error) {
            res.status(422).json({"message":"Cannot send data to contact"})
            return
        }
        res.status(201).json({"message":"Message Sent Successfully"})
        
    }
}
export default messageHandler