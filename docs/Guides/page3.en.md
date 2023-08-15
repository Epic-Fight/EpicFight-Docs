# Getting started with blender

Epic fight uses custom animations for multiple actions in game, from drinking, eating to even attack combos. These animations are handled by Blender, a 3D open source software for modeling, animating, texturing, composition, rendering and video editing.

It may seem overwhelming to work with blender, but here I'll only be teaching you the absolute necessary to work with epic fight.

(Note: Epic Fight uses Blender 2.79)
***
## ⬇️ Installing blender
To install Blender (2.79) head to the following website:

* [Blender 2.79](https://download.blender.org/release/Blender2.79/)

Make sure to select the correct version that corresponds to your Operational System. 
(Here we'll be using Win 64x bits)
 
### Extracting and Running ...
After you downloaded the correct file from the blender index, you can extract the files with your program of choice. (We recommend you to use something like 7zip)

Once you've extracted the files, make sure Blender runs. You can test that by opening the folder hierarchy and executing Blender.exe. If a window like this is opened, then it means you've successfully installed blender.
***
## ⬇️ Json exporter
To intall our custom made Blender Exporter, go to our repository and download our master branch. Like so:
[Blender Json Exporter](https://github.com/Yesssssman/blender-json-exporter)

![showcase98](https://github.com/Yesssssman/epicfightmod/assets/77132244/95ce0412-b498-466b-ae1b-7a79a1ab27a1)

1.  Go to the folder where blender is installed, move all files under /2.79/scripts/addons/xxxxxxxx/.  (You can create a new folder that's represented here by the multiple X )
2. Go to Blender > File > User Preferences > Add-ons, And find an add-on named "Import-Export: Minecraft Model Json Exporter"
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/b327a99b-ca2e-44d5-bc32-554a4d56be1b)  

3.   Check the checkbox and Click "Save User Settings".
4. As you can see when you click to export, you'll be able to generate a json file, in which you can choose to select 3 options, Mesh, Animations and Armature, but we'll see those later.
***
## 💡 Learning the basics
First of all we should learn how to actually work with blender, how to move around a few useful keybinds and what each mode does. 
As a start, we'll be learning how to move around with blender.
***
### 🎥 Moving your camera
To move your camera rotation, you can press your mouse wheel and move your mouse with it pressed. After you do that, you'll probably see something similar to this:
![Gif1](https://i.imgur.com/i2nRfF3.gif)

Now if you want to move your camera's location you can press your middle mouse button + shift. You'll be able to see something like this:
![Gif2](https://i.imgur.com/Ozac1y0.gif)
Good work! Now you know how to move your camera around.
***
### ✏️ Edit & Object mode basics
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/af9b356f-f546-47cd-9c86-e4900cede9c8) ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/d50c49ca-8ab2-40df-b47e-acb193092423)

In short, edit mode is used to edit objects geometry and their real location, rotation and scale in a project. We often use edit mode to change models in ways that are simply not practical with Object mode. One of the ways we use edit mode is to add in Bones to a rig and their real position (and by real position i mean their actual position, scale, rotation in a project, where they'll go after you reset their object location rotation and scale)

So lets say you have a rig and you want to create a new animation, instead of having to manually change each and every bone to a new position, you can simply reset the whole skeleton to their original position that was set in Edit Mode, and from there work on a new animation, improving your workflow and making it easier to create new animations or frames to already existing ones.

We rarely use Object mode in epic fight, but basically, Object mode allows you to edit objects individually. You are also able to resize, change location and location of objects in Object Mode.

Watch [this video](https://www.youtube.com/watch?v=n1lCK8WH62k&t=593s&ab_channel=CGCookie) if you want a more in depth explanation on what Edit and Object Mode does.
***
### 🚶 Pose mode
We often use pose mode in animating as its very handy when it comes to making the workflow faster. With pose mode you are able to change each and every bone's individual coordinate and rotation. Pose mode is mainly made to be used with Bones as it can easily change characters's poses.

Here's a [video for you to watch](https://www.youtube.com/watch?v=x5an6UV5r9c&t=146s&ab_channel=TutorTube) so you can have a visual explanation of what you can do with pose mode.
***
### 🦴 Adding bones and Deleting stuff
One of the ways you can add bones is by going into Object Mode and selecting Add > Armature > Single Bone

<p align="center"><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/f34f4e8a-dab5-4aae-b215-4a60b8aaea81" alt="Image" style="display: block; margin: 0 auto;"/> </p>

Alternatively you can press **Shift+A** to open the same menu and add a Single Bone.

To delete stuff you can simply hit the Del key on your keyboard and it'll present you with a promp asking if you really want to delete such thing.
***
### 🔴 AutoKey and Starting with animations
First head to the animations tab on your project. (TIP: You will probably be in default mode so try and find that)

![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/87b17fb4-6d73-4ebd-83e9-0e3935247b34)       >       ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/e80f55c4-5eaa-4d9e-ba3d-637a099b5504)

Now go to Pose mode, and make sure you've created a new action like this:
(Make sure to select action editor)
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/20b88013-524f-4e7b-ae11-b7676cf29239)
Make your first frame by pressing "i" and saving what you desire. 
Loc = Location
Rot = Rotation

Don't mind the other types of saving a keyframe, for now all we want should be the default saving options.
(No visual or delta saving)

You can use Dope Sheet to see where each frame is located, and you can change the animation stant and ending frames in the timeline.
Dope Sheet Summary:
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/64a1a133-90a9-4a66-97b1-57acd0a1dcf8)
Timeline where you want to set the initial and end frame.
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/defbf770-1edc-44d0-a0b0-839ca33e0fcd)
You can use these buttons to play your animation or move around frames.
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/eb7f0c29-c0c8-459f-9b6e-bd177c838966)
You may also use the left and right arrows on your keyboard to go to the next frame.
***
#### AutoKey
AutoKey is a handy tool used to auto register keyframes when you make an alteration to a bone or object in a scene. You can activate it by clicking on this red button: ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/03954366-7866-4399-8e61-7379a0e527f9)
(Mind that auto key can be very annoying at times)
***
### 🔘 Display modes for objects
You can change your display mode so you have different perspectives of each object. 
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/bf817606-2367-47aa-932e-5d8b1ba48268)

For example, we have WireFrame mode which allows you to disable an object's texture and trsnaparency so you are only left with a rough wireframe of that object, allowing you to easily see whats on the other side.

We also have Texture mode which will display that objects texture.

And solid mode which will make the selected object have a gray and boring texture, often used to check shadows projections on a object.
***
### ✒️ Weight paint
Weight paint is probably one of the most used tools when it comes to creating a rig. It serves as a way to determine the weight of influnce that each vertex group (bone) will have over a vertex. It allows you to basically make the animation process easier.

Imagine if you had to manually transform the mesh of your object for each pose and key frame you wanted to make, it would take months to make a single animation as it would be very time consuming, so Bones where created so now you only need to interact with them, but how do you determine the mesh transformations depending on each bone, well thatsll all calculated by weight paint.

There isn't a proper way to show you how to deal with weight paint, but basically, when assigning a bone group to an object it'll create a vertex group which you can set the weight for each vertex. Mind that all vertecies need to be assigned to a vertex group for it to be exportable.

Here are two videos explaining how to use / what weight paint does. (I recommend watching them in order)

* [Video 1](https://www.youtube.com/watch?v=4fICQmBEt4Y&ab_channel=RoyalSkies)  
* [Video 2](https://www.youtube.com/watch?v=5M7YO3SYJ_U&ab_channel=Yami3D)
***
### 🟪 UV Mapping & Texturing

UV Mapping stands for "UV coordinates mapping" in the field of computer graphics and 3D modeling. It is a technique used to map 2D textures onto 3D surfaces of a computer-generated object. The term "UV" refers to the 2D coordinate system used to represent the 2D texture image, where U represents the horizontal axis and V represents the vertical axis.

In epic fight, we mostly use UV mapping to fix issues in between bends (where belnder may have issues determining where to use certain parts of the texture), and to properly map out texture for each plane side of a cube.

You can change your screen to UV editting mode by going to the top of your screen and changing the screen layout.
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/3fcf3343-f5ae-418b-9797-9704de66d819)




1. You can create new textures by clicking this bottom button
<br> 
 <img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/742e9658-1832-48d3-a681-005a417226ae" alt="image" style="float:left; margin-right:10px;"/>
<br> 
<br>
2. You can also assign existing textures by clicking this:
 <img  src="https://github.com/Yesssssman/epicfightmod/assets/77132244/12a57d9a-ad48-4daf-8830-806afc9b98cf"  alt="Image"  style="float:left; margin-right:10px;" />  

<br> 
***
#### Fixing issues in between bends (Loop Cuts)
If you are a developer or someone looking to make entity models you may find yourself having to add bends to your models. One of the most commonly occuring issues is when blender fails to determine which texture should be used in that narrow space in between loop cuts.

<p align="center">  <img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/933a7101-0db1-480d-8af8-f58d928ecd94" alt="Image" style="display: block; margin: 0 auto;" />  </p>
<p align="center">This is an example of what you may face when patching armors, making entities or overall adding bends</p>

Don't worry as this is easily fixable by scaling the top or bottom faces of that model two times. You can press:
* Ctrl + (numpad_plus) - select the next set of vertices 
* Ctrl + (numpad_minus) - unselect the last selected set of vertices 

This is probably what you'll be left with:

![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/98b8f3fa-0fa7-4bb6-812f-39f5ea358ff3) 

In UV edit mode, you can select the planes that have overlapping texture and you can extend their vertexs to use the upper part of the texture, or the lower according to their location.

![2023_01_21_15_16_55_33](https://github.com/Yesssssman/epicfightmod/assets/77132244/99ed4706-9f78-4955-9667-1925a78258b2)
Warning: Make sure to select UV selection and display mode to Edge.

***
### 🧲 Snap Transform
Snap allows you to move objects in precise ways. Its main function is to allow you to alling other objects with each other more easily, kinda working like a ruler when you want to make a straight line.
You can enable snapping by clicking the little magnet icon near your 3D orientation transform options.
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/c2f16673-dcb5-4f8f-8b02-59f3c3c79860)
***
Thats it for now !
If you want to start learning blender, i suggest you look this playlist series made by Derek banas.
**https://www.youtube.com/playlist?list=PLpdCRuhtdVcuwfyl97L7TjeChtx0k8vcb**



 
