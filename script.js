/*async function foo() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const result = await res.json();
    for(const ele of result){
        console.log(ele.area);
    }
  } catch (error) {
    console.log("error");
  }
}
foo();

//length ,i++ , result[i]
//for(let obj of result)
*/
/*async function foo() {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const result = await res.json();
      for(const index in result){
    console.log(result[index].area);
      }
    } catch (error) {
      console.log("error");
    }
  }
  foo();
  //length ,i++
  //index using print
  */
 /* async function foo() {
    try {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const result = await res.json();
      result.forEach(element => {
         console.log(element.name);
      });
    } catch (error) {
      console.log("error");
    }
  }
  foo();
  //foreach similar to map method 
  // it is used only for printing purpose.
  //It iterates/transforms over each and every element and prints the value
  */

  //! spread operator :- converts a string into character array 
  //! syntax:- ...
 /* var arr = ["guvi","geek"]
  var arr1 = ["rupan", "b50"]
  var arr2 = [...arr,...arr1]
  console.log(arr2);
  */
 //!rest parameter
/*function foo(a,b,c,...rest){
var sum = 0;
for(var i=0;i<rest.length;i++){
    sum=sum+rest[i]
}
return sum;
 }
console.log(foo(12,13,14,15,16,17,18))
//a =12
//b=13 
// to consider remaining values
// it used inside the function. 
*/
