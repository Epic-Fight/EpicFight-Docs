---
icon: kubejs
hide:
  - announcement
---
# Getting Started with Kubejs
Epic Fight mod provides a custom registry that allows registering new combat skills directly from KubeJS scripts. This integration lets you define new skills with unique types, icons, categories, and behavior using JavaScript. All skill definitions must be created in <span style="color:var(--colg);"><code>startup_scripts/</code></span>.

!!! note
	
	It's recommended that you use [Visual Studio Code](https://code.visualstudio.com/), which offers native JavaScript support. You may also like [ProbeJS](https://github.com/Prunoideae/ProbeJS), which serves as an essential extension when coding with Kubejs, providing code completion & documentation for methods, functions, and event handlers.

***
## Startup Registry Event

The Epic Fight skill registry is handled through the KubeJS startup registry event. Register a handler for the registry key `'epicfight:skill'` using ``StartupEvents.registry``.  

Example:
```js
StartupEvents.registry('epicfight:skill', event => {
    // create and configure skills here
})
```

***
### Skill Creation

Inside the event handler call ``event.create(id, type)``.

* id: string — unique skill id (resource location style: namespace:id is recommended)
* type: string — one of: ``'basic'``, ``'passive'``, ``'chargeable'``

Example:
```js
StartupEvents.registry('epicfight:skill', event => {
	event.create('fortification', 'passive')
	// properties will be added here later on
})
```

***
### Skill Properties
After creating the skill you chain builder methods to configure it. The following fields are present and are the minimal ones you should set:

* .tab(resource_location)
The creative tab where the skill is shown. Use a resource location. (Example: ``'epicfight:items'`` or ``'kubejs:kubejs'``)

* .category(string)
Sets the skill’s category. A ``SkillCategory`` value. The code expects a string that maps to the SkillCategory enum (case-insensitive). (Example: ``'combo attack'``, ``'air slash'``, ``'passive'``, ``'dodge'``, ``'guard'``, ``'mover'``, ``'weapon innate'``, and ``'identity'``)

Convert the string to the enum on the Java side or rely on the registry to do it.

* .resource(string)
Sets which resource type the skill consumes, from ``Skill.Resource``. The ResourceCategory enum value as string (Example: ``'stamina'``, ``'weapon charge'``, ``'cooldown'``, ``'health'``)

* .texture(resource_location)
Resource location for the skill icon texture. (Example: 'minecraft:textures/block/stone.png' as a placeholder)


Example:
```js
StartupEvents.registry('epicfight:skill', event => {
	event.create('fortification', 'passive')
		.tab('epicfight:items')
		.category('passive')
		.resource('stamina')
		.texture('minecraft:textures/block/stone.png')
})
```

***
## Builder Methods

All methods are chainable and return the builder itself unless otherwise noted. Here's a list of the available Builder methods:

| **Method**                                  | **Description**                                                                                                                                                                                      |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.formattedDisplayName()`                   | Overrides the language file and forces the display name to use the value provided by `.displayName()`. Use when you want the name to stay fixed even if lang files contain entries for the same key. |
| `.displayName(name)`                        | Sets the display name for the skill (Component). This will be overridden by language files if one exists for the same key.                                                                           |
| `.translationKey(key)`                      | Sets a custom translation key for the skill.                                                                                                                                                         |
| `.activateType(type)`                       | Defines how the skill is activated (e.g. `held`, `toggle`, `duration`).                                                                                                                              |
| `.maxDuration(ticks)`                       | Sets the maximum active duration of the skill.                                                                                                                                                       |
| `.maxStackSize(amount)`                     | Sets how many of this skill can stack.                                                                                                                                                               |
| `.shouldDeactivateAutomatically(predicate)` | Sets a predicate that determines if the skill should auto-deactivate when a condition is met.                                                                                                        |
| `.cooldownRegenPerSecond(function)`         | Defines a function that returns the cooldown regeneration rate per second based on the player (`PlayerPatch`). Used to dynamically control cooldown recovery.                                        |
| `.setConsumption(biconsumer)`               | Sets a consumer called when resource consumption is calculated. Use to change how much stamina is spent.                                                                                             |
| `.executeOnServer(biconsumer)`              | Called when the skill executes on the server. The second parameter is a `FriendlyByteBuf` buffer for client-server sync. Place your core skill logic here.                                           |
| `.executeOnClient(biconsumer)`              | Called when the skill executes on the client side. Use for visual or movement effects that must match the server logic.                                                                              |
| `.cancelOnServer(biconsumer)`               | Called when the skill is cancelled on the server.                                                                                                                                                    |
| `.cancelOnClient(biconsumer)`               | Called when the skill is cancelled on the client.                                                                                                                                                    |
| `.updateContainer(consumer)`                | Called every tick while the skill remains active. Useful for time-based effects or draining resources per tick.                                                                                      |
| `.onInitiate(consumer)`                     | Called when the skill is first learned or applied to the player.                                                                                                                                     |
| `.onRemoved(consumer)`                      | Called when the skill is removed from the player.                                                                                                                                                    |
| `.onScreen(consumer)`                       | Called when the skill is displayed on the HUD or skill book screen.                                                                                                                                  |
| `.drawOnGui(consumer)`                      | Custom rendering hook for the GUI skill icon.                                                                                                                                                        |
| `.getTooltipOnItem(function)`               | Allows customizing the tooltip shown on items that have this skill as an innate ability.                                                                                                             |
| `.getTooltipArgsOfScreen(function)`         | Sets parameters for the description text on the skill book GUI.                                                                                                                                      |
| `.canExecute(predicate)`                    | Checks whether the skill can execute. Return false to block activation.                                                                                                                              |
| `.executableState(predicate)`               | Predicate to check if the skill is currently in a valid executable state.                                                                                                                            |
| `.shouldDraw(predicate)`                    | Predicate that decides whether the skill should appear in the GUI HUD.                                                                                                                               |
| `.onRemoved(consumer)`                      | Called when the skill is removed from the player’s active skills.                                                                                                                                    |
| `.maxDuration(number)`                      | Defines the skill’s maximum duration in ticks.                                                                                                                                                       |
| `.maxStackSize(number)`                     | Sets how many stacks of the skill can exist at once.                                                                                                                                                 |

***

<span style="font-size: 33px;">:material-account-hard-hat-outline: This page is still being worked on, help us contributing to it on our [discord] :material-account-hard-hat-outline:</span>

***
