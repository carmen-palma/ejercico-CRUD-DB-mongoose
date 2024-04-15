const express = require('express');
   const router = express.Router();
   const Task = require('../models/Task');

   // Endpoint para crear una tarea
   router.post('/create', async (req, res) => {
       const task = new Task({
           title: req.body.title
       });

       try {
           const newTask = await task.save();
           res.status(201).json(newTask);
       } catch (error) {
           res.status(400).json({ message: error.message });
       }
   });

   // Endpoint para obtener todas las tareas
   router.get('/', async (req, res) => {
       try {
           const tasks = await Task.find();
           res.json(tasks);
       } catch (error) {
           res.status(500).json({ message: error.message });
       }
   });

   // Endpoint para buscar una tarea por su ID
   router.get('/id/:_id', async (req, res) => {
       try {
           const task = await Task.findById(req.params._id);
           res.json(task);
       } catch (error) {
           res.status(404).json({ message: 'Tarea no encontrada' });
       }
   });

   // Endpoint para marcar una tarea como completada
   router.put('/markAsCompleted/:_id', async (req, res) => {
       try {
           const task = await Task.findByIdAndUpdate(req.params._id, { completed: true }, { new: true });
           res.json(task);
       } catch (error) {
           res.status(404).json({ message: 'Tarea no encontrada' });
       }
   });

   // Endpoint para actualizar una tarea (solo el título)
   router.put('/id/:_id', async (req, res) => {
       try {
           const task = await Task.findByIdAndUpdate(req.params._id, { title: req.body.title }, { new: true });
           res.json(task);
       } catch (error) {
           res.status(404).json({ message: 'Tarea no encontrada' });
       }
   });

   // Endpoint para eliminar una tarea
   router.delete('/id/:_id', async (req, res) => {
       try {
           await Task.findByIdAndDelete(req.params._id);
           res.json({ message: 'Tarea eliminada' });
       } catch (error) {
           res.status(404).json({ message: 'Tarea no encontrada' });
       }
   });

   module.exports = router;