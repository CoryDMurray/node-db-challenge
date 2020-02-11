const express = require('express');
const projectsDB = require('../data/dbMethods');

const router = express.Router();

router.get('/projects', (req, res) => {
    projectsDB.findProjects()
        .then(project =>{
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: 'projects not found' });
            }    
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                message: 'Error retrieving the projects from database',
            });   
        })
})

router.get('/tasks', (req, res) => {
    projectsDB.joinTasks()
        .then(task =>{
            if (task) {
                res.status(200).json(task);
            } else {
                res.status(404).json({ message: 'tasks not found' });
            }    
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                message: 'Error retrieving the tasks from database',
            });   
        })
})

router.get('/resources', (req, res) => {
    projectsDB.findResources()
        .then(resource =>{
            if (resource) {
                res.status(200).json(resource);
            } else {
                res.status(404).json({ message: 'resources not found' });
            }    
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                message: 'Error retrieving the resources from database',
            });   
        })
})

router.post('/projects', (req,res) => {
    projectsDB.addProject(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "There was an error while add the project to the database" })   
        })
})

router.post('/resources', (req,res) => {
    projectsDB.addResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "There was an error while add the resource to the database" })   
        })
})



module.exports = router; 