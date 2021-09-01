// Descripcion (ingles
//     A robot on an infinite XY-plane starts at point (0, 0) and faces north. The robot can receive one of three possible types of commands:
// -2: turn left 90 degrees,
// -1: turn right 90 degrees, or
// 1 <= k <= 9: move forward k units.
// Some of the grid squares are obstacles. The ith obstacle is at grid point obstacles[i] = (xi, yi).
// If the robot would try to move onto them, the robot stays on the previous grid square instead (but still continues following the rest of the route.)
// Return the maximum Euclidean distance that the robot will be from the origin squared (i.e. if the distance is 5, return 25).

// Note:
// North means +Y direction.
// East means +X direction.
// South means -Y direction.
// West means -X direction.
 
// Example 1:
// Input: commands = [4,-1,3], obstacles = []
// Output: 25
// Explanation: The robot starts at (0, 0):
// 1. Move north 4 units to (0, 4).
// 2. Turn right.
// 3. Move east 3 units to (3, 4).
// The furthest point away from the origin is (3, 4), which is 32 + 42 = 25 units away.

// Example 2:
// Input: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
// Output: 65
// Explanation: The robot starts at (0, 0):
// 1. Move north 4 units to (0, 4).
// 2. Turn right.
// 3. Move east 1 unit and get blocked by the obstacle at (2, 4), robot is at (1, 4).
// 4. Turn left.
// 5. Move north 4 units to (1, 8).
// The furthest point away from the origin is (1, 8), which is 12 + 82 = 65 units away.)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// Descripcion 
// Un robot en un plano XY infinito comienza en el punto (0, 0) y mira hacia el norte. El robot puede recibir uno de los tres tipos posibles de comandos:

// -2: girar a la izquierda 90 grados,
// -1: girar a la derecha 90 grados, o
// 1 <= k <= 9: avanza k unidades.
// Algunos de los cuadrados de la cuadrícula son obstáculos. El i-ésimo obstáculo está en el punto de la cuadrícula obstáculos [i] = (xi, yi).

// Si el robot intentara moverse hacia ellos, el robot permanece en el cuadrado de la cuadrícula anterior (pero aún continúa siguiendo el resto de la ruta).

// Devuelve la distancia euclidiana máxima a la que estará el robot desde el origen al cuadrado (es decir, si la distancia es 5, devuelve 25).
// Nota:
// Norte significa dirección + Y.
// Este significa dirección + X.
// Sur significa dirección -Y.
// Oeste significa dirección -X.

// Ejemplo 1:
// Entrada: comandos = [4, -1,3], obstáculos = []
// Salida: 25
// Explicación: El robot comienza en (0, 0):
// 1. Mueva hacia el norte 4 unidades hasta (0, 4).
// 2. Gire a la derecha.
// 3. Mueva hacia el este 3 unidades hasta (3, 4).
// El punto más alejado del origen es (3, 4), que está a 32 + 42 = 25 unidades de distancia.

// Ejemplo 2:
// Entrada: comandos = [4, -1,4, -2,4], obstáculos = [[2,4]]
// Salida: 65
// Explicación: El robot comienza en (0, 0):
// 1. Mueva hacia el norte 4 unidades hasta (0, 4).
// 2. Gire a la derecha.
// 3. Muévase hacia el este 1 unidad y quede bloqueado por el obstáculo en (2, 4), el robot está en (1, 4).
// 4. Gire a la izquierda.
// 5. Mueva hacia el norte 4 unidades hasta (1, 8).
// El punto más alejado del origen es (1, 8), que está a 12 + 82 = 65 unidades de distancia.

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
 const moves = { // Creamos un Hash para guardar la direccion y cuanto debe aumentar en esa misma
    up:{x: 0, y: 1},
    down:{x: 0, y: -1},
    right:{x: 1, y: 0},
    left:{x: -1, y:0}
}
 var robotSim = function(commands, obstacles) {
     let x = 0, y = 0; // definimos 2 varianbles para poder guarda la distancia a la que termina tras los comandos
     let dir = "up" //definimos la direccion hacia arriba ya que asi nos dice el problema
     let max = 0 // guardamos la distancia maxima ya que es la que nos pide 

     for (let i = 0; i < commands.length; i++) { // iteramos sobre la lista de comandos
         const command = commands[i] // sacamos el comando actual en la posicion i
         if (command === -1 ) { // si el comando es -1 quiere decir que dara un giro a la derecha
            dir = turnRigth(dir) //llamaos a nuestra funcion que nos dira el giro
         }else if (command === -2) { // si recibe un -2 dara un vuelta a la derecha
             dir = turnLeft(dir)  // llamamos a nuestra funcion dar vuelta a la izquierda
         }else{
             for (let j = 0; j < command; j++) { //iteramos la cantidad que realizara el movimiento 
                 const move = moves[dir] // guardamos en move hacia donde se movera usando como llave la direccion
                 if (!hasObstacle(obstacles, x + move.x, y + move.y)) { //preguntamos si hay un obstaculo, en caso de no haberlo entra en la funcion
                     x += move.x //si no hay obstaculo guardamos la posicion en x y 
                     y += move.y 
                     const dist = Math.abs(x)**2 + Math.abs(y)**2 //guardamos la distancia euclidiana en dist

                     if (dist > max) { //preguntamos si la distancia es mayor a max
                         max = dist // si es mayor quiere decir que sera la nueva distancia maxima 
                     }
                 }
             }
         }
         
     }
     return max // regresamos siempre la distancia maxima
};


function hasObstacle(obstacles, x, y) { // con esta funcion verificamos si el lugar donde se encuentra es un obstaculo
    for (let index = 0; index < obstacles.length; index++) {  //si encuentra un obstaculo se detiene en el lugar
     const obs = obstacles[index]   
     if (x === obs[0] && y === obs[1]) {
           return true
        }  
    }
    return false
}


function turnLeft(dir) { //funcion de dar vuelta como lo especifica el problema
    if (dir == "up") {
        return "left";
    }else if (dir == "rigth") {
        return "up"
    }else if (dir == "down") {
        return "rigth"
    }else{
        return  "down"
    }
}

function turnRigth(dir) { //funcion de dar vuelta como lo especifica el problema
    if (dir == "up") {
        return "right";
    }else if (dir == "rigth") {
        return "down"
    }else if (dir == "down") {
        return  "left"
    }else{
        return "up"
    }
}

// Otra solucion del problema
// /**
//  * @param {number[]} commands
//  * @param {number[][]} obstacles
//  * @return {number}
//  */
//  var robotSim = function(commands, obstacles) {
//     let obstacle = {};
//     let x = 0;
//     let y = 0;
//     let max = 0;
    
//     /* 0 = north
//      * 1 = east
//      * 2 = south
//      * 3 = west
//      */
    
//     let direction = 0;
//     for(let i = 0; i < obstacles.length; i++) {
//         obstacle[obstacles[i]] = true;
//     }
    
//     for(let i = 0; i < commands.length; i++) {
        
//         if(commands[i] == -1) {
//             direction = (direction + 1)% 4;  // updated   
//         } else if(commands[i] == -2) {
//             direction  = ((direction - 1) + 4) % 4;
//         } else {
//             while(commands[i]--) {
//                 let previousX = x;
//                 let previousY = y;
                
//                 if(direction===0) y++;
//                 if(direction===1) x++;
//                 if(direction===2) y--;
//                 if(direction===3) x--;
//                 if(obstacle[x+','+y]) {
//                     [x, y] = [previousX,previousY];
//                     break;
//                 }
                
//             }
//         }
//         max = Math.max(max, x**2 + y**2)
//     }
//     return max;
// };