"use strict";

var photo = 0,
  tabAtual = "monday",
  tabAreaAtual = "frontend",
  changingSlide = 0,
  actualOrganizer = "",
  isShownOrganizers = false;
const tamImg = "16em",
  orgContainer = "organization__container",
  orgButton = "organization__button",
  organizerCollapse = "organization__container__collapse",
  gallery = " previous__gallery__image",
  spkContainer = " speakers__container",
  active = "--active",
  spkTab = " speakers__tabs__tab",
  instContainer = " instructors__container",
  instBtn = " instructors__tabs__tab";

function start() {
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
    document.getElementById("img" + photo).className = gallery + gallery + "--left";
    photo += 1;
    document.getElementById("img" + photo).style.width = tamImg;
    document.getElementById("img" + photo).className = gallery;
    document.getElementById("img" + (photo - 1)).style.width = "0";
  }
}
function previousPhoto() {
  if (photo > 0) {
    document.getElementById("img" + photo).className = gallery + gallery + "--right";
    photo -= 1;
    document.getElementById("img" + photo).style.width = tamImg;
    document.getElementById("img" + photo).className = gallery;
    document.getElementById("img" + (photo + 1)).style.width = "0";
  }
}
function changeTab(tab) {

  var week = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  var containers = document.getElementsByClassName(spkContainer);
  var containerAtual = document.querySelectorAll("." + (spkContainer.trim()) + active);
  containerAtual.item(0).className = spkContainer.trim();
  containers.namedItem(week[tab] + "__container").className = spkContainer + spkContainer + active;

  document.getElementById(tabAtual + "__button").className = spkTab;
  document.getElementById(week[tab] + "__button").className = spkTab + spkTab + active;
  tabAtual = week[tab];
}

function changeTabArea(tab) {
  var areas = ["frontend", "backend"];
  var containers = document.getElementsByClassName(instContainer);
  var containerAtual = document.getElementsByClassName(instContainer + instContainer + active);

  containerAtual.namedItem(tabAreaAtual + "__container").className = instContainer;
  containers.namedItem(areas[tab] + "__container").className = instContainer + instContainer + active;
  document.getElementById(tabAreaAtual + "__button").className = instBtn;
  document.getElementById(areas[tab] + "__button").className = instBtn + instBtn + active;
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
  container.classList.add(orgContainer + "--show");
  title.classList.add(orgButton + active);
  arrow.classList.add(orgButton + "__arrow" + active);

}

function closeOrganizers(container, title, arrow) {
  container.classList.remove(orgContainer + "--show");
  title.classList.remove(orgButton + active);
  arrow.classList.remove(orgButton + active);

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
  organizer.classList.add(organizerCollapse + "--show");
  organizer.childNodes.item(1).classList.add(organizerCollapse + "__text" + active);
  organizer.childNodes.item(3).classList.add( organizerCollapse + "__links" + active);
  organizer.childNodes.item(3).childNodes.forEach((elem) => {
    if (elem.localName == "a") {
      elem.childNodes.item(1).classList.add(organizerCollapse + "__links__img" + active);
    }
  });
}

function closeOrganizer(organizer) {
  organizer.classList.remove(organizerCollapse + "--show");
  organizer.childNodes.item(1).classList.remove(organizerCollapse + "__text" + active);
  organizer.childNodes.item(3).classList.remove(organizerCollapse + "__links" + active);
  organizer.childNodes.item(3).childNodes.forEach((elem) => {
    if (elem.localName == "a") {
      elem.childNodes.item(1).classList.remove(organizerCollapse + "__links__img" + active);
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
