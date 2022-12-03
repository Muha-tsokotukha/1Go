async function getPlacesPhotos(){
    const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
    const data = res.json();

    return data;
}

export {getPlacesPhotos}; 