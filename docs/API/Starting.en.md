---
icon: simple/gradle
hide:
  - announcement
---
# Getting started

***
## Setting up your Gradle Build
To seamlessly incorporate EpicFight into your mod project using Gradle and facilitate automatic download using Gradle, simply include the following snippet within your build script (``build.gradle``):

### 1. Add Curse Forge maven repository

<details>
<summary>NeoForge 1.21.1</summary>

```gradle
repositories {
    exclusiveContent {
        forRepository {
            maven {
                url "https://cursemaven.com"
            }
        }
        filter {
            includeGroup "curse.maven"
        }
    }
}
```

</details>

<details>
<summary>Forge 1.20.1</summary>

```gradle
repositories {
    exclusiveContent {
        forRepository {
            maven {
                url "https://cursemaven.com"
            }
        }
        forRepositories(fg.repository)
        filter {
            includeGroup "curse.maven"
        }
    }
}
```

</details>

!!! tip
    A repository is a storage location where your Gradle project fetches libraries using Maven-style coordinates (`group:artifact:version`).

    You can also use [Modrinth repository](https://support.modrinth.com/en/articles/8801191-modrinth-maven) instead of [Curse Forge repository](https://cursemaven.com/).

### 2. Add Epic Fight mod dependency

<details><summary>NeoForge 1.21.1</summary>

```gradle
dependencies {
	implementation "curse.maven:epic-fight-mod-405076:${epicfight_version}"
}
```

</details>

<details><summary>Forge 1.20.1</summary>

```gradle
dependencies {
	implementation fg.deobf("curse.maven:epic-fight-mod-405076:${epicfight_version}")
}
```

</details>

### How to choose a version...

To access a compilation of EpicFight versions at your disposal, refer to the listings on [CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-mod/files)

!!! tip
	For an easier setup of your Dependencies, you can click on the version file on curseforge you wish to implement, and press on the dropdown arrow next to Curse Maven Snippet :octicons-question-16:{ title="Curse Maven is a repository that simplifies including packages in projects" }
	
	<center>![](https://github.com/MetalKnight56/EpicFight-Files/blob/Wiki-Images/Images/Maven%20Snippet.png?raw=true){.img-rounded}</center>

## Forge / NeoForge Events

Epic Fight event packages by version:

| Version               | API Path                                                                                                                      |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------|
| **1.20.1** (Forge)    | [epicfight/api/forgeevent](https://github.com/Epic-Fight/epicfight/tree/1.20.1/src/main/java/yesman/epicfight/api/forgeevent) |
| **1.21.1** (NeoForge) | [epicfight/api/neoevent](https://github.com/Epic-Fight/epicfight/tree/1.21.1/src/main/java/yesman/epicfight/api/neoevent)     |

!!! tip
    The paths above are shortened. The actual package root is 
    `yesman/epicfight/api/...`, but we write it as `epicfight/api/...` for clarity.

## Registering Custom Animations

You can create animations in Blender and export them using the [Epic Fight Blender Exporter Addon](https://epicfight-docs.readthedocs.io/Guides/page1/).

To import your animations into your mod / resource pack, follow the instructions on [Asset Importing](https://epicfight-docs.readthedocs.io/Guides/page3) page.

Here is an example of how to register your custom animations:

```java
@EventBusSubscriber(modid = YourMod.MOD_ID)
public class Animations {
    @SubscribeEvent
    public static void registerAnimations(AnimationManager.AnimationRegistryEvent event) {
        event.newBuilder(YourMod.MOD_ID, Animations::build);
    }

    // Animation accessors for different animation types
    public static AnimationAccessor<StaticAnimation> BIPED_IDLE;
    public static AnimationAccessor<MovementAnimation> BIPED_WALK;
    public static AnimationAccessor<StaticAnimation> BIPED_FLYING;

    public static AnimationAccessor<ComboAttackAnimation> TRIDENT_AUTO1;
    public static AnimationAccessor<ComboAttackAnimation> TRIDENT_AUTO2;
    public static AnimationAccessor<ComboAttackAnimation> TRIDENT_AUTO3;

    // Define the actual animations and their properties
    private static void build(AnimationManager.AnimationBuilder builder) {
        BIPED_IDLE = builder.nextAccessor("biped/living/idle", (accessor) -> new StaticAnimation(true, accessor, Armatures.BIPED));
        BIPED_WALK = builder.nextAccessor("biped/living/walk", (accessor) -> new MovementAnimation(true, accessor, Armatures.BIPED));
        BIPED_FLYING = builder.nextAccessor("biped/living/fly", (accessor) -> new StaticAnimation(true, accessor, Armatures.BIPED));

        TRIDENT_AUTO1 = builder.nextAccessor("biped/combat/trident_auto1", (accessor) -> new ComboAttackAnimation(0.3F, 0.05F, 0.16F, 0.45F, null, Armatures.BIPED.get().toolR, accessor, Armatures.BIPED));
        TRIDENT_AUTO2 = builder.nextAccessor("biped/combat/trident_auto2", (accessor) -> new ComboAttackAnimation(0.05F, 0.25F, 0.36F, 0.55F, null, Armatures.BIPED.get().toolR, accessor, Armatures.BIPED));
        TRIDENT_AUTO3 = builder.nextAccessor("biped/combat/trident_auto3", (accessor) -> new ComboAttackAnimation(0.2F, 0.3F, 0.46F, 0.9F, null, Armatures.BIPED.get().toolR, accessor, Armatures.BIPED));
    }
}
```

All available animation types are listed in
[epicfight/api/animation/types](https://github.com/Epic-Fight/epicfight/tree/1.21.1/src/main/java/yesman/epicfight/api/animation/types).

!!! tip
    This tutorial assumes you already know how to register events in Forge/NeoForge.  
    The example shown above works only on **NeoForge**.

    On **Forge**, you need to use `@Mod.EventBusSubscriber` instead of `@EventBusSubscriber`  
    and explicitly specify the bus — in this case, it must be the **MOD bus**.

### Playing the animation

Before you can play an Epic Fight animation on an entity, the entity must be **patched** by Epic Fight.  
(See the next section for details on how to patch entities.)

The following example shows how to play the static **Jump** animation on an Epic Fight–patched entity when a player right-clicks it:

```java
public class YourEntity extends PathfinderMob {
    // ...
    
    @Override
    public InteractionResult mobInteract(Player player, InteractionHand hand) {
        final boolean isEpicFightModLoaded = ModList.get().isLoaded("epicfight");
        if (isEpicFightModLoaded) {
            final LivingEntityPatch<?> entityPatch = EpicFightCapabilities.getEntityPatch(this, LivingEntityPatch.class);
            entityPatch.playAnimationInstantly(Animations.BIPED_JUMP);
        }
        return super.mobInteract(player, hand);
    }
}
```

Make sure that **Epic Fight** is either declared as a required dependency in your [mods.toml](https://docs.neoforged.net/docs/gettingstarted/modfiles/#neoforgemodstoml) file
or that you check for its presence at runtime as shown above. This prevents crashes if the mod isn’t installed.

## Patching a custom entity

This tutorial shows how to patch a custom humanoid entity for use with Epic Fight.  
It assumes you already have the entity set up in vanilla Minecraft, including its registration, [renderer](https://docs.neoforged.net/docs/entities/renderer/), and [attributes](https://docs.neoforged.net/docs/entities/attributes).

You need to register 3 different things:

- The patched entity.
- The armature type for the entity.
- The patched renderer.

### 1. Patching the entity

An example patched entity class:

```java
public class YourEntityPatch extends HumanoidMobPatch<YourEntity> {

    public YourEntityPatch(YourEntity original) {
        super(original, Factions.VILLAGER);
    }

    @Override
    public void updateMotion(boolean b) {
        super.commonMobUpdateMotion(b);
    }

    @Override
    protected void initAI() {
        super.initAI();

        this.original.goalSelector.addGoal(
                1,
                new AnimatedAttackGoal<>(this, new CombatBehaviors.Builder<>().build(this))
        );
        this.original.goalSelector.addGoal(2, new TargetChasingGoal(this, this.getOriginal(), 1.2f, true));
        this.original.goalSelector.addGoal(3, new RandomStrollGoal(original, 1.0f));

        this.original.targetSelector.addGoal(1, new NearestAttackableTargetGoal<>(original, Player.class, true));
    }

    public void initAnimator(Animator animator) {
        super.initAnimator(animator);
        
        // All available living motions are listed in this enum: https://github.com/Epic-Fight/epicfight/blob/1.21.1/src/main/java/yesman/epicfight/api/animation/LivingMotions.java#L4-L6
        animator.addLivingAnimation(LivingMotions.IDLE, Animations.BIPED_IDLE);
        animator.addLivingAnimation(LivingMotions.WALK, Animations.BIPED_WALK);
        animator.addLivingAnimation(LivingMotions.RUN, Animations.BIPED_RUN);
        animator.addLivingAnimation(LivingMotions.FALL, Animations.BIPED_FALL);
        animator.addLivingAnimation(LivingMotions.SIT, Animations.BIPED_SIT);
        animator.addLivingAnimation(LivingMotions.DEATH, Animations.BIPED_DEATH);
        animator.addLivingAnimation(LivingMotions.JUMP, Animations.BIPED_JUMP);
        animator.addLivingAnimation(LivingMotions.SLEEP, Animations.BIPED_SLEEPING);
        animator.addLivingAnimation(LivingMotions.AIM, Animations.BIPED_BOW_AIM);
        animator.addLivingAnimation(LivingMotions.SHOT, Animations.BIPED_BOW_SHOT);
        animator.addLivingAnimation(LivingMotions.DRINK, Animations.BIPED_DRINK);
        animator.addLivingAnimation(LivingMotions.EAT, Animations.BIPED_EAT);
    }
}
```

Then, register your patched entity with `EntityPatchRegistryEvent` and also register its armature to avoid runtime crashes:

```java
@EventBusSubscriber(modid = YourMod.MOD_ID)
public class EpicFightEvents {
    @SubscribeEvent
    public static void registerPatchedEntities(EntityPatchRegistryEvent event) {
        event.getTypeEntry().put(YourModEntities.THE_ENTITY.get(), entity -> new YourEntityPatch((YourEntity) entity));
    }

    @SubscribeEvent
    public static void registerEntityArmatures(FMLCommonSetupEvent event) {
        Armatures.registerEntityTypeArmature(YourModEntities.THE_ENTITY.get(), Armatures.BIPED);
    }
}
```


!!! tip
    On Forge 1.20.1, you must manually specify the **MOD bus** for `EntityPatchRegistryEvent`.

### 2. Patching the renderer

An example of a patched entity renderer

```java
public class YourEntityPatchRenderer extends PHumanoidRenderer<YourEntity, YourEntityPatch, HumanoidModel<YourEntity>, YourEntityRenderer, HumanoidMesh> {
    public DummyEntityRendererEfPatch(EntityRendererProvider.Context context, EntityType<?> entityType) {
        super(Meshes.BIPED, context, entityType);
    }
}
```

Then, register it on the **client side only** using the `PatchedRenderersEvent.Add` event on the **MOD bus**:

```java
@EventBusSubscriber(modid = YourMod.MOD_ID, value = Dist.CLIENT)
public class EpicFightClientEvents {
    @SubscribeEvent
    public static void registerPatchedEntityRenderers(PatchedRenderersEvent.Add event) {
        event.addPatchedEntityRenderer(YourModEntities.THE_ENTITY.get(), entityType -> new YourEntityPatchRenderer(
                        event.getContext(),
                        entityType
                )
        );
    }
}
```

### Getting the patched entity

You can retrieve the patched entity instance from a vanilla entity using:

```java
final YourEntity entity = ...;
final YourEntityPatch entityPatch = EpicFightCapabilities.getEntityPatch(entity, YourEntityPatch.class);
```
