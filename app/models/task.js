const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const taskSchema = new Schema ({
    title:{
        type:String,
        minlength: [3,'title should more than 3 chars'],
        required:true
  },
 
  completed:{
        type:Boolean,
        default:false
  },
  
  createdAt:{
      type:Date,
      default:Date.now

  },
  expiresAt:{
      type:Date
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    //required:true
}
})
const Task = mongoose.model('Task',taskSchema)

module.exports = Task
         

