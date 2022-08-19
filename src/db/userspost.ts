import * as mongoose from 'mongoose';
var designation_enum = ['Admin']

const userpostSchema = new mongoose.Schema({
  userName:{
    type: String,
    default: ""
  },
  post:{
    type: String,
    default: ""
  },
  image:{
    type: String,
    default: ""
  },
  video:{
    type:String,
    default:""
  },
  likes:{
    type:Number,
    default:""
  },
  comments:{
    type:Number,
    default:""
    },
  userId:{
    type:String,
    default:""
  },
  accessToken:  {
    type: String,
    default: "",
  },
  profile:{
        type: String,
        default:""
        },

   createdAt: {
       type: Date,
       default: Date.now,
         },
  isDeleted:  {
    type: Boolean,
    default: false
  },


},
{timestamps:true});

userpostSchema.set('toJSON',{
  virtuals: false, transform: ( doc, ret, Options) => {
      delete ret.password
      delete ret.__v
      delete ret.resetPasswordToken
      delete ret.accessToken  
      //delete ret._id
  }
})

export const userPostModel = mongoose.model('userpost', userpostSchema);