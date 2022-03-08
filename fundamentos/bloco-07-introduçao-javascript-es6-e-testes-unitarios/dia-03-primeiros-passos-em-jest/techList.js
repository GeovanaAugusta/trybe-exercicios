const techList = (tech, name) => {
    // seu código aqui
    let objeto = [];
      let techSort = tech.sort()
  
    for (let index = 0; index < tech.length; index +=1) {
        objeto.push({
            tech: tech[index],
            name: name,
        })
          }
          if (tech.length === 0) {
            return 'Vazio!'
          }
  return objeto
  }

  module.exports = techList;