---
icon: trail_length
hide:
  - announcement
---
# Custom Trails
In Epic Fight, we've introduced a way for users to add their own unique touch to sword trails. Not only can you customize the trail's colors, but you can also change its textures to fit your style!

In this guide, we'll walk through the process of creating custom trails for each weapon or item.

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
<center> <code>assets <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> "modid" <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> item_skins <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span>"registryname".JSON</code> </center>
<div class="content-container2">
	<div class="text-section2" style="--text-max-width: 70%;">
		<ul>
		<li>
		<p><div class="hover-text" data-left="73.8%" data-top="61.5%" data-width="9.8%" data-height="7.5%" style="padding: 8px 0px;"><code>modid</code>: The mod ID is usually the name of the mod. You can often find it by checking in-game item tooltips (press <code>F3 + H</code> to enable Advanced Tooltips) or by looking at commands or messages related to the mod. For example, if the tooltip for an item shows <code>modid:itemname</code>, the part before the colon <code>(modid)</code> is what you’ll use to name the <code>"modid"</code> folder.<br></div></p>
		</li>
		<br>
		<li>
		<p><div class="hover-text" data-left="83.3%" data-top="61.5%" data-width="14.8%" data-height="7.5%" style="padding: 8px 0px;"><code>registryname</code>: To locate an item’s registry name, press <code>F3 + H</code> in-game to enable Advanced Tooltips. Then, hover over the item to view its registry name.<br></div></p>
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
### :fontawesome-solid-pencil: Trail customization

<div markdown style="display: flex; align-items: flex-start;">
<div markdown style="flex: 1; margin-right: 20px; max-width:60%;">

After creating the ``.json`` file, you can proceed to fully customize your trails to match your vision. This is where you define the visual characteristics of the trail, such as its color, position, behavior, and texture. Below is a detailed example and explanation of how your ``.json`` file should be structured:
``` json
{
    "trail": {
    	"color": [51, 235, 203],
    	"begin_pos": [0.0, 0.0, -0.2],
    	"end_pos": [0.0, 0.1, -0.7],
    	"lifetime": 4,
		"interpolations": 4,
    	"texture_path": "epicfight:textures/particle/swing_trail.png",
    	"particle_type": "epicfight:swing_trail"
    }
}
```
<br>
This is an example ``.json`` file specifically designed for the ``diamond_dagger`` item in Epic Fight. 
<br><br>
You can utilize any [RGB color picker](https://g.co/kgs/SknrLE4) to customize the trail's color to your preference. Additionally, feel free to experiment with the various values to fine-tune the trail's appearance and behavior until it matches your vision.

</div><div style="flex: 1; max-width:40%;">



<center>
Here’s a list of fields you can use in the weapon trail ``.json``:

|Fields| Info|
| ------------- | ------------- |
|"trail"| Defines the trail configuration inside the item skin file. |
|"color"| Specifies the RGB value for the trail color.|
|"begin_pos"| The starting position of the virtual stick that draws the trail for each frame.|
|"end_pos"| The ending position of the virtual stick that draws the trail for each frame.|
|"lifetime"| The duration (in ticks) that the trail remains visible.|
|"interpolations"| The number of vertices created for each tick to smooth the trail.|
|"texture_path"| The file path for the custom texture used for the trail.|
|"particle_type"| The registry name of the trail.|

</center>
</div></div>
***
### :material-texture-box: Custom trail textures

You can also create custom trail textures by following this folder structure: ``assets/epicfight/textures/particle/"modid"``
<br><br>
Inside the `"modid"` folder, you can add as many texture files as you need. To use these textures, simply reference their file paths in the `"texture_path"` field of your trail `.json` customization file.
<br><br>
**Here are some examples of trail textures used in Epic Fight:**

[<center>
![](https://github.com/Yesssssman/epicfightmod/assets/77132244/eccfefb9-f9f8-4518-a2f6-eab3a2c4e3f8)
![](https://github.com/Yesssssman/epicfightmod/assets/77132244/8421ff50-0f75-4308-8793-fb4be3f60a23)
</center>](https://github.com/Yesssssman/epicfightmod/tree/1.18.2/src/main/resources/assets/epicfight/textures/particle)

***

### :octicons-database-24: Trail data customization

<div markdown style="display: flex; align-items: flex-start;">
<div markdown style="flex: 1; margin-right: 20px; max-width:60%;">

You can also customize the trail data in-depth for each animation. For reference, you can check the examples in our repository to see how it's applied across different animation data.
<br><br>
Make sure to use the following folder structure to organize your animation trail data: ``assets/epicfight/animmodels/animations/biped/combat/data/animation_name.json``
<br><br>
This structure ensures that your animation-specific trail data is properly recognized and applied during combat animations.
<br><br>
*Here's an example of custom trail data:*
``` json	
{
	"trail_effects": [
		{
			"start_time": 0.05,
			"end_time": 0.15,
			"joint": "Tool_R",
			"item_skin_hand": "main_hand"
		}
	]
}
```

</div><div style="flex: 1; max-width:40%; margin-top: 80px;">
<center>
These fields customize the trail data for any animation:

|Parameters| Info|
| ------------- | ------------- |
|"trail_effects"| Used in the animation data file to define the trail effects. |
|"start_time"| The time in the animation when the trail should start drawing.|
|"end_time"| The time in the animation when the trail should stop drawing.|
|"joint"| The parent joint for positioning the trail (e.g., ``"Tool_R"``).|
|"item_skin_hand"| Specifies the hand where the item skin data is applied (e.g., ``"main_hand"``).|

</center>
</div></div>
<br>
[:octicons-arrow-right-24: Reference](https://github.com/Yesssssman/epicfightmod/tree/1.18.2/src/main/resources/assets/epicfight/animmodels/animations/biped/combat/data)

***