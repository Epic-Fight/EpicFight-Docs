---
icon: material/paw
hide:
  - announcement
---
# Custom entity datapack


Epic Fight isn't normally compatible with other mods, especially with the entities. So you have to manually define the entity's model, animations, and other attribute values. This can be achieved by using Datapack.
***

{%
include-markdown 'includes/pack_mcmeta_section.md'
%}

***
## :fontawesome-solid-lightbulb: Defining the JSON File and Directory Structure


Before creating a JSON file, it's important to determine the registry name of the entity you want to make compatible. In Minecraft, you can find a list of all currently registered entities by using the <code>/summon</code> command in the game. When you type <code>/summon</code> and press the Tab key, it will display a list of available entity registry names. These names are what you will use to reference the entities in your JSON file.

<center>
<img src="/assets/images/summon_entity.png" class="white-border"> 
</center>

Most registry names follow the format <code>modid:entityname</code>, where <code>modid</code> represents the identifier for the mod, and <code>entityname</code> is the specific name of the entity. Once you have identified the registry name, you can create the JSON file in the appropriate directory structure based on this format. The file should be placed under the following path: `data/"modid"/epicfight_mobpatch/"entityname".json`
***

## **:fontawesome-solid-lightbulb: Obtaining armature, animation and model tags -**

{%
include-markdown 'includes/model_entries_section.md'
%}

{%
include-markdown 'includes/armature_entries_section.md'
%}

{%
include-markdown 'includes/animation_entries_section.md'
%}

***
## **:fontawesome-solid-lightbulb: Easy Setup -**

### **:fontawesome-solid-book: Using presets**


For entities that extend the vanilla classes/or simmilar models to the ones in vanilla you can use presets as a simple setup method.
```JSON
{
	"preset": "minecraft:creeper"
}
```

You should know that this will not work properly if the targeted entity doesn't share its code with the vanilla entity (if the entity class doesn't extend the vanilla class), although it is seemingly the same. The allowed values are all the entity's registry names that are registered in the [code](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/world/capabilities/provider/EntityPatchProvider.java)

### **:fontawesome-solid-x: Disabling an "epicfied" entity**


You also can disable entity animations and custom models by using the following line (inside of entityname.json): 
<!-- md:example https://github.com/MetalKnight56/EpicFight-Files/raw/refs/heads/main/examples/NoMobAnimations.zip -->
```JSON
{
	"disabled": true
}
```

***
## **:fontawesome-solid-lightbulb: Entity animation features -**
In epic fight you are able to change entity ai's and behaviour through datapacks. You can customize which animations should be played according to certain behaviors.

Below is a simple example of how you can create a punching zombie.
<!-- md:example https://github.com/MetalKnight56/EpicFight-Files/raw/refs/heads/main/examples/PunchingZombie.zip --> 
```JSON
{
	"model": "epicfight:entity/biped_old_texture",
	"armature": "epicfight:entity/biped",
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

`model`: The model of the entity. Allowed values are [here](#obtaining-armature-animation-and-model-tags-)

`armature`: Defines the skeletal structure (armature) that the entity utilizes. For a complete list of allowed values, refer [here](#obtaining-armature-animation-and-model-tags-)

`renderer`: All the entity's registry names that are registered in our source code can be obtained [here](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/client/events/engine/RenderEngine.java)

`isHumanoid`: Specifies if the entity is humanoid. Humanoids adjust animations based on the item they hold.

`faction`: Entities in the same faction won't attack each other. Allowed values: `enderman`, `piglins`, `wither`, `neutral`, `undead`, `illager`, `villager`
***
<div style="display: flex; align-items: flex-start;">
<div style="flex: 1; margin-right: 20px; max-width:60%;">

<center>
<code>attributes</code>:

<table>
<thead>
<tr>
<th>Key</th>
<th>Feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>impact</td>
<td>Extends the stun time of attack target</td>
</tr>
<tr>
<td>armor_negation</td>
<td>Bypasses defense points by %</td>
</tr>
<tr>
<td>max_strikes</td>
<td>Determines how many entities can hit per one swing</td>
</tr>
<tr>
<td>chasing_speed</td>
<td>For melee attack mobs, determines how fast the mob chases the enemy</td>
</tr>
<tr>
<td>scale</td>
<td>Determines the size of the entity</td>
</tr>
</tbody>
</table>
</center>
</div> <div style="flex: 1; max-width:40%;">
<center>
<code>default_livingmotions</code>:

<table>
<thead>
<tr>
<th>Key</th>
<th>Feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>idle</td>
<td>When the entity stays still</td>
</tr>
<tr>
<td>walk</td>
<td>When the entity moves</td>
</tr>
<tr>
<td>chase</td>
<td>When the entity moves and has a target</td>
</tr>
<tr>
<td>fall</td>
<td>When the entity falls because of gravity</td>
</tr>
<tr>
<td>death</td>
<td>When the entity dies</td>
</tr>
<tr>
<td>mount</td>
<td>When the entity is riding</td>
</tr>
</tbody>
</table>
</center>
</div></div>

***
<div style="display: flex; align-items: flex-start;">
<div style="flex: 1; margin-right: 20px; max-width:30%;">
<center>
<code>stun_animations</code>:

<table>
<thead>
<tr>
<th>Key</th>
<th>Feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>short</td>
<td>Every normal attack</td>
</tr>
<tr>
<td>long</td>
<td>For some special attacks</td>
</tr>
<tr>
<td>knockdown</td>
<td>Ender dragon's ground slam</td>
</tr>
<tr>
<td>fall</td>
<td>Fall damage</td>
</tr>
</tbody>
</table>
</center>

</div> <div style="flex: 1; max-width:70%;">
<center>
<code>combat_behavior</code>: attack moves of the entity.

<table>
<thead>
<tr>
<th>Key</th>
<th>Feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>weight</td>
<td>The possibility of this behavior is selected. It will be calculated as <code>(weight/total weight sum)</code></td>
</tr>
<tr>
<td>canBeInterrupted</td>
<td>Determines if this movement series can be canceled</td>
</tr>
<tr>
<td>looping</td>
<td>Determines whether the current behavior should be saved when canceled</td>
</tr>
<tr>
<td>cooldown</td>
<td>Determines how many "ticks" it'll take to be used again</td>
</tr>
<tr>
<td>behaviors</td>
<td>Definition of the conditions and attack animation</td>
</tr>
</tbody>
</table>
</center>
</div></div> 
***

<div markdown="1" style="text-align: center;">

`behaviors`:

| Key | Feature |
| ------------- | ------------- |
| conditions | Conditions that have to be met to be selected |
| animation | The animation path |

***

`conditions`:

| Key | Feature | Arguments |
| ------------- | ------------- | ------------- |
| random_chance | Checks if the random value is higher than the given argument | "chance": double |
| within_eye_height | Checks if the Y distance between target and attacker is smaller than the attacker's eye height | - |
| within_distance | Checks the distance between target and attacker, if they are within the given arguments | "min": double, "max": double |
| within_angle | Checks if the angle towards the target is within the given argument. | "min": double, "max": double |
| within_angle_horizontal | Checks if the Y-axis angle towards the target is within the given argument. | "min": double, "max": double |
| health | Checks the entity's health. | "health": double, "comparator": `enum:(greater_absolute, less_absolute, greater_ratio, less_ratio)` |

</div>

***
## **:fontawesome-solid-lightbulb: Changing the animation based on the weapon its holding -**
For the humanoid mobs, you can set different animation sets depending on the weapon they're holding. In this case, the format of the "combat_behaviors" is slightly changed. First, you have to check if you set the "isHumanoid" value to true.

Below is an example of how you can create a zombie, that wields a sword like a wither skeleton while idle and walking, attacking with a sword, or punching with empty hands.
```JSON
{
	"model": "epicfight:entity/biped_old_texture",
	"armature": "epicfight:entity/biped",
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
       AXE, FIST, GREATSWORD, HOE, PICKAXE, SHOVEL, SWORD, UCHIGATANA, SPEAR, TACHI, TRIDENT, LONGSWORD, DAGGER, SHIELD, RANGED
```

`style`: Holding style. Allowed values are: `one_hand, two_hand, common`.

***