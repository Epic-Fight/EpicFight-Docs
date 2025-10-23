---
search:
  exclude: true
---
# 3D oklop i problemi s prikazom Teksture

Većina "Custom" oklopa su pokvarena u Epic Fightu. To je zato što Epic Fight koristi vlastite modele, ne samo za entitete već i za oklope. Srećom, Epic Fight ima algoritam za generiranje modela temeljen na prilagođenim oklopima, ali ponekad ih mijenja na loš način. Ovo je vodič za proizvođače "modpack-a" kako bi prilagođeni oklopi vizualno bili besprijekorni bez potrebe za podešavanjem našeg izvornog koda. Evo koraka koje možete slijediti kako biste postigli zakrpani oklop:

***
Potrebni alati:<br>

* **[BlockBench](https://www.blockbench.net/) (Izborno)**<br>
* **[Blender 2.79](https://download.blender.org/release/Blender2.79/)**<br>
- **[Blender Json Exporter](https://github.com/Yesssssman/blender-json-exporter)**<br>
- **[Blender Armor Files](https://drive.google.com/file/d/15xYnpmkmlJaEnw3Y7bykpqmjx1Rr9Koh/view?usp=share_link)**<br>

***
## 💡 Prerada oklopa u Blockbenchu (Izborno)
Ne morate prepravljati oklop u blockbenchu sve dok imate službene datoteke oklopa za mod koji želite zakrpati.

Nakon preuzimanja i instaliranja sva tri softvera, prva stvar koju ćete htjeti učiniti je odabrati mod koji ima set oklopa koji želite zakrpati, a zatim pokušati rekreirati model što je točnije moguće. Jedan učinkovit način na koji to možete učiniti je obično gledanje oklopa u Igri i dobivanje tekstura iz izvornog koda vašeg željenog moda.

 **PRIMJER:**

<br>![archers_armor](https://user-images.githubusercontent.com/77132244/215155978-874a293e-71ea-4690-adf3-059e45a37ed8.png) <br>Iznad je datoteka teksture za archers_armor Dungeon Gear Moda. Pogledajmo kako možemo ponovno stvoriti ovaj oklop samo uz Blockbench<br>
1. Napravite generički model kako bismo ga kasnije mogli izvesti u blender. Po mogućnosti nazovite model tako da ga možete prepoznati, na primjer, *Archer's Armor*.<br>  
   ![showcase55](https://user-images.githubusercontent.com/77132244/215159597-aac5fdb1-45f1-4084-8f18-50baae9df6f0.jpg)<br>
2. Provjerite imate li instaliran CEM Template Loader kako biste mogli uvesti vanilla modele. (Dodatke možete preuzeti pod opcijom File/Plugins).<br>
3. Od tamo ćete htjeti uvesti sve modele oklopa Vanille Minecrafte-a. (Modele vanilla oklopa možete uvesti pod Tools/Load CEM Template/Unsupported Entities).<br>  
   ![showcase66](https://user-images.githubusercontent.com/77132244/215161290-8ecb58ec-55e3-4297-8f46-48551a0769d7.jpg)<br>
4. Uvezite teksture i promijenite veličinu teksture na projektu na istu kao i tekstura. (Savjet: teksture možete primijeniti na model povlačenjem i ispuštanjem na svaku grupu dijelova oklopa).<br>  
   ![showcase77](https://user-images.githubusercontent.com/77132244/215230534-6eb84ed6-1afb-4a44-bdf2-3ef98bfccdc6.jpg)<br>
5. Sada popravite teksture dok ne budu u ispravnom redoslijedu i izgledaju kao izvorni model.<br>
6. Nakon organiziranja tekstura, pritisnite "ctrl + A" i provjerite koriste li se sve teksture. Ako vam nedostaje bilo koja tekstura, to znači da vaš model treba više prilagodbi pa ćete morati dodati dodatne dijelove oklopu. U našem slučaju, Archer's Armor ima dodatni dio na svom šeširu pa ćemo morati dodati kocku i pokušati pogoditi njezinu rotaciju, veličinu i položaj na temelju oklopa u igri koji je dodao Dungeon's gear i veličine teksture.<br>  
   <br>  <a href="url"><img src="https://user-images.githubusercontent.com/77132244/215236925-8fcf459a-e972-4f2d-b43d-65667ce39e1e.jpg" align="center" ></a><br>
7. Kao što vidite, nakon nekoliko izmjena, naš model je izgledao kao originalni, a sada smo spremni za prelazak na blender i krpanje svakog pojedinog dijela.<br>  
   ![image](https://user-images.githubusercontent.com/77132244/215238157-3ddd8369-6f04-48f5-8d95-0623d833b3be.png)<br>
8. Sada kada izvozite datoteku oklopa, svakako je eksportirajte kao ".obj", jer ćemo to koristiti unutar blendera.<br>

***
## 💡 "Weight Paint" i "Vertex Correction"
Idite na [Osnove Blendera i Savjeti i Trikovi](Blender_page3) za savjete, trikove i popravke za korištenje Blendera

1. Prvo otvorite blender, idite na file/import/Wavefront (.obj) i uvezite svoju datoteku oklopa koju ste upravo stvorili u BlockBenchu.
2. Nakon toga odaberite jedan dio oklopa koji želite zakrpati. Prvo ćemo zakrpati sloj glave. Tako ćemo odabrati svaku kocku i dio koji čini kacigu za archer's armor. Za nas su "head" i "headback.001" dijelovi koji čine kacigu pa ćemo odabrati oba i pritisnuti "ctrl + j" da spojimo sve dijelove u jedan model _(SAVJET: Za spajanje svih dijelova morat ćete biti u objektnom načinu)_.  
   **Odaberite**  
   ![image](https://user-images.githubusercontent.com/77132244/215290753-d88f7ed2-a32b-43bc-9e33-a35c273d04b9.png)  
   **Pridružite se** _(Slobodno preimenujte novi spojeni model u dio oklopa kojem odgovara, u našem slučaju kasnije sam ga preimenovao u "Kaciga")_.  
   ![image](https://user-images.githubusercontent.com/77132244/215290768-f91985a4-31a5-4606-bd25-91b150ba0119.png)  
   _(Na ovim snimkama zaslona svi ostali dijelovi oklopa su skriveni)_
3. U "object mode-u" ispravite rotaciju uvoza i položaj klikom na _"alt + r"_ i; _"alt + g"_.
4. U "edit mode-u", zakrenite model i ispravite njegov položaj na izvornu lokaciju prije nego što poništite rot/poz u modu objekta.
5. Sada nakon popravljanja rotacije uvoza, model ćemo postaviti kao roditelj armature tako što ćemo otići u objektni način rada, odabrati model kacige i također armaturu, prijeći na Object/Parent/Armature Deform/With Empty Groups/With Empty Groups. Sada ste uspješno povezali model s armaturom, prijeđimo na "weight paint". _(SAVJET: Možete odabrati dvije stvari pritiskom na shift dok ih desnom tipkom kliknete. Provjerite jesu li oba odabrana u objektnom načinu rada, a ne u načinu postavljanja ili uređivanja)_ ![image](https://user-images.githubusercontent.com/77132244/218175943-dcde10ab-9f45-4fb3-a1ec-a2ec7f851483.png) ![image](https://user-images.githubusercontent.com/77132244/218176163-4972a8bf-a70d-4570-aafe-a0b9a0bbcb85.png)
6. Odabirom modela kacige i prebacivanjem iz moda objekta u način weight paint, konačno ćemo primijeniti deformacije grupe vrhova tako da kaciga prati glavu dok naš igrač reproducira bilo koju animaciju. ![image](https://user-images.githubusercontent.com/77132244/218176695-4cfafe68-7010-4450-a5f8-93e3dff1f3dd.png)
7. Da biste primijenili weight paint, provjerite možete li vidjeti vrhove i jeste li omogućili način rada okvira kao na sljedećoj slici: ![Showcase89](https://user-images.githubusercontent.com/77132244/218177435-f9d01478-fbe0-45f9-b754-adf5d2efa745.jpg)
8. Sada možete birati između niza kistova za nanošenje boje za težinu, ali oni koje uglavnom koristimo su oduzimanje i dodavanje![image](https://user-images.githubusercontent.com/77132244/218177593-95794246-6d9a-4caf-afa2-636b784b8d3a.png)
9. Odaberite željenu grupu vrhova s ​​desne strane, ona s kojom ćemo raditi je grupa glava dok krpamo kacigu.![Showcase99](https://user-images.githubusercontent.com/77132244/218178265-69388152-b465-45e5-8ccd-cfe3e430dfb7.jpg)
10. Sada jednostavno nastavite slikajući cijeli model tako da prati cijelu glavu. Na kraju ćete moći dobiti nešto poput ovoga: ![image](https://user-images.githubusercontent.com/77132244/218178527-210b4b77-5f16-4cf7-9310-6c2b3e2ce83a.png)
11. Možete testirati jeste li uspješno podredili i utezili kacigu na glavi tako da prijeđete na svoju armaturu u načinu poze i okrenete kost glave oko sebe. Ako vaš model slijedi kost glave, onda je točan, ako ne, vratite se nekoliko koraka unatrag i ponovno provjerite jeste li nešto propustili. ![2023-02-10-16-20-11](https://user-images.githubusercontent.com/77132244/218179173-df15dcba-97fa-4081-ad1d-cf1ffbcd92e8.gif)
***
## 💡 Izvoz vaših zakrpanih modela
Sada kada ste zakrpali svoje modele, poželjet ćete izvesti svoj rad i primijeniti promjene u igri. Ali kako to možete učiniti? Pa stvarno je jednostavno.

1. Uvjerite se da nemate nikakvih dijelova oklopa ili neželjenih modela na svom projektu i da samo željeni dio oklopa bude tako izvezen. _(SAVJET: Ne možete izvesti dva dijela oklopa odjednom, stoga izvozite jedan po jedan i izbrišite sve ostale.)_  
   ![image](https://user-images.githubusercontent.com/77132244/218179518-18c8d979-68af-44ff-989a-aa55ebb6c239.png)
2. Nakon čišćenja svih neželjenih modela ili dijelova oklopa koji se neće izvesti, idite na File/Export/Animated Minecraft Model (.json)  
   ![image](https://user-images.githubusercontent.com/77132244/218179838-bbc7d557-8525-4ab8-beaf-41211bf334fd.png)
3. Provjerite jeste li odabrali samo Export Mesh jer izvozimo samo oklop, a ne animaciju ili prilagođenu armaturu.  
   ![image](https://user-images.githubusercontent.com/77132244/218179992-0f54bb48-99b6-45c2-8166-107668b200e7.png)
4. Provjerite izvozni naziv da vidite odgovara li prilagođenom nazivu registra oklopa u igri.  
   ![image](https://user-images.githubusercontent.com/77132244/218180136-b229edd0-3941-4a68-b82b-dfc0fcf80bca.png)
5. Kliknite Izvezi u Json Minecraft nakon što završite.  
   ![image](https://user-images.githubusercontent.com/77132244/218180246-7c04c4ad-ad96-4361-b43a-3ff434de419d.png)
6. Sada idite na svoju igru, odaberite resourcepacks i unutar mape resourcepacks stvorite novu mapu. Unutar njega možete kreirati svoj pack.mcmeta ovako:
### Izrada datoteke pack.mcmeta

Najprije ćete morati stvoriti pack.mcmeta tako što ćete napraviti normalnu txt datoteku i preimenovati je u pack.mcmeta (provjerite jesu li uključene ekstenzije naziva datoteke).

Nakon toga ga uredite i dodajte ove retke koda kako bi vaš podatkovni paket radio.
```JSON
{
    "pack":{
        "pack_format":6,
        "description": "Kratak opis na vašem paketu"
        }
}
```

### pack_format vrijednosti

| Verzija       | Vrijednost |
| ------------- | ---------- |
| 1.16.2–1.16.5 | 6          |
| 1.17.x        | 7          |
| 1.18.2        | 8          |
| 1.19.2        | 9          |
| 1.20.1        | 15         |

### Izdrada mape

Morat ćete napraviti niz mapa sa sljedećim nazivima. Svaka mapa ili datoteka mora biti unutar zadnje.

`assets -> "modid" -> animmodels -> armor -> "registryname".json` _(Ovdje ispustite svoju izvezenu datoteku oklopa)_


🎉 **Čestitamo, uspješno ste zakrpali svoj oklop.** 🎉


**_Nekoliko lakših rješenja za popravak oklopa ovdje: [Ostala rješenja za 3D kvarove oklopa](3Darmor_page2.hr.md)_**
