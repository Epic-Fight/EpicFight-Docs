# Paquete de Datos de Armadura y Arma Personalizada

## **💡 Haciendo el archivo pack.mcmeta**

Primero, deberá crear un pack.mcmeta creando un archivo txt normal y renombrándolo a pack.mcmeta (asegúrese de que las extensiones de nombre de archivo estén activadas).

Después de eso edítelo y agregue esas líneas de código para que su Paquete de Datos funcione.
```JSON
{
    "pack":{
        "pack_format":6,
        "description":"Una breve descripción en su paquete"
        }
}
```

### **📄 Valores de pack_format**

| Versión       | Valor |
| ------------- | ----- |
| 1.16.2–1.16.5 | 6     |
| 1.17.x        | 7     |
| 1.18.2        | 9     |

### **🗂 Haciendo la ruta de la carpeta**

Debe hacer una serie de carpetas con los siguientes nombres. Cada carpeta o archivo debe estar dentro del último.

data -> "modid" -> capabilities -> "type" -> "registrynames".json

***

`modid`: Encontrará la modid usando un programa zip como 7-zip y haciendo clic en "abrir archivo" en el mod que desea hacer compatible. Desde allí, abrirá la carpeta de datos y luego estará el nombre, que llamará la carpeta "modid".

`type`: Ya sea `weapons` o `armors`

`registrynames`: Cuando esté en el juego, puede presionar F3+H para activar la Información Avanzada sobre herramientas para ver el nombre de registro del objeto que desea configurar.
> ![2022-05-29_16 48 36](https://user-images.githubusercontent.com/86358160/170875930-7bae2b88-2aa1-41fe-a59b-5de4027e563f.png)
> 
> ![2022-05-29_16 51 08](https://user-images.githubusercontent.com/86358160/170876568-5838849a-f578-42ae-8d50-f24fb3f9df6d.png)
> 
> ### **❗️Deberá hacer un archivo txt con solo el texto delineado + `.json`**
***
## **💡 Creando el archivo JSON**

### **⚔️ Archivo de arma**

 > Aquí hay un ejemplo simple de una configuración de espada:

```
 {
    "type": "sword",
    "attributes": {
        "common": {
            "armor_negation": 0.0,
                "impact": 1.1,
            "max_strikes": 1
        }
    }
 }
```

### **🗡 Archivo de arma a Una/Dos manos**

 > Aquí hay un ejemplo de una configuración de lanza con atributos de a una mano y a dos manos:

```
 {
    "type": "spear",
    "attributes": {
        "one_hand": {
            "armor_negation": 8.0,
                "impact": 1.9,
            "max_strikes": 1
        },
        "two_hand": {
            "armor_negation": 0.0,
                "impact": 1.3,
            "max_strikes": 3
        }
    }
 }
```

`type`: Qué animaciones debería usar. Valores de Tipo disponibles:

| Tipo       | Información de Estilo  |
| ---------- | ---------------------- |
| axe        | A Una Mano             |
| fist       | Doble Empuñadura       |
| hoe        | A Una Mano             |
| pickaxe    | A Una Mano             |
| shovel     | A Una Mano             |
| sword      | Doble Empuñadura       |
| spear      | A Una Mano/A Dos Manos |
| greatsword | A Dos Manos            |
| katana     | A Dos Manos            |
| tachi      | A Dos Manos            |
| longsword  | A Dos Manos            |
| dagger     | Doble Empuñadura       |
| bow        | A Dos Manos            |
| crossbow   | A Dos Manos            |
| trident    | A Dos Manos            |
| shield     | Doble Empuñadura       |

A Una Mano: Solo se puede usar si se sostiene en la mano principal.

A Dos Manos: Solo se puede usar si se sostiene en la mano principal y desactiva la función de mano izquierda.

Doble Empuñadura: Se puede usar con la mano secundaria si se sostiene el mismo tipo en la mano principal.

***

`attributes`: Esto decide si el arma debe tener diferentes estadísticas cuando algo se sostiene con la mano izquierda
* `common`: Si el arma debe tener las mismas estadísticas sin importar si se sostiene con la mano izquierda o si el tipo de arma tiene la restricción A Dos Manos.

* `one_hand/two_hand`: Si el tipo de arma no tiene el estilo A Dos Manos, entonces se pueden configurar para que tengan diferentes estadísticas cuando algo se sostiene con la mano izquierda o no.

***

### **🔵 Los siguientes valores de atributos se agregan a sus valores base.**

`armor_negation`: Este porcentaje no disminuirá el daño total por puntos de armadura. (base value: 0.0)

`impact`: Este atributo incrementará el tiempo total de aturdimiento del objetivo golpeado. (base value: 0.5)

`max_strikes`: El número máximo de objetivos que pueden ser golpeados por golpe. (base value: 1.0)

`damage_bonus`: Este atributo aumentará el daño. (base value: 0.0)

`speed_bonus`: Este atributo aumentará la velocidad de ataque. (base value: 0.0)

***

## **💡 Cambiando el tamaño del colisionador**

Puede cambiar el tamaño del colisionador para que coincida visualmente.

 > Aquí hay un ejemplo simple de una configuración de armadura:
```JSON
 {
    "attributes":
    {
        ...
    },
    "collider":
    {
        "number": 3,
        "center": [0.0, 0.0, -1.0],
        "size": [0.5, 0.8, 1.0]
    }
 }
```

`number`: El número de colisionadores que se interpolan entre la pose anterior y la actual. El valor más alto mejorará la precisión de la detección de colisiones, pero habrá más gastos generales

`center`: La posición central del colisionador.

`size`: El tamaño x, y, y z del colisionador.

Es difícil saber el tamaño del colisionador solo con la estimación numérica. Puede ahorrar tiempo consultandos los preajustes. Copia el valor del preajuste y gradualmente corrija el tamaño.

[Preajustes de Colisionador](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/ColliderPreset.java)

## **💡 Archivo de armadura**

 > Aquí hay un ejemplo simple de una configuración de armadura:

```
 {
    "attributes": {
        "stun_armor":1.5,
        "weight":8.2
    }
 }
```

`stun_armor`: Este atributo aumentará el tiempo entre aturdimientos.

`weight`: Este atributo acorta el tiempo de aturdimiento al ser golpeado, pero aumenta el consumo de Aguante de las habilidades y disminuye la velocidad de ataque. Objetos con alta velocidad de ataque se verán más afectados.

## **📦 Terminando el Paquete de Datos**

Ahora debería haber terminado con:
* La carpeta data que contiene todos los archivos JSON y otras carpetas como capabilities.
* El archivo pack.mcmeta.

### **✉️ Este siguiente paso solo es necesario si desea poder enviar el Paquete de Datos.**

No es necesario que convierta el Paquete de Datos en un zip, simplemente puede poner la carpeta data y el archivo pack.mcmeta en otra carpeta pero así es cómo se hace con 7-Zip.

> Primero, deberá seleccionar tanto la carpeta data como el archivo pack.mcmeta.
> 
> ![data pack mcdata](https://user-images.githubusercontent.com/86358160/171872228-00816dc2-cf98-4bdc-bddf-a3a7bd1cd9c1.PNG)

Luego haca clic derecho, vaya a 7-Zip, y haga clic en `añadir a "PaqueteDeDatos.zip"`.

Y eso es todo, todo lo que tendrá que hacer ahora es poner el Paquete de Datos en la carpeta de Paquetes de Datos de un mundo y divertirse :)
***

** El [Tutorial de Youtube](https://www.youtube.com/watch?v=JNpahwjriac&t=33s) para aquellos que no quieren leer**
