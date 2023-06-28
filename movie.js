let box=document.getElementById("box");
 var request = new XMLHttpRequest();
 let button=document.getElementById("button");
let clickButton=function() {
      var sreach_movie = document.getElementById("Submit");
      request.addEventListener('load',getData);
      request.open('GET', 'https://api.themoviedb.org/3/search/movie?api_key=8318c431b4fc8a2c4762bf2a52c351ee&query='+sreach_movie);
      request.send();
}
let getData=function() {
    var data = JSON.parse(request.responseText);
    showdata(data.results)  
}
let showdata=function(data){
    data.forEach((item)=>{1
       box.innerHTML=`
       <p>Name of movie:-${item.title}</p>
       <p>release_date:-${item.release_date}</p>
       <p>overview:-${item.overview}</p>
       <p>vote_average:-${item.vote_average}</p>
       <p>language:-${item.original_language}</p>
     `
   })
   
}

button.addEventListener("click",clickButton);

