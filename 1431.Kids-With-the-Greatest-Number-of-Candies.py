#Descripcion del problema (Ingles)
# There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
# Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
# Note that multiple kids can have the greatest number of candies.

# Example 1:

# Input: candies = [2,3,5,1,3], extraCandies = 3
# Output: [true,true,true,false,true] 
# Explanation: If you give all extraCandies to:
# - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
# - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
# - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
# - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
# - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.

#---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
#Descripcion del problema
# Hay n niños con caramelos. Se le da una matriz entera de caramelos, donde cada caramelos [i] representa el número de caramelos que tiene el i-ésimo niño, y un número entero extraCandies, que denota la cantidad de caramelos extra que tiene.
# Devuelve un resultado de matriz booleana de longitud n, donde el resultado [i] es verdadero si, después de darle al i-ésimo niño todos los caramelos adicionales, tendrá la mayor cantidad de caramelos entre todos los niños, o falso en caso contrario.
# Tenga en cuenta que varios niños pueden tener la mayor cantidad de dulces.


# Ejemplo 1:

# Entrada: caramelos = [2,3,5,1,3], caramelos extra = 3
# Salida: [verdadero, verdadero, verdadero, falso, verdadero]
# Explicación: Si le da todos los caramelos adicionales a:
# - Niño 1, tendrán 2 + 3 = 5 caramelos, que es el mejor entre los niños.
# - Niño 2, tendrán 3 + 3 = 6 caramelos, que es el mejor entre los niños.
# - Niño 3, tendrán 5 + 3 = 8 caramelos, que es el más grande entre los niños.
# - Niño 4, tendrán 1 + 3 = 4 dulces, que no es el mejor entre los niños.
# - Niño 5, tendrán 3 + 3 = 6 caramelos, que es el mejor entre los niños. 

class Solution:
    def kidsWithCandies(self, candies, extraCandies):
         result = [] #Variable donde se guardara el resultado
         totalCandies = [] #variable donde se guardara el numero de candies + extraCandies
         maxCandies = max(candies) #Sacamos el numero maximo de candies en la lista original
                                   #Esto por que ese es el numero mas alto ahora, y si alguien con la suma de extraCandies
                                   #llega a tener un numero igual o mayor quiere decir que tiene el maximo de candies
         for i in range(0,len(candies)): #Con el for agregaremos a totalCandies la suma de extraCandies a cada nino en la lista original
            totalCandies.append(candies[i] + extraCandies)
            if totalCandies[i] >= maxCandies : #Con el if verificamos si el nino en la posicion i tiene el numero igual o mayor al maximo de candies en la lista original
                 result.append(True) #Si es verdadero agregamos a la lista result el valor de True
            else:
                 result.append(False) #Si es falso agregamos a la lista result el valor de False
         return result #Por ultimo regresamos la lista con todos los valores obtenidos
    


             
#Prueba de Escritorio
# candies = [2,3,5,1,3] 
# extraCandies = 3
# result = [True,]  
# totalCandies = [5,6,8,4,6]
# maxCandies = 8
# i = 4
# j = 0 


