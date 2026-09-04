class User{
    #id;
    #name;
    #email;
    #password

    constructor(name, email, passworld, id = null){
        this.#name = name;
        this.#email = email;
        this.#password = passworld;
        this.#id = id;
    }
    //id
    get id() {
        return this.#id;
    }
    //name
    get name() {
        return this.#name;
    }
    set name (value){
        this.#name = value;
    }
    //email
    get email() {
        return this.#email
    }
    set email (value){
        this.#email = value;
    }
    //passworld
    get passworld() {
        return this.#password
    }
    set passworld(value){
        this.#password = value
    }
    
}

export default User;