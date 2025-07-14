const titleDiv = document.querySelector(".titleDiv");
const contentDiv = document.querySelector(".blogContent");
const dateDiv = document.querySelector(".dateDiv");

const index = localStorage.getItem("selectedPostIndex");
const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

const post = posts[index];

titleDiv.textContent = post.title;
contentDiv.innerHTML = post.content;
dateDiv.textContent = `Posted on: ${post.createdAt}`;
