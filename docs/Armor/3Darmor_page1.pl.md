# Zbroja 3D & Problemy z renderowaniem tekstur

Większość niestandardowych zbroi jest uszkodzona w Epic Fight. Dzieje się tak dlatego, że Epic Fight używa własnego modelu, nie tylko dla bytów, ale także dla zbroi. Na szczęście Epic Fight posiada algorytm generowania modelu oparty na niestandardowych pancerzach, ale czasami zmienia je w niewłaściwy sposób. Oto poradnik dla twórców modów, jak stworzyć niestandardową zbroję wyglądającą jak trzeba bez konieczności grzebania w naszym kodzie. Oto kroki, w których możesz wykonać naprawioną zbroję:

***
Wymagane narzędzia:<br>

* **[BlockBench](https://www.blockbench.net/) (opcjonalnie)**<br>
* **[Blender 2.79](https://download.blender.org/release/Blender2.79/)**<br>
- **[Blender Json Exporter](https://github.com/Yesssssman/blender-json-exporter)**<br>
- **[Pliki zbroi Blender](https://drive.google.com/file/d/15xYnpmkmlJaEnw3Y7bykpqmjx1Rr9Koh/view?usp=share_link)**<br>

***
## 💡 Odtwarzanie zbroi w Blockbench (opcjonalne)
Nie musisz ponownie tworzyć zbroi w Blockbench, dopóki masz oficjalne pliki zbroi dla modu, który chcesz spatchować.

Po pobraniu i zainstalowaniu wszystkich trzech oprogramowań najpierw musisz wybrać modyfikację, która ma ustawioną zbroję, którą chcesz spatchować, a następnie spróbuj odtworzyć model tak dokładnie, jak to możliwe. Najlepiej jest to zrobić patrząc na pancerz w grze i otrzymując tekstury z kodu źródłowego żądanego modu.

 **PRZYKŁAD:**

<br>![archers_armor](https://user-images.githubusercontent.com/77132244/215155978-874a293e-71ea-4690-adf3-059e45a37ed8.png) <br>Powyżej plik tekstury archers_armor z moda Dungeon Gear. Sprawdźmy, jak można odtworzyć tę zbroję tylko za pomocą Blockbench<br>
1. Utwórz model ogólny, abyśmy mogli go później wyeksportować do blendera. Najlepiej nadać modelowi nazwę, którą możesz rozpoznać, na przykład *Zbroja Łucznika*.<br>  
   ![showcase55](https://user-images.githubusercontent.com/77132244/215159597-aac5fdb1-45f1-4084-8f18-50baae9df6f0.jpg)<br>
2. Upewnij się, że masz zainstalowany Loader szablonów CEM, aby można było zaimportować modele z podstawowej wersji gry. (Możesz pobrać pluginy w opcji Pliki/Pluginy).<br>
3. Stamtąd importuj wszystkie modele podstawowe modele pancerza. (Możesz zaimportować modele pancerza z podstawowej gry pod Tools/Load CEM Template/Unsupported Entities).<br>  
   ![showcase66](https://user-images.githubusercontent.com/77132244/215161290-8ecb58ec-55e3-4297-8f46-48551a0769d7.jpg)<br>
4. Zaimportuj tekstury i zmień rozmiar tekstury w projekcie na taki sam jak tekstura. (Wskazówka: Możesz zastosować tekstury na modelu, przeciągając i upuszczając je w każdej grupie części zbroi).<br>  
   ![showcase77](https://user-images.githubusercontent.com/77132244/215230534-6eb84ed6-1afb-4a44-bdf2-3ef98bfccdc6.jpg)<br>
5. Teraz napraw tekstury, dopóki nie będą we właściwej kolejności i wyglądać jak oryginalny model.<br>
6. Po rozmieszczeniu tekstur naciśnij "ctrl + A" i upewnij się, że wszystkie tekstury są używane. Jeśli tekstury się nie wyświetlają, to oznacza, że model wymaga poprawek, a więc musisz dodać więcej części do zbroi. W naszym przypadku Zbroja Łucznika ma dodatkową część do czapki, więc będziemy musieli dodać kostkę, by poznać jej obrót, skalę i pozycję na podstawie pancerza w grze dodanego z Dungeon's Gear i rozmiaru tekstury.<br>  
   <br>  <a href="url"><img src="https://user-images.githubusercontent.com/77132244/215236925-8fcf459a-e972-4f2d-b43d-65667ce39e1e.jpg" align="center" ></a><br>
7. Jak widać, po kilku zmianach mamy nasz model wyglądający jak pierwotny, a teraz jesteśmy gotowi przejść do Blendera i spatchować każdą osobną część.<br>  
   ![image](https://user-images.githubusercontent.com/77132244/215238157-3ddd8369-6f04-48f5-8d95-0623d833b3be.png)<br>
8. Teraz, podczas eksportowania twojego pliku zbroi, upewnij się, że eksportujesz go jako plik z rozszerzeniem .obj, ponieważ to właśnie jego będziemy używać w Blenderze.<br>

***
## 💡 Korekta wagi farb i wierzchołków
Przejdź do [[Przewodnik po Blenderze|Podstawy Blendera oraz Porady i Wskazówki]], by dowiedzieć się, jak używać Blendera

1. Najpierw otwórz Blender, wejdź w Plik/Import/Wavefront (.obj) i zaimportuj swój plik zbroi, który właśnie utworzyłeś w Blockbench.
2. Następnie wybierz jedną część pancerza do naklejenia. Najpierw przykleimy warstwę głowy. Wybieramy każdy sześcian i część, które składają się na hełm dla zbroi łucznika. Dla nas "head" i "headback.001" to części tworzące hełm, więc wybierzemy i naciśnij "CTRL + J", aby dołączyć wszystkie części do jednego modelu _(TIP: Aby dołączyć wszystkie części, lepiej przełącz na tryb obiektowy)_.  
   **Wybierz**  
   ![image](https://user-images.githubusercontent.com/77132244/215290753-d88f7ed2-a32b-43bc-9e33-a35c273d04b9.png)  
   **Dołącz** _(Możesz śmiało zmienić nazwę nowego dołączonego modelu części zbroi, do której się odnosi, w naszym przypadku, później zmieniono nazwę na "Helmet")_.  
   ![image](https://user-images.githubusercontent.com/77132244/215290768-f91985a4-31a5-4606-bd25-91b150ba0119.png)  
   _(Na zrzutach ekranu wszystkie pozostałe części zbroi są ukryte)_
3. W trybie obiektu popraw obrót importu i pozycję klikając _"ALT + R"_ & _"ALT + G"_.
4. W trybie edycji obróć model i przywróć jego pozycję do oryginalnej lokalizacji, zanim zresetujesz obrót/pozycję w trybie obiektu.
5. Teraz, po naprawie obrotu importu, przypiszemy model do armatury, przechodząc do trybu obiektu, wybierając modelu hełmu, a także armatora, przechodząc do sekcji Object/Parent/Armature Deform/With Empty Groups/With Empty Groups. Teraz z powodzeniem wkomponowałeś model w armaturę, przejdźmy do Weight Paint. _(TIP: możesz zaznaczyć dwie rzeczy, trzymając shift i klikając je prawym przyciskiem myszy. Upewnij się, że obie są zaznaczone w trybie object, a nie pose lub edit_ ![image](https://user-images.githubusercontent.com/77132244/218175943-dcde10ab-9f45-4fb3-a1ec-a2ec7f851483.png) ![image](https://user-images.githubusercontent.com/77132244/218176163-4972a8bf-a70d-4570-aafe-a0b9a0bbcb85.png)
6. Zaznaczając model hełmu i przełączając z trybu object na weight paint, w końcu aplikujemy grupę deformacji vertex tak, aby hełm poruszał się razem z głową gracza, podczas gdy ten odtwarza animację. ![image](https://user-images.githubusercontent.com/77132244/218176695-4cfafe68-7010-4450-a5f8-93e3dff1f3dd.png)
7. Aby zastosować weight paint, upewnij się, że widzisz wierzchołki i masz włączony tryb szkieletowy, jak na poniższym obrazku: ![Showcase89](https://user-images.githubusercontent.com/77132244/218177435-f9d01478-fbe0-45f9-b754-adf5d2efa745.jpg)
8. Teraz możesz wybrać spośród różnych pędzli do zastosowania weight paint, ale tymi, których używamy, najczęściej są odejmowanie i dodawanie ![image](https://user-images.githubusercontent.com/77132244/218177593-95794246-6d9a-4caf-afa2-636b784b8d3a.png)
9. Wybierz vertex group po prawej stronie, z którą będziemy pracować, to grupa główna, ponieważ patchujemy hełm. ![Showcase99](https://user-images.githubusercontent.com/77132244/218178265-69388152-b465-45e5-8ccd-cfe3e430dfb7.jpg)
10. Teraz po prostu przejdź do swojego sposobu malowania całego modelu, aby podążyć za całą głową. Na końcu będziesz miał/ła coś takiego: ![image](https://user-images.githubusercontent.com/77132244/218178527-210b4b77-5f16-4cf7-9310-6c2b3e2ce83a.png)
11. Możesz przetestować, aby sprawdzić, czy z powodzeniem pomalowałeś hełm i połączyłeś do głowy musisz przejść w tryb "armature" i obracać kośćmi głowy. Jeśli twój model podąża za kością głowy, to poprawnie, jeśli nie, następnie wróć kilka kroków do tyłu i sprawdź ponownie, czy czegoś nie przegapiłeś. ![2023-02-10-16-20-11](https://user-images.githubusercontent.com/77132244/218179173-df15dcba-97fa-4081-ad1d-cf1ffbcd92e8.gif)
***
## 💡 Eksportowanie zpatchowanych modeli
Teraz kiedy spatchowałeś swoje modele będziesz chciał je wyeksportować i zastosować zmiany w grze. Ale jak można to zrobić? Cóż, to naprawdę proste.

1. Upewnij się, że nie masz żadnych części zbroi ani niechcianych modeli w Twoim projekcie i tylko wybraną część zbroi, która ma być wyeksportowana. _(TIP: Nie możesz wyeksportować dwóch części zbroi jednocześnie, więc wyeksportuj jedną na raz i usuń wszystkie inne)._  
   ![image](https://user-images.githubusercontent.com/77132244/218179518-18c8d979-68af-44ff-989a-aa55ebb6c239.png)
2. Po oczyszczeniu niechcianych modeli lub części zbroi, które nie zostaną wyeksportowane, przejdź do File/Export/Animated Minecraft Model (.json)  
   ![image](https://user-images.githubusercontent.com/77132244/218179838-bbc7d557-8525-4ab8-beaf-41211bf334fd.png)
3. Upewnij się, że wybrano tylko siatkę, jaką chcemy wyeksportować, gdyż eksportujemy zbroję, a nie animację lub niestandardowy armat.  
   ![image](https://user-images.githubusercontent.com/77132244/218179992-0f54bb48-99b6-45c2-8166-107668b200e7.png)
4. Sprawdź nazwę eksportu, aby sprawdzić, czy pasuje do własnej nazwy rejestru zbroi w grze.  
   ![image](https://user-images.githubusercontent.com/77132244/218180136-b229edd0-3941-4a68-b82b-dfc0fcf80bca.png)
5. Kliknij przycisk "Eksport do to Minecraft" po zakończeniu.  
   ![image](https://user-images.githubusercontent.com/77132244/218180246-7c04c4ad-ad96-4361-b43a-3ff434de419d.png)
6. Teraz przejdź do swojej gry, wybierz zasoby, a także wewnątrz folderu zasoby, utwórz nowy folder. Wewnątrz niego, możesz utworzyć swój pack.mcmeta w taki sposób:
### Tworzenie pliku pack.mcmeta

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

### pack_format Wartości

| Version       | Wartość |
| ------------- | ------- |
| 1.16.2–1.16.5 | 6       |
| 1.17.x        | 7       |
| 1.18.2        | 9       |

### Tworzenie ścieżki folderu

Musisz utworzyć serię folderów o następujących nazwach. Każdy folder lub plik musi znajdować się wewnątrz ostatniego.

`assets -> "modid" -> animmodels -> armor -> "registryname".json` _(Wstaw tu wyeksportowany plik zbroi)_


🎉 **Gratulacje, udało Ci się naprawić pancerz.**🎉


**_Kilka prostszych rozwiązań dla zbroi tutaj: [Inne rozwiązania dla błędów pancerzy 3D](3Darmor_page2.pl.md)_**