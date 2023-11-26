const mural = document.querySelector('[data-js="container-posts"]');
const formNewPost = document.querySelector('[data-js="form-new-post"]');
document.addEventListener("DOMContentLoaded", () => getPosts());
const getPosts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/all");
    if (!response.ok) {
      throw new Error("Não foi possivel obter os dados");
    }
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};

const showPosts = (posts) =>
  posts.map((post) => {
    const {id, title, description, createdAt} = post;
    let postElement = `
        <div id="${id}" class="card">
            <div class="card-header">
                <h4 class="card-title">${title}</h4>
            </div>
                <div class="card-text">${description}</div>
                <p class="card-createdAt">Criado em: ${createdAt}</p>
        </div>`;
    return postElement;
  });

const newPost = async (event) => {
  const elementTarget = event.target;
  const title = elementTarget.title.value;
  const description = elementTarget.description.value;
  let post = {
    title,
    description,
  };
  try {
    const options = {
      method: "POST",
      headers: new Headers({"content-type": "application/json"}),
      body: JSON.stringify(post),
    };
    const response = await fetch("http://localhost:3000/api/new", options);
    if (!response.ok) {
      throw new Error("Não foi possível adicionar o novo post");
    }

    const updatedPosts = await getPosts();
    const ordenateDate = updatedPosts.sort((date2, date1) =>
      date1.createdAt.localeCompare(date2.createdAt)
    );
    mural.innerHTML = showPosts(ordenateDate).join(" ");
  } catch (error) {
    console.log(error);
  }
};

formNewPost.addEventListener("submit", (event) => {
  event.preventDefault();
  newPost(event);
  resetForm();
});

const resetForm = () => formNewPost.reset();

// const data = [
//   "25/11/2023, 09:28:53",
//   "25/11/2023, 09:28:53",
//   "25/11/2023, 09:28:56",
//   "25/11/2023, 09:28:53",
//   "25/11/2023, 09:28:56",
//   "25/11/2023, 09:28:58",
//   "25/11/2023, 09:28:53",
//   "25/11/2023, 09:28:56",
//   "25/11/2023, 09:28:58",
//   "25/11/2023, 09:29:02",
// ];
