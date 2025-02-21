// funcion para filtrar por datos
export const filterData = (characters, casas) => {
  if (casas === "") {
    return false;
  }

  //Filtrando por cada una de las casas (4 casas)

  const filterCasa = characters.filter(
    (character) => character.house === casas
  );
  // console.log("Nombre de la casa: " + casas);
  // console.log("Trae toda la data correspondiente a una casa", filterCasa);
  return filterCasa;
};

//Funcion para Ordenar de A-Z
export const OrdenarP = (personajes) => {
  if (personajes === "") {    // se agrego para que pudiesen pasar los test
    return false;
  }
  personajes.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
      // z;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  // console.log(personajes);
  return personajes;
};

//Funcion para Contar
export const Calcular = (cantidad) => {
  if (cantidad === "") {
    return false;
  }
  let suma=0;
  for(let i=0;i<=cantidad.length;i++){
    suma=suma+1;
  }
  //console.log(cantidad.length)
  return cantidad.length;
};


