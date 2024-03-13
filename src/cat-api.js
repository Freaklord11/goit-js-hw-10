const BASE_URL = "https://api.thecatapi.com/v1";
const API_KEY ="live_3BgAJB4pC98G23ZaidS6M6FKMx68sUCqY7Coeztx7b2pb6JAbK6ptNECml17EUEF";

export function fetchBreeds(){
    return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(res => {
        if(!res.ok){
            throw new Error(res.status)
        }
        else{
            return res.json();
        }
    });
}

export function fetchCatBreeds(breedId){
    return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`).then(res => {
        if(!res.ok){
            throw new Error(res.status)
        }
        else{
            return res.json();
        }
    });
}