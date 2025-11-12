import mongoose from 'mongoose'

export const connectDB = async() => {
  try{
    await mongoose.connect('mongodb+srv://pokalavinay2_db_user:A2UA0tpIKQrCz3Ml@cluster0.tkjww8z.mongodb.net/notes_db?appName=Cluster0')
    console.log('SUCESSFULLY CONNECTED MONGODB')
  }catch(err){
    console.error(err)
    process.exit(1)
  }
}