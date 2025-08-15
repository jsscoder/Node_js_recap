import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs"

import jwt, { SignOptions } from "jsonwebtoken";
const userSchema = new Schema({

  avatar: {
    type: {
      url: String,
      localPath: String,
    },
    default: {
      url: ``,
      localPath: "https://placehold.co/600x400"
    }
  },
  username: {
    required: [true, "username is required"],
    type: String,
    unique: true,
    lowercase: true,
    index: true
  },
  password: {
    required: [true, "password is required"],
    type: String,
    minlength: [6, "password must be at least 6 characters long"],
    maxlength: [20, "password must be at most 20 characters long"],
    lowercase: true,
    trim: true
  },
  forgotPasswordToken: {
    type: String
  },
  forgotPasswordExpiry: {
    type: Date
  },
  email: {
    required: [true, "email is required"],
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  emailVerificationToken: {
    type: String
  },
  emailVerificationExpiry: {
    type: Date
  },

  refresh_token: {
    type: String
  },

  access_token: {
    type: String
  },

  createdAt: {
    Date: Date.now()
  },

  updatedAt: {
    Date: Date.now()

  },
  isEmailVerified: {
    type: Boolean,
    default: false
  }


}, { timestamps: true })
// hashing via mongoose hooks
userSchema.pre("save", async function (next) {
  // if password is not modified, skip hashing
  // this is to avoid hashing the password again if it is not changed
  if (!this.isModified("password"))
    return next()

  await bcrypt.hash(this.password, 10)
  next()
})


userSchema.methods.isPasswordMatch = async function (password: string) {
  return await bcrypt.compare(password, this.password);
}



// access token from client
// short lived
// refreshes the access token wihen acces token is timed out
// sended message as the refresh token
// refresh token =new access token
// status code is 401 "Unauthorized" error
// access token is 15 minutes
// refresh token is for 24 hrs


userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email, username: this.username },
    process.env.ACCESS_TOKEN_SECRET as string,
    {
      expiresIn: (process.env.ACCESS_TOKEN_EXPIRY || "15m") as SignOptions["expiresIn"]
    }
  )

}

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email, username: this.username },
    process.env.REFRESH_TOKEN_SECRET as string,
    {
      expiresIn: (process.env.REFRESH_TOKEN_EXPIRY || "24h") as SignOptions["expiresIn"]
    }
  )
}
// exporting the model
export const user = mongoose.model("User", userSchema)


