---
icon: cube-solid
hide:
  - announcement
---
# Starting with Blender 3.6

Epic fight uses custom animations for multiple actions in game, from drinking, eating to even attack combos. These animations are handled by Blender, a 3D open source software for modeling, animating, texturing, composition, rendering and video editing.

It may seem overwhelming to work with blender, but here I'll only be teaching you the absolute necessary to work with epic fight.

***
## :material-download: Installing blender
To install Blender (2.79) head to the following website:

* [:material-download: Blender 3.6](https://download.blender.org/release/Blender3.6/)

Make sure to select the correct version that corresponds to your Operational System. 
(Here we'll be using Win 64x bits)
 

### :fontawesome-solid-play: Extracting and Running ...
<p style="margin-bottom: 0;">After downloading the correct file from the Blender index, you can extract the files using your preferred program.</p>
<div style="font-size:0.6rem;">(It's recommended to use a program such as 7-Zip for extracting the files)</div>
After extracting the files, verify that Blender runs correctly. To test this, open the folder hierarchy and launch `Blender.exe`. If a window appears, Blender has been successfully installed.
***
## :material-download: Json exporter
To install the custom Blender Exporter, visit the repository and download the master branch by following these steps:

* [:material-download: Blender Json Exporter](https://github.com/Yesssssman/blender-json-exporter/tree/3.6)

<center>
<div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/95ce0412-b498-466b-ae1b-7a79a1ab27a1" class="img-rounded white-border img-rounded" style="border-radius:4px;"></div>
</center>

<ol>
<li>Go to the folder where blender is installed, move all files under /3.6/scripts/addons/xxxxxxxx/.<br><div style="font-size:0.6rem;">(You should create a new folder, represented here by the multiple Xs, it's naming does not matter)</div></li>

<li>Go to Blender <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> File <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> User Preferences <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> Add-ons, And find an add-on named <strong>"Import-Export: Minecraft Model Json Exporter"</strong></li>

<center><div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/b327a99b-ca2e-44d5-bc32-554a4d56be1b" class="img-rounded white-border img-rounded" style="border-radius:4px;"></div></center><br>

  
<li>Check the checkbox and Click "Save User Settings".</li>
<li>As you can see when you click to export, you'll be able to generate a json file, in which you can choose to select 3 options, Mesh, Animations and Armature, but we'll see those later.</li>
</ol>
***

<span style="font-size: 33px;">:material-account-hard-hat-outline: This page is still being worked on, help us contributing to it on our [discord] :material-account-hard-hat-outline:</span>

[discord]: https://discord.com/invite/NbAJwj8RHg