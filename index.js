async function logJSONData() {
    const response = await fetch("https://www.themoviedb.org/movie");
    const jsonData = await response.json();
    console.log(jsonData);
}