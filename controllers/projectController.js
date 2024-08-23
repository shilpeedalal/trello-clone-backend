const Project = require('../models/Project')

exports.createProject = async(req, res) => {
    const {name, description} = req.body
    try{
        const project = await Project.create({
            name,
            description,
            user: req.user._id
        })
        res.status(201).json(project)
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getProjects = async(req, res) => {
    try{
        const projects = await Project.find({user: req.user._id})
        res.json(projects)
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getProjectById = async(req,res) => {
    try{
        const project = await Project.findById(req.params.id).populate('tasks')
        if(!project){
            return res.status(404).json({
                message: 'Project not found'
            })
        }
        res.json(project)
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}