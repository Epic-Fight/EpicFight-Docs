---
icon: blender
hide:
  - announcement
---
# Starting with Blender 2.79

Epic fight uses custom animations for multiple actions in game, from drinking, eating to even attack combos. These animations are handled by Blender, a 3D open source software for modeling, animating, texturing, composition, rendering and video editing.

It may seem overwhelming to work with blender, but here I'll only be teaching you the absolute necessary to work with epic fight.

!!! note

	<center>Epic Fight animations/models are all made in Blender 2.79, but you may opt for newer versions such as Blender 3.6, which we have recently started supporting [here]</center>
	
	[here]: ../page2/
***
## :material-download: Installing blender
To install Blender (2.79) head to the following website:

* [:material-download: Blender 2.79](https://download.blender.org/release/Blender2.79/)

Make sure to select the correct version that corresponds to your Operational System. 
(Here we'll be using Win 64x bits)
 

### :fontawesome-solid-play: Extracting and Running ...
<p style="margin-bottom: 0;">After downloading the correct file from the Blender index, you can extract the files using your preferred program.</p>
<div style="font-size:0.6rem;">(It's recommended to use a program such as 7-Zip for extracting the files)</div>
After extracting the files, verify that Blender runs correctly. To test this, open the folder hierarchy and launch `Blender.exe`. If a window appears, Blender has been successfully installed.
***
## :material-download: Json exporter
To install the custom Blender Exporter, visit the repository and download the master branch by following these steps:

* [:material-download: Blender Json Exporter](https://github.com/Yesssssman/blender-json-exporter)

<center>
<div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/95ce0412-b498-466b-ae1b-7a79a1ab27a1" class="img-rounded white-border img-rounded" style="border-radius:4px;"></div>
</center>

<ol>
<li>Go to the folder where blender is installed, move all files under /2.79/scripts/addons/xxxxxxxx/.<br><div style="font-size:0.6rem;">(You should create a new folder, represented here by the multiple Xs, it's naming does not matter)</div></li>

<li>Go to Blender <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> File <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> User Preferences <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> Add-ons, And find an add-on named <strong>"Import-Export: Minecraft Model Json Exporter"</strong></li>

<center><div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/b327a99b-ca2e-44d5-bc32-554a4d56be1b" class="img-rounded white-border img-rounded" style="border-radius:4px;"></div></center><br>

  
<li>Check the checkbox and Click "Save User Settings".</li>
<li>As you can see when you click to export, you'll be able to generate a json file, in which you can choose to select 3 options, Mesh, Animations and Armature, but we'll see those later.</li>
</ol>
***
## :fontawesome-solid-book: Learning the basics
First of all we should learn how to actually work with blender, how to move around a few useful keybinds and what each mode does. 
As a start, we'll be learning how to move around with blender.

<div class="grid cards" markdown>
-	<h2><center><strong>Controls</strong></center></h2>
	
	---
	<strong>Navigation Controls:</strong><br><br>
	Camera rotation: <kbd>Mouse3</kbd><br><br>
	Camera position: <kbd>Shift</kbd> + <kbd>Mouse3</kbd><br><br>
	Zoom In/Out: <kbd>Scroll Up</kbd> / <kbd>Scroll Down</kbd><br><br>
	Front, side, top views: <kbd>NumPad 0-9</kbd><br><br><br><br>
	
	<strong>Object Mode:</strong><br><br>
	Select: <kbd>Mouse2</kbd><br><br>
	Delete selected object: <kbd>X</kbd> or <kbd>Del</kbd><br><br>
	Join selected objects: <kbd>Ctrl</kbd> + <kbd>J</kbd><br><br>
	Grab/move object: <kbd>G</kbd><br><br><br><br>
	
	<strong>Edit Mode:</strong><br><br>
	Loop Cut: <kbd>Ctrl</kbd> + <kbd>R</kbd>
	
	
	
-	<h2><center><strong>Saving & Exporting</strong></center></h2>
	
	---
	
	Right under file, you'll find the following window:<br>
	<center><img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/SavingExporting.png?raw=true" style="width:250px;" class="img-rounded white-border img-rounded"></center><br>
	You may export, save & do various other needed tasks through this window in the following guides.
	
-	<h2><center><strong>Keyframe Saving</strong></center></h2>
	
	---
	
	Keyframes are an essential part of animation, allowing you to save a bone’s rotation, location, and scale at specific points in time.<br><br>
	Rot = rotation<br>
	Loc = location<br>
	
	Using visual keyframe saving records the bone's attributes exactly as they appear, including any changes made by bone constraints. This means that visual keyframes capture the final, visually altered positions, rotations, and scales of bones influenced by constraints.<br><br>
	
	In contrast, standard keyframe saving does not include these bone constraint effects. It only records the bone's raw transformation data (rotation, location, and scale), ignoring any alterations caused by constraints. This can be useful if you want more control over the underlying transformations without being affected by visual adjustments from constraints.
</div>

### :fontawesome-solid-video: Moving your camera
To move your camera rotation, you can press your mouse wheel and move your mouse with it pressed. After you do that, you'll probably see something similar to this:

<center>
<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/cameramove1.gif?raw=true" style="width:850px;" class="img-rounded white-border img-rounded">
</center>

Now if you want to move your camera's location you can press your <kbd>middle mouse button</kbd> + <kbd>Shift</kbd>. You'll be able to see something like this:

<center>
<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/cameramove.gif?raw=true" style="width:850px;" class="img-rounded white-border img-rounded"><br> 
Good work! Now you know how to move your camera around.
</center>
***
### :fontawesome-solid-pencil: Edit & Object mode basics
<center>
<img src="https://github.com/MetalKnight56/EpicFight-Files/assets/77132244/3ec8d8b4-7607-4f36-83cf-47f212bbb7ab" class="img-rounded white-border img-rounded" style="border-radius:4px;"> <img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/d50c49ca-8ab2-40df-b47e-acb193092423"  class="img-rounded white-border img-rounded" style="border-radius:4px; height:30px;">
</center>

In short, edit mode is used to edit objects geometry and their origin location, rotation and scale in a project. We often use edit mode to change models in ways that are simply not practical with Object mode. One of the ways we use edit mode is to add in Bones to a rig and their origin position (and by origin position i mean their actual position, scale, rotation in a project, where they'll go after you reset their object location rotation and scale)

So lets say you have a rig and you want to create a new animation, instead of having to manually change each and every bone to a new position, you can simply reset the whole skeleton to their original position that was set in Edit Mode, and from there work on a new animation, improving your workflow and making it easier to create new animations or frames to already existing ones.

We rarely use Object mode in epic fight, but basically, Object mode allows you to edit objects individually. You are also able to resize, change location and rotation of objects in Object Mode, without affecting their origin).

<div class="grid cards" markdown>

-	<center><iframe width="860" height="483.75" src="https://www.youtube.com/embed/n1lCK8WH62k?si=5UTcQeKcoI17yJ8L&amp;start=629" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class=img-rounded></iframe></center>

	---
	
	Watch this video if you want a more in depth explanation on what Edit and Object Mode does.
</div>
***
### :fontawesome-solid-person-walking: Pose mode
We often use pose mode in animating as its very handy when it comes to making the workflow faster. With pose mode you are able to change each and every bone's individual coordinate and rotation. Pose mode is mainly made to be used with Bones as it can easily change characters's poses.

<div class="grid cards" markdown>

-	<center><iframe width="860" height="483.75" src="https://www.youtube.com/embed/x5an6UV5r9c?si=dRK33qSH9ykGakLm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class=img-rounded></iframe></center>

	---

	Here's a video for you to watch so you can have a visual explanation of what you can do with pose mode.
</div>
***
### :fontawesome-solid-bone: Adding bones and Deleting stuff
<div class="content-container" style="--content-max-width: 1180px;">
    <div class="text-section" style="--text-max-width: 75%;">
To add bones, switch to <strong>Object Mode</strong> and navigate to <strong>Add</strong> <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> <strong>Armature</strong> <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> <strong>Single Bone</strong><br><br>  
Alternatively, you can press <kbd>Shift</kbd> + <kbd>A</kbd> in Object Mode to quickly open the Add menu and select Single Bone.<br><br>  
To delete an object, simply press <kbd>Del</kbd> on your keyboard, and a confirmation prompt will appear to confirm the deletion.
	</div>
	<div class="image-section">
		<div class="grow-effect" style="--scale-size: 1.05;"><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/f34f4e8a-dab5-4aae-b215-4a60b8aaea81" class="img-rounded white-border img-rounded" style="--image-width: 500px;"></div>
	</div>
</div>
***
<!-- md:example https://github.com/MetalKnight56/EpicFight-Files/raw/refs/heads/Blender-Armor/EpicFight%20Animation%20Rig.blend -->
### :fontawesome-solid-circle: Starting with animations 

<div class="content-container2">
	<div class="text-section2">
		<p><div class="hover-text" data-top="9.2%" data-left="31.3%" data-width="7%" data-height="2%">Begin by navigating to the animations tab in your project.</div>
		<div class="hover-text" data-top="77.5%" data-left="58%" data-width="4.5%" data-height="2%">Next, switch to Pose mode and ensure that you've created a new action.</div>
		<div class="hover-text" data-top="59.1%" data-left="38%" data-width="6.2%" data-height="2%">In Dope Sheet, use Action Editor to create a new action.</div>
		<div class="admonition tip">
			<p class="admonition-title">Tip</p>
			<p>You’ll likely start in the default view, so open the collapsible menu and choose the Animations tab.<br><br>  
			The tab selection menu is usually located at the top of your screen as well.</p>
		</div>
		Create your initial frame by pressing <kbd>i</kbd> and saving your chosen settings.  
	</div>
	<div class="image-section2">
	<div class="glow-box3"></div>
		<div class="grow-effect" style="--scale-size: 1.01;"><img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/Blender-Animations.png?raw=true" class="img-rounded white-border img-rounded"></div>
	</div>
</div>
<div class="hover-text" data-top="10.7%" data-left="30%" data-width="20%" data-height="47%">The Dope Sheet provides a comprehensive view of your animation's keyframes, allowing you to easily identify the position of each frame within your animation. You can also fine-tune your animation by adjusting the starting and ending frames directly in the timeline, giving you full control over the flow and timing of your sequence.</div>
<div class="hover-text" data-top="87%" data-left="21.7%" data-width="25.8%" data-height="2.7%">In the timeline, you can precisely set the starting and ending frames of your animation, giving you control over its duration and flow.</div>
<div class="hover-text" data-top="87%" data-left="47.4%" data-width="5.5%" data-height="2.7%">You can use the buttons on the Blender timeline to play your animation, as well as navigate through frames by moving forward or backward one frame at a time, giving you precise control over your animation’s playback.</div>

You may also use the <kbd>:octicons-arrow-left-24:</kbd> and <kbd>:octicons-arrow-right-24:</kbd> arrows on your keyboard to go to the next frame.

#### AutoKey
<div class="hover-text" data-top="87.6%" data-left="57.8%" data-width="1.2%" data-height="2.0%">AutoKey is a useful tool that automatically registers keyframes whenever you make changes to a bone or object in your scene, streamlining the animation process and ensuring that every adjustment is captured without manual keyframe placement.</div>
***
### :fontawesome-solid-circle-dot: Viewport
<div class="content-container">
    <div class="text-section">
        <p>You can change the viewport mode to view objects from different perspectives, each offering specific visual insights to aid your work.<br><br>  

			For instance, the Wireframe viewport mode removes textures and shows only the object's wireframe structure. This is especially useful for seeing the shape and layout of an object in a transparent way, allowing you to clearly view and understand elements behind or within it.<br><br>  

			The Texture viewport mode, on the other hand, displays objects with their full textures, showing all the colors, patterns, and surface details as they would appear in the final render. This mode is ideal for refining textures and verifying how they map onto the object.<br><br>  

			Finally, the Solid viewport mode displays the object in a neutral gray tone without textures. This plain view is commonly used to analyze the object’s form, lighting, and shadow projections without the distraction of textures, helping you check how shadows interact with the object's surface.</p>
    </div>
    <div class="image-section">
        <div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/bf817606-2367-47aa-932e-5d8b1ba48268" class="img-rounded white-border img-rounded"></div>
    </div>
</div>

<div class="grid cards" markdown>
-   <center>__Viewport Breakdown Tutorial__</center>

	---

	<center><iframe width="860" height="483.75" src="https://www.youtube.com/embed/x6oWgtJInCQ?si=LYLZwErAH56e63vb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class=img-rounded></iframe></center>
</div>

***
### :fontawesome-solid-paintbrush: Weight paint
Weight paint is probably one of the most used tools when it comes to creating a rig. It serves as a way to determine the weight of influence that each vertex group (bone) will have over a vertex. It allows you to basically make the animation process easier.

Imagine if you had to manually transform the mesh of your object for each pose and key frame you wanted to make, it would take months to make a single animation as it would be very time consuming, so Bones where created so now you only need to interact with them, but how do you determine the mesh transformations depending on each bone, well thatsll all calculated by weight paint.

There isn't a proper way to show you how to deal with weight paint, but basically, when assigning a bone group to an object it'll create a vertex group which you can set the weight for each vertex. Mind that all vertecies need to be assigned to a vertex group for it to be exportable.

Here are two videos explaining how to use / what weight paint does. (I recommend watching them in order)

<center>
<iframe width="480" height="270" src="https://www.youtube.com/embed/4fICQmBEt4Y?si=YAcea-cppApy2Si4" title="Video 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class=img-rounded></iframe>
<iframe width="480" height="270" src="https://www.youtube.com/embed/5M7YO3SYJ_U?si=zx1kDxac3chCfbPt" title="Video 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class=img-rounded></iframe>
</center>

***
### :material-arm-flex: Adding Bends

Epic Fight entities and players use different player models and animations which are only made possible by using bends. Bends allow for a more natural and realistic movements.  

One  of the biggest questions we get from developers is how do bends work and how they can be reproduced for other custom entities or armor... Basically bends are made of three loop cuts places in the same position that can then be expanded 

To add bends for entities, armors or anything so it has compatibility with epic fight, basically create 3 loop cuts (<kbd>Ctrl</kbd> + <kbd>R</kbd>), the first should be exactly on top of the knee bone (if adding bends for arms or chestplates, it would be on top of the elbow bone instead), then secondly create two more loop cuts, one of the top of the middle loop cut and the other below the middle loop cut. After that, place those two loop cuts on top of the middle one. Then from there you'll want to paint the top part and the part where said bone will bend to.

!!!	tip
	* <kbd>Ctrl</kbd> + <kbd>numpad_plus</kbd> - select the next set of vertices 
	* <kbd>Ctrl</kbd> + <kbd>numpad_minus</kbd> - unselect the last selected set of vertices 

<div class="grid cards" markdown>

-	<center><iframe width="860" height="483.75" src="https://www.youtube.com/embed/xy9Qf_Ib5dg?si=_UYqudBMi0O9Xoy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class=img-rounded></iframe></center>

	---
	
	Watch this quick video we've arranged so you can have a more visual experience of how to add bends.
	
	!!! warning
		The KeyBinds used in the video/referenced here may not work on newer versions of blender like 3.6
</div>
***
### :fontawesome-solid-cube: UV Mapping & Texturing

UV Mapping stands for "UV coordinates mapping" in the field of computer graphics and 3D modeling. It is a technique used to map 2D textures onto 3D surfaces of a computer-generated object. The term "UV" refers to the 2D coordinate system used to represent the 2D texture image, where U represents the horizontal axis and V represents the vertical axis.

<div class="content-container">
	<div class="text-section" style="--text-max-width: 45%;">
		In epic fight, we mostly use UV mapping to fix issues in between bends, where blender may have issues determining where to use certain parts of the texture, and to properly map out texture for each plane side of a cube.<br><br><br>  
		You can change your screen to UV editting mode by going to the top of your screen and changing the screen layout.
	</div>
	<div class="image-section">
		<div class="grow-effect" style="--scale-size: 1.05;"><img src="https://github.com/MetalKnight56/EpicFight-Files/assets/77132244/cc32cb29-c51a-4f20-a10e-5d6871d691d5" class="img-rounded white-border img-rounded" style="--image-width: 750px;"></div>
	</div>
</div>
<div class="grid cards" markdown>
-   <center><img src="https://github.com/MetalKnight56/EpicFight-Files/assets/77132244/fcfb6190-be2d-4a10-b12a-831e39b4290b" style="height: 156px; width: auto;" class="img-rounded white-border img-rounded"></center>

	---
	
	You can create new textures by clicking this button
	
-	<center><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/12a57d9a-ad48-4daf-8830-806afc9b98cf" class="img-rounded white-border img-rounded"></center>


	---
	
	You can also assign existing textures by clicking this

</div> 

#### :fontawesome-solid-wrench: Fixing issues in between bends (Loop Cuts)
<div class="content-container">
	<div class="text-section" style="--text-max-width: 60%;">
		For developers or creators working on entity models, adding bends to your models is often essential. However, a common issue you might encounter is Blender's difficulty in determining the appropriate texture for the narrow space between loop cuts.<br><br>   
		This can result in unintended visual artifacts or texture stretching, as Blender struggles to decide how to apply the texture within these tight, angled sections. Understanding and addressing this challenge is crucial for achieving smooth, high-quality textures on complex models.<br><br>   
		A few solutions to this issue include arranging the loop cut spaces carefully by stretching the UV maps toward either the top or bottom, depending on the specific part you are working on.<br><br>   
		The first step is to switch your window to Edit Mode. If you're unfamiliar with how to use and navigate Edit Mode, you can learn more by checking out the <a href="#edit-object-mode-basics">Edit & Object Mode Basics</a> guide on this page!
	</div>
	<div class="image-section">
		<p align="center"><div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/933a7101-0db1-480d-8af8-f58d928ecd94" class="img-rounded white-border img-rounded" style="--image-width: 750px;"></div></p>
		<p align="center">This is an example of what you may face when patching armors, making entities or overall adding bends</p>
	</div>
</div>

<div class="content-container">
	<div class="text-section" style="--text-max-width: 80%; order:1;">
		This issue is easily resolved by scaling the top or bottom faces of the model by a factor of two. Simply press:
		<ul>
		<li><kbd>Ctrl</kbd> + <kbd>numpad_plus</kbd> - select the next set of vertices </li>
		<li><kbd>Ctrl</kbd> + <kbd>numpad_minus</kbd> - unselect the last selected set of vertices </li>
		</ul>
		<br><br>   
		The next step is to extend the UV mappings to align with the upper and lower sections accordingly. For each plane generated between the loop cuts, follow these steps:
	</div>
	<div class="image-section">
		<div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/98b8f3fa-0fa7-4bb6-812f-39f5ea358ff3" class="img-rounded white-border img-rounded" style="--image-width: 150px;"></div>
	</div>
</div>

1. In UV edit mode, Select the planes that have overlapping textures.
2. Extend their vertices to utilize either the upper or lower portions of the texture, depending on their position in the leg or arm bends.

<center>
<div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/99ed4706-9f78-4955-9667-1925a78258b2" class="img-rounded white-border img-rounded"></div>
This will ensure each section accurately displays the intended texture details based on its placement in the model.
</center>

!!!	warning 
	Make sure to select UV selection and display mode to Edge

***
### :fontawesome-solid-magnet: Snap Transform
<div class="content-container2" style="--flex-direction: column;">
	<div class="text-section2" style="--text-max-width: 100%;">
		Snap Transform lets you move objects with precision, making it much easier to align them with one another. Think of it as a virtual ruler that helps you create straight lines and accurate positioning.<br><br>   
		<center><div class="hover-text" data-top="66.5%" data-left="60.7%" data-width="1.2%" data-height="6%">To enable snapping, simply click the magnet icon located near your 3D orientation transform options.</div></center>
	</div>
	<div class="image-section2">
		<div class="glow-box3"></div>
		<div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/snaptransform-example.png?raw=true" class="img-rounded white-border img-rounded" style="--image-width: 550px;"></div>
	</div>
</div>
***
### :fontawesome-solid-shuffle: X-Axis Mirror
You may find yourself having to make two different animations for one single action. For example, if you wanted to make a "Holding Torch" arnimation you'd need to mirror your animation on the X-Axis in order to have both the main and offhand variants of said animation.

You are able to do this kind of mirroring by copying the current pose (<kbd>Ctrl</kbd> + <kbd>C</kbd>), then selecting the right side (<kbd>Ctrl</kbd> + <kbd>i</kbd>) and finally in a newly created action you can then paste said animation by pressing <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>V</kbd>


!!! quote
	If you want to mirror your animation form the left side to the other side during pose mode you just need to select the whole left side then copy the pose with <kbd>Ctrl</kbd>+<kbd>C</kbd>.

	After that press <kbd>Ctrl</kbd>+<kbd>i</kbd> to go to your right side and finally press <kbd>Shift</kbd>+<kbd>Ctrl</kbd>+<kbd>V</kbd> to paste the the X flipped pose, that way you'll have a perfect mirror of both side
	
	[:octicons-arrow-right-24:[Reference](https://blender.stackexchange.com/questions/75848/how-do-i-make-x-axis-mirror-available-in-pose-mode)](#)

***
### :fontawesome-regular-square: Transparency
<div class="content-container">
	<div class="text-section2" style="--text-max-width: 75%;">
		Some objects imported into Blender might display incorrectly, often due to material settings that don’t align with Blender’s rendering system. When this happens, the object may appear partially or entirely opaque, with missing or improperly rendered transparent parts, especially if transparency is a crucial aspect of the model.<br><br> 
		To resolve this, start by entering <strong>Object Mode</strong>. Then, navigate to the Materials tab in the Properties panel. In the settings for your selected material, find and enable the <strong>Transparency</strong> option. Adjust the <strong>Alpha</strong> setting as needed to control the level of transparency for the material, allowing the object to display as intended. This fix ensures that objects relying on transparency or opacity settings retain their correct visual appearance in Blender.<br><br> 
		You may also refer to the resource linked below for additional guidance:
	</div>
	<div class="image-section2">
		<center>
			<div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/02a6e79d-ce66-40f8-a017-3cb5dabab20a" class="img-rounded white-border img-rounded" style="--image-width: 250px;"></div><br>
			Black textures where it should be transparent.
		</center>
	</div>
</div>
!!!	quote
	Materials in Blender can be set to be transparent, so that light can pass through any objects using the material. Transparency is controlled using an “alpha” channel, where each pixel has an additional value, range 0-1, in addition to its RGB color values. If alpha=0, then the pixel is transparent, and the RGB values for the surface contribute nothing to the pixel’s appearance; for alpha=1, the surface is fully opaque, and the color of the surface determines the final color of the pixel.
	
	<figure markdown>
	<img src="https://docs.blender.org/manual/en/2.79/_images/render_blender-render_materials_properties_transparency_panel.png" class="img-rounded white-border img-rounded">
	<figcaption>Transparency panel.</figcaption>
	</figure>
	
	In Blender, there are three ways in which the transparency of a material can be set: Mask, Z-Buffer and Raytrace. Each of these is explained in more detail below. The Material Preview option with a sphere object gives a good demonstration of the capabilities of these three options.
	
	[:octicons-arrow-right-24: [Reference](https://docs.blender.org/manual/en/2.79/render/blender_render/materials/properties/transparency.html)](#)

***
###

<div class="grid cards" markdown>

-	<center>__That's it for now !__</center>

	---
	
	<center>If you're considering diving into Blender and beginning your learning journey, I highly recommend exploring the comprehensive tutorial playlist curated by Derek Banas.</center>
	
	---
	
	<center><iframe width="860" height="483.75" src="https://www.youtube.com/embed/videoseries?si=CDZNr2uto3OF3mUM&amp;list=PLpdCRuhtdVcuwfyl97L7TjeChtx0k8vcb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class=img-rounded></iframe></center>

</div>
 
