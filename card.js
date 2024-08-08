let IMG_BASE_URL = `https://image.tmdb.org/t/p/w500`

const moviecontainer = document.getElementById("movie");


let result='';

movieArray.forEach((post) =>{

	result +=` <div class="col-md-4 mb-4">
	    <div class="card">
		
	       <figure class="moviecard text-white">
		      <img class="w-100" src="https://image.tmdb.org/t/p/w500${post.poster_path}" alt="${post.title}" title="${post.title}">
			  <figcaption>
		 <div class="movietitle p-4">
			    <div class="row"> 
			     <div class="col-10">
			       <h3 class="mb-0">
				       ${post.title}
				   </h3>
			    </div>
				<div class="col-2 rating">

  <span class="${setRatingBg(post.vote_average)} p-2 rating">
                            ${(post.vote_average)}
                            </span>
				</div>
			   </div>
			 
			  <div class="movieoverview">
			   <h4>
			     ${post.title}
			   </h4>
			   <p>
			   <em>overview</em>
			     ${post.overview}
			   </p>
			   </div>
			    </figcaption>
		   </figure>
	  </div>
	 </div>`
});

moviecontainer.innerHTML = result;

function setRatingBg(rating){
    if(rating > 7.5){
        return 'bg-success'
    } else if(rating <= 7.5 && rating > 5){
        return 'bg-warning'
    }else{
        return 'bg-danger'
    }
    
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
