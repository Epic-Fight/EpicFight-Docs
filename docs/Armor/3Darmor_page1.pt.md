# Problemas de renderização de Texturas & 3D

A maioria das armaduras personalizadas são quebradas no Epic Fight. Isso porque Epic Fight usa o seu próprio modelo, não só para as entidades, mas também para armaduras. Felizmente, Epic Fight tem um algoritmo de geração de modelo baseado nas armaduras personalizadas, mas às vezes isso as muda de maneira negativa. Este é o guia para os criadores de mods para criar armaduras personalizadas visualmente sem falhas sem ter que modificar nosso código fonte. Aqui estão os passos que você pode seguir para corrigir sua armadura:

***
Ferramentas necessárias:<br>

* **[BlockBench](https://www.blockbench.net/) (Opcional)**<br>
* **[Blender 2.79](https://download.blender.org/release/Blender2.79/)**<br>
- **[Exportador Json do Blender](https://github.com/Yesssssman/blender-json-exporter)**<br>
- **[Arquivos de Armadura do Blender](https://drive.google.com/file/d/15xYnpmkmlJaEnw3Y7bykpqmjx1Rr9Koh/view?usp=share_link)**<br>

***
## 💡 Refazendo armaduras no Blockbench (Opcional)
Você não precisa refazer a armadura no blockbench contanto que você tenha as armaduras oficiais para o mod que você deseja atualizar.

Depois de baixar e instalar os três softwares, a primeira coisa que você vai querer fazer é escolher um mod que tem um conjunto de armadura que você deseja corrigir, e de lá tenta recriar o modelo com a maior precisão possível. Uma maneira eficiente de você fazer isso, é geralmente observar a armadura no jogo e obter as texturas do código-fonte do seu mod desejado.

 **EXEMPLO:**

<br>![armaduras_arqueiros](https://user-images.githubusercontent.com/77132244/215155978-874a293e-71ea-4690-adf3-059e45a37ed8.png) <br>Acima está o arquivo de textura para o archers_armor do Mod Dungeon Gear. Vamos dar uma olhada em como podemos recriar essa armadura apenas com Blockbench<br>
1. Crie um Modelo Genérico para que possamos exportá-lo para o blender mais tarde. Preferencialmente, nomeie o modelo de algo que você pode reconhecer, por exemplo, *Armadura do Arqueiro*.<br>  
   ![showcase55](https://user-images.githubusercontent.com/77132244/215159597-aac5fdb1-45f1-4084-8f18-50baae9df6f0.jpg)<br>
2. Certifique-se de ter o CEM Template Loader instalado para que você possa importar o modelo do jogo base. (Você pode baixar plugins em: File/Plugins).<br>
3. A partir daí, você vai querer importar todos os modelos de armadura do jogo base. (Você pode importar os modelos de armadura em: Tools/Load CEM Template/Unsupported Entities).<br>  
   ![showcase66](https://user-images.githubusercontent.com/77132244/215161290-8ecb58ec-55e3-4297-8f46-48551a0769d7.jpg)<br>
4. Importe as texturas, e altere o tamanho da textura no projeto para o mesmo tamanho da textura. (Dica: você pode aplicar as texturas no modelo, arrastando-o e soltando-o em cada grupo da peça).<br>  
   ![showcase77](https://user-images.githubusercontent.com/77132244/215230534-6eb84ed6-1afb-4a44-bdf2-3ef98bfccdc6.jpg)<br>
5. Agora, corrija as texturas até que elas estejam na ordem correta e se pareçam com o modelo original.<br>
6. Depois de organizar as texturas, pressione "ctrl + A" e certifique-se de que todas as texturas estejam sendo usadas. Se você estiver com texturas faltando, isso significa que você precisa de mais ajustes, então você precisará adicionar peças extras à armadura. No nosso caso, a "Archer's Armor" tem uma parte extra do seu chapéu, então vamos precisar adicionar um cubo e tentar adivinhar sua rotação, escala e posição baseados na armadura do jogo adicionada pelos equipamentos de Dungeon e pelo tamanho da textura.<br>  
   <br>  <a href="url"><img src="https://user-images.githubusercontent.com/77132244/215236925-8fcf459a-e972-4f2d-b43d-65667ce39e1e.jpg" align="center" ></a><br>
7. Como você pode ver, após algumas mudanças, fizemos com que nosso modelo se parecesse com o original, e agora estamos prontos para avançar para o blender e consertar cada uma das partes.<br>  
   ![image](https://user-images.githubusercontent.com/77132244/215238157-3ddd8369-6f04-48f5-8d95-0623d833b3be.png)<br>
8. Agora, ao exportar seu arquivo de armadura, certifique-se de exportá-lo como um .obj, pois é isso que vamos usar dentro do blender.<br>

***
## 💡 Pintura de Peso e Correção de Vértice
Vá para [Guia do Blender|Básico do Blender, Dicas e truques](Blender_page3) para Dicas, truques e correções de como usar o Blender

1. Primeiro, abra o Blender, vá em arquivo/importar/Wavefront (.obj) e importe sua armadura que você acabou de criar no blockbench.
2. Depois disso, selecione uma parte de armadura para atualizar, no nosso caso estaremos remendando a parte de camada de cabeça para remessa primeiro. Vamos corrigir a camada de cabeça primeiro. Então vamos selecionar cada cubo e parte que compõe o capacete para a armadura do arqueiro. Para nós, a "head" e "headback.001" são as partes que fazem o capacete então selecionaremos as duas e pressionamos "ctrl + j" para juntar todas as partes em um único modelo _(DICA: para juntar todas as partes, você precisa estar no modo objeto)_.  
   **Select**  
   ![image](https://user-images.githubusercontent.com/77132244/215290753-d88f7ed2-a32b-43bc-9e33-a35c273d04b9.png)  
   **Join** _(Sinta-se livre para renomear o novo modelo para a parte da armadura que ela corresponde, que no nosso caso, seria "Capacete")_.  
   ![image](https://user-images.githubusercontent.com/77132244/215290768-f91985a4-31a5-4606-bd25-91b150ba0119.png)  
   _(Nessas fotos as outras partes da armadura estão ocultas)_
3. No modo objeto, corrija a rotação de importação, e a posição clicando _"alt + r"_ & _"alt + g"_.
4. No modo de edição, rotacione o modelo e corrija sua posição à localização original antes de redefinir a rotação/erros no modo objetivo.
5. Agora depois de corrigir a rotação de importação, nós colocaremos o modelo no modo de objeto, indo ao modo de objeto. selecionando o modelo de capacete e também o armature, indo para o Object/Pai/Armature Deform/Com Grupos vazios/Com Grupos vazios. Agora você casou com sucesso o modelo com o armature, vamos ir até a tinta pesada. _(DICA: Você pode selecionar duas coisas pressionando shift enquanto clica com o botão direito do mouse. Certifique-se de que ambos estão selecionados no modo objeto e não no modo de apresentar ou editar)_ ![image](https://user-images.githubusercontent.com/77132244/218175943-dcde10ab-9f45-4fb3-a1ec-a2ec7f851483.png) ![image](https://user-images.githubusercontent.com/77132244/218176163-4972a8bf-a70d-4570-aafe-a0b9a0bbcb85.png)
6. Selecionando o modelo do capacete, alternando do modo de objeto para a tinta de peso, Finalmente aplicaremos as deformações dos vértices para que o capacete siga a cabeça enquanto nosso jogador faz qualquer animação. ![image](https://user-images.githubusercontent.com/77132244/218176695-4cfafe68-7010-4450-a5f8-93e3dff1f3dd.png)
7. Para aplicar a pintura peso, certifique-se de que você pode ver os vértices e que você tem o modo de arame habilitado, como na seguinte imagem: ![Showcase89](https://user-images.githubusercontent.com/77132244/218177435-f9d01478-fbe0-45f9-b754-adf5d2efa745.jpg)
8. Agora você pode escolher entre uma gama de pincéis para aplicar a tinta de peso, mas as que usamos principalmente são subtrair e somar ![image](https://user-images.githubusercontent.com/77132244/218177593-95794246-6d9a-4caf-afa2-636b784b8d3a.png)
9. Selecione o grupo de vértices desejado na direita, o que estaremos trabalhando com é o grupo da cabeça pois estamos corrigindo um capacete. ![Showcase99](https://user-images.githubusercontent.com/77132244/218178265-69388152-b465-45e5-8ccd-cfe3e430dfb7.jpg)
10. Agora, simplesmente vá pintando o modelo inteiro para que siga a cabeça inteira. No final, você poderá obter algo assim: ![image](https://user-images.githubusercontent.com/77132244/218178527-210b4b77-5f16-4cf7-9310-6c2b3e2ce83a.png)
11. Você pode testar para ver se você marcou com sucesso e o peso pintou o capacete até a cabeça, indo até o seu armature no modo pose e girando o osso da cabeça ao redor. Se o seu modelo segue o osso de cabeça, então o seu esta correto, se não, Então, por favor, volte a alguns passos e verifique novamente para ver se você perdeu alguma coisa. ![2023-02-10-16-20-11](https://user-images.githubusercontent.com/77132244/218179173-df15dcba-97fa-4081-ad1d-cf1ffbcd92e8.gif)
***
## 💡 Exportando seus modelos corrigidos
Agora que você corrigiu seus modelos, você vai querer exportar seu trabalho e aplicar as alterações no jogo. Mas como é que você pode fazer isso? Bem, é muito simples.

1. Certifique-se de que você não tem nenhuma parte da armadura ou modelos indesejados em seu projeto e apenas a parte da armadura desejada a ser exportada assim. _(DICA: Você não pode exportar duas partes de armadura de uma só vez, exporte uma de cada vez e delete todas as outras.)_  
   ![image](https://user-images.githubusercontent.com/77132244/218179518-18c8d979-68af-44ff-989a-aa55ebb6c239.png)
2. Depois de limpar quaisquer modelos ou peças de armadura indesejadas que não serão exportadas, vá para Arquivo/Exportação/Modelo Minecraft Animado (.json)  
   ![image](https://user-images.githubusercontent.com/77132244/218179838-bbc7d557-8525-4ab8-beaf-41211bf334fd.png)
3. Certifique-se de que você só selecionou Exportar malha já que estamos exportando apenas uma armadura e não uma animação ou um armature personalizado.  
   ![image](https://user-images.githubusercontent.com/77132244/218179992-0f54bb48-99b6-45c2-8166-107668b200e7.png)
4. Verifique o nome da exportação para ver se corresponde ao nome personalizado da armadura dentro do jogo.  
   ![image](https://user-images.githubusercontent.com/77132244/218180136-b229edd0-3941-4a68-b82b-dfc0fcf80bca.png)
5. Clique em Exportar para Json Minecraft depois de terminar.  
   ![image](https://user-images.githubusercontent.com/77132244/218180246-7c04c4ad-ad96-4361-b43a-3ff434de419d.png)
6. Agora vá para o seu jogo, selecione os recursos e dentro da pasta de recursos, crie uma nova pasta. Dentro dela, você pode criar seu pack.mcmeta da seguinte forma:
### Criando arquivo pack.mcmeta

Primeiro, você precisará criar um pack.mcmeta criando um arquivo txt normal e renomeando-o para pack.mcmeta (certifique-se de que as extensões de nome do arquivo estejam ativadas).

Depois disso, edite e adicione estas linhas de código para que o seu banco de dados funcione.
```JSON
{
    "pack":{
        "pack_format":6,
        "description":"A short description on your pack"
        }
}
```

### valores pack_format

| Versão        | Valor |
| ------------- | ----- |
| 1.16.2–1.16.5 | 6     |
| 1.17.x        | 7     |
| 1.18.2        | 8     |
| 1.19.2        | 9     |
| 1.20.1        | 15    |

### 🗂️ Criando o caminho da pasta

Você precisará criar uma série de pastas com os seguintes nomes. Toda pasta ou arquivo precisa estar dentro da anterior.

`assets -> "modid" -> animmodels -> armor -> "registryname".json` _(Arraste seu arquivo de armadura exportado aqui)_


🎉 **Parabéns, você corrigiu com sucesso sua armadura.**🎉


**_Algumas soluções mais fáceis para a correção de armaduras podem ser encontradas aqui: [Outras soluções para glitches de armadura 3D](3Darmor_page2.pt.md)_**