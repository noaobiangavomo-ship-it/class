
lista=[1, 5, 7, 8, 2, 3]
"""def cocktail (lista):
    inicio=0
    fin= len(lista)-1
    cambio=True
    while inicio < fin and cambio:
       for i in range (fin):
           cambio=false
           if lista[i] > lista[i+1]:
               lista[i], lista[i+1] = lista[i+1], lista[i]
               cambio=True
       fin -= 1
       for i in range(fin, inicio, -1):
            cambio=False
            if lista[i] < lista[i-1]:
                lista[i], lista[i-1] = lista[i-1], lista[i]
                cambio=True
       inicio += 1
    return lista
"""
lista.sort()
print(lista)
    