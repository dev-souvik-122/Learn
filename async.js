// console.log("First line");
// setTimeout(() => {
//   console.log("Second line after 2 sec");
// }, 2000); //two second pause
// console.log("third line");


var req = async () =>{
  var res = await fetch("https://jsonplaceholder.typicode.com/posts")
  var data = await res.json();
  console.log(data);
}
req()
