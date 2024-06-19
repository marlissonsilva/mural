import mongoose, {Document, Schema} from "mongoose";

export interface UserProps extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  links: mongoose.Types.ObjectId[];
}

const UserSchema = new Schema<UserProps>({
  name: {type: String, required: true, minlength: 3, maxlength: 100},
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    unique: true,
  },
  password: {type: String, required: true, minlength: 6, maxlength: 100},
  createdAt: {type: Date, default: Date.now},
  links: [{type: mongoose.Types.ObjectId, ref: "Link"}],
});

const UserModel = mongoose.model<UserProps>("User", UserSchema);
export default UserModel;
