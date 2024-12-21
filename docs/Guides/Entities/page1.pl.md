UWAGA: Ostatnia aktualizacja w wersji: 18.1.16

# Datapack własnych Mobów


Epic Fight nie jest zazwyczaj kompatybilne z innymi modami, zwłaszcza z bytami. Dlatego trzeba samodzielnie zdefiniować model, animacje i inne wartości atrybutów bytu. Można to zrobić przy użyciu Datapack.
***

## **💡 Tworzenie pliku JSON -**


Zanim utworzysz plik JSON, powinieneś znać nazwę rejestru jednostki, którą chcesz uczynić kompatybilną. W Minecrafcie możesz zobaczyć listę zarejestrowanych bytów za pomocą polecenia "/summon".

![obraz](https://user-images.githubusercontent.com/79469058/166224784-b556e090-4e56-45bd-ad80-ccc33c06d859.png)


Większość nazw rejestru składa się z „modid:entityname”. Jeśli znajdziesz nazwę rejestru, możesz utworzyć plik JSON pod `data/modid/epicfight_mobpatch/entityname.json`
***

## **💡 Ścieżka modeli i animacji -**

[Pliki modelu](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

[Pliki animacji](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Animations.java)
***
## **💡 Łatwa konfiguracja -**

### **📘 Używanie ustawień domyślnych**


Dla bytów zachowujących się tak samo jak w podstawowej wersji gry możesz użyć ustawień wstępnych. Jest to bardzo proste, jak pokazano poniżej.

```JSON
{
    "preset": "minecraft:creeper"
}
```

Należy wiedzieć, że nie będzie to działać poprawnie, jeśli docelowy byt nie współdzieli kodu ze swoją podstawową wersją, pomimo że wydaje się taki sam. Dozwolone wartości to wszystkie nazwy rejestru bytu zapisane w kodzie [](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/world/capabilities/provider/ProviderEntity.java)

### **❌ Wyłączanie animacji bytu**


Można również wyłączyć animacje istniejącego bytu. Da się to zrobić jedną linijką kodu.
```JSON
{
    "disabled": true
}
```

***
## **💡 Dodawanie funkcji -**


Poniżej znajduje się prosty przykład tworzenia uderzającego zombie.
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

`model`: Model bytu. Dozwolone wartości to [tutaj](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

`renderer`: [Wszystkie nazwy rejestru bytu zapisane w kodzie](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/client/events/engine/RenderEngine.java)


`isHumanoid`: Określa czy obiekt jest humanoidem. Humanoidalne moby są w stanie zmieniać animacje w zależności od przedmiotu, jaki trzymają.

`faction`: Jednostki, które mają tę samą frakcję, nie zaatakują się nawzajem, za pomocą ataku wręcz. Dozwolone wartości to:`enderman, piglins, wither, neutral, undead, illager, villager`

`attributes`:

| Klucz          | Funkcja                                                            |
| -------------- | ------------------------------------------------------------------ |
| impact         | Wydłuża czas ogłuszenia celu                                       |
| armor_negation | Pomija punkty obrony o %                                           |
| max_strikes    | Określa, ile bytów może trafić jednym zamachnięciem                |
| chasing_speed  | Dla mobów atakujących wręcz, określa jak szybko moby ścigają wroga |
| scale          | Określa rozmiar bytu                                               |

`default_livingmotions`:

| Klucz | Funkcja                          |
| ----- | -------------------------------- |
| idle  | Kiedy byt stoi w bezruchu        |
| walk  | Kiedy byt się porusza            |
| chase | Kiedy byt się porusza i ma cel   |
| fall  | Kiedy byt spada przez grawitację |
| death | Kiedy byt ginie                  |
| mount | Kiedy byt jeździ                 |

`stun_animations`:

| Klucz     | Funkcja                           |
| --------- | --------------------------------- |
| short     | Każdy normalny atak               |
| long      | Dla niektórych ataków specjalnych |
| knockdown | Uderzenie w ziemie smoka kresu    |
| fall      | Obrażenia od upadku               |

`combat_behavior`: definiuje ruchy ataku moba.

| Klucz            | Funkcja                                                                                                  |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| weight           | Możliwość wagowa, że ta funkcja zostanie wybrana. Zostanie on obliczony jako `(weight/total weight sum)` |
| canBeInterrupted | Określa, czy ta seria ruchów może być anulowana                                                          |
| looping          | Określa, czy obecne zachowanie powinno być zapisane po anulowaniu                                        |
| cooldown         | Określa ile "ticków" będzie musiało minąć, zanim będzie móc być użyte ponownie                           |
| behaviors        | Definicja warunków i animacji ataku                                                                      |

`behaviors`:

| Klucz      | Funkcja                                                 |
| ---------- | ------------------------------------------------------- |
| conditions | Warunki, które muszą być spełnione, aby została wybrana |
| animation  | Ścieżka animacji                                        |

`conditions`:

| Klucz                     | Funkcja                                                                                        | Argumenty                                                                                           |
| ------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| random_chance             | Sprawdza, czy wartość losowa jest wyższa niż podany argument                                   | "chance": double                                                                                    |
| within_eye_height       | Sprawdza, czy odległość Y między celem a atakującym jest mniejsza niż wysokość oka atakującego | -                                                                                                   |
| within_distance           | Sprawdza odległość między celem a atakującym, jeśli znajdują się w podanej argumentacji        | "min": double, "max": double                                                                        |
| within_angle              | Sprawdza, czy kąt w kierunku celu znajduje się w danym argumencie.                             | "min": double, "max": double                                                                        |
| within_angle_horizontal | Sprawdza, czy kąt Y w kierunku celu znajduje się w danym argumencie.                           | "min": double, "max": double                                                                        |
| health                    | Sprawdza zdrowie moba.                                                                         | "health": double, "comparator": `enum:(greater_absolute, less_absolute, greater_ratio, less_ratio)` |

***
## **💡 Zmiana animacji na podstawie broni trzymanej -**
Dla mobów humanoidalnych możesz ustawić różne zestawy animacji w zależności od broni, którą trzymają. W tym przypadku format „combat_behaviors” jest nieznacznie zmieniony. Najpierw musisz sprawdzić, czy ustawisz wartość "isHumanoid" na wartość true (prawdziwą).

Poniżej znajduje się przykład stworzenia zombie, w którym zombie trzyma miecz jak szkielet withera, gdy stoi, chodzi, atakuje mieczem albo wali z pięści.
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

`humanoid_weapon_motions`: Lista zmodyfikowanych ruchów dla każdej kategorii broni.

`weapon_categories`: Które rodzaje broni powinny mieć te same serie zachowań. Dozwolone wartości to:

```JAVA
public enum WeaponCategory {
       NOT_WEAON, AXE, FIST, GREATSWORD, HOE, PICKAXE, SHOVEL, SWORD, KATANA, SPEAR, TACHI, TRIDENT, LONGSWORD, DAGGER, SHIELD, RANGED
}
```

`style`: Styl trzymania. Dozwolone wartości to: `one_hand, two_hand, common`.

