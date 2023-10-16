# Custom Weapon Armor datapack

## **💡 Making the pack.mcmeta file**

First, you'll need to create a pack.mcmeta by making a normal txt file and renaming it to pack.mcmeta (make sure filename extensions are turned on).

After that edit it and add these lines of code for your datapack to work.
```JSON
{
	"pack":{
		"pack_format":6,
		"description":"A short description on your pack"
		}
}
```

### **📄 pack_format Values**

| Version | Value |
| ------------- | ------------- |
| 1.16.2–1.16.5 | 6 |
| 1.17.x | 7 |
| 1.18.2 | 8 |
| 1.19.2 | 9 |
| 1.20.1 | 15 |

### **🗂 Making the folder path**

You'll need to make a series of folders with the following names. Every folder or file needs to be inside the last one.

**data -> "modid" -> capabilities -> "type" -> "registryname".JSON**

*If the weapon you wish to patch has unexpected syntax like slashes (/) in their registry name like:*
**"bloodandmadness:weapons/hunter_axe"**  

 You can express these unexpected syntaxes (slashes) in the folder hierarchy as such:
 
 **data -> "modid" -> capabilities -> "type" -> "Text before the slash" ... -> "registryname".JSON**
 
 So for the example mentioned previously ("bloodandmadness:***weapons***/hunter_axe") the folder hierarchy would be the following:
 
 **data -> bloodandmadness -> capabilities -> weapons -> *weapons* -> hunter_axe.JSON**

***

`modid`: You'll find the modid by using a zip program like 7-zip and clicking "open archive" on the mod that you want to make compatible.
From there you'll open the data folder and then there'll be the name, which you'll name the "modid" folder.

`type`: Either `weapons` or `armors`

`registrynames`: When you're in-game, you can press F3+H to turn on Advanced Tooltips to see the registry name of the item you want to configure.
> 
> ![2022-05-29_16 48 36](https://user-images.githubusercontent.com/86358160/170875930-7bae2b88-2aa1-41fe-a59b-5de4027e563f.png)
> 
> ![2022-05-29_16 51 08](https://user-images.githubusercontent.com/86358160/170876568-5838849a-f578-42ae-8d50-f24fb3f9df6d.png)
 
### **❗️ You'll need to make a txt file with only the outlined text + `.json`**
***
## **💡 Creating the JSON file**

### **⚔️ Weapon file**

 > Here's a simple example of a sword config:

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

### **🗡 One/Two-handed weapon file**

 > Here's an example of a spear config with both one-handed and two-handed attributes:
 
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

`type`: Which animations it should use. Available Type Values:

| Type | Style Info |
| ---------- | ---------- |
| axe | One-Handed |
| fist | Dual Wielding |
| hoe | One-Handed |
| pickaxe | One-Handed |
| shovel | One-Handed |
| sword | Dual Wielding |
| spear | One-Handed/Two-Handed |
| greatsword | Two-Handed |
| uchigatana | Two-Handed |
| tachi | Two-Handed |
| longsword | Two-Handed |
| dagger | Dual Wielding |
| bow | Two-Handed |
| crossbow | Two-Handed |
| trident | One-Handed |
| shield | Dual Wielding |

One-Handed: Can only be used if held in the main hand.

Two-Handed: Can only be used if held in the main hand and disable the offhand function.

Dual Wielding: Can be used in the offhand if the same type of weapon is held in the main hand.

***

`attributes`: This decides if the weapon should have different stats when something is held in the off-hand
* `common`: If the weapon should have the same stats regardless of something being held in the off-hand or if the weapon type has the two-handed restriction.

* `one_hand/two_hand`: If the weapon type doesn't have the two-handed style, then they can be set to have different stats when something is held in the off-hand or not.

***

### **🔵 The next few attribute values are added to their base values.**

`armor_negation`: This percentage won't decrease the total damage by defense points. (base value: 0.0)

`impact`: This attribute will increase the total stun time of the hit target. (base value: 0.5)

`max_strikes`: The maximum number of hittable enemies per swing. (base value: 1.0)

`damage_bonus`: This attribute will increase the damage. (base value: 0.0)

`speed_bonus`: This attribute will increase the attack speed. (base value: 0.0)

***

## **💡 Resizing collider**

You can resize the collider to make it match visually.

 > Here's a simple example of an armor config:
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

`number`: The number of colliders interpolating between the previous pose and the current. The higher value will enhance the accuracy of collision detection but more overhead will be out there

`center`: The center position of the collider.

`size`: The x, y, and z size of the collider.

It is hard to expect the size of the collider only with the numerical estimation. You can save your time by referring to the presets. Copy the value of the preset and gradually correct the size.

[Collider Presets](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/ColliderPreset.java)
***
## **💡 Armor file**

 > Here's a simple example of an armor config:
 
```
 {
 	"attributes": {
 		"stun_armor":1.5,
 		"weight":8.2
 	}
 }
```

`stun_armor`: This attribute will increase the time between stuns.

`weight`: This attribute shortens the stun time when hit, but increases the stamina consumption of skills and decreases attack speed. Items with high attack speed will be affected more.
***
## **📦 Finishing up the Datapack**

Now what you should have ended up with is:
* The data folder that contains all the JSON files and other folders like capabilities.
* The pack.mcmeta file.
***
### **✉️ This next step is only necessary if you want to be able to send the datapack.**

You don't have to make the datapack a zip, you could just put both the data folder and the pack.mcmeta file in another folder but here's how to do it with 7-Zip.

> First, you'll have to select both the data folder and the pack.mcmeta file.
> 
> ![data pack mcdata](https://user-images.githubusercontent.com/86358160/171872228-00816dc2-cf98-4bdc-bddf-a3a7bd1cd9c1.PNG)

Then right-click, go under 7-Zip, and click on `add to "datapack.zip"`.

And that's it, all you'll have to do now is just put the datapack in a world's datapack folder and have fun :)
***

** The [Youtube Tutorial](https://www.youtube.com/watch?v=JNpahwjriac&t=33s) for those who don't want to read**
