
lista = [2, 4, 1, 3, 7, 9]
direccion = "right"


def funcion_rota_direccion(lista, n, direccion):
    if direccion == "right":
        return lista[-n:] + lista[:-n] if n else lista[:]

    elif direccion == "left":
        return lista[n:] + lista[:n]

    else:
        return lista[:]
print(lista)
print(funcion_rota_direccion(lista, 2, "right"))
print(funcion_rota_direccion(lista, 2, "left"))