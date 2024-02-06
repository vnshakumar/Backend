import {asyncHandler} from  "../utils/asyncHandler.js";


const registerUser=asyncHandler(async(requiest,response)=>{

    response.status(400).json({
        rmessage:"Avinash Kumar"
    })
})

export {registerUser}