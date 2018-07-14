"use strict";

var photo = 0,
  organizers = ["purple", "black", "blue", "red"],
  organizer = 0,
  tabAtual = "monday",
  tabAreaAtual = "frontend";

/*var frontend__button = document.getElementById("frontend__button")

    frontend__button.addEventListener('click', (ev)=>{
        frontend__button.style.transform = "";
    })*/
function start() {
  for (var i = 1; i < 5; i++) {
    document.getElementById("img" + i).style.width = "0";
  }
}

function nextOrganizer() {
  if (organizer < organizers.length - 1) {
    organizer += 1;
    document.getElementById("organization").style.backgroundColor =
      organizers[organizer];
  } else {
    organizer = 0;
    document.getElementById("organization").style.backgroundColor =
      organizers[organizer];
  }
}

function previousOrganizer() {
  if (organizer > 0) {
    organizer -= 1;
    document.getElementById("organization").style.backgroundColor =
      organizers[organizer];
  } else {
    organizer = organizers.length - 1;
    document.getElementById("organization").style.backgroundColor =
      organizers[organizer];
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
    setTimeout(() => {
      document.getElementById("img" + (photo - 1)).style.width = "0";
    }, 1000);
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
    setTimeout(() => {
      document.getElementById("img" + (photo + 1)).style.width = "0";
    }, 1000);
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
