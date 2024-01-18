---
icon: touch_app
---
# Commands & Configurations
***
<center>
***Tweak combat, controls, lock-on, switching items, your UI and much more ! Epic Fight also has plenty of different commands and gamerules that also allow for further customization of your game and play style. Here, I'll walk you through all customization options + commands...***
***
</center>

## Commands - 
***
### :fontawesome-solid-gamepad: Gamerules - 

<!-- md:default none -->
#### /gamerule hasFallAnimation [true/false]

* Determines if the landing animation should play when the player takes more than a certain amount of fall damage.

#### /gamerule weightPenalty [0~100] (default 100)

* Determines how much the player will be penalized by weight. (Attack speed and stamina consumption)

#### /gamerule doVanillaAttack [true/false] (default true)

* Enables/Disables Vanilla attacks, if turned off, no players will be able to attack while in mining mode.

#### /gamerule keepSkills [true/false] (default false)

* Determines if the skills the player learned will be kept after the player dies. (Simmilar to KeepInventory but for Skills)

#### /gamerule canSwitchCombat [true/false] (default true)

* Enables/Disables the ability for players to switch between Combat - Mining modes.

#### /gamerule globalStun [true/false] (default false)

* Applies a simple Stun to non patched entities (Entities without animations/Custom, Modded ones). (Useful when you have lots of modded entities that don't have stun animstions)

#### /gamerule noMobsInBossfight [true/false] (default true)

* Allows you to control the spawning of endermans when ender dragon is alive. (Might affect Boss battles that disable mob spawn around them simmilarly to the Ender Dragon)

#### /gamerule stiffComboAttacks [true/false] (default true)

* Allows you to control whether Attack Combos should lock you in place. (Great for those who feel like the animation lock is too difficult)

***
### :material-gamepad-round: EpicFight Commands

#### /epicfight mode [mining/batlle] [target]

* Allows you to set the combat mode for a certain target.

#### /epicfight skill [add/clear/remove] [target]

* Allows you to add/remove a certain skill from a certain target.
* Allows you to wipe all the skills from a target.

***
### :fontawesome-solid-list-ul: EpicFight Attributes

#### /attribute [target] epicfight:[attribute]

* While the /attribute command isn't necessarily an epic fight command, epic fight adds a bunch of new attributes for you to use and tweak as you like...

List of attributes below:

<center>

| Attributes | Info |
| ------------- | ------------- |
| Armor Negation | Your base Armor Negation |
| Execution Resistance | Your base Resistance to Executions |
| Impact | Your base Impact |
| Max Strikes | Your base Max Strikes |
| OffHand Armor Negation | Your offhand Armor Negation |
| OffHand Attack Speed | Your offhand Attack Speed |
| OffHand Impact | Your offhand Impact |
| OffHand Max Strikes | Your offhand Max Strikes |
| Stamina Regen | Your base Stamina Regeneration |
| Staminar | Your base max Stamina |
| Stun Amor | Your base max Stun Armor |
| Weight | Your base Weight |

</center>
***

## Configurations - 

===	"<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/5d4d474b-a098-4e44-b330-2a7d90d3c935" width="320" height="40">"
	How many ticks it'll take for it to be recognized as a long press.
	* (Used for special attacks)
	* (Used for special mining in combat configuration)
	
=== "<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/ac64142a-2618-4cfc-8490-d7ee8970aa99" width="320" height="40">"
	Enables/Disables the animated model when players are not in combat mode.
	
=== "<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/e1acc5f0-5dd3-45ca-b069-5c7b8ed35124" width="320" height="40">"
	* None - Disables Epic Fight's Health Bar
	* Hurt - Only enables Epic Fight's Health Bar when an entity is dealt damage
	* Target - Only displays Epic Fight's Health Bar when player is looking at a targeted entity (Red Arrow on top of an entity)
	
=== "<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/37bcf237-9a0a-44d7-8782-57000239c9b4" width="320" height="40">"
	Determines whether the target indicator is displayed [On/Off]
	
=== "<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/0b9603ce-ef71-4b82-920f-44bb5dcee0c4" width="320" height="40">"
	Automatically switches camera person, when switching between mining/combat mode.

=== "<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/9f84c284-326a-4522-bb4b-3d543632d21d" width="320" height="40">"
	Enables/Disables the aim tracer wehn charging an projectile (i.e a Bow or Crossbow)

=== "<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/11383984-2dcb-4c22-a107-64bceecc10ab" width="320" height="40">"
	Automatically enters combat mode when you are hit by a hostile entity.
	
=== "<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/303b39f5-9bd8-4061-b450-a6386f7b738d" width="320" height="40">"
	Enables Blood, when OFF turns all blood particles Yellow for sensitive presenvation to some.
	
=== "<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/7080bc81-8c68-4694-bff8-1a0075d3c177" width="320" height="40">"
	Configuration Screen for items that when held will either make you go to Combat or Mining mode.

===	"<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/629a7ff5-ab26-4122-8020-7883a2ff470f" width="320" height="40">"
	Debug option for TexturePack and Mod developers to export their armor model data in a pre-made Texturepack.
	
===	"<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/b9ab178e-180a-4390-b8a8-c341402f430f" width="320" height="40">"
	Configuration Window for changing the screen coordinates of each UI element added by Epic Fight.
	
=== "<img src="https://github.com/MetalKnight56/RafTale/assets/77132244/b54900c5-212b-44e2-a8bb-d0a488b74542" width="320" height="40">"
	Enables/Disables mining blocks while in combat mode, the long press counter can be tweaked on the Long Press Counter option.
	
