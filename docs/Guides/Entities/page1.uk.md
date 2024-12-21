# Користувацький пакет даних для сутностей


Зазвичай Epic Fight не сумісний з іншими модами, особливо з сутностями. Тому вам доведеться вручну визначати модель сутності, анімації та інші значення атрибутів. Цього можна досягти використовуючи Пакет Даних.
***

## **💡 Створення JSON файлу -**


Перед тим як ви створите JSON файл, ви повинні взяти реєстрове ім'я сутності яку ви хочете зробити сумісною. У Minecraft, ви можете побачити список зареєстрованих сутностей використовуючи команду "/summon".

![картинка](https://user-images.githubusercontent.com/79469058/166224784-b556e090-4e56-45bd-ad80-ccc33c06d859.png)


Більшість реєстрових імен складається з "modid:entityname" ("айдімоду:ім'ясутності"). Якщо ви маєте реєстрове ім'я, то можете створювати JSON файл у `data/modid/epicfight_mobpatch/entityname.json`
***

## **💡 Отримання шляху моделей та анімацій -**

[Файли моделей](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

[Файли анімацій](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Animations.java)
***
## **💡 Легке Налаштування -**

### **📘 Використання шаблону**


Для сутностей які мають ті ж дії що і ванільні, ви можете використовувати шаблон. Це дуже просто як показано нижче.

```JSON
{
    "preset": "minecraft:creeper"
}
```

Ви маєте знати, що це не спрацює вірно якщо цільова сутність не поділяє код з ванільним відповідником, хоча, здавалося б, вони однакові. Дозволенні значення це всі реєстрові імена сутностей зареєстровані в коді [код](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/world/capabilities/provider/ProviderEntity.java)

### **❌ Вимкнення анімованої сутності**


Ви також можете вимкнути все існуючу анімовану сутність. Це можна зробити простим рядком.
```JSON
{
    "disabled": true
}
```

***
## **💡 Додавання функції -**


Нижче наведено простий приклад створення зомбі кулачника.
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

`model`: Модель сутності. Дозволені значення [тут](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

`renderer`: [Всі реєстрові імена сутностей які зареєстровані в коді](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/client/events/engine/RenderEngine.java)


`isHumanoid`: Визначає чи є сутність гуманоїдом. Гуманоїди це моби що здатні змінювати анімацію в залежності від того що вони тримають.

`faction`: Створіння в однаковій фракції не будуть атакувати один одного в ближньому бою. Допустимі значення:`enderman, piglins, wither, neutral, undead, illager, villager`

`attributes`:

| Ключ           | Функція                                                           |
| -------------- | ----------------------------------------------------------------- |
| impact         | Розширює час приголомшення атакованої цілі                        |
| armor_negation | Обходить захисне значення на %                                    |
| max_strikes    | Визначає скільки сутностей може поранено за один мах              |
| chasing_speed  | Для мобів ближнього бою, визначає як швидко моб переслідує ворога |
| scale          | Визначає розмір сутності                                          |

`default_livingmotions`:

| Ключ  | Функція                              |
| ----- | ------------------------------------ |
| idle  | Коли сутність стоїть                 |
| walk  | Коли сутність рухається              |
| chase | Коли сутність рухається та має ціль  |
| fall  | Коли сутність падає через гравітацію |
| death | Коли сутність помирає                |
| mount | Коли сутність їде                    |

`stun_animations`:

| Ключ      | Функція                      |
| --------- | ---------------------------- |
| short     | Кожна нормальна атака        |
| long      | Для деяких спеціальних атак  |
| knockdown | Земельний удар Ендер Дракона |
| fall      | Ушкодження від падіння       |

`combat_behavior`: визначає бойові рухи сутності.

| Ключ             | Функція                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------- |
| weight           | Можливість обрання цієї поведінки. Воно буде розраховане як `(вага/загальна сума ваги)` |
| canBeInterrupted | Визначає, чи можна скасувати цю серію рухів                                             |
| looping          | Визначає, чи слід зберегти поточну поведінку при скасуванні                             |
| cooldown         | Визначає, скільки "тіків" це займе для повторного використання                          |
| behaviors        | Визначення умов та анімації атаки                                                       |

`behaviors`:

| Ключ       | Функція                                          |
| ---------- | ------------------------------------------------ |
| conditions | Умови які повинні бути виконані аби бути обраним |
| animation  | Шлях до анімації                                 |

`conditions`:

| Ключ                      | Функція                                                                                      | Аргументи                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| random_chance             | Перевіряє, чи випадкове значення вище заданого аргументу                                     | "chance": double                                                                                    |
| within_eye_height       | Перевіряє, чи відстань Y між ціллю й нападником менше ніж висота очей нападника              | -                                                                                                   |
| within_distance           | Перевіряє відстань між ціллю та нападником, якщо вони знаходяться в межах заданого аргументу | "min": double, "max": double                                                                        |
| within_angle              | Перевіряє, чи знаходиться кут до цілі у межах заданого аргументу.                            | "min": double, "max": double                                                                        |
| within_angle_horizontal | Перевіряє чи кут осі Y до цілі в межах заданого аргументу.                                   | "min": double, "max": double                                                                        |
| health                    | Перевіряє здоров'я сутності.                                                                 | "health": double, "comparator": `enum:(greater_absolute, less_absolute, greater_ratio, less_ratio)` |

***
## **💡 Зміна анімації на основі зброї в руках -**
Для гуманоїдних мобів ви можете обирати різні анімації залежно від зброї яку вони тримають. В цьому випадку формат "combat_behaviors" дещо змінюється. Спочатку необхідно перевірити, чи встановили ви значення "isHumanoid" на "true".

Нижче приклад створення зомбі який володіє мечем як скелет висушувач при стоянні або ходінні, атакує мечем або стукає порожніми руками.
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

`humanoid_weapon_motions`: Список модифікованих живих рухів для кожної категорії зброї.

`weapon_categories`: Яка зброя повинна мати однакову поведінкову серію. Допустимі значення:

```JAVA
public enum WeaponCategory {
       NOT_WEAON, AXE, FIST, GREATSWORD, HOE, PICKAXE, SHOVEL, SWORD, KATANA, SPEAR, TACHI, TRIDENT, LONGSWORD, DAGGER, SHIELD, RANGED
}
```

`style`: Стиль тримання. Допустимі значення: `one_hand, two_hand, common`.

