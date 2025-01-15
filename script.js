//들어가야 할 항목 : 영화 포스터, 제목, 요약, 평점
//영화 포스터 : poster_path
//영화 제목 : Title
//영화 요약 : overview
//영화 평점 : vote_average
const image_base_url = "image.tmdb.org/t/p/w200${movie.poster_path}";
const movieContainer = document.querySelector("#movie-container");
const myPoster = document.querySelector("myPoster");
const myTitle = document.querySelector("#myTtle");
const myOverview = document.querySelector("#myOverview");
const myReleaseDate = document.querySelector("#myReleaseDate");
const myVoteAverage = document.querySelector("#myVoteAverage");
const resultUL = document.querySelector("#result");
const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#search");

let postArray = [];

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTEyNWM0NmMzYjJmYjIyM2U1YzU1NWIyZmEyN2Y3MyIsIm5iZiI6MTczNjMzNjM3Ni4wODA5OTk5LCJzdWIiOiI2NzdlNjNmODM4ODFjNzk0MTliYjBmMTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-5ukfEwKu7TBXa5BAhFjG25iw1z1HSTVgbaXMmX3zZs",
  },
};

function fetchData() {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
    options
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (결과) {
      console.log("최종결과 =>", 결과);
      postArray = 결과;
      displayposts(결과.results);
    });
}
function displayposts(posts) {
  let emptyStr = "";
  for (let i = 0; i < posts.length; i++) {
    let movie = posts[i];
    //console.log('${i}번째 아이템 => ${posts[i]}')

    emptyStr += `<li>
<img class="movie-image" src="https://image.tmdb.org/t/p/w200${movie.poster_path}"></img> 
   </li>
  <li class="movie-name">${movie.title}</li>
  <li class="movie-rate">평점 : ${movie.vote_average}
 
  `;

    resultUL.innerHTML = emptyStr;
  }
}
fetchData();

searchBtn.addEventListener("click", function () {
  const keyword = searchInput.value;

  const filteredPosts = postArray.filter(function (게시글하나) {
    return 게시글하나.title.includes(keword);
  });

  console.log("fiteredPosts =>", filteredPosts);
  displayposts(filteredPosts);
});
