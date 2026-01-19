---
icon: material/meteor
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

{%
include-markdown 'includes/item_skins_folder_path_section.md'
%}

***
### :fontawesome-solid-pencil: Trail customization

<div markdown="1" style="display: flex; align-items: flex-start;">
<div markdown="1" style="flex: 1; margin-right: 20px; max-width:60%;">

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

</div><div markdown="1" style="flex: 1; max-width:40%;">

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

<div markdown="1" style="display: flex; align-items: flex-start;">
<div markdown="1" style="flex: 1; margin-right: 20px; max-width:60%;">

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

</div><div markdown="1" style="flex: 1; max-width:40%; margin-top: 80px;">
These fields customize the trail data for any animation:

|Parameters| Info|
| ------------- | ------------- |
|"trail_effects"| Used in the animation data file to define the trail effects. |
|"start_time"| The time in the animation when the trail should start drawing.|
|"end_time"| The time in the animation when the trail should stop drawing.|
|"joint"| The parent joint for positioning the trail (e.g., ``"Tool_R"``).|
|"item_skin_hand"| Specifies the hand where the item skin data is applied (e.g., ``"main_hand"``).|

</div></div>
<br>
[:octicons-arrow-right-24: Reference](https://github.com/Yesssssman/epicfightmod/tree/1.18.2/src/main/resources/assets/epicfight/animmodels/animations/biped/combat/data)

***