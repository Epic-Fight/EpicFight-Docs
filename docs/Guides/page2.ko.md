# 커스텀 무기 빛 방어구 데이터팩

## **💡 pack.mcmeta 파일 만들기**

먼저, 일반 텍스트 파일을 만들고 파일 이름을 pack.mcmeta로 변경하여 pack.mcmeta 파일을 생성해야 합니다. (파일 이름 확장자 표시가 켜져 있는지 확인해주세요.)

그 후, pack.mcmeta 파일을 편집하여 데이터팩이 작동하도록 아래의 코드 라인을 추가해주세요.
```JSON
{
    "pack":{
        "pack_format":6,
        "description":"팩에 대한 간단한 설명."
        }
}
```

### **📄 pack_format 값**

| 버전            | 값 |
| ------------- | - |
| 1.16.2–1.16.5 | 6 |
| 1.17.x        | 7 |
| 1.18.2        | 9 |

### **🗂 폴더 경로 만들기**

다음 이름들로 폴더들을 생성해야 합니다. 모든 폴더 또는 파일은 마지막 폴더 안에 있어야 합니다.

**data -> "modid" -> capabilities -> "type" -> "레지스트리 이름".JSON**

*만약 패치하려는 무기의 레지스트리 이름에 슬래시(/)같은 예기치 않은 구문를 가지고 있는 경우:* **"bloodandmadness:weapons/hunter_axe"**

 이런 예기치 않은 구문(슬래시) 등을 폴더 경로 구조에서는 다음과 같이 표시할 수 있습니다.

 **data -> "modid" -> capabilities -> "type" -> "슬래시 앞 텍스트" ... -> "레지스트리이름".JSON**

 따라서 앞에서 언급했던 예시 ("bloodandmadness:***weapons***/hunter_axe") 의 폴더 경로는 다음과 같습니다.:

 **data -> bloodandmadness -> capabilities -> weapons -> *weapons* -> hunter_axe.JSON**

***

`modid`: 호환시키고싶은 모드에서 압축 프로그램을 사용하여 압축 파일을 열면 modid를 찾을 수 있습니다. Data 폴더를 클릭하면 "modid"폴더를를 찾을 수 있습니다.

`type`: `weapons` 또는 `armors`

`registrynames`: 게임 내에서 F3+H를 눌러 고급 툴팁을 활성화하면 구성하려는 아이템의 레지스트리 이름을 보실 수 있습니다.
> ![2022-05-29_16 48 36](https://user-images.githubusercontent.com/86358160/170875930-7bae2b88-2aa1-41fe-a59b-5de4027e563f.png)
> 
> ![2022-05-29_16 51 08](https://user-images.githubusercontent.com/86358160/170876568-5838849a-f578-42ae-8d50-f24fb3f9df6d.png)

### **❗️반드시 registrynames + `.json` 형식으로 지정하셔야 합니다**
***
## **💡JSON 파일 만들기**

### **⚔️ 무기 파일**

 > 아래는 간단한 검의 config 예시입니다:

```
 {
    "type": "sword",
    "attributes": {
        "common": {
            "armor_negation": 0.0,
                "impact": 1.1,
            "max_strikes": 1
        }
    }
 }
```

### **🗡 한손/양손 무기 파일**

 > 아래는 한손과 양손 속성을 가진 창의 config 예시입니다:

```
 {
    "type": "spear",
    "attributes": {
        "one_hand": {
            "armor_negation": 8.0,
                "impact": 1.9,
            "max_strikes": 1
        },
        "two_hand": {
            "armor_negation": 0.0,
                "impact": 1.3,
            "max_strikes": 3
        }
    }
 }
```

`type`: 사용할 애니메이션의 종류입니다. 가능한 type 값은 아래와 같습니다:

| 타입         | 스타일 정보 |
| ---------- | ------ |
| axe        | 한손     |
| fist       | 쌍수     |
| hoe        | 한손     |
| pickaxe    | 한손     |
| shovel     | 한손     |
| sword      | 쌍수     |
| spear      | 한손/양손  |
| greatsword | 양손     |
| katana     | 양손     |
| tachi      | 양손     |
| longsword  | 양손     |
| dagger     | 쌍수     |
| bow        | 양손     |
| crossbow   | 양손     |
| trident    | 한손     |
| shield     | 쌍수     |

한손: 메인 손에 들고있을 때에만 사용할 수 있습니다.

양손: 메인 손으로 잡고있고, 반대쪽 손을 사용하지 않을 때만 사용할 수 있습니다.

쌍수: 동일한 타입의 무기를 주 손에 들고있을경우에 사용하실 수 있습니다.

***

`attributes`: 양손에 무언가를 들고 있을 떄 무기의 특성이 다르게 적용되어야 하는지 결정합니다.
* `common`: 양손에 무언가를 들고 있는지 여부에 상관없이 무기의 특성이 동일하게 적용되어야 하는지, 또는 해당 무기 유형이 양손 사용이 제한이 있는지 여부를 나타냅니다.

* `one_hand/two_hand`: 무기 유형이 양손 스타일을 가지고 있지 않는 경우, 양손에 무언가를 들고 있는지 여부에 따라서 특성을 다르게 설정할 수 있습니다.

***

### **🔵다음 몇개의 속성 값은 해당 속성의 기본값에 추가됩니다**

`armor_negation`: 이 퍼센트는 총 피해량을 방어력으로 인해 감소시키지 않습니다.(일부 방어력을 무시합니다) (base value: 0.0)

`impact`: 이 속성은 타격 대상의 경직 시간을 증가시킵니다. (base value: 0.5)

`max_strikes`: 한 번의 공격에 맞을 수 있는 최대 적 수입니다. (base value: 1.0)

`damage_bonus`: 이 속성은 피해량을 증가시킵니다. (base value: 0.0)

`speed_bonus`: 이 속성은 공격 속도를 증가시킵니다. (base value: 0.0)

***

## **💡접촉체 크기 조정**

시각적으로 일치하도록 접촉체 크기를 조정할 수 있습니다.

 > 아래는 방어구 구성의 간단한 예시입니다:
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

`number`: 이전 포즈와 현재 포즈 사이에서 보간하는 접촉체의 개수. 더 높은 값은 충돌 감지의 정확도를 높이지만 추가적인 오버헤드(부하) 가 발생합니다.

`center`: 접촉체의 중심 위치.

`size`: 접촉체의 x, y, z 크기.

수치로만은 접촉체의 크기를 예측하는 것은 어렵습니다. 하지만, 프리셋을 참고한다면 시간을 절약할 수 있습니다. 프리셋의 값을 복사 한 다음, 점진적으로 크기를 수정해 나가는게 시간이 절약됩니다.

[접촉체 프리셋](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/ColliderPreset.java)
***
## **💡 방어구 파일**

 > 아래는 간단한 방어구의 config 예시입니다:

```
 {
    "attributes": {
        "stun_armor":1.5,
        "weight":8.2
    }
 }
```

`stun_armor`: 이 속성은 다음 스턴이 발생되기 까지의 간격이 길어집니다.

`weight`: 이 속성은 공격받을 때 스턴 시간을 줄이지만, 스킬의 스태미나 소모를 증가시키고 공격 속도를 감소시킵니다. 높은 공격속도를 가진 아이템일수록 영향을 더 받습니다.
***
## **📦 데이터팩 완성시키기**

이제 여러분들은 다음과 같은 결과물이 있어야 합니다.
* Data 폴더 안에는 JSON 파일과 capabilities와 같은 폴더가 포함되어 있어야 합니다.
* Pack.mcmeta 파일
***
### **✉️ 만약 데이터 팩을 공유, 전송하려면 다음 단계가 필요합니다.**

데이터 팩을 zip파일로 만들 필요는 없으며, 단순히 data폴더와 pack.mcmeta 파일을 다른 폴더에 넣어도 됩니다. 그러나 압축 프로그램을 사용하는 방법도 설명해드리겠습니다.

> 먼저, data 폴더와 pack.mcmeta 파일을 모두 선택해야 합니다.
> 
> ![data pack mcdata](https://user-images.githubusercontent.com/86358160/171872228-00816dc2-cf98-4bdc-bddf-a3a7bd1cd9c1.PNG)

그런 다음 마우스 오른쪽 버튼을 클릭하고 압축 프로그램을 선택한 다음 `"datapack.zip"에 추가를 클릭합니다.`

그게 다입니다. 이제 단순히 데이터 팩을 월드의 데이터 팩 폴더에 넣고 즐기시면 됩니다 :)
***

**읽기보다는 영상을 더 좋아하는 분들을 위한 [YouTube 튜토리얼](https://www.youtube.com/watch?v=JNpahwjriac&t=33s) 도 있습니다**
