---
icon: plumbing
hide:
  - announcement
  - toc
---
# 3D Armor Fix [Blender 2.79]

In Epic Fight, many custom armors are dysfunctional due to the game's unique model system, which differs from both standard entities and armor. However, the mod provides a model generation algorithm based on custom armors, though it occasionally alters them unfavorably. 
  
!!! question ""
	This guide extensively utilizes Blender, so refer to [Blender Basics and Tips and Tricks] for comprehensive insights on using Blender effectively, including tips, tricks, and troubleshooting.
  
	To replicate in-game armor models accurately, check [Remaking armor models in Blockbench] if your models aren't ready for Blender patching.

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

1. First, open blender, go to file/import/Wavefront (.obj), and import your armor file you've just created in blockbench.
2. After this, select one armor part to patch. We will patch the head layer first. So we'll select every cube and part that composes the helmet for the archer's armor. For us, the "head" and "headback.001" are the parts that make up for the helmet so we'll select both and press <kbd>Ctrl</kbd> + <kbd>J</kbd> to join all of the parts into one single model. 

	!!!	tip 
		<center>To join all parts, you'll have to be in object mode</center>

	<center>
	**Select**  
	<img src="https://user-images.githubusercontent.com/77132244/215290753-d88f7ed2-a32b-43bc-9e33-a35c273d04b9.png" class="img-rounded white-border">  
	**Join** _(Feel free to rename the new joined model the armor part it corresponds to, in our case i later renamed it "Helmet")_.  
	<img src="https://user-images.githubusercontent.com/77132244/215290768-f91985a4-31a5-4606-bd25-91b150ba0119.png" class="img-rounded white-border">  
	</center>
	<blockquote>In these screenshots all the other armor parts are hidden.</blockquote>
<ol start="3">
<li> 
In object mode, correct the import rotation, and postion by clicking <kbd>Alt</kbd> + <kbd>R</kbd> & <kbd>Alt</kbd> + <kbd>G</kbd>.
</li>

<li> 
On edit mode, rotate the model and correct its position to the original location before you reset the rot/pos on object mode.
</li>  

<li> 
Now after fixing the import rotation, we'll parent the model to the armature by going to object mode, selecting the helmet model and also the armature, going over to Object/Parent/Armature Deform/With Empty Groups/With Empty Groups. Now You've successfully parented the model to the armature, lets head over to weight paint. 
</li>
</ol>

!!!	tip 
	<center>You can select two things by pressing shift while right clicking them. Make sure both are selected in object mode and not pose or edit mode</center>


<center>
<img src="https://user-images.githubusercontent.com/77132244/218175943-dcde10ab-9f45-4fb3-a1ec-a2ec7f851483.png" class="img-rounded white-border">
</center>  

<ol start="6">
<li> 
By selecting the helmet model, and switching from object mode to weight paint, we'll finally apply the vertex group deformations so the helmet follows the head while our player plays any animation.
<center>
<img src="https://user-images.githubusercontent.com/77132244/218176695-4cfafe68-7010-4450-a5f8-93e3dff1f3dd.png" class="img-rounded white-border">
</center>
</li>

<li> 
To apply the weight paint, make sure you can see the vertices and you have wireframe mode enabled like in the following image:
<center>
<img src="https://user-images.githubusercontent.com/77132244/218177435-f9d01478-fbe0-45f9-b754-adf5d2efa745.jpg" class="img-rounded white-border">
</center>
</li>

<li> 
Now you can choose from a range of brushes to apply the weight paint, but the ones we mainly use is subtract and add
<center>
<img src="https://user-images.githubusercontent.com/77132244/218177593-95794246-6d9a-4caf-afa2-636b784b8d3a.png" class="img-rounded white-border">
</center>
</li>

<li> 
Select the desired vertex group on the right, the one we'll be working with is the head group as we are patching a helmet.
<center>
<img src="https://user-images.githubusercontent.com/77132244/218178265-69388152-b465-45e5-8ccd-cfe3e430dfb7.jpg" class="img-rounded white-border">
</center>
</li>

<li> 
Now simply go on your way painting the whole model so it follows the whole head. In the end you'll be able to get something like this:
<center>
<img src="https://user-images.githubusercontent.com/77132244/218178527-210b4b77-5f16-4cf7-9310-6c2b3e2ce83a.png" class="img-rounded white-border">
</center>
</li>

<li> 
You can test to see if you've successfully parented and weight painted the helmet to the head by going over to your armature in pose mode and rotating the head bone around. If your model follows the head bone, then its correct, if not, then please go back a few steps and recheck to see if you've missed something.
<center>
<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Images/gizmos.gif?raw=true" class="img-rounded white-border">
</center>
</li>
</ol>

***
## :fontawesome-solid-lightbulb: Exporting your patched models
Now that you've patched yourt models you'll want to export your work and apply the changes in game. But how can you do that? Well it's really simple.

1. Make sure you don't have any armor parts or unwanted models on your project and only the desired armor part to be exported like so. 

!!!	tip inline
	You **can't** export two armor parts at once, so export one at a time and delete all the other ones

<span class="left-align">
<img src="https://user-images.githubusercontent.com/77132244/218179518-18c8d979-68af-44ff-989a-aa55ebb6c239.png" class="img-rounded white-border">
</span>

<ol start="2">
<li> 
After cleaning any unwanted models or armor parts that won't be exported, head over to File/Export/Animated Minecraft Model (.json)  
<center>
<img src="https://user-images.githubusercontent.com/77132244/218179838-bbc7d557-8525-4ab8-beaf-41211bf334fd.png" class="img-rounded white-border">
</center>
</li>

<li>
Make sure you only have Export Mesh selected as we're only exporting an armor and not an animation or custom armature.  
<center>
<img src="https://user-images.githubusercontent.com/77132244/218179992-0f54bb48-99b6-45c2-8166-107668b200e7.png" class="img-rounded white-border">
</center>
</li>

<li>
Check the export name to see if it matches the custom armor registry name in-game.  
<center>
<img src="https://user-images.githubusercontent.com/77132244/218180136-b229edd0-3941-4a68-b82b-dfc0fcf80bca.png" class="img-rounded white-border">
</center>
</li>

<li>
Click Export to Json Minecraft after you are done.  
<center>
<img src="https://user-images.githubusercontent.com/77132244/218180246-7c04c4ad-ad96-4361-b43a-3ff434de419d.png" class="img-rounded white-border">
</center>
</li>
</ol>

***
<div markdown style="display: flex; align-items: flex-start;">
<div markdown style="flex: 1; margin-right: 20px; max-width:75%;">


<h2 markdown id="making-the-packmcmeta-file"><strong><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc.--><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2 5.2-7.1 10.4-14.2 15.4-21.4 19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3 5 7.2 10.2 14.3 15.4 21.4 19.8 27.1 39.7 54.4 49.2 86.2h160zm-80 128c44.2 0 80-35.8 80-80v-16H112v16c0 44.2 35.8 80 80 80zm-80-336c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112 8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path></svg></span> Making the pack.mcmeta file</strong></h2>

First, you'll need to create a pack.mcmeta file. Here's how to do it:

1. **Create the File**:  
   - Start by creating a new text file.  
   - Rename the file to `pack.mcmeta`. Ensure that file extensions are visible so you can properly change the extension (e.g., from `.txt` to `.mcmeta`).  

2. **Edit the File**:  
   - Open the file with a text editor and add the following code for your datapack to function properly:  

```JSON
{
	"pack":{
		"pack_format":15,
		"description":"A short description on your pack"
		}
}
```
</div> <div style="flex: 1; max-width:25%;">
<center><h3 id="pack_format-values"><strong><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc.--><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-37.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1-48 0zm104-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1-48 0zm88 0c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"></path></svg></span> pack_format Values</strong></h3></center>

<center>

<table>
<thead>
<tr>
<th>Version</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.16.5</td>
<td>6</td>
</tr>
<tr>
<td>1.17.x</td>
<td>7</td>
</tr>
<tr>
<td>1.18.2</td>
<td>8</td>
</tr>
<tr>
<td>1.19.2</td>
<td>9</td>
</tr>
<tr>
<td>1.20.1</td>
<td>15</td>
</tr>
</tbody>
</table>

</center>
</div></div>

***
### :fontawesome-solid-folder: Making the folder path

To set up the folder structure, follow these steps. Each folder or file must be nested inside the previous one in the hierarchy:
<center> <code>assets <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> "modid" <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> animmodels <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> armor <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> "registryname".JSON</code> </center>
<div class="content-container2">
	<div class="text-section2" style="--text-max-width: 70%;">
		<ul>
		<li>
		<p><div class="hover-text" data-left="73.8%" data-top="59.0%" data-width="9.8%" data-height="7.5%" style="padding: 8px 0px; display: block;"><code>modid</code>: The mod ID is usually the name of the mod. You can often find it by checking in-game item tooltips (press <code>F3 + H</code> to enable Advanced Tooltips) or by looking at commands or messages related to the mod. For example, if the tooltip for an item shows <code>modid:itemname</code>, the part before the colon <code>(modid)</code> is what you’ll use to name the <code>"modid"</code> folder.<br></div></p>
		</li>
		<br>
		<li>
		<p><div class="hover-text" data-left="83.3%" data-top="59.0%" data-width="14.8%" data-height="7.5%" style="padding: 8px 0px; display: block;"><code>registrynames</code>: To locate an item’s registry name, press <code>F3 + H</code> in-game to enable Advanced Tooltips. Then, hover over the item to view its registry name.<br></div></p>
		</li>
		</ul>
	</div>
	<div class="image-section2">
		<center>
			<div class="glow-box3"></div>
			<div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/tooltips_example1.png?raw=true" class="img-rounded white-border img-rounded" style="--image-width: 400px;"></div><br>
			<span style="font-size: 0.5rem;">Make a <code>.txt</code> file with the outlined text, then change it's type to <code>.json</code></span>
		</center>
	</div>
</div>

***
[:octicons-arrow-right-24: [Other solutions for 3D armor glitches](3Darmor_page2.en.md)](#)