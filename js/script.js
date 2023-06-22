"use strict";

//Dohvaćanje elementata
const btnNewTaskEl = document.querySelector(".new-task");
const btnPrintEl = document.querySelector(".btn-print");
const taskConEl = document.querySelector(".task-container");
const taskEl = document.querySelectorAll(".task");
const numberAEl = document.querySelectorAll(".number-a");
const numberBEl = document.querySelectorAll(".number-b");
const operatorEL = document.querySelectorAll(".operator");

//Definicija varijabli

//broj a i b koji će se random generirati
let numA;
let numB;
const operatorArr = ["+", "-"];
let operator; // varijabla gdje se sprema random operator + ili -

//event listeneri
btnNewTaskEl.addEventListener("click", newTask);
btnPrintEl.addEventListener("click", function () {
  addClassColorHidden();
  window.print();
  removeClasColorHidden();
});

function newTask() {
  //dvije temp varijable koje će primiti dva random numbera
  let tempNumA;
  let tempNumB;
  taskConEl.classList.remove("animation-task");
  for (let i = 0; i < numberAEl.length; i++) {
    // for loop petlja koja će iterirati kroz cijelu numberA node listu
    operator = operatorArr[Math.round(Math.random())]; //prilikom svake iteracije generira se random operator
    if (operator === "+") {
      [tempNumA, tempNumB] = [...operatorAddRng()];
      numberAEl[i].textContent = `${tempNumA} `;
      numberBEl[i].textContent = ` ${tempNumB} `;
      operatorEL[i].textContent = `${operator}`;
    } else {
      [tempNumA, tempNumB] = [...operatorSubstractRng()];
      numberAEl[i].textContent = `${tempNumA} `;
      numberBEl[i].textContent = ` ${tempNumB} `;
      operatorEL[i].textContent = `${operator}`;
    }
  }
  setTimeout(() => {
    taskConEl.classList.add("animation-task");
  }, 0.5);
}

//Funkcija provjerava kod operatora + da li je zbroj oba broja manji od 100 i vraća ta dva broja ili ako je veći tada generira nova dva broja.
function operatorAddRng() {
  numA = Math.round(Math.random() * 100);
  numB = Math.round(Math.random() * 100);
  while (true) {
    if (numA + numB < 100 && numA !== 0 && numB !== 0) {
      return [numA, numB];
    } else {
      numA = Math.round(Math.random() * 100);
      numB = Math.round(Math.random() * 100);
    }
  }
}

////Funkcija provjerava kod operatora - da li je numA veći od numB i vraća ta dva broja ili ako je numB veći tada se ulazi u petlju i ponovno se generiraju brojevi
function operatorSubstractRng() {
  numA = Math.round(Math.random() * 100);
  numB = Math.round(Math.random() * 100);
  while (true) {
    if (numA >= numB && numA !== 0 && numB !== 0) {
      return [numA, numB];
    } else {
      numA = Math.round(Math.random() * 100);
      numB = Math.round(Math.random() * 100);
    }
  }
}

function addClassColorHidden() {
  taskEl.forEach((task) => {
    task.style.color = `black`;
  });
  btnNewTaskEl.classList.add("hidden");
  btnPrintEl.classList.add("hidden");
}

function removeClasColorHidden() {
  taskEl.forEach((task) => {
    task.style.color = `white`;
  });
  btnNewTaskEl.classList.remove("hidden");
  btnPrintEl.classList.remove("hidden");
}
