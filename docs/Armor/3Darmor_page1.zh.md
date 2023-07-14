# 3D盔甲&和纹理渲染问题

大多数自定义盔甲在《Epic Fight》中都会损坏。 这是因为 《Epic Fight》 使用自己的模型，不仅适用于实体，也适用于盔甲。 幸运的是，《Epic Fight》有一个基于自定义盔甲的模型生成算法，但有时它会以不好的方式改变它们。 这是模组包开发者的指南，使定制装甲在视觉上完美无瑕，而无需调整我们的源代码。 您可以按照以下步骤来获得修改后的盔甲：

***
所需工具：<br>

* **[BlockBench](https://www.blockbench.net/) (可选)**<br>
* **[Blender 2.79](https://download.blender.org/release/Blender2.79/)**<br>
- **[Blender Json Exporter](https://github.com/Yesssssman/blender-json-exporter)**<br>
- **[Blender Armor 文件](https://drive.google.com/file/d/15xYnpmkmlJaEnw3Y7bykpqmjx1Rr9Koh/view?usp=share_link)**<br>

***
## 💡Remaking armors in Blockbench (Optional)
只要您拥有要修补的模组的官方盔甲文件，您就不需要在 blockbench 中重新制作盔甲。

下载并安装所有三个软件后，您要做的第一件事就是选择一个具有您想要修改的盔甲套件的模组，然后尝试尽可能准确地重新创建模型。 实现此目的的一种有效方法通常是查看游戏中的盔甲并从所需模组的源代码中获取纹理。

 **例如：**

<br>![archers_armor](https://user-images.githubusercontent.com/77132244/215155978-874a293e-71ea-4690-adf3-059e45a37ed8.png) <br>上面是 Dungeon Gear Mod 的 archers_armor 的纹理文件。 让我们看看如何仅使用 Blockbench 重新修改这套盔甲<br>
1. 创建一个通用模型，以便我们以后可以导出它。 最好将模型命名为您可以识别的名称，例如*Archer's Armor*。<br>  
   ![showcase55](https://user-images.githubusercontent.com/77132244/215159597-aac5fdb1-45f1-4084-8f18-50baae9df6f0.jpg)<br>
2. 确保您已安装 CEM 模板加载器，以便可以导入普通模型。 （您可以在文件/插件选项下下载插件）。<br>
3. 从那里，您需要导入所有原版盔甲模型。 （您可以在“工具”/“加载 CEM 模板”/“不支持的实体”下导入原版盔甲模型）。<br>  
   ![showcase66](https://user-images.githubusercontent.com/77132244/215161290-8ecb58ec-55e3-4297-8f46-48551a0769d7.jpg)<br>
4. 导入纹理，并将项目上的纹理大小更改为与纹理相同的大小。 （提示：您可以通过将纹理拖放到每个装甲的部件上来应用模型上的纹理）。<br>  
   ![showcase77](https://user-images.githubusercontent.com/77132244/215230534-6eb84ed6-1afb-4a44-bdf2-3ef98bfccdc6.jpg)<br>
5. 现在，修复纹理，直到它们的顺序正确并且看起来像原始模型。<br>
6. 修改完纹理后，按“ctrl + A”，并确保所有纹理都被使用。 如果您漏掉任何纹理，则意味着您的模型需要更多调整，因此您需要向盔甲添加额外的部件。 就我们的情况而言，弓箭手的盔甲在其帽子上有一个额外的部分，因此我们需要添加一个立方体，并尝试根据地下城装备添加的游戏内盔甲和纹理大小来猜测它的旋转、比例和位置。<br>  
   <br>  <a href="url"><img src="https://user-images.githubusercontent.com/77132244/215236925-8fcf459a-e972-4f2d-b43d-65667ce39e1e.jpg" align="center" ></a><br>
7. 正如您所看到的，经过一些更改后，我们的模型看起来像原始模型，现在我们准备好继续修补每个单独的部分。<br>  
   ![image](https://user-images.githubusercontent.com/77132244/215238157-3ddd8369-6f04-48f5-8d95-0623d833b3be.png)<br>
8. 现在，在导出盔甲文件时，请确保将其导出格式为 .obj，因为这就是我们将在内置blender使用的文件。<br>

***
## 💡 权重绘制和顶点校正
转到 [[Blender 指南|Blender 基础知识以及提示和技巧]] 了解如何使用 Blender 的提示、技巧和修复

1. 首先，打开blender，转到文件/导入/Wavefront (.obj)，然后导入刚刚在 blockbench 中创建的盔甲文件。
2. 之后，选择一个盔甲部件进行修补。 我们将首先修补头层。 因此，我们将选择构成弓箭手盔甲头盔的每个立方体和部件。 对于我们来说，“head”和“headback.001”是构成头盔的部件，因此我们将选择两者并按“ctrl + j”将所有部件连接到一个模型_（提示 ：要连接所有部分，您需要处于对象模式）_。  
   **选择**  
   ![image](https://user-images.githubusercontent.com/77132244/215290753-d88f7ed2-a32b-43bc-9e33-a35c273d04b9.png)  
   **加入** _（随意将新加入的模型重命名为其对应的盔甲部分，在我们的例子中，我后来将其重命名为“头盔”）_。  
   ![image](https://user-images.githubusercontent.com/77132244/215290768-f91985a4-31a5-4606-bd25-91b150ba0119.png)  
   _（在这些屏幕截图中，所有其他装甲部件都被隐藏）_
3. 在对象模式下，通过单击_“alt + r”_来纠正导入旋转和位置； _“alt + g”_。
4. 在编辑模式下，旋转模型并将其位置更正到原始位置，然后再重置对象模式上的旋转/位置。
5. 现在，修复导入旋转后，我们将通过进入对象模式，选择头盔模型和骨架，然后转到Object/Parent/Armature Deform/With Empty Groups/With Empty Groups，将模型作为骨架的Parent。 现在你已经成功地将模型上传到armature，让头部去做权重绘制。 _（提示：您可以通过按住 Shift 键并右键单击两个内容来选择它们。 确保在对象模式下选择两者，而不是设置或编辑模式）_ ![image](https://user-images.githubusercontent.com/77132244/218175943-dcde10ab-9f45-4fb3-a1ec-a2ec7f851483.png) ![image](https://user-images.githubusercontent.com/77132244/218176163-4972a8bf-a70d-4570-aafe-a0b9a0bbcb85.png)
6. 通过选择头盔模型，并从对象模式切换到权重绘制，我们最终将应用顶点组变形，以便在玩家播放任何动画时头盔跟随头部。![image](https://user-images.githubusercontent.com/77132244/218176695-4cfafe68-7010-4450-a5f8-93e3dff1f3dd.png)
7. 要应用权重绘制，请确保您可以看到顶点并且启用了线框模式，如下图所示：![Showcase89](https://user-images.githubusercontent.com/77132244/218177435-f9d01478-fbe0-45f9-b754-adf5d2efa745.jpg)
8. 现在您可以从一系列画笔中进行选择来应用权重涂料，但我们主要使用的是subtract和add![image](https://user-images.githubusercontent.com/77132244/218177593-95794246-6d9a-4caf-afa2-636b784b8d3a.png)
9. 在右侧选择所需的顶点组，我们将在修补头盔时使用头部组。![Showcase99](https://user-images.githubusercontent.com/77132244/218178265-69388152-b465-45e5-8ccd-cfe3e430dfb7.jpg)
10. 现在，继续绘制整个模型，使其跟随整个头部。 最后你将能够得到这样的东西： ![image](https://user-images.githubusercontent.com/77132244/218178527-210b4b77-5f16-4cf7-9310-6c2b3e2ce83a.png)
11. 您可以通过在pose模式下转到骨架并旋转头骨来测试是否已成功将头盔重绘到头部。 如果您的模型遵循头骨，那么它是正确的，如果不是，请返回几步并重新检查是否遗漏了某些内容。 ![2023-02-10-16-20-11](https://user-images.githubusercontent.com/77132244/218179173-df15dcba-97fa-4081-ad1d-cf1ffbcd92e8.gif)
***
## 💡 导出修改后的模型
现在您已经修改了模型，您将需要导出您的作品并在游戏中应用更改。 但你怎么能这么做呢？ 嗯，这真的很简单。

1. 确保您的项目中没有任何盔甲部件或不需要的模型，并且仅像这样导出所需的盔甲部件。 _（提示：您无法一次导出两个盔甲部件，因此一次导出一个并删除所有其他部件。）_  
   ![image](https://user-images.githubusercontent.com/77132244/218179518-18c8d979-68af-44ff-989a-aa55ebb6c239.png)
2. 清理完所有不需要的模型或不会导出的盔甲部件后，前往File/Export/Animated Minecraft Model  (.json)  
   ![image](https://user-images.githubusercontent.com/77132244/218179838-bbc7d557-8525-4ab8-beaf-41211bf334fd.png)
3. 确保您只选择了“Export Mesh”，因为我们只导出盔甲，而不是动画或自定义骨架。  
   ![image](https://user-images.githubusercontent.com/77132244/218179992-0f54bb48-99b6-45c2-8166-107668b200e7.png)
4. 检查导出名称，看看它是否与游戏中的自定义盔甲注册表名称匹配。  
   ![image](https://user-images.githubusercontent.com/77132244/218180136-b229edd0-3941-4a68-b82b-dfc0fcf80bca.png)
5. 完成后单击“导出到 Json Minecraft”。  
   ![image](https://user-images.githubusercontent.com/77132244/218180246-7c04c4ad-ad96-4361-b43a-3ff434de419d.png)
6. 现在转到您的游戏，选择资源包，然后在资源包文件夹中创建一个新文件夹。 在其中，您可以像这样创建 pack.mcmeta：
### 制作 pack.mcmeta 文件

首先，您需要创建一个 pack.mcmeta，方法是制作一个普通的 txt 文件并将其重命名为 pack.mcmeta（确保文件扩展名已打开）。

之后编辑它并添加这些代码行以使您的数据包正常工作。
```JSON
{
    "pack":{
        "pack_format":6,
        "description":"A short description on your pack"
        }
}
```

### pack_format 值

| 版本            | 数值 |
| ------------- | -- |
| 1.16.2–1.16.5 | 6  |
| 1.17.x        | 7  |
| 1.18.2        | 9  |

### 制作文件夹路径

您需要创建一系列具有以下名称的文件夹。 每个文件夹或文件都需要位于最后一个文件夹或文件中。

`assets -> "modid" -> animmodels -> armor -> "registryname".json` _（将导出的装甲文件拖放到此处）_


🎉 **恭喜，你已经成功修改了你的盔甲。** 🎉


**_这里有一些更简单的盔甲修补解决方案：[针对 3D 盔甲故障的其他解决方案](3Darmor_page2.zh.md)_**