class User {
    id: number;
    name: string;
    birthDate: Date;
    cellphone: string;
    email: string;
    username: string;
    password: string;

    constructor(
        id: number, 
        name: string, 
        username: string, 
        cellphone: string,
        password: string,
        email: string
    ){
        this.id = id;
        this.name = name;
        this.username = username;
        this.cellphone = cellphone;
        this.email = email;
        this.password = password;
        this.birthDate = new Date();
    }
}