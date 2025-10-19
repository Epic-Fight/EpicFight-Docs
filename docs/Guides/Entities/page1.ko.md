---
search:
  exclude: true
---
# 커스텀 엔티티 데이터팩


일반적으로, Epicfight 모드는 다른 모드, 특히 엔티티와 호환이 되지 않습니다. 따라서 엔티티의 모델, 애니메이션 및 기타 속성값을 수동으로 정의해야 합니다. 이는 데이터팩을 사용해서 구현 할 수 있습니다.
***

## **💡JSON 파일 만들기 -**


JSON파일을 생성하기 전에 호환시키려는 엔티티의 레지스트리 이름을 얻어야 합니다. 마인크래프트 안에서, /summon 명령어로 현재 등록된 엔티티의 목록들을 확인할 수 있습니다.

![이미지](https://user-images.githubusercontent.com/79469058/166224784-b556e090-4e56-45bd-ad80-ccc33c06d859.png)


대부분의 레지스트리 이름들은 "modid:entityname"로 구성되어 있습니다. 레지스트리의 이름은 얻었으면, 다음 경로에 JSON파일을 생성할 수 있습니다.`data/modid/epicfight_mobpatch/entityname.json`
***

## **💡 모델과 애니메이션의 경로 찾기 -**

[모델 파일](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

[애니메이션 파일](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Animations.java)
***
## **💡간편한 설정 -**

### **📘 프리셋 사용하기**


바닐라와 동일한 동작을 가지는 경우, 프리셋을 사용할 수 있습니다. 이 경우에는 아래와 같이 매우 간단합니다.

```JSON
{
    "preset": "minecraft:creeper"
}
```

알아두셔야 할것은, 겉보기에는 동일해 보이더라도 대상 엔티티가 바닐라 엔티티와 동일한 코드를 공유하지 않는다면 제대로 작동하지 않을 수 있습니다. 허용되는 값은 [코드](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/world/capabilities/provider/ProviderEntity.java)에 등록된 모든 엔티티의 레지스트리 이름입니다.

### **❌ 애니메이션이 적용된 엔티티 비활성화하기**


기존의 애니메이션된 엔티티를 비활성화할 수도 있습니다. 이는 간단하게 가능합니다.
```JSON
{
    "disabled": true
}
```

***
## **💡 기능 추가 -**


아래에는 펀치를 하는 좀비를 만드는 간단한 예시가 있습니다.
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

`model`: 엔티티의 모델입니다. 허용되는 값은[여기](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)에 있습니다.

`renderer`: [코드에 등록된 모든 엔티티의 레지스트리 이름](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/client/events/engine/RenderEngine.java)


`isHumanoid`: 엔티티가 인간형인지 여부를 확인합니다. 인간형 몹은 손에 들고 있는 아이템에 따라서 애니메이션을 변경할 수 있습니다.

`faction`: 같은 팩션을 가진 엔티티들은 근접 공격으로는 서로를 공격하지 않습니다. 이것도 허용되는 값은 다음과 같습니다.`enderman, piglins, wither, neutral, undead, illager, villager`

`attributes`:

| 키              | 기능                                    |
| -------------- | ------------------------------------- |
| impact         | 공격 대상의 경직 시간을 연장합니다.                  |
| armor_negation | %만큼 방어력을 관통합니다.                       |
| max_strikes    | 한 번의 공격으로 몇개의 엔티티를 공격할 수 있는지를 결정합니다.  |
| chasing_speed  | 근접 공격을 하는 몹인 경우, 몹이 목표를 쫒는 속도를 결정합니다. |
| scale          | 엔티티의 크기를 결정합니다.                       |

`default_livingmotions`:

| 키     | 기능                  |
| ----- | ------------------- |
| idle  | 엔티티가 정지 상태일때        |
| walk  | 엔티티가 이동할 때          |
| chase | 엔티티가 이동하며 타겟이 있는 경우 |
| fall  | 중력에 의해 엔티티가 낙하하는 경우 |
| death | 엔티티가 사망할 때          |
| mount | 엔티티가 탑승중인 경우        |

`stun_animations`:

| 키         | 기능            |
| --------- | ------------- |
| short     | 모든 일반 공격      |
| long      | 일부 특수 공격      |
| knockdown | 엔더 드래곤의 지면 강타 |
| fall      | 낙하 데미지를 입었을 때 |

`combat_behavior`: 엔티티의 공격 동작을 정의합니다.

| 키                | 기능                                             |
| ---------------- | ---------------------------------------------- |
| weight           | 이 동작이 선택될 확률이 있습니다. 이는 `(무게/총 무게의 합)`으로 계산됩니다. |
| canBeInterrupted | 이동 동작을 취소할 수 있는지 여부를 결정합니다.                    |
| looping          | 취소될 때 현재 동작을 저장해야하는지 여부를 결정합니다.                |
| cooldown         | 다시 사용하기까지 걸리는 "틱(ticks)"의 수를 결정합니다.            |
| behaviors        | 조건의 정의 및 공격 애니메이션                              |

`behaviors`:

| 키          | 기능                   |
| ---------- | -------------------- |
| conditions | 선택되기 위해서 충족되어야 하는 조건 |
| animation  | 재생되는 애니메이션의 경로       |

`conditions`:

| 키                         | 기능                                            | 인수                                                                                                  |
| ------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| random_chance             | 주어진 인수보다 랜덤값이 높은지 확인합니다.                      | "chance": double                                                                                    |
| within_eye_height       | 타겟과 공격자 사이의 Y축 거리가 공격자의 눈 높이보다 작은지 확인합니다.     | -                                                                                                   |
| within_distance           | 타겟과 공격자 사이의 거리를 확인하고, 주어진 인수 범위 내에 있는지 체크합니다. | "min": double, "max": double                                                                        |
| within_angle              | 타겟을 향한 각도가 주어진 인수의 범위 내인지 체크합니다.              | "min": double, "max": double                                                                        |
| within_angle_horizontal | 타겟을 향한 Y축 각도가 주어진 인수의 범위 내인지 체크합니다.           | "min": double, "max": double                                                                        |
| health                    | 엔티티의 체력을 확인합니다.                               | "health": double, "comparator": `enum:(greater_absolute, less_absolute, greater_ratio, less_ratio)` |

***
## **💡 들고있는 무기에 따라서 애니메이션 변경하기 -**
인간형 몹인 경우, 손에 들고있는 무기에 따라서 다른 애니메이션 세트를 적용할 수 있습니다. 이 경우에는, "combat_behaviors"의 형식이 약간 변형됩니다. 먼저 "isHumanoid"를 ture로 설정했는지 확인합니다.

아래에는 좀비가 위더 스켈레톤처럼 검을 들고 있을 때의 상태와 걷는 상태, 검으로 공격하거나 맨손으로 펀치 공격을 하는 예시입니다.
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

`humanoid_weapon_motions`: 각 무기 카테고리에 대한 수정된 무기 모션 목록입니다

`weapon_categories`: 같은 동작 시리즈를 가져야 하는 무기들입니다. 허용되는 값은 다음과 같습니다.

```JAVA
public enum WeaponCategory {
       NOT_WEAON, AXE, FIST, GREATSWORD, HOE, PICKAXE, SHOVEL, SWORD, KATANA, SPEAR, TACHI, TRIDENT, LONGSWORD, DAGGER, SHIELD, RANGED
}
```

`style`: 손에 들고 있는 모습입니다. 허용되는 값은 다음과 같습니다:`one_hand, two_hand, common`.

