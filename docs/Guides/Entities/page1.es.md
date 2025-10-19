---
search:
  exclude: true
---
# Paquete de datos de Entidad Personalizada


Epic Fight normalmente no es compatible con otros mods, especialmente con las entidades. Por lo tanto, debe definir manualmente el modelo, las animaciones y otros valores de atributo de la entidad. Esto se puede lograr usando un Paquete de Datos.
***

## **💡 Creando un archivo JSON -**


Antes de crear un archivo JSON, debe obtener el Nombre de Registro de la Entidad que desea hacer compatible. En Minecraft, puedes ver la lista de entidades registradas con el comando "/summon".

![imagen](https://user-images.githubusercontent.com/79469058/166224784-b556e090-4e56-45bd-ad80-ccc33c06d859.png)


La mayoría de los Nombres de Registro consisten en "iddelmod:nombredelaentidad". Si obtiene el Nombre de Registro, puede crear el archivo JSON en `data/iddelmod/epicfight_mobpatch/nombredelaentidad.json`
***

## **💡 Obteniendo una ruta de modelos y animaciones -**

[Archivos de Modelo](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

[Archivos de Animación](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Animations.java)
***
## **💡 Configuración Fácil -**

### **📘 Usando una preajuste**


Para las entidades que tienen las mismas acciones que las vanilla, puede usar una preajuste. Es muy simple como se muestra abajo.

```JSON
{
    "preset": "minecraft:creeper"
}
```

Debe saber que esto no funcionará correctamente si la Entidad no comparte el código de la vanilla, aunque aparentemente sea el mismo. Los valores permitidos son todos los Nombres de Registro de Entidades que están registrados en el [código](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/world/capabilities/provider/ProviderEntity.java)

### **❌ Deshabilitando una Entidad Animada**


También puede deshabilitar la Entidad Animada existente. Se puede hacer con una simple línea.
```JSON
{
    "disabled": true
}
```

***
## **💡 Añadiendo una característica -**


Debajo está un ejemplo simple de cómo crear un zombi que golpea.
```JSON
{
    "model": "epicfight:entity/biped_old_texture",
    "renderer": "minecraft:zombie",
    "isHumanoid": false,
    "faction": "neutral",
    "attributes": {
        "impact": 0.5,
        "armor_negation": 0.0,
        "max_strikes": 1,
        "chasing_speed": 1.0,
                "scale": 1.0
    },
    "default_livingmotions": {
        "idle": "epicfight:biped/living/idle",
        "walk": "epicfight:biped/living/walk",
        "chase": "epicfight:biped/living/walk",
        "mount": "epicfight:biped/living/mount",
                "fall": "epicfight:biped/living/fall",
        "death": "epicfight:biped/living/death"
    },
    "stun_animations": {
        "short": "epicfight:biped/combat/hit_short",
        "long": "epicfight:biped/combat/hit_long",
        "knockdown": "epicfight:biped/combat/knockdown",
        "fall": "epicfight:biped/living/landing"
    },
    "combat_behavior": [
        {
            "weight": 100.0,
            "canBeInterrupted": true,
            "looping": false,
            "behaviors": [
                {
                    "conditions": [
                        {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                    ],
                    "animation": "epicfight:zombie/attack1"
                },
                {
                    "conditions": [
                        {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                    ],
                    "animation": "epicfight:zombie/attack2"
                },
                {
                    "conditions": [
                        {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                    ],
                    "animation": "epicfight:zombie/attack3"
                }
            ]
        }
    ]
}
```

`model`: El modelo de la Entidad. Los valores permitidos están [aquí](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

`renderer`: [Todos los Nombres de Registro de Entidad que están registrados en el código](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/client/events/engine/RenderEngine.java)


`isHumanoid`: Determina si la Entidad es humanoide. Las entidades humanoides pueden cambiar las animaciones según el objeto que tienen.

`faction`: Entidades con la misma facción no se atacarán entre sí con ataques cuerpo a cuerpo. Los valores permitidos son:`enderman, piglins, wither, neutral, undead, illager, villager`

`attributes`:

| Clave          | Característica                                                                 |
| -------------- | ---------------------------------------------------------------------------- |
| impact         | Extiende el Tiempo de Aturdimiento del objetivo del ataque                   |
| armor_negation | Ignora los puntos de defensa en %                                            |
| max_strikes    | Determina cuántas entidades puede golpear por un golpe                       |
| chasing_speed  | Para entidades cuerpo a cuerpo, determina qué tan rápido persigue al enemigo |
| scale          | 	Determina el tamaño de la entidad                                           |

`default_livingmotions`:

| Clave | Característica                                 |
| ----- | ---------------------------------------------- |
| idle  | Cuando la entidad está quieta                  |
| walk  | Cuando la entidad se mueve                     |
| chase | Cuando la entidad se mueve y tiene un objetivo |
| fall  | Cuando la entidad cae por la gravedad          |
| death | Cuando la entidad muere                        |
| mount | Cuando la entidad está montando                |

`stun_animations`:

| Clave     | Característica                    |
| --------- | --------------------------------- |
| short     | Cada ataque normal                |
| long      | Para algunos ataques especiales   |
| knockdown | Golpe de suelo del Dragón del Fin |
| fall      | Daño de caída                     |

`combat_behavior`: define los movimientos de ataque de la entidad.

| Clave            | Característica                                                                                           |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| weight           | Se selecciona la posibilidad de este comportamiento. Será calculado como `(weight/suma total de weight)` |
| canBeInterrupted | Determina si esta serie de movimientos se puede cancelar                                                 |
| looping          | Determina si el comportamiento actual debe guardarse cuando se cancela                                   |
| cooldown         | Determina cuántos "ticks" le tomará para volver a usarse                                                 |
| behaviors        | Definición de las condiciones y animación de ataque                                                      |

`behaviors`:

| Clave      | Característica                                         |
| ---------- | ------------------------------------------------------ |
| conditions | Condiciones que se deben cumplir para ser seleccionado |
| animation  | La ruta de animación                                   |

`conditions`:

| Clave                     | Característica                                                                                              | Argumentos                                                                                          |
| ------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| random_chance             | Comprueba si el valor aleatorio es mayor que el argumento dado                                              | "chance": double                                                                                    |
| within_eye_height       | Comprueba si la distancia Y entre el Objetivo y el Atacante es menor que la altura de los ojos del Atacante | -                                                                                                   |
| within_distance           | Comprueba la distancia entre el Objetivo y el Atacante, si están dentro de los argumentos dados             | "min": double, "max": double                                                                        |
| within_angle              | Comprueba si el ángulo hacia el Objetivo está dentro del argumento dado.                                    | "min": double, "max": double                                                                        |
| within_angle_horizontal | Comprueba si el eje-Y hacia el Objetivo está dentro del argumento dado.                                     | "min": double, "max": double                                                                        |
| health                    | Comprueba la salud de la entidad.                                                                           | "health": double, "comparator": `enum:(greater_absolute, less_absolute, greater_ratio, less_ratio)` |

***
## **💡 Cambiando la animación según el arma que sostiene -**
Para las entidades humanoides, puede configurar diferentes conjuntos de animaciones según el arma que estén sosteniendo. En este caso, el formato de "combat_behaviours" cambia ligeramente. Primero, debe verificar que el valor de "isHumanoid" está es "true".

A continuación se muestra un ejemplo de cómo crear un zombie, que empuña una espada como un esqueleto wither mientras está quieto y caminando, atacando con una espada, o golpeando con las manos vacías.
```JSON
{
    "model": "epicfight:entity/biped_old_texture",
    "renderer": "minecraft:zombie",
    "isHumanoid": true,
    "faction": "neutral",
    "attributes": {
        "impact": 0.5,
        "armor_negation": 0.0,
        "max_strikes": 1,
        "chasing_speed": 1.0,
                "scale": 1.0
    },
    "default_livingmotions": {
        "idle": "epicfight:biped/living/idle",
        "walk": "epicfight:biped/living/walk",
        "chase": "epicfight:biped/living/walk",
        "mount": "epicfight:biped/living/mount",
                "fall": "epicfight:biped/living/fall",
        "death": "epicfight:biped/living/death"
    },
    "humanoid_weapon_motions": [
        {
            "weapon_categories": ["sword"],
            "style":"one_hand",
            "livingmotions": {
                "walk": "epicfight:wither_skeleton/walk",
                "chase": "epicfight:wither_skeleton/chase"
            }
        }
    ],
    "stun_animations": {
        "short": "epicfight:biped/combat/hit_short",
        "long": "epicfight:biped/combat/hit_long",
        "knockdown": "epicfight:biped/combat/knockdown",
        "fall": "epicfight:biped/living/landing"
    },
    "combat_behavior": [
        {
            "weapon_categories": ["axe", "hoe", "pickaxe", "shovel", "sword"],
            "style": "one_hand",
            "behavior_series": [
                {
                    "weight": 100.0,
                    "canBeInterrupted": true,
                    "looping": true,
                    "behaviors": [
                        {
                            "conditions": [
                                {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.2}
                            ],
                            "animation": "epicfight:biped/combat/mob_onehand1"
                        },
                        {
                            "conditions": [
                                {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.2}
                            ],
                            "animation": "epicfight:biped/combat/mob_onehand2"
                        }
                    ]
                }
            ]
        },
        {
            "weapon_categories": ["fist"],
            "style": "common",
            "behavior_series": [
                {
                    "weight": 100.0,
                    "canBeInterrupted": true,
                    "looping": false,
                    "behaviors": [
                        {
                            "conditions": [
                                {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                            ],
                            "animation": "epicfight:zombie/attack1"
                        },
                        {
                            "conditions": [
                                {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                            ],
                            "animation": "epicfight:zombie/attack2"
                        },
                        {
                            "conditions": [
                                {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                            ],
                            "animation": "epicfight:zombie/attack3"
                        }
                    ]
                }
            ]
        }
    ]
}
```

`humanoid_weapon_motions`: Una lista de los movimientos vivos modificados para cada categoría de arma.

`weapon_categories`: Cuáles armas deberían tener el mismo comportamiento. Los valores permitidos son:

```JAVA
public enum WeaponCategory {
       NOT_WEAON, AXE, FIST, GREATSWORD, HOE, PICKAXE, SHOVEL, SWORD, KATANA, SPEAR, TACHI, TRIDENT, LONGSWORD, DAGGER, SHIELD, RANGED
}
```

`style`: Estilo de agarre. Los valores permitidos son: `one_hand, two_hand, common`.

