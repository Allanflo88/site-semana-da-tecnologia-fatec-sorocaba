'use strict';

var previousPhotos = ["purple", "black", "blue", "red"],
    photo = 0,
    organizers = ["purple", "black", "blue", "red"],
    organizer = 0,
    tabAtual = "monday"

function nextOrganizer() {
    if(organizer < organizers.length-1){
        organizer += 1;
        document.getElementById("organization").style.backgroundColor = organizers[organizer];
    }
    else {
        organizer = 0;
        document.getElementById("organization").style.backgroundColor = organizers[organizer];

    }

}

function previousOrganizer() {

    if(organizer > 0){
        organizer -= 1;
        document.getElementById("organization").style.backgroundColor = organizers[organizer];
    }
    else {
        organizer = organizers.length -1;
        document.getElementById("organization").style.backgroundColor = organizers[organizer];

    } 


}

function nextPhoto(){
    if(photo < previousPhotos.length-1){
        photo += 1;
        document.getElementById("gallery").style.backgroundColor = previousPhotos[photo];
    }
    else {
        photo = 0;
        document.getElementById("gallery").style.backgroundColor = previousPhotos[photo];

    }
}
function previousPhoto(){
    if(photo > 0){
        photo -= 1;
        document.getElementById("gallery").style.backgroundColor = previousPhotos[photo];
    }
    else {
        photo = previousPhotos.length -1;
        document.getElementById("gallery").style.backgroundColor = previousPhotos[photo];

    } 
}
function changeTab(tab){
    var week = ["monday", "tuesday", "wednesday", "thursday", "friday"];
    var containers = document.getElementsByClassName("speakers__container speakers__container--not-show");
    var containerAtual = document.getElementsByClassName("speakers__container");
    
    containerAtual.namedItem(tabAtual + "__container").className = "speakers__container speakers__container--not-show";
    containers.namedItem(week[tab] + "__container").className = "speakers__container";
    
    var tabs = document.getElementsByClassName("speakers__tabs__tab speakers__tabs__tab--active");
    tabs.item(0).className = "speakers__tabs__tab";
    document.getElementById(tabAtual + "__button").className = "speakers__tabs__tab";
    document.getElementById(week[tab] + "__button").className = "speakers__tabs__tab speakers__tabs__tab--active";
    tabAtual = week[tab];
}