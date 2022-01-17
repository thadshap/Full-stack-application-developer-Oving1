
/**
 * Display of navigation button and closing the navigation container.
 */
const mobileBtn = document.getElementById('mobile-cta')
      nav = document.querySelector('nav')
      mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
})

/**
 * Function to subtraction and addition button
 */
let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('input');

btnAdd.addEventListener('click', () =>{
    input.value = parseInt(input.value) + 1;
});
btnSubtract.addEventListener('click', () =>{
    input.value = parseInt(input.value) - 1;
});

/**
 * Function to the show and hide button
 */
var a;
function show_hide()
{
if(a==1)
{
document.getElementById("content-box").style.display="inline";
return a=0;
}
else 
{
document.getElementById("content-box").style.display="none";
return a=1;
}
}

/**
 * Send an array of random words to HTML
 */
let data = ["A", "List", "Of", "Random", "Words"];
  
      let list = document.getElementById("list-of-random-words");
  
      data.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      });