# Descripcion (ingles)
# We define the usage of capitals in a word to be right when one of the following cases holds:

# All letters in this word are capitals, like "USA".
# All letters in this word are not capitals, like "leetcode".
# Only the first letter in this word is capital, like "Google".
# Given a string word, return true if the usage of capitals in it is right.
# -----------------------------------------------------------------------------------------------------
# Descripcion 
# Definimos el uso de mayúsculas en una palabra como correcto cuando se cumple uno de los siguientes casos:

# Todas las letras de esta palabra son mayúsculas, como "EE. UU.".
# Todas las letras de esta palabra no son mayúsculas, como "leetcode".
# Solo la primera letra de esta palabra está en mayúscula, como "Google".
# Dada una palabra de cadena, devuelve verdadero si el uso de mayúsculas es correcto. 

class Solution(object):
    def detectCapitalUse(self, word):
        if word == word.upper(): #Paso todo a mayusculas y comparo con la palabra original, si son iguales retorno True
            return True
        elif  word == word.lower():#Paso todo a minusculas y comparo con la palabra original, si son iguales retorno True
            return True
        elif word == word.capitalize():#Paso a mayuscula la primera letra  y comparo con la palabra original, si son iguales retorno True
            return True
        else : #Si la palabra no entra en niguno de los casos anteriores, retorno False
            return False
        