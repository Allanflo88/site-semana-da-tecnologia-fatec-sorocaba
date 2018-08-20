"use strict";

var photo = 0,
  tabAtual = "monday",
  tabAreaAtual = "frontend",
  changingSlide = 0,
  actualOrganizer = "",
  isShownOrganizers = false,
  galleryListener = "",
  x0 = null,
  hasIntro = true;
const tamImg = "90vw",
  orgContainer = "organization__container",
  orgButton = "organization__button",
  organizerCollapse = "organization__container__collapse",
  gallery = " previous__gallery__image",
  spkContainer = " speakers__container",
  active = "--active",
  spkTab = " speakers__tabs__tab",
  instContainer = " instructors__container",
  instBtn = " instructors__tabs__tab";

function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

function lock(e) {
  x0 = unify(e).clientX;
}

function move(e) {
  if (x0 || x0 === 0) {
    let dx = unify(e).clientX - x0,
      s = Math.sign(dx);

    if (dx != 0) {
      if (x0 > dx) {
        nextPhoto();
      } else {
        previousPhoto();
      }
    }

    x0 = null;
  }
}

function start() {
  galleryListener = document.getElementById("gallery");
  galleryListener.addEventListener("touchstart", lock, false);
  galleryListener.addEventListener("touchend", move, false);
  if (window.innerWidth < 768) {
    var elements = document.querySelectorAll("." + gallery.trim() + "--right");
    elements.forEach(e => {
      e.style.width = "0";
    });
  } else {
    var elements = document.querySelectorAll("." + gallery.trim());
    elements.forEach(e => {
      e.classList.remove(gallery.trim() + "--right");
    });
  }
}

function fadeIntro() {
  var intro = document.getElementById("intro");
  intro.classList.remove("previous__gallery__intro--show");
  intro.childNodes
    .item(1)
    .classList.remove("previous__gallery__intro__title--show");
  intro.childNodes
    .item(3)
    .classList.remove("previous__gallery__intro__img--show");
  hasIntro = false;
}

function nextPhoto() {
  if (hasIntro) {
    fadeIntro();
    photo += 1;
    return;
  }

  if (photo < 22) {
    document.getElementById("img" + photo).className =
      gallery + gallery + "--left";
    photo += 1;
    document.getElementById("img" + photo).style.width = tamImg;
    document.getElementById("img" + photo).className = gallery;
    document.getElementById("img" + (photo - 1)).style.width = "0";
  }
}
function previousPhoto() {
  if (photo > 1) {
    document.getElementById("img" + photo).className =
      gallery + gallery + "--right";
    photo -= 1;
    document.getElementById("img" + photo).style.width = tamImg;
    document.getElementById("img" + photo).className = gallery;
    document.getElementById("img" + (photo + 1)).style.width = "0";
  }
}
function changeTab(tab) {
  var week = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  var containers = document.getElementsByClassName(spkContainer);
  var containerAtual = document.querySelectorAll(
    "." + spkContainer.trim() + active
  );
  containerAtual.item(0).className = spkContainer.trim();
  containerAtual.item(0).setAttribute("aria-hidden", "true");
  containers.namedItem(week[tab] + "__container").className =
    spkContainer + spkContainer + active;
  containers.namedItem(week[tab] + "__container").setAttribute("aria-hidden", "false");
  var atual = document.getElementById(tabAtual + "__button");
  atual.className = spkTab;
  atual.setAttribute("aria-selected", "false");
  atual = document.getElementById(week[tab] + "__button");
  atual.className = spkTab + spkTab + active;
  atual.setAttribute("aria-selected", "true");
  tabAtual = week[tab];
}

function changeTabArea(tab) {
  var areas = ["frontend", "backend"];
  var containers = document.getElementsByClassName(instContainer);
  var containerAtual = document.getElementsByClassName(
    instContainer + instContainer + active
  );

  containerAtual.namedItem(
    tabAreaAtual + "__container"
  ).className = instContainer;
  containerAtual
    .namedItem(tabAreaAtual + "__container")
    .setAttribute("aria-hidden", "true");
  containers.namedItem(areas[tab] + "__container").className =
    instContainer + instContainer + active;
  containers
    .namedItem(areas[tab] + "__container")
    .setAttribute("aria-hidden", "false");
  var atual = document.getElementById(tabAreaAtual + "__button");
  atual.className = instBtn;
  atual.setAttribute("aria-selected", "false");
  atual = document.getElementById(areas[tab] + "__button");
  atual.className = instBtn + instBtn + active;
  atual.setAttribute("aria-selected", "true");
  tabAreaAtual = areas[tab];
}

function showOrganizers(container, title, arrow) {
  container.classList.add(orgContainer + "--show");
  title.classList.add(orgButton + active);
  arrow.classList.add(orgButton + "__arrow" + active);
}

function closeOrganizers(container, title, arrow) {
  container.classList.remove(orgContainer + "--show");
  title.classList.remove(orgButton + active);
  arrow.classList.remove(orgButton + "__arrow" + active);
}

function interactOrganizers() {
  var container = document.getElementById("organizer__container");
  var title = document.getElementById("organizer__title");
  var arrow = document.getElementById("organization__arrow");

  if (!isShownOrganizers) {
    showOrganizers(container, title, arrow);
    isShownOrganizers = true;
  } else {
    closeOrganizers(container, title, arrow);
    isShownOrganizers = false;
  }
}

function showOrganizer(organizer) {
  organizer.classList.add(organizerCollapse + "--show");
  organizer.childNodes
    .item(1)
    .classList.add(organizerCollapse + "__text" + active);
  organizer.childNodes
    .item(3)
    .classList.add(organizerCollapse + "__links" + active);
  organizer.childNodes.item(3).childNodes.forEach(elem => {
    if (elem.localName == "a") {
      elem.childNodes
        .item(1)
        .classList.add(organizerCollapse + "__links__img" + active);
    }
  });
}

function closeOrganizer(organizer) {
  organizer.classList.remove(organizerCollapse + "--show");
  organizer.childNodes
    .item(1)
    .classList.remove(organizerCollapse + "__text" + active);
  organizer.childNodes
    .item(3)
    .classList.remove(organizerCollapse + "__links" + active);
  organizer.childNodes.item(3).childNodes.forEach(elem => {
    if (elem.localName == "a") {
      elem.childNodes
        .item(1)
        .classList.remove(organizerCollapse + "__links__img" + active);
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
  } else {
    showOrganizer(organizer);
    actualOrganizer = index;
  }
}
