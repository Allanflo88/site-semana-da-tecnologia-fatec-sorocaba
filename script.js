"use strict";

var photo = 0,
  tabAtual = "monday",
  tabAreaAtual = "frontend",
  changingSlide = 0,
  actualOrganizer = "",
  isShownOrganizers = false;

function start() {
  for (var i = 1; i < 5; i++) {
    document.getElementById("img" + i).style.width = "0";
  }
}

function nextPhoto() {
  if (photo < 4) {
    document.getElementById("img" + photo).className =
      "previous__gallery__image previous__gallery__image--left";
    photo += 1;
    document.getElementById("img" + photo).style.width = "75%";
    document.getElementById("img" + photo).className =
      "previous__gallery__image";
    document.getElementById("img" + (photo - 1)).style.width = "0";
  }
}
function previousPhoto() {
  if (photo > 0) {
    document.getElementById("img" + photo).className =
      "previous__gallery__image previous__gallery__image--right";
    photo -= 1;
    document.getElementById("img" + photo).style.width = "75%";
    document.getElementById("img" + photo).className =
      "previous__gallery__image";
    document.getElementById("img" + (photo + 1)).style.width = "0";
  }
}
function changeTab(tab) {
  var week = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  var containers = document.getElementsByClassName("speakers__container");
  var containerAtual = document.getElementsByClassName(
    "speakers__container speakers__container--active"
  );

  containerAtual.namedItem(tabAtual + "__container").className =
    "speakers__container";
  containers.namedItem(week[tab] + "__container").className =
    "speakers__container speakers__container--active";

  var tabs = document.getElementsByClassName(
    "speakers__tabs__tab speakers__tabs__tab--active"
  );
  tabs.item(0).className = "speakers__tabs__tab";
  document.getElementById(tabAtual + "__button").className =
    "speakers__tabs__tab";
  document.getElementById(week[tab] + "__button").className =
    "speakers__tabs__tab speakers__tabs__tab--active";
  tabAtual = week[tab];
}

function changeTabArea(tab) {
  var areas = ["frontend", "backend"];
  var containers = document.getElementsByClassName("instructors__container");
  var containerAtual = document.getElementsByClassName(
    "instructors__container instructors__container--active"
  );

  containerAtual.namedItem(tabAreaAtual + "__container").className =
    "instructors__container";
  containers.namedItem(areas[tab] + "__container").className =
    "instructors__container instructors__container--active";

  var tabs = document.getElementsByClassName(
    "instructors__tabs__tab instructors__tabs__tab--active"
  );
  tabs.item(0).className = "speakers__tabs__tab";
  document.getElementById(tabAreaAtual + "__button").className =
    "instructors__tabs__tab";
  document.getElementById(areas[tab] + "__button").className =
    "instructors__tabs__tab instructors__tabs__tab--active";

  tabAreaAtual = areas[tab];
}

function animateButton() {
  var button = document.getElementById("call__button");
  button.className = "call__button call__button--active";
  button.innerText = "";
  setTimeout(() => {
    window.location.href = "http://www.fatecsorocaba.edu.br/";
    window.location.assign("http://www.fatecsorocaba.edu.br/");
  }, 1000);
}

function showOrganizers(container, title, arrow) {
  container.classList.add("organization__container--show");
  title.classList.add("organization__button--active");
  arrow.classList.add("organization__button__arrow--active");
  
}

function closeOrganizers(container, title, arrow) {
  container.classList.remove("organization__container--show");
  title.classList.remove("organization__button--active");
  arrow.classList.remove("organization__button__arrow--active");
  
}

function interactOrganizers(){
  var container = document.getElementById("organizer__container");
  var title = document.getElementById("organizer__title");
  var arrow = document.getElementById("organization__arrow");

  if(!isShownOrganizers){
    showOrganizers(container, title, arrow);
    isShownOrganizers = true
  }
  else{
    closeOrganizers(container, title, arrow);
    isShownOrganizers = false;
  }
}

function showOrganizer(organizer) {
  organizer.classList.add("organization__container__collapse--show");
  organizer.childNodes.item(1).classList.add("organization__container__collapse__text--active");
  organizer.childNodes.item(3).classList.add("organization__container__collapse__links--active");
  organizer.childNodes.item(3).childNodes.forEach((elem) => {
      if(elem.localName == "a"){
        elem.childNodes.item(1).classList.add("organization__container__collapse__links__img--active");
      }
  });
}

function closeOrganizer(organizer){
  organizer.classList.remove("organization__container__collapse--show");
  organizer.childNodes.item(1).classList.remove("organization__container__collapse__text--active");
  organizer.childNodes.item(3).classList.remove("organization__container__collapse__links--active");
  organizer.childNodes.item(3).childNodes.forEach((elem) => {
      if(elem.localName == "a"){
        elem.childNodes.item(1).classList.remove("organization__container__collapse__links__img--active");
      }
  });
}

function interactOrganizer(index){
  var organizer = document.getElementById("organizer" + index);
  if (actualOrganizer) {
    closeOrganizer(document.getElementById("organizer" + actualOrganizer));
    if(actualOrganizer != index){
      showOrganizer(organizer);
      actualOrganizer = index;
      return;
    }
    actualOrganizer = "";
    
  }
  else{
    showOrganizer(organizer);
    actualOrganizer = index;
  }
}
