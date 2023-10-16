# 3D armor & Texture rendering issues

Most of the custom armors are broken in Epic Fight. This is because Epic Fight uses its own model, not only for entities but also for armors. Luckily, Epic Fight has a model generation algorithm based on the custom armors but sometimes it changes them in a bad way. This is the guide for mod pack makers to make custom armor visually flawless without having to tweak our source code. Here are the steps in which you can follow to achieve a patched armor:

***
Required tools:<br>     

* **[BlockBench](https://www.blockbench.net/) (Optional)**<br> 
* **[Blender 2.79](https://download.blender.org/release/Blender2.79/)**<br>  
- **[Blender Json Exporter](https://github.com/Yesssssman/blender-json-exporter)**<br>   
- **[Blender Armor Files](https://drive.google.com/file/d/15xYnpmkmlJaEnw3Y7bykpqmjx1Rr9Koh/view?usp=share_link)**<br>     

***
## 💡 Remaking armors in Blockbench (Optional)
You don't need to remake the armor in blockbench as long as you have the official armor files for the mod you want to patch.

After downloading and installing all three softwares, the first thing you'll want to do is, pick a mod that has an armor set you want to patch, and from there try to recreate the model as accurately as possible. One efficient way you can do this, is usually by looking at the armor in-game and getting the textures from the source code of your desired mod.

 **EXAMPLE:**

<br>![archers_armor](https://user-images.githubusercontent.com/77132244/215155978-874a293e-71ea-4690-adf3-059e45a37ed8.png)
<br>Above is the texture file for the archers_armor of the Dungeon Gear Mod. Lets take a look how we can re-create this armor only with Blockbench<br>  
1. Create a Generic Model so we can export it to blender later on. Preferably name the model something you can recognize, for example, *Archer's Armor*.<br>  
 ![showcase55](https://user-images.githubusercontent.com/77132244/215159597-aac5fdb1-45f1-4084-8f18-50baae9df6f0.jpg)<br>  
2. Make sure you have the CEM Template Loader installed so you can import the vanilla models. (You can download plugins under File/Plugins option).<br>  
3. From there, you'll want to import all vanilla armor models. (You can import the vanilla armor models under Tools/Load CEM Template/Unsupported Entities).<br>  
 ![showcase66](https://user-images.githubusercontent.com/77132244/215161290-8ecb58ec-55e3-4297-8f46-48551a0769d7.jpg)<br>  
4. Import the textures, and change the texture size on the project to the same one as the texture. (Tip: You can apply the textures on the model by dragging and dropping it on each armor part group).<br>  
 ![showcase77](https://user-images.githubusercontent.com/77132244/215230534-6eb84ed6-1afb-4a44-bdf2-3ef98bfccdc6.jpg)<br>  
5. Now, fix the textures until they are in the correct order and look like the original model.<br>  
6. After organizing the textures, press "ctrl + A", and make sure all textures are being used. If you miss any textures, that means you model needs more adjustments and so you'll need to add in extra pieces to the armor. In our case, the Archer's Armor has an extra part to its hat so we'll need to add in a cube and try to guess its rotation, scale and position based on the in-game armor added by Dungeon's gear and the texture size.<br>  
<br>  <a href="url"><img src="https://user-images.githubusercontent.com/77132244/215236925-8fcf459a-e972-4f2d-b43d-65667ce39e1e.jpg" align="center" ></a><br>  
7. As you can see, after a few changes, we got our model to look like the original one, and now we are ready to move on to blender and to patching each individual part.<br>  
![image](https://user-images.githubusercontent.com/77132244/215238157-3ddd8369-6f04-48f5-8d95-0623d833b3be.png)<br>  
8. Now when exporting you armor file, be sure to export it as a .obj, because that's what we'll be using inside blender.<br>  

***
## 💡 Weight Paint and Vertex Correction
Go to [Blender Basics and Tips and Tricks](Blender_page3) for Tips, Tricks and Fixes in how to use Blender

1. First, open blender, go to file/import/Wavefront (.obj), and import your armor file you've just created in blockbench.
2. After this, select one armor part to patch. We will patch the head layer first. So we'll select every cube and part that composes the helmet for the archer's armor. For us, the "head" and "headback.001" are the parts that make up for the helmet so we'll select both and press "ctrl + j" to join all of the parts into one single model _(TIP: To join all parts, you'll want to be in object mode)_.  
**Select**  
![image](https://user-images.githubusercontent.com/77132244/215290753-d88f7ed2-a32b-43bc-9e33-a35c273d04b9.png)  
**Join** _(Feel free to rename the new joined model the armor part it corresponds to, in our case i later renamed it "Helmet")_.  
![image](https://user-images.githubusercontent.com/77132244/215290768-f91985a4-31a5-4606-bd25-91b150ba0119.png)  
_(In these screenshots all the other armor parts are hidden)_
3. In object mode, correct the import rotation, and postion by clicking _"alt + r"_ & _"alt + g"_.
4. On edit mode, rotate the model and correct its position to the original location before you reset the rot/pos on object mode.
5. Now after fixing the import rotation, we'll parent the model to the armature by going to object mode, selecting the helmet model and also the armature, going over to Object/Parent/Armature Deform/With Empty Groups/With Empty Groups. Now You've successfully parented the model to the armature, lets head over to weight paint. _(TIP: You can select two things by pressing shift while right clicking them. Make sure both are selected in object mode and not pose or edit mode)_
![image](https://user-images.githubusercontent.com/77132244/218175943-dcde10ab-9f45-4fb3-a1ec-a2ec7f851483.png)
![image](https://user-images.githubusercontent.com/77132244/218176163-4972a8bf-a70d-4570-aafe-a0b9a0bbcb85.png)
6. By selecting the helmet model, and switching from object mode to weight paint, we'll finally apply the vertex group deformations so the helmet follows the head while our player plays any animation.
![image](https://user-images.githubusercontent.com/77132244/218176695-4cfafe68-7010-4450-a5f8-93e3dff1f3dd.png)
7. To apply the weight paint, make sure you can see the vertices and you have wireframe mode enabled like in the following image:
![Showcase89](https://user-images.githubusercontent.com/77132244/218177435-f9d01478-fbe0-45f9-b754-adf5d2efa745.jpg)
8. Now you can choose from a range of brushes to apply the weight paint, but the ones we mainly use is subtract and add
![image](https://user-images.githubusercontent.com/77132244/218177593-95794246-6d9a-4caf-afa2-636b784b8d3a.png)
9. Select the desired vertex group on the right, the one we'll be working with is the head group as we are patching a helmet.
![Showcase99](https://user-images.githubusercontent.com/77132244/218178265-69388152-b465-45e5-8ccd-cfe3e430dfb7.jpg)
10. Now simply go on your way painting the whole model so it follows the whole head. In the end you'll be able to get something like this:
![image](https://user-images.githubusercontent.com/77132244/218178527-210b4b77-5f16-4cf7-9310-6c2b3e2ce83a.png)
11. You can test to see if you've successfully parented and weight painted the helmet to the head by going over to your armature in pose mode and rotating the head bone around. If your model follows the head bone, then its correct, if not, then please go back a few steps and recheck to see if you've missed something.
![2023-02-10-16-20-11](https://user-images.githubusercontent.com/77132244/218179173-df15dcba-97fa-4081-ad1d-cf1ffbcd92e8.gif)
***
## 💡 Exporting your patched models
Now that you've patched yourt models you'll want to export your work and apply the changes in game. But how can you do that? Well it's really simple.

1. Make sure you don't have any armor parts or unwanted models on your project and only the desired armor part to be exported like so. _(TIP: You can't export two armor parts at once, so export one at a time and delete all the other ones.)_  
![image](https://user-images.githubusercontent.com/77132244/218179518-18c8d979-68af-44ff-989a-aa55ebb6c239.png)
2. After cleaning any unwanted models or armor parts that won't be exported, head over to File/Export/Animated Minecraft Model (.json)  
![image](https://user-images.githubusercontent.com/77132244/218179838-bbc7d557-8525-4ab8-beaf-41211bf334fd.png)
3. Make sure you only have Export Mesh selected as we're only exporting an armor and not an animation or custom armature.  
![image](https://user-images.githubusercontent.com/77132244/218179992-0f54bb48-99b6-45c2-8166-107668b200e7.png)
4. Check the export name to see if it matches the custom armor registry name in-game.  
![image](https://user-images.githubusercontent.com/77132244/218180136-b229edd0-3941-4a68-b82b-dfc0fcf80bca.png)
5. Click Export to Json Minecraft after you are done.  
![image](https://user-images.githubusercontent.com/77132244/218180246-7c04c4ad-ad96-4361-b43a-3ff434de419d.png)
6. Now go to your game, select resourcepacks, and inside the resourcepacks folder, create a new folder. Inside it, you can create your pack.mcmeta like so: 
### Making the pack.mcmeta file

First, you'll need to create a pack.mcmeta by making a normal txt file and renaming it to pack.mcmeta (make sure filename extensions are turned on).

After that edit it and add these lines of code for your datapack to work.
```JSON
{
	"pack":{
		"pack_format":6,
		"description":"A short description on your pack"
		}
}
```

### pack_format Values

| Version | Value |
| ------------- | ------------- |
| 1.16.2–1.16.5 | 6 |
| 1.17.x | 7 |
| 1.18.2 | 8 |
| 1.19.2 | 9 |
| 1.20.1 | 15 |

### Making the folder path

You'll need to make a series of folders with the following names. Every folder or file needs to be inside the last one.

``assets -> "modid" -> animmodels -> armor -> "registryname".json`` _(Drop your exported armor file here)_


🎉 **Congratulations, you've successfully patched your armor.** 🎉


**_A few easier solutions for armor patching here: [Other solutions for 3D armor glitches](3Darmor_page2)_**