### :fontawesome-solid-folder: Making the folder path

To set up the folder structure, follow these steps. Each folder or file must be nested inside the previous one as per the hierarchy shown below:

<center>
    <code>
        data 
        <span class="twemoji">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
        </span> 
        "modid" 
        <span class="twemoji">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
        </span> 
        capabilities 
        <span class="twemoji">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
        </span> 
        "type" 
        <span class="twemoji">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.22 19.03a.75.75 0 0 1 0-1.06L18.19 13H3.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l6.25 6.25a.75.75 0 0 1 0 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0Z"></path></svg>
        </span> 
        "registryname".json
    </code>
</center>

<div class="content-container2">
    <div class="text-section2" style="--text-max-width: 70%;">
        <ul>
            <li>
                <p>
                    <div class="hover-text" data-left="12.0%" data-top="69.0%" data-width="34.0%" data-height="10.5%" style="padding: 0px 0px;display: block;">
                        <code>modid</code>: The mod ID is usually the name of the mod. You can often find it by checking in-game item tooltips (press <code>F3 + H</code> to enable Advanced Tooltips) or by looking at commands or messages related to the mod.<br><br> For example, if the tooltip for an item shows <code>modid:itemname</code>, the part before the colon <code>(modid)</code> is what you’ll use to name the <code>"modid"</code> folder.<br>
                    </div>
                </p>
            </li>
            <br>
            <li>
                <p>
                    <code>type</code>: This refers to the category of the item you’re configuring. Use either <code>weapons</code> or <code>armors</code>.<br>
                </p>
            </li>
            <br>
            <li>
                <p>
                    <div class="hover-text" data-left="45.0%" data-top="69.0%" data-width="50.0%" data-height="10.5%" style="padding: 0px 0px; display: block;">
                        <code>registryname</code>: To locate an item’s registry name, press <code>F3 + H</code> in-game to enable Advanced Tooltips. Then, hover over the item to view its registry name.<br>
                    </div>
                </p>
            </li>
        </ul>
    </div>
    <div class="image-section2">
        <center>
            <div class="grow-effect" style="--scale-size: 1.03;">
                <div class="glow-box3"></div> 
                <img src="/assets/images/tooltips_example1.png" class="white-border" style="--image-width: 400px;">
            </div>
		</center>
        <br>
        <div class="admonition tip"">
                <p class="admonition-title">Tip</p>
                <p><span style="font-size: 0.5rem;">When you create the <code>registryname.json</code> file under the referenced file directory, make sure the file extension is changed from <code>.txt</code> to <code>.json</span></code></p>
        </div>
    </div>
</div>