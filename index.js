const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTEyNWM0NmMzYjJmYjIyM2U1YzU1NWIyZmEyN2Y3MyIsIm5iZiI6MTczNjMzNjM3Ni4wODA5OTk5LCJzdWIiOiI2NzdlNjNmODM4ODFjNzk0MTliYjBmMTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-5ukfEwKu7TBXa5BAhFjG25iw1z1HSTVgbaXMmX3zZs'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));