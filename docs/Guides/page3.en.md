---
icon: deployed_code
---
# Starting with Blender 2.79

Epic fight uses custom animations for multiple actions in game, from drinking, eating to even attack combos. These animations are handled by Blender, a 3D open source software for modeling, animating, texturing, composition, rendering and video editing.

It may seem overwhelming to work with blender, but here I'll only be teaching you the absolute necessary to work with epic fight.

!!! note

	Epic Fight animations/models are all made in Blender 2.79, but you may opt for newer versions such as Blender 3.6 (Which's not yet supported)
***
## :material-download: Installing blender
To install Blender (2.79) head to the following website:

* [:material-download: Blender 2.79](https://download.blender.org/release/Blender2.79/)

Make sure to select the correct version that corresponds to your Operational System. 
(Here we'll be using Win 64x bits)
 

### Extracting and Running ...
 
After you downloaded the correct file from the blender index, you can extract the files with your program of choice. (We recommend you to use something like 7zip)

Once you've extracted the files, make sure Blender runs. You can test that by opening the folder hierarchy and executing Blender.exe. If a window like this is opened, then it means you've successfully installed blender.
***
## :material-download: Json exporter
To install our custom Blender Exporter, please visit our repository and obtain the master branch by following these instructions:

* [:material-download: Blender Json Exporter](https://github.com/Yesssssman/blender-json-exporter)

<center>
![](https://github.com/Yesssssman/epicfightmod/assets/77132244/95ce0412-b498-466b-ae1b-7a79a1ab27a1){.img-rounded}
</center>

1.  Go to the folder where blender is installed, move all files under /2.79/scripts/addons/xxxxxxxx/.  (You can create a new folder that's represented here by the multiple X )
2. Go to Blender > File > User Preferences > Add-ons, And find an add-on named "Import-Export: Minecraft Model Json Exporter"
<center>
![](https://github.com/Yesssssman/epicfightmod/assets/77132244/b327a99b-ca2e-44d5-bc32-554a4d56be1b){.img-rounded}  
</center>
3.   Check the checkbox and Click "Save User Settings".
4. As you can see when you click to export, you'll be able to generate a json file, in which you can choose to select 3 options, Mesh, Animations and Armature, but we'll see those later.
***
## :fontawesome-solid-book: Learning the basics
First of all we should learn how to actually work with blender, how to move around a few useful keybinds and what each mode does. 
As a start, we'll be learning how to move around with blender.
***
### :fontawesome-solid-video: Moving your camera
To move your camera rotation, you can press your mouse wheel and move your mouse with it pressed. After you do that, you'll probably see something similar to this:

<center>
![](https://i.imgur.com/i2nRfF3.gif){.img-rounded}
</center>

Now if you want to move your camera's location you can press your <kbd>middle mouse button</kbd> + <kbd>Shift</kbd>. You'll be able to see something like this:

<center>
![](https://i.imgur.com/Ozac1y0.gif){.img-rounded}
</center>

Good work! Now you know how to move your camera around.
***
### :fontawesome-solid-pencil: Edit & Object mode basics
<center>
![](https://github.com/MetalKnight56/RafTale/assets/77132244/6162e878-7d92-4438-866a-750116c92f0a){.img-rounded} ![](https://github.com/Yesssssman/epicfightmod/assets/77132244/d50c49ca-8ab2-40df-b47e-acb193092423){.img-rounded}
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
One of the ways you can add bones is by going into Object Mode and selecting Add > Armature > Single Bone

<center>
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/f34f4e8a-dab5-4aae-b215-4a60b8aaea81){.img-rounded}
</center>

Alternatively you can press <kbd>Shift</kbd> + <kbd>A</kbd> to open the same menu and add a Single Bone, when on Object Mode.

To delete stuff you can simply hit the Del key on your keyboard and it'll present you with a promp asking if you really want to delete such thing.
***
### :fontawesome-solid-circle: AutoKey and Starting with animations
First head to the animations tab on your project. 

!!!	tip 
	You will probably be in default, so open the collapsible menu and select the animations tab...  
	! The collapsible menu for selecting tabs is usually at the top of your screen too !

<center>
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/87b17fb4-6d73-4ebd-83e9-0e3935247b34){.img-rounded}       >       ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/e80f55c4-5eaa-4d9e-ba3d-637a099b5504){.img-rounded}
</center>

Now go to Pose mode, and make sure you've created a new action like this:
(Make sure to select action editor)

<center>
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/20b88013-524f-4e7b-ae11-b7676cf29239){.img-rounded}
</center>

Make your first frame by pressing <kbd>i</kbd> and saving what you desire. 

* Loc = Location
* Rot = Rotation

Don't mind the other types of saving a keyframe, for now all we want should be the default saving options.
(No visual or delta saving)

You can use Dope Sheet to see where each frame is located, and you can change the animation starting and ending frames in the timeline.
Dope Sheet Summary:

<center>
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/64a1a133-90a9-4a66-97b1-57acd0a1dcf8){.img-rounded}
</center>

Timeline where you want to set the initial and end frame.

<center>
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/defbf770-1edc-44d0-a0b0-839ca33e0fcd){.img-rounded}
</center>

You can use these buttons to play your animation or move around frames.

<center>
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/eb7f0c29-c0c8-459f-9b6e-bd177c838966){.img-rounded}
</center>

You may also use the left and right arrows on your keyboard to go to the next frame.
***
#### AutoKey
AutoKey is a handy tool used to auto register keyframes when you make an alteration to a bone or object in a scene. You can activate it by clicking on this red button: ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/03954366-7866-4399-8e61-7379a0e527f9)
(Mind that auto key can be very annoying at times)
***
### :fontawesome-solid-circle-dot: Viewport
You can change your viewport mode so you have different perspectives of each object. 

<center>
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/bf817606-2367-47aa-932e-5d8b1ba48268){.img-rounded}
</center>

For example, we have WireFrame viewport which allows you to disable an object's texture so you are left with a wireframe of that object, allowing you to easily see whats on the other side.

We also have the Texture Viewport which will display that objects texture.

And Solid viewport which will make the selected object have a gray and boring texture, often used to check shadows projections on a object.

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

In epic fight, we mostly use UV mapping to fix issues in between bends, where blender may have issues determining where to use certain parts of the texture, and to properly map out texture for each plane side of a cube.

You can change your screen to UV editting mode by going to the top of your screen and changing the screen layout.

<center>
![image](https://github.com/MetalKnight56/RafTale/assets/77132244/40bdb587-ab20-4e56-afb2-f1ef16ec6e68){.img-rounded}
</center>

<br>   
<div class="grid cards" markdown>
-   <center><img src="https://github.com/MetalKnight56/RafTale/assets/77132244/c9fe07f2-ca04-4a7a-b291-e464ba4ac971" alt="Image" style="margin-left: 10px; border-radius: 10px;"/></center>

	---
	
	You can create new textures by clicking this button
	
-	<center><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/12a57d9a-ad48-4daf-8830-806afc9b98cf" alt="Image" style="margin-left: 10px; border-radius: 10px;"></center>


	---
	
	You can also assign existing textures by clicking this

</div>
<br>     
***
#### :fontawesome-solid-wrench: Fixing issues in between bends (Loop Cuts)
If you are a developer or someone looking to make entity models you may find yourself having to add bends to your models. One of the most commonly occuring issues is when blender fails to determine which texture should be used in that narrow space in between loop cuts.

<p align="center">  <img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/933a7101-0db1-480d-8af8-f58d928ecd94" alt="Image" style="display: block; margin: 0 auto; border-radius: 10px;"/>  </p>
<p align="center">This is an example of what you may face when patching armors, making entities or overall adding bends</p>

Don't worry as this is easily fixable by scaling the top or bottom faces of that model two times. You can press:  

* <kbd>Ctrl</kbd> + <kbd>numpad_plus</kbd> - select the next set of vertices 
* <kbd>Ctrl</kbd> + <kbd>numpad_minus</kbd> - unselect the last selected set of vertices 

This is probably what you'll be left with:

<center>
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/98b8f3fa-0fa7-4bb6-812f-39f5ea358ff3){.img-rounded}
</center>

In UV edit mode, you can select the planes that have overlapping texture and you can extend their vertexs to use the upper part of the texture, or the lower according to their location.

<center>
![2023_01_21_15_16_55_33](https://github.com/Yesssssman/epicfightmod/assets/77132244/99ed4706-9f78-4955-9667-1925a78258b2){.img-rounded}
</center>

!!!	warning 
	! Make sure to select UV selection and display mode to Edge !

***
### :fontawesome-solid-magnet: Snap Transform
Snap allows you to move objects in precise ways. Its main function is to allow you to alling other objects with each other more easily, kinda working like a ruler when you want to make a straight line.
You can enable snapping by clicking the little magnet icon near your 3D orientation transform options.

<center>
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/c2f16673-dcb5-4f8f-8b02-59f3c3c79860){.img-rounded}
</center>

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
Some objects that you import inside blender may or may not have the following issue: 

<center>
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/02a6e79d-ce66-40f8-a017-3cb5dabab20a){.img-rounded}
</center>

Basically black textures where it should be transparent.

You can fix that by going to Object Mode, In materials and enabling Transparency.

!!!	quote
	Materials in Blender can be set to be transparent, so that light can pass through any objects using the material. Transparency is controlled using an “alpha” channel, where each pixel has an additional value, range 0-1, in addition to its RGB color values. If alpha=0, then the pixel is transparent, and the RGB values for the surface contribute nothing to the pixel’s appearance; for alpha=1, the surface is fully opaque, and the color of the surface determines the final color of the pixel.
	
	<figure markdown>
	![](https://docs.blender.org/manual/en/2.79/_images/render_blender-render_materials_properties_transparency_panel.png){.img-rounded}
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




 
