#Descripcion del ejercicio (ingles)
# Let's call an array arr a mountain if the following properties hold:
# arr.length >= 3
# There exists some i with 0 < i < arr.length - 1 such that:
# arr[0] < arr[1] < ... arr[i-1] < arr[i]
# arr[i] > arr[i+1] > ... > arr[arr.length - 1]
# Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
#-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Descripcion del problema
# Llamemos a una matriz arr una montaña si se cumplen las siguientes propiedades:

# longitud de arr.> = 3
# Existe una i con 0 <i <longitud de arr. - 1 tal que:
# arr [0] <arr [1] <... arr [i-1] <arr [i]
# arr [i]> arr [i + 1]> ...> arr [longitud arr. - 1]
# Dado un arreglo entero arr que se garantiza que es una montaña, devuelva cualquier i tal que arr [0] <arr [1] <... arr [i - 1] <arr [i]> arr [i + 1]> ...> arr [longitud de arr. - 1]. 
class Solution(object):
    def peakIndexInMountainArray(self, arr):
        maxValue = max(arr) #Encontramos el valor mas grande del arreglo
        position = 0 #Variable para guardar la posicion
        for i in range(0,len(arr)): #Recorremos el arreglo
            if maxValue == arr[i]: #Si el valor Maximo del arreglo es igual al valor del arreglo en la posicion i
                 break             #Entra en el if y guarda el numero de la posicion gracias a que el brake detiene el ciclo donde se encuntra el numero mas alto
                                   #Como ya encontramos el pico detenemos el ciclo, ya que sabemos que despues de ese lugar los numeros seran menores
        return i #Retornamos la posicion 


                

            