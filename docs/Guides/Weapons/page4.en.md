---
icon: material/tag-text
hide:
  - announcement
---
# NBT Weapon Assigning

This module extends Epic Fight by introducing full NBT-based weapon assignment support. 
It allows weapon types to be defined and selected dynamically based on the NBT data stored within an item.

This approach provides greater flexibility for datapacks and mods, 
as weapon classification is no longer limited to item IDs alone, 
but can instead depend on the item’s internal NBT structure.

***

{%
include-markdown 'includes/pack_mcmeta_section.md'
%}

***

{%
include-markdown 'includes/capabilities_folder_path_section.md'
%}

***

## :fontawesome-solid-lightbulb: Creating the JSON file

Similar to Item Capabilities, NBT-based weapon type assignment is defined through a set of conditional variations. 
Each variation specifies an NBT predicate that is evaluated against the item’s data, and when the condition is met, 
the corresponding weapon type and attribute overrides are applied.

When there is no variation block that meets the
given condition, the default data block speicified outside of "variations" tag is applied.

The following example demonstrates how different weapon types can be assigned on a single item based on the 
presence of specific enchantment NBT tags. If none of the defined conditions are satisfied, the 
configuration falls back to the default weapon type (on the example below, ``sword``) and attributes.

```JSON
{
	"variations": [
		{
			"condition": "epicfight:tag_value",
			"predicate": {
				"key": "Enchantments[].id",
				"value": "minecraft:sharpness"
			},
			"attributes":
			{
				"common":
				{
					"impact":10.0,
					"max_strikes":5
				}
			},
			"type":"epicfight:spear"
		},
		{
			"condition": "epicfight:tag_value",
			"predicate": {
				"key": "Enchantments[].id",
				"value": "minecraft:knockback"
			},
			"attributes":
			{
				"common":
				{
					"impact":5.0,
					"max_strikes":1
				}
			},
			"type":"epicfight:dagger"
		}
	],
	"attributes":
	{
		"common":
		{
			"impact":1.1,
			"max_strikes":1
		}
	},
	"type":"epicfight:sword"
}
```

``epicfight:tag_value`` is doing string-path resolution over the item NBT, and the root is already the item tag compound.
  
Here's an example:
  
* For ``/give @p netherite_sword{display:{Name:""cool name""}} 1``<br> 
The Key would be: ``"key": "display.Name"``, with ``"value": "cool name"``

Below are some keywords that Minecraft uses as ItemStack NBT Keys


<div markdown="1" style="display: flex; align-items: flex-start;">
<div markdown="1" style="margin-right: 5px;">

* Display / Visuals

| Purpose             | Key               |
| ------------------- | ----------------- |
| Custom name         | `display.Name`    |
| Lore (any line)     | `display.Lore[]`  |
| Lore (indexed)      | `display.Lore[0]` |
| Leather armor color | `display.color`   |

<br>
</div>
<div markdown="1" style="margin-right: 5px;">

* Enchantments

| Purpose                       | Key                        |
| ----------------------------- | -------------------------- |
| Enchantment ID                | `Enchantments[].id`        |
| Enchantment level             | `Enchantments[].lvl`       |
| Stored enchantment ID (books) | `StoredEnchantments[].id`  |
| Stored enchantment level      | `StoredEnchantments[].lvl` |

<br>
</div>
<div markdown="1" style="margin-right: 5px;">

* Attribute Modifiers

| Purpose             | Key                                                                 |
| ------------------- | ------------------------------------------------------------------- |
| Attribute name      | `AttributeModifiers[].AttributeName`                                |
| Attribute amount    | `AttributeModifiers[].Amount`                                       |
| Operation           | `AttributeModifiers[].Operation`                                    |
| Slot                | `AttributeModifiers[].Slot`                                         |
| UUID (array form)   | `AttributeModifiers[].UUID[]`                                       |
| UUID (least / most) | `AttributeModifiers[].UUIDLeast`<br>`AttributeModifiers[].UUIDMost` |

<br>
</div></div>

<div markdown="1" style="display: flex; align-items: flex-start;">
<div markdown="1" style="margin-right: 5px;">


* Durability / Repair

| Purpose           | Key           |
| ----------------- | ------------- |
| Damage value      | `Damage`      |
| Unbreakable flag  | `Unbreakable` |
| Anvil repair cost | `RepairCost`  |

<br>
</div>
<div markdown="1" style="margin-right: 5px;">

* Model / Rendering

| Purpose              | Key               |
| -------------------- | ----------------- |
| Custom model data    | `CustomModelData` |
| Hide flags (bitmask) | `HideFlags`       |

<br>
</div>
<div markdown="1" style="margin-right: 5px;">

* Potion & Status Items

| Purpose               | Key                               |
| --------------------- | --------------------------------- |
| Potion ID             | `Potion`                          |
| Custom potion effects | `CustomPotionEffects[].Id`        |
| Effect duration       | `CustomPotionEffects[].Duration`  |
| Effect amplifier      | `CustomPotionEffects[].Amplifier` |
| Potion color          | `CustomPotionColor`               |

</div></div>