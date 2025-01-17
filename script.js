//들어가야 할 항목 : 영화 포스터, 제목, 요약, 평점
//영화 포스터 : poster_path
//영화 제목 : Title
//영화 요약 : overview
//영화 평점 : vote_average

const containerUL = document.querySelector("#container");
const movieCard = document.querySelector("movie-card");
const resultUL = document.querySelector("#result");
const myTitle = document.querySelector("#myTitle");
const myOverview = document.querySelector("#myOverview");
const myReleaseDate = document.querySelector("#myReleaseDate");
const myVoteRate = document.querySelector("#myVoteRate");
const myPoster = document.querySelector("#myPoster");
const myBookMark = document.querySelector("#myBookMark");
let movieData = [];

let options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTEyNWM0NmMzYjJmYjIyM2U1YzU1NWIyZmEyN2Y3MyIsIm5iZiI6MTczNjMzNjM3Ni4wODA5OTk5LCJzdWIiOiI2NzdlNjNmODM4ODFjNzk0MTliYjBmMTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-5ukfEwKu7TBXa5BAhFjG25iw1z1HSTVgbaXMmX3zZs",
  },
};

const fetchData = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
    options
  );
  const 결과 = await res.json();
  console.log("최종결과 =>", 결과);
  postArray = 결과;
  displayposts(결과.results);
};

fetchData(); //데이터 가져오기

function displayposts(posts) {
  let emptyStr = "";
  for (let i = 0; i < posts.length; i++) {
    let movie = posts[i];
    //console.log('${i}번째 아이템 => ${posts[i]}')

    emptyStr += `<div class="movie-card">
    <img class="movie-image" src="https://image.tmdb.org/t/p/w200${movie.poster_path}">
   <div class="movie-name">${movie.title}</div>
  <div class="movie-rate">평점 : ${movie.vote_average}</div>
  <div class="hide">${movie.id}</div>
  </div>`; //ul태그에 넣어줄 영화리스트 항목들

    containerUL.innerHTML = emptyStr;
  }
}

fetchData(); //데이터 리스트로 뿌려주기

//검색창에 입력하면 필터링 된 데이터 보여주기
const input = document.querySelector("#search");
console.log(input);
const searchBtn = document.querySelector("#searchBtn");
const movieListDIV = document.querySelector("#movieList");
console.log(movieListDIV);
const search = function (page) {
  const movieName = $targetMovie.value.trim();
  if (!movieName) return;
};

const inputValue = input.value;
const filteredData = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=ko-KR&page=1",
    options
  );
  const list = await res.json();
  console.log("검색결과 =>", list);
  const movies = list.results;
  console.log(movies);

  const filteredPosts = movies.filter(function (movie) {
    return `<li class="search-result">
        <img class="movie-image" src="https://image.tmdb.org/t/p/w200${movie.poster_path}">
       <p class="movie-name">${movie.title}</p>
      <p class="movie-rate">평점 : ${movie.vote_average}</p>
      </li>`;

    displayposts(filteredPosts);
  });
};

filteredData();

//영화 상세 모달창 만들기
const modal = document.querySelector("#modal");
const modalOpenBtn = document.querySelector(".open-btn");
const modalCloseBtn = document.querySelector(".close-btn");
const toggleModal = function () {
  modal.classList.toggle("hide")
};


containerUL.addEventListener("click", function (event) {
  const movieCard = event.target.closest("#");

  if (movieCard) {
    const movieId = movieCard.getAttribute("data_id");
    const selectedMovie = movieData.find(function (movieData) {
      return movieData.id.toString() === movieId;
    });

    if (selectedMovie) {
      myPoster.src = `https://image.tmdb.org/t/p/w400${selectedMovie.poster_path}`;
      myTitle.textContent = selectedMovie.title;
      myOverview.textContent = selectedMovie.overview;
      myReleaseDate.textContent = `개봉일 : ${selectedMovie.release_date}`;
      myVoteRate.textContent = `평점 : ${selectedMovie.vote_average}`; //모달창에 넣어 줄 영화 상세 내용
    }
    toggleModal();
  }
});
console.log(movieCard);
