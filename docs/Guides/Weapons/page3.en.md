---
icon: trail_length
hide:
  - announcement
---
# Custom Trails
In Epic Fight, we've introduced a way for users to add their own unique touch to sword trails. Not only can you customize the trail's colors, but you can also change its textures to fit your style!

In this guide, we'll walk through the process of creating custom trails for each weapon or item.

***

{%
include-markdown 'includes/pack_mcmeta_section.md'
%}

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
			<div class="grow-effect" style="--scale-size: 1.03;"><img src="/assets/images/tooltips_example1.png" class="white-border" style="--image-width: 400px;"></div><br>
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
<img src="/assets/images/trail1.png">
<img src="/assets/images/trail2.png">
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