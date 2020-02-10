const db = require('./dbConfig');

module.exports = {
    findProjects,
    addProject,
    findResources,
    addResource,
    addTask,
    joinTasks
  };

function findProjects() {
    return db('projects');
}

function addProject(project) {
    return db('projects')
        .insert(project);
}

function findResources() {
    return db('resources');
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
}

function addTask(task) {
    return db('task')
        .insert(task);
}

function joinTasks(projectId) {
    return db('task')
        .leftJoin('projects', 'projects.id', 'task.project_id')
        .select('task.*', 'projects_name', 'projects_description')
}

