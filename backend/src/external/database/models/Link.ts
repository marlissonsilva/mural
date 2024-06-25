import mongoose, {Document, Schema} from "mongoose";

export interface LinkProps extends Document {
  url: string;
  shortUrl: string;
  color: string;
  icon: string;
  userId: mongoose.Types.ObjectId | undefined;
  createdAt: Date;
}

const LinkSchema = new Schema<LinkProps>({
  url: {type: String, minlength: 6, required: true},
  shortUrl: {type: String, minlength: 3, required: true},
  color: {type: String, required: true},
  icon: {type: String},
  userId: {type: mongoose.Types.ObjectId, ref: "User", required: true},
  createdAt: {type: Date, default: Date.now},
});

const LinkModel = mongoose.model<LinkProps>("Link", LinkSchema);
export default LinkModel;
