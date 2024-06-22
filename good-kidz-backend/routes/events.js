const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Obtener todos los eventos
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear un nuevo evento
router.post('/', async (req, res) => {
  const event = new Event({
    name: req.body.name,
    date: req.body.date,
    description: req.body.description,
    active: req.body.active,
    expiration: req.body.expiration
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener un evento por ID
router.get('/:id', getEvent, (req, res) => {
  res.json(res.event);
});

// Actualizar un evento
router.patch('/:id', getEvent, async (req, res) => {
  if (req.body.name != null) {
    res.event.name = req.body.name;
  }
  if (req.body.date != null) {
    res.event.date = req.body.date;
  }
  if (req.body.description != null) {
    res.event.description = req.body.description;
  }
  try {
    const updatedEvent = await res.event.save();
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar un evento
router.delete('/:id', getEvent, async (req, res) => {
  try {
    await res.event.remove();
    res.json({ message: 'Deleted Event' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getEvent(req, res, next) {
  let event;
  try {
    event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: 'Cannot find event' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.event = event;
  next();
}

module.exports = router;
