// Pete, the baker 
// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

function cakes(recipe, available) {
  let minimum = Infinity;
  flag = 0;
  Object.keys(recipe).forEach(element => {
    if (available[element] === undefined) {
      minimum = 0
    } else if ( minimum > Math.trunc(available[element] / recipe[element])) {
      minimum = Math.trunc(available[element] / recipe[element])
    }
  });
  if (flag === undefined) {
    return 0 
  } else {
    return minimum
  }
}