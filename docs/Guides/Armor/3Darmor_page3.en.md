---
icon: simple/blockbench
hide:
  - announcement
---

# Blockbench Armor Model Remake
**No need to recreate armor in Blockbench if you already possess the armor files for the mod you aim to fix.**

!!! danger ""
	<b>This guide is only meant for those who want to patch armors from other mods, and don't necessarily have the armor models for it. If you are a mod developer and you already have all the armor files in blockbench, you can just export them as OBJs and follow the tutorial on blender.</b>

Required tool:<br> 

* **[BlockBench](https://www.blockbench.net/) (Optional)**<br> 

After downloading and installing all three softwares, the first thing you'll want to do is, pick a mod that has an armor set you want to patch, and from there try to recreate the model as accurately as possible. One efficient way you can do this, is usually by looking at the armor in-game and getting the textures from the source code of your desired mod.

 **EXAMPLE:**
 
<center>
<img src="/assets/images/example_armor_texture.png" width="480" height="320" style="image-rendering: pixelated;">
</center>

Above is the texture file for the archers_armor of the [Dungeon Gear Mod]. Lets take a look how we can re-create this armor by looking at the texture within Blockbench<br>   

***
## Inside of Blockbench

1. Create a Generic Model so we can export it to blender later on. Preferably name the model something you can recognize, for example, <b>Archer's Armor</b>.

	<div markdown="1" style="display: flex; flex-wrap: wrap; gap: 15px; align-items: flex-start;">
	<div markdown="1" style="flex: 1 1 500px; max-width: 100%;">
	<img src="/assets/images/create_model_screen1.png" class="white-border">
	</div>

	<div markdown="1" style="flex: 1 1 100px; max-width: 100%;">

	!!! tip
		Ensure that you have the CEM Template Loader plugin properly installed in order to seamlessly import the vanilla models.<br><br>
		
		You can download plugins under the ``File/Plugins`` option.

	</div>
	</div>

<br>

2. From there, you'll want to import all vanilla armor models. You can import the vanilla armor models under:<br> Tools :material-arrow-right: Load CEM Template :material-arrow-right: Unsupported Entities

	<img src="/assets/images/create_model_screen2.png" class="white-border">
<br>

<div markdown="1" style="display: flex; flex-wrap: wrap; gap: 15px; align-items: flex-start;">
<div markdown="1" style="flex: 1 1 500px; max-width: 100%;">
3. Import the texture files into Blockbench, then update the project’s texture resolution so it exactly matches the dimensions of the imported texture. 
	This ensures that every pixel lines up correctly on the model and prevents stretching, misalignment, or incorrect UV mapping while you work on the armor. 
	</div>

<div markdown="1" style="flex: 1 1 100px; max-width: 100%;">
!!!	tip 
	You can apply the textures on the model by dragging and dropping it on each armor part group
</div>
</div>
<img src="/assets/images/selected_head_cube.png" style="margin-left: 1.5em;"><br><br>

 
4. Now, let's fix the textures until they are in the correct order and look like the original model.After organizing the textures, 
	press <kbd>Ctrl</kbd> + <kbd>A</kbd>, and make sure all textures are being used. 
	If you miss any textures, that means you model needs more adjustments and so you'll need to add in extra pieces to the armor.<br><br> 
	
	
	<div markdown="1" style="display: flex; flex-wrap: wrap; gap: 15px; align-items: flex-start;">
	<div markdown="1" style="flex: 1 1 500px; max-width: 100%;">
	<img src="/assets/images/unused_texture_part.png" class="white-border">
	</div>
	<div markdown="1" style="flex: 1 1 200px; max-width: 100%;">
	!!! note
		In our case, the Archer's Armor has an extra part to its hat so we'll need to add in a cube and try to guess its rotation, 
		scale and position based on the in-game armor added by Dungeon's gear and the texture size.
	</div>
	</div>


<div markdown="1" style="display: flex; flex-wrap: wrap; gap: 15px; align-items: flex-start;">
<div markdown="1" style="flex: 1 1 500px; max-width: 100%;">
5. After making several adjustments, the model now closely matches the original armor’s appearance.
	With the shapes, proportions, and textures properly aligned, the model is complete and ready to be exported to [Blender], 
	here we will begin patching and refining each individual armor component.
	
	</div>
<div markdown="1" style="flex: 1 1 100px; max-width: 100%;">
!!! note
	Now when exporting you armor file, be sure to export it as a .obj, because that's what we'll be using inside blender.
</div>
</div>
<img src="/assets/images/adjusted_model.png" class="white-border" style="margin-left: 1.25em;">
***