# 3D방어구 & 텍스쳐 렌더링 문제

대부분의 커스텀 방어구는 Epic fight 모드에서 망가집니다. 이유는, Epic fight 모드는 엔티티 뿐만 아니라 갑옷에도 고유한 모델을 사용하기 때문입니다. 따라서 갑옷을 리메이크 하는 작업도 필요합니다. 다행히도, Epic fight 모드에는 커스텀 방어구를 기반으로 한 모델 생성 알고리즘이 있지만, 알고리즘이 원하는 대로 변경되지 않는 경우도 있습니다. 이 가이드는 모드 팩 제작자들이 소스 코드를 수정하지 않고도 시각적으로 완벽한 커스텀 방어구를 만들 수 있도록 도와주는 자료가 될것입니다. 다음은 패치된 갑옷을 만들기 위해 따라해야하는 단계입니다.:

***
필요한 도구:<br>

* **[BlockBench](https://www.blockbench.net/) (선택 사항)**<br>
* **[Blender 2.79](https://download.blender.org/release/Blender2.79/)**<br>
- **[Blender Json Exporter](https://github.com/Yesssssman/blender-json-exporter)**<br>
- **[Blender Armor Files](https://drive.google.com/file/d/15xYnpmkmlJaEnw3Y7bykpqmjx1Rr9Koh/view?usp=share_link)**<br>

***
## 💡 블록벤치(Blockbench) 를 사용하여 갑옷 리메이크하기 (선택 사항)
방어구의 모델 파일이 이미 있는 경우에는, 블록 벤치에서 다시 만들 필요는 없습니다.

세 가지 소프트웨어를 다운로드 하고, 첫 번째로 해야할 것은, 패치하고자 하는 방어구 세트가 있는 모드를 선택하고, 가능한 정확하게 해당 모델을 재 생성하는것입니다. 이를 편하고 효율적으로 하는 방법은, 일반적으로 게임 내에서 방어구를 확인하고, 원하는 모드의 소스 코드에서 텍스쳐를 가져오는 것 입니다.

 **예시:**

<br>![archers_armor](https://user-images.githubusercontent.com/77132244/215155978-874a293e-71ea-4690-adf3-059e45a37ed8.png) <br>위의 자료는 Dungeon Gear모드의 궁수 갑옷에 대한 텍스쳐 파일입니다. Blockbench만을 이용하여 이 방어구를 다시 만드는 방법을 알아보겠습니다.<br>
1. 나중에 블렌더 모델로 내보낼 수 있도록 [Generic Model] 모델로 만들어주세요. 가능하다면 모델을 인식할 수 있는 이름으로 지정해주세요. 예를 들어서, *Archer's Armor* 같이 지정합니다.<br>  
   ![showcase55](https://user-images.githubusercontent.com/77132244/215159597-aac5fdb1-45f1-4084-8f18-50baae9df6f0.jpg)<br>
2. [CEM Template Loader] 가 설치되어 있는지 확인하고, 바닐라 모델을 불러올 수 있도록 해주세요. (File/Plugins option에서 플러그인을 다운로드 할 수 있습니다.)<br>
3. 그런 다음에, 바닐라의 방어구 모델을 모두 가져와야 합니다. (바닐라 방어구 모델은 [Tools/Load CEM Template/Unsupported Entities] 에서 가져올 수 있습니다.)<br>  
   ![showcase66](https://user-images.githubusercontent.com/77132244/215161290-8ecb58ec-55e3-4297-8f46-48551a0769d7.jpg)<br>
4. 텍스쳐를 가져온 다음, 프로젝트 내에서 가져온 텍스쳐와 동일한 크기로 텍스쳐 크기를 변경해주세요. (팁: 각각의 갑옷 부분 그룹에 텍스쳐를 적용하기 위해서 드래그 앤 드롭으로 텍스쳐를 간단하게 적용할 수 있습니다.)<br>  
   ![showcase77](https://user-images.githubusercontent.com/77132244/215230534-6eb84ed6-1afb-4a44-bdf2-3ef98bfccdc6.jpg)<br>
5. 이제, 텍스쳐를 수정하고 올바른 순서로 배치하여 원래 모델과 같은 모습을 갖도록 조정해주세요.<br>
6. 텍스쳐를 정리해 준 다음 "Ctrl + A"를 눌러서 모든 텍스쳐가 사용되고 있는지 확인해주세요. 만약에 어떤 텍스쳐를 실수로 놓친다면,혹은 누락된다면 모델을 더 조정해야하므로 추가 부분을 갑옷에 추가해야 할 것입니다. 우리의 경우, 궁수 갑옷에는 모자와 같은 추가적인 부분이 있으므로 cube를 추가하고, Dungeon's gear 모드에 있는 게임 내 갑옷과 텍스쳐 크기를 기반으로 회전,크기 조정 및 위치를 추측해야 합니다.<br>  
   <br>  <a href="url"><img src="https://user-images.githubusercontent.com/77132244/215236925-8fcf459a-e972-4f2d-b43d-65667ce39e1e.jpg" align="center" ></a><br>
7. 보시다시피 몇 가지 변경을 거쳐서 원본과 비슷한 모델을 얻었으며, 이제 블렌더로 이동하여 각 개별 부분을 패치할 준비가 되었습니다.<br>  
   ![image](https://user-images.githubusercontent.com/77132244/215238157-3ddd8369-6f04-48f5-8d95-0623d833b3be.png)<br>
8. 이제, 방어구 파일을 내보낼 때에는 .obj 형식으로 내보내주세요. 이유는 이후에 블렌더에서 사용할 것이기 때문입니다.<br>

***
## 💡 웨이트 페인트와 버텍스 보정
Blender 사용 팁, 트릭 및 문제 해결 방법에 대한 자세한 정보는 [Blender 기본 및 팁과 트릭](Blender_page3) 을 참조해주세요

1. 먼저, 블렌더를 열고 file/import/Wavefront (.obj)로 이동한 다음, 방금 Blockbench에서 생성한 방어구 파일을 가져옵니다.
2. 이후에는 패치할 방어구 부분을 선택해주세요. 저희는 먼저 머리 부분을 패치할 것입니다. 그러므로 궁수 갑옷의 머리를 구성하는 모든 cube 부분을 선택합니다. 저희의 경우에는 "head"와 "headback.001"이 헬멧을 구성하는 부분입니다. 따라서 이 두 부분을 모두 선택하고 "Ctrl + J"를 눌러서 모든 부분을 하나의 단일 모델로 합쳐줍니다. _(팁: 모든 부분을 합치려면 오브젝트 모드 상태여야 합니다.)_  
   **선택**  
   ![image](https://user-images.githubusercontent.com/77132244/215290753-d88f7ed2-a32b-43bc-9e33-a35c273d04b9.png)  
   **합치기**_(합쳐진 새 모델을 해당 갑옷 부분과 일치하는 이름으로 변경해도 됩니다. 저희 경우에는 나중에 "Helmet"으로 이름을 바꿨습니다)_  
   ![image](https://user-images.githubusercontent.com/77132244/215290768-f91985a4-31a5-4606-bd25-91b150ba0119.png)  
   _(이 스크린샷에서 다른 갑옷 부분은 모두 숨겨져 있습니다.)_
3. 오브젝트 모드상태에서, 가져온 모델의 회전과, 위치를 수정하기 위해서 _"Alt + R"_ 및 _"Alt + G"_를 클릭하여 수정해주세요.
4. 편집 모드에서 모델을 회전시키고 위치를 수정하여 원래 위치로 되돌려주세요. 그 후에는 오브젝트 모드에서 rot/pos를 재설정해주세요.
5. 이제 가져온 모델을 수정한 후에는, 오브젝트 모드로 변경하여 헬멧 모델과 뼈대를 선택한 다음 Object/Parent/Armature Deform/With Empty Groups/With Empty Groups로 이동하여 모델을 뼈대의 부모로 설정합니다. 이제 모델을 뼈대의 부모로 설정한 것이 성공했으니 웨이트 페인팅으로 이동해 봅시다. _(팁: Shift 키를 누른 상태에서 오른쪽 클릭하여 두 가지를 선택할 수 있습니다.) 둘 다 포즈 또는 편집 모드가 아닌 개체 모드에서 선택되었는지 확인해주세요.) _ ![image](https://user-images.githubusercontent.com/77132244/218175943-dcde10ab-9f45-4fb3-a1ec-a2ec7f851483.png) ![image](https://user-images.githubusercontent.com/77132244/218176163-4972a8bf-a70d-4570-aafe-a0b9a0bbcb85.png)
6. 헬멧 모델을 선택한 다음, 오브젝트 모드에서 웨이트 페인트 로 전환하면 최종적으로 버텍스 그룹 변형을 적용하여 플레이어가 애니메이션을 재생할 때마다 헬멧이 머리를 따라다니게 됩니다. ![image](https://user-images.githubusercontent.com/77132244/218176695-4cfafe68-7010-4450-a5f8-93e3dff1f3dd.png)
7. 웨이트 페인트를 적용하기 위해 정점(vertices) 을 볼 수 있고, 다음 사진과 같이 와이어프레임 모드(wireframe mode) 가 활성화되어 있는지지 확인해주세요.: ![Showcase89](https://user-images.githubusercontent.com/77132244/218177435-f9d01478-fbe0-45f9-b754-adf5d2efa745.jpg)
8. 이제 다양한 브러시 중에서 웨이트 페인트를 적용할 브러시를 선택할 수 있습니다. 하지만 주로 사용하는 브러시는 빼기(subtract) 와 추가(add) 입니다. ![image](https://user-images.githubusercontent.com/77132244/218177593-95794246-6d9a-4caf-afa2-636b784b8d3a.png)
9. 오른쪽에서 원하는 버텍스 그룹을 선택하십시오. 헬멧을 패치하기 때문에 작업할 그룹은 "head" 그룹입니다. ![Showcase99](https://user-images.githubusercontent.com/77132244/218178265-69388152-b465-45e5-8ccd-cfe3e430dfb7.jpg)
10. 이제 모델 전체를 페인트하여, 전체 머리를 따라가도록 만들어주는 방식으로 진행해주세요. 최종적으로는 다음과 같은 결과를 얻을 수 있습니다.: ![image](https://user-images.githubusercontent.com/77132244/218178527-210b4b77-5f16-4cf7-9310-6c2b3e2ce83a.png)
11. 헬멧을 머리에 부모로 설정하고 웨이트 페인팅을 성공적으로 진행했는지 확인하기 위해 뼈대를 포즈 모드로 전환하고 머리의 본을 회전시켜 보세요. 그리고, 헬멧이 머리와 함께 움직이는지 확인해주세요. 만약 모델이 머리의 본을 따라 움직인다면 성공적입니다. 만약 그렇지 않다면, 몇 가지 단계를 되돌아가서 빠뜨린 부분이 있는지 다시 확인해주세요. ![2023-02-10-16-20-11](https://user-images.githubusercontent.com/77132244/218179173-df15dcba-97fa-4081-ad1d-cf1ffbcd92e8.gif)
***
## 💡패치 된 모델을 내보내기
패치 작업을 완료한 후에는 작업한 내용을 내보내고, 게임에서 변경 사항을 적용할 수 있습니다. 하지만 그것을 어떻게 할 수 있을까요? 그것은 정말 간단합니다.

1. 프로젝트에 방어구 부품이나, 자신이 원하지 않는 모델이 없는지 확인해준 다음, 내보내고자 하는 방어구만 포함되도록 해주세요. _(팁: 한 번에 두 개의 방어구 파츠를 내보낼 수 없으므로 하나씩 내보내고 다른 모든 부분을 삭제해주세요.)_  
   ![image](https://user-images.githubusercontent.com/77132244/218179518-18c8d979-68af-44ff-989a-aa55ebb6c239.png)
2. 내보내지 않을 모델이나 방어구 파츠를 제거한 후, File/Export/Animated Minecraft Model (.json)로 이동해주세요.  
   ![image](https://user-images.githubusercontent.com/77132244/218179838-bbc7d557-8525-4ab8-beaf-41211bf334fd.png)
3. 애니메이션이나 사용자 지정 뼈대(custom armature) 가 아닌 방어구만 내보내므로, 내보내기 메뉴에서 오직 "Export Mesh"만 선택되어 있는지 확인하세요.  
   ![image](https://user-images.githubusercontent.com/77132244/218179992-0f54bb48-99b6-45c2-8166-107668b200e7.png)
4. 게임 내의 커스텀 방어구 레지스트리 이름과 내보내기 이름이 일치하는지 확인해주세요  
   ![image](https://user-images.githubusercontent.com/77132244/218180136-b229edd0-3941-4a68-b82b-dfc0fcf80bca.png)
5. 내보내기를 완료한 후에는 "마인크래프트용 Json 내보내기(Export to Json Minecraft)"을 클릭해주세요.  
   ![image](https://user-images.githubusercontent.com/77132244/218180246-7c04c4ad-ad96-4361-b43a-3ff434de419d.png)
6. 이제 게임으로 이동하여 리소스팩을 선택한 다음, 리소스팩 폴더 내에 새 폴더를 생성해주세요. 그 안에 pack.mcmeta 파일을 다음과 같이 생성할 수 있습니다.
### pack.mcmeta 파일 만들기

먼저, 일반 텍스트 파일을 만들고 확장자가 표시되도록 설정한 뒤, 파일의 이름을 pack.mcmeta로 변경해야 합니다.

그 후, 편집하여 데이터팩이 작동할 수 있도록 아래와 같은 코드 라인을 추가해주세요.
```JSON
{
    "pack":{
        "pack_format":6,
        "description":"팩에 대한 간단한 설명."
        }
}
```

### pack_format 값

| 버전            | 값 |
| ------------- | - |
| 1.16.2–1.16.5 | 6 |
| 1.17.x        | 7 |
| 1.18.2        | 9 |

### 폴더 경로 만들기

다음 이름들로 폴더들을 생성해야 합니다. 모든 폴더 또는 파일은 마지막 폴더 안에 있어야 합니다.

`assets -> "modid" -> animmodels -> armor ->>"registryname".json` _(내보낸 방어구 파일을 이곳에 놓으세요)_


🎉 **축하합니다! 성공적으로 따라하셨다면 성공적으로 패치를 완료하였습니다!** 🎉


**_만약 문제가 있다면 여기 3D 방어구 패치를 위한 더 간단한 몇 가지 해결책이 있습니다: [3D 방어구 오류에 대한 기타 해결책](3Darmor_page2)_**