module.exports = {
  posts: [],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    const createdAt = new Date().toLocaleString("pt-BR");
    this.posts.push({
      id: generateId(),
      title,
      description,
      createdAt,
    });
  },
};

const generateId = () => Math.random().toString(36).slice(2);
