export interface IPost {
    id: string
    text: string
    tags: Array<string>
    image: string
    likes: string
    comments?: any
    owner: IOwner
}

export interface IOwner {
    first_name: string
    last_name: string
    picture: string
    title: string
    id: string
}