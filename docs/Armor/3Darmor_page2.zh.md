---
search:
  exclude: true
---
# 3D 盔甲故障的其他解决方案
请注意，这些解决方案可能不如在blender中手动修补盔甲那么有效。 这些工具主要供 modpack 和 mod 开发人员测试他们的盔甲。 如果您想正确修补盔甲并确保它们在游戏中正常工作，请转到_**[Custom 3D armor Resource ](armor/page1)**_


***
## **💡 使用盔甲调试模式制作视觉上完美的盔甲**

在《我的世界》中，您可以通过按 F3+Y 来启用盔甲调试模式。 这将为每一帧创建一个盔甲模型，以检查模型生成算法的结果。 但它可能会导致fps严重下降，所以我不建议在正常情况下打开此功能。

![image](https://user-images.githubusercontent.com/79469058/168334604-6542eff4-c77e-4ef2-a71a-79ddeef91a9a.png)

_当您切换盔甲调试模式时，将显示此消息。_
***
### **📦 将模型导出为资源包**

在模组配置屏幕中。 您可以看到“Export Armor Models”按钮。 它将导出缓存中所有生成的盔甲模型作为资源包。 然后应用资源包，您就不必每次启动 Minecraft 时都调试盔甲模型。

![image](https://user-images.githubusercontent.com/79469058/168339170-1965ad10-eb2a-4ab4-919e-3f5d5b0480fd.png)
***
## **💡如果之前的解决方案不起作用，请用另一种方法**


即使使用调试模式，也有一些自定义盔甲无法修复。 这是因为渲染定制盔甲的方法有很多种。 您可以选择其他方式至少让它们可见。

首先您必须让他们使用默认模型。 您可以在下面创建自己的盔甲模型，

### assets/`modid`/animmodels/armor/`item_name.json`

在 item_name.json 文件中，键入此内容以指定盔甲的默认模型。

```
{
    "parent": "epicfight:armor/model_name"
}
```
Allowed model_names are: `helmet_default, chestplate_default, leggings_default, boots_default`

然后您可以修改自定义盔甲的纹理以匹配默认模型的纹理格式。

![sample](https://user-images.githubusercontent.com/79469058/168444508-f1fb4ebe-5949-40ca-9015-7e920f1e6508.png)

_原版盔甲模型的纹理映射_

接下来保存您的纹理，但它应该避免覆盖现有的纹理，因为它可能会弄乱原版模型。 相反，您应该将纹理保存在路径下：assets/modid/`existing_path`/epicfight/`texturename` 例如，假设路径是：“assets/minecraft/textures/models/armor/iron_layer_1.png”。 您将使用：“assets/minecraft/textures/models/armor/epicfight/iron_layer_1.png”

## **💡 为定制盔甲提供透明度**
***

一些定制盔甲的纹理是透明的。 您可以通过添加这些行使它们在战斗模式下透明。

```
{
    "render_properties": {
        "transparent": true
    },
        "vertices": {
                ...
        }
}
```