var low = ['a','b','c','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var high = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var symmm = "!@#$%^&*()_+{}[]<>?/|~";

var all = low+high+num+symmm;
var p = document.querySelector('p')
var btn = document.querySelector('button')
var copy = document.querySelector('.copy')
btn.addEventListener('click',function(){
  
  // console.log(arr[pwd]);
  let result = '';
  for(let i = 0; i<9;i++){
    var index = Math.floor(Math.random()*all.length);
    result = result+all[index];
  }
  p.innerHTML = result;


  copy.addEventListener('click',function(){
    navigator.clipboard.writeText(p.innerText);
    alert("Password copied!");

  })

})