//Ex1: Write a function that takes a number as input and returns true if the number is less than or equal to zero, otherwise return false.

// function test(num){
//     if(num <= 0){
//         return true ;
//     }
//     else{
//         return false;
//     }
// }
// console.log(test(8));

//Ex2: Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)=======================

// function next(num){
//     return num + 1 ;
// }

// console.log(next(6));

// Ex3: Write a function that takes an array of strings and returns only the strings with numbers in it as an array. And return an empty array, If there are no strings containing numbers.
// array = ['malek','ibr333ahim', 'ibrahim', 'malek'];

// let newArray = [];

// function check(arr){

//     for(let i = 0; i < arr.length; i++){

//        let regex = /\d/;

//        if(regex.test(arr[i])){

//         newArray.push(arr[i]);
//        }
//     }
//     return newArray;
//     }

// console.log(check(array));

// Ex4: Develop a JS Code to check if a number is even or odd using recursion===================================================
// let start = 10;

// function recursion(num) {

//     if(num == 0){
//         return 'even';
//     }
//     if(num == 1){
//         return 'odd';
//     }

//     return (recursion(num - 2 ));

// }
// console.log(recursion(5));

// Ex5: Write a function to swap all instances of string ch1 with string ch2 and vice versa  (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")

let text = "sssOOOOOhhhh";
let val1 = "s";
let val2 = "h";

let newText = "";
function swap(str, val1, val2) {
  for (let p = 0; p < str.length; p++) {
    if (str[p] == val1) {
      newText = newText + val2;
      continue;
    }
    if (str[p] == val2) {
      newText = newText + val1;
      continue;
    }
    newText = newText + str[p];
  }
  return newText;
}
console.log(swap(text, val1, val2));

//Ex6: Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”============================

// let array = ["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"];

// array.forEach((item)=> console.log(item))

// let names = array.map((item) => item);

// console.log(names);

// Ex8: Project an array of series into an array of {id, title} pairs using forEach()==============================================
// A projection is a process of applying a function to an existing value to produce a new value.

let newArray = [];

// console.log(newArray[1].id);

let newSeries = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

// newSeries.forEach((ele) =>{
//     let newElement = {'id' : ele.id, 'title':ele.title};
//     newArray.push(newElement);
// })

// console.log(newArray);

// Ex 9: Use map() now to implement the same previous functionality============================================================

// let mapsolution = newSeries.map((item) => {
//   return { id: item.id, title: item.title };
// });

// console.log(mapsolution);

// Ex 10: Use filter() to return the series with a rating under 5

// let filterSolution = newSeries.filter((element) => {
//     if(element.rating < 5){
//         return element;
//     }
// })
// console.log(filterSolution);

// Ex 11: Use reduce()  function to return the longest string in an array of strings.============================================
// ["Java", "JavaScript", "Python", "C++", "PHP"]

// let namesArray = ["Java", "JavaScript", "Python", "C++", "PHPPPPPPPPPPPPP"];

// let reduceSolution = namesArray.reduce((acc, ele) => {
//     if(ele.length > acc.length){
//         return ele;
//     }else{
//         return acc ;
//     }
// })

// console.log(reduceSolution);

// Ex 12: Create a function displayName that, given the pokemon data, below,
//uses reduce to return an array containing the names of the characters.

let pokemonData = [
  {
    game_index: 76,
    version: {
      name: "red",
      url: "https://pokeapi.co/api/v2/version/1/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "blue",
      url: "https://pokeapi.co/api/v2/version/2/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "yellow",
      url: "https://pokeapi.co/api/v2/version/3/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "gold",
      url: "https://pokeapi.co/api/v2/version/4/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "silver",
      url: "https://pokeapi.co/api/v2/version/5/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "crystal",
      url: "https://pokeapi.co/api/v2/version/6/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "ruby",
      url: "https://pokeapi.co/api/v2/version/7/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "sapphire",
      url: "https://pokeapi.co/api/v2/version/8/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "emerald",
      url: "https://pokeapi.co/api/v2/version/9/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "firered",
      url: "https://pokeapi.co/api/v2/version/10/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "leafgreen",
      url: "https://pokeapi.co/api/v2/version/11/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "diamond",
      url: "https://pokeapi.co/api/v2/version/12/",
    },
  },
];

// solution

// let charactersNames = [];

function displayName(array) {
  return array.reduce((acc, ele) => {
      acc.push(ele.version.name);
      return acc ;
  },[]);

//   return charactersNames;
}

console.log(displayName(pokemonData));
