export interface BlogState {
    posts: IPost[];
    loading: boolean;
    error: string | null;
    total: any
    currentPage: number
    page: any
    limit: any
    currentPostId: string
}
export interface IPost {
    id: string
    text?: string
    tags?: Array<string>
    image?: string
    likes?: string
    comments?: Comment[]
    owner?: IOwner,
    publishDate?: string
}

export interface IOwner {
    firstName?: string
    lastName?: string
    picture?: string
    title?: string
    id?: string
}
export interface Comment {
    owner: string;
    message: string;
    post?:string
  }