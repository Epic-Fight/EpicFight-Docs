---
search:
  exclude: true
---
# Otras soluciones para fallos de armadura 3D
Tenga en cuenta que estas soluciones pueden no ser tan efectivas como parchear armaduras manualmente en Blender. Estas herramientas son principalmente para Paquetes de Mods y desarrolladores de mods para probar su armadura. Si quieres parchear correctamente las armaduras y asegurarte de que funcionen en el juego, ve a _**[Paquete de Recursos de armadura 3D personalizada](armor/page1)**_


***
## **💡 Hacer una armadura visualmente impecable usando el Modo de Depuración de Armaduras**

En Minecraft, puede habilitar el Modo de Depuración de Armaduras presionando F3+Y. Esto creará un modelo de armadura para cada frame para verificar el resultado del algoritmo de generación del modelo. Pero podría bajar seriamente los fps, por lo que no recomiendo activar esta función en situaciones normales.

![image](https://user-images.githubusercontent.com/79469058/168334604-6542eff4-c77e-4ef2-a71a-79ddeef91a9a.png)

_Este mensaje será mostrado cuando cambie el Modo de Depuración de Armadura._
***
### **📦 Exportando los modelos como Paquete de Recursos**

En la pantalla de configuración del mod. Puede ver el botón "Exportar Modelos de Armadura". Esto exportará todos los modelos de armadura generados en el caché como Paquete de Recursos. Luego aplique el Paquete de Recursos y no tendrá que depurar los modelos de armadura cada vez que inicie Minecraft.

![image](https://user-images.githubusercontent.com/79469058/168339170-1965ad10-eb2a-4ab4-919e-3f5d5b0480fd.png)
***
## **💡Una alternativa, si la solución anterior no funciona**


Hay armaduras personalizadas que no se arreglarán, incluso cuando se usa el Modo de Depuración. Esto se debe a que hay varias formas de renderizar armaduras personalizadas. Puede elegir la forma alternativa de al menos hacerlos visibles.

Primero tiene que hacer que utilicen un modelo predeterminado. Puede crear su propio modelo de armadura como,

### assets/`iddelmod`/animmodels/armor/`nombre_del_objeto.json`

En el archivo nombre_del_objeto.json, escriba esto para asignar el modelo predeterminado para la armadura.

```
{
    "parent": "epicfight:armor/model_name"
}
```
Los nombres de modelo permitidos son: `helmet_default, chestplate_default, leggings_default, boots_default`

Luego, puede modificar la textura de la armadura personalizada para que coincida con el formato de textura del modelo predeterminado.

![sample](https://user-images.githubusercontent.com/79469058/168444508-f1fb4ebe-5949-40ca-9015-7e920f1e6508.png)

_El mapeo de texturas del modelo de armadura de vainilla_

A continuación, guarde sus texturas, pero debe evitar anular la textura existente porque puede estropear el modelo vainilla. En su lugar, debe guardar su textura en la ruta: assets/modid/`ruta_existente`/epicfight/`nombredelatextura` Usará: "assets/minecraft/textures/models/armor/epicfight/iron_layer_1.png"

## **💡 Dando transparencia a las armaduras personalizadas**
***

Algunas armaduras personalizadas tienen transparencia en su textura. Puedes hacerlos transparentes en el modo de batalla agregando estas líneas.

```
{
    "render_properties": {
        "transparent": true
    },
        "vertices": {
                ...
        }
}
```