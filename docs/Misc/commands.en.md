---
icon: touch_app
---
# Commands & Configurations
***
<center>
***Tweak combat, controls, lock-on, switching items, your UI and much more ! Epic Fight also has plenty of different commands and gamerules that also allow for further customization of your game and playe style. Here, I'll walk you through all customization options + commands...***
***
</center>

## Commands - 
***
### 🎮 Gamerules - 

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
### 🕹 EpicFight Commands

#### /epicfight mode [mining/batlle] [target]

* Allows you to set the combat mode for a certain target.

#### /epicfight skill [add/clear/remove] [target]

* Allows you to add/remove a certain skill from a certain target.
* Allows you to wipe all the skills from a target.

***
### 👤 EpicFight Attributes

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