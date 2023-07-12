NOTE: Lastly update at version: 18.1.16

# Custom entity datapack


Epic Fight isn't normally compatible with other mods, especially with the entities. So you have to manually define the entity's model, animations, and other attribute values. This can be achieved by using Datapack.
***

## **💡 Creating a JSON file -**


Before you create a JSON file, you should get the registry name of the entity you want to make compatible. In Minecraft, you can see the list of entities registered now by "/summon" command.

![image](https://user-images.githubusercontent.com/79469058/166224784-b556e090-4e56-45bd-ad80-ccc33c06d859.png)


Most of the registry names consist of "modid:entityname". If you get the registry name, you can create the JSON file under
`data/modid/epicfight_mobpatch/entityname.json`
***

## **💡 Getting a path of models and animations -**

[Model files](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

[Animation files](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Animations.java)
***
## **💡 Easy Setup -**

### **📘 Using preset**


For the entities that have the same actions from vanilla ones, You can use a preset. It is very simple as shown below.

```JSON
{
	"preset": "minecraft:creeper"
}
```

You should know that this will not work properly if the target entity doesn't share the code from the vanilla one, although it is seemingly the same. The allowed values are all the entity's registry names that are registered in the [code](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/world/capabilities/provider/ProviderEntity.java)

### **❌ Disabling an animated entity**


You also can disable the existing animated entity. It can be done by a simple line.
```JSON
{
	"disabled": true
}
```

***
## **💡 Adding a feature -**


Below is a simple example of creating a punching zombie.
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

`model`: The model of the entity. Allowed values are [here](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Models.java)

`renderer`:
[All the entity's registry names that are registered in the code](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/client/events/engine/RenderEngine.java)


`isHumanoid`: Determines if the entity is humanoid. Humanoid mobs are able to change the animations based on what item they're holding.

`faction`: Entities that have the same faction will not attack each other by melee attack. The allowed values are:`enderman, piglins, wither, neutral, undead, illager, villager`

`attributes`:

| Key | Feature |
| ------------- | ------------- |
| impact | Extends the stun time of attack target |
| armor_negation | Bypasses defense points by % |
| max_strikes | Determines how many entities can hit per one swing |
| chasing_speed | For melee attack mobs, determines how fast the mob chases the enemy |
| scale | Determines the size of the entity |

`default_livingmotions`:

| Key | Feature |
| ------------- | ------------- |
| idle | When the entity stays still |
| walk | When the entity moves |
| chase | When the entity moves and has a target |
| fall | When the entity falls because of gravity |
| death | When the entity dies |
| mount | When the entity is riding |

`stun_animations`:

| Key | Feature |
| ------------- | ------------- |
| short | Every normal attack |
| long | For some special attacks |
| knockdown | Ender dragon's ground slam |
| fall | Fall damage |

`combat_behavior`: defines the attack moves of the entity.

| Key | Feature |
| ------------- | ------------- |
| weight | The possibility of this behavior is selected. It will be calculated as `(weight/total weight sum)` |
| canBeInterrupted | Determines if this movement series can be canceled |
| looping | Determines whether the current behavior should be saved when canceled |
| cooldown | Determines how many "ticks" it'll take to be used again |
| behaviors | Definition of the conditions and attack animation |

`behaviors`:

| Key | Feature |
| ------------- | ------------- |
| conditions | Conditions that have to be met to be selected |
| animation | The animation path |

`conditions`:

| Key | Feature | Arguments |
| ------------- | ------------- | ------------- |
| random_chance | Checks if the random value is higher than the given argument | "chance": double |
| within_eye_height | Checks if the Y distance between target and attacker is smaller than the attacker's eye height | - |
| within_distance | Checks the distance between target and attacker, if they are within the given arguments | "min": double, "max": double |
| within_angle | Checks if the angle towards the target is within the given argument. | "min": double, "max": double |
| within_angle_horizontal | Checks if the Y-axis angle towards the target is within the given argument. | "min": double, "max": double |
| health | Checks the entity's health. | "health": double, "comparator": `enum:(greater_absolute, less_absolute, greater_ratio, less_ratio)` |

***
## **💡 Changing the animation based on the weapon its holding -**
For the humanoid mobs, you can set different animation sets depending on the weapon they're holding. In this case, the format of the "combat_behaviors" is slightly changed. First, you have to check if you set the "isHumanoid" value to true.

Below is an example of creating a zombie, wielding a swor like a wither skeleton while idle and walking, attacking with a sword, or punching with empty hands.
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

`humanoid_weapon_motions`: A list of the modified living motions for each weapon category.

`weapon_categories`: Which weapons should have the same behavior series. Allowed values are:

```JAVA
public enum WeaponCategory {
       NOT_WEAON, AXE, FIST, GREATSWORD, HOE, PICKAXE, SHOVEL, SWORD, KATANA, SPEAR, TACHI, TRIDENT, LONGSWORD, DAGGER, SHIELD, RANGED
}
```

`style`: Holding style. Allowed values are: `one_hand, two_hand, common`.

