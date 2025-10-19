---
search:
  exclude: true
---
# 定制武器盔甲数据包

## **💡 制作 pack.mcmeta 文件**

首先，您需要创建一个 pack.mcmeta，方法是创建一个普通的 txt 文件并将其重命名为 pack.mcmeta（确保文件扩展名已打开）。

之后编辑它并添加这些代码行以使您的数据包正常工作。
```JSON
{
    "pack":{
        "pack_format":6,
        "description":"A short description on your pack"
        }
}
```

### **📄 pack_format 值**

| 版本            | 数值 |
| ------------- | -- |
| 1.16.2–1.16.5 | 6  |
| 1.17.x        | 7  |
| 1.18.2        | 9  |

### **🗂 创建文件夹路径**

您需要创建一系列具有以下名称的文件夹。 每个文件夹或文件都需要位于最后一个文件夹或文件中。

data -> "modid" -> capabilities -> "type" -> "registrynames".json

***

`modid`：您可以使用 7-zip 等 zip 程序并在要兼容的 mod 上单击“open archive”来找到 modid。 从那里打开数据文件夹，然后会出现名称，将其命名为“modid”文件夹。

`type`：`武器`或`盔甲`

`registrynames`：在游戏中时，您可以按 F3+H 打开高级信息显示来查看要配置的项目的注册表名称。
> ![2022-05-29_16 48 36](https://user-images.githubusercontent.com/86358160/170875930-7bae2b88-2aa1-41fe-a59b-5de4027e563f.png)
> 
> ![2022-05-29_16 51 08](https://user-images.githubusercontent.com/86358160/170876568-5838849a-f578-42ae-8d50-f24fb3f9df6d.png)
> 
> ### **❗️您需要制作一个仅包含简略文本+`.json`的txt文件**
***
## **💡 创建 JSON 文件**

### **⚔️武器文件**

 > 这是配置剑的一个简单示例：

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

### **🗡 单手/双手武器文件**

 > 以下是同时具有单手和双手属性的矛配置示例：

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

`type`：应该使用哪些动画。 可用类型值：

| 类型         | 样式信息  |
| ---------- | ----- |
| axe        | 单手    |
| fist       | 双持    |
| hoe        | 单手    |
| pickaxe    | 单手    |
| shovel     | 单手    |
| sword      | 双持    |
| spear      | 单手/双手 |
| greatsword | 双手    |
| katana     | 双手    |
| tachi      | 双手    |
| longsword  | 双手    |
| dagger     | 双持    |
| bow        | 双手    |
| crossbow   | 双手    |
| trident    | 单手    |
| shield     | 双持    |

单手：仅当握在主手中时才能使用。

双手：仅在主手握持时才能使用，并禁用副手功能。

双持：如果主手持有同类型武器，则可以在副手使用。

***

`attributes`：这决定了当副手拿着东西时武器是否应该具有不同的属性
* `common`：如果武器应该具有相同的属性，无论副手拿着什么东西，或者武器类型是否有双手限制。

* `one_hand/two_hand`：如果武器类型没有双手样式，则可以将它们设置为在副手或非手持物品时具有不同的属性。

***

### **🔵 接下来的几个属性值将添加到其基值中。**

`armor_negation`：此百分比不会减少防御点的总伤害。 (base value: 0.0)

`impact`：该属性会增加命中目标的总眩晕时间。 (base value: 0.5)

`max_strikes`：每次挥击可击中敌人的最大数量。 (base value: 1.0)

`damage_bonus`：该属性会增加伤害。 (base value: 0.0)

`speed_bonus`：该属性会提高攻击速度。 (base value: 0.0)

***

## **💡 调整碰撞体大小**

您可以调整碰撞箱的大小以使其在视觉上匹配。

 > 这是盔甲配置的一个简单示例：
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

`number`：在前一个姿势和当前姿势之间插值的碰撞箱数量。 较高的值将提高碰撞检测的准确性，但会产生更多的性能消耗

`center`：碰撞箱的中心位置。

`size`：碰撞体的 x、y 和 z 大小。

仅通过数值估计很难预测碰撞箱的大小。 您可以通过参考预设来节省时间。 复制预设值并逐渐修正尺寸。

[碰撞箱预设](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/ColliderPreset.java)

## **💡 盔甲文件**

 > 这是配置盔甲的一个简单示例：

```
 {
    "attributes": {
        "stun_armor":1.5,
        "weight":8.2
    }
 }
```

`stun_armor`：此属性将增加眩晕的时间。

`weight`：该属性会缩短被击中的眩晕时间，但会增加技能的体力消耗并降低攻击速度。 攻击速度高的物品受到的影响更大。

## **📦 完成数据包**

现在你应该得到的是：
* 包含所有 JSON 文件和其他文件夹（例如功能）的数据文件夹。
* pack.mcmeta 文件。

### **✉️ 仅当您希望能够发送数据包时才需要执行下一步。**

您不必将数据包制作为压缩文件，您可以将数据文件夹和 pack.mcmeta 文件放在另一个文件夹中，但以下是如何使用 7-Zip 进行此操作。

> 首先，您必须选择数据文件夹和 pack.mcmeta 文件。
> 
> ![data pack mcdata](https://user-images.githubusercontent.com/86358160/171872228-00816dc2-cf98-4bdc-bddf-a3a7bd1cd9c1.PNG)

然后右键单击，转到 7-Zip 下，然后单击`添加到“datapack.zip”`。

就是这样，您现在所要做的就是将数据包放入你的世界的数据包文件夹中并享受乐趣:)
***

** 为那些不想阅读的人提供的 [Youtube 教程](https://www.youtube.com/watch?v=JNpahwjriac&t=33s)**
