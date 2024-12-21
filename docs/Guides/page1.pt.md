# Introdução ao Blender

O Epic Fight usa animações personalizadas para várias ações no jogo, de beber, de comer até mesmo de atacar combos. Essas animações são gerenciadas pelo Blender, um software de código aberto 3D para modelagem, animação, texturação, composição, renderização e edição de vídeo.

Pode parecer esmagador trabalhar com o Blender, mas aqui eu só vou te ensinar o necessário absoluto para trabalhar com o Epic Fight.

(Nota: Epic Fight usa o Blender 2.79)
***
## ⬇️ Instalando o Blender
Para instalar o Blender (2.79) vá para o seguinte site:

* [Blender 2.79](https://download.blender.org/release/Blender2.79/)

Certifique-se de selecionar a versão correta que corresponde ao seu Sistema Operacional. (Vamos usar o Windows 64x bits)

 ### Extraindo e Executando... Depois de fazer o download do arquivo correto do índice do Blender, você poderá extrair os arquivos com o seu programa de escolha. (Recomendamos que você use algo como 7zip)

Depois de extrair os arquivos, certifique-se que o Blender seja executado. Você pode testar isso abrindo a hierarquia de pastas e executando o Blender.exe. Se uma janela como essa for aberta, então significa que você instalou o Blender com sucesso.
***
## ⬇️ Exportador Json
Para instalar o nosso exportador customizado de Blender, vá ao nosso repositório e baixe nosso ramo principal. Este se encontra aqui: [Blender Json Exporter](https://github.com/Yesssssman/blender-json-exporter)

![showcase98](https://github.com/Yesssssman/epicfightmod/assets/77132244/95ce0412-b498-466b-ae1b-7a79a1ab27a1)

1.  Vá para a pasta onde o Blender está instalado, mova todos os arquivos abaixo de /2.79/scripts/addons/xxxxxxxx/.  (Você pode criar uma nova pasta representada aqui pelos múltiplos X)
2. Vá para Blender > File/Arquivo > User Preferences/Preferências do Usuário > Add-ons, e ache um add-on nomeado "Import-Export: Minecraft Model Json Exporter" ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/b327a99b-ca2e-44d5-bc32-554a4d56be1b)

3.   Marque a caixa de seleção e clique em "Salvar Configurações do Usuário".
4. Como você vê quando clicar para exportar, você será capaz de gerar um arquivo json, em que você pode escolher 3 opções, Malha, Animações e Armatura, mas vamos vê-las mais tarde.
***
## 💡 Aprendendo o básico
Primeiro, devemos aprender como realmente trabalhar com o Blender, como mover alguns atalhos úteis e o que cada modo faz. Começaremos a aprender como nos movimentar com o Blender.
***
### 🎥 Movendo sua câmera
Para mover a rotação da sua câmera, você pode pressionar a roda do mouse e mover o mouse com ela pressionada. Depois de fazer isso, provavelmente você verá algo parecido com isto: ![Gif1](https://i.imgur.com/i2nRfF3.gif)

Agora, se você quiser mover a localização da sua câmera, você pode pressionar o botão do meio do mouse + Shift. Você será capaz de ver algo como isto: ![Gif2](https://i.imgur.com/Ozac1y0.gif) Bom trabalho! Agora você sabe como mover sua câmera.
***
### ✏️ Editar & Básicos do modo objeto
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/af9b356f-f546-47cd-9c86-e4900cede9c8) ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/d50c49ca-8ab2-40df-b47e-acb193092423) Em resumo, o modo de edição é usado para editar a geometria de um objeto e seu local real, rotação e escala em um projeto. Nós frequentemente usamos o modo de edição para mudar modelos em formas que simplesmente não são práticas com o modo Objeto. Uma das maneiras que usamos o modo de edição é adicionar "Ossos" a um equipamento e sua posição real (e pela posição real eu quero dizer sua posição atual, escala, rotação de um projeto, onde eles irão após redefinir sua rotação e escala da localização do objeto)

Então vamos dizer que você tem um equipamento e que deseja criar uma nova animação, ao invés de ter que mudar manualmente cada osso para uma nova posição, você pode simplesmente redefinir o esqueleto inteiro para sua posição original que foi definida no Modo de Edição, e de lá trabalhar em uma nova animação, melhorando o fluxo de trabalho e tornando mais fácil a criação de novas animações ou quadros para as já existentes.

Nós raramente usamos o Modo Objeto no Epic Fight, mas basicamente, o modo Objeto permite que você edite objetos individualmente. Você também consegue redimensionar, alterar a localização e a rotação dos objetos no Modo Objeto, sem afetar sua origem.

Assista [este vídeo](https://www.youtube.com/watch?v=n1lCK8WH62k&t=593s&ab_channel=CGCookie) se você quiser uma explicação mais profunda sobre o que o Modo de Edição e Objeto fazem.
***
### 🚶 Modo pose
Nós geralmente usamos o modo de pose para animar já que é uma forma muito útil quando se trata de deixar o fluxo de trabalho mais rápido. Com o modo de pose, você consegue mudar a coordenada individual e a rotação de cada Osso. O modo pose é feito principalmente para ser usado com ossos, pois ele pode facilmente alterar posições dos caracteres.

Aqui está um [video para você assistir](https://www.youtube.com/watch?v=x5an6UV5r9c&t=146s&ab_channel=TutorTube) para que você possa ter uma explicação visual do que você pode fazer com o modo pose.
***
### 🦴 Adicionar ossos e excluir coisas
Uma das maneiras de adicionar ossos é entrando no Modo de Objeto e selecionando Adicionar > Armatura > Único Osso ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/f34f4e8a-dab5-4aae-b215-4a60b8aaea81) Como alternativa, você pode pressionar **Shift+A** para abrir o mesmo menu e adicionar um Único Osso.

Para excluir coisas você pode simplesmente apertar a tecla Del no seu teclado e ele vai te apresentar com um aviso perguntando se você realmente quer apagar isso.
***
### 🔴 AutoKey e Começando com animações
Primeiro vá para a aba de animações do seu projeto. (DICA: Você provavelmente estará no modo padrão, então tente encontrar isto) ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/87b17fb4-6d73-4ebd-83e9-0e3935247b34)       >       ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/e80f55c4-5eaa-4d9e-ba3d-637a099b5504) Agora vá para o modo Pose e certifique-se de ter criado uma nova ação como esta: (certifique-se de selecionar o editor de ação) ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/20b88013-524f-4e7b-ae11-b7676cf29239) Faça seu primeiro frame pressionando "i" e salvando o que deseja. Loc = Localização Rot = Rotação

Não se preocupe com os outros tipos de salvar um keyframe, por enquanto, tudo o que queremos deve ser a opção padrão de salvamento. (Sem salvamento visual ou delta)

Você pode usar Folha de Corda para ver onde cada frame está localizado, e você pode alterar os quadros de início e de fim na linha do tempo. Resumo da Folha de Dopa: ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/64a1a133-90a9-4a66-97b1-57acd0a1dcf8) Timeline onde você deseja definir o quadro inicial e final. ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/defbf770-1edc-44d0-a0b0-839ca33e0fcd) Você pode usar esses botões para reproduzir sua animação ou se mover pelos quadros. ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/eb7f0c29-c0c8-459f-9b6e-bd177c838966) Você também pode usar as setas esquerda e direita no seu teclado para ir para o próximo frame.
***
#### AutoKey
AutoKey é uma ferramenta utilizada para auto registrar quadros-chave quando você fizer uma alteração para ossos ou objeto em uma cena. Você pode ativar clicando neste botão vermelho: ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/03954366-7866-4399-8e61-7379a0e527f9) (Tenha em mente que o AutoKey pode ser muito irritante às vezes)
***
### 🔘 Modos de exibição para objetos
Você pode alterar seu modo de exibição para que você tenha diferentes perspectivas de cada objeto. ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/bf817606-2367-47aa-932e-5d8b1ba48268)

Por exemplo, nós temos o modo WireFrame que permite que você desative a textura de um objeto para que você só fique com um arame desse objeto, permitindo que você veja facilmente o que está no outro lado.

Também temos o modo Textura que exibirá essa textura de objetos.

E o modo sólido que fará com que o objeto selecionado tenha uma textura cinza e chata, muitas vezes usada para verificar as projeções de sombras em um objeto.
***
### ✒️ Pintura de peso
A pintura de peso é provavelmente uma das ferramentas mais utilizadas quando se trata de criar um equipamento. É uma maneira de determinar o peso da influência que cada grupo dos vértices (osso) terá sobre um vértice. Ele permite que você basicamente facilite o processo de animação.

Imagine se você tivesse que transformar manualmente a malha de seu objeto para cada pose e quadros-chave que queria fazer, levaria meses para fazer uma única animação, pois seria muito demorada, então ossos foram criados até agora você só precisa interagir com eles, mas como determinar as transformações da malha dependendo de cada osso, bem que tudo calculado por tinta pesada.

Não há uma maneira adequada de mostrar a você como lidar com a pintura de peso, mas, basicamente, ao atribuir um grupo de ossos a um objeto, ele criará um grupo vértice que você pode definir o peso para cada vértice. Lembre-se de que todos os vértices precisam ser atribuídos a um grupo vértice para ele ser exportável.

Aqui estão dois vídeos explicando como usar / o que a tinta de peso faz. (Recomendo assistí-los em ordem) [Video 1](https://www.youtube.com/watch?v=4fICQmBEt4Y&ab_channel=RoyalSkies) [Video 2](https://www.youtube.com/watch?v=5M7YO3SYJ_U&ab_channel=Yami3D)
***
### 🟪 Mapeamento UV & Texturação

Mapeamento UV significa "Coordenadas UV mapeadas" no campo de computação gráfica e modelagem 3D. É uma técnica usada para mapear texturas 2D em superfícies 3D de um objeto gerado por computador. O termo "UV" se refere ao sistema de coordenadas 2D usado para representar a imagem de textura 2D, onde U representa o eixo horizontal e V representa o eixo vertical.

Em Epic Fight, usamos principalmente o mapeamento UV para corrigir problemas entre as curvas (onde o Blender pode ter problemas determinando onde usar certas partes da textura), e mapear corretamente a textura para cada lado plano de um cubo.

Você pode mudar a sua tela para o modo de edição UV indo para o topo de sua tela e trocando a disposição da tela.![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/3fcf3343-f5ae-418b-9797-9704de66d819)

Você pode criar novas texturas clicando neste botão inferior / Você também pode atribuir texturas existentes clicando nisto:


<img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/742e9658-1832-48d3-a681-005a417226ae" alt="image" style="float:left; margin-right:10px;" /> /  <img  src="https://github.com/Yesssssman/epicfightmod/assets/77132244/12a57d9a-ad48-4daf-8830-806afc9b98cf"  alt="Image"  style="float:right; margin-left:10px;" />

#### Corrigindo problemas entre dobramentos (cortes de loop)
Se você é um desenvolvedor ou alguém procurando fazer modelos de entidade você pode ter que adicionar curvas a seus modelos. Um dos problemas mais frequentes é quando o Blender não consegue determinar qual textura deve ser usada naquele espaço estreito entre os cortes de loop.

<p align="center">  <img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/933a7101-0db1-480d-8af8-f58d928ecd94" alt="Image" style="display: block; margin: 0 auto;" />  </p>
<p align="center">Este é um exemplo do que você pode enfrentar enquanto estiver remendando armaduras, fazendo entidades ou adicionando curvas em geral</p>

Não se preocupe, pois, isso é facilmente resolvido dimensionando as faces de cima ou de baixo desse modelo duas vezes. Você pode pressionar:
* Ctrl + (numpad_mais) - selecione o próximo conjunto de vértices
* Ctrl + (numpad_menos) - desmarque o último conjunto de vértices selecionado

Isso é provavelmente o que você terá:

![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/98b8f3fa-0fa7-4bb6-812f-39f5ea358ff3)

No modo de edição UV, você pode selecionar os planos com textura sobreposta e você pode estender seus vértices para usar a parte superior da textura, ou a parte inferior conforme a sua localização.

![2023_01_21_15_16_55_33](https://github.com/Yesssssman/epicfightmod/assets/77132244/99ed4706-9f78-4955-9667-1925a78258b2) Aviso: Certifique-se de selecionar o modo de exibição UV para o Edge.

***
### 🧲 Transformação por Atração
A Atração permite que você mova objetos de forma precisa. Sua função principal é permitir que você coloque outros objetos um com o outro mais facilmente, como uma régua quando quiser fazer uma linha reta. Você pode ativar a atração clicando no pequeno ícone do ímã próximo das suas opções de transformação da orientação 3D. ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/c2f16673-dcb5-4f8f-8b02-59f3c3c79860)
***
### 🔀 X-Axis Espelho
Você pode ter que fazer duas animações diferentes para uma única ação. Por exemplo, se você quisesse fazer uma animação de "Segurando Tocha" você precisaria espelhar sua animação no Eixo-X para ter as variantes de mão principal e secundária da animação mencionada.

Você é capaz de fazer esse tipo de espelhamento copiando a pose atual (Ctrl + C), então selecionando o lado direito (Ctrl + i) e, finalmente, em uma ação recém-criada, você pode então colar a animação mencionada pressionando "Shift" + "Ctrl" + "V"

[Referência](https://blender.stackexchange.com/questions/75848/how-do-i-make-x-axis-mirror-available-in-pose-mode)
***
### 🔲 Transparência
Alguns objetos que você importa dentro do Blender podem ou não ter o seguinte problema:

![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/02a6e79d-ce66-40f8-a017-3cb5dabab20a)

Basicamente, as texturas pretas onde deveriam ser transparentes.

Você pode corrigir isso indo para o modo de objeto, depois em materiais e habilitando a transparência.

[Referência](https://docs.blender.org/manual/en/2.79/render/blender_render/materials/properties/transparency.html)
***
Por ora, é só isso! Se você quiser começar a aprender o blender, eu sugiro que você olhe esta série de playlist feita por Derek banas.

**https://www.youtube.com/playlist?list=PLpdCRuhtdVcuwfyl97L7TjeChtx0k8vcb**



 
