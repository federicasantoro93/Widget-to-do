/*
Dato l'endpoint https://edgemony-backend.herokuapp.com/todos sviluppare una form per poter anggiungere tramite una fetch 
con metodo POST nuovi elementi alla lista todo. La data di scadenza di ogni todo deve fornita da un input di tipo date.
E' possibile sia creare un nuovo progetto che riutilizzare il widget todo sviluppato la settimana scorsa.
*/

import { API } from './utils.js';
import { List } from './list.js';
import {Add} from './add.js';

const loadList = () => 
fetch('https://edgemony-backend.herokuapp.com/todos') // (API)
//.then(response => response.json())
    .then(response => {
        if (response.status === 404) {
            //console.log('errore!');
            //console warn('errore!); //Debug
            console.error("READ HERE: Could not load remote data, is the server on?"
            );
            document.querySelector('.alert').classList.add("show");
        } else {
            return response.json();
    }
    //response.json()
    })
    .then((data) => List(data));


document.addEventListener('DOMContentLoaded', loadList);

window.addEventListener("hashchange", () => {
    console.log("hash has changed", location.hash); 
    //if(location.hash === '#add'){
     //   Add();
    //};

    switch(location.hash){
        case '#add':
            Add();
            break;
        case '':
            loadList();
        break;
    
    }

});