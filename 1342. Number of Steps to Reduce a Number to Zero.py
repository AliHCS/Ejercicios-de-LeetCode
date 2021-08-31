#Descripcion del problema (ingles)
#Given an integer num, return the number of steps to reduce it to zero.
#In one step, if the current number is even, you have to divide it by 2, otherwise,
#  you have to subtract 1 from it.
#------------------------------------------------------------------------------------
#Descripcion del problema 
#Dado un número entero, devuelve el número de pasos para reducirlo a cero.
# En un paso, si el número actual es par, debes dividirlo por 2, de lo contrario,
# tienes que restarle 1. 
class Solution:
     def numberOfSteps(self, num):
         numStep = 0 #Variable donde se guardara el numero de pasos 
         while num !=0: #Mientras el numero no sea 0 realizar lo siguienge
             if num % 2 == 0 : #Si el numero es par entonces se divide entre 2
                 num = num / 2 
             else: # Si el numero es impar, se le resta 1
                 num = num - 1
             numStep += 1 #Se aumenta el numero de pasos ya que entra en alguna de las condiciones
         return numStep # Retornamos el numero de pasos 
            