// Счетчики слайдеров
// значения слайдеров 1
const form_1 = document.querySelector('.form1');
const form_2 = document.querySelector('.form2');
const form_4 = document.querySelector('.form4');
const form_5 = document.querySelector('.form5');
const form_7 = document.querySelector('.form7');
const form_8 = document.querySelector('.form8');

/* begin Up-Down button  */
function scrollTo(to, duration = 700) {
  const
      element = document.scrollingElement || document.documentElement,
      start = element.scrollTop,
      change = to - start,
      startDate = +new Date(),
      // t = current time
      // b = start value
      // c = change in value
      // d = duration
      easeInOutQuad = function (t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      },
      animateScroll = function () {
          const currentDate = +new Date();
          const currentTime = currentDate - startDate;
          element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
          if (currentTime < duration) {
              requestAnimationFrame(animateScroll);
          }
          else {
              element.scrollTop = to;
          }
      };
  animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('#toTop');
  window.addEventListener('scroll', function () {
      // Если прокрутили дальше 599px, показываем кнопку
      if (pageYOffset > 100) {
          btn.classList.add('show');
          // Иначе прячем
      } else {
          btn.classList.remove('show');
      }
  });

  // При клике прокручиываем на самый верх
  btn.onclick = function (click) {
      click.preventDefault();
      scrollTo(0, 400);
  }
});
/* end Up-Down button  */

form_1.querySelector('#rate_1-1').oninput = getRateValue1;
form_1.querySelector('#rate_1-2').oninput = getRateValue2;
form_1.querySelector('#rate_1-3').oninput = getRateValue3;
form_1.querySelector('#rate_1-4').oninput = getRateValue4;
form_1.querySelector('#rate_1-5').oninput = getRateValue5;

form_2.querySelector('#rate_2-1').oninput = getRateValue2_1;
form_2.querySelector('#rate_2-2').oninput = getRateValue2_2;
form_2.querySelector('#rate_2-3').oninput = getRateValue2_3;
form_2.querySelector('#rate_2-4').oninput = getRateValue2_4;
form_2.querySelector('#rate_2-5').oninput = getRateValue2_5;

form_4.querySelector('#rate_3-1').oninput = getRateValue3_1;
form_4.querySelector('#rate_3-2').oninput = getRateValue3_2;
form_4.querySelector('#rate_3-3').oninput = getRateValue3_3;
form_4.querySelector('#rate_3-4').oninput = getRateValue3_4;
form_4.querySelector('#rate_3-5').oninput = getRateValue3_5;
form_4.querySelector('#rate_3-6').oninput = getRateValue3_6;
form_4.querySelector('#rate_3-7').oninput = getRateValue3_7;

form_5.querySelector('#rate_4-1').oninput = getRateValue4_1;
form_5.querySelector('#rate_4-2').oninput = getRateValue4_2;
form_5.querySelector('#rate_4-3').oninput = getRateValue4_3;
form_5.querySelector('#rate_4-4').oninput = getRateValue4_4;
form_5.querySelector('#rate_4-5').oninput = getRateValue4_5;
form_5.querySelector('#rate_4-6').oninput = getRateValue4_6;
form_5.querySelector('#rate_4-7').oninput = getRateValue4_7;

form_7.querySelector('#rate_5-1').oninput = getRateValue5_1;
form_7.querySelector('#rate_5-2').oninput = getRateValue5_2;
form_7.querySelector('#rate_5-3').oninput = getRateValue5_3;
form_7.querySelector('#rate_5-4').oninput = getRateValue5_4;
form_7.querySelector('#rate_5-5').oninput = getRateValue5_5;
form_7.querySelector('#rate_5-6').oninput = getRateValue5_6;
form_7.querySelector('#rate_5-7').oninput = getRateValue5_7;

form_8.querySelector('#rate_6-1').oninput = getRateValue6_1;
form_8.querySelector('#rate_6-2').oninput = getRateValue6_2;
form_8.querySelector('#rate_6-3').oninput = getRateValue6_3;
form_8.querySelector('#rate_6-4').oninput = getRateValue6_4;
form_8.querySelector('#rate_6-5').oninput = getRateValue6_5;
form_8.querySelector('#rate_6-6').oninput = getRateValue6_6;
form_8.querySelector('#rate_6-7').oninput = getRateValue6_7;


function getRateValue1(event) {
  let value = event.target.value;
  document.querySelector('#volume_1-1').innerHTML = value;
}

function getRateValue2(event) {
  let value = event.target.value;
  document.querySelector('#volume_1-2').innerHTML = value;
}

function getRateValue3(event) {
  let value = event.target.value;
  document.querySelector('#volume_1-3').innerHTML = value;
}

function getRateValue4(event) {
  let value = event.target.value;
  document.querySelector('#volume_1-4').innerHTML = value;
}

function getRateValue5(event) {
  let value = event.target.value;
  document.querySelector('#volume_1-5').innerHTML = value;
}


// значения слайдеров 2

function getRateValue2_1(event) {
  let value = event.target.value;
  document.querySelector('#volume_2-1').innerHTML = value;
}

function getRateValue2_2(event) {
  let value = event.target.value;
  document.querySelector('#volume_2-2').innerHTML = value;
}

function getRateValue2_3(event) {
  let value = event.target.value;
  document.querySelector('#volume_2-3').innerHTML = value;
}

function getRateValue2_4(event) {
  let value = event.target.value;
  document.querySelector('#volume_2-4').innerHTML = value;
}

function getRateValue2_5(event) {
  let value = event.target.value;
  document.querySelector('#volume_2-5').innerHTML = value;
}

// значения слайдеров 3

function getRateValue3_1(event) {
  let value = event.target.value;
  document.querySelector('#volume_3-1').innerHTML = value;
}

function getRateValue3_2(event) {
  let value = event.target.value;
  document.querySelector('#volume_3-2').innerHTML = value;
}

function getRateValue3_3(event) {
  let value = event.target.value;
  document.querySelector('#volume_3-3').innerHTML = value;
}

function getRateValue3_4(event) {
  let value = event.target.value;
  document.querySelector('#volume_3-4').innerHTML = value;
}

function getRateValue3_5(event) {
  let value = event.target.value;
  document.querySelector('#volume_3-5').innerHTML = value;
}

function getRateValue3_6(event) {
  let value = event.target.value;
  document.querySelector('#volume_3-6').innerHTML = value;
}

function getRateValue3_7(event) {
  let value = event.target.value;
  document.querySelector('#volume_3-7').innerHTML = value;
}

// значения слайдеров 4

function getRateValue4_1(event) {
  let value = event.target.value;
  document.querySelector('#volume_4-1').innerHTML = value;
}

function getRateValue4_2(event) {
  let value = event.target.value;
  document.querySelector('#volume_4-2').innerHTML = value;
}

function getRateValue4_3(event) {
  let value = event.target.value;
  document.querySelector('#volume_4-3').innerHTML = value;
}

function getRateValue4_4(event) {
  let value = event.target.value;
  document.querySelector('#volume_4-4').innerHTML = value;
}

function getRateValue4_5(event) {
  let value = event.target.value;
  document.querySelector('#volume_4-5').innerHTML = value;
}

function getRateValue4_6(event) {
  let value = event.target.value;
  document.querySelector('#volume_4-6').innerHTML = value;
}

function getRateValue4_7(event) {
  let value = event.target.value;
  document.querySelector('#volume_4-7').innerHTML = value;
}

// значения слайдеров 5

function getRateValue5_1(event) {
  let value = event.target.value;
  document.querySelector('#volume_5-1').innerHTML = value;
}

function getRateValue5_2(event) {
  let value = event.target.value;
  document.querySelector('#volume_5-2').innerHTML = value;
}

function getRateValue5_3(event) {
  let value = event.target.value;
  document.querySelector('#volume_5-3').innerHTML = value;
}

function getRateValue5_4(event) {
  let value = event.target.value;
  document.querySelector('#volume_5-4').innerHTML = value;
}

function getRateValue5_5(event) {
  let value = event.target.value;
  document.querySelector('#volume_5-5').innerHTML = value;
}

function getRateValue5_6(event) {
  let value = event.target.value;
  document.querySelector('#volume_5-6').innerHTML = value;
}

function getRateValue5_7(event) {
  let value = event.target.value;
  document.querySelector('#volume_5-7').innerHTML = value;
}

// значения слайдеров 6

function getRateValue6_1(event) {
  let value = event.target.value;
  document.querySelector('#volume_6-1').innerHTML = value;
}

function getRateValue6_2(event) {
  let value = event.target.value;
  document.querySelector('#volume_6-2').innerHTML = value;
}

function getRateValue6_3(event) {
  let value = event.target.value;
  document.querySelector('#volume_6-3').innerHTML = value;
}

function getRateValue6_4(event) {
  let value = event.target.value;
  document.querySelector('#volume_6-4').innerHTML = value;
}

function getRateValue6_5(event) {
  let value = event.target.value;
  document.querySelector('#volume_6-5').innerHTML = value;
}

function getRateValue6_6(event) {
  let value = event.target.value;
  document.querySelector('#volume_6-6').innerHTML = value;
}

function getRateValue6_7(event) {
  let value = event.target.value;
  document.querySelector('#volume_6-7').innerHTML = value;
}



// Сумма значений слайдеров 1-2

let sum_slider_1 = 0;
let sum_slider_2 = 0;
let sum_chek_1 = 0;
let sum_chek_2 = 0;

document.querySelector('.form3 .button_compare').onclick = compareRate;

function compareRate() {
  let outputs1 = form_1.querySelectorAll('output');
  outputs1.forEach(function (number) {
    sum_slider_1 += Number(number.textContent)
  })
  let outputs2 = form_2.querySelectorAll('output');
  outputs2.forEach(function (number) {
    sum_slider_2 += Number(number.textContent)
  })

  // Сумма чек-боксов первой формы
  let chek1 = document.getElementsByClassName("chek1") 
  for (let i = 0; i<chek1.length; i++) {
    if (chek1[i].checked) {
      sum_chek_1 += 1
    }
  }
  // Сумма чек-боксов второй формы
  let chek2 = document.getElementsByClassName("chek2") 
  for (let i = 0; i<chek2.length; i++) {
    if (chek2[i].checked) {
      sum_chek_2 += 1
    }
  } 

  sum_slider_1 += sum_chek_1;
  sum_slider_2 += sum_chek_2;
  let result = document.querySelector(".result");
  let drob_result_1_1 = document.querySelector(".drob_result_1-1");
  let drob_result_1_2 = document.querySelector(".drob_result_1-2");
  let result_proc = document.querySelector(".result_proc");
  let title_form_3 = document.querySelector(".title_form_3");
  let text1 = document.querySelector(".form1 .heading_services").textContent;
  let text2 = document.querySelector(".form2 .heading_services").textContent;
  let btn_reset_1 = document.querySelector(".form3 .btn_reset")
  
  if (sum_slider_1 > sum_slider_2) {
    var result_value_1 = 100 - ((sum_slider_2 / sum_slider_1) * 100);
    result.innerHTML = text1;
  } else {
    var result_value_1 = 100 - ((sum_slider_1 / sum_slider_2) * 100);
    result.innerHTML = text2;
  }
  if (sum_slider_1 > sum_slider_2 || sum_slider_1 < sum_slider_2) {
    title_form_3.innerHTML = "Исходя из проставленных оценок <br> определен лучший сервис:";
    document.querySelector(".result_val").innerHTML = "Показатели:";
    drob_result_1_1.innerHTML = text1 + " — " + sum_slider_1 + '/31';
    drob_result_1_2.innerHTML = text2 + " — " + sum_slider_2 + '/31';
    result_proc.innerHTML = "Данный сервис лучше отвечает <br> требованиям на " + result_value_1.toFixed(2) + "%";
  } else if (sum_slider_1 == sum_slider_2) {
    title_form_3.innerHTML = "";
    result.innerHTML = "";
    result_proc.innerHTML = "";
    document.querySelector(".result_val").innerHTML = "Показатели критериев для<br> обоих сервисов одинаковы";
    drob_result_1_1.innerHTML = text1 + " — " + sum_slider_1 + '/31';
    drob_result_1_2.innerHTML = text2 + " — " + sum_slider_2 + '/31';
  }
  sum_slider_1 = 0;
  sum_slider_2 = 0;
  sum_chek_1 = 0;
  sum_chek_2 = 0;
  btn_reset_1.classList.add("btn_reset_active");
}


// Сумма значений слайдеров 3-4

let sum_slider_3 = 0;
let sum_slider_4 = 0;

document.querySelector('.form6 .button_compare').onclick = compareRate_2;

function compareRate_2() {
  let outputs1 = form_4.querySelectorAll('output');
  outputs1.forEach(function (number) {
    sum_slider_3 += Number(number.textContent)
  })
  let outputs2 = form_5.querySelectorAll('output');
  outputs2.forEach(function (number) {
    sum_slider_4 += Number(number.textContent)
  })

  let result_2 = document.querySelector(".result_2");
  let drob_result_2_1 = document.querySelector(".drob_result_2-1");
  let drob_result_2_2 = document.querySelector(".drob_result_2-2");
  let result_proc_2 = document.querySelector(".result_proc_2");
  let title_form_6 = document.querySelector(".title_form_6");
  let text1 = document.querySelector(".form4 .heading_services").textContent;
  let text2 = document.querySelector(".form5 .heading_services").textContent;
  let btn_reset_2 = document.querySelector(".form6 .btn_reset")
  
  if (sum_slider_3 > sum_slider_4) {
    var result_value_2 = 100 - ((sum_slider_4 / sum_slider_3) * 100);
    result_2.innerHTML = text1;
  } else {
    var result_value_2 = 100 - ((sum_slider_3 / sum_slider_4) * 100);
    result_2.innerHTML = text2;
  }
  if (sum_slider_3 > sum_slider_4 || sum_slider_3 < sum_slider_4) {
    title_form_6.innerHTML = "Исходя из проставленных оценок <br> определен лучший сервис:";
    document.querySelector(".result_val_2").innerHTML = "Показатели:";
    drob_result_2_1.innerHTML = text1 + " — " + sum_slider_3 + '/35';
    drob_result_2_2.innerHTML = text2 + " — " + sum_slider_4 + '/35';
    result_proc_2.innerHTML = "Данный сервис лучше отвечает <br> требованиям на " + result_value_2.toFixed(2) + "%";
  } else if (sum_slider_3 == sum_slider_4) {
    title_form_6.innerHTML = "";
    result_2.innerHTML = "";
    result_proc_2.innerHTML = "";
    document.querySelector(".result_val_2").innerHTML = "Показатели критериев для<br> обоих сервисов одинаковы";
    drob_result_2_1.innerHTML = text1 + " — " + sum_slider_3 + '/35';
    drob_result_2_2.innerHTML = text2 + " — " + sum_slider_4 + '/35';
  }
  sum_slider_3 = 0;
  sum_slider_4 = 0;
  btn_reset_2.classList.add("btn_reset_active");
}




// Подмена заголовка формы под input 1

  // При нажатии на кнопку Ок

document.querySelector(".form1 .service_button").onclick = inp1;

function inp1() {
  let input1 = document.getElementById("inp_ser_1").value;
  if (input1 != "") {
    document.querySelector(".form1 .heading_services").innerHTML = input1;
  } else {
    document.querySelector(".form1 .heading_services").innerHTML = "Сервис №1";
  }
}

  // При нажатии на Enter
let inp_ent_1 = document.getElementById("inp_ser_1");

inp_ent_1.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    if (document.getElementById("inp_ser_1").value != "") {
      document.querySelector(".form1 .heading_services").innerHTML = document.getElementById("inp_ser_1").value; 
    } else {
      document.querySelector(".form1 .heading_services").innerHTML = "Сервис №1";
    }
  }
});




// Подмена заголовка формы под input 2

  // При нажатии на кнопку Ок

document.querySelector(".form2 .service_button").onclick = inp2;

function inp2() {
  let input2 = document.getElementById("inp_ser_2").value;
  if (input2 != "") {
    document.querySelector(".form2 .heading_services").innerHTML = input2;
  } else {
    document.querySelector(".form2 .heading_services").innerHTML = "Сервис №2";
  }
}

 // При нажатии на Enter
 let inp_ent_2 = document.getElementById("inp_ser_2");

 inp_ent_2.addEventListener("keydown", function(e) {
   if (e.keyCode === 13) {
     if (document.getElementById("inp_ser_2").value != "") {
       document.querySelector(".form2 .heading_services").innerHTML = document.getElementById("inp_ser_2").value; 
     } else {
       document.querySelector(".form2 .heading_services").innerHTML = "Сервис №2";
     }
   }
 });




// Подмена заголовка формы под input 3

 // При нажатии на кнопку ОК

document.querySelector(".form4 .service_button").onclick = inp3;

function inp3() {
  let input3 = document.getElementById("inp_ser_3").value;
  if (input3 != "") {
    document.querySelector(".form4 .heading_services").innerHTML = input3;
  } else {
    document.querySelector(".form4 .heading_services").innerHTML = "Сервис №1";
  }
}

 // При нажатии на Enter
 let inp_ent_3 = document.getElementById("inp_ser_3");

 inp_ent_3.addEventListener("keydown", function(e) {
   if (e.keyCode === 13) {
     if (document.getElementById("inp_ser_3").value != "") {
       document.querySelector(".form4 .heading_services").innerHTML = document.getElementById("inp_ser_3").value; 
     } else {
       document.querySelector(".form4 .heading_services").innerHTML = "Сервис №1";
     }
   }
 });




// Подмена заголовка формы под input 4

 // При нажатии на кнопку ОК

document.querySelector(".form5 .service_button").onclick = inp4;

function inp4() {
  let input4 = document.getElementById("inp_ser_4").value;
  if (input4 != "") {
    document.querySelector(".form5 .heading_services").innerHTML = input4;
  } else {
    document.querySelector(".form5 .heading_services").innerHTML = "Сервис №2";
  }
}

 // При нажатии на Enter
 let inp_ent_4 = document.getElementById("inp_ser_4");

 inp_ent_4.addEventListener("keydown", function(e) {
   if (e.keyCode === 13) {
     if (document.getElementById("inp_ser_4").value != "") {
       document.querySelector(".form5 .heading_services").innerHTML = document.getElementById("inp_ser_4").value; 
     } else {
       document.querySelector(".form5 .heading_services").innerHTML = "Сервис №2";
     }
   }
 });

 // Подмена заголовка формы под input 5

 // При нажатии на кнопку ОК

document.querySelector(".form7 .service_button").onclick = inp5;

function inp5() {
  let input5 = document.getElementById("inp_ser_5").value;
  if (input5 != "") {
    document.querySelector(".form7 .heading_services").innerHTML = input5;
  } else {
    document.querySelector(".form7 .heading_services").innerHTML = "Сервис №2";
  }
}

 // При нажатии на Enter
 let inp_ent_5 = document.getElementById("inp_ser_5");

 inp_ent_5.addEventListener("keydown", function(e) {
   if (e.keyCode === 13) {
     if (document.getElementById("inp_ser_5").value != "") {
       document.querySelector(".form7 .heading_services").innerHTML = document.getElementById("inp_ser_5").value; 
     } else {
       document.querySelector(".form7 .heading_services").innerHTML = "Сервис №2";
     }
   }
 });

// Подмена заголовка формы под input 6

 // При нажатии на кнопку ОК

document.querySelector(".form8 .service_button").onclick = inp6;

function inp6() {
  let input6 = document.getElementById("inp_ser_6").value;
  if (input6 != "") {
    document.querySelector(".form8 .heading_services").innerHTML = input6;
  } else {
    document.querySelector(".form8 .heading_services").innerHTML = "Сервис №2";
  }
}

 // При нажатии на Enter
 let inp_ent_6 = document.getElementById("inp_ser_6");

 inp_ent_6.addEventListener("keydown", function(e) {
   if (e.keyCode === 13) {
     if (document.getElementById("inp_ser_6").value != "") {
       document.querySelector(".form8 .heading_services").innerHTML = document.getElementById("inp_ser_6").value; 
     } else {
       document.querySelector(".form8 .heading_services").innerHTML = "Сервис №2";
     }
   }
 });







// Появление подсказки
// Подсказка 1 первой формы
let btn_1_1 = document.querySelector(".hint_1-1");
btn_1_1.onclick = hint1;

function hint1() {
  let pop_1_1 = document.querySelector(".pop_1-1");
  let hint_1_1 = document.querySelector(".hint_1-1");
  pop_1_1.classList.toggle("active");
  hint_1_1.classList.toggle("hint_1-1-n");
  btn_1_1.setAttribute('disabled', true);
  let exit_btn = document.querySelector(".exit_btn");
  exit_btn.onclick = exit;
  function exit() {
    pop_1_1.classList.remove("active");
    hint_1_1.classList.remove("hint_1-1-n");
    btn.removeAttribute('disabled');
  }
}

document.addEventListener('mousedown', function(e) {
  let pop_1_1 = document.querySelector(".pop_1-1");
  let hint_1_1 = document.querySelector(".hint_1-1");
  if(e.target.closest('.pop') === null){
    pop_1_1.classList.remove("active");
    hint_1_1.classList.remove("hint_1-1-n");
    btn_1_1.removeAttribute('disabled');
}
});

// Подсказка 2 первой формы
let btn_1_2 = document.querySelector(".hint_1-2");
btn_1_2.onclick = hint2;

function hint2() {
  let pop_1_2 = document.querySelector(".pop_1-2");
  let hint_1_2 = document.querySelector(".hint_1-2");
  pop_1_2.classList.toggle("active");
  hint_1_2.classList.toggle("hint_1-2-n");
  btn_1_2.setAttribute('disabled', true);
  let exit_btn = document.querySelector(".exit_btn");
  exit_btn.onclick = exit;
  function exit() {
    pop_1_2.classList.remove("active");
    hint_1_2.classList.remove("hint_1-2-n");
    btn_1_2.removeAttribute('disabled');
  }
}

document.addEventListener('mousedown', function(e) {
  let pop_1_2 = document.querySelector(".pop_1-2");
  let hint_1_2 = document.querySelector(".hint_1-2");
  if(e.target.closest('.pop') === null){
    pop_1_2.classList.remove("active");
    hint_1_2.classList.remove("hint_1-2-n");
    btn_1_2.removeAttribute('disabled');
}
});

// Подсказка 3 первой формы
let btn_1_3 = document.querySelector(".hint_1-3");
btn_1_3.onclick = hint3;

function hint3() {
  let pop_1_3 = document.querySelector(".pop_1-3");
  let hint_1_3 = document.querySelector(".hint_1-3");
  pop_1_3.classList.toggle("active");
  hint_1_3.classList.toggle("hint_1-3-n");
  btn_1_3.setAttribute('disabled', true);
  let exit_btn = document.querySelector(".exit_btn");
  exit_btn.onclick = exit;
  function exit() {
    pop_1_3.classList.remove("active");
    hint_1_3.classList.remove("hint_1-3-n");
    btn_1_3.removeAttribute('disabled');
  }
}

document.addEventListener('mousedown', function(e) {
  let pop_1_3 = document.querySelector(".pop_1-3");
  let hint_1_3 = document.querySelector(".hint_1-3");
  if(e.target.closest('.pop') === null){
    pop_1_3.classList.remove("active");
    hint_1_3.classList.remove("hint_1-3-n");
    btn_1_3.removeAttribute('disabled');
}
});

// Подсказка 4 первой формы
let btn_1_4 = document.querySelector(".hint_1-4");
btn_1_4.onclick = hint4;

function hint4() {
  let pop_1_4 = document.querySelector(".pop_1-4");
  let hint_1_4 = document.querySelector(".hint_1-4");
  pop_1_4.classList.toggle("active");
  hint_1_4.classList.toggle("hint_1-4-n");
  btn_1_4.setAttribute('disabled', true);
  let exit_btn = document.querySelector(".exit_btn");
  exit_btn.onclick = exit;
  function exit() {
    pop_1_4.classList.remove("active");
    hint_1_4.classList.remove("hint_1-4-n");
    btn_1_4.removeAttribute('disabled');
  }
}

document.addEventListener('mousedown', function(e) {
  let pop_1_4 = document.querySelector(".pop_1-4");
  let hint_1_4 = document.querySelector(".hint_1-4");
  if(e.target.closest('.pop') === null){
    pop_1_4.classList.remove("active");
    hint_1_4.classList.remove("hint_1-4-n");
    btn_1_4.removeAttribute('disabled');
}
});

// Подсказка 5 первой формы
let btn_1_5 = document.querySelector(".hint_1-5");
btn_1_5.onclick = hint5;

function hint5() {
  let pop_1_5 = document.querySelector(".pop_1-5");
  let hint_1_5 = document.querySelector(".hint_1-5");
  pop_1_5.classList.toggle("active");
  hint_1_5.classList.toggle("hint_1-5-n");
  btn_1_5.setAttribute('disabled', true);
  let exit_btn = document.querySelector(".exit_btn");
  exit_btn.onclick = exit;
  function exit() {
    pop_1_5.classList.remove("active");
    hint_1_5.classList.remove("hint_1-5-n");
    btn_1_5.removeAttribute('disabled');
  }
}

document.addEventListener('mousedown', function(e) {
  let pop_1_5 = document.querySelector(".pop_1-5");
  let hint_1_5 = document.querySelector(".hint_1-5");
  if(e.target.closest('.pop') === null){
    pop_1_5.classList.remove("active");
    hint_1_5.classList.remove("hint_1-5-n");
    btn_1_5.removeAttribute('disabled');
}
});




// Сумма значений слайдеров 3-4

let sum_slider_5 = 0;
let sum_slider_6 = 0;

document.querySelector('.form9 .button_compare').onclick = compareRate_3;

function compareRate_3() {
  let outputs1 = form_7.querySelectorAll('output');
  outputs1.forEach(function (number) {
    sum_slider_5 += Number(number.textContent)
  })
  let outputs2 = form_8.querySelectorAll('output');
  outputs2.forEach(function (number) {
    sum_slider_6 += Number(number.textContent)
  })

  let result_3 = document.querySelector(".result_3");
  let drob_result_3_1 = document.querySelector(".drob_result_3-1");
  let drob_result_3_2 = document.querySelector(".drob_result_3-2");
  let result_proc_3 = document.querySelector(".result_proc_3");
  let title_form_9 = document.querySelector(".title_form_9");
  let text1 = document.querySelector(".form7 .heading_services").textContent;
  let text2 = document.querySelector(".form8 .heading_services").textContent;
  let btn_reset_3 = document.querySelector(".form9 .btn_reset")
  
  if (sum_slider_5 > sum_slider_6) {
    var result_value_3 = 100 - ((sum_slider_6 / sum_slider_5) * 100);
    result_3.innerHTML = text1;
  } else {
    var result_value_3 = 100 - ((sum_slider_5 / sum_slider_6) * 100);
    result_3.innerHTML = text2;
  }
  if (sum_slider_5 > sum_slider_6 || sum_slider_5 < sum_slider_6) {
    title_form_9.innerHTML = "Исходя из проставленных оценок <br> определен лучший сервис:";
    document.querySelector(".result_val_3").innerHTML = "Показатели:";
    drob_result_3_1.innerHTML = text1 + " — " + sum_slider_5 + '/35';
    drob_result_3_2.innerHTML = text2 + " — " + sum_slider_6 + '/35';
    result_proc_3.innerHTML = "Данный сервис лучше отвечает <br> требованиям на " + result_value_3.toFixed(2) + "%";
    btn_reset_3.classList.add("btn_reset_active");
  } else if (sum_slider_5 == sum_slider_6) {
    title_form_9.innerHTML = "";
    result_3.innerHTML = "";
    result_proc_3.innerHTML = "";
    document.querySelector(".result_val_3").innerHTML = "Показатели критериев для<br> обоих сервисов одинаковы";
    drob_result_3_1.innerHTML = text1 + " — " + sum_slider_5 + '/35';
    drob_result_3_2.innerHTML = text2 + " — " + sum_slider_6 + '/35';
  }
  sum_slider_5 = 0;
  sum_slider_6 = 0;
}




// Сброс оценок 

// Сброс 1 теста
let btn_reset_1 = document.querySelector(".form3 .btn_reset");
btn_reset_1.onclick = reset_1;
const slid_1 = document.querySelector('.rate_1');
const slid_2 = document.querySelector('.rate_2');

function reset_1() {
  let result = document.querySelector(".result");
  let drob_result_1_1 = document.querySelector(".drob_result_1-1");
  let drob_result_1_2 = document.querySelector(".drob_result_1-2");
  let result_proc = document.querySelector(".result_proc");
  let title_form_3 = document.querySelector(".title_form_3");
  let result_val = document.querySelector(".result_val");
  let outputs_1 = form_1.querySelectorAll('output');
  let outputs_2 = form_2.querySelectorAll('output');
  let input_1 = slid_1.querySelectorAll("input");
  let input_2 = slid_2.querySelectorAll("input");
  outputs_1.forEach(function (i) {
    i.innerHTML = "1";
  })
  outputs_2.forEach(function (i) {
    i.innerHTML = "1";
  })
  input_1.forEach(function (i) {
    i.value = 0;
    console.log
  })
  input_2.forEach(function (i) {
    i.value = 0;
    console.log
  })
  result.innerHTML = "";
  drob_result_1_1.innerHTML = "";
  drob_result_1_2.innerHTML = "";
  result_proc.innerHTML = "";
  title_form_3.innerHTML = "";
  result_val.innerHTML = "";
  btn_reset_1.classList.remove("btn_reset_active");
}

// Сброс 2 теста
let btn_reset_2 = document.querySelector(".form6 .btn_reset");
btn_reset_2.onclick = reset_2;
const slid_3 = document.querySelector('.rate_3');
const slid_4 = document.querySelector('.rate_4');

function reset_2() {
  let result_2 = document.querySelector(".result_2");
  let drob_result_2_1 = document.querySelector(".drob_result_2-1");
  let drob_result_2_2 = document.querySelector(".drob_result_2-2");
  let result_proc_2 = document.querySelector(".result_proc_2");
  let title_form_6 = document.querySelector(".title_form_6");
  let result_val_2 = document.querySelector(".result_val_2");
  let outputs_1 = form_4.querySelectorAll('output');
  let outputs_2 = form_5.querySelectorAll('output');
  let input_1 = slid_3.querySelectorAll("input");
  let input_2 = slid_4.querySelectorAll("input");
  outputs_1.forEach(function (i) {
    i.innerHTML = "1";
  })
  outputs_2.forEach(function (i) {
    i.innerHTML = "1";
  })
  input_1.forEach(function (i) {
    i.value = 0;
    console.log
  })
  input_2.forEach(function (i) {
    i.value = 0;
    console.log
  })
  result_2.innerHTML = "";
  drob_result_2_1.innerHTML = "";
  drob_result_2_2.innerHTML = "";
  result_proc_2.innerHTML = "";
  title_form_6.innerHTML = "";
  result_val_2.innerHTML = "";
  btn_reset_2.classList.remove("btn_reset_active");
}

// Сброс 3 теста
let btn_reset_3 = document.querySelector(".form9 .btn_reset");
btn_reset_3.onclick = reset_3;
const slid_5 = document.querySelector('.rate_5');
const slid_6 = document.querySelector('.rate_6');

function reset_3() {
  let result_3 = document.querySelector(".result_3");
  let drob_result_3_1 = document.querySelector(".drob_result_3-1");
  let drob_result_3_2 = document.querySelector(".drob_result_3-2");
  let result_proc_3 = document.querySelector(".result_proc_3");
  let title_form_9 = document.querySelector(".title_form_9");
  let result_val_3 = document.querySelector(".result_val_3");
  let outputs_1 = form_7.querySelectorAll('output');
  let outputs_2 = form_8.querySelectorAll('output');
  let input_1 = slid_5.querySelectorAll("input");
  let input_2 = slid_6.querySelectorAll("input");
  outputs_1.forEach(function (i) {
    i.innerHTML = "1";
  })
  outputs_2.forEach(function (i) {
    i.innerHTML = "1";
  })
  input_1.forEach(function (i) {
    i.value = 0;
    console.log
  })
  input_2.forEach(function (i) {
    i.value = 0;
    console.log
  })
  result_3.innerHTML = "";
  drob_result_3_1.innerHTML = "";
  drob_result_3_2.innerHTML = "";
  result_proc_3.innerHTML = "";
  title_form_9.innerHTML = "";
  result_val_3.innerHTML = "";
  btn_reset_3.classList.remove("btn_reset_active");
}