const $elgazobaza__btn1 = document.querySelector('.gazobaza__btn1');
const $elgazobaza__btn2 = document.querySelector('.gazobaza__btn2');
const $elgazobaza__btn3 = document.querySelector('.gazobaza__btn3');
const $elgazobaza__btn4 = document.querySelector('.gazobaza__btn4');
const $elgazobaza__img  = document.querySelector('.gazobaza__imgWrapper__img');


$elgazobaza__btn1.addEventListener('click', (evn) => {
   $elgazobaza__img.src = './images/gazobaza 1.png'
   $elgazobaza__btn1.classList.add('gazobazabtn-active');

   $elgazobaza__btn2.classList.remove('gazobazabtn-active');
   $elgazobaza__btn3.classList.remove('gazobazabtn-active');
   $elgazobaza__btn4.classList.remove('gazobazabtn-active');

})
$elgazobaza__btn2.addEventListener('click', (evn) => {
    $elgazobaza__img.src = './images/gazobaza 2.png'
    $elgazobaza__btn2.classList.add('gazobazabtn-active');

    $elgazobaza__btn1.classList.remove('gazobazabtn-active');
    $elgazobaza__btn3.classList.remove('gazobazabtn-active');
    $elgazobaza__btn4.classList.remove('gazobazabtn-active');


})
$elgazobaza__btn3.addEventListener('click', (evn) => {
    $elgazobaza__img.src = './images/gazobaza 3.png'
    $elgazobaza__btn3.classList.add('gazobazabtn-active');

    $elgazobaza__btn1.classList.remove('gazobazabtn-active');
    $elgazobaza__btn2.classList.remove('gazobazabtn-active');
    $elgazobaza__btn4.classList.remove('gazobazabtn-active');
 
})
$elgazobaza__btn4.addEventListener('click', (evn) => {
    $elgazobaza__img.src = './images/gazobaza 4.png'
    $elgazobaza__btn4.classList.add('gazobazabtn-active');

    $elgazobaza__btn1.classList.remove('gazobazabtn-active');
    $elgazobaza__btn2.classList.remove('gazobazabtn-active');
    $elgazobaza__btn3.classList.remove('gazobazabtn-active');

 
})
 


// klient section


let sourse = [
    {
        index : 1,
        name : 'Alyona' ,
        adrress : 'Toshkent city',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsum nostrum corporis iure aliquid rem.',
        src  : './images/klient olga.jpg'
    },
    {
        index : 2,
        name : 'Jac' ,
        adrress : 'Rusian',
        text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsum nostrum corporis iure aliquid rem.',
        src  : 'https://freesvg.org/img/Male-Avatar.png'
    },
    {
        index : 3,
        name : 'Maykl' ,
        adrress : 'Brazilya',
        text : ' adipisicing elit. Numquam, ipsum nostrum corporis iure aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsum nostrum corporis iure aliquid rem.',
        src  : './images/klient olga.jpg'
    },
    {
        index : 4,
        name : 'Nike' ,
        adrress : 'Brazilya',
        text : 'loremmmmm Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsum nostrum corporis iure aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsum nostrum corporis iure aliquid rem.',
        src  : 'https://freesvg.org/img/Male-Avatar.png'
        
    }
];

var elleft = document.querySelector('.klient__card--left');
var elright = document.querySelector('.klient__card--right');

var elname = document.querySelector('.klient__cardRight__title');
var eladres = document.querySelector('.klient__cardRight__adres');
var eltext = document.querySelector('.klient__cardRight__text');
var elklient__cardImg = document.querySelector('.klient__card--avatar'); 


// let sourseIteam = 0; 
var son = 0

elname.textContent = sourse[son].name
eladres.textContent = sourse[son].adrress
eltext.textContent = sourse[son].text

elright.addEventListener('click', function sourseIteam(){

   son++

    if (son === 4) {
        son = 0
    }

   console.log(son);
   console.log(sourse[son].name);
   
   elname.textContent = sourse[son].name
   eladres.textContent = sourse[son].adrress
   eltext.textContent = sourse[son].text
//    elklient__cardImg.src = sourse[son].src
  

})

// var son = sourseIteam();

elleft.addEventListener('click', function sourseIteam2(sourseIteam) {

    son--
 
    if (son < 0) {
        son = 3
    }
 
    console.log(son);
    console.log(sourse[son].name);
    
    elname.textContent = sourse[son].name
    eladres.textContent = sourse[son].adrress
    eltext.textContent = sourse[son].text
    // elklient__cardImg.src = sourse[son].src
     
   
 
})
 
// var son = sourseIteam2();


// var elotvet__btn1 = document.querySelector('.otvet__btn1');
var elotvet__text1 = document.querySelector('.otvet__text1');
var elotvet__text2 = document.querySelector('.otvet__text2');
var elotvet__text3 = document.querySelector('.otvet__text3');
var elotvet__text4 = document.querySelector('.otvet__text4');
var elotvet__text5 = document.querySelector('.otvet__text5');



function modal1() {
  elotvet__text1.classList.toggle('block');
  document.querySelector('.otvet__span1').classList.toggle('blue')
  

  
  document.querySelector('.otvet__img1').src ='./images/up.svg'

//   document.querySelector('.otvet__img5').src ='./images/down.svg'
//   document.querySelector('.otvet__img2').src ='./images/down.svg'
//   document.querySelector('.otvet__img3').src ='./images/down.svg'
//   document.querySelector('.otvet__img4').src ='./images/down.svg'

  
}
function modal2() {
    elotvet__text2.classList.toggle('block');
    document.querySelector('.otvet__span2').classList.toggle('blue')

    
  document.querySelector('.otvet__img2').src ='./images/up.svg'

//   document.querySelector('.otvet__img1').src ='./images/down.svg'
//   document.querySelector('.otvet__img5').src ='./images/down.svg'
//   document.querySelector('.otvet__img3').src ='./images/down.svg'
//   document.querySelector('.otvet__img4').src ='./images/down.svg'

  
}
function modal3() {
  elotvet__text3.classList.toggle('block');
  document.querySelector('.otvet__span3').classList.toggle('blue')

  
  document.querySelector('.otvet__img3').src ='./images/up.svg'

//   document.querySelector('.otvet__img1').src ='./images/down.svg'
//   document.querySelector('.otvet__img2').src ='./images/down.svg'
//   document.querySelector('.otvet__img5').src ='./images/down.svg'
//   document.querySelector('.otvet__img4').src ='./images/down.svg'


}
function modal4() {
  elotvet__text4.classList.toggle('block');
  document.querySelector('.otvet__span4').classList.toggle('blue')

  
  document.querySelector('.otvet__img4').src ='./images/up.svg'

//   document.querySelector('.otvet__img1').src ='./images/down.svg'
//   document.querySelector('.otvet__img2').src ='./images/down.svg'
//   document.querySelector('.otvet__img3').src ='./images/down.svg'
//   document.querySelector('.otvet__img5').src ='./images/down.svg'


}
function modal5() {
  elotvet__text5.classList.toggle('block');
  var elotvetSpan =   document.querySelector('.otvet__span5')
  elotvetSpan.classList.toggle('blue')

//   if (elotvetSpan.classList = 'blue') {
    //   }else{
        //     document.querySelector('.otvet__img5').src ='./images/down.svg'
        //   }
        
    document.querySelector('.otvet__img5').src ='./images/up.svg'

  

//   document.querySelector('.otvet__img1').src ='./images/down.svg'
//   document.querySelector('.otvet__img2').src ='./images/down.svg'
//   document.querySelector('.otvet__img3').src ='./images/down.svg'
//   document.querySelector('.otvet__img4').src ='./images/down.svg'

  
}


function modal() {
    var elmodal = document.querySelector('.modal');
    elmodal.style.display = 'block'
    
}
function modalx() {
    var elmodal = document.querySelector('.modal');
    elmodal.style.display = 'none'
    
}