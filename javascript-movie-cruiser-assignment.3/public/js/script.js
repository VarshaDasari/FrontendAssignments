let moviesList = [];
let favouriteMovies = [];
function getMovies() {
	return fetch('http://localhost:3000/movies').then(
		response =>{
		  if(response.ok){
				  return response.json();
		  }
		  else if(response.status == 404){
			  return Promise.reject(new Error('Invalid URL'))
		  }
		  else if(response.status == 401){
			  return Promise.reject(new Error('UnAuthorized User...'));
		  }
		  else{
			  return Promise.reject(new Error('Internal Server Error'));
		  } }).then(moviesListResponse =>{
			moviesList = moviesListResponse;
			  displaymoviesList(moviesList);
			  return moviesListResponse;
	  	}).catch(error =>{const errorEle = document.getElementById('errormovieName');
			errorEle.innerHTML = `<h2 style='color:red'>${error.message}</h2>`
			return error;
	  	})
}
function getFavourites() {
	return fetch('http://localhost:3000/favourites').then(response =>{
		  if(response.ok){
				  return response.json();
		  }
		  else if(response.status == 404){
			  return Promise.reject(new Error('Invalid URL'))
		  }
		  else if(response.status == 401){
			  return Promise.reject(new Error('UnAuthorized User...'));
		  }
		  else{
			  return Promise.reject(new Error('Internal Server Error'));
		  }}).then(favouriteMoviesResponse =>{
			favouriteMovies = favouriteMoviesResponse;
			displayFavouriteMovies(favouriteMovies);
			return favouriteMoviesResponse;
		}).catch(error =>{
			const errorEle = document.getElementById('errorFavouriteMovie');
			errorEle.innerHTML = `<h2 style='color:red'>${error.message}</h2>`
			return error;
	  	}
	  )
}
function addFavourite(id) {
    let movieName = moviesList.find(movie =>{
        if(movie.id == id){
            return movie;
        }
    });
    let favExists = favouriteMovies.find(favMovie => {
        if( favMovie.id == movieName.id ){
            return favMovie;
        }
    });
    if(favExists) {
        return Promise.reject(new Error('Movie is already added to favourites'));
    }else{
		return fetch(`http://localhost:3000/favourites`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(movieName)
		}
		).then(response => {
				if(response.ok){
					return response.json();
				}
			}
		).then(addedMovie => {
				favouriteMovies.push(addedMovie);
				displayFavouriteMovies(favouriteMovies);
				return favouriteMovies;
			}
		)
	}
}
function displaymoviesList(moviesList){
	const ele =   document.getElementById('moviesList');
	let htmlString = '';
	
	moviesList.forEach(movie => {
		htmlString += `
        <li style="list-style-type:none;">Id : ${movie.id}</li>
			  <li style="list-style-type:none;">Title : ${movie.title}</li>
        <img src="${movie.posterPath}" style="width:80%; height:200px; border:2px black solid;"/>
		<li style="list-style-type:none;"><button class='btn btn-primary' onclick='addFavourite(${movie.id})'>
		<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
		AddToFavourites
		<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
		</button></li>
		<br>`
	});
	ele.innerHTML = htmlString;
}
function displayFavouriteMovies(favouriteMovies){
	//DOM
	const ele =   document.getElementById('favouritesList');
	let htmlString = '';
	
	favouriteMovies.forEach(movie => {
		htmlString += `
        <li style="list-style-type:none;">Id : ${movie.id}</li>
			  <li style="list-style-type:none;">Title : ${movie.title}</li>
        <img src="${movie.posterPath}" style="width:80%; height:200px; border:2px black solid;"/>
		<br>`
	});
	ele.innerHTML = htmlString;
}
module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};
// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution

