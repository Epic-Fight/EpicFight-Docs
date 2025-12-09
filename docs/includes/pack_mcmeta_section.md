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
		"pack_format":48,
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
		<tr>
			<td>1.21.1</td>
			<td>48</td>
		</tr>
	</tbody>
</table>

</center>
</div></div>