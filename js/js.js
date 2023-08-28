

var icon = $(".icon");
$(window).scroll(function () {
  //console.log($(this).scrollTop())

  if ($(this).scrollTop() >= 300) {
    icon.show();
  }
  else {
    icon.hide();

  }
});

icon.click(function () {
  window.scrollTo(0,0);
 // $('html,body').animate({ scrollTop: (0) }, '800');
});

let time=document.getElementById("time");
let date =document.getElementById("date");
let t=new Date();
let d=new Date();
time.innerHTML=t.toLocaleTimeString();
date.innerHTML=d.toLocaleDateString();

/*night ,day*/

/*
function daytonight(){
  document.getElementById("night").style.display="block" ;
  document.getElementById("day").style.display="none" ;
 
  document.body.style.backgroundColor="#2b2626";
  document.body.style.color="#dcdcdc";
}
function nighttoday(){
  document.getElementById("night").style.display="none";
  document.getElementById("day").style.display="block" ;
  document.body.style.backgroundColor="#fff";
  document.body.style.color="#2b2626";
}
function daytonightnav(){
  document.getElementById("nightnav").style.display="block";
  document.getElementById("daynav").style.display="none" ;
  

  document.body.style.backgroundColor="#2b2626";
  document.body.style.color="#dcdcdc";
}
function nighttodaynav(){
  document.getElementById("nightnav").style.display="none";
  document.getElementById("daynav").style.display="block" ;
  document.body.style.backgroundColor="#fff";
  document.body.style.color="#2b2626";
}

*/


function daytonightnavartical(){
  document.getElementById("dayartical").style.display="none";
  document.getElementById("nightartical").style.display="block";
  document.getElementById("card-body").style.color="#2b2626";


  document.body.style.backgroundColor="#2b2626";
  document.body.style.color="#dcdcdc";

}
function nighttodayartical(){
  document.getElementById("dayartical").style.display="block";
  document.getElementById("nightartical").style.display="none";

  document.body.style.backgroundColor="#fff";
  document.body.style.color="#2b2626";
}

/*scrool*/

var scrolln = $(".tapestart");//هنا دا ابرمج اني خافيه  الايقونه اكله من انزل و scroll يصير 700 اظهري الايقونه 
$(window).scroll(function () {
  

  if ($(this).scrollTop() >= 1) {
    document.getElementById("navbar").style.margin="0px" ;
    document.getElementById("navbar").style.backgroundColor="#c2c28f";

 
   
  }
  else{
  if ($(this).scrollTop() >= 0) {

    document.getElementById("navbar").style.margin="46px 0px 0px 0px" ;
    document.getElementById("navbar").style.backgroundColor="#ecebe1";

  }}
  
});