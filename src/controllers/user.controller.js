import e from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const registerUser = asyncHandler(async (requiest, response) => {

    //get user details from frontend
    //validation -not empty
    //check if user already exists :username, email
    //check for mage , check for avstar
    //create user object =create entry in db
    //remove password and refersh token field from response
    // check for user creation
    // return res



    // const { fullname, email, username, password } = requiest.body;
    // console.log("Email : ", email);



    if (
        [fullname, username, email].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "Please provide full name, username & email address")
    }
    const existedUser = User.findOne({
        $or: [{ email: email }, { username: username }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with provided email or username already exist");
    }
    const avatarLocalPath = requiest.files?.avatar[0]?.path;
    const coverLocalmagePath = requiest.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(422, "Avatar is required!");
    }


    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverLocalmagePath);

    if (!avatar) {
        throw new ApiError(422, "Avatar is required!");
    }


    const user = await User.create(
        {
            fullname,
            avatar: avatar.url,
            coverImage: coverImage?.url || " ",
            email,
            password,
            username: username.toLowerCase()
        }
    )


















    //   if(fullname==""){
    //     throw new ApiError('Please provide your full name',400)
    //   }

})

export { registerUser }