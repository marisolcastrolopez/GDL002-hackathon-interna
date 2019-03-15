// Se manda a llamar el elemento de formulario (<form>) de html.
// Agregar el evento para el botón "submit" y desatar la función "getIp"
document.getElementById('form-submit').addEventListener('submit', getIp);
// Variable para indicar el número de página desde donde vamos a
// comenzar a ver los resultados arrojados por OMDB desde la página
// 1 con la posibilidad de aumentar dinámicamente el número de páginas con 
// resultados.
let page = 1;
//Mandar a llamar el valor/nombre de la película depositado en la barra de búsqueda
let searchWord = document.getElementById('searchWord');
//Función para 
function getIp(element){
// event.preventDefault evita que el botón "Watch Trailer"de mis templates desate
// su acción por defecto. El tag <a> navega por el browser a la dirección en el atributo <href> 
  element.preventDefault();
  //Depositar en una variable el string/película ingresado por el usuario
  let searchValue = searchWord.value;
//   Pasar las variables del valor ingresado por el usuario y número de página
//   desde donde vamos a recibir resultados (consultar documentación OMDB)
//   como argumentos para incrustarlos en la estructura formal de las
//   API request de cada película que el usuario ingresa.
  search(searchValue,page);
}

// Función de búsqueda por título ingresado por el usuario.
function search(searchValue,page){
    // Variable para guardar API request con el titulo ingresado por el usuario (searchValue)
    // y el número de página desde donde queremos que la API nos muestre los resultados.
    // Parámetro s =  search, de acuerdo a la documentación de OMDB.
  let url = `https://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=8a4e3d3b`;

  
fetch(url)
.then((data) => {
    return data.json();
})
.then(data => {
      let output='';
      data.Search.forEach(result => {
        let poster = result.Poster == "N/A" ? "https://i.imgur.com/lXuDi2G.png": result.Poster ;
        console.log(result.Poster);
        output +=`<div class="col-md-3">
        <div class="card">
          <img class="card-img-top" src="${poster}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${result.Title}</h5>
            <a href="https://www.youtube.com/results?search_query=${result.Title}+trailer" target=_blank class="btn btn-primary">Search Trailer</a>
            <button type= "button" class="btn btn-primary">More info</button>
            <a href="board.html"><i class="fas fa-plus-circle fa-2x" style="float: right;"></i></a>
          </div>
        </div>
         </div>`
      })
      
      output+=`
  <div class="container mt-5">
    <div class="row">
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" id="previous"><a class="page-link" onclick="previous()">Previous</a></li>
    <li class="page-item" id="next"><a class="page-link" onclick="next()">Next</a></li>
  </ul>
  </nav>
  </div>
  </div>
      `;
      document.getElementById('results').innerHTML = output;
      })
  
}

document.getElementById('form-submit').addEventListener('submit', getIp);

// function next(){
// document.getElementById('results').innerHTML = '';
//  let searchValue = searchWord.value;
//   page++;
//   search(searchValue,page);
// }


// function previous(){
//  let searchValue = searchWord.value;
//   if(page != 1){
//     document.getElementById('results').innerHTML = '';
//     page--;
//     search(searchValue,page);
//   }else{
//     page = 1; 
//   }
// }


// const seriesTop = ["tt0944947", "tt0903747", "tt2861424", "tt1475582", "tt0108778"];
// const arraySeriesTop = [];

// // fetch('http://www.omdbapi.com/?i=+'movie'+&apikey=a8138be8')  
// // .then((data) => {
// //   // convertimos nuestra data a JSON
// //   return data.json();
// // }).then((dataAsJSON) => {
// //   // cualquier operación con la data ya procesada
// //   console.log(dataAsJSON);
// //   // podemos llamar a funciones también
// // //   showData(dataAsJSON);
// // //   filterData(dataAsJSON);
// // //   orderData(dataAsJSON);
// // });
// for (let i = 0; i < seriesTop.length; i++) {
//    fetch('http://www.omdbapi.com/?type=' + seriesTop[i] + '&apikey=a8138be8').then((data) => {
//       return data.json();
//    }).then((dataAsJson) => {
//       seriesTop[i] = dataAsJson;
//       arraySeriesTop.push(seriesTop[i]);
//       //  showPeliculas(dataAsJson);
//       console.log(arraySeriesTop);
//       // console.log(dataAsJson);
      
//    })
//       .then();
// }


//   // const moviesTopRated =["tt1727824","tt5848272","tt4154756","tt2395469","tt0446029"];

//   // for (let j=0; j< moviesTopRated.length; j++){
//   //   fetch ('http://www.omdbapi.com/?i='+moviesTopRated[j]+'&apikey=a8138be8').then((data) =>{
//   //     return data.json();
//   //   }).then ((dataAsJson) => {
//   //     moviesTopRated[j]= dataAsJson;
//   //   //  showPeliculas(dataAsJson);
//   //   console.log(dataAsJson);


//   //   });
//   //   }