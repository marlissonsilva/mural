module.exports = {

    posts: [
     
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {

        this.posts.push({ id: generateID(), title, description });
    }

}

function generateID() {
    return Math.random().toString(36).substring(2, 9);  
    // gera um id fotmado por letras e números.
    // .toString(36) = refere-se as 26 letras e os 10 algarismos
}
