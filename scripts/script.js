function replaceAt(str, index, ch) {
  return str.substr(0, index) + ch + str.substr(index + ch.length + 5);
}

function typeWriterBeginning(i, txt, id, speed) {
  if (i < txt.length) {
    innerHtml = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML = replaceAt(innerHtml, i, txt.charAt(i));

    i++;
    // console.log(i);
    setTimeout(typeWriterBeginning, speed, i, txt, id, speed);
  }
}

function fillIn(txt, id){
  console.log(id);
  console.log(document.getElementById(id));
  let spaces = Array(txt.length).fill('\xa0').join('');
  // console.log(txt.length * " ");
  // console.log(spaces);
  document.getElementById(id).innerHTML = spaces;
}

function typeWriter(){
  let delay = 500;
  let upperText = "Sometimes The Pros Are Mixed With The Average"; let lowerText = "Gotta Sort And Search!";
  
  let id1 = "upperSubtitle"; let id2 = "lowerSubtitle";
  let speed = 50;
  console.log(upperText.length);
  let timeToExectueFirstTypeWriting = upperText.length * speed;

  console.log(document.getElementById("lowerSubtitle"));

  fillIn(upperText, id1);
  fillIn(lowerText, id2);

  setTimeout(typeWriterBeginning, delay, 0, upperText, id1, speed);
  setTimeout(typeWriterBeginning, delay*2 + timeToExectueFirstTypeWriting, 0, lowerText, id2, speed);
}

var typed = new Typed('#aboutMeSwitch', {
    strings: ["a Blogger", "a Pro Programmer", "a Pythonista", "an AlgoExpert"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

typeWriter();



function expandCollapsibles(){
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }
}

expandCollapsibles()
