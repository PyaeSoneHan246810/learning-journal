import { blogs } from "/data.js"

renderBlogsContent()

function renderBlogsContent() {
    const blogsContent = document.getElementById("blogs-content")

    const blogsContentHtml = blogs.map(blog => {
        const {title, desc, date, image, imageAltText} = blog
        return `
        <article class="blog">
            <img class="image" src="images/blogs/${image}" alt="${imageAltText}"/>
            <div>
                <p class="date">${date}</p>
                <h2 class="title">${title}</h2>
                <p class="desc">${desc}</p>
                </div>
            <a href="" aria-label="Read more about this blog"></a>
        </article>
        `
    }).join('');
    
    blogsContent.innerHTML = blogsContentHtml
}