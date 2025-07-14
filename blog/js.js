// modal functionality elements
const newBlogBtn = document.querySelector("#openModalBtn");
const modalContainer = document.querySelector("#modalContainer");
const closeBtn = document.querySelector(".close-btn");
//Post save elements
const publishBtn = document.querySelector("#savePostBtn");
const titleInput = document.querySelector("#blogTitle");
const blogContent = document.querySelector("#blogContent");

//render posts on page
const postContainer = document.querySelector("#postsContainer");

//show / hide the modal
newBlogBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.classList.remove("show");
  }
});

//Saving posts to localStorage
publishBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const content = blogContent.innerHTML.trim();

  console.log("title is:", `"${title}"`);
  if (title === "") {
    alert("You are supposed to write the title ig");
    return;
  }
  //object of post
  const post = {
    title: title, // from input
    content: content, // from contenteditable
    createdAt: new Date().toLocaleString(),
    updatedAt: null,
  };

  //list of current posts
  let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  //adding post obj to the start of the list
  posts.unshift(post);

  //saving the updated list back to local storage
  localStorage.setItem("blogPosts", JSON.stringify(posts));
  console.log("Saved posts:", posts);

  //clear modal and close
  titleInput.value = "";
  blogContent.innerHTML = "";
  modalContainer.classList.remove("show");

  //reload posts
  renderPost(); // show the new post immediately

  // console.log("Post ready to be saved:", { title, content });
});

//rendering posts on page

function renderPost() {
  let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  postContainer.innerHTML = "";

  posts.forEach((post, index) => {
    //creating article
    const article = document.createElement("article");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️ Delete";

    //filling article
    article.innerHTML = `
    <h2>${post.title}</h2> 
    <div>${post.content}</div>
    <p><small>🕒 Posted on: ${post.createdAt}</small></p>`;

    deleteBtn.addEventListener("click", () => {
      posts.splice(index, 1); // index comes from the forEach
      localStorage.setItem("blogPosts", JSON.stringify(posts));
      renderPost();
    });

    //pushing article to postsContainer
    postContainer.appendChild(article);
    article.appendChild(deleteBtn);

    //clickable posts
    article.addEventListener("click", () => {
      localStorage.setItem("selectedPostIndex", index);
      window.location.href = "post_page.html";
    });
  });
}

renderPost(); // run once when the page loads
