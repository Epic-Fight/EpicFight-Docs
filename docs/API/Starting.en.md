---
icon: simple/gradle
---
# Getting Started with EpicFight [1.18.2 - 1.20.1]

***
## Setting up your Gradle Build
To seamlessly incorporate EpicFight into your mod project using Gradle and facilitate automatic download using Gradle, simply include the following snippet within your build script (``build.gradle``):

### Dependencies 

```gradle
dependencies {
	
	implementation fg.deobf("curse.maven:epic-fight-mod-405076:${epicfight_version}")

}
```

### Repositories

```gradle
repositories {
    maven {
        url "https://cursemaven.com"
        content {
            includeGroup "curse.maven"
        }
    }
}
```

## How to choose a version...

To access a compilation of EpicFight versions at your disposal, refer to the listings on [CurseForge](https://www.curseforge.com/minecraft/mc-mods/epic-fight-mod/files)

!!! tip
	For an easier setup of your Dependencies, you can click on the version file on curseforge you wish to implement, and press on the dropdown arrow next to Curse Maven Snippet :octicons-question-16:{ title="Curse Maven is a repository that simplifies including packages in projects" }
	
	<center>![](https://github.com/MetalKnight56/RafTale/assets/77132244/33af4f8f-44a8-44af-b430-55248a30a202){.img-rounded}</center>