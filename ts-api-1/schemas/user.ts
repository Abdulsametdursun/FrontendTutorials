import mongoose, { Schema } from "mongoose";

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birth_year: number;
};

const UserSchema: Schema<UserType> = new mongoose.Schema<UserType>({
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birth_year: {
    type: Number,
    required: false,
  },
});

const User = mongoose.model("User", UserSchema);

export { User, UserSchema };

export default User;
