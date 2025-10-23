---
search:
  exclude: true
---
# Ostale solucije za 3D kvarove oklopa
Imajte na umu da ova rješenja možda neće biti tako učinkovita kao ručno krpanje oklopa u blenderu. Ovi su alati uglavnom namijenjeni modpacku i programerima modova kako bi testirali svoj oklop. If you want to properly patch armors and make sure they work in-game, go to _**[Custom 3D armor Resource Pack](armor/page1)**_


***
## **💡 Izrada vizualno besprijekornog oklopa korištenjem "armor debugging mode-a"**

U Minecraftu možete omogućiti način otklanjanja pogrešaka oklopa pritiskom na F3+Y. Ovo će stvoriti model oklopa za svaki okvir kako bi se provjerio rezultat algoritma za generiranje modela. Ali to bi moglo ozbiljno pasti fps, tako da ne preporučujem uključivanje ove funkcije u normalnim situacijama.

![image](https://user-images.githubusercontent.com/79469058/168334604-6542eff4-c77e-4ef2-a71a-79ddeef91a9a.png)

_Ova poruka će se pokazati kada uključite/isključite "armor debugging mode"_
***
### **📦 Izvozenje modela kao paket resursa**

Na zaslonu konfiguracije moda. Možete vidjeti gumb "Izvoz modela oklopa". Izvest će sve generirane modele oklopa u predmemoriju kao paket resursa. Zatim primijenite paket resursa i ne morate ispravljati greške u modelima oklopa svaki put kada pokrenete Minecraft.

![image](https://user-images.githubusercontent.com/79469058/168339170-1965ad10-eb2a-4ab4-919e-3f5d5b0480fd.png)
***
## **💡Alternativa, ako prethodno rješenje ne funkcionira**


Postoje prilagođeni oklopi koji se neće popraviti, čak ni kada se koristi način otklanjanja pogrešaka. To je zato što postoje različiti načini renderiranja prilagođenog oklopa. Možete odabrati alternativni način da ih barem učinite vidljivima.

Prvo ih morate natjerati da koriste zadani model. You can create your own armor model under,

### assets/`modid`/animmodels/armor/`item_name.json`

U datoteku "item_name.json" upišite ovo da biste dodijelili zadani model za oklop.

```
{
    "parent": "epicfight:armor/model_name"
}
```
Dopusteni model_names su: `helmet_default, chestplate_default, leggings_default, boots_default`

Zatim možete izmijeniti teksturu "custom" oklopa kako bi odgovarala formatu teksture zadanog modela.

![sample](https://user-images.githubusercontent.com/79469058/168444508-f1fb4ebe-5949-40ca-9015-7e920f1e6508.png)

_Mapiranje teksture modela oklopa Minecraft Vanille_

Zatim spremite svoje teksture, ali treba izbjegavati nadjačavanje postojeće teksture jer to može pokvariti model vanilije. Umjesto toga, trebali biste spremiti svoju teksturu pod putanjom: assets/modid/`existing_path`/epicfight/`texturename` Na primjer, pretpostavimo da je staza: "assets/minecraft/textures/models/armor/iron_layer_1.png". Koristit ćete: "assets/minecraft/textures/models/armor/epicfight/iron_layer_1.png"

## **💡 Davanje transperencije "custom" oklopima**
***

Neki prilagođeni oklopi imaju prozirnu teksturu. Možete ih učiniti prozirnima u borbenom načinu dodavanjem ovih linija.

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