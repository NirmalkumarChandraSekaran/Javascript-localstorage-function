const v1=document.querySelector('.Submit');

// v1.addEventListener('click',function(e)
v1.addEventListener('click',function()
{
    // e.preventDefault()
    var ema=document.getElementById('email').value
var pas=document.getElementById('pass').value

localStorage.setItem('email',ema);
localStorage.setItem('password',pas);

console.log(ema);
console.log(pas);
})