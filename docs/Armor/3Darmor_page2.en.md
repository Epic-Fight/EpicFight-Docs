---
icon: emoji_objects
hide:
  - announcement
---
# Alternate 3D Armor Fixes
Be ware that these solutions may not be as effective as manually patching armors in blender. 

These tools are mainly for modpack and mod developers to test their armor. If you want to properly patch armors and make sure they work in-game, go to **[:octicons-arrow-right-24: [3D Armor Fix]](#)**
[3D Armor Fix]: ../../Armor/3Darmor_page1
***
## **:fontawesome-solid-lightbulb: Making visually flawless armor by using armor debugging mode**

In Minecraft, you can enable the armor debugging mode by pressing F3+Y. This will create an armor model for every frame to check the result of the model generation algorithm. But it could drop the fps seriously, so I don't recommend turning on this function in normal situations.

<center>
<img src="https://user-images.githubusercontent.com/79469058/168334604-6542eff4-c77e-4ef2-a71a-79ddeef91a9a.png" class="white-border">
</center>

> _This message will be shown when you toggle the armor debugging mode._

***
### **:material-package-variant: Exporting the models as resource pack**

In the mod config screen. You can see the "Export Armor Models" button. It will export all generated armor models in the cache as the resource pack. Then apply the resource pack and you don't have to debug the armor models every time you launch Minecraft.

<center>
<img src="https://user-images.githubusercontent.com/79469058/168339170-1965ad10-eb2a-4ab4-919e-3f5d5b0480fd.png" class="white-border">
</center>
***
## **:fontawesome-solid-lightbulb: An Alternative, if previous solution doesn't work**


There are custom armors that won't be fixed, even when using the debug mode. This is because there are various ways to render custom armor. You can choose the alternative way to at least make them visible.

First you have to make them use a default model. You can create your own armor model under,

<center>
<span style="font-size: 24px;">``assets/modid/animmodels/armor/item_name.json``</span>
</center>

In the item_name.json file, type this to assign the default model for the armor.

``` json
{
	"parent": "epicfight:armor/model_name"
}
```
Allowed model_names are: `helmet_default, chestplate_default, leggings_default, boots_default`

Then you can modify the texture of the custom armor to match the default model's texture format.

<center>
<img src="https://user-images.githubusercontent.com/79469058/168444508-f1fb4ebe-5949-40ca-9015-7e920f1e6508.png" width="320" height="160">
</center>

> _The vanilla armor model's texture mapping_

Next save your textures but it should avoid overriding the existing texture because it can mess up the vanilla model. Instead you should save your texture under the path:  
<center>``assets/modid/existing_path/epicfight/texturename``</center>  
<br>
For example let's suppose a path is:
<center>``assets/minecraft/textures/models/armor/iron_layer_1.png``.</center>

You will use:
<center>``assets/minecraft/textures/models/armor/epicfight/iron_layer_1.png``</center>

***
## **:fontawesome-solid-lightbulb: Giving transparency to the custom armors**


Some custom armors have transparency in their texture. You can make them transparent in battle mode by adding these lines.

``` json
{
	"render_properties": {
		"transparent": true
	},
        "vertices": {
                ...
        }
}
```