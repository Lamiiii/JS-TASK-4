//first

// let person={
//     name:"Lamiye",
//     surname:"Kazimova",
//     age:20,
//     profession:"WEb Developer",
//     hobbies:["reading a book","listening to music","watch the movie"],

//       getFullInfo:function(){
//        return (`Menim adim ${this.name}dir ve men ${this.age} yasindayam.`);
       
//       }
// }

// console.log(person.getFullInfo());




// second

// let car={
//     make:"Hummer",
//     model:"H1",
//     year:2020,
//     color:"grey",   
// }

// car.owner="Lamiye";
// car.color="white"
// delete car.year;


// console.log(car);


// third

// let school={
//     schoolname:"1 sayli mekteb",
//   adress:{
//  street:"Sari torpaq kucesi",
//  city:"Samaxi",
//  country:"Azerbaycan"
// },

// getFullAdress:function(){
//     return (`${this.adress.street},${this.adress.city},${this.adress.country}`);
//  }

// }

// console.log(school.getFullAdress());


// fourth

// let books=[
// {title:"Anna Karanina",author:"Leo Tolstoy",yearPublished:"1978"},
// {title:"Cinayet ve Ceza",author:"Fyodor  Dostoyevski",yearPublished:"1978"},
// {title:"Sefiller",author:"Viktor Huqo",yearPublished:"1978"},

// ]

// for(i=0;i<books.length;i++){
//    console.log(books[i].title);   
// }


// const newBook={title:"Çərpələng uçuran",author:"Xalid Hüseyni",yearPublished:"1978"};

// books.push(newBook);
// console.log(books);


// fifth

// let student1={
//     name:"Lamiye",
//     grade:91,
//     age:20
// }


// let student2={
//     name:"Qeribe",
//     grade:98,
//     age:19
// }


// function getFullGrade(studentA,studentB){
//     if(studentA.grade>studentB.grade){
//     console.log( `${student1.name}nin  qiyneti daha coxdur`);
//     }else if(studentA.grade<studentB.grade){
//       console.log(`${student2.name}nin qiymeti daha coxdur`);
      
//     }else{
//         console.log("Beraberdirler");
        
//     }   
// }

// getFullGrade(student1,student2);



// sixth

// let fullName={
//     name: 'Lami',
//     email: 'lamiyeKazimova5@gmail.com',
//     password: 'lami2004',
//     age: 19
// }


// const {name,email,pasword,age}=fullName;

// console.log(name);
// console.log(age);
// console.log(email);



// seventh

let calculator={
   getFulladd: function(a,b){
        return a+b;
    },
    getFullSubtractor:function(a,b){
        return a-b;
    },

    getFullMultiply:function(a,b){
        return a*b;
    },
    getFullDivide:function(a,b){
        return a/b;
    }
}

console.log(calculator.getFulladd(10,2));
console.log((calculator.getFullSubtractor(12,8)));
console.log((calculator.getFullMultiply(12,8)));
console.log((calculator.getFullDivide(45,5)));





 
