class Profile {
    id: number;
    user: User;
    bio: string;
    location: string;
    website: string;
    birthDate: Date;

    constructor(
        id: number,
        user: User,
        bio: string,
        location: string,
        website: string,
    ){
        this.id = id;
        this.user = user;
        this.bio = bio;
        this.location = location;
        this.website = website;
        this.birthDate = new Date(); 
    }

}