document.addEventListener("DOMContentLoaded", function () {
    fetch("src/js/blog_posts.json")
        .then((response) => response.json())
        .then((data) => {
            const blogPostsList = document.getElementById("blog_posts_list")
            data.forEach((post) => {
                const listItem = document.createElement("li")
                const link = document.createElement("a")
                link.href = post.url
                link.textContent = post.title
                const description = document.createElement("p")
                description.textContent = post.description
                listItem.appendChild(link)
                listItem.appendChild(description)
                blogPostsList.appendChild(listItem)
            })
        })
        .catch((error) => console.error("Error loading blog posts:", error))
})
