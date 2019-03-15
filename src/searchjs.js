const seriesTop = ["tt0944947", "tt0903747", "tt2861424", "tt1475582", "tt0108778"];
const arraySeriesTop = [];

// fetch('http://www.omdbapi.com/?i=+'movie'+&apikey=a8138be8')  
// .then((data) => {
//   // convertimos nuestra data a JSON
//   return data.json();
// }).then((dataAsJSON) => {
//   // cualquier operación con la data ya procesada
//   console.log(dataAsJSON);
//   // podemos llamar a funciones también
// //   showData(dataAsJSON);
// //   filterData(dataAsJSON);
// //   orderData(dataAsJSON);
// });
for (let i = 0; i < seriesTop.length; i++) {
   fetch('http://www.omdbapi.com/?type=' + seriesTop[i] + '&apikey=a8138be8').then((data) => {
      return data.json();
   }).then((dataAsJson) => {
      seriesTop[i] = dataAsJson;
      arraySeriesTop.push(seriesTop[i]);
      //  showPeliculas(dataAsJson);
      console.log(arraySeriesTop);
      // console.log(dataAsJson);
      
   })
      .then();
}


  // const moviesTopRated =["tt1727824","tt5848272","tt4154756","tt2395469","tt0446029"];

  // for (let j=0; j< moviesTopRated.length; j++){
  //   fetch ('http://www.omdbapi.com/?i='+moviesTopRated[j]+'&apikey=a8138be8').then((data) =>{
  //     return data.json();
  //   }).then ((dataAsJson) => {
  //     moviesTopRated[j]= dataAsJson;
  //   //  showPeliculas(dataAsJson);
  //   console.log(dataAsJson);


  //   });
  //   }