import * as mongoose from 'mongoose';
var designation_enum = ['Admin']

const userSchema = new mongoose.Schema({
  firstName:{
    type: String,
    default: ""
  },
  lastName:{
    type: String,
    default: ""
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: ""
  },
  accessToken:  {
    type: String,
    default: "",
  },
  role: {
    type: Array,
    default: [],
  }, 
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  isDeleted:  {
    type: Boolean,
    default: false
  },
  resetPasswordToken:{
    type: String,
    default: ""
  }
},
{timestamps:true});

userSchema.set('toJSON',{
  virtuals: false, transform: ( doc, ret, Options) => {
      delete ret.password
      delete ret.__v
      delete ret.resetPasswordToken
      delete ret.accessToken
      //delete ret._id
  }
})

export const userModel = mongoose.model('users', userSchema);