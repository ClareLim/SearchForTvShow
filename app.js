// axios
//     .get("https://swapi.dev/api/people/1/")
//     .then((res) => {
//         console.log("RESPONSE: ", res);
//     })
//     .catch((e) => {
//         console.log("ERROR! ", e);
//     });

// const getStarWarsPerson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data)
//     } catch (e) {
//         console.log("ERROR", e);
//     }
// }

// getStarWarsPerson(5);
// getStarWarsPerson(10);

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm, isFunny: 'colt' }, headers: {} };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    // console.log(res.data[0].show.image.medium);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        // console.log(result)
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}