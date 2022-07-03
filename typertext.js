///////////////////////////////////////////////////////
////////// Project Developed By Jijo John /////////////
////////// Github : github.com/jijo-john  /////////////
///////////////////////////////////////////////////////



var typetextElements = document.getElementsByTagName("typertext");
for (typetextElement of typetextElements) {
  typetextAnimation(typetextElement)
}

function typetextAnimation(typetext) {
  console.log(typetext)
var textArray;
  textArray = String(typetext.innerHTML).split("|");
  console.log(textArray)
  typetext.innerHTML='';
  
  

  var tprint = document.createElement("span");
  typetext.appendChild(tprint);

  var cursor = document.createElement("span");
  cursor.innerHTML = "&nbsp"
  cursor.style.display = "inline-block";
  cursor.style.backgroundColor="white";
  cursor.style.marginLeft = "0.1rem";
  cursor.style.width = "3px";

  typetext.appendChild(cursor);


   //blink
var t = setInterval(function () {
   
  if(cursor.className=="typing") {
    // cursor.style.backgroundColor = "red";
    cursor.style.visibility = cursor.style.visibility == '';
   
  }
  else{
    // cursor.style.backgroundColor = "white";
    cursor.style.visibility = (cursor.style.visibility == 'hidden' ? '' : 'hidden');
   
  }

  }, 500);


  const cursorSpan = cursor;



  typingDelay = 200;
  erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  



  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      tprint.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      tprint.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    }
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
    console.log("ggg iam in typetext.js bottom")
  });
}