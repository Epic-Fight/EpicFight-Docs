---
search:
  exclude: true
---
# Pacote de Dados (Datapack) Customizado de Entidade


O Epic Fight normalmente não é compatível com outros mods, especialmente com as entidades. Então, você deve definir manualmente o modelo da entidade, animações e outros valores de atributo. Isso pode ser alcançado utilizando um Pacote de Dados (Datapack).
***

## **💡 Criando um arquivo JSON -**


Antes de criar um arquivo JSON, obtenha o nome do registro da entidade que deseja tornar compatível. No Minecraft, você pode ver a lista de entidades registradas agora pelo comando "/summon".

![imagem](https://user-images.githubusercontent.com/79469058/166224784-b556e090-4e56-45bd-ad80-ccc33c06d859.png)


A maioria dos nomes do registro consiste em "modid:entityname". Se você receber o nome de registro, poderá criar o arquivo JSON em `data/modid/epicfight_mobpatch/entityname.json`
***

## **💡 Obtendo tags de armature, animação e modelo -**

[Arquivos dos Modelos](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/api/client/model/Meshes.java)

[Arquivos Armature](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Armatures.java)

[Arquivos das Animações](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Animations.java)
***
## **💡 Instalação fácil -**

### **📘 Usando presets**


Para entidades que estendem as classes/ou os modelos similares para os que estão na vanilla, você pode usar predefinições como um método de configuração simples.
```JSON
{
    "preset": "minecraft:creeper"
}
```

Tenha em mente que isto não funcionará corretamente se a entidade alvo não compartilhar seu código com a entidade vanilla (se a classe de entidade não se estender a classe vanilla), embora pareça ser o mesmo. Os valores permitidos são todos os nomes de registro da entidade que estão registrados no [código](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/world/capabilities/provider/EntityPatchProvider.java)

### **❌ Desabilitar uma entidade animada**


Você também pode desativar animações de entidades e modelos personalizados usando a seguinte linha (dentro de entityname.json):
```JSON
{
    "disabled": true
}
```

***
## **💡 Recursos de animação das entidades -**
Em Epic Fight, você é capaz de mudar o comportamento da IA das entidades através de datapacks. Você pode personalizar quais animações devem ser reproduzidas de acordo com certos comportamentos.

Abaixo está um exemplo simples de como criar um zumbi socador.
```JSON
{
    "model": "epicfight:entity/biped_old_texture",
    "armature": "epicfight:entity/biped",
    "renderer": "minecraft:zombie",
    "isHumanoid": false,
    "faction": "neutral",
    "attributes": {
        "impact": 0.5,
        "armor_negation": 0.0,
        "max_strikes": 1,
        "chasing_speed": 1.0,
                "scale": 1.0
    },
    "default_livingmotions": {
        "idle": "epicfight:biped/living/idle",
        "walk": "epicfight:biped/living/walk",
        "chase": "epicfight:biped/living/walk",
        "mount": "epicfight:biped/living/mount",
                "fall": "epicfight:biped/living/fall",
        "death": "epicfight:biped/living/death"
    },
    "stun_animations": {
        "short": "epicfight:biped/combat/hit_short",
        "long": "epicfight:biped/combat/hit_long",
        "knockdown": "epicfight:biped/combat/knockdown",
        "fall": "epicfight:biped/living/landing"
    },
    "combat_behavior": [
        {
            "weight": 100.0,
            "canBeInterrupted": true,
            "looping": false,
            "behaviors": [
                {
                    "conditions": [
                        {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                    ],
                    "animation": "epicfight:zombie/attack1"
                },
                {
                    "conditions": [
                        {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                    ],
                    "animation": "epicfight:zombie/attack2"
                },
                {
                    "conditions": [
                        {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                    ],
                    "animation": "epicfight:zombie/attack3"
                }
            ]
        }
    ]
}
```

`model`: O modelo da entidade. Valores permitidos estão [aqui](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/api/client/model/Meshes.java)

`armature`: O "esqueleto" da entidade. Valores permitidos estão [aqui](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/gameasset/Armatures.java)

`renderizador`: Todos os nomes de registro da entidade que estão registrados em nosso código fonte podem ser obtidos [aqui](https://github.com/Yesssssman/epicfightmod/blob/1.18.2/src/main/java/yesman/epicfight/client/events/engine/RenderEngine.java)


`isHumanoid`: Determina se a entidade é humanoide. Mobs Humanoides são capazes de mudar as animações baseado em que item eles estão segurando.

`Facção`: Entidades que têm a mesma facção não atacarão umas às outras com ataques corpo a corpo. Os valores permitidos são:`enderman, piglins, wither, neutral, undead, illager, villager`
***
`atributos`:

| Chave          | Funcionalidade                                                                             |
| -------------- | ------------------------------------------------------------------------------------------ |
| impact         | Aumenta o tempo de atordoamento do ataque alvo                                             |
| armor_negation | Ignorar pontos de defesa em %                                                              |
| max_strikes    | Determina quantas entidades podem acertar por ataque                                       |
| chasing_speed  | Para mobs com ataques corpo a corpo, determina o quão rápido a criatura persegue o inimigo |
| scale          | Determina o tamanho da entidade                                                            |
***
`default_livingmotions`:

| Chave | Funcionalidade                               |
| ----- | -------------------------------------------- |
| idle  | Quando a entidade permanece parada           |
| walk  | Quando a entidade se move                    |
| chase | Quando a entidade se move e tem um alvo      |
| fall  | Quando a entidade cai por causa da gravidade |
| death | Quando a entidade morre                      |
| mount | Quando a entidade está montando              |
***
`stun_animations`:

| Chave     | Funcionalidade                     |
| --------- | ---------------------------------- |
| short     | Todos os ataques normais           |
| long      | Para alguns ataques especiais      |
| knockdown | Esmagada terrestre do Ender Dragon |
| fall      | Dano de Queda                      |
***
`combat_behavior`: define os movimentos do ataque da entidade.

| Chave            | Funcionalidade                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| weight           | A possibilidade deste comportamento é selecionada. Será calculado como `(peso/soma de peso total)` |
| canBeInterrupted | Determina se esta série de movimento pode ser cancelada                                            |
| looping          | Determina se o comportamento atual deve ser salvo quando cancelado                                 |
| cooldown         | Determina quantos "ticks" vai levar para ser usado novamente                                       |
| behaviors        | Definição das condições e animação de ataque                                                       |
***
`comportamentos`:

| Chave      | Funcionalidade                                               |
| ---------- | ------------------------------------------------------------ |
| conditions | Condições que precisam ser cumpridas para serem selecionadas |
| animation  | O caminho de animação                                        |
***
`Condições`:

| Chave                     | Funcionalidade                                                                                | Parâmetros                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| random_chance             | Verifica se o valor aleatório é maior do que o parâmetro fornecido                            | "chance": double                                                                                    |
| within_eye_height       | Verifica se a distância Y entre o alvo e o atacante é menor que a altura do olho do atacante  | -                                                                                                   |
| within_distance           | Verifica a distância entre o alvo e o atacante, se eles estiverem dentro dos parâmetros dados | "min": double, "max": double                                                                        |
| within_angle              | Verifica se o ângulo do eixo em direção ao alvo está dentro do parâmetro dado.                | "min": double, "max": double                                                                        |
| within_angle_horizontal | Verifica se o ângulo do eixo Y em direção ao alvo está dentro do parâmetro dado.              | "min": double, "max": double                                                                        |
| health                    | Verifica a saúde da entidade.                                                                 | "health": double, "comparator": `enum:(greater_absolute, less_absolute, greater_ratio, less_ratio)` |

***
## **💡 Mudando a animação baseado na arma que está segurando -**
Para os mobs humanoides, você pode definir diferentes conjuntos de animações dependendo da arma que eles estão segurando. Neste caso, o formato do "combat_behaviors" é pouco alterado. Primeiro, você precisa verificar se você definiu o valor "isHumanoid" para true.

Abaixo está um exemplo de criação de um zumbi, empunhando uma espada como um esqueleto wither enquanto está parado e caminhando, Atacando com uma espada, ou batendo com mãos vazias.
```JSON
{
    "model": "epicfight:entity/biped_old_texture",
    "armature": "epicfight:entity/biped",
    "renderer": "minecraft:zombie",
    "isHumanoid": true,
    "faction": "neutral",
    "attributes": {
        "impact": 0.5,
        "armor_negation": 0.0,
        "max_strikes": 1,
        "chasing_speed": 1.0,
                "scale": 1.0
    },
    "default_livingmotions": {
        "idle": "epicfight:biped/living/idle",
        "walk": "epicfight:biped/living/walk",
        "chase": "epicfight:biped/living/walk",
        "mount": "epicfight:biped/living/mount",
                "fall": "epicfight:biped/living/fall",
        "death": "epicfight:biped/living/death"
    },
    "humanoid_weapon_motions": [
        {
            "weapon_categories": ["sword"],
            "style":"one_hand",
            "livingmotions": {
                "walk": "epicfight:wither_skeleton/walk",
                "chase": "epicfight:wither_skeleton/chase"
            }
        }
    ],
    "stun_animations": {
        "short": "epicfight:biped/combat/hit_short",
        "long": "epicfight:biped/combat/hit_long",
        "knockdown": "epicfight:biped/combat/knockdown",
        "fall": "epicfight:biped/living/landing"
    },
    "combat_behavior": [
        {
            "weapon_categories": ["axe", "hoe", "pickaxe", "shovel", "sword"],
            "style": "one_hand",
            "behavior_series": [
                {
                    "weight": 100.0,
                    "canBeInterrupted": true,
                    "looping": true,
                    "behaviors": [
                        {
                            "conditions": [
                                {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.2}
                            ],
                            "animation": "epicfight:biped/combat/mob_onehand1"
                        },
                        {
                            "conditions": [
                                {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.2}
                            ],
                            "animation": "epicfight:biped/combat/mob_onehand2"
                        }
                    ]
                }
            ]
        },
        {
            "weapon_categories": ["fist"],
            "style": "common",
            "behavior_series": [
                {
                    "weight": 100.0,
                    "canBeInterrupted": true,
                    "looping": false,
                    "behaviors": [
                        {
                            "conditions": [
                                {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                            ],
                            "animation": "epicfight:zombie/attack1"
                        },
                        {
                            "conditions": [
                                {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                            ],
                            "animation": "epicfight:zombie/attack2"
                        },
                        {
                            "conditions": [
                                {"predicate":"within_eye_height"}, {"predicate":"within_distance", "min": 0.0, "max": 2.0}
                            ],
                            "animation": "epicfight:zombie/attack3"
                        }
                    ]
                }
            ]
        }
    ]
}
```

`humanoid_weapon_motions`: Uma lista dos movimentos vivos modificados para cada categoria de arma.

`weapon_categories`: Quais armas devem ter a mesma série de comportamentos. Valores permitidos são:

```JAVA
public enum WeaponCategory {
       NOT_WEAPON, AXE, FIST, GREATSWORD, HOE, PICKAXE, SHOVEL, SWORD, UCHIGATANA, SPEAR, TACHI, TRIDENT, LONGSWORD, DAGGER, SHIELD, RANGED
}
```

`style`: Estilo de segurar. Valores permitidos são: `uma _mão, duas mãos, comum`.

