// require('dotenv').config({path: './env'});
import dotenv from 'dotenv';
import connetDB from './database/index.js';
import { app } from './app.js';

dotenv.config({path: './env'});


connetDB()
.then(() => {
  app.on("error",(err) => {
    console.log("ERROR: ",err);
    throw err;
  })

  app.listen(process.env.PORT || 8000,() => {
    console.log(`App is listening on port ${process.env.PORT}`);
    
  })
})
.catch((err) => {
  console.log("Mongodb connection failed !!!", err);
  
})

















// import express from 'express';

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error",(error) => {
//       console.log("ERROR: ",error);
//       throw error
//     });

//     app.listen(process.env.PORT,() => {
//       console.log(`app is listening on port ${process.env.PORT}`);
      
//     })

//   } catch (error) {
//     console.error("Erorr: ",error);
//   }
// })()