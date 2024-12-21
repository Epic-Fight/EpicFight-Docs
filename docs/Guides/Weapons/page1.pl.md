# Datapack z niestandardową bronią i zbrojami

## **💡 Tworzenie pliku pack.mcmeta**

Najpierw musisz utworzyć pack.mcmeta tworząc normalny plik txt i zmieniając jego nazwę na pack.mcmeta (upewnij się, że rozszerzenia nazwy plików są włączone).

Następnie edytuj go i dodaj te linie kodu, aby Twój datapack działał.
```JSON
{
    "pack":{
        "pack_format":6,
        "description":"Krótki opis twojego datapacka"
        }
}
```

### **📄 pack_format Wartości**

| Wersja        | Wartość |
| ------------- | ------- |
| 1.16.2–1.16.5 | 6       |
| 1.17.x        | 7       |
| 1.18.2        | 9       |

### **🗂 Tworzenie ścieżki folderu**

Musisz utworzyć serię folderów o następujących nazwach. Każdy folder lub plik musi znajdować się wewnątrz ostatniego.

data -> "modid" -> capabilities -> "type" -> "registrynames".json

***

`modid`: modid znajdziesz za pomocą programu zip takiego jak 7-zip i klikając "otwórz archiwum" na modzie, który chcesz uczynić kompatybilnym. Stamtąd otworzysz folder danych, a następnie pojawi się nazwa, którą nazwiesz folderem "modid".

`type`: ALBO `weapons` ALBO `armors`

`registrynames`: kiedy jesteś w grze, możesz nacisnąć F3+H, aby włączyć zaawansowane podpowiedzi aby zobaczyć nazwę rejestru elementu, który chcesz skonfigurować.
> ![2022-05-29_16 48 36](https://user-images.githubusercontent.com/86358160/170875930-7bae2b88-2aa1-41fe-a59b-5de4027e563f.png)
> 
> ![2022-05-29_16 51 08](https://user-images.githubusercontent.com/86358160/170876568-5838849a-f578-42ae-8d50-f24fb3f9df6d.png)
> 
> ### **❗ Musisz utworzyć plik txt tylko z zaznaczonym tekstem + `.json`**
***
## **💡 Tworzenie pliku JSON**

### **⚔️ Plik broni**

 > Oto prosty przykład konfiguracji miecza:

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

### **🗡️ Plik broni jedno/dwuręcznej**

 > Oto przykład konfiguracji włóczni z atrybutami jedno- i dwuręcznymi:

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

`type`: Które animacje mają być używane. Dostępne wartości typu:

| Typ        | Informacje o stylu    |
| ---------- | --------------------- |
| axe        | Jednoręczna           |
| fist       | Dwie bronie           |
| hoe        | Jednoręczna           |
| pickaxe    | Jednoręczna           |
| shovel     | Jednoręczna           |
| sword      | Dwie bronie           |
| spear      | Jednoręczna/Dwuręczna |
| greatsword | Dwuręczna             |
| katana     | Dwuręczna             |
| tachi      | Dwuręczna             |
| longsword  | Dwuręczna             |
| dagger     | Dwie bronie           |
| bow        | Dwuręczna             |
| crossbow   | Dwuręczna             |
| trident    | Jednoręczna           |
| shield     | Dwie bronie           |

Jednoręczna: Może być użyta tylko, gdy jest trzymana w głównej ręce.

Dwukrotna: Może być użyta tylko wtedy, gdy jest trzymana w głównej ręce, wyłącza używanie przedmiotów podręcznych.

Dwie bronie: Może być trzymana w drugiej ręce, jeśli ten sam rodzaj broni jest trzymany w głównej ręce.

***

`atrybuty`: Ustala, czy broń powinna mieć inne statystyki, kiedy coś jest trzymane w drugiej ręce
* `common`: Jeśli broń powinna mieć te same statystyki niezależnie od tego, co jest trzymane w drugiej dłoni lub jeśli typ broni ma ograniczenie dwuręczne.

* `one_hand/two_hand`: Jeśli typ broni nie ma dwuręcznego stylu, wtedy mogą mieć różne statystyki, gdy coś jest trzymane w drugiej ręce lub nie.

***

### **🔵 Następne wartości atrybutów są dodawane do ich wartości podstawowych.**

`armor_negation`: Ten procent nie zmniejszy całkowitych obrażeń o punkty obronne. (base value: 0.0)

`impact`: Ten atrybut zwiększy całkowity czas ogłuszenia trafionego celu. (base value: 0.5)

`max_strikes`: Maksymalna liczba trafionych wrogów na atak. (base value: 1.0)

`damage_bonus`: Ten atrybut zwiększy obrażenia. (base value: 0.0)

`speed_bonus`: Ten atrybut zwiększy szybkość ataku. (base value: 0.0)

***

## **💡 Zmiana rozmiaru kolidera**

Możesz zmienić rozmiar kolidera, aby dopasować go wizualnie.

 > Oto prosty przykład konfiguracji zbroi:
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

`number`: liczba koliderów interpolowanych pomiędzy poprzednią wartością(pozą) a aktualną. Wyższa wartość zwiększy dokładność wykrywania kolizji, ale znajdzie się tam większy overhead cost

`center`: położenie środka kolidera.

`size`: rozmiar x, y i z, kolidera.

Trudno spodziewać się rozmiaru kolidera tylko z oszacowaniem liczbowym. Możesz zaoszczędzić swój czas odnosząc się do presetów. Skopiuj wartość ustawień preseta i stopniowo poprawiaj rozmiar.

[Presety Kolidera](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/ColliderPreset.java)

## **💡 Plik zbroi**

 > Oto prosty przykład konfiguracji zbroi:

```
 {
    "attributes": {
        "stun_armor":1.5,
        "weight":8.2
    }
 }
```

`stun_armor`: Ten atrybut wydłuży czas pomiędzy ogłuszeniami.

`weight`: Ten atrybut skraca czas ogłuszania po oberwaniu, ale zwiększa zużycie energii przez umiejętności i zmniejsza szybkość ataku. Przedmioty z wysoką prędkością ataku będą bardziej dotknięte.

## **📦 Kończenie Datapack-a**

Teraz powinieneś mieć:
* Folder danych, który zawiera wszystkie pliki JSON i inne foldery, takie jak możliwości.
* Plik pack.mcmeta.

### **✉️ Ten krok jest konieczny tylko wtedy, gdy chcesz móc wysłać plik danych.**

Nie musisz ustawiać datapacka jako zip, możesz po prostu umieścić zarówno folder danych, jak i plik pack.mcmeta w innym folderze, ale oto jak to zrobić z 7-Zip.

> Najpierw musisz wybrać zarówno folder danych, jak i plik pack.mcmeta.
> 
> ![datapack mcdata](https://user-images.githubusercontent.com/86358160/171872228-00816dc2-cf98-4bdc-bddf-a3a7bd1cd9c1.PNG)

Następnie kliknij prawym przyciskiem myszy, przejdź poniżej 7-Zip, a następnie kliknij na `dodaj do "datapack.zip"`.

I to wszystko, teraz musisz tylko umieścić dane w folderze datapack świata. A potem ciesz się :)
***

**[Poradnik na YouTube](https://www.youtube.com/watch?v=JNpahwjriac&t=33s) dla tych, którym nie chce się czytać**
