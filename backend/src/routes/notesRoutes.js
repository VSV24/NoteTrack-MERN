import express from 'express'
import {createNote, deleteNote, getAllNotes, updateNote, getNoteById } from '../controllers/notescontroller.js'

const routes = express.Router()

routes.get('/',getAllNotes)

routes.get('/:id',getNoteById)

routes.post('/',createNote)

routes.put('/:id',updateNote)

routes.delete('/:id',deleteNote)

export default routes