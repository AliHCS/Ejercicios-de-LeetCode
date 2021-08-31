// Descripcion (ingles)
// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// ----------------------------------------------------------------------------------------------------------------------------------

// Descripcion
// Dado un patrón y una cadena s, encuentre si s sigue el mismo patrón.
// Aquí seguir significa una coincidencia completa, de modo que hay una biyección entre una letra en el patrón y una palabra no vacía en s.

// Example 1:
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

var wordPattern = function(pattern, s) {
    const words = s.split(" ") //Separamos las palabras en un arreglo

    if (pattern.length != words.length) {// Preguntamos si las longitudes son iguales
        return false  //si no son iguales retornamos false
        
    }
    const map = {} //Creamos un Mapa donde se guardaran las letras como llave y las palabras como valor
    for (let index = 0; index < pattern.length; index++) { //recorremos el arreglo
        const char = pattern[index] //Asignamos a char la letra en la posicion del index
        const wordInMap = map[char] // Asignamos a wordInMap la palabra que este con la llave char 
        if (wordInMap) { //si existe la palabra en el mapa entra a este if
            if(wordInMap !== words[index]){ //Comprobamos si la palabra en el mapa es igual a la pabra que hay en el arreglo de palabras
                return false // si son diferentes retornamos false
            } 
        }else{ // si no existe la palabra en el diccionario
            const word = words[index] //agregamos a word la palabra que hay en el arreglo  en la posicion del index
            if (Object.values(map).includes(word)) {//verificamos si la palabra esta en el mapa
                return false     //si la palabra ya existe quiere decir que que se repite con otra letra entonces retornamos false
            }
            map[char] = word //si no esta en el mapa la agregamos con char como llave y word como el valor
        }
        
    }
    return true //si las palabras con cuerdan con el patron se retorna true
};