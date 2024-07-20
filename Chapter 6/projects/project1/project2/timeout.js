"use strict";

const one = ()=> console.log('one'); 
const two = ()=> console.log('two'); 
// one();
// two();
const three = () =>{
    console.log('three'); 
    two();
    one();  
};

// three();

const four = () =>{
    console.log('four');  
    setTimeout(one,1000); 
    three();
};

four();
