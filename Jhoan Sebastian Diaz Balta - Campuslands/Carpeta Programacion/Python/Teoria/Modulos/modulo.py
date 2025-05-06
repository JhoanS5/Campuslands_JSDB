"""
1 Esta forma importa el modulo completo:
    import modulo

    modulo.procesar(24,56)
    
2 Importar solo una funcion especifica
    from mi_modulo import procesar
    procesar(12,345)

3. Importar todas las funciones del modulo
    from mi_modulo import * <- no es recomendable ya que traigo codigo que no necesito
    procesar(12, 345)
    
Cuando los modulos se encuentran en subdirectorios.
seria from directorio.archivo import

Para importar desde dos subdirectorios abajo
import ..modulo

Se pueden asignar alias a los modulos
from entities import Admin as EntitiesAdmin
"""

"""
Modulo collections
El modulo collections proporciona estructuras de datos avanzadas para la
manipulacion de iterables.

Se usa para mejorar el rendimiento y la eficiencia en el manejo de datos.

Ejemplo para determinar si un objeto es iterable
    from collectios.abc import Iterable
    
    def es_iterable(obj):
    print(issubclass(type(obj), Iterable))
"""
