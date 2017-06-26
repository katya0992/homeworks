// //задача 1

// let products = [

// {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},

// {title: 'prod3', price: 15}, {title: 'prod4', price: 25},

// {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},

// {title: 'prod7', price: 19}, {title: 'prod8', price: 63}

// ];

// let newProducts = products.filter ((product) => product.price >= 15 && product.price <= 30);

// console.log(newProducts)



// // задача 2


// var arr = [1, 2, 3, 5, 8, 9, 10]
// var res = arr.map(function (num) {
//             var obj = {};
//             obj.digit = num;
//             obj.odd = (num % 2 == 1);
//             return obj
//         });
// console.log(res)



// //задача 3


// var arr = [12, 4, 50, 1, 0, 18, 40];

// var res = arr.every ((element) => element == 0);

// console.log(res);




// //задача 4

// var words = ['yes', 'hello', 'no', 'easycode', 'what'];

// var res = words.some ((word) => word.length > 3);

// console.log (res);


// //задача 5

var arr =
[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2}, 
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, 
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

// ==способ 1==
// var sortByIndex = arr.sort((a, b) => a.index - b.index);
// var newStr = arr.reduce ((prevVal, nextEl) => prevVal + nextEl.char, "")

// console.log(newStr)

//==способ 2===
// var sortByIndex = arr.sort((a, b) => a.index - b.index);
// var newStr = arr.reduce((previous, current) => previous + current.char, "")  ;
// console.log(newStr)


//==способ 3==

var newStr = ' ';

for (var i = 0; i < arr.length; i++) {
	for (var j = 0; j < arr.length; j++)
		if (arr[j].index == i) newStr += arr[j].char
}
console.log(newStr)