---
icon: file-import-solid
hide:
  - announcement
---

# Asset Importing
 
<div class="grid cards" markdown>

-	<center>__Importing Assets Tutorial__</center>
	
	---
	
	<center><iframe width="860" height="483.75" src="https://www.youtube.com/embed/bslcU82UoK0?si=hSOiqojtAZ3nafyF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class=img-rounded></iframe></center>

</div>

***

## :material-monitor: Accessing the Import Screen

You can access the asset import screen via the selection menus for animations or models (both in the Weapon Type & the Mob Capability editor screens).

See the images below in weapon types editor:

<div class="showcasemobeditor">
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/weapon-type-animations.png?raw=true" class="img-rounded white-border">
	<div class="glow-box2" title="Click either here to access the import screen" style="--default-top: 57.9%; --default-left: 28.3%; --default-width: 1.8%; --default-height: 3%;"></div>
	<div class="glow-box2" title="Or here to access the import screen" style="--default-top: 85.9%; --default-left: 28.3%; --default-width: 1.8%; --default-height: 3%;"></div>
</div>
<br>
<div class="showcasemobeditor">
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/weapon-type-animations2.png?raw=true" class="img-rounded white-border">
	<div class="glow-box2" title="Click here to open the import screen" style="--default-top: 12.6%; --default-left: 80%; --default-width: 18.3%; --default-height: 4%;"></div>
</div>
<br>
<div class="showcasemobeditor">
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/weapon-type-animations3.png?raw=true" class="img-rounded white-border">
	<div class="glow-box2" title="Click here to finally open the import screen" style="--default-top: 12.6%; --default-left: 80%; --default-width: 18.3%; --default-height: 4%;"></div>
</div>
<br>
You should be left with the following screen:
<div class="showcasemobeditor">
	<img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/weapon-type-animations4.png?raw=true" class="img-rounded white-border">
	<div class="glow-box2" title="Drop down the files here" style="--default-top: 2.6%; --default-left: 1%; --default-width: 42.6%; --default-height: 89%;"></div>
</div>

Mind that the animation/model files to be imported should be exported from blender utilizing our custom exporter. See more about blender & how to start utilizing it with epic fight [Here]

[Here]: ../page1/

## :fontawesome-solid-eye: Preview, Animations and Armatures

Imported models will appear in the preview screen. If your model file includes armature data, it’s automatically added to the Armatures grid.

Models with the same hierarchy in Blender can share an armature. You don’t need to re-import an armature if it already exists. *(Example: Player and Vindicator models in wireframe mode)*

### :fontawesome-solid-person-walking: Configure Animation Settings

* Select an animation type:  
   \- **Static Animations:** Used for basic living motions.  
   \- **Movement Animations:** Adjust playback speed based on player movement.  
   \- **Attack Animations:** Includes strike phases to deal damage.  
   (Define properties like transition time, repeat, and priority.)
   
* Layering System  
   \- Understand that Epic Fight has four animation layers: Base and three Composite layers (lowest, middle, highest priority).  
   \- Composite layers can include joint masks to apply animations selectively. *(Example: Greatsword animations in Idle vs. Running states)*  
   
### :material-sword: Attack Animations

1. Defining Phases  
   \- **Anticipation:** Players can track targets.  
   \- **Pre-delay:** Movement is locked.  
   \- **Contact:** Colliders strike entities.  
   \- **Recovery:** Allows actions like dodging or skills.  
   \- **End:** Returns to living animations.  
2. Collider Settings  
   \- Set colliders for animations or use default item capabilities.  
   \- A *red box* appears in the preview to indicate collision points.
   
#### Additional Animation Type information

* **Basic Attack Animations:** For weapon combo sequences.
* **hort and Long Hit Animations:** Handle stun effects with variable durations.
* **Knockdown Animations:** For knockdown stuns, with dodge skills reducing stun time.

***