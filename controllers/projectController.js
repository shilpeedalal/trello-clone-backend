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
        const project = await Project.findById(req.params.id)
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

exports.updateProject = async (req, res) => {
    try {
      const { name, description } = req.body;
      const project = await Project.findByIdAndUpdate(
        req.params.id,
        { name, description },
        { new: true }
      );
      if (!project) return res.status(404).json({ message: 'Project not found' });
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.deleteProject = async (req, res) => {
    try {
      const project = await Project.findByIdAndDelete(req.params.id);
      if (!project) return res.status(404).json({ message: 'Project not found' });
      res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };