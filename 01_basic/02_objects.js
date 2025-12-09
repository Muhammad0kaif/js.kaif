//objects literal

const Sym=Symbol("key2")

const KaifUser={
 name: "Kaif",
 "full name": "Md Kaif Ansari",
 [Sym]: "Mykey1",    //[]it is use for symbol key
 age: 20,
 location: "Dhanbad",
 email: "mkaif3099@gmail.com",
 isLoggedIn: false,
 LastLoginDays: ["Monday","Sunday"]
}

// console.log(KaifUser.age);
// console.log(KaifUser["age"]);
// console.log(KaifUser["full name"]);
// console.log(KaifUser[Sym]);


// KaifUser.email="kaifeducation3@gmail.com"
// Object.freeze(KaifUser)
// KaifUser.email="mkalim898@gmail.com"

KaifUser.wish= function(){
    console.log("Good Morning");
}

KaifUser.wish2= function(){
    console.log(`Good Morning ${this.name}`); //it is same as ${KaifUser.name}`);
    
}

console.log(KaifUser.wish()); 
console.log(KaifUser.wish2());