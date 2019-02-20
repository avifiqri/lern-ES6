class Animal {
    constructor(name, gender, old){
        this.name = name;
        this.gender = gender;
        this.old = old;
    }
    displayname(){
        console.log(this.name);
    } 
    displaygender(){
        console.log(this.gender);
    } 
    displayold(){
        console.log(this.old);
    } 

}

class Haven extends Animal{
    constructor(name,gender, old, addres){
        super(name, gender, old);
        this.addres = addres;
    }
    displayaddres(){
        console.log(this.addres);
    }

}


var horse = new Animal("bunsay", "men", 2)
horse.displayname()
horse.displaygender()
horse.displayold()

console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")

let yusuf = new Haven("kamkbing", "men", 2, "cikarang")
yusuf.displayaddres()
yusuf.displayold()
yusuf.displaygender()