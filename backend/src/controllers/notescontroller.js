import Note from '../models/Note.js'

export async function getAllNotes(req,res){
  try{
    const notes = await Note.find().sort({createdAt:-1}) // -1 sort in descending order(show latest)
    res.status(200).json(notes)
  }catch(err){
    console.error(err.message)
    res.status(500).json({message: 'internal server error'})
  }

}

export async function  getNoteById(req,res) {
  try{
    const id = req.params.id
    const noteById = await Note.findById(id)
    if(!noteById){
      res.status(404).json({message:'note not found'})
    }  
    res.status(200).json(noteById)

  }catch(err){
    console.error(err.message)
    res.status(500).json({message: 'internal server error'})
  }
}

export async function createNote(req,res){

  try{
    const {title,content} = req.body
    const note =  await Note({title,content})
    const savedNote = await note.save()
    res.status(200).json(savedNote)
    
  }catch(err){
    console.error(err.message)
    res.status(500).json({message: 'internal server error'})
  }
}

export async function updateNote(req,res){
  try{
    const {title,content} = req.body
    const id = req.params.id
    const updatedNote = await Note.findByIdAndUpdate(id,{title,content},{new:true})
    
    if(!updatedNote){
      return res.status(404).json({message:'note not found'})
    }

    res.status(200).json(updatedNote)
  }catch(err){
    console.error(err.message)
    res.status(500).json({message: 'internal server error'})
  }

}

export async function deleteNote(req,res){
  try{
    const id = req.params.id
    const deletedNote = await Note.findByIdAndDelete(id)
    if(!deletedNote){
    res.status(404).json({message:'note not found to delete'})
  }
  res.status(200).json({message:'successfully deleted note'})
  }catch(err){
    console.error(err.message)
    res.status(500).json({message: 'internal server error'})
  }
}