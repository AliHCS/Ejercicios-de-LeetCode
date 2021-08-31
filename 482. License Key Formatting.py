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
        