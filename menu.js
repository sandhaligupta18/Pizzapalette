

button1 = document.querySelector(".button1");
container5 = document.querySelector(".container5");
main = document.querySelector(".main");
button1.addEventListener("click", () =>{

container5.style.display="block";
document.querySelector("#Menu").style.filter= "blur(3px)";
document.querySelector(".container1").style.filter= "blur(3px)";
let cont = document.querySelector(".container5");
cont.style.position = "absolute";
cont.style.top  = '0';
});
function dustbins(){
let box1 = document.querySelector(".box1");
  box1.remove();
}
function removeContainer(){
  let container5 = document.querySelector(".container5");
  container5.style.display="none"
  document.querySelector("#Menu").style.filter= "none";
  document.querySelector(".container1").style.filter= "none";
}

function Ekbaar(item){
  var cont = document.querySelector('.container5');
  var div = document.createElement('div')
div.classList.add('box1');
cont.appendChild(div);
var div2 = document.createElement('div');
div2.classList.add('content1');
div.appendChild(div2)
var img = document.createElement('img');
img.setAttribute("src",item.children[0].currentSrc);
div2.appendChild(img);
var div3 = document.createElement('div')
div3.classList.add('info');
div2.appendChild(div3);
var h4 = document.createElement('h4');
div3.appendChild(h4);
h4.classList.add('head1');
h4.innerHTML= item.children[2].children[0].innerHTML;
var p = document.createElement('p');
div3.appendChild(p);
p.classList.add('head11');

p.innerHTML= `Price:${item.children[2].children[1].innerHTML} | Size: Large`
  var div4= document.createElement('div')
div4.classList.add('quan','quan-cart');
div3.appendChild(div4);
var p2 = document.createElement('p');
div4.appendChild(p2);
p2.classList.add('quan1','minus1');
p2.innerHTML="-";

p2.setAttribute('onclick',"Subtraction()");
var p3 = document.createElement('p');
div4.appendChild(p3);
p3.classList.add('quan2');
p3.innerHTML="Qty:";
var span = document.createElement('span');
p3.appendChild(span);
span.classList.add('span8');
span.innerHTML=item.children[5].children[1].children[1].children[0].innerHTML;

// var input =document.createElement('input')
// div4.appendChild(input);
// input.classList.add('input1')
// input.setAttribute("type","number");
// input.setAttribute('onclick',"addPrice()");

var p4= document.createElement('p');
div4.appendChild(p4);
p4.classList.add('quan3' ,'cart1');
p4.innerHTML="+";
// p4.setAttribute('onclick',"Addition()")
var div5 = document.createElement('div')
 div.appendChild(div5);
div5.classList.add('content2');
var div6 = document.createElement('div')
 div5.appendChild(div6);
div6.classList.add('deletion');
var div7= document.createElement('div')
 div6.appendChild(div7);
div7.classList.add('dust');
var icon=document.createElement('i');
div7.appendChild(icon);
icon.classList.add('fa-solid' , 'fa-trash');
icon.setAttribute('onclick',"dustbins()")
var p5= document.createElement('p');
div6.appendChild(p5);
p5.innerHTML="Total: ";
var span1= document.createElement('span');
p5.appendChild(span1);
span1.classList.add('span5');
span8=document.querySelector(".span8")
span1.innerHTML=` $${(item.children[2].children[1].children[0].innerHTML) * span8.innerHTML}` ;
}

let s=0;
let v=0;
let w=0;
function Sandhali(item){
min=document.querySelector(".min");
let n= min.innerText;
      if(s<=1 &&  n==='Pepperoni Feast'){
            s++;
        Ekbaar(item);
      }
      else if (v<=1 && n==='Margherita Delight'){
          v++;
        Ekbaar(item);
      }
      else if (w<=1 && n==='jkhgfyt'){
        w++;
        Ekbaar(item);
      }
        };


      
// function Addition(item){
//     spane1 = document.querySelector(".span-1");
//     span1= document.querySelector(".span1");
//     span2 = document.querySelector(".span2")
//     span3=document.querySelector(".sapn3");
     
//     var head1=document.querySelector(".head1");
//     spane1.innerHTML=item.children[5].children[1].children[1].children[0].innerHTML;
//     // span5 = document.querySelector(".span5");
//     // j++;
//     // spane1.innerText = j;

//     // n= Math.floor(n+12.9);
//     // span5.innerText=`$ ${n}`;

// }





// function addPrice(){
  
// var input1 = document.querySelector(".input1").value;
// var span5 = document.querySelector(".span5");
// var head1=document.querySelector(".head1");

// if(head1.innerHTML==='Pepperoni Feast'){
  
//   span5.innerHTML=input1*12.99;
// }
// else if(head1.innerHTML==='Margherita Delight'){

  
//     span5.innerHTML=input1*10.99;
// }

// n= Math.floor(n+12.9);
// span5.innerText=`$ ${n}`;

// }
// function Subtraction(){
    // spane1 = document.querySelector(".span-1");
    // span5 = document.querySelector(".span5");
    // j--;
    // spane1.innerText = j;
    // n=Math.floor(n-12.9);
    // span5.innerText=`$ ${n}`;
// }


cart = document.querySelector(".cart");

const cart2 = document.querySelector('.cart2');
span2 = document.querySelector(".span2");

const cart1 = document.querySelector('.cart1');
span1 = document.querySelector(".span1");

const cart3 = document.querySelector('.cart3');
span3 = document.querySelector(".span3");
minus1 = document.querySelector(".minus1");
minus2 = document.querySelector(".minus2");
minus3 = document.querySelector(".minus3");

function saveData1() {
  localStorage.setItem("data1", span1.innerHTML);

}
function showTask1() {
  span1.innerHTML = localStorage.getItem("data1");

}
function saveData2() {
  localStorage.setItem("data2", span2.innerHTML);
}
function showTask2() {

  span2.innerHTML = localStorage.getItem("data2");
}
function saveData3() {
  localStorage.setItem("data3", span3.innerHTML);
}
function showTask3() {
  span3.innerHTML = localStorage.getItem("data3");
}

function saveInfo() {
  localStorage.setItem("data4", cart.innerText);

}
function showInfo() {
  cart.innerHTML = localStorage.getItem("data4");
}

showInfo();
function cartViewAdd(){
  let a =cart.innerHTML;
  a++;
  cart.innerText = a;
  saveInfo();
}
function cartViewSub(){
  let a =cart.innerHTML;
  a--;
  cart.innerText = a;
  saveInfo();
}

cart1.addEventListener("click", () => {
  let j = span1.innerText;
  j++;
  span1.innerText = j;
  saveData1();
  cartViewAdd();
});
minus1.addEventListener("click", () => {
  let j = span1.innerText;
  if (j > 0) {

    j--;
    span1.innerText = j;
    saveData1();
    cartViewSub();
  }
});
cart2.addEventListener("click", () => {
  let i = span2.innerText;
  i++;
  span2.innerText = i;
  saveData2();
  cartViewAdd();
});
minus2.addEventListener("click", () => {
  let i = span2.innerText;
  if (i > 0) {

    i--;
    span2.innerText = i;
    saveData2();
cartViewSub();
  }
});


cart3.addEventListener("click", () => {
  let k = span3.innerText;
  k++;
  span3.innerText = k;
  saveData3();
  cartViewAdd();
});
minus3.addEventListener("click", () => {
  let k = span3.innerText;
  if (k > 0) {
    k--;
    span3.innerText = k;
    saveData3();
cartViewSub();
  }
});




    showTask1();
    showTask2();
    showTask3();
    showInfo();
    saveInfo();

/* ------------------------------------ js for animaton loading------------------------------------ */
let sand = document.querySelector(".sand");
var container = document.querySelector(".container1");
var loaders = document.querySelector(".loader");
setTimeout(function () {
  $('.loader').fadeToggle(2000);
  loading();
}, 2000);
function loading() {
  loaders.style.display = "none ";
}