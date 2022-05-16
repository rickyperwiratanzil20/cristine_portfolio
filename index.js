const workEl = document.getElementById('projects');
const aboutEl = document.getElementById('aboutme');

const headingAnimationArray = ["thoughtful", "research-based", "holistic "];
const textEl = document.getElementById('heading-animation');
var textPosition = 0;
var a = 0;
var speed = 100;

document.getElementById('work').addEventListener('click', () => {
  workEl.scrollIntoView({ behavior: "smooth" });
});

document.getElementById('about').addEventListener('click', () => {
  aboutEl.scrollIntoView({ behavior: "smooth" });
});

function changePlace(){
  if(document.getElementById("project-image2").style.zIndex==0){
    document.getElementById("project-image2").style.zIndex = 2;
    document.getElementById("project-image2").style.right = '100px';
    document.getElementById("project-image2").style.opacity = '1';
    document.getElementById("project-image2").style.maxWidth = '35vw';
    document.getElementById("project-image1").style.right = '0px';
    document.getElementById("project-image1").style.opacity = '0.5';
    document.getElementById("project-image1").style.maxWidth = '40vw';
    document.getElementById("project-image2").style.transition = "all 1s";
    document.getElementById("project-image1").style.transition = "all 1s";
  }
  else{
    if(document.getElementById("project-image2").style.zIndex==2){
      document.getElementById("project-image2").style.zIndex = 0;
      document.getElementById("project-image2").style.right = '0px';
      document.getElementById("project-image2").style.opacity = '0.5';
      document.getElementById("project-image2").style.maxWidth = '35vw';
      document.getElementById("project-image1").style.right = '100px';
      document.getElementById("project-image1").style.opacity = '1';
      document.getElementById("project-image1").style.maxWidth = '40vw';
      document.getElementById("project-image1").style.transition = "all 1s";
      document.getElementById("project-image2").style.transition = "all 1s";
    }
  }
}

function typing(){
  if(textPosition < headingAnimationArray[a].length){
    textEl.innerHTML += headingAnimationArray[a].charAt(textPosition);
    textPosition++;
  }
  else{
    if(a==2){
      a = 0;
    }else{
      a++;
    }
    textEl.innerHTML = '';
    textPosition = 0;
  }

  setTimeout(typing, 1000);
}

typing();