import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: false },
    message: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
