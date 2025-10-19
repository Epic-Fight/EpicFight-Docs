---
search:
  exclude: true
---
# 自定义实体数据包


Epic Fight 通常与其他模组不兼容，尤其是实体。 所以您必须手动定义实体的模型、动画和其他属性值。 这可以通过使用数据包来实现。
***

## **💡 创建 JSON 文件 -**


在创建 JSON 文件之前，您应该获取要兼容的实体的注册表名称。 在 Minecraft 中，您可以通过“/summon”命令查看现在注册的实体列表。

![图像](https://user-images.githubusercontent.com/79469058/166224784-b556e090-4e56-45bd-ad80-ccc33c06d859.png)


大多数注册表名称由“modid:entityname”组成。 如果获得注册表名称，则可以在下创建 JSON 文件 `data/modid/epicfight_mobpatch/entityname.json`
***

## **💡 获取模型和动画的路径 -**

[模型文件](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

[动画文件](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Animations.java)
***
## **💡 简单设置 -**

### **📘 使用预设**


对于与原版实体具有相同操作的实体，您可以使用预设。 非常简单，如下所示。

```JSON
{
    "preset": "minecraft:creeper"
}
```

您应该知道，如果目标实体不共享原版实体的代码，则这将无法正常工作，尽管它看起来是相同的。 允许的值是在[code](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/world/capabilities/provider/ProviderEntity.java)中注册的所有实体的注册表名称

### **❌ 禁用动画实体**


您还可以禁用现有的动画实体。 只需一行简单的代码即可完成。
```JSON
{
    "disabled": true
}
```

***
## **💡添加一个功能 -**


下面是创建拳击僵尸的简单示例。
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

`model`：实体的模型。 允许的值位于[此处](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

`renderer`： [代码中注册的所有实体的注册表名称](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/client/events/engine/RenderEngine.java)


`isHumanoid`：确定实体是否为人形。 人形生物能够根据他们所持有的物品来改变动画。

`faction`：具有相同阵营的实体不会通过近战攻击互相攻击。 允许的值为：`末影人、猪灵、凋灵、中立生物、亡灵生物、灾厄村民、村民`

`attributes`:

| 关键             | 特征                   |
| -------------- | -------------------- |
| impact         | 延长攻击目标的眩晕时间          |
| armor_negation | 无视防御点%               |
| max_strikes    | 确定每次挥击可以击中的实体数量      |
| chasing_speed  | 对于近战攻击生物，决定生物追击敌人的速度 |
| scale          | 确定实体的大小              |

`default_livingmotions`:

| 关键    | 特征         |
| ----- | ---------- |
| idle  | 当实体保持静止时   |
| walk  | 当实体移动时     |
| chase | 当实体移动并有目标时 |
| fall  | 当实体因重力而下落时 |
| death | 当实体死亡时     |
| mount | 当实体乘坐时     |

`stun_animations`:

| 关键        | 特征        |
| --------- | --------- |
| short     | 每个普通攻击    |
| long      | 对于一些特殊的攻击 |
| knockdown | 末影龙的地面猛击  |
| fall      | 摔落伤害      |

`combat_behavior`：定义实体的攻击动作。

| 关键               | 特征                            |
| ---------------- | ----------------------------- |
| weight           | 选择这种行为的可能性。 计算方式为`（重量/总重量总和）` |
| canBeInterrupted | 确定该运动系列是否可以取消                 |
| looping          | 确定取消时是否应保存当前行为                |
| cooldown         | 确定需要多少个“刻度”才能再次使用             |
| behaviors        | 条件定义和攻击动画                     |

`behaviors`:

| 关键         | 特征     |
| ---------- | ------ |
| conditions | 须满足的条件 |
| animation  | 动画路径   |

`conditions`:

| 关键                        | 特征                           | 自变量                                                                                                 |
| ------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------- |
| random_chance             | 检查随机值是否高于给定参数                | "chance": double                                                                                    |
| within_eye_height       | 检查目标和攻击者之间的 Y 距离是否小于攻击者的眼睛高度 | -                                                                                                   |
| within_distance           | 检查目标和攻击者之间的距离（如果它们在给定参数内）    | "min": double, "max": double                                                                        |
| within_angle              | 检查与目标的角度是否在给定参数范围内。          | "min": double, "max": double                                                                        |
| within_angle_horizontal | 检查朝向目标的 Y 轴角度是否在给定参数范围内。     | "min": double, "max": double                                                                        |
| health                    | 检查实体的生命值。                    | "health": double, "comparator": `enum:(greater_absolute, less_absolute, greater_ratio, less_ratio)` |

***
## **💡 根据持有的武器改变动画 -**
对于人形生物，您可以根据他们持有的武器设置不同的动画集。 在这种情况下，“combat_behaviors”的格式略有改变。 首先，您必须检查是否将“isHumanoid”值设置为 true。

下面是一个创建僵尸的例子，在空闲、行走时像凋灵骷髅、用剑攻击时像凋灵骷髅那样挥舞剑，如果是空手就用拳击。
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

` humanoid_weapon_motions `：每个武器类别修改后的活动动作列表。

`weapon_categories`：哪些武器应该具有相同的行为。 允许的值为：

```JAVA
public enum WeaponCategory {
       NOT_WEAON, AXE, FIST, GREATSWORD, HOE, PICKAXE, SHOVEL, SWORD, KATANA, SPEAR, TACHI, TRIDENT, LONGSWORD, DAGGER, SHIELD, RANGED
}
```

`style`：持握姿势。 允许的值为：`one_hand、two_hand、common`。

