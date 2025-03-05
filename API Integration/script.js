document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById("posts-container");

    // Fetch posts from JSONPlaceholder API
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(response => response.json())
        .then(data => {
            postsContainer.innerHTML = ""; // Clear the "Loading..." text

            data.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            postsContainer.innerHTML = "<p>Error loading posts. Please try again later.</p>";
            console.error("Error fetching posts:", error);
        });
});
