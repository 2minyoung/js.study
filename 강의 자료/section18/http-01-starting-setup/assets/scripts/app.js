const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();
  // xhr.setRequestHeader('Content-Type', 'application/json');

  // xhr.open(method, url);

  // xhr.responseType = "json";

  // xhr.onload = function () {
  //   if (xhr.status >= 200 && xhr.status < 300) {
  //     resolve(xhr.response);
  //   } else {
  //     reject(new Error('Something went wrong!'))
  //   }
  // };

  // xhr.onerror = function () {
  //   reject(new Error('Failed to send request!'))
  // }

  // xhr.send(JSON.stringify(data));
  // });
  // return promise;
  return fetch(url, {
    method: method,
    body: data,
    // body: JSON.stringify(data),
    // headers: {
    //   "Content-Type": "application/json",
    // },
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
        return response.json().then((errData) => {
          console.log(errData);
          throw new Error("Something went wrong - server-side.");
        });
      }
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Something went wrong!");
    });
}

async function fetchPosts() {
  try {
    const response = await axios.get(
      // const responseData = await sendHttpRequest(
      // "GET",
      // "https://jsonplaceholder.typicode.com/pos"
      "https://jsonplaceholder.typicode.com/posts"
    );
    const listOfPosts = response.data;
    // const listOfPosts = responseData;
    // const listOfPosts = JSON.parse(xhr.response);
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
    console.log(error.response);
  }
}

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  //JSON 이 아닌 FormData 사용 예시시
  const fd = new FormData();
  fd.append("title", title);
  fd.append("body", content);
  fd.append("userId", userId);

  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
  console.log(response);
  // sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd);
  // sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

fetchButton.addEventListener("click", fetchPosts);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredTitle = event.currentTarget.querySelector("#title").value;
  const enteredContent = event.currentTarget.querySelector("#content").value;

  createPost(enteredTitle, enteredContent);
});

postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("li").id;
    axios.delete(
      // sendHttpRequest(
      // "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
});
