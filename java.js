function goText(){
  var txObj = document.getElementById("tx").value;
  if(txObj === 'html'||txObj === 'HTML') {location.href="html.html";}
  else if(txObj === 'css'||txObj === 'CSS'){
    location.href="css.html";
  }
  else if(txObj==='java script'||txObj==='Java Script'){
    location.href="js.html";
  }
  else{
    alert("no page");
  }
}
var Links= {
  setColor:function (color){
    var atag=document.querySelectorAll('a');
    var i=0;
    while(i<atag.length){
      atag[i].style.color=color;
      i=i+1;
    }
  }
}

var Body= {
  setColor:function (color){
    document.querySelector('body').style.color=color;
  },
  setbackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
function turnUp(self){
  var target=document.querySelector('body');
  if(self.value==="night"){
    Body.setColor('white');
    Body.setbackgroundColor('black');
    Links.setColor('powderblue');
    self.value='day';
  }
  else{
    Body.setColor('black');
    Body.setbackgroundColor('white');
    self.value='night';
    Links.setColor('blue');
  }
}
