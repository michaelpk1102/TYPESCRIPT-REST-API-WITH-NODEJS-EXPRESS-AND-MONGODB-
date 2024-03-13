import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, require: true},
    email:{type: String, require: true},
    authentication: {
        password:{type: String, required:true, select:false},
        salt: {type: String, select:false},
        sessionToken: {type: String, select:false}

    }
})

export const userModel = mongoose.model("user", UserSchema)

export const getUsers = () => userModel.find();
export const getEmail = (email:String) => userModel.findOne({email})
export const getUsersBySessionToke = (sessionToken:String)=> userModel.findOne({
    'authentication.sessionToken': sessionToken
})

export const getUserById = (id: String) => userModel.findOne(id)
export const createUser = (values: Record<string, any>) => new userModel(values)
.save().then((user) => user.toObject())
export const deleteUserById = (id: String) => userModel.findOneAndDelete(id)
export const updateUserById  = (id: String, values: Record<string, any>) => userModel.findByIdAndUpdate(id, values)