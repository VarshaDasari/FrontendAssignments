/* Write a program to build a `Pyramid of stars` of given height */


	// Write your code here
	const buildPyramid = (number)=>{

     // Write your code here
     var size = number;
     var row = '';
     for (var i=1; i<=size; i++){
         for(var k=1; (k<=size-i); k++){
             row += ' ';
         }
         for(var j=1; j<=i; j++ ){
             row += ' *';
         }
         row += "  \n";
     }
     console.log(row);
     return row;
};


module.exports = buildPyramid;


/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

