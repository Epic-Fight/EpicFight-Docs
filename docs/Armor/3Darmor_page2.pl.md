# Inne rozwiązania błędów w pancerzach 3D
Należy pamiętać, że rozwiązania te mogą nie być tak skuteczne, jak ręczne patchowanie pancerzy w blenderze. Narzędzia te przeznaczone są głównie dla twórców modów i modpack'ów do testowania pancerzy. Jeśli chcesz poprawnie naprawić zbroje i upewnić się, że będą one poprawnie działać w grze, przejdź do _**[Niestandardowy pakiet zasobów pancerza 3D](armor/page1)**_


***
## **💡 Wykonywanie wizualnie poprawnej zbroi poprzez użycie trybu debugowania zbroi**

W Minecrafcie możesz włączyć tryb debugowania pancerza, naciskając F3+Y. Spowoduje to utworzenie modelu zbroi dla każdego szkieletu, aby sprawdzić rezultaty algorytmu generowania modelu. Może to powodować poważny spadek fps'ów, więc nie zalecam włączania tej funkcji w normalnych sytuacjach.

![image](https://user-images.githubusercontent.com/79469058/168334604-6542eff4-c77e-4ef2-a71a-79ddeef91a9a.png)

_Ta wiadomość zostanie wyświetlona po przełączeniu trybu debugowania zbroi._
***
### **📦 Eksportowanie modeli jako pakietu zasobów**

W ekranie konfiguracji modyfikacji. Możesz zobaczyć przycisk "Eksportuj modele zbroi". Wyeksportuje on wszystkie wygenerowane modele zbroi z pamięci podręcznej jako pakiet zasobów. Następnie zastosuj ten pakiet zasobów, aby nie musieć debugować modeli zbroi za każdym razem, gdy uruchomisz Minecraft'a.

![image](https://user-images.githubusercontent.com/79469058/168339170-1965ad10-eb2a-4ab4-919e-3f5d5b0480fd.png)
***
## **💡Alternatywa, jeśli poprzednie rozwiązanie nie działa**


Istnieją niestandardowe pancerze, które nie zostaną naprawione, nawet gdy użyjesz trybu debugowania. Dzieje się tak, ponieważ istnieją różne sposoby ich renderowania. Możesz wybrać alternatywny sposób, aby sprawić, by pancerz był widoczny.

Najpierw spraw, aby używały domyślnego modelu. Możesz utworzyć własny model zbroi, w:

### assets/`modid`/animmodels/armor/`item_name.json`

W pliku item_name.json wpisz to, aby przypisać domyślny model pancerza.

```
{
    "parent": "epicfight:armor/model_name"
}
```
Dozwolone model_names to: `helmet_defat, chestplate_default leggings_default`

Następnie możesz zmodyfikować teksturę niestandardowej zbroi, aby pasowała do formatu tekstury domyślnego modelu.

![sample](https://user-images.githubusercontent.com/79469058/168444508-f1fb4ebe-5949-40ca-9015-7e920f1e6508.png)

_Mapowanie tekstury modelu pancerza podstawowego_

Następnie zapisz swoje tekstury, ale unikaj nadpisywania istniejących tekstur, ponieważ może to zagrozić modelowi podstawowemu. Zamiast tego powinieneś zapisać swoją teksturę pod ścieżką: assets/modid/`existing_path`/epicfight/`texturename` Na przykład Załóżmy, że ścieżka to: "assets/minecraft/textures/models/armor/iron_layer_1.png”. Użyjesz: "assets/minecraft/textures/models/armor/epicfight/iron_layer_1.png"

## **💡 Nadawanie przezroczystości niestandardowym pancerzom**
***

Niektóre zbroje niestandardowe mają przezroczystość w swojej teksturze. Możesz uczynić je przezroczystymi w trybie bitwy, dodając te wiersze.

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