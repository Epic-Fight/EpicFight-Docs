---
search:
  exclude: true
---
# Pacote de Dados personalizado de Armadura/Arma

## **💡 Criando arquivo pack.mcmeta**

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

### **Valores pack_format**

| Versão        | Valor |
| ------------- | ----- |
| 1.16.2–1.16.5 | 6     |
| 1.17.x        | 7     |
| 1.18.2        | 8     |
| 1.19.2        | 9     |
| 1.20.1        | 15    |

### **🗂️ Criando o caminho da pasta**

Você precisará criar uma série de pastas com os seguintes nomes. Toda pasta ou arquivo precisa estar dentro da anterior.

**data -> "modid" -> capabilities -> "type" -> "registryname".JSON**

*Se a arma que você deseja corrigir possui sintaxes inesperadas como barras (/) em seu nome de registro, por exemplo:* **"bloodandmadness:weapons/hunter_axe"**

 Você pode expressar essas sintaxes inesperadas (barras) na hierarquia de pastas como tal:

 **data -> "modid" -> capabilities -> "type" -> "Texto antes da barra" ... -> "registryname".JSON**

 Então para o exemplo mencionado anteriormente ("bloodandmadness:***weapons***/hunter_axe") a hierarquia de pastas seria a seguinte:

 **data -> bloodandmadness -> capabilities -> weapons -> *weapons* -> hunter_axe.JSON**

***

`modid`: você encontrará o modid usando um programa zip, como 7-zip, e clicando em "open archive" no mod que deseja tornar compatível. A partir daí, você abrirá a pasta de dados e então haverá o nome, que você vai nomear a pasta "modid".

`type`: `armas` ou `armaduras`

`registrar-se`: Quando você estiver em jogo você pode pressionar F3+H para ativar dicas avançadas para ver o nome do registro do item que você deseja configurar.
> ![2022-05-29_16 48 36](https://user-images.githubusercontent.com/86358160/170875930-7bae2b88-2aa1-41fe-a59b-5de4027e563f.png)
> 
> ![2022-05-29_16 51 08](https://user-images.githubusercontent.com/86358160/170876568-5838849a-f578-42ae-8d50-f24fb3f9df6d.png)

### **❗ Você precisará criar um arquivo txt com apenas o texto delineado + `.json`**
***
## **💡 Criando um arquivo JSON**

### **⚔️ Arquivo de Arma**

 > Aqui está um exemplo simples de configuração de uma espada:

```
 {
    "type": "epicfight:sword",
    "attributes": {
        "common": {
            "armor_negation": 0.0,
                "impact": 1.1,
            "max_strikes": 1
        }
    }
 }
```

### **🗡️ Arquivo de armas uma/duas mãos**

 > Aqui está um exemplo de configuração de uma lança com atributos de uma mão e duas mãos:

```
 {
    "type": "epicfight:spear",
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

`type`: Que animações deve usar. Valores Disponíveis:

| Tipo       | Informação do Estilo |
| ---------- | -------------------- |
| axe        | Uma mão              |
| fist       | Empunhamento duplo   |
| hoe        | Uma mão              |
| pickaxe    | Uma mão              |
| shovel     | Uma mão              |
| sword      | Empunhamento duplo   |
| spear      | Uma mão/Duas mãos    |
| greatsword | Duas Mãos            |
| uchigatana | Duas Mãos            |
| tachi      | Duas Mãos            |
| longsword  | Duas Mãos            |
| dagger     | Empunhamento duplo   |
| bow        | Duas Mãos            |
| crossbow   | Duas Mãos            |
| trident    | Uma mão              |
| shield     | Empunhamento duplo   |

Uma Mão: Só pode ser usado se mantido na mão principal.

Duas Mãos: só pode ser usado se mantido na mão principal e desativar a função da mão secundária.

Empunhamento Duplo: Pode ser usado na mão secundária se o mesmo tipo de arma for mantido na mão principal.

* Caso queira usar outras categorias de arma feitas por outros mods como o Weapons Of Miracle, certifique-se de mudar o Id do mod que se encontra antes do tipo, então o arquivo precisa ser "iddomod:rapier" ao invés de "epicfight:rapier"
***

`attributes`: Isto decide se a arma deve ter diferentes estatísticas quando algo é segurado na mão secundária
* `common`: se a arma deve ter as mesmas estatísticas mesmo se segurando algo na mão secundária ou se a arma tem a restrição de duas mãos.

* `one_hand/two_hand`: se o tipo de arma não tem o estilo de duas mãos, então elas podem ter diferentes estatísticas quando algo é empunhado na mão secundária ou não.

***

### **🔵 Os próximos poucos valores de atributo são adicionados aos seus valores base.**

`Armor_negation`: Esta porcentagem não diminuirá o dano total pelos pontos de defesa. (valor base: 0.0)

`Impacto`: Esse atributo aumentará o tempo total de atordoamento do alvo atingido. (valor base: 0.5)

`max_strikes`: O número máximo de inimigos atingíveis por golpe. (valor base: 1.0)

`damage_bonus`: Esse atributo aumentará o dano. (valor base: 0.0)

`speed_bonus`: Esse atributo aumentará a velocidade de ataque. (valor base: 0.0)

***

## **💡 Redimensionamento de colisão**

Você pode redimensionar a colisão para torná-la igual visualmente.

 > Aqui está um exemplo simples de uma configuração de armadura:
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

`Número`: O número de colisões interpolando entre a pose anterior e a atual. O valor mais alto aumentará a precisão da detecção de colisão, mas mais acima estará lá fora

`Center`: A posição central da colisão.

`size`: O tamanho x, y e z da colisão.

É difícil especular o tamanho da colisão apenas com a estimativa numérica. Você pode economizar seu tempo referindo-se às predefinições. Copie o valor da predefinição e corrija gradualmente o tamanho.

[Predefinições da Colisão](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/ColliderPreset.java)
***
## **💡 Arquivo de armadura**

 > Aqui está um exemplo simples de uma configuração de armadura:

```
 {
    "attributes": {
        "stun_armor":1.5,
        "weight":8.2
    }
 }
```

`stun_armor`: Esse atributo aumentará o tempo entre atordoamentos.

`peso`: Esse atributo reduz o tempo de atordoamento quando atingido, mas aumenta o consumo de estamina das habilidades e diminui a velocidade de ataque. Itens com alta velocidade de ataque serão afetados mais.
***
## **📦 Terminando o Pacote de Dados (Datapack)**

Agora o que deve ter restado é:
* A pasta de data que contém todos os arquivos JSON e outras pastas, como recursos.
* O arquivo pack.mcdata.
***
### **✉️ Este próximo passo só é necessário se você quiser ser capaz de enviar o Pacote de Dados.**

Você não precisa fazer do pacote de dados um zip, basta colocar tanto a pasta de data quanto o arquivo pack.mcdata em outra pasta, mas aqui está como fazer com 7-Zip.

> Primeiro, você precisará selecionar a pasta de data e o arquivo pack.mcdata.
> 
> ![pacote de dados mcdata](https://user-images.githubusercontent.com/86358160/171872228-00816dc2-cf98-4bdc-bddf-a3a7bd1cd9c1.PNG)

Em seguida, clique com o botão direito, vá em 7-Zip, e clique em `add to "datapack.zip"`.

E é isso, tudo que você terá que fazer agora é colocar o pacote de dados na pasta datapack de um mundo e se divertir :)
***

** O Tutorial do [Youtube](https://www.youtube.com/watch?v=JNpahwjriac&t=33s) para aqueles que não querem ler**
