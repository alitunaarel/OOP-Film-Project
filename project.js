const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");


// starting ui
const ui = new UI();

//Creating Storage Object
const storage = new Storage();

// All Events
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        //Error
        ui.displayMessages("Fill out all the field...","danger")
    }
    else {
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm); // Adding Film to UI
        storage.addFilmToStorage(newFilm);

        ui.displayMessages("Film is successfully added...👍", "success") 
    }
ui.clearInputs(titleElement,urlElement,directorElement);
e.preventDefault();
}