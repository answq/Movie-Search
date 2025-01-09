//영화 포스터, 제목, 요약, 평점
//영화 포스터 : poster_path
//영화 제목 : Title
//영화 요약 : overview
//영화 평점 : vote_average
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTEyNWM0NmMzYjJmYjIyM2U1YzU1NWIyZmEyN2Y3MyIsIm5iZiI6MTczNjMzNjM3Ni4wODA5OTk5LCJzdWIiOiI2NzdlNjNmODM4ODFjNzk0MTliYjBmMTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-5ukfEwKu7TBXa5BAhFjG25iw1z1HSTVgbaXMmX3zZs'
    }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .then(data => 
        const movies = data.results;
        console.log(movies);
        const movieContainer = document.querySelector(".movie-container");
       .array.forEach(movie => {
            const movieHtml = `
            <div class='card' onclick='getMovieId(${movie.id})'>
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
                <h2>${movie.title}</h2>
                <p class = 'overview'>${movie.overview}</p>
    
                <p class = 'vote'>평균 평점: ${movie.vote_average}</p>
            </div>`;
            const movieContainer = document.getElementById("movie-container");
            movieContainer.innerHTML += movieHtml;
        });
    )
    .catch(err => console.error(err));