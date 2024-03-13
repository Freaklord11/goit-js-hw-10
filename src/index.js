import { fetchBreeds,fetchCatBreeds } from "./cat-api";

const breedSelection = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

error.classList.add("is-hidden");
loader.classList.replace("loader", "is-hidden");
//Options
function chooseBreed(){
    loader.classList.remove("is-hidden");
    fetchBreeds().then((data) =>{
        let options = data.map(({name, id}) =>{
            return `<option value=${id}>${name}</option>`
        });
        breedSelection.insertAdjacentHTML("beforeend", options);
        breedSelection.classList.remove("is-hidden");
        loader.classList.add("is-hidden");
    }).catch(onError);
}
chooseBreed();

//create display
breedSelection.addEventListener('change', createContent);

function createContent(e){
    breedSelection.classList.add("is-hidden");
    catInfo.classList.add("is-hidden");
    loader.classList.remove("is-hidden");
    let breedID =e.target.value;

    fetchCatBreeds(breedID).then((data) => {
        const {url, breeds} = data[0];
        const { name, description, temperament} = breeds[0];

        //element
        catInfo.innerHTML=`
            <img src ='${url}' alt =${name} width ="400"/>
            <div class='box'>
                <h2>${name}</h2>
                <p>${description}</p>
                <p>${temperament}</p>
            </div>
        `;
        catInfo.classList.remove("is-hidden");
        breedSelection.classList.remove("is-hidden");
        loader.classList.add("is-hidden");
    }).catch(onError);
}

function onError(){
    error.classList.remove("is-hidden");
    breedSelection.classList.add("is-hidden");
}