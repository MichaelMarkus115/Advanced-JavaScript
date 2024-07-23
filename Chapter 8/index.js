"use strict";

//global methods//

// let x = 7;
// console.log(isNaN(x));

////////////encoding and decoding uri//////////
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

//decodeUriComponent() and encodeUriComponent()//
// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

//8.1//
// let string1 = "How's%20it%20going%3F";
// let string2 = "How's it going?";

// let decodedComponent = decodeURIComponent(string1);
// console.log(decodedComponent);

// let encodedComponent = encodeURIComponent(string2);
// console.log(encodedComponent);

// let uri = "http://www.basescripts.com?=Hello World";
// let encoded = encoded(uri);
// console.log(encoded);

///////////Parsing numbers////////////
// let str_int = "6";
// let int_int = parseInt(str_int);
// console.log("Type of ", int_int, "is", typeof int_int);

// let str_float = "7.6";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);

// let str_binary = "0b101";
// let int_binary = parseInt(str_binary);
// console.log("Type of", int_binary, "is", typeof int_binary);

// let str_nan = "hello!";
// let int_nan = parseInt(str_nan);
// console.log("Type of", int_nan, "is", typeof int_nan);

// let str_float = "7.6";
// let float_float = parseFloat(str_float);
// console.log("Type of", float_float, "is", typeof float_float);

// let str_version_nr = "2.3.4";
// let float_version_nr = parseFloat(str_version_nr);
// console.log("Type of", float_version_nr, "is", typeof float_version_nr);

// let str_int = "6";
// let float_int = parseFloat(str_int);
// console.log("Type of", float_int, "is", typeof float_int);

// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);

// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

//ARRAY METHODS//
// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//     console.log("Printing stuff: ", element, "on array position: ", index);
// };

// arr.forEach(printStuff);
//arr.forEach(element, index) => console.log("Printing stuff: ", element, "on array position: ", index);

//FILTERING ARRAY//
// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// function checkString(element, index) {
//     return typeof element === "string";
// };

// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// console.log(arr.every(checkString));

// //REPLACING//
// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 4);

// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 5);

// let arr = ["grapefruit", 4, "hello", 5.6, true, false];
// arr.copyWithin(0, 3);
// console.log(arr);

//8.2
// let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

// let arr2 = arr.filter ( (value, index, array) => {
//     console.log(value,index,array.indexOf(value));
//     return array.indexOf(value) === index;
// });

// console.log(arr2);

// //8.3
// let myArr = [1,4,5,6];
// let myArr1 = myArr.map(function(ele){
//     return ele * 2;
// });

// console.log(myArr1);

// let myArr2 = myArr.map((ele)=> ele*2);
// console.log(myArr2);

//STRING METHODS//
// let s1 = "Hello";
// let s2 = " JavaScript";
// let result = s1.concat(s2);

// console.log(result);

//converting string into an array// split()
// let result = "Hello JavaScript";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);
// x = letters.join("-");
// console.log(x);
// x = letters.join("/");
// console.log(x);

//INDEXES//
// let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
// // let index_re = poem.indexOf("re");
// // console.log(index_re);

// // let indexNotFound = poem.indexOf("python");
// // console.log(indexNotFound);

// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);

// let notFound = searchStr.search("JavaScript");
// console.log(notFound);

// let pos1 = poem.charAt(10);
// console.log(pos1);

// let pos2 = poem.charAt(1000);
// console.log(pos2);

// //CREATING SUBSTRINGS//
// let str = "Create a substring";
// let substr1 = str.slice(5);
// let substr2 = str.slice(0,3);
// console.log("1:", substr1);
// console.log("2:", substr2);

// //REPLACING PARTS OF THE STRINGS//
// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);

// let new_hi2 = hi.replace("not there", "never there");
// console.log(new_hi2);

//8.4//
// let val = "thIs will be capiTalized for each word";
// function wordsCaps(str) {
//     str = str.toLowerCase();
//     let tempArr = [];
//     let words = str.split(" ");
//     words.forEach(word => {
//         let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//         tempArr.push(temp);
//     });
//     return tempArr.join(" ");
// }
// console.log(wordsCaps(val));

// //8.5//
// let val = "I love JavaScript";
// val = val.toLowerCase();
// let vowels = ["a","e","i","o","u"];
// vowels.forEach((letter,index) =>{
//     console.log(letter);
//     val = val.replaceAll(letter,index);
// });
// console.log(val);


// //8.6//
// console.log(Math.PI);
// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random()*11)); // 0-10
// console.log(Math.floor(Math.random()*10)+1); // 1-10;
// console.log(Math.floor(Math.random()*100)+1); // 1-100;
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// for (let x = 0; x < 100; x++) {
//     console.log(randomNumber(1, 100));
// }


// //8.7//
// let future = new Date(2025, 5, 15);
// console.log(future);
// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month-1]} ${day} ${year}`;
// console.log(myDate);
