# Outras soluções para os glitches de armadura 3D
Tenha cuidado que essas soluções não podem ser tão eficazes quanto arrumar as armaduras manualmente no blender. Estas ferramentas são principalmente para modpack e desenvolvedores de mods testarem sua armadura. Se você quiser corrigir corretamente as armaduras e ter certeza que elas funcionem no jogo, vá em _**[Pacote de recurso de armadura personalizada 3D](armor/page1)**_


***
## **💡 Fazendo uma armadura imperfeita visualmente usando o modo de depuração de armaduras**

No Minecraft, você pode habilitar o modo de depuração de armaduras pressionando F3+Y. Isso criará um modelo de armadura para cada frame para verificar o resultado do algoritmo de geração do modelo. Mas ele pode derrubar seriamente o fps, então eu não recomendo ativar essa função em situações normais.

![image](https://user-images.githubusercontent.com/79469058/168334604-6542eff4-c77e-4ef2-a71a-79ddeef91a9a.png)

_Esta mensagem será exibida quando você alternar para o modo de depuração da armadura._
***
### **📦 Exportando os modelos como pacote de recursos**

Na tela de configuração do mod. Você pode ver o botão "Exportar Modelos de Armadura". Ele irá exportar todos os modelos de armadura gerados no cache como o pacote de recursos. Então, aplique o pacote de recursos e você não precisará depurar os modelos de armadura toda vez que você abrir o Minecraft.

![image](https://user-images.githubusercontent.com/79469058/168339170-1965ad10-eb2a-4ab4-919e-3f5d5b0480fd.png)
***
## **💡Uma Alternativa, se a solução anterior não funcionar**


Existem armaduras personalizadas que não serão corrigidas, mesmo usando o modo de depuração. Isto porque existem várias maneiras de renderizar uma armadura personalizada. Você pode escolher a forma alternativa de, pelo menos, torná-las visíveis.

Primeiro, você tem que fazê-los usar um modelo padrão. Você pode criar seu próprio modelo de armadura em,

### assets/`modid`/animmodels/armor/`item_name.json`

No arquivo item_name.json digite isto para atribuir o modelo padrão para a armadura.

```
{
    "parent": "epicfight:armor/model_name"
}
```
model_names permitidos são: `helmet_default, chestplate_default, leggings_default, boots_default`

Em seguida, você pode modificar a textura da armadura personalizada para corresponder ao formato de textura do modelo padrão.

![sample](https://user-images.githubusercontent.com/79469058/168444508-f1fb4ebe-5949-40ca-9015-7e920f1e6508.png)

_O mapeamento de texturas do modelo de armadura do jogo base_

Salve em seguida suas texturas, mas evite sobrescrever a textura existente porque ela pode debilitar o modelo vanilla. Em vez disso, você deve salvar sua textura sob o caminho: assets/modid/`existing_path`/epicfight/`texturename` Por exemplo, vamos supor que um caminho é: "assets/minecraft/textures/models/armor/iron_layer_1. ng". Você usará: "assets/minecraft/textures/models/armor/epicfight/iron_layer_1.png"

## **💡 Dar transparência às armaduras personalizadas**
***

Algumas armaduras customizadas têm transparência em sua textura. Você pode torná-los transparentes no modo de batalha adicionando estas linhas de código.

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