// //задача 1

//  function doubleArray1(arr) {
//     return arr.concat(arr)
//  }
//  var result = doubleArray([1,2,3]); 
// console.log(result);    



// //задача 2

// function lastEl(arr) {
//     return arr[arr.length-1]
// }
// var result = lastEl([2,3,5])



// задача 3

// function getArray (num) {
//     var arr = [];
//     for(var i = 1; i<=num; i++){
//        arr.push(i);
//     }
//     return arr
// }
// let result = getArray(10);
// console.log(result);  



// задача 4

// function changeCollection () {
//     var n= arguments.length,
//         arr = arguments;
//     for(var i = 0; i<n; i++){
//        arr[i].shift();
//     }
//     return arr
// }
// let result = changeCollection([1,2,3],['a','b','c']);
// console.log(result);  
//-------------------------------------------
//


// задача 1

// function reverse1 (str){ 
//     var arr = str.split("");
//     return arr.sort().reverse();
// }
// let result = reverse1 ('bcdae');
// console.log(result);  
 


//задача 2

//  function sortRev(arr){ 
//     return arr.sort((prev, next) => (next-prev))
// }
// let result = sortRev ([2, 4, 7, 1, -2, 10, -9]);
// console.log(result);  



//задача 3

//  function getNewArray(arr, n, m){ 

//     return arr.slice(n, m+1)

// }
// let result = getNewArray (['a', 'b', 'c', 'd', 'e', 'f'], 2, 4);
// console.log(result);  



//задача 4

//   function doubleArray(arr) {
//     return arr.concat(arr)
//  }
//  var result = doubleArray(['one', 2, 'three', 4]); 
// console.log(result);    



// //задача 5

// let arr = [1,2,3,4,5];
// let res;
// res = arr.splice(2,2)




// //задача 6

// let arr = [1,2,3,4,5];
// let res;
// res = arr.splice(2,2, 'three' , 'four')




// //задача 7

// let arr = ['i' , 'learn' , 'javascript']
// let res;
// res = arr.splice (2,0, 'awesome')



// //задача 8

//  function sortByLen(arr){ 
//     return arr.sort((prev, next) => (prev.length - next.length))
// }
// let result = sortByLen([[14, 45], [1], ['a', 'c', 'd']]);
// console.log(result);  



//задача 10

// var a =
// [

// {cpu: 'intel', info: {cores:2, сache: 3}},

// {cpu: 'intel', info: {cores:4, сache: 4}},

// {cpu: 'amd', info: {cores:1, сache: 1}},

// {cpu: 'intel', info: {cores:3, сache: 2}},

// {cpu: 'amd', info: {cores:4, сache: 2}}

// ];

//  function sortByCores(arr){ 
//     return arr.sort((prev, next) => (prev.info.cores - next.info.cores))
// }
// let result = sortByCores(a);
// console.log(result);  



// //задача 11

// let products = [

// {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},

// {title: 'prod3', price: 15}, {title: 'prod4', price: 25},

// {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},

// {title: 'prod7', price: 19}, {title: 'prod8', price: 63}

// ];

//  function filterCollection(arr,min,max){ 
//    var arr2=[];
//     for ( let i = 0; i<arr.length; i++){
//         let p = arr[i].price; //цена текущего продукта
//         if (p >= min && p <= max)   {
//             arr2.push (arr[i]);
//               } 
//      };
//     return arr2.sort((prev, next) => (prev.price - next.price))

// }
// let result = filterCollection(products, 15, 30);
// console.log("Products=" , result);  

