const Post = require("./Post.js");
//const FileService = require("../FileService.js");

class PostService {
  async saveimg(post, picture) {
    const fileName = `${Date.now()}-${picture.originalname}`;
    const CreatedPost = await Post.create({ ...post, picture: fileName });
    return CreatedPost;
  }
  async create(post) {
    const CreatedPost = await Post.create(post);
    return CreatedPost;
  }
  async getAll() {
    const posts = await Post.find();
    return posts;
  }
  async getOne(id) {
    if (!id) {
      throw new Error("Не указан id");
    }
    const post = await Post.findById(id);
    return post;
  }
  async update(post) {
    if (!post._id) {
      throw new Error("Не указан id");
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }
  async delete(id) {
    if (!id) {
      throw new Error("Не указан id");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

module.exports = new PostService();
//const fileName = FileService.savefile(picture);
