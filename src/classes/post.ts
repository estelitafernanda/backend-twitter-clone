class Post {
    id: number;
    content: string;
    createdAt: Date;
    author: User;
    replyPermission: ReplyPermission;

    constructor (
        id: number,
        content: string, 
        author: User, 
        replyPermission: ReplyPermission 
    ){
        this.id = id;
        this.content = content;
        this.createdAt = new Date();
        this.author = author;
        this.replyPermission = replyPermission;
    }
}