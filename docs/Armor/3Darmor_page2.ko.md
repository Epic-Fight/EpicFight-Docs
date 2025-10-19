---
search:
  exclude: true
---
# 3D 방어구의 문제에 대한 다른 해결책입니다.
이러한 해결책은 blender에서 갑옷을 수동으로 패치하는 것만큼 효과적이지 않을 수 있습니다. 이 도구들은 주로 모드팩 및 모드 개발자들이 자신들의 갑옷을 테스트하기 위해 사용합니다. 만약 갑옷을 제대로 패치하고 게임 내에서 작동하는지 확인하려면, _**[커스텀 3D 방어구 리소스 팩](armor/page1)**_으로 이동해주세요.


***
## **💡 방어구 디버깅 모드를 사용하여 시각적으로 완벽한 갑옷 만들기**

마인크래프트에서는 방어구 디버깅 모드를 활성화하기 위해 F3+Y를 누르면 됩니다. 이렇게 하면 매 프레임마다 갑옷 모델이 생성되어 모델 생성 알고리즘의 결과를 확인할 수 있습니다. 그러나 이렇게 하면 fps가 심각하게 떨어질 수 있으므로 일반적인 상황에서는 이 기능을 켜는 것을 권장하지 않습니다.

![image](https://user-images.githubusercontent.com/79469058/168334604-6542eff4-c77e-4ef2-a71a-79ddeef91a9a.png)

_방어구 디버깅 모드로 전환될 때 이 메시지가 표기됩니다._
***
### **📦 리소스 팩으로 모델 내보내기**

모드 구성 화면에서 "Export Armor Models" 버튼을 볼 수 있습니다.[한국어는 다를 수 있습니다.] 이 버튼을 누르면 캐시에 생성된 모든 갑옷 모델이 리소스 팩으로 내보내집니다. 그런 다음 리소스팩을 적용하면 Minecraft를 실행할 때마다 방어구 모델을 디버그할 필요가 없어집니다.

![image](https://user-images.githubusercontent.com/79469058/168339170-1965ad10-eb2a-4ab4-919e-3f5d5b0480fd.png)
***
## **💡 이전의 해결책이 작동하지 않는 경우 다음 대안도 시도해 볼 수 있습니다:**


디버그 모드를 사용하더라도 수정되지 않는 커스텀 방어구가 있습니다. 이유는, 커스텀 방어구를 렌더링하는 방법은 다양하기 때문입니다. 적어도 커스텀 방어구를 보이기 위해서 대체 방법을 선택할 수도 있습니다.

먼저, 해당 갑옷들이 디폴트 모델을 사용하도록 만들어야 합니다. 그리고 당신은 다음 위치에 직접 방어구 모델을 생성할 수도 있습니다.

### assets/`modid`/animmodels/armor/`item_name.json`

방어구에 기본 모델을 할당하려면 "item_name.json" 파일에 아래의 내용을 입력해보세요.

```
{
    "parent": "epicfight:armor/model_name"
}
```
허용되는 모델 이름은 다음과 같습니다.: `helmet_default, chestplate_default, leggings_default, boots_default`

그런 다음, 커스텀 방어구의 텍스쳐를 디폴트 모델의 형식과 일치하도록 수정할 수 있습니다.

![sample](https://user-images.githubusercontent.com/79469058/168444508-f1fb4ebe-5949-40ca-9015-7e920f1e6508.png)

_바닐라 방어구 모델의 텍스쳐 매핑_

다음으로 텍스쳐를 저장하되, 기존의 텍스쳐를 덮어씌우지 않도록 해야합니다. 바닐라 모델을 망가트리지 않도록 주의해야 합니다. 대신 텍스처를 다음 경로에 저장해야 합니다:assets/modid/`existing_path`/epicfight/`texturename` 예를 들어, 경로가 다음과 같다고 가정해봅시다: "assets/minecraft/textures/models/armor/iron_layer_1.png". 이라면 다음과 같이 사용될 것입니다.: "assets/minecraft/textures/models/armor/epicfight/iron_layer_1.png"

## **💡 커스텀 방어구에 투명도 적용하기**
***

일부 커스텀 방어구는 텍스쳐에 투명도가 있습니다. 전투 모드에서 투명하게 만들기 위해서는 아래의 줄을 추가할 수 있습니다.

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