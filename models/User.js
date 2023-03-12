import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
