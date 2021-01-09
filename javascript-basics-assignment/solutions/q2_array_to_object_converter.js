/* Write a Program to convert an array of objects to an object
	based on a given key */
	// Write your code here
	const convert=(array,key)=>{
		if(!Array.isArray(array))
		{
			return null;
		}
		const res=(array,key)=>
		array.reduce((obj,item)=>{
			obj[item[key]]=item
			return obj
		},{});
		return res(array,key)
	};
	
	
	module.exports = convert;
	

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/


