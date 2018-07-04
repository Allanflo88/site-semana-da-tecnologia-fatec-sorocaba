'use strict';

var previousPhotos = ["purple", "black", "blue", "red"],
    photo = 0,
    organizers = ["purple", "black", "blue", "red"];
    organizer = 0;

function next(type) {

    if(type){
        nextPhoto(document.getElementById("gallery"));
    }
    else{
        nextPhoto(document.getElementById("organization"));
    }

}

function previous(type) {

    if(type){
        previousPhoto(document.getElementById("gallery"));
    }
    else{
        previousPhoto(document.getElementById("organization"));
    }

}

function nextPhoto(elem){
    if(photo < previousPhotos.length-1){
        photo += 1;
        elem.style.backgroundColor = previousPhotos[photo];
    }
    else {
        photo = 0;
        elem.style.backgroundColor = previousPhotos[photo];

    }
}
function previousPhoto(elem){
    if(photo > 0){
        photo -= 1;
        elem.style.backgroundColor = previousPhotos[photo];
    }
    else {
        photo = previousPhotos.length -1;
        elem.style.backgroundColor = previousPhotos[photo];

    } 
}