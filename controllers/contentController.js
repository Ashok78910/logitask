const asyncHandler = require('express-async-handler')
const Content = require('../models/contentModel')


//@desc fetch all content
//@route GET /api/contents
//@access public

const getContent = asyncHandler(async(req,res) =>{
    const contents = await Content.find({})
    res.json(contents)
})

//@desc fetch one content
//@route GET /api/contents/:id
//@access public

const getContentById = asyncHandler(async(req,res) =>{
    const content = await Content.findById(req.params.id)
    if(content){
        res.json(content);
    }else{
        res.status(404)
        throw new Error('product not found')
    }
})


//@desc create a contents
//@route POST /api/contents
//@access pivate

const createContent = asyncHandler(async (req, res) => {
    const data = req.body
    const content = new Content(data);
    const createdcontent = await content.save()
    res.status(201).json(createdcontent)
  })


  
//@desc update a content
//@route PUT /api/contents/:id
//@access pivate

const updateContent = asyncHandler(async (req, res) => {
    const { language,subject,chapter,topic,Class,title,image} =req.body
  
    const content = await Content.findById(req.params.id)
  
    if (content) {
     content.language = language
     content.subject = subject
     content.Class = Class
     content.topic = topic
     content.chapter=chapter,
     content.title= title,
     content.image = image 
    
  
      const updatedContent = await content.save()
      res.json(updatedContent)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })


  //@desc delete a content
//@route DELETE /api/content/:id
//@access pivate

const deleteContent = asyncHandler(async (req, res) => {
  const content = await Content.findById(req.params.id)
  if (content) {
    await content.remove()
    res.json({ message: 'Content removed' })
  } else {
    res.status(404)
    throw new Error('Content not found')
  }
})

module.exports = {
    getContent,
    getContentById,
    createContent,
    updateContent,
    deleteContent
}