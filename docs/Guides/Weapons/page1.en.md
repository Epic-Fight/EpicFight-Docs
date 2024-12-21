---
icon: swords
hide:
  - announcement
---
# Item Capability

<div class="grid cards" markdown>

-	<center>__Item Capabilities Tutorial__</center>
	
	---
	
	<center><iframe width="860" height="483.75" src="https://www.youtube.com/embed/GNTgR1YLH5I?si=m18DcA4l-jyfepuf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class=img-rounded></iframe></center>

</div>

---

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

***
### :fontawesome-solid-folder: Making the folder path

To set up the folder structure, follow these steps. Each folder or file must be nested inside the previous one in the hierarchy:
<center> <code>data <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> "modid" <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> capabilities <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> "type" <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> "registryname".JSON</code> </center>
<div class="content-container2">
	<div class="text-section2" style="--text-max-width: 70%;">
		<ul>
		<li>
		<p><div class="hover-text" data-left="73.8%" data-top="59.0%" data-width="9.8%" data-height="7.5%" style="padding: 8px 0px; display: block;"><code>modid</code>: The mod ID is usually the name of the mod. You can often find it by checking in-game item tooltips (press <code>F3 + H</code> to enable Advanced Tooltips) or by looking at commands or messages related to the mod. For example, if the tooltip for an item shows <code>modid:itemname</code>, the part before the colon <code>(modid)</code> is what you’ll use to name the <code>"modid"</code> folder.<br></div></p>
		</li>
		<br>
		<li>
		<p><code>type</code>: This refers to the category of the item you’re configuring. Use either <code>weapons</code> or <code>armors</code>.<br></p>
		</li>
		<br>
		<li>
		<p><div class="hover-text" data-left="83.3%" data-top="59.0%" data-width="14.8%" data-height="7.5%" style="padding: 8px 0px; display: block;"><code>registrynames</code>: To locate an item’s registry name, press <code>F3 + H</code> in-game to enable Advanced Tooltips. Then, hover over the item to view its registry name.<br></div></p>
		</li>
		</ul>
	</div>
	<div class="image-section2">
		<center>
			<div class="glow-box3"></div>
			<div class="grow-effect" style="--scale-size: 1.03;"><img src="https://github.com/MetalKnight56/EpicFight-Files/blob/main/Screen-Captures/tooltips_example1.png?raw=true" class="img-rounded white-border img-rounded" style="--image-width: 400px;"></div><br>
			<span style="font-size: 0.5rem;">Make a <code>.txt</code> file with the outlined text, then change it's type to <code>.json</code></span>
		</center>
	</div>
</div>

#### :fontawesome-solid-star: Handling Special Cases

If the weapon's registry name includes unexpected characters like slashes (/), such as in: `"bloodandmadness:weapons/hunter_axe"`

You can represent the slashes in the folder structure by splitting the name into separate folders.<br><br>
For instance, the example above would translate into the following hierarchy: <code>data <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> bloodandmadness <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> capabilities <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> weapons <span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg></span> hunter_axe.JSON</code><br><br>
This approach ensures that each part of the path is accurately reflected in the folder structure.
<br><br>



***
## :fontawesome-solid-lightbulb: Creating the JSON file

<div markdown style="display: flex; align-items: flex-start;">
<div markdown style="flex: 1; margin-right: 20px; max-width:75%;">


<span markdown class="mdx-badge mdx-badge--right" style="font-size: 0.85em; float: right; margin-left: 0.35em;"><span class="mdx-badge__icon" style="padding: 4px; background: var(--md-accent-fg-color--transparent); border-radius: 2px;"><a href="https://github.com/MetalKnight56/EpicFight-Files/raw/refs/heads/main/examples/Epicfight_Weapons_Pack.zip" title="Download example"><span class="twemoji"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.11.89-2 2-2h6l2 2h8m-.75 7H16V9h-2v4h-3.25L15 17.25"></path></svg></span></a></span><span class="mdx-badge__text" style="padding: 4px 6px; box-shadow: 0 0 0 1px inset var(--md-accent-fg-color--transparent); border-radius: 2px;"><a href="https://github.com/MetalKnight56/EpicFight-Files/raw/refs/heads/main/examples/Epicfight_Weapons_Pack.zip"><code>.zip</code></a></span></span>
<h3 markdown id="weapon-config">
  <span class="twemoji">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="m6.2 2.44 11.9 11.9 2.12-2.12 1.41 1.41-2.47 2.47 3.18 3.18c.39.39.39 1.02 0 1.41l-.71.71a.996.996 0 0 1-1.41 0L17 18.23l-2.44 2.47-1.41-1.41 2.12-2.12-11.9-11.9V2.44H6.2M15.89 10l4.74-4.74V2.44H17.8l-4.74 4.74L15.89 10m-4.95 5-2.83-2.87-2.21 2.21-2.12-2.12-1.41 1.41 2.47 2.47-3.18 3.19a.996.996 0 0 0 0 1.41l.71.71c.39.39 1.02.39 1.41 0L7 18.23l2.44 2.47 1.41-1.41-2.12-2.12L10.94 15Z"></path>
    </svg>
  </span>
  Weapon Config
</h3>
<blockquote>Here's a simple example of a sword config:</blockquote>

<div class="language-json highlight"><pre id="__code_1"><span></span><button class="md-clipboard md-icon" title="Copy to clipboard" data-clipboard-target="#__code_1 > code"></button><code><span id="__span-1-1"><a id="__codelineno-1-1" name="__codelineno-1-1" href="#__codelineno-1-1"></a><span class="w"> </span><span class="p">{</span>
</span><span id="__span-1-2"><a id="__codelineno-1-2" name="__codelineno-1-2" href="#__codelineno-1-2"></a><span class="w">    </span><span class="nt">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"epicfight:sword"</span><span class="p">,</span>
</span><span id="__span-1-3"><a id="__codelineno-1-3" name="__codelineno-1-3" href="#__codelineno-1-3"></a><span class="w">    </span><span class="nt">"attributes"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
</span><span id="__span-1-4"><a id="__codelineno-1-4" name="__codelineno-1-4" href="#__codelineno-1-4"></a><span class="w">        </span><span class="nt">"common"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
</span><span id="__span-1-5"><a id="__codelineno-1-5" name="__codelineno-1-5" href="#__codelineno-1-5"></a><span class="w">            </span><span class="nt">"armor_negation"</span><span class="p">:</span><span class="w"> </span><span class="mf">0.0</span><span class="p">,</span>
</span><span id="__span-1-6"><a id="__codelineno-1-6" name="__codelineno-1-6" href="#__codelineno-1-6"></a><span class="w">                </span><span class="nt">"impact"</span><span class="p">:</span><span class="w"> </span><span class="mf">1.1</span><span class="p">,</span>
</span><span id="__span-1-7"><a id="__codelineno-1-7" name="__codelineno-1-7" href="#__codelineno-1-7"></a><span class="w">            </span><span class="nt">"max_strikes"</span><span class="p">:</span><span class="w"> </span><span class="mi">1</span>
</span><span id="__span-1-8"><a id="__codelineno-1-8" name="__codelineno-1-8" href="#__codelineno-1-8"></a><span class="w">        </span><span class="p">}</span>
</span><span id="__span-1-9"><a id="__codelineno-1-9" name="__codelineno-1-9" href="#__codelineno-1-9"></a><span class="w">    </span><span class="p">}</span>
</span><span id="__span-1-10"><a id="__codelineno-1-10" name="__codelineno-1-10" href="#__codelineno-1-10"></a><span class="w"> </span><span class="p">}</span>
</span></code></pre></div>

<br><br>

<h3 markdown id="onetwo-handed-weapon-file">
	<span class="twemoji">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path d="M6.92 5H5l9 9 1-.94m4.96 6.06-.84.84a.996.996 0 0 1-1.41 0l-3.12-3.12-2.68 2.66-1.41-1.41 1.42-1.42L3 7.75V3h4.75l8.92 8.92 1.42-1.42 1.41 1.41-2.67 2.67 3.12 3.12c.4.4.4 1.03.01 1.42Z"></path>
		</svg>
	</span> 
	One/Two-Handed
</h3>

<blockquote>Here's an example of a spear config with both one-handed and two-handed attributes:</blockquote>
 
<div class="language-json highlight"><pre id="__code_2"><span></span><button class="md-clipboard md-icon" title="Copy to clipboard" data-clipboard-target="#__code_2 > code"></button><code><span id="__span-2-1"><a id="__codelineno-2-1" name="__codelineno-2-1" href="#__codelineno-2-1"></a><span class="w"> </span><span class="p">{</span>
</span><span id="__span-2-2"><a id="__codelineno-2-2" name="__codelineno-2-2" href="#__codelineno-2-2"></a><span class="w">    </span><span class="nt">"type"</span><span class="p">:</span><span class="w"> </span><span class="s2">"epicfight:spear"</span><span class="p">,</span>
</span><span id="__span-2-3"><a id="__codelineno-2-3" name="__codelineno-2-3" href="#__codelineno-2-3"></a><span class="w">    </span><span class="nt">"attributes"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
</span><span id="__span-2-4"><a id="__codelineno-2-4" name="__codelineno-2-4" href="#__codelineno-2-4"></a><span class="w">        </span><span class="nt">"one_hand"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
</span><span id="__span-2-5"><a id="__codelineno-2-5" name="__codelineno-2-5" href="#__codelineno-2-5"></a><span class="w">            </span><span class="nt">"armor_negation"</span><span class="p">:</span><span class="w"> </span><span class="mf">8.0</span><span class="p">,</span>
</span><span id="__span-2-6"><a id="__codelineno-2-6" name="__codelineno-2-6" href="#__codelineno-2-6"></a><span class="w">                </span><span class="nt">"impact"</span><span class="p">:</span><span class="w"> </span><span class="mf">1.9</span><span class="p">,</span>
</span><span id="__span-2-7"><a id="__codelineno-2-7" name="__codelineno-2-7" href="#__codelineno-2-7"></a><span class="w">            </span><span class="nt">"max_strikes"</span><span class="p">:</span><span class="w"> </span><span class="mi">1</span>
</span><span id="__span-2-8"><a id="__codelineno-2-8" name="__codelineno-2-8" href="#__codelineno-2-8"></a><span class="w">        </span><span class="p">},</span>
</span><span id="__span-2-9"><a id="__codelineno-2-9" name="__codelineno-2-9" href="#__codelineno-2-9"></a><span class="w">        </span><span class="nt">"two_hand"</span><span class="p">:</span><span class="w"> </span><span class="p">{</span>
</span><span id="__span-2-10"><a id="__codelineno-2-10" name="__codelineno-2-10" href="#__codelineno-2-10"></a><span class="w">            </span><span class="nt">"armor_negation"</span><span class="p">:</span><span class="w"> </span><span class="mf">0.0</span><span class="p">,</span>
</span><span id="__span-2-11"><a id="__codelineno-2-11" name="__codelineno-2-11" href="#__codelineno-2-11"></a><span class="w">                </span><span class="nt">"impact"</span><span class="p">:</span><span class="w"> </span><span class="mf">1.3</span><span class="p">,</span>
</span><span id="__span-2-12"><a id="__codelineno-2-12" name="__codelineno-2-12" href="#__codelineno-2-12"></a><span class="w">            </span><span class="nt">"max_strikes"</span><span class="p">:</span><span class="w"> </span><span class="mi">3</span>
</span><span id="__span-2-13"><a id="__codelineno-2-13" name="__codelineno-2-13" href="#__codelineno-2-13"></a><span class="w">        </span><span class="p">}</span>
</span><span id="__span-2-14"><a id="__codelineno-2-14" name="__codelineno-2-14" href="#__codelineno-2-14"></a><span class="w">    </span><span class="p">}</span>
</span><span id="__span-2-15"><a id="__codelineno-2-15" name="__codelineno-2-15" href="#__codelineno-2-15"></a><span class="w"> </span><span class="p">}</span>
</span></code></pre></div>

</div> <div style="flex: 1; max-width:25%;">
<center>

<code>type</code>: Which animations it should use. Available Type Values:



<table>
<thead>
<tr>
<th>Type</th>
<th>Style Info</th>
</tr>
</thead>
<tbody>
<tr>
<td>axe</td>
<td>One-Handed</td>
</tr>
<tr>
<td>fist</td>
<td>Dual Wielding</td>
</tr>
<tr>
<td>hoe</td>
<td>One-Handed</td>
</tr>
<tr>
<td>pickaxe</td>
<td>One-Handed</td>
</tr>
<tr>
<td>shovel</td>
<td>One-Handed</td>
</tr>
<tr>
<td>sword</td>
<td>Dual Wielding</td>
</tr>
<tr>
<td>spear</td>
<td>One/Two-Handed</td>
</tr>
<tr>
<td>greatsword</td>
<td>Two-Handed</td>
</tr>
<tr>
<td>uchigatana</td>
<td>Two-Handed</td>
</tr>
<tr>
<td>tachi</td>
<td>Two-Handed</td>
</tr>
<tr>
<td>longsword</td>
<td>Two-Handed</td>
</tr>
<tr>
<td>dagger</td>
<td>Dual Wielding</td>
</tr>
<tr>
<td>bow</td>
<td>Two-Handed</td>
</tr>
<tr>
<td>crossbow</td>
<td>Two-Handed</td>
</tr>
<tr>
<td>trident</td>
<td>One-Handed</td>
</tr>
<tr>
<td>shield</td>
<td>Dual Wielding</td>
</tr>
</tbody>
</table>

</center>

</div></div>

One-Handed: Can only be used if held in the main hand.

Two-Handed: Usable only when held in the main hand, disabling any offhand functionality.

Dual Wielding: Usable in the offhand when a weapon of the same type is equipped in the main hand.

!!! tip
	If you want to use weapon types from other mods, such as Weapons of Miracle, ensure you update the Mod ID before the weapon type.<br> For example, use ``"coolmodid:rapier"`` instead of ``"epicfight:rapier"``.

***

`attributes`: Determines whether the weapon's stats change when an item is held in the offhand.

* `common`: Indicates that the weapon maintains the same stats regardless of whether something is held in the offhand or if the weapon type is restricted to two-handed use.

* `one_hand/two_hand`: Allows the weapon to have different stats depending on whether the offhand is empty, provided the weapon type does not enforce a two-handed style.

***

### :material-pencil-circle: Attribute Modifiers Overview

<blockquote>The next few attribute values are added to their base values.</blockquote>

`armor_negation`: Determines the percentage of damage unaffected by defense points. (base value: 0.0)

`impact`: Increases the stun duration applied to the hit target. (base value: 0.5)

`max_strikes`: Specifies the maximum number of enemies that can be hit in a single swing.  (base value: 1.0)

`damage_bonus`: Increases the weapon's damage output. (base value: 0.0)

`speed_bonus`: Enhances the weapon's attack speed. (base value: 0.0)

***

## **:fontawesome-solid-lightbulb: Resizing collider**

Adjust the collider size to ensure it aligns visually with the weapon.

 > Here's a simple example of an armor config:

```JSON
 {
 	"attributes":
 	{
 		...
 	},
 	"collider":
 	{
 		"number": 3,
 		"center": [0.0, 0.0, -1.0],
 		"size": [0.5, 0.8, 1.0]
 	}
 }
```

`number`: Defines the number of colliders interpolating between the previous pose and the current one. Higher values improve collision detection accuracy but increase computational overhead.

`center`: Specifies the central position of the collider.

`size`: Sets the x, y, and z dimensions of the collider.

Estimating the collider size purely through numerical values can be challenging. To save time, use presets as a reference. Copy the preset values and adjust the size incrementally for fine-tuning. [:octicons-arrow-right-24: Collider Presets](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/ColliderPreset.java)


***
## **:fontawesome-solid-lightbulb: Armor file**

 > Here's a simple example of an armor config:

``` json
 {
 	"attributes": {
 		"stun_armor":1.5,
 		"weight":8.2
 	}
 }
```

`stun_armor`: Increases the time between stuns.

`weight`: Reduces the stun duration when hit, but also increases stamina consumption for skills and decreases attack speed. Items with higher attack speed will experience a more significant effect.

***
## **:material-package-variant: Finishing up the Datapack**

What you should have now is:

* The data folder that contains all the JSON files and other folders like capabilities.
* The pack.mcmeta file.


### :material-mail: Preparing the Datapack for Sharing

To prepare the datapack for sharing, follow these steps to zip it using 7-Zip:

1. Place the data folder and the pack.mcmeta file in a new folder. Preferably name the folder "datapack"
2. Select both the ``data`` folder and the ``pack.mcmeta`` file.
3. Right-click the folder and select 7-Zip > Add to archive.
4. Finally, select Add to ``"datapack.zip"`` (make sure the ``.zip`` file format is selected)

> ![](https://user-images.githubusercontent.com/86358160/171872228-00816dc2-cf98-4bdc-bddf-a3a7bd1cd9c1.PNG)

Then right-click, go under 7-Zip, and click on `add to "datapack.zip"`.

To enable your datapack, follow these steps:<br>

1. **Place the Datapack in the World Folder**:  
   \- Navigate to your Minecraft world's folder.  
   \- Inside the world folder, open the **datapacks** folder.  
   \- Move or copy the zipped datapack (e.g., `datapack.zip`) into the **datapacks** folder.  

2. **Enable the Datapack**:  
   \- If the datapack is zipped, unzip it by extracting it into the **datapacks** folder.  
   \- Then, either launch Minecraft and load the world, or use the following command in-game to enable the datapack:
     ```
     /datapack enable <datapack_name>
     ```
   - If you're creating a new world, you can enable the datapack by selecting it in the "Datapacks" menu when creating the world.

3. **Check if the Datapack is Active**:  
   \- You can check if the datapack is enabled by using the command:
     ```
     /datapack list
     ```
   - This will display all active datapacks in your world.

Now your datapack should be enabled, and you can start using its features in the world!

***
