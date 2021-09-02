/**
 * Descripcion (ingles)
 * There is a city composed of n x n blocks, where each block contains a single building shaped like a vertical square prism. 
 * You are given a 0-indexed n x n integer matrix grid where grid[r][c] represents the height of the building located in the block at row r and column c.
 * A city's skyline is the the outer contour formed by all the building when viewing the side of the city from a distance.
 * The skyline from each cardinal direction north, east, south, and west may be different.
 * We are allowed to increase the height of any number of buildings by any amount (the amount can be different per building). 
 * The height of a 0-height building can also be increased. However, increasing the height of a building should not affect the city's skyline from any cardinal direction.
 * Return the maximum total sum that the height of the buildings can be increased by without changing the city's skyline from any cardinal direction.
 * --------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * Hay una ciudad compuesta por n x n bloques, donde cada bloque contiene un solo edificio con forma de prisma cuadrado vertical. 
 * Se le da una cuadrícula de matriz de números enteros n x n indexada 0 donde la cuadrícula [r] [c] representa la altura del edificio ubicado en el bloque en la fila ry la columna c.
 * El horizonte de una ciudad es el contorno exterior formado por todo el edificio cuando se ve el lado de la ciudad desde la distancia.
 *  El horizonte de cada dirección cardinal norte, este, sur y oeste puede ser diferente.
 * Se nos permite aumentar la altura de cualquier número de edificios en cualquier cantidad (la cantidad puede ser diferente según el edificio). 
 * También se puede aumentar la altura de un edificio de altura 0. Sin embargo, aumentar la altura de un edificio no debería afectar el horizonte de la ciudad desde ninguna dirección cardinal.
 * Devuelve la suma total máxima por la que se puede aumentar la altura de los edificios sin cambiar el horizonte de la ciudad desde ninguna dirección cardinal. 
 * @param {number[][]} grid
 * @return {number}
 */
 var maxIncreaseKeepingSkyline = function(grid) {
    const maxRows = [],maxColumns = [] //Creamos 2 variables  donde guardaremos el maximo de las filas y las columnas
    for (let i = 0; i < grid.length; i++) { //Usamos for anidado para poder recorrer la matriz
        let maxRow = 0, maxColumn = 0 //Aqui guardaremos el valor mas alto para compararlo despues 
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > maxRow ) maxRow = grid[i][j] //Validamos si el valor de fila es mayor, de ser asi lo agregamos a la variable
            if (grid[j][i] > maxColumn )  maxColumn = grid[j][i]//Validamos si el valor de coluimna  es mayor, de ser asi lo agregamos a la variable
        }
        maxRows[i] = maxRow //agregamos al valor al arreglo
        maxColumns[i] = maxColumn //agregamos al valor al arreglo
    }  
    let sum = 0
    for (let i = 0; i < grid.length; i++) { 
        for (let j = 0; j < grid.length; j++) { //Usamos otro for anidado para agregar la suma de cada torre quedando con la diferencia en la variable suma
            const minimo = Math.min(maxRows[i],maxColumns[j]) //Sacamos el valor minimo 
            sum += minimo - grid[i][j] //Guardamos la diferencia 
        } 
    }
    return sum // retornamos el valor 
  };