const { json } = require("body-parser");
const PostService = require("./PostService.js");

class PostController {
  async saveimg(req, res) {
    try {
      const post = await PostService.saveimg(req.body, req.file); //req.files.picture
      res.json(post);
    } catch (er) {
      res.status(500).json(er.message);
    }
  }
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture);
      res.json(post);
    } catch (er) {
      res.status(500).json(er.message);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (er) {
      res.status(500).json(er.message);
    }
  }
  async getOne(req, res) {
    try {
      const post = await PostService.getOne(req.params.id);
      return res.json(post);
    } catch (er) {
      res.status(500).json(er.message);
    }
  }
  async update(req, res) {
    try {
      const updatedPost = await PostService.update(req.body);
      return res.json(updatedPost);
    } catch (er) {
      res.status(500).json(er.message);
    }
  }
  async delete(req, res) {
    try {
      const post = await PostService.delete(req.params.id);
      return res.json(post);
    } catch (er) {
      res.status(500).json(er.message);
    }
  }
}

module.exports = new PostController();
