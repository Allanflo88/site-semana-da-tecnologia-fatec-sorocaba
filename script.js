"use strict";

var photo = 0,
  tabAtual = "monday",
  tabAreaAtual = "frontend",
  changingSlide = 0,
  actualOrganizer = "",
  isShownOrganizers = false;
const tamImg = "16em";

function start() {
  const gallery = "previous__gallery__image";
  if (window.innerWidth < 768) {
    var elements = document.querySelectorAll("."+ gallery + "--right");
    elements.forEach((e)=>{
      e.style.width = "0";
    });
  }
  else {
    var elements = document.querySelectorAll("."+ gallery);
    elements.forEach((e)=>{
      e.classList.remove(gallery + "--right");
    });
  }
}

function nextPhoto() {
  if (photo < 5) {
    const gallery = " previous__gallery__image";
    document.getElementById("img" + photo).className = gallery + gallery + "--left";
    photo += 1;
    document.getElementById("img" + photo).style.width = tamImg;
    document.getElementById("img" + photo).className = gallery;
    document.getElementById("img" + (photo - 1)).style.width = "0";
  }
}
function previousPhoto() {
  if (photo > 0) {
    const gallery = " previous__gallery__image";
    document.getElementById("img" + photo).className = gallery + gallery + "--right";
    photo -= 1;
    document.getElementById("img" + photo).style.width = tamImg;
    document.getElementById("img" + photo).className = gallery;
    document.getElementById("img" + (photo + 1)).style.width = "0";
  }
}
function changeTab(tab) {
  const container = "speakers__container";
  const active = " speakers__container--active";
  const btn = " speakers__tabs__tab";

  var week = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  var containers = document.getElementsByClassName(container);
  var containerAtual = document.getElementsByClassName(container + active);
  var tabs = document.getElementsByClassName(tab + btn +"--active");

  containerAtual.namedItem(tabAtual + "__container").className = container;
  containers.namedItem(week[tab] + "__container").className = container + active;

  document.getElementById(tabAtual + "__button").className = btn;
  document.getElementById(week[tab] + "__button").className = btn + btn + "--active";
  tabAtual = week[tab];
}

function changeTabArea(tab) {
  const container = "instructors__container";
  const active = " instructors__container--active";
  const btn = " instructors__tabs__tab";

  var areas = ["frontend", "backend"];
  var containers = document.getElementsByClassName(container);
  var containerAtual = document.getElementsByClassName(container + active);

  containerAtual.namedItem(tabAreaAtual + "__container").className = container;
  containers.namedItem(areas[tab] + "__container").className = container + active;
  document.getElementById(tabAreaAtual + "__button").className = btn;
  document.getElementById(areas[tab] + "__button").className = btn + btn + " instructors__tabs__tab--active";
  tabAreaAtual = areas[tab];
}

function animateButton() {
  const btn = " call__button";
  var button = document.getElementById(btn.trim());
  button.className = btn + btn + "--active";
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

function interactOrganizers() {
  var container = document.getElementById("organizer__container");
  var title = document.getElementById("organizer__title");
  var arrow = document.getElementById("organization__arrow");

  if (!isShownOrganizers) {
    showOrganizers(container, title, arrow);
    isShownOrganizers = true
  }
  else {
    closeOrganizers(container, title, arrow);
    isShownOrganizers = false;
  }
}

function showOrganizer(organizer) {
  organizer.classList.add("organization__container__collapse--show");
  organizer.childNodes.item(1).classList.add("organization__container__collapse__text--active");
  organizer.childNodes.item(3).classList.add("organization__container__collapse__links--active");
  organizer.childNodes.item(3).childNodes.forEach((elem) => {
    if (elem.localName == "a") {
      elem.childNodes.item(1).classList.add("organization__container__collapse__links__img--active");
    }
  });
}

function closeOrganizer(organizer) {
  organizer.classList.remove("organization__container__collapse--show");
  organizer.childNodes.item(1).classList.remove("organization__container__collapse__text--active");
  organizer.childNodes.item(3).classList.remove("organization__container__collapse__links--active");
  organizer.childNodes.item(3).childNodes.forEach((elem) => {
    if (elem.localName == "a") {
      elem.childNodes.item(1).classList.remove("organization__container__collapse__links__img--active");
    }
  });
}

function interactOrganizer(index) {
  var organizer = document.getElementById("organizer" + index);
  if (actualOrganizer) {
    closeOrganizer(document.getElementById("organizer" + actualOrganizer));
    if (actualOrganizer != index) {
      showOrganizer(organizer);
      actualOrganizer = index;
      return;
    }
    actualOrganizer = "";

  }
  else {
    showOrganizer(organizer);
    actualOrganizer = index;
  }
}
