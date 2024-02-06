import response, { request } from "express"

const asyncHandler=(requestHandler)=>{
    return (request,response,next)=>{
        Promise.resolve(requestHandler(request,response,next)).catch((error)=> next(error));

    }
}

export{asyncHandler};





// const asyncHandler=()=>{}
// const asyncHandler=(function)=>()=>{}
// const asyncHandler=(function)=>async()=>{}


// const asyncHandler=(fu)=>async(request,response,next)=>{
//     try{
//         await fu(request,response,next)
//     }
//     catch(error){
//         response.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }