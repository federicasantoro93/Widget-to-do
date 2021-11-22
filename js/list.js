import { render, API } from './utils.js';

const List = (data) => {
    const elements = data
//.map(item =>`<li><label><input type="checkbox" id="${item.id}" ${item.completed ? "checked" : "unchecked"}/> ${item.title}</label></li>`) //Non riesco a dare la condizione checked
.map(
    (item) =>`<li>
    <label class=${item.completed == "true" ? "checked" : "unchecked" }><input type="checkbox" id="${item.id}" ${item.completed == "true" ? "checked" : "unchecked"}  /> ${item.title}</label>
    <button class="delete" id="${item.id}">x</button>
    <hr>
    </li>`) 
    
    .join('');

    const container = document.querySelector('#container');
    render(container, `
        <p>Tick the completed tasks!</p>
        <ul>${elements}</ul>
        <a href="#add" id="add">Add a new item to the list</a> 
    `
    );

  /*  const DItem = (event) =>
        switch(style)

        
            switch (${item.completed}){
                case 'true':
                 style.${item.id}="text decoration:line-through";
                    break;
                case 'false':
                 style.${item.id}="text decoration:none";
                break;
            
            }
*/
        


    const deleteItem = (event) => { 
        const id = parseInt(event.target.id);
        //console.log('click', id);
        const filtered = data.filter(toDoItem => toDoItem.id !== id);
        
        fetch(`${API}/${id}`, {method: "DELETE"})
        .then(response => response.json())
        .then(() => List(filtered)); //Ricorsione: la funzione chiama se stessa
    }

    const btns = [...document.querySelectorAll('.delete')]; //trasforma in un array
    
    const btnClicks = (btn) => 
        btn.addEventListener( "click", deleteItem, {once:true});
    
        btns.forEach(btnClicks);

    /*
    btns.forEach((btn) => {
        //btn.addEventListener( "click", deleteItem, {once:true});
            /*
            'click', 
            (event) => {            
            const id = parseInt(event.target.id);
            //console.log('click', id);
            const filtered = data.filter(toDoItem => toDoItem.id !== id);
            
            fetch(`${API}/${id}`, {method: "DELETE"})
            .then(response => response.json())
            .then(() => List(filtered)); //Ricorsione: la funzione chiama se stessa
        },
        {once:true}
        );
    });
    */
};

export {List};