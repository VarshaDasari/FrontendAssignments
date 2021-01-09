// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
const fruitArr=[
    {name:'orange',color:'orange',price:50},
    {name:'Mango',color:'Yellow',price:150},
    {name:'apple',color:'red',price:100},
    {name:'strawberry',color:'pink',price:200}
];
const convertToobj=(fruitArr1,keyfield)=>
fruitArr.reduce((obj,item)=>{
    obj[item[keyfield]]=item;
    return obj;
},{});
const fruitobj=convertToobj(fruitArr,'name');
console.log(fruitobj);
console.log(fruitobj.apple);
console.log(fruitobj.orange);

