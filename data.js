export class Blog {
    constructor(title, desc, date, image, imageAltText) {
        this.title = title
        this.desc = desc
        this.date = date
        this.image = image
        this.imageAltText = imageAltText
    }
}

export const blogs = [
    new Blog("Blog one", "This is the description for blog one", "JULY 23, 2022", "blog-1.jpg", ""),
    new Blog("Blog two", "This is the description for blog two", "JULY 23, 2022", "blog-2.jpg", ""),
    new Blog("Blog three", "This is the description for blog three", "JULY 23, 2022", "blog-3.jpg", ""),
    new Blog("Blog four", "This is the description for blog four", "JULY 23, 2022", "blog-1.jpg", ""),
    new Blog("Blog five", "This is the description for blog five", "JULY 23, 2022", "blog-2.jpg", ""),
    new Blog("Blog six", "This is the description for blog six", "JULY 23, 2022", "blog-3.jpg", ""),
]