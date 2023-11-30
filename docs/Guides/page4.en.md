# Custom Trails
In epic fight we've added a way for users to create and add their own unique taste to sword trails. Not only are you able to change trail's colors but also their textures to fit your needs !

To create a custom trail texture, you can simply add textures and reference them inside your .json trail file (we'll get to that soon).

An example of trail texture would be the one used inside of epic fight [here](https://github.com/Yesssssman/epicfightmod/tree/1.18.2/src/main/resources/assets/epicfight/textures/particle). 
*(Click on swing_trail or katana_trail to see the examples)*

***

## 🦶 Getting Started
* First, create a folder inside of your texturepack folder like so (its name doesn't matter):
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/c549e612-7475-4a3e-8f83-f99a3c0d6764)

*(You can access this folder by easily opening minecraft, and heading to Options > Resource Packs...)*

* Inside of it, create a new folder called assets, and a new text file called pack.mcmeta 
*(Make sure that you are editting the file extension and not only its name, as you need to convert it from a .txt to a .mcmeta)*

Inside of the mcmeta file put this:
*(You can edit the description as you want)*
```
{
	"pack": {
		"pack_format": X,
		"description": "False World Modpack TrailPack. Made by White Rave"
	}
}
```

*(In pack_format, you should put one of the following options below depending on your minecraft version)*

| Version | Value |
| ------------- | ------------- |
| 1.16.2–1.16.5 | 6 |
| 1.17.x | 7 |
| 1.18.2 | 8 |
| 1.19.2 | 9 |
| 1.20.1 | 15 |

***

### ✏️ Trail .Json Customization

Now, create the following folder structure:
**``assets/"modid"/item_skins/"item_registry_name".JSON``**
* To check the mod id and the item's registry name, you can click f3 + h inside of minecraft and hover your mouse over the item, should be something like *"cool_modid:cool_sword_item_id"*

After you've created the .JSON file you can now proceed to actually give your trails your own taste. Follow the example below to see how the .JSON should look like:
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

This is an example JSON file thats used for the diamond_dagger item in epic fight. You can use any RGB color picker to change the color, and you can also change the values around until you get what you wanted.

Here's a list with the possible parameters that can be used inside of the weapon trail .json

|Parameters| Info|
| ------------- | ------------- |
|"trail"| In item skin file|
|"color"| The RGB value of said trail|
| "begin_pos"| The begining position of virtual stick that draws the trail for each frame|
|"end_pos"| The end position of virtual stick that draws the trail for each frame|
|"lifetime"| The ammount of time that trail should withstand|
|"interpolations"| The number of the vertex created for each tick|
|"texture_path"| The texture path for your custom trail|
|"particle_type"| The trail's registry name|

***
### ✏️ Custom Trail Textures
You can also create new trail textures, by simply making the following structure folder
**``assets/epicfight/textures/particle/"modid"``**
Inside of this "modid" folder, you can create as many textures as you want, and simply reference their location in the trail .json customization file under  *``"texture_path"``*

**Here are some examples of trail textures used in epic fight:**
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/eccfefb9-f9f8-4518-a2f6-eab3a2c4e3f8)
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/8421ff50-0f75-4308-8793-fb4be3f60a23)

You can check them out by going to our repository [here](https://github.com/Yesssssman/epicfightmod/tree/1.18.2/src/main/resources/assets/epicfight/textures/particle)

***

### ✏️ Trail data customization
*[Reference](https://github.com/Yesssssman/epicfightmod/tree/1.18.2/src/main/resources/assets/epicfight/animmodels/animations/biped/combat/data)*
You can also have an in depth customization of the trail data for each animation. Above you can check the reference in our repo, and see how it's used in multiple animation datas.

(Make sure to use this folder structure: **``assets/epicfight/animmodels/animations/biped/combat/data/animation_name.json``**)
*Here's an example of custom trail data:*
```json	"trail_effects": [
		{
			"start_time": 0.05,
			"end_time": 0.15,
			"joint": "Tool_R",
			"item_skin_hand": "main_hand"
		}
	]
}
```

You can use the following parameters to change the data in any animation:

|Parameters| Info|
| ------------- | ------------- |
|"trail_effects"| In animation data file|
|"start_time"|  The animation time when the trailer should start drawing|
|"end_time"| The animation time when the trailer should end drawing|
|"joint"| The parent joint of trail position|
|"item_skin_hand"| The hand where the item skin data should be called|

***