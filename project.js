const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// starting ui
const ui = new UI();

//Creating Storage Object
const storage = new Storage();

// All Events
eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms)

}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
        //Error
        UI.displayMessages("Fill out all the field...","danger")
    }
    else {
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); // Adding Film to UI
        Storage.addFilmToStorage(newFilm);

        UI.displayMessages("Film is successfully added...👍", "success") 
    }
UI.clearInputs(titleElement,urlElement,directorElement);
e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("It's successfully Deleted", "success");
    }
}

function clearAllFilms() {
    if(confirm("are you sure")){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    }
}