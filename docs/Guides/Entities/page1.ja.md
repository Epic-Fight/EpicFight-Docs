# カスタムエンティティデータパック


Epic Fight は通常、他のModで追加されたエンティティ（モブ）と互換性がありません。 そのため、それらのエンティティのモデルやアニメーション、およびEpicFight固有のステータス（衝撃ダメージ等）を手動で定義する必要があり、 それらの設定は全てデータパックを用いて行われます。
***

## **💡 JSONファイルの作成**


JSON ファイルを作成する前に、互換性を持たせたいエンティティのレジストリ名（モブのID）を取得します。 レジストリ名を取得するにはゲーム内でコマンドを使用して確認する方法が最も確実です。Minecraftではゲーム内に登録されているエンティティの一覧を「/summon」コマンドで確認する事ができます。

![image](https://user-images.githubusercontent.com/79469058/166224784-b556e090-4e56-45bd-ad80-ccc33c06d859.png)


ほとんどのレジストリ名は「modid:entityname」で構成されています。 レジストリ名を取得したらJSONファイルと格納するフォルダを作成しましょう。JSONファイルは以下の階層に作成してください。`data/modid/epicfight_mobpatch/entityname.json` modidおよびentityname.jsonの名前については、レジストリ名の「modid:entityname」と同じになるよう設定してください。
***

## **💡 適用したいモデルとアニメーションを選び、それらのパスを取得する**

[モデルファイルの一覧](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

[アニメーションファイルの一覧](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Animations.java)
***
## **💡 簡単な設定**

### **📘プリセットを使用して設定する**


バニラのエンティティと同じアクションを行うエンティティに設定する場合は、プリセットを使用できます。（例：氷のクリーパーといったテクスチャだけが違い、Aiはバニラのクリーパーと全く同じモブに設定したい場合など） 以下に示すように非常にシンプルです。

```JSON
{
    "preset": "minecraft:creeper"
}
```

一見単純に見えますが、対象のエンティティがバニラのものとコードを共有していない場合、この方法では正常に動作しない可能性があることを覚えておいてください。 プリセットに使用できるidは、 [code](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/world/capabilities/provider/ProviderEntity.java)のページに登録されているエンティティを参照してください。

### **❌エンティティのアニメーションを無効にする**


バニラのエンティティに適用されたアニメーションを無効にすることもできます。 以下に示すように非常にシンプルです。
```JSON
{
    "disabled": true
}
```

***
## **💡 より高度な設定（詳細なai・ステータス等）**


以下はパンチのアニメーションを持つゾンビを作成する簡単な例です。
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

`model`: エンティティのモデルを選択します。 設定値の一覧は[こちら](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

`renderer`: 実際にゲーム内で描画されるエンティティの形を選択します。設定値の一覧は[こちら](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/client/events/engine/RenderEngine.java)


`isHumanoid`: エンティティの形が人間型であるかどうかを「true」または「false」で選択します。 人間型のモブは保持している武器の種類によってアニメーションを変更できます。

`faction`: 同じファクション（派閥）が設定されたエンティティ同士は近接攻撃を行わなくなります。 設定値の一覧は次の通りです:`enderman, piglins, wither, neutral, undead, illager, villager`

`attributes`:

| キー             | 概要                      |
| -------------- | ----------------------- |
| impact         | 攻撃対象のスタン時間を延長する。        |
| armor_negation | 設定された割合のダメージが防具を貫通する。   |
| max_strikes    | 一度の攻撃でヒットするエンティティの数。    |
| chasing_speed  | モブが目標を追いかける速度（近接攻撃モブのみ） |
| scale          | エンティティのサイズ              |

`default_livingmotions`:

| キー    | 概要                         |
| ----- | -------------------------- |
| idle  | エンティティが静止時のアニメーション         |
| walk  | エンティティが動いている時のアニメーション      |
| chase | エンティティが目標を追いかけている時のアニメーション |
| fall  | 重力によってエンティティが落下した時のアニメーション |
| death | エンティティが死んだときのアニメーション       |
| mount | エンティティが乗っている時のアニメーション      |

`stun_animations`:

| キー        | 概要                                    |
| --------- | ------------------------------------- |
| short     | 全ての通常攻撃の受けた時のアニメーション                  |
| long      | 特殊攻撃を受けた時のアニメーション                     |
| knockdown | エンダードラゴン限定の特殊攻撃（グランドスラム）を受けた時のアニメーション |
| fall      | 落下ダメージを受けた時のアニメーション                   |

`combat_behavior`: エンティティの攻撃AIおよびアニメーションを定義する。

| キー               | 概要                                             |
| ---------------- | ---------------------------------------------- |
| weight           | このアクションが選択される確率。 `(設定したウェイト値/合計のウェイト値)`で計算される。 |
| canBeInterrupted | この一連の移動をキャンセルできるかどうか                           |
| looping          | キャンセル時に現在の動作を保存するかどうか                          |
| cooldown         | 再度そのアクションを使用するまでの「ティック」数                       |
| behaviors        | 条件および攻撃アニメーションの定義                              |

`behaviors`:

| キー         | 概要                      |
| ---------- | ----------------------- |
| conditions | このアクションが選択されるために満たすべき条件 |
| animation  | 再生されるアニメーションのパス         |

`conditions`:

| キー                        | 概要                                   | 設定値（引数）                                                                                             |
| ------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------- |
| random_chance             | 乱数値が与えられた引数より大きいかどうかをチェックする          | "chance": double                                                                                    |
| within_eye_height       | 目標と自身のY距離が自身の目の高さより小さいかどうかをチェックする。   | -                                                                                                   |
| within_distance           | 目標と自身の距離が、与えられた引数の範囲内かどうかをチェックする。    | "min": double, "max": double                                                                        |
| within_angle              | 目標に向かう角度が与えられた引数の範囲内かどうかをチェックする。     | "min": double, "max": double                                                                        |
| within_angle_horizontal | 目標に向かうY軸の角度が、与えられた引数の範囲内かどうかをチェックする。 | "min": double, "max": double                                                                        |
| health                    | エンティティの体力をチェックする。                    | "health": double, "comparator": `enum:(greater_absolute, less_absolute, greater_ratio, less_ratio)` |

***
## **💡 持っている武器種によってアニメーションを変更するには**
人型のモブは持っている武器種によって異なるアニメーションを設定できます。 「combat_behaviors」の様式を一部変更する事で武器種ごとの攻撃アニメーションを設定でき、「humanoid_weapon_motions」の項目を追加する事でアイドル時や歩行時のアニメーションを変更できます。 ※設定前に「isHumanoid」の値を「true」に設定しているか確認してください。

以下はゾンビの作成例です。剣を持っている時はアイドル時と歩行時にウィザースケルトンのような剣を構えて歩くアニメーションが再生され、何も持っていない時は攻撃時にゾンビのように腕を振り回すアニメーションが再生されます。
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

`humanoid_weapon_motions`: 武器種ごとにアイドル時など基本的な動作のアニメーションを定義する項目。

`weapon_categories`: このアニメーションが選択される武器種。 設置値は以下の通り：

```JAVA
public enum WeaponCategory {
       NOT_WEAON, AXE, FIST, GREATSWORD, HOE, PICKAXE, SHOVEL, SWORD, KATANA, SPEAR, TACHI, TRIDENT, LONGSWORD, DAGGER, SHIELD, RANGED
}
```

`style`: 武器を持つスタイル。 設定値は次の通り: `one_hand, two_hand, common`.

