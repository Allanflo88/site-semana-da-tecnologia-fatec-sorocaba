'use strict';

var previousPhotos = ["purple", "black", "blue", "red"],
    photo = 0,
    organizers = ["purple", "black", "blue", "red"],
    organizer = 0;

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