async function GetAllSearchedMovies() {
    let content = "";
    let movie = document.getElementById("mysearch").value;

    let url = `http://www.omdbapi.com/?apikey=ddee1dae&s=${movie}&plot=full`;

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', url, true);

    xhttp.onload = () => {
        const obj = JSON.parse(xhttp.responseText);

        obj.Search.forEach(m => {
            console.log(m);
            content += `<div class="card m-5" style="width: 18rem;background-color:black">
            <img class="card-img-top" src="${m.Poster}" alt="Card image cap">
            <div style="backkground-color:black;" class="card-body">
              <h5   style="color:white;"  class="card-title">${m.Title}</h5>
              <p    style="color:white;" class="card-text">Year : ${m.Year}</p>
              <p    style="color:white;" class="card-text">Year : ${m.Type}</p>
              <a style="background-color:orangered;color:white" href="#" class="btn">IMDB ID : ${m.imdbID}</a>
            </div>
          </div>`;
        });
        let moviesection = document.getElementById("result");
        moviesection.innerHTML = content;
    };

    xhttp.send();

}


async function OnlyMovie() {
  let content = "";
  let movie = document.getElementById("mysearch").value;

  let url = `http://www.omdbapi.com/?apikey=ddee1dae&s=${movie}&plot=full`;

  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', url, true);

  xhttp.onload = () => {
      const obj = JSON.parse(xhttp.responseText);

      obj.Search.forEach(m => {
          console.log(m);
          if(m.Type == "movie"){
            content += `<div class="card m-5" style="width: 18rem;background-color:black">
            <img class="card-img-top" src="${m.Poster}" alt="Card image cap">
            <div style="backkground-color:black;" class="card-body">
              <h5   style="color:white;"  class="card-title">${m.Title}</h5>
              <p    style="color:white;" class="card-text">Year : ${m.Year}</p>
              <p    style="color:white;" class="card-text">Year : ${m.Type}</p>
              <a style="background-color:orangered;color:white" href="#" class="btn">IMDB ID : ${m.imdbID}</a>
            </div>
          </div>`;
          }
          else{
            content+="";
          }
      });
      let moviesection = document.getElementById("result");
      moviesection.innerHTML = content;
  };

  xhttp.send();

}

async function OnlySeries() {
  let content = "";
  let movie = document.getElementById("mysearch").value;

  let url = `http://www.omdbapi.com/?apikey=ddee1dae&s=${movie}&plot=full`;

  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', url, true);

  xhttp.onload = () => {
      const obj = JSON.parse(xhttp.responseText);

      obj.Search.forEach(m => {
          console.log(m);
          if(m.Type == "series"){
            content += `<div class="card m-5" style="width: 18rem;background-color:black">
            <img class="card-img-top" src="${m.Poster}" alt="Card image cap">
            <div style="backkground-color:black;" class="card-body">
              <h5   style="color:white;"  class="card-title">${m.Title}</h5>
              <p    style="color:white;" class="card-text">Year : ${m.Year}</p>
              <p    style="color:white;" class="card-text">Year : ${m.Type}</p>
              <a style="background-color:orangered;color:white" href="#" class="btn">IMDB ID : ${m.imdbID}</a>
            </div>
          </div>`;
          }
          else{
            content+="";
          }
      });
      let moviesection = document.getElementById("result");
      moviesection.innerHTML = content;
  };

  xhttp.send();

}

var input = document.getElementById("mysearch");
async function GetAllSearchedMoviesCall() {
    await GetAllSearchedMovies();
}


async function AllCall() {
  await GetAllSearchedMovies();
}


async function OnlyMovieCall() {
  await OnlyMovie();
}

async function OnlySeriesCall() {
  await OnlySeries();
}



// fetch('https://www.omdbapi.com/?s=&type=movie&apikey=6d584e97')
//   .then(response => response.json())
//   .then(data => {
//     const movies = data.Search;
//     const genres = new Set();

//     movies.forEach(movie => {
//       const genresList = movie.Genre.split(', ');
//       genresList.forEach(genre => {
//         genres.add(genre);
//       });
//     });

//     console.log(Array.from(genres));
//     // Do something with the genres
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });