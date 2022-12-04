async function getPlacesPhotos(){
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    const data = await res.json();

    return data;
}

async function getCategories(){
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/2/photos');
    const data = await res.json();

    return data;
}


export {getPlacesPhotos, getCategories}; 