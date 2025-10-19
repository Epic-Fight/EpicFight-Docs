---
search:
  exclude: true
---
# Пользовательский датапак сущностей


Обычно Epic Fight не совместим с другими модами, особенно с сущностями. Поэтому вам придется вручную определить модель сущности, анимации и другие атрибуты. Это можно сделать с помощью датапака.
***

## **💡 Создание JSON-файла -**


Прежде чем создавать JSON-файл, вам следует получить регистрационное имя существа, которое вы хотите сделать совместимым. В Minecraft вы можете просмотреть список зарегистрированных существ с помощью команды "/summon".

![изображение](https://user-images.githubusercontent.com/79469058/166224784-b556e090-4e56-45bd-ad80-ccc33c06d859.png)


Большинство регистрационных имен состоят из "modid:entityname". Если вы получили регистрационное имя, вы можете создать JSON-файл по следующему пути: `data/modid/epicfight_mobpatch/entityname.json`
***

## **💡 Путь для моделей и анимаций -**

[Файлы моделей](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

[Файлы анимаций](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Animations.java)
***
## **💡 Простая установка -**

### **📘 Используя пресет**


Для существ, у которых действия аналогичны ванильным, вы можете использовать предустановленный вариант. Это очень просто, как показано ниже.

```JSON
{
    "preset": "minecraft:creeper"
}
```

Вам следует знать, что это не будет работать должным образом, если нужная вам сущность не использует код, идентичный ванильной версии, даже если они визуально похожи. Разрешенными значениями являются регистрационные имена всех сущностей, зарегистрированных в [code](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/world/capabilities/provider/ProviderEntity.java)

### **❌ Отключение анимаций сущностей**


Вы также можете отключить существующую анимированную сущность. Это можно сделать с помощью простой строки кода.
```JSON
{
    "disabled": true
}
```

***
## **💡 Добавление функций -**


Ниже приведен простой пример создания зомби, который использует удары кулаком.
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

`model`: Модель сущности. Допустимые значения можно найти [here](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

`renderer`: [All the entity's registry names that are registered in the code](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/client/events/engine/RenderEngine.java)


`isHumanoid`: Определяет, является ли сущность гуманоидной. Гуманоидные существа меняют анимации в зависимости от предмета, который они держат.

`faction`: Существа, принадлежащие к одной группе, не будут атаковать друг друга в ближнем бою. Допустимыми значениями являются:`enderman, piglins, wither, neutral, undead, illager, villager`

`attributes`:

| Ключ           | Функция                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------- |
| impact         | Увеличивает время оглушения атаки по цели                                                    |
| armor_negation | Обходит защитные очки на %                                                                   |
| max_strikes    | Определяет, сколько сущностей может быть поражено одним ударом                               |
| chasing_speed  | Для существ, атакующих в ближнем бою, определяет, насколько быстро существо преследует врага |
| scale          | Определяет размер сущности                                                                   |

`default_livingmotions`:

| Ключ  | Функция                                |
| ----- | -------------------------------------- |
| idle  | Когда сущность стоит неподвижно        |
| walk  | Когда сущность движется                |
| chase | Когда сущность движется и имеет цель   |
| fall  | Когда сущность падает из-за гравитации |
| death | Когда сущность умирает                 |
| mount | Когда сущность находится в седле       |

`stun_animations`:

| Ключ      | Функция                        |
| --------- | ------------------------------ |
| short     | Каждая обычная атака           |
| long      | Для некоторых специальных атак |
| knockdown | Удар по земле Драконом Края    |
| fall      | Урон от падения                |

`combat_behavior`: определяет атакующие движения сущности.

| Ключ             | Функция                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------- |
| weight           | Выбирается возможность этого поведения. Она будет рассчитана как `(weight/total weight sum)` |
| canBeInterrupted | Определяет, может ли эта последовательность движений быть прервана                           |
| looping          | Определяет, должно ли текущее поведение быть сохранено при прерывании                        |
| cooldown         | Определяет, через сколько "тиков" поведение может быть использовано снова                    |
| behaviors        | Определение условий и анимации атаки                                                         |

`behaviors`:

| Ключ       | Функция                                                       |
| ---------- | ------------------------------------------------------------- |
| conditions | Условия, которые должны быть выполнены, чтобы быть выбранными |
| animation  | Путь анимации                                                 |

`conditions`:

| Ключ                      | Функция                                                                                                  | Аргументы                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| random_chance             | Проверяет, превышает ли случайное значение заданный аргумент                                             | "chance": double                                                                                    |
| within_eye_height       | Проверяет, является ли вертикальное "Y" расстояние между целью и атакующим меньше высоты глаз атакующего | -                                                                                                   |
| within_distance           | Проверяет расстояние между целью и атакующим, если они находятся в пределах заданных аргументов          | "min": double, "max": double                                                                        |
| within_angle              | Проверяет, находится ли угол к цели в пределах заданного аргумента.                                      | "min": double, "max": double                                                                        |
| within_angle_horizontal | Проверяет, находится ли угол по оси Y к цели в пределах заданного аргумента.                             | "min": double, "max": double                                                                        |
| health                    | Проверяет здоровье сущности.                                                                             | "health": double, "comparator": `enum:(greater_absolute, less_absolute, greater_ratio, less_ratio)` |

***
## **💡 Изменение анимации в зависимости от оружия, которое существо держит -**
Для гуманоидных мобов вы можете установить различные наборы анимаций в зависимости от оружия, которое они держат. В этом случае формат "combat_behaviors" немного изменяется. Сначала убедитесь, что вы установили значение "isHumanoid" в true.

Ниже приведен пример создания зомби, держащего меч, как Визер-скелет в состоянии покоя и при ходьбе, атакующего мечем или бьющий кулаками.
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

`humanoid_weapon_motions`: Список измененных движений для каждой категории оружия.

`weapon_categories`: Какое оружие должно иметь одинаковую серию движений. Допустимые значения:

```JAVA
public enum WeaponCategory {
       NOT_WEAON, AXE, FIST, GREATSWORD, HOE, PICKAXE, SHOVEL, SWORD, KATANA, SPEAR, TACHI, TRIDENT, LONGSWORD, DAGGER, SHIELD, RANGED
}
```

`style`: Стиль держания оружия. Допустимые значения: `one_hand, two_hand, common`.

