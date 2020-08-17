const Task = require('../models/task')
const tasksController = {}
tasksController.list= (req,res)=>{
    Task.find()
    //Task.find({user: req.user._id})
    
    .then((tasks)=>{
        res.json(tasks)
    })
    .catch((err)=>{
        res.json(err)
    })
}

tasksController.create=(req,res)=>{
    console.log(req.msg)
    const body = req.body
    const task = new Task(body)
   // task.user = req.user._id
    task.save()
    .then((task)=>{
        res.json(task)
    })    
    .catch((err)=>{
        res.json(err)
    })
}
tasksController.show=(req,res)=>{
    const id = req.params.id
   // Task.findOne({_id: id, user: req.user._id})
    Task.findById(id)
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}

tasksController.destroy = (req,res)=>{
    const id = req.params.id
    Task.findByIdAndDelete(id)
    //Task.findOneAndDelete({ _id:id, user:req.user._id})
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })
}
tasksController.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Task.findOneAndUpdate({_id:id , user:req.user._id},body, {new:true,runValidators:true })
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        res.json(err)
    })

}

tasksController.completed=(req,res)=>{
    Task.find({completed: true})
    .then((tasks)=>{
        res.json(tasks)
    })
}

module.exports = tasksController