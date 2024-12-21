---
icon: hippo-solid
hide:
  - announcement
---

# Mob Capabilities Editor

<div class="grid cards" markdown>

-	<center>__Mob Capabilities Editor Tutorial__</center>
	
	---
	
	<center><iframe width="860" height="483.75" src="https://www.youtube.com/embed/iXsATy1xNNw?si=QLiDeTJPwev4QEpB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class=img-rounded></iframe></center>

</div>

---

## :fontawesome-solid-pencil: Getting started 

Start by launching your game with Epic Fight installed. From the main menu, click on the 'Mods' button and search for 'Epic Fight.' Once you find it, select it and click on 'Config.' This will open the editor window, allowing you to make your desired changes.

Select your entity:

<div class="showcasemobeditor">
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/MobEditor-blank.png?raw=true" class="img-rounded white-border">
	<div class="glow-box" title="Click here in-game to chose the entity to be patched !"></div>
</div>

There are two ways to patch an entity. The simpler option is to select from a list of presets, featuring entities that Epic Fight has already redesigned from the vanilla game. Alternatively, you can take a more detailed approach, fully customizing the entity to suit your vision.

***
## :fontawesome-solid-lightbulb: Easy Setup

Similar to the [Custom Entities Datapack's Easy Setup], the mob capability options provide a variety of presets for players to choose from. To view the available presets, click on the drop-down menu to the right of the 'Presets' option.

<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/editor-presets.png?raw=true" class="img-rounded white-border">  

You can also disable already patched entities provided by Epic Fight. For example, you may choose to disable certain vanilla entities, such as the Zombie, Skeleton, or Enderman.

<div class="showcasemobeditor">
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/MobEditor-Disabled.png?raw=true" class="img-rounded white-border"> 
	<div class="glow-box2" title="Click here in-game to disable the entity's animation"></div>
</div>

[Custom Entities Datapack's Easy Setup]: ../../Entities/page1/#easy-setup-

***
## :fontawesome-solid-gear: Detailed Setup

### :fontawesome-solid-wrench: Setting up the basics

<div class="content-container2" style="--flex-direction: column;">
	<div class="text-section2" style="--text-max-width: 100%;">

To create a custom entity, it's essential to understand the three foundational components that bring it to life: the <strong>Model</strong>, the <strong>Armature</strong>, and the <strong>Renderer</strong>. 

<ol>
	<li>
 		<div class="hover-text" data-top="67.5%" data-left="17.8%" data-width="79%" data-height="6.5%" style="display: block;"><strong>Model</strong>: This serves as the blueprint for the entity's geometry, defining its physical structure and appearance. Think of it as the body of the mob & how it looks in terms of shape, size, and design.</div>
	</li>
	<li>
		<div class="hover-text" data-top="76%" data-left="17.8%" data-width="79%" data-height="6.5%" style="display: block;"><strong>Armature</strong>: Often referred to as the skeleton of the entity, the armature is responsible for enabling movement and animations. It acts as the framework that connects different parts of the model, allowing it to bend, stretch, or perform complex motions seamlessly.</div>
	</li>
	<li>
		<div class="hover-text" data-top="84.5%" data-left="17.8%" data-width="79%" data-height="6.5%" style="display: block;"><strong>Renderer</strong>: The renderer determines how the entity is displayed within the game environment. It handles textures, colors, lighting, and other visual elements, ensuring the entity appears and behaves cohesively with the game's aesthetic.</div>
	</li>
</ol>
</div><div class="image-section2">
	<div class="glow-box3"></div>
	<div class="grow-effect" style="--scale-size: 1.01;"><img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/armature-model-renderer.png?raw=true" class="img-rounded white-border img-rounded"></div>
</div></div>

Each pillar plays a vital role, and together, they form the complete structure of a custom entity. Mastery of these elements allows for the creation of unique and engaging entities that enhance the gameplay experience.
***
### :fontawesome-solid-lock: Unlocking Features and Functionality

When creating or customizing entities in your project, you can assign various properties to them. These properties act as customizable traits that enable unique behaviors and features for your entities, bringing you closer to achieving your desired functionality. Below, we explore some key properties and their impact on entity behavior:  

<ul>
	<li>
		The <strong>Humanoid</strong> property group defines whether an entity can utilize tools or other held items. Enabling this property adds a new layer of interactivity by:
			<ul>
				<li>Allowing the entity to use tools and weapons, such as swords, pickaxes, or bows.</li> 
				<li>Changing the entity's attack and living animations based on the item it is holding. For example, a humanoid entity with a sword will use a different attack animation compared to one holding nothing or a bow.</li>
			</ul>
	</li>
	<li>
		The <strong>Factions</strong> property determines the alliances and relationships between entities in the world. It sets up dynamic interactions, as described below:  
			<ul>
				<li>Entities belonging to the <strong>same faction</strong> will not attack or harm each other by default.</li> 
				<li>Factions act as a group identifier for mobs, enabling cooperative behavior among allied entities.</li> 
				<li>However, faction members can still attack each other if explicitly directed by their AI or other in-game events (e.g., provocation or player intervention).</li>
			</ul>
	</li>
</ul>

<div class="admonition warning">
			<p class="admonition-title">Warning</p>
			<p>Applying the "Humanoid" property to non-bipedal entities may lead to animation or behavior inconsistencies, so it’s recommended to use it primarily for entities with a humanoid form.</p>
</div>

#### :fontawesome-solid-volume-low: Sounds and Particles

To further enhance your entities, you can customize their behavior with specific sound and particle effects. These options allow for more immersive and dynamic interactions, tailoring your mobs to fit your gameplay environment. Below are the additional customization options explained in detail:

<ul>
	<li>
		The <strong>Swing Sound</strong> is the audio effect played when the entity performs an attack. This sound adds an auditory cue to the entity's actions, making combat interactions more engaging.
			<ul style="list-style-type: square;">
				<li>For humanoid entities, the swing sound associated with the type of weapon they are holding takes precedence over the entity’s default swing sound.</li> 
			</ul>
	</li>
	<li>
		The <strong>Hit Sound</strong> is the sound effect that plays when the entity successfully damages another entity. It provides feedback for successful attacks and enhances the sensory experience during combat.  
			<ul style="list-style-type: square;>
				<li>Similar to swing sounds, humanoid mobs prioritize the hit sound associated with their weapon type over their default hit sound.</li> 
			</ul>
	</li>
	<li>
		The <strong>Hit Particles</strong> are visual effects generated in the game world when the entity successfully lands a hit on another entity. These particles make combat more visually appealing and help signal impact points in the heat of battle. 
			<ul style="list-style-type: square;>
				<li>Particles can be tailored to match the entity’s theme or attack style. For example, a fiery mob could produce flame particles, while a magical entity might create sparkles or glowing dust.</li> 
			</ul>
	</li>
</ul>

***
### :fontawesome-solid-tag: Defining Mob Attributes

Attributes define the core capabilities of your mobs, influencing their combat effectiveness, movement, and physical characteristics. Here's a breakdown of key attributes and their effects:

<table>
<thead>
<tr>
<th><h2><center>Attribute</center></h2></th>
<th><h2><center>Info</center></h2></th>
</tr>
</thead>
<tbody>
<tr>
<td>Impact</td>
<td>Increases the <strong>stun duration</strong> applied to enemies when the mob successfully lands an attack. Ideal for mobs designed to interrupt or incapacitate opponents, giving them a tactical edge in combat scenarios.</td>
</tr>
<tr>
<td>Armor Negation</td>
<td>Enhances the mob's ability to deal damage to heavily armored entities by reducing the effectiveness of their defense points. Great to counter tanks or heavily fortified foes, ensuring they remain a threat regardless of enemy armor.</td>
</tr>
<tr>
<td>Max Strikes</td>
<td>Determines the <strong>maximum number of entities</strong> that can be struck in a single attack or swing. A mob with a high Max Strikes value can hit multiple targets at once, making it effective in crowd-control scenarios.</td>
</tr>
<tr>
<td>Chasing Speed</td>
<td>Increases the mob's movement speed while actively pursuing a target. Enables fast-paced or predatory mobs to chase down their prey effectively.</td>
</tr>
<tr>
<td>Scale</td>
<td>Adjusts the size of the mob, affecting both its visual model and physical armature (hitbox, animations, etc). Use for mobs that share a model but need a size distinction, such as making a Giant Zombie from a regular zombie model. </td>
</tr>
<tr>
<td>Stun Armor</td>
<td>Reduces the mob's susceptibility to stuns, making it more resilient in battle. Ideal for boss mobs or heavily armored creatures, ensuring they remain active and dangerous even against stun-heavy opponents.</td>
</tr>
</tbody>
</table>

***
### :fontawesome-solid-play: Animating Your Mob’s Lifecycle

Living animations bring life to your mobs by defining how they move, react, and behave throughout their lifecycle. These animations are tied to specific states and events, allowing mobs to respond dynamically to various situations

Entities typically have three main states during their lifecycle:

<div class="content-container2">
	<div class="text-section2" style="--text-max-width: 65%;">

<ul>
	<li>
		Idle
		<ul>
			<li><div class="hover-text no-glowbox" data-image-id="image1" style="display: block;">Represents the mob when it's stationary and not interacting with its surroundings.</div></li> 
		</ul>
	</li>
	<li>
		Walk
		<ul>
			<li><div class="hover-text no-glowbox" data-image-id="image2" style="display: block;">Represents normal movement when the mob is wandering or navigating the environment without a target.</div></li> 
		</ul>
	</li>
	<li>
		Chase
		<ul>
			<li><div class="hover-text no-glowbox" data-image-id="image3" style="display: block;">Represents the mob when pursuing a target aggressively.</div></li> 
		</ul>
	</li>
</ul>

</div><div class="image-section2">
	<div class="image-wrapper" data-image-id="image1" style="display: block;">
		<div class="grow-effect" style="--scale-size: 1.01;"><img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/Idle.gif?raw=true" class="img-rounded white-border img-rounded" style="--image-width: 400px;"></div>
	</div>
	<div class="image-wrapper" data-image-id="image2">
		<div class="grow-effect" style="--scale-size: 1.01;"><img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/Walk.gif?raw=true" class="img-rounded white-border img-rounded" style="--image-width: 400px;"></div>
	</div>
	<div class="image-wrapper" data-image-id="image3">
		<div class="grow-effect" style="--scale-size: 1.01;"><img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/Chase.gif?raw=true" class="img-rounded white-border img-rounded" style="--image-width: 400px;"></div>
	</div>
</div></div>

<br><br><br>

You may also define stun animations, these bring a realistic and dynamic response to your mobs when they are temporarily incapacitated by external effects. These animations are tied to specific stun types and are crucial for ensuring the mob reacts appropriately during gameplay.

**Each stun type can have its own unique animation, such as:**

<div markdown style="display: flex; align-items: flex-start;">
<div markdown style="flex: 1; margin-right: 20px; max-width:50%;">
<ul>
<li>Quickly freezing in place when stunned by any any damage (Short).</li>
<li>A mob staggering backward when hit by a heavy attack (long).</li>
<li>Collapsing briefly when knocked down (Knockdown).</li>
<li>Landing after receiving fall damage (Fall).</li>
</ul>

</div><div style="flex: 1; max-width:50%;">
<div class="admonition warning">
			<p class="admonition-title">Warning</p>
			<p>If no animation is bound for a specific stun type, the mob will be immune to that stun. This behavior allows you to control which stuns affect your mob, creating opportunities for specialized resistances or vulnerabilities.</p>
</div>
</div></div>

***
### :fontawesome-solid-skull: Combat Behavior

Once you've set up your entity's basic properties and animations, it's time to focus on its combat behavior, which determines how the entity fights, attacks, and selects its moves in various scenarios. In Epic Fight, combat behavior is driven by AI system that utilizes moveset layers and conditions to create dynamic encounters.

#### :fontawesome-solid-layer-group: Understanding Combat AI and Moveset Layers

Combat AI uses **layers of movesets**, where each moveset consists of a set of attack animations & specific conditions for when those animations should be used.
<br><br>
Each moveset has a weight value, which determines its likelihood of being selected by the AI. Adjusting the weights allows you to bias the AI toward specific attack styles or prioritize certain moves.
<br><br>
Before selecting a moveset, the AI checks the first condition of each moveset. Movesets that fail this condition are excluded from being candidates.
!!! example
	A "jump attack" moveset might require the target to be within a specific distance or the mob to be airborne.
	
<br>
Once a moveset is selected:  

1. **Marking Behaviors**  
   - The AI marks the **first behavior** in the moveset. This serves as the starting point for the entity’s attack.  
   - It then attempts to **proceed to the next behavior** in the sequence, provided the next behavior’s conditions are met.  

2. **Interceptable Movesets**  
   - If the current moveset is **interceptable**, the AI can evaluate other potential movesets during the sequence.  
   - This creates opportunities for the AI to adapt dynamically during combat.  

3. **Resetting on Failure**  
   - If the AI fails to meet the conditions for the next behavior in the sequence, it resets to the first behavior unless the current moveset is set to loop.  
   - **Looping Movesets:** These repeat their behaviors until a condition is met or interrupted.

<br>
**Combat Cycle:**

- The AI continuously repeats this process if the mob has a valid target.

---