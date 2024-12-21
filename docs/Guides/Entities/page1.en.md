---
icon: pets
hide:
  - announcement
---
# Custom entity datapack


Epic Fight isn't normally compatible with other mods, especially with the entities. So you have to manually define the entity's model, animations, and other attribute values. This can be achieved by using Datapack.
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
## :fontawesome-solid-lightbulb: Defining the JSON File and Directory Structure


Before creating a JSON file, it's important to determine the registry name of the entity you want to make compatible. In Minecraft, you can find a list of all currently registered entities by using the <code>/summon</code> command in the game. When you type <code>/summon</code> and press the Tab key, it will display a list of available entity registry names. These names are what you will use to reference the entities in your JSON file.

<center>
<img src="https://user-images.githubusercontent.com/79469058/166224784-b556e090-4e56-45bd-ad80-ccc33c06d859.png" class="img-rounded white-border"> 
</center>

Most registry names follow the format <code>modid:entityname</code>, where <code>modid</code> represents the identifier for the mod, and <code>entityname</code> is the specific name of the entity. Once you have identified the registry name, you can create the JSON file in the appropriate directory structure based on this format. The file should be placed under the following path: `data/"modid"/epicfight_mobpatch/"entityname".json`
***

## **:fontawesome-solid-lightbulb: Obtaining armature, animation and model tags -**

??? abstract "Model Entries"
 
	````java linenums="45" title="src/main/java/yesman/epicfight/api/client/model/Meshes.java"
	    public static HumanoidMesh ALEX;
		public static HumanoidMesh BIPED;
		public static HumanoidMesh BIPED_OLD_TEX;
		public static HumanoidMesh BIPED_OUTLAYER;
		public static HumanoidMesh VILLAGER_ZOMBIE;
		public static CreeperMesh CREEPER;
		public static EndermanMesh ENDERMAN;
		public static HumanoidMesh SKELETON;
		public static SpiderMesh SPIDER;
		public static IronGolemMesh IRON_GOLEM;
		public static HumanoidMesh ILLAGER;
		public static VillagerMesh WITCH;
		public static RavagerMesh RAVAGER;
		public static VexMesh VEX;
		public static PiglinMesh PIGLIN;
		public static HoglinMesh HOGLIN;
		public static DragonMesh DRAGON;
		public static WitherMesh WITHER;
	````
	[View on Github :simple-github:](https://github.com/Yesssssman/epicfightmod/blob/78b69b575d8953f44538cd5b312768a1e07f392b/src/main/java/yesman/epicfight/api/client/model/Meshes.java#L45-L64){ .md-button }

??? abstract "Armature Entries"
	
	````java linenums="48" title="src/main/java/yesman/epicfight/gameasset/Armatures.java"
	    public static HumanoidArmature BIPED;
		public static CreeperArmature CREEPER;
		public static EndermanArmature ENDERMAN;
		public static HumanoidArmature SKELETON;
		public static SpiderArmature SPIDER;
		public static IronGolemArmature IRON_GOLEM;
		public static RavagerArmature RAVAGER;
		public static VexArmature VEX;
		public static PiglinArmature PIGLIN;
		public static HoglinArmature HOGLIN;
		public static DragonArmature DRAGON;
		public static WitherArmature WITHER;
	````
	[View on Github :simple-github:](https://github.com/Yesssssman/epicfightmod/blob/78b69b575d8953f44538cd5b312768a1e07f392b/src/main/java/yesman/epicfight/gameasset/Armatures.java#L48-L59){ .md-button }

??? abstract "Animation Entries"
	````java linenums="134" title="src/main/java/yesman/epicfight/gameasset/Animations.java"
		public static StaticAnimation DUMMY_ANIMATION = new StaticAnimation();
		public static StaticAnimation BIPED_IDLE;
		public static StaticAnimation BIPED_WALK;
		public static StaticAnimation BIPED_RUN;
		public static StaticAnimation BIPED_SNEAK;
		public static StaticAnimation BIPED_SWIM;
		public static StaticAnimation BIPED_FLOAT;
		public static StaticAnimation BIPED_KNEEL;
		public static StaticAnimation BIPED_FALL;
		public static StaticAnimation BIPED_FLYING;
		public static StaticAnimation BIPED_CREATIVE_IDLE;
		public static StaticAnimation BIPED_CREATIVE_FLYING;
		public static StaticAnimation BIPED_CREATIVE_FLYING_FORWARD;
		public static StaticAnimation BIPED_CREATIVE_FLYING_BACKWARD;
		public static StaticAnimation BIPED_MOUNT;
		public static StaticAnimation BIPED_SIT;
		public static StaticAnimation BIPED_JUMP;
		public static StaticAnimation BIPED_DEATH;
		public static StaticAnimation BIPED_DIG_MAINHAND;
		public static StaticAnimation BIPED_DIG_OFFHAND;
		public static StaticAnimation BIPED_DIG;
		public static StaticAnimation BIPED_RUN_SPEAR;
		public static StaticAnimation BIPED_HOLD_GREATSWORD;
		public static StaticAnimation BIPED_HOLD_UCHIGATANA_SHEATHING;
		public static StaticAnimation BIPED_HOLD_UCHIGATANA;
		public static StaticAnimation BIPED_HOLD_TACHI;
		public static StaticAnimation BIPED_HOLD_LONGSWORD;
		public static StaticAnimation BIPED_HOLD_LIECHTENAUER;
		public static StaticAnimation BIPED_HOLD_SPEAR;
		public static StaticAnimation BIPED_HOLD_DUAL_WEAPON;
		public static StaticAnimation BIPED_HOLD_CROSSBOW;
		public static StaticAnimation BIPED_HOLD_MAP_TWOHAND;
		public static StaticAnimation BIPED_HOLD_MAP_OFFHAND;
		public static StaticAnimation BIPED_HOLD_MAP_MAINHAND;
		public static StaticAnimation BIPED_HOLD_MAP_TWOHAND_MOVE;
		public static StaticAnimation BIPED_HOLD_MAP_OFFHAND_MOVE;
		public static StaticAnimation BIPED_HOLD_MAP_MAINHAND_MOVE;
		public static StaticAnimation BIPED_WALK_GREATSWORD;
		public static StaticAnimation BIPED_WALK_SPEAR;
		public static StaticAnimation BIPED_WALK_UCHIGATANA_SHEATHING;
		public static StaticAnimation BIPED_WALK_UCHIGATANA;
		public static StaticAnimation BIPED_WALK_TWOHAND;
		public static StaticAnimation BIPED_WALK_LONGSWORD;
		public static StaticAnimation BIPED_WALK_LIECHTENAUER;
		public static StaticAnimation BIPED_RUN_GREATSWORD;
		public static StaticAnimation BIPED_RUN_UCHIGATANA;
		public static StaticAnimation BIPED_RUN_UCHIGATANA_SHEATHING;
		public static StaticAnimation BIPED_RUN_DUAL;
		public static StaticAnimation BIPED_RUN_LONGSWORD;
		public static StaticAnimation BIPED_UCHIGATANA_SCRAP;
		public static StaticAnimation BIPED_LIECHTENAUER_READY;
		public static StaticAnimation BIPED_HIT_SHIELD;
		public static StaticAnimation BIPED_CLIMBING;
		public static StaticAnimation BIPED_SLEEPING;
		public static StaticAnimation BIPED_BOW_AIM;
		public static StaticAnimation BIPED_BOW_SHOT;
		public static StaticAnimation BIPED_DRINK;
		public static StaticAnimation BIPED_EAT;
		public static StaticAnimation BIPED_SPYGLASS_USE;
		public static StaticAnimation BIPED_CROSSBOW_AIM;
		public static StaticAnimation BIPED_CROSSBOW_SHOT;
		public static StaticAnimation BIPED_CROSSBOW_RELOAD;
		public static StaticAnimation BIPED_JAVELIN_AIM;
		public static StaticAnimation BIPED_JAVELIN_THROW;
		public static StaticAnimation BIPED_HIT_SHORT;
		public static StaticAnimation BIPED_HIT_LONG;
		public static StaticAnimation BIPED_HIT_ON_MOUNT;
		public static StaticAnimation BIPED_LANDING;
		public static StaticAnimation BIPED_KNOCKDOWN;
		public static StaticAnimation BIPED_BLOCK;
		public static StaticAnimation BIPED_ROLL_FORWARD;
		public static StaticAnimation BIPED_ROLL_BACKWARD;
		public static StaticAnimation BIPED_STEP_FORWARD;
		public static StaticAnimation BIPED_STEP_BACKWARD;
		public static StaticAnimation BIPED_STEP_LEFT;
		public static StaticAnimation BIPED_STEP_RIGHT;
		public static StaticAnimation BIPED_KNOCKDOWN_WAKEUP_LEFT;
		public static StaticAnimation BIPED_KNOCKDOWN_WAKEUP_RIGHT;
		public static StaticAnimation BIPED_DEMOLITION_LEAP_CHARGING;
		public static StaticAnimation BIPED_DEMOLITION_LEAP;
		public static StaticAnimation BIPED_PHANTOM_ASCENT_FORWARD;
		public static StaticAnimation BIPED_PHANTOM_ASCENT_BACKWARD;
		public static StaticAnimation BIPED_MOB_ONEHAND1;
		public static StaticAnimation BIPED_MOB_ONEHAND2;
		public static StaticAnimation BIPED_MOB_GREATSWORD;
		public static StaticAnimation BIPED_MOB_TACHI;
		public static StaticAnimation BIPED_MOB_SPEAR_ONEHAND;
		public static StaticAnimation BIPED_MOB_SPEAR_TWOHAND1;
		public static StaticAnimation BIPED_MOB_SPEAR_TWOHAND2;
		public static StaticAnimation BIPED_MOB_SPEAR_TWOHAND3;
		public static StaticAnimation BIPED_MOB_SWORD_DUAL1;
		public static StaticAnimation BIPED_MOB_SWORD_DUAL2;
		public static StaticAnimation BIPED_MOB_SWORD_DUAL3;
		public static StaticAnimation BIPED_MOB_LONGSWORD1;
		public static StaticAnimation BIPED_MOB_LONGSWORD2;
		public static StaticAnimation BIPED_MOB_UCHIGATANA1;
		public static StaticAnimation BIPED_MOB_UCHIGATANA2;
		public static StaticAnimation BIPED_MOB_UCHIGATANA3;
		public static StaticAnimation BIPED_MOB_DAGGER_ONEHAND1;
		public static StaticAnimation BIPED_MOB_DAGGER_ONEHAND2;
		public static StaticAnimation BIPED_MOB_DAGGER_ONEHAND3;
		public static StaticAnimation BIPED_MOB_DAGGER_TWOHAND1;
		public static StaticAnimation BIPED_MOB_DAGGER_TWOHAND2;
		public static StaticAnimation BIPED_MOB_THROW;
		public static StaticAnimation CREEPER_IDLE;
		public static StaticAnimation CREEPER_WALK;
		public static StaticAnimation CREEPER_HIT_LONG;
		public static StaticAnimation CREEPER_HIT_SHORT;
		public static StaticAnimation CREEPER_DEATH;
		public static StaticAnimation DRAGON_IDLE;
		public static StaticAnimation DRAGON_WALK;
		public static StaticAnimation DRAGON_WALK_PROCEDURAL;
		public static StaticAnimation DRAGON_FLY;
		public static StaticAnimation DRAGON_DEATH;
		public static StaticAnimation DRAGON_GROUND_TO_FLY;
		public static StaticAnimation DRAGON_FLY_TO_GROUND;
		public static StaticAnimation DRAGON_ATTACK1;
		public static StaticAnimation DRAGON_ATTACK2;
		public static StaticAnimation DRAGON_ATTACK3;
		public static StaticAnimation DRAGON_ATTACK4;
		public static StaticAnimation DRAGON_ATTACK4_RECOVERY;
		public static StaticAnimation DRAGON_FIREBALL;
		public static StaticAnimation DRAGON_AIRSTRIKE;
		public static StaticAnimation DRAGON_BACKJUMP_PREPARE;
		public static StaticAnimation DRAGON_BACKJUMP_MOVE;
		public static StaticAnimation DRAGON_BACKJUMP_RECOVERY;
		public static StaticAnimation DRAGON_CRYSTAL_LINK;
		public static StaticAnimation DRAGON_NEUTRALIZED;
		public static StaticAnimation DRAGON_NEUTRALIZED_RECOVERY;
		public static StaticAnimation ENDERMAN_IDLE;
		public static StaticAnimation ENDERMAN_WALK;
		public static StaticAnimation ENDERMAN_DEATH;
		public static StaticAnimation ENDERMAN_HIT_SHORT;
		public static StaticAnimation ENDERMAN_HIT_LONG;
		public static StaticAnimation ENDERMAN_NEUTRALIZED;
		public static StaticAnimation ENDERMAN_CONVERT_RAGE;
		public static StaticAnimation ENDERMAN_RAGE_IDLE;
		public static StaticAnimation ENDERMAN_RAGE_WALK;
		public static StaticAnimation ENDERMAN_GRASP;
		public static StaticAnimation ENDERMAN_TP_KICK1;
		public static StaticAnimation ENDERMAN_TP_KICK2;
		public static StaticAnimation ENDERMAN_KNEE;
		public static StaticAnimation ENDERMAN_KICK1;
		public static StaticAnimation ENDERMAN_KICK2;
		public static StaticAnimation ENDERMAN_KICK_COMBO;
		public static StaticAnimation ENDERMAN_TP_EMERGENCE;
		public static StaticAnimation SPIDER_IDLE;
		public static StaticAnimation SPIDER_CRAWL;
		public static StaticAnimation SPIDER_DEATH;
		public static StaticAnimation SPIDER_HIT;
		public static StaticAnimation SPIDER_NEUTRALIZED;
		public static StaticAnimation SPIDER_ATTACK;
		public static StaticAnimation SPIDER_JUMP_ATTACK;
		public static StaticAnimation GOLEM_IDLE;
		public static StaticAnimation GOLEM_WALK;
		public static StaticAnimation GOLEM_DEATH;
		public static StaticAnimation GOLEM_ATTACK1;
		public static StaticAnimation GOLEM_ATTACK2;
		public static StaticAnimation GOLEM_ATTACK3;
		public static StaticAnimation GOLEM_ATTACK4;
		public static StaticAnimation HOGLIN_IDLE;
		public static StaticAnimation HOGLIN_WALK;
		public static StaticAnimation HOGLIN_DEATH;
		public static StaticAnimation HOGLIN_ATTACK;
		public static StaticAnimation ILLAGER_IDLE;
		public static StaticAnimation ILLAGER_WALK;
		public static StaticAnimation VINDICATOR_IDLE_AGGRESSIVE;
		public static StaticAnimation VINDICATOR_CHASE;
		public static StaticAnimation VINDICATOR_SWING_AXE1;
		public static StaticAnimation VINDICATOR_SWING_AXE2;
		public static StaticAnimation VINDICATOR_SWING_AXE3;
		public static StaticAnimation EVOKER_CAST_SPELL;
		public static StaticAnimation PIGLIN_IDLE;
		public static StaticAnimation PIGLIN_WALK;
		public static StaticAnimation PIGLIN_ZOMBIFIED_IDLE;
		public static StaticAnimation PIGLIN_ZOMBIFIED_WALK;
		public static StaticAnimation PIGLIN_ZOMBIFIED_CHASE;
		public static StaticAnimation PIGLIN_CELEBRATE1;
		public static StaticAnimation PIGLIN_CELEBRATE2;
		public static StaticAnimation PIGLIN_CELEBRATE3;
		public static StaticAnimation PIGLIN_ADMIRE;
		public static StaticAnimation PIGLIN_DEATH;
		public static StaticAnimation RAVAGER_IDLE;
		public static StaticAnimation RAVAGER_WALK;
		public static StaticAnimation RAVAGER_DEATH;
		public static StaticAnimation RAVAGER_STUN;
		public static StaticAnimation RAVAGER_ATTACK1;
		public static StaticAnimation RAVAGER_ATTACK2;
		public static StaticAnimation RAVAGER_ATTACK3;
		public static StaticAnimation VEX_IDLE;
		public static StaticAnimation VEX_FLIPPING;
		public static StaticAnimation VEX_DEATH;
		public static StaticAnimation VEX_HIT;
		public static StaticAnimation VEX_CHARGE;
		public static StaticAnimation VEX_NEUTRALIZED;
		public static StaticAnimation WITCH_DRINKING;
		public static StaticAnimation WITHER_SKELETON_IDLE;
		public static StaticAnimation WITHER_SKELETON_SPECIAL_SPAWN;
		public static StaticAnimation WITHER_SKELETON_WALK;
		public static StaticAnimation WITHER_SKELETON_CHASE;
		public static StaticAnimation WITHER_SKELETON_ATTACK1;
		public static StaticAnimation WITHER_SKELETON_ATTACK2;
		public static StaticAnimation WITHER_SKELETON_ATTACK3;
		public static StaticAnimation WITHER_IDLE;
		public static StaticAnimation WITHER_CHARGE;
		public static StaticAnimation WITHER_DEATH;
		public static StaticAnimation WITHER_NEUTRALIZED;
		public static StaticAnimation WITHER_SPELL_ARMOR;
		public static StaticAnimation WITHER_BLOCKED;
		public static StaticAnimation WITHER_GHOST_STANDBY;
		public static StaticAnimation WITHER_SWIRL;
		public static StaticAnimation WITHER_BEAM;
		public static StaticAnimation WITHER_BACKFLIP;
		public static StaticAnimation ZOMBIE_IDLE;
		public static StaticAnimation ZOMBIE_WALK;
		public static StaticAnimation ZOMBIE_CHASE;
		public static StaticAnimation ZOMBIE_ATTACK1;
		public static StaticAnimation ZOMBIE_ATTACK2;
		public static StaticAnimation ZOMBIE_ATTACK3;
		public static StaticAnimation AXE_AUTO1;
		public static StaticAnimation AXE_AUTO2;
		public static StaticAnimation AXE_DASH;
		public static StaticAnimation AXE_AIRSLASH;
		public static StaticAnimation FIST_AUTO1;
		public static StaticAnimation FIST_AUTO2;
		public static StaticAnimation FIST_AUTO3;
		public static StaticAnimation FIST_DASH;
		public static StaticAnimation FIST_AIR_SLASH;
		public static StaticAnimation SPEAR_ONEHAND_AUTO;
		public static StaticAnimation SPEAR_BLOCK_AUTO;
		public static StaticAnimation SPEAR_ONEHAND_AIR_SLASH;
		public static StaticAnimation SPEAR_TWOHAND_AUTO1;
		public static StaticAnimation SPEAR_TWOHAND_AUTO2;
		public static StaticAnimation SPEAR_TWOHAND_AIR_SLASH;
		public static StaticAnimation SPEAR_DASH;
		public static StaticAnimation SPEAR_MOUNT_ATTACK;
		public static StaticAnimation SPEAR_GUARD;
		public static StaticAnimation SPEAR_GUARD_HIT;
		public static StaticAnimation SWORD_AUTO1;
		public static StaticAnimation SWORD_AUTO2;
		public static StaticAnimation SWORD_AUTO3;
		public static StaticAnimation SWORD_DASH;
		public static StaticAnimation SWORD_AIR_SLASH;
		public static StaticAnimation SWORD_GUARD;
		public static StaticAnimation SWORD_GUARD_HIT;
		public static StaticAnimation SWORD_GUARD_ACTIVE_HIT1;
		public static StaticAnimation SWORD_GUARD_ACTIVE_HIT2;
		public static StaticAnimation SWORD_GUARD_ACTIVE_HIT3;
		public static StaticAnimation LONGSWORD_GUARD_ACTIVE_HIT1;
		public static StaticAnimation LONGSWORD_GUARD_ACTIVE_HIT2;
		public static StaticAnimation SWORD_DUAL_AUTO1;
		public static StaticAnimation SWORD_DUAL_AUTO2;
		public static StaticAnimation SWORD_DUAL_AUTO3;
		public static StaticAnimation SWORD_DUAL_DASH;
		public static StaticAnimation SWORD_DUAL_AIR_SLASH;
		public static StaticAnimation SWORD_DUAL_GUARD;
		public static StaticAnimation SWORD_DUAL_GUARD_HIT;
		public static StaticAnimation BIPED_COMMON_NEUTRALIZED;
		public static StaticAnimation GREATSWORD_GUARD_BREAK;
		public static StaticAnimation METEOR_SLAM;
		public static StaticAnimation REVELATION_ONEHAND;
		public static StaticAnimation REVELATION_TWOHAND;
		public static StaticAnimation LONGSWORD_AUTO1;
		public static StaticAnimation LONGSWORD_AUTO2;
		public static StaticAnimation LONGSWORD_AUTO3;
		public static StaticAnimation LONGSWORD_DASH;
		public static StaticAnimation LONGSWORD_LIECHTENAUER_AUTO1;
		public static StaticAnimation LONGSWORD_LIECHTENAUER_AUTO2;
		public static StaticAnimation LONGSWORD_LIECHTENAUER_AUTO3;
		public static StaticAnimation LONGSWORD_AIR_SLASH;
		public static StaticAnimation LONGSWORD_GUARD;
		public static StaticAnimation LONGSWORD_GUARD_HIT;
		public static StaticAnimation TACHI_AUTO1;
		public static StaticAnimation TACHI_AUTO2;
		public static StaticAnimation TACHI_AUTO3;
		public static StaticAnimation TACHI_DASH;
		public static StaticAnimation TOOL_AUTO1;
		public static StaticAnimation TOOL_AUTO2;
		public static StaticAnimation TOOL_DASH;
		public static StaticAnimation UCHIGATANA_AUTO1;
		public static StaticAnimation UCHIGATANA_AUTO2;
		public static StaticAnimation UCHIGATANA_AUTO3;
		public static StaticAnimation UCHIGATANA_DASH;
		public static StaticAnimation UCHIGATANA_AIR_SLASH;
		public static StaticAnimation UCHIGATANA_SHEATHING_AUTO;
		public static StaticAnimation UCHIGATANA_SHEATHING_DASH;
		public static StaticAnimation UCHIGATANA_SHEATH_AIR_SLASH;
		public static StaticAnimation UCHIGATANA_GUARD;
		public static StaticAnimation UCHIGATANA_GUARD_HIT;
		public static StaticAnimation SWORD_MOUNT_ATTACK;
		public static StaticAnimation GREATSWORD_AUTO1;
		public static StaticAnimation GREATSWORD_AUTO2;
		public static StaticAnimation GREATSWORD_DASH;
		public static StaticAnimation GREATSWORD_AIR_SLASH;
		public static StaticAnimation GREATSWORD_GUARD;
		public static StaticAnimation GREATSWORD_GUARD_HIT;
		public static StaticAnimation DAGGER_AUTO1;
		public static StaticAnimation DAGGER_AUTO2;
		public static StaticAnimation DAGGER_AUTO3;
		public static StaticAnimation DAGGER_DASH;
		public static StaticAnimation DAGGER_AIR_SLASH;
		public static StaticAnimation DAGGER_DUAL_AUTO1;
		public static StaticAnimation DAGGER_DUAL_AUTO2;
		public static StaticAnimation DAGGER_DUAL_AUTO3;
		public static StaticAnimation DAGGER_DUAL_AUTO4;
		public static StaticAnimation DAGGER_DUAL_DASH;
		public static StaticAnimation DAGGER_DUAL_AIR_SLASH;
		public static StaticAnimation TRIDENT_AUTO1;
		public static StaticAnimation TRIDENT_AUTO2;
		public static StaticAnimation TRIDENT_AUTO3;
		public static StaticAnimation THE_GUILLOTINE;
		public static StaticAnimation SWEEPING_EDGE;
		public static StaticAnimation DANCING_EDGE;
		public static StaticAnimation HEARTPIERCER;
		public static StaticAnimation GRASPING_SPIRAL_FIRST;
		public static StaticAnimation GRASPING_SPIRAL_SECOND;
		public static StaticAnimation STEEL_WHIRLWIND_CHARGING;
		public static StaticAnimation STEEL_WHIRLWIND;
		public static StaticAnimation BATTOJUTSU;
		public static StaticAnimation BATTOJUTSU_DASH;
		public static StaticAnimation RUSHING_TEMPO1;
		public static StaticAnimation RUSHING_TEMPO2;
		public static StaticAnimation RUSHING_TEMPO3;
		public static StaticAnimation RELENTLESS_COMBO;
		public static StaticAnimation EVISCERATE_FIRST;
		public static StaticAnimation EVISCERATE_SECOND;
		public static StaticAnimation BLADE_RUSH_COMBO1;
		public static StaticAnimation BLADE_RUSH_COMBO2;
		public static StaticAnimation BLADE_RUSH_COMBO3;
		public static StaticAnimation BLADE_RUSH_HIT;
		public static StaticAnimation BLADE_RUSH_EXECUTE_BIPED;
		public static StaticAnimation BLADE_RUSH_TRY;
		public static StaticAnimation BLADE_RUSH_FAILED;
		public static StaticAnimation WRATHFUL_LIGHTING;
		public static StaticAnimation TSUNAMI;
		public static StaticAnimation TSUNAMI_REINFORCED;
		public static StaticAnimation EVERLASTING_ALLEGIANCE_CALL;
		public static StaticAnimation EVERLASTING_ALLEGIANCE_CATCH;
		public static StaticAnimation SHARP_STAB;
		public static StaticAnimation OFF_ANIMATION_HIGHEST;
		public static StaticAnimation OFF_ANIMATION_MIDDLE;
	````
	[View on Github :simple-github:](https://github.com/Yesssssman/epicfightmod/blob/78b69b575d8953f44538cd5b312768a1e07f392b/src/main/java/yesman/epicfight/gameasset/Animations.java#L134-L474){ .md-button }
***
## **:fontawesome-solid-lightbulb: Easy Setup -**

### **:fontawesome-solid-book: Using presets**


For entities that extend the vanilla classes/or simmilar models to the ones in vanilla you can use presets as a simple setup method.
```JSON
{
	"preset": "minecraft:creeper"
}
```

You should know that this will not work properly if the targeted entity doesn't share its code with the vanilla entity (if the entity class doesn't extend the vanilla class), although it is seemingly the same. The allowed values are all the entity's registry names that are registered in the [code](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/world/capabilities/provider/EntityPatchProvider.java)

### **:fontawesome-solid-x: Disabling an "epicfied" entity**


You also can disable entity animations and custom models by using the following line (inside of entityname.json): 
<!-- md:example https://github.com/MetalKnight56/EpicFight-Files/raw/refs/heads/main/examples/NoMobAnimations.zip -->
```JSON
{
	"disabled": true
}
```

***
## **:fontawesome-solid-lightbulb: Entity animation features -**
In epic fight you are able to change entity ai's and behaviour through datapacks. You can customize which animations should be played according to certain behaviors.

Below is a simple example of how you can create a punching zombie.
<!-- md:example https://github.com/MetalKnight56/EpicFight-Files/raw/refs/heads/main/examples/PunchingZombie.zip --> 
```JSON
{
	"model": "epicfight:entity/biped_old_texture",
	"armature": "epicfight:entity/biped",
	"renderer": "minecraft:zombie",
	"isHumanoid": false,
	"faction": "neutral",
	"attributes": {
		"impact": 0.5,
		"armor_negation": 0.0,
		"max_strikes": 1,
		"chasing_speed": 1.0,
                "scale": 1.0
	},
	"default_livingmotions": {
		"idle": "epicfight:biped/living/idle",
		"walk": "epicfight:biped/living/walk",
		"chase": "epicfight:biped/living/walk",
		"mount": "epicfight:biped/living/mount",
                "fall": "epicfight:biped/living/fall",
		"death": "epicfight:biped/living/death"
	},
	"stun_animations": {
		"short": "epicfight:biped/combat/hit_short",
		"long": "epicfight:biped/combat/hit_long",
		"knockdown": "epicfight:biped/combat/knockdown",
		"fall": "epicfight:biped/living/landing"
	},
	"combat_behavior": [
		{
			"weight": 100.0,
			"canBeInterrupted": true,
			"looping": false,
			"behaviors": [
				{
					"conditions": [
						{"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
					],
					"animation": "epicfight:zombie/attack1"
				},
				{
					"conditions": [
						{"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
					],
					"animation": "epicfight:zombie/attack2"
				},
				{
					"conditions": [
						{"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
					],
					"animation": "epicfight:zombie/attack3"
				}
			]
		}
	]
}
```

`model`: The model of the entity. Allowed values are [here](#obtaining-armature-animation-and-model-tags-)

`armature`: Defines the skeletal structure (armature) that the entity utilizes. For a complete list of allowed values, refer [here](#obtaining-armature-animation-and-model-tags-)

`renderer`: All the entity's registry names that are registered in our source code can be obtained [here](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/client/events/engine/RenderEngine.java)

`isHumanoid`: Specifies if the entity is humanoid. Humanoids adjust animations based on the item they hold.

`faction`: Entities in the same faction won't attack each other. Allowed values: `enderman`, `piglins`, `wither`, `neutral`, `undead`, `illager`, `villager`
***
<div style="display: flex; align-items: flex-start;">
<div style="flex: 1; margin-right: 20px; max-width:60%;">

<center>
<code>attributes</code>:

<table>
<thead>
<tr>
<th>Key</th>
<th>Feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>impact</td>
<td>Extends the stun time of attack target</td>
</tr>
<tr>
<td>armor_negation</td>
<td>Bypasses defense points by %</td>
</tr>
<tr>
<td>max_strikes</td>
<td>Determines how many entities can hit per one swing</td>
</tr>
<tr>
<td>chasing_speed</td>
<td>For melee attack mobs, determines how fast the mob chases the enemy</td>
</tr>
<tr>
<td>scale</td>
<td>Determines the size of the entity</td>
</tr>
</tbody>
</table>
</center>
</div> <div style="flex: 1; max-width:40%;">
<center>
<code>default_livingmotions</code>:

<table>
<thead>
<tr>
<th>Key</th>
<th>Feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>idle</td>
<td>When the entity stays still</td>
</tr>
<tr>
<td>walk</td>
<td>When the entity moves</td>
</tr>
<tr>
<td>chase</td>
<td>When the entity moves and has a target</td>
</tr>
<tr>
<td>fall</td>
<td>When the entity falls because of gravity</td>
</tr>
<tr>
<td>death</td>
<td>When the entity dies</td>
</tr>
<tr>
<td>mount</td>
<td>When the entity is riding</td>
</tr>
</tbody>
</table>
</center>
</div></div>

***
<div style="display: flex; align-items: flex-start;">
<div style="flex: 1; margin-right: 20px; max-width:30%;">
<center>
<code>stun_animations</code>:

<table>
<thead>
<tr>
<th>Key</th>
<th>Feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>short</td>
<td>Every normal attack</td>
</tr>
<tr>
<td>long</td>
<td>For some special attacks</td>
</tr>
<tr>
<td>knockdown</td>
<td>Ender dragon's ground slam</td>
</tr>
<tr>
<td>fall</td>
<td>Fall damage</td>
</tr>
</tbody>
</table>
</center>

</div> <div style="flex: 1; max-width:70%;">
<center>
<code>combat_behavior</code>: attack moves of the entity.

<table>
<thead>
<tr>
<th>Key</th>
<th>Feature</th>
</tr>
</thead>
<tbody>
<tr>
<td>weight</td>
<td>The possibility of this behavior is selected. It will be calculated as <code>(weight/total weight sum)</code></td>
</tr>
<tr>
<td>canBeInterrupted</td>
<td>Determines if this movement series can be canceled</td>
</tr>
<tr>
<td>looping</td>
<td>Determines whether the current behavior should be saved when canceled</td>
</tr>
<tr>
<td>cooldown</td>
<td>Determines how many "ticks" it'll take to be used again</td>
</tr>
<tr>
<td>behaviors</td>
<td>Definition of the conditions and attack animation</td>
</tr>
</tbody>
</table>
</center>
</div></div> 
***
<center>
`behaviors`:

| Key | Feature |
| ------------- | ------------- |
| conditions | Conditions that have to be met to be selected |
| animation | The animation path |


***

`conditions`:

| Key | Feature | Arguments |
| ------------- | ------------- | ------------- |
| random_chance | Checks if the random value is higher than the given argument | "chance": double |
| within_eye_height | Checks if the Y distance between target and attacker is smaller than the attacker's eye height | - |
| within_distance | Checks the distance between target and attacker, if they are within the given arguments | "min": double, "max": double |
| within_angle | Checks if the angle towards the target is within the given argument. | "min": double, "max": double |
| within_angle_horizontal | Checks if the Y-axis angle towards the target is within the given argument. | "min": double, "max": double |
| health | Checks the entity's health. | "health": double, "comparator": `enum:(greater_absolute, less_absolute, greater_ratio, less_ratio)` |

</center>

***
## **:fontawesome-solid-lightbulb: Changing the animation based on the weapon its holding -**
For the humanoid mobs, you can set different animation sets depending on the weapon they're holding. In this case, the format of the "combat_behaviors" is slightly changed. First, you have to check if you set the "isHumanoid" value to true.

Below is an example of how you can create a zombie, that wields a sword like a wither skeleton while idle and walking, attacking with a sword, or punching with empty hands.
```JSON
{
	"model": "epicfight:entity/biped_old_texture",
	"armature": "epicfight:entity/biped",
	"renderer": "minecraft:zombie",
	"isHumanoid": true,
	"faction": "neutral",
	"attributes": {
		"impact": 0.5,
		"armor_negation": 0.0,
		"max_strikes": 1,
		"chasing_speed": 1.0,
                "scale": 1.0
	},
	"default_livingmotions": {
		"idle": "epicfight:biped/living/idle",
		"walk": "epicfight:biped/living/walk",
		"chase": "epicfight:biped/living/walk",
		"mount": "epicfight:biped/living/mount",
                "fall": "epicfight:biped/living/fall",
		"death": "epicfight:biped/living/death"
	},
	"humanoid_weapon_motions": [
		{
			"weapon_categories": ["sword"],
			"style":"one_hand",
			"livingmotions": {
				"walk": "epicfight:wither_skeleton/walk",
				"chase": "epicfight:wither_skeleton/chase"
			}
		}
	],
	"stun_animations": {
		"short": "epicfight:biped/combat/hit_short",
		"long": "epicfight:biped/combat/hit_long",
		"knockdown": "epicfight:biped/combat/knockdown",
		"fall": "epicfight:biped/living/landing"
	},
	"combat_behavior": [
		{
			"weapon_categories": ["axe", "hoe", "pickaxe", "shovel", "sword"],
			"style": "one_hand",
			"behavior_series": [
				{
					"weight": 100.0,
					"canBeInterrupted": true,
					"looping": true,
					"behaviors": [
						{
							"conditions": [
								{"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.2}
							],
							"animation": "epicfight:biped/combat/mob_onehand1"
						},
						{
							"conditions": [
								{"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.2}
							],
							"animation": "epicfight:biped/combat/mob_onehand2"
						}
					]
				}
			]
		},
		{
			"weapon_categories": ["fist"],
			"style": "common",
			"behavior_series": [
				{
					"weight": 100.0,
					"canBeInterrupted": true,
					"looping": false,
					"behaviors": [
						{
							"conditions": [
								{"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
							],
							"animation": "epicfight:zombie/attack1"
						},
						{
							"conditions": [
								{"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
							],
							"animation": "epicfight:zombie/attack2"
						},
						{
							"conditions": [
								{"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
							],
							"animation": "epicfight:zombie/attack3"
						}
					]
				}
			]
		}
	]
}
```

`humanoid_weapon_motions`: A list of the modified living motions for each weapon category.

`weapon_categories`: Which weapons should have the same behavior series. Allowed values are:

```JAVA
       AXE, FIST, GREATSWORD, HOE, PICKAXE, SHOVEL, SWORD, UCHIGATANA, SPEAR, TACHI, TRIDENT, LONGSWORD, DAGGER, SHIELD, RANGED
```

`style`: Holding style. Allowed values are: `one_hand, two_hand, common`.

***