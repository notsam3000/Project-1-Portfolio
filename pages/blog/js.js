// modal functionality elements
const newBlogBtn = document.querySelector("#openModalBtn");
const modalContainer = document.querySelector("#modalContainer");
const closeBtn = document.querySelector(".close-btn");
//Post save elements
const publishBtn = document.querySelector("#savePostBtn");
const titleInput = document.querySelector("#blogTitle");
const blogContent = document.querySelector("#blogContent");

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
    console.log("should alert");
    alert("alert citizens of earth we are all about to die!!!");
    return;
  }

  console.log("Post ready to be saved:", { title, content });
});
