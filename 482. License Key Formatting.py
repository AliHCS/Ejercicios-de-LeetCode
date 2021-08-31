# Descripcion(Ingles)
# You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. 
# The string is separated into n + 1 groups by n dashes. You are also given an integer k.
# We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. 
# Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.
# Return the reformatted license key.
# --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Descripcion
# Se le proporciona una clave de licencia representada como una cadena que consta solo de caracteres alfanuméricos y guiones. La cadena está separada en n + 1 grupos por n guiones. 
# También se le da un número entero k.
# Queremos reformatear la cadena s de modo que cada grupo contenga exactamente k caracteres, excepto el primer grupo, que podría ser más corto que k pero debe contener al menos un carácter.
#  Además, debe haber un guión insertado entre dos grupos y debe convertir todas las letras minúsculas a mayúsculas.
# Devuelva la clave de licencia reformateada. 

class Solution:
    def licenseKeyFormatting(self, S: str, K: int) -> str:
        S=S.replace("-","").upper() # Eliminamos los "-" y convertimos en mayusculas
        remainder = len(S) % K      # calculamos la longitud del primer grupo 
									# Por Ejemplo:
									# remainder==1; k=3: 1-123-123-123
								    # remainder==0; k=3: _-123-123-123 (en blanco)
										
        first_grp=[S[0:remainder]] # Primer grupo
        other_grps= [ S[i:i+K] for i in range(remainder,len(S),K) ] # otros grupos 
        
        if  remainder: return "-".join(first_grp+other_grps) # Si el primer grupo es vacio pasa a este punto
        return "-".join(other_grps)
        