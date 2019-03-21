const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index=0;
function init() {
  window.addEventListener("keydown", function(event){
    const key=parseInt(event.which);
    console.log(event.which);
    if(key===code[index]){
      index++;
      if(index===code.length){
        window.alert("Cheat activated, you cheater")
      }
    }
    else{
      index=0;
    }
  })
}
init();	

//You'll want to attach an event listener to document.body and check for 'keydown' events. If the user enters this special code, pressing all ten of the keys in the correct order, alert() a congratulatory message. However, if they press a key out of sequence or a key that isn't part of the Konami code, don't alert() anything and simply keep listening for all ten keydowns in the correct order.

//When you're testing the code out in the browser, be sure to call init() to attach the event listener and set everything up!