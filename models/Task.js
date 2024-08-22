const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    project: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Project', 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    status: { 
        type: String, 
        enum: ['Backlog', 'In Discussion', 'In Progress', 'Done'], 
        default: 'Backlog' 
    },
    tags: [{ 
        type: String 
    }],
    dueDate: { 
        type: Date 
    },
    assignedUser: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
