---
icon: material/pipe-wrench
hide:
  - announcement
---
# 3D Armor Fix [Blender 2.79]

In Epic Fight, many custom armors are dysfunctional due to the game's unique model system, which differs from both standard entities and armor. However, the mod provides a model generation algorithm based on custom armors, though it occasionally alters them unfavorably. 
  
!!! question ""
	This guide extensively utilizes [Blender], so refer to [Blender Basics and Tips and Tricks] for comprehensive insights on using [Blender] effectively, including tips, tricks, and troubleshooting.
  
	To replicate in-game armor models accurately, check [Remaking armor models in Blockbench] if your models aren't ready for [Blender] patching.

	[Blender Basics and Tips and Tricks]: ../../Guides/page3
	[Remaking armor models in Blockbench]: ../../Armor/3Darmor_page3

For mod pack creators and developers aiming for visually flawless custom armor without altering the source code, this step-by-step process facilitates the creation of properly patched armor compatible with Epic Fight:

***
Required tools:<br>     

* **[Blender 2.79](https://download.blender.org/release/Blender2.79/)**<br>  
- **[Json Exporter for Blender 2.79](https://github.com/Yesssssman/blender-json-exporter)**<br>   
- **[Blender Armor Files](https://github.com/MetalKnight56/EpicFight-Files/raw/Blender-Armor/Blender%20armor%20files.zip)**<br>     

***
## :fontawesome-solid-lightbulb: Weight Paint and Vertex Correction

1. First, open blender, go to file :material-arrow-right: import :material-arrow-right: Wavefront (``.obj``), and import your armor file you've just created in blockbench.
<div markdown="1" style="display: flex; flex-wrap: wrap; gap: 15px; align-items: flex-start;">
<div markdown="1" style="flex: 1 1 450px; max-width: 100%;">
2. After this, select one armor part to patch. We will patch the head layer first. So we'll select every cube and part that composes the helmet for the archer's armor. 
	For us, the "head" and "headback.001" are the parts that make up for the helmet so we'll select both and press <kbd>Ctrl</kbd> + <kbd>J</kbd> to join all of the parts into one single model. 
	</div>
<div markdown="1" style="flex: 1 1 70px; max-width: 100%;">
!!!	info
	Before joining the different parts of the model, ensure that [Blender] is set to [Object Mode].
</div></div>


<div markdown="1" style="margin-left: 1.5em;">**Select:**</div>
<img src="/assets/images/select_img.png" class="white-border" style="margin-left: 1.5em;"><br><br>  
<div markdown="1" style="margin-left: 1.5em;">**Join:** _(Feel free to rename the new joined model the armor part it corresponds to, in our case i later renamed it "Helmet")_.</div>  
<img src="/assets/images/join_img.png" class="white-border" style="width: 1024px;height: 352px; margin-left: 1.5em;">  

<blockquote>In these screenshots all the other armor parts are hidden.</blockquote>


3. In object mode, correct the import rotation, and postion by clicking <kbd>Alt</kbd> + <kbd>R</kbd> & <kbd>Alt</kbd> + <kbd>G</kbd>.<br>
	On edit mode, rotate the model and correct its position to the original location before you reset the rot/pos on object mode.

<div markdown="1" style="display: flex; flex-wrap: wrap; gap: 15px; align-items: flex-start;">
<div markdown="1" style="flex: 1 1 400px; max-width: 100%;">
4. Now after fixing the import rotation, we'll parent the model to the armature by going to object mode, 
	selecting the helmet model and also the armature, going over to:<br>
	
	Object :material-arrow-right: Parent :material-arrow-right: Armature Deform :material-arrow-right: With Empty Groups :material-arrow-right: With Empty Groups.
	</div>
<div markdown="1" style="flex: 1 1 75px; max-width: 100%;">
!!!	tip 
	<center>You can select two things by pressing <kbd>Shift</kbd> while right clicking them. Make sure both are selected in object mode and not pose or edit mode</center>
</div></div>
<img src="/assets/images/parent_empty_groups.png" class="white-border" style="margin-left: 1.5em;">


5. By selecting the helmet model, and switching from object mode to weight paint, 
we'll finally apply the vertex group deformations so the helmet follows the head while our player plays any animation.

	<img src="/assets/images/weight_paint.png" class="white-border">

6. Before applying weight paint, ensure that the model’s vertices are visible by enabling Wireframe mode, as shown in the image below.
	This makes it easier to see how the weights are distributed across the mesh and helps you paint more accurately.

	<img src="/assets/images/vertices-wireframe.png" class="white-border">

7. You now have access to multiple weight painting brushes, but for this workflow, you will mainly be using the Add and Subtract brushes.

	<div markdown="1" style="display: flex; flex-wrap: wrap; gap: 15px; align-items: flex-start;">
	<div markdown="1" style="flex: 1 1 400px; max-width: 100%;">
	<center><img src="/assets/images/brush.png" class="white-border"></center>
	</div><div markdown="1" style="flex: 1 1 400px; max-width: 100%;">
	!!! info
		The Add brush increases a vertex’s influence by assigning more weight to the currently selected bone,
		causing the affected area of the mesh to move along with that bone during animation.<br><br>
		
		The Subtract brush does the opposite: it lowers or removes the bone’s influence from selected vertices, 
		helping eliminate stretching, clipping, or deformation in parts of the mesh that should remain rigid or be controlled by another bone.
	</div></div>

8. Select the desired vertex group on the right, the one we'll be working with is the head group as we are patching a helmet.

	<img src="/assets/images/vertex-group.png" class="white-border">

9. Now continue weight painting the entire model so that all relevant vertices are influenced by the head bone. As you paint, 
	make sure that every part of the mesh that should move with the head is fully covered. By the end of this process, 
	your model should appear uniformly red when the correct bone is selected, indicating that all vertices have a weight value of 
	`1.0` and are fully influenced by the head bone.

	<div markdown="1" style="display: flex; flex-wrap: wrap; gap: 15px; align-items: flex-start;">
	<div markdown="1" style="flex: 1 1 400px; max-width: 100%;">
	<img src="/assets/images/paint_whole.png" class="white-border">
	</div><div markdown="1" style="flex: 1 1 400px; max-width: 100%;">
	
	!!! tip
		When the mesh is fully painted, the entire model should move together with the head during animation.
		This confirms that the weight painting has been applied correctly and that no sections of the mesh are being left unassigned.<br><br>
		
		If you notice that certain parts of the model lag behind, remain stationary, or deform incorrectly when the head moves, 
		this indicates that some vertices are missing weight paint.<br><br>
		
		In such cases, switch back to Weight Paint mode, identify the uncolored or partially colored areas, 
		and use the Add brush to apply the missing weights until those sections respond properly to the bone’s movement.<br><br>
		
		Taking the time to ensure complete and consistent coverage is important, 
		as even a small group of unpainted vertices can cause visual artifacts such as floating geometry, 
		clipping, or unnatural movement during animations.
		
	</div></div>

10. You can test to see if you've successfully parented and weight painted the helmet to the head by going over to your armature in pose mode and rotating the head bone around.
	If your model follows the head bone, then its correct, if not, then please go back a few steps and recheck to see if you've missed something.
	
	<img src="/assets/gifs/gizmos.gif" class="white-border">


***
## :fontawesome-solid-lightbulb: Exporting your patched models
Now that you have successfully finished patching your models, the next step is to export your work and apply those changes in-game so you can see the results in action.
At this point, all of the structural adjustments, weight painting, and cleanup work should already be complete, meaning the models are ready to be finalized.

Although this may sound like a complex step, the process is actually quite simple once you know where the files need to go and how they are loaded by the game.
By exporting the patched models correctly and placing them in the appropriate location, you can quickly test your changes, verify that everything behaves as expected, 
and make any final tweaks if necessary.

The following steps will walk you through exporting the patched models and applying them in-game, allowing you to confirm that the armor moves correctly, appears as intended, and integrates seamlessly with the rest of the mod.

1. Make sure you don't have any armor parts or unwanted models on your project and only the desired armor part to be exported like so. 

	<div markdown="1" style="display: flex; flex-wrap: wrap; gap: 15px; align-items: flex-start;">
	<div markdown="1" style="flex: 1 1 400px; max-width: 100%;">
	<img src="/assets/images/exporting1.png" class="white-border">
	</div><div markdown="1" style="flex: 1 1 600px; max-width: 100%;">
	
	!!!	tip
		Armor parts must be exported one at a time, as exporting multiple pieces simultaneously is not supported and can result in incorrect files.
		Use the Checklist below before exporting:
		
		| :material-check: | Check                   | Description                            					|
		| - | ----------------------- | ------------------------------------------------------------|
		| :material-square-outline: | Armor part only  | Only the target armor part is present 								|
		| :material-square-outline: | No unused objects       | Remove temporary, duplicate, or unused meshes.				|
		| :material-square-outline: | Deformation      | The mesh follows the correct bone in **Pose Mode**.	|

	</div></div>

2. Once the scene is clean, navigate to File :material-arrow-right: Export :material-arrow-right: Animated Minecraft Model (.json).
	This will open the export dialog and generate the JSON file required for use in the next stage of the process, ensuring that the 
	armor part is exported correctly and in the proper format.

	<img src="/assets/images/exporting2.png" class="white-border">
	<br><br>


3. In the export settings, ensure that only the Export Mesh option is enabled.
	Since you are exporting an armor piece, there is no need to include animations or a custom armature,
	and enabling them may result in unnecessary or incorrect data in the exported file.
	
	<img src="/assets/images/exporting3.png" class="white-border">
	<br><br>


4. Make sure the export name exactly matches the custom armor’s registry name as defined in-game.
	Using mismatched names can prevent the armor from being properly detected or may cause it to reference the wrong asset.
	
	<img src="/assets/images/exporting4.png" class="white-border">
	<br><br>

5. Click Export to Json Minecraft after you are done.  

	<img src="/assets/images/exporting5.png" class="white-border">


***

{%
include-markdown 'includes/pack_mcmeta_section.md'
%}

***

{%
include-markdown 'includes/animmodels_folder_path_section.md'
%}

***
[:octicons-arrow-right-24: [Other solutions for 3D armor glitches](3Darmor_page2.en.md)](#)