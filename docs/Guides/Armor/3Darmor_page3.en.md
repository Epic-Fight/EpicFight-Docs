---
icon: blockbench
hide:
  - announcement
  - toc
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
<img src="https://user-images.githubusercontent.com/77132244/215155978-874a293e-71ea-4690-adf3-059e45a37ed8.png" width="480" height="320">
</center>

Above is the texture file for the archers_armor of the Dungeon Gear Mod. Lets take a look how we can re-create this armor by looking at the texture within Blockbench<br>   

***
## Inside of Blockbench

<ol start="1">
<li>
Create a Generic Model so we can export it to blender later on. Preferably name the model something you can recognize, for example, <b>Archer's Armor</b>.
<center>
<img src="https://user-images.githubusercontent.com/77132244/215159597-aac5fdb1-45f1-4084-8f18-50baae9df6f0.jpg" class="white-border">
</center>
</li>


<li>
Ensure that you have the CEM Template Loader plugin properly installed in order to seamlessly import the vanilla models.
</li>
</ol>

!!! tip
	<center>You can download plugins under ``File/Plugins`` option</center>

<br>

<ol start="3">
<li>
From there, you'll want to import all vanilla armor models.  
<br>
</li>
</ol>

> You can import the vanilla armor models under Tools/Load CEM Template/Unsupported Entities

<center>
<img src="https://user-images.githubusercontent.com/77132244/215161290-8ecb58ec-55e3-4297-8f46-48551a0769d7.jpg" class="white-border">
</center>


<ol start="4">
<li>
Import the textures, and change the texture size on the project to the same one as the texture. 
</li>
</ol>

!!!	tip 
	<center>You can apply the textures on the model by dragging and dropping it on each armor part group</center>

<center>
<img src="https://user-images.githubusercontent.com/77132244/215230534-6eb84ed6-1afb-4a44-bdf2-3ef98bfccdc6.jpg">
</center>

<ol start="5">
<li>
Now, fix the textures until they are in the correct order and look like the original model.<br>   
</li>

<li>
After organizing the textures, press <kbd>Ctrl</kbd> + <kbd>A</kbd>, and make sure all textures are being used. If you miss any textures, that means you model needs more adjustments and so you'll need to add in extra pieces to the armor.  
<br>  
<br>  
In our case, the Archer's Armor has an extra part to its hat so we'll need to add in a cube and try to guess its rotation, scale and position based on the in-game armor added by Dungeon's gear and the texture size.
<center>
<img src="https://user-images.githubusercontent.com/77132244/215236925-8fcf459a-e972-4f2d-b43d-65667ce39e1e.jpg" class="white-border">
</center>
</li>

<li>
As you can see, after a few changes, we got our model to look like the original one, and now we are ready to move on to blender and to patching each individual part.
<center>
<img src="https://user-images.githubusercontent.com/77132244/215238157-3ddd8369-6f04-48f5-8d95-0623d833b3be.png" class="white-border">
</center>
</li>

<li>
Now when exporting you armor file, be sure to export it as a .obj, because that's what we'll be using inside blender.
</li>
</ol>
***