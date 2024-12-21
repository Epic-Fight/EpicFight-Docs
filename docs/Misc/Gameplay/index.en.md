---
hide:
  - announcement
  - toc
---
# Gameplay
***
<center>
***Tweak combat, controls, lock-on, switching items, your UI and much more ! Epic Fight also has plenty of different commands and gamerules that also allow for further customization of your game and play style. Here, I'll walk you through all customization options + commands...***
***
</center>

## Controls - 
<div class="grid cards" markdown>

-   :material-controller-classic:{ .lg .middle } __Combat | Mining modes__
	
	---
	
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Images/controls1.gif?raw=true" width="480" height="360">
	
	> Toggle building|combat mode (default: R)
	
-   :material-sword:{ .lg .middle } __Basic Attacks__
	
	---
	
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Images/controls2.gif?raw=true" width="480" height="360">
	
	> Click on your default attack key & perform basic attacks
	
-   :material-run-fast:{ .lg .middle } __Sprint Attacks__
	
	---
	
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Images/controls3.gif?raw=true" width="480" height="360">
	
	> Running and attacking performs sprint attacks
	
-   :material-cursor-default-click:{ .lg .middle } __Charging Attacks__
	
	---
	
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Images/controls4.gif?raw=true" width="480" height="360">
	
	> Press the attack button to perform charged attacks
	
-   :fontawesome-solid-circle-up:{ .lg .middle } __Jump Attacks__
	
	---
	
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Images/controls5.gif?raw=true" width="480" height="360">
	
	> Jump and attack to perform jump attacks
	
-   :fontawesome-solid-book-open:{ .lg .middle } __Skills__
	
	---
	
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Images/controls6.gif?raw=true" width="480" height="360">
	
	> Learn more about the multitude of [Skills](skills.en.md)
</div>

***

## Commands - 

### :fontawesome-solid-gamepad: Gamerules - 

<div class="grid cards" markdown>

-   /gamerule hasFallAnimation [true/false]
    * Determines if the landing animation should play when the player takes more than a certain amount of fall damage.

-   /gamerule weightPenalty [0~100] (default 100)
    * Determines how much the player will be penalized by weight. (Attack speed and stamina consumption)

-   /gamerule doVanillaAttack [true/false] (default true)
    * Enables/Disables Vanilla attacks, if turned off, no players will be able to attack while in mining mode.

-   /gamerule keepSkills [true/false] (default false)
    * Determines if the skills the player learned will be kept after the player dies. (Simmilar to KeepInventory but for Skills)

-   /gamerule canSwitchCombat [true/false] (default true)
    * Enables/Disables the ability for players to switch between Combat - Mining modes.

-   /gamerule globalStun [true/false] (default false)
    * Applies a simple Stun to non patched entities (Entities without animations/Custom, Modded ones). (Useful when you have lots of modded entities that don't have stun animstions)

-   /gamerule noMobsInBossfight [true/false] (default true)
    * Allows you to control the spawning of endermans when ender dragon is alive. (Might affect Boss battles that disable mob spawn around them simmilarly to the Ender Dragon)

-   /gamerule stiffComboAttacks [true/false] (default true)
    * Allows you to control whether Attack Combos should lock you in place. (Great for those who feel like the animation lock is too difficult)

</div>

***
### :material-gamepad-round: EpicFight Commands

<div class="grid cards" markdown>

-   /epicfight mode [mining/batlle] [target]
    * Allows you to set the combat mode for a certain target.

-   /epicfight skill [add/clear/remove] [target]
    * Allows you to add/remove a certain skill from a certain target.
    * Allows you to wipe all the skills from a target.

</div>

***
### :fontawesome-solid-list-ul: EpicFight Attributes

<b>/attribute [target] epicfight:[attribute]</b>

* While the /attribute command isn't necessarily an epic fight command, epic fight adds a bunch of new attributes for you to use and tweak as you like...

List of attributes below:

<center>

| Attributes | Info |
| ------------- | ------------- |
| Armor Negation | Your base Armor Negation |
| Execution Resistance | Your base Resistance to Executions |
| Impact | Your base Impact |
| Max Strikes | Your base Max Strikes |
| Stamina Regen | Your base Stamina Regeneration |
| Staminar | Your base max Stamina |
| Stun Amor | Your base max Stun Armor |
| Weight | Your base Weight |

</center>
***

## Configurations - 

===	"<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/long-press.png?raw=true" width="320" height="40">"
	How many ticks it'll take for it to be recognized as a long press.
	* (Used for special attacks)
	* (Used for special mining in combat configuration)
	
=== "<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/filter-animations.png?raw=true" width="320" height="40">"
	Enables/Disables the animated model when players are not in combat mode.
	
=== "<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/health-bar-show-option.png?raw=true" width="320" height="40">"
	* None - Disables Epic Fight's Health Bar
	* Hurt - Only enables Epic Fight's Health Bar when an entity is dealt damage
	* Target - Only displays Epic Fight's Health Bar when player is looking at a targeted entity (Red Arrow on top of an entity)
	
=== "<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/show-target-indicator.png?raw=true" width="320" height="40">"
	Determines whether the target indicator is displayed [On/Off]
	
=== "<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/camera-auto-switch.png?raw=true" width="320" height="40">"
	Automatically switches camera person, when switching between mining/combat mode.

=== "<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/show-aim-helper.png?raw=true" width="320" height="40">"
	Enables/Disables the aim tracer when charging a projectile (i.e a Bow or Crossbow)

=== "<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/auto-preparation.png?raw=true" width="320" height="40">"
	Automatically enters combat mode when you are hit by a hostile entity.
	
=== "<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/blood-effects.png?raw=true" width="320" height="40">"
	Enables Blood, when OFF turns all blood particles Yellow for sensitive presenvation to some.
	
=== "<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/auto-switching-items.png?raw=true" width="320" height="40">"
	Configuration Screen for items that when held will either make you go to Combat or Mining mode.

===	"<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/export-armor-models.png?raw=true" width="320" height="40">"
	Debug option for TexturePack and Mod developers to export their armor model data in a pre-made Texturepack.
	
===	"<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/ingame-ui-setup.png?raw=true" width="320" height="40">"
	Configuration Window for changing the screen coordinates of each UI element added by Epic Fight.
	
=== "<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Config-Buttons/no-mining-in-combat.png?raw=true" width="320" height="40">"
	Enables/Disables mining blocks while in combat mode, the long press counter can be tweaked on the Long Press Counter option.
