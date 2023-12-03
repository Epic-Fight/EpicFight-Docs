# Rastros Personalizados

No epic fight, nós adicionamos aos usuários uma maneira de criar e adicionar seu próprio gosto aos rastros de espadas. Não só você é capaz de mudar as cores do rastro mas também suas texturas para atender às suas necessidades!

Para criar uma textura de rastro personalizado, você pode simplesmente adicionar texturas e referenciá-las dentro do seu arquivo .json (chegaremos lá em breve).

Um exemplo de textura de rastro seria o usado dentro do epic fight [here](https://github.com/Yesssssman/epicfightmod/tree/1.18.2/src/main/resources/assets/epicfight/textures/particle).
_(Clique em swing\_trail ou katana\_trail para ver exemplos)_

## 🦶 Primeiros passos

- Primeiro, crie uma pasta dentro da sua pasta de texturepack assim (o nome não importa):
  !\[image]
  (https\://github.com/Yesssssman/epicfightmod/assets/77132244/c549e612-7475-4a3e-8f83-f99a3c0d6764)
  _(Você pode acessar esta pasta facilmente abrindo o minecraft, e indo para Opções > Pacotes de recursos...)_

- Dentro dela, crie uma nova pasta chamada assets, e um novo arquivo de texto chamado pack.mcmeta
  _(Certifique-se de que você está editando a extensão do arquivo e não apenas o seu nome, você precisa convertê-lo de um .txt para um .mcmeta)_

Dentro do arquivo mcmeta coloque isto:
_(Você pode editar a descrição como quiser)_

```
{
	"pack": {
		"pack_format": X,
		"description": "False World Modpack TrailPack. Made by White Rave"
	}
}
```

_(Em pack\_format, você deve colocar uma das seguintes opções abaixo dependendo da sua versão do minecraft)_

| Versão        | Valor |
| ------------- | ----- |
| 1.16.2–1.16.5 | 6     |
| 1.17.x        | 7     |
| 1.18.2        | 8     |
| 1.19.2        | 9     |
| 1.20.1        | 15    |

### ✏️ Personalização do rastro .Json

Agora, crie a seguinte estrutura de pastas:
**`assets/"iddomod"/item_skins/"registro_do_item".JSON`**

- Para verificar o Id do mod e o registro do item, você pode clicar f3 + h dentro do minecraft e passar o mouse sobre o item, deve ser algo como _"cool\_modid:cool\_sword\_item\_id"_

Depois de ter criado o arquivo .JSON você agora pode prosseguir para realmente dar aos seus rastros o seu próprio gosto. Siga o exemplo abaixo para ver como o JSON deve se parecer:

```json
{
    "trail": {
    	"color": [51, 235, 203],
    	"begin_pos": [0.0, 0.0, -0.2],
    	"end_pos": [0.0, 0.1, -0.7],
    	"lifetime": 4,
		"interpolations": 4,
    	"texture_path": "epicfight:textures/particle/swing_trail.png",
    	"particle_type": "epicfight:swing_trail"
    }
}
```

Este é um exemplo de arquivo JSON usado para o item diamond\_dagger em epic fight. Você pode usar qualquer seletor de cores RGB para mudar a cor, e você também pode mudar os valores até obter o que queira.

Aqui está uma lista com os possíveis parâmetros que podem ser usados dentro do .json do rastro de arma

| Parâmetros       | Informações                                                               |
| ---------------- | ------------------------------------------------------------------------- |
| "trail"          | No arquivo de skin do item                                                |
| "color"          | O valor RGB do rastro dito                                                |
| "begin\_pos"     | A posição inicial do bastão virtual que desenha o rastro para cada quadro |
| "end\_pos"       | A posição final do bastão virtual que desenha o rastro para cada quadro   |
| "lifetime"       | A quantia de tempo que o rastro deve resistir                             |
| "interpolations" | O número de vértices criado para cada tick                                |
| "texture\_path"  | O caminho de textura para seu rastro personalizado                        |
| "particle\_type" | O registro do rastro                                                      |

***

### ✏️ Texturas Do Rastro Personalizado

Você também pode criar novas texturas de rastro, simplesmente fazendo a seguinte estrutura de pasta
**`assets/epicfight/textures/particle/"modid"`**
Dentro desta pasta "modid", você pode criar quantas texturas quiser, e simplesmente referenciar sua localização no rastro arquivo de personalização de .json sob _`"texture_path"`_

**Aqui estão alguns exemplos de texturas de trilha usadas em epic fight:**
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/eccfefb9-f9f8-4518-a2f6-eab3a2c4e3f8)
!\[image]\(https\://github. om/Yesssssman/epicfightmod/assets/77132244/8421ff50-0f75-4308-8793-fb4be3f60a23)
Você pode conferi-los indo nosso repositório [here](https://github.com/Yesssssman/epicfightmod/tree/1.18.2/src/main/assets/epicfight/textures/particle)

### ✏️ Personalização dos dados do rastro

_[Reference](https://github.com/Yesssssman/epicfightmod/tree/1.18.2/src/main/assets/epicfight/animmodels/animations/biped/combat/data)_
Você também pode ter uma personalização em profundidade dos dados de trilha para cada animação. Acima, você pode verificar a referência em nosso repositório e ver como ele é usado em vários dados de animação.

(Certifique-se de usar esta estrutura de pastas: **`assets/epicfight/animmodels/animations/biped/combat/data/animation_name.json`**)
_Aqui está um exemplo de dados de rastros personalizados:_

```json "trail_effects": [
		{
			"start_time": 0.05,
			"end_time": 0.15,
			"joint": "Tool_R",
			"item_skin_hand": "main_hand"
		}
	]
}
```

Você pode usar os seguintes parâmetros para alterar os dados em qualquer animação:

| Parâmetros         | Informações                                                 |
| ------------------ | ----------------------------------------------------------- |
| "trail\_effects"   | Em arquivo de dados de animação                             |
| "start\_time"      | O tempo em que a animação do rastro deve começar a desenhar |
| "end\_time"        | O tempo em que a animação do rastro deve parar de desenhar  |
| "joint"            | Conjunto principal da posição do rastro                     |
| "item\_skin\_hand" | A mão onde os dados de pele do item devem ser chamados      |
