import Express from "express";
import cors  from "cors";
import cookieParser from "cookie-parser";
const app=Express();


app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}));
app.use(Express.json({limit:"16kb"}));
app.use(Express.urlencoded({extended:true,limit:"16kb"}));
app.use(Express.static("public"));
app.use(cookieParser());



//router import
import userRouter from  './routes/user.routes.js';

//router declaration
app.use( '/api/v1/users', userRouter );
// http://localhost:8000/api/v1/users/register


export {app};