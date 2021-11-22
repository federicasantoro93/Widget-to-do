import {render, API } from './utils.js';
 
const Add = () => {
    const container = document.querySelector('#container');
    const today = new Date();

    render(container, 
        `<div>
        <h3>Add a new item to the list<h3>
        <form id="create">
            <div class="row">
                <label for="title">Item:</label>
                <input type="text" id="title" name="title" placeholder=" Thing to do " />
            </div>

            <div class="row">
                <label for="completed">Completed:</label>
                <input type="text" id="completed" name="completed" placeholder=" true/false" />
            </div>

            <div class="row">
            <label for="expires">Expires:</label>
            <input type="date" value="${today.getFullYear()}"  id="expires" name="expires" placeholder="year-month-day" />
            </div>

            <button>Save item</button>
        </form>

        <a href="#" id="back">Back to home</a>
    </div>`
    );

    const form = document.querySelector('#create');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
                
        const toDoItem = {
          title: event.target.title.value,
          completed: event.target.completed.value,
          expires: event.target.expires.value,
        };

        //console.log(toDoItem);

        fetch(API, {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(toDoItem),
           
        })
            .then(response => response.json())
            .then((data) => (location.hash = ""));
        //console.log(toDoItem);
    });
    
};

export {Add};


/*
{
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
    "expires": "2021-11-26"
    },
*/