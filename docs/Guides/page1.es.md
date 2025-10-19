---
search:
  exclude: true
---
# Empezando con Blender

Epic Fight utiliza animaciones personalizadas para múltiples acciones en el juego, desde beber, comer hasta combos de ataque. Estas animaciones son manejadas por Blender, un software 3D de código abierto para modelar, animar, texturizar, composición, renderizado y edición de vídeo.

Puede parecer abrumador trabajar con la mezcla, pero aquí solo voy a enseñarle lo absolutamente necesario para trabajar con Epic Fight.

(Nota: Epic Fight usa Blender 2.79)
***
## ⬇️ Instalando Blender
Para instalar Blender (2.79) diríjase al siguiente sitio web:

* [Blender 2.79](https://download.blender.org/release/Blender2.79/)

Asegúrese de seleccionar la versión correcta que corresponde a su Sistema Operativo. (Aquí usaremos windows de 64x bits)

 ### Extraer y Ejecutar ... Después de descargar el archivo correcto desde el índice de Blender, puede extraer los archivos con su programa elegido. (Recomendamos usar algo como 7zip)

Una vez que haya extraído los archivos, asegúrese de que se ejecuta Blender. Puede probarlo abriendo el conjunto de carpetas y ejecutando Blender.exe. Si se abre una ventana como esta, significa que ha instalado con éxito blender.
***
## ⬇️ Json exporter
Para instalar nuestro exportador de Blender personalizado, vaya a nuestro repositorio y descargue nuestra sucursal maestra. [](https://github.com/Yesssssman/blender-json-exporter)Blender Json Exporter

![showcase98](https://github.com/Yesssssman/epicfightmod/assets/77132244/95ce0412-b498-466b-ae1b-7a79a1ab27a1)

1.  Vaya a la carpeta donde está instalado Blender, mueva todos los archivos bajo /2.79/scripts/addons/xxxxxxx/.  (Puede crear una nueva carpeta representada aquí por la X múltiple)
2. Ve a Blender > Archivo > Preferencias de usuario > Complementos, y encuentra un complemento llamado "Importar-Exportar: Exportador de modelos de Minecraft Json" ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/b327a99b-ca2e-44d5-bc32-554a4d56be1b)

3.   Marque la casilla de verificación y haga clic en "Guardar configuración de usuario".
4. Como puedes ver al hacer clic para exportar, serás capaz de generar un archivo json en el cual puedes elegir 3 opciones, Mesh, Animaciones y esqueletos, pero las veremos más adelante.
***
## 💡 Aprender lo básico
En primer lugar, deberíamos aprender a trabajar con mezcla, cómo movernos alrededor de unos pocos teclados útiles y lo que hace cada modo. Como punto de partida, aprenderemos a movernos con mezcla.
***
### Moviendo tu cámara
Para mover la rotación de la cámara, puede pulsar la rueda del ratón y mover el ratón con él presionado. Después de hacer eso, probablemente verás algo similar a esto: ![Gif1](https://i.imgur.com/i2nRfF3.gif)

Ahora si quieres mover la ubicación de la cámara puedes pulsar el botón central del ratón + shift. Podrás ver algo como esto: ![Gif2](https://i.imgur.com/Ozac1y0.gif) ¡Buen trabajo! Ahora ya sabes cómo mover tu cámara.
***
### ✏️ Editar & Modo objeto básico
![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/af9b356f-f546-47cd-9c86-e4900cede9c8) ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/d50c49ca-8ab2-40df-b47e-acb193092423) En resumen, el modo de edición se utiliza para editar objetos geometría y su ubicación real, rotación y escala en un proyecto. A menudo usamos el modo edición para cambiar modelos de maneras que simplemente no son prácticas con el modo Objeto. Una de las maneras en que usamos el modo de edición es añadir huesos a un rig y su posición real (y por posición real quiero decir su posición real, escala, rotación en un proyecto, donde irán después de restablecer la rotación y escala de su ubicación de objeto)

Así que digamos que tienes un rig y quieres crear una nueva animación, en lugar de tener que cambiar manualmente cada hueso a una nueva posición, puedes simplemente resetear todo el esqueleto a su posición original establecida en el modo Edición, y desde allí trabajan en una nueva animación, mejorando su flujo de trabajo y facilitando la creación de nuevas animaciones o marcos a los ya existentes.

Rara vez usamos el modo Objeto en Epic Fight, pero básicamente, el modo Objeto le permite editar objetos individualmente. También puede cambiar el tamaño, cambiar la ubicación y la posición de los objetos en el modo objeto.

Mira [este video](https://www.youtube.com/watch?v=n1lCK8WH62k&t=593s&ab_channel=CGCookie) si quieres una explicación más detallada sobre lo que hace Editar y Modo Objeto.
***
### 🚶 Modo pose
A menudo usamos el modo pose para animar como su muy útil cuando se trata de hacer el flujo de trabajo más rápido. Con el modo pose puedes cambiar cada una de las coordenadas y rotación individuales de cada hueso. El modo pose está hecho principalmente para ser usado con huesos ya que puede cambiar fácilmente las posturas de los caracteres.

Aquí tienes un vídeo [para ver](https://www.youtube.com/watch?v=x5an6UV5r9c&t=146s&ab_channel=TutorTube) para que puedas tener una explicación visual de lo que puedes hacer con el modo pose.
***
### 🦴 Añadir huesos y eliminar cosas
Una de las formas en que puede agregar huesos es yendo al modo Objeto y seleccionando Agregar > Armadura > Hueso único ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/f34f4e8a-dab5-4aae-b215-4a60b8aaea81) Alternativamente, puede presionar **Mayús+A** para abrir el mismo menú y agregar un solo hueso.

Para eliminar cosas puedes simplemente pulsar la tecla Del en tu teclado y te presentará un aviso preguntando si realmente quieres eliminar tal cosa.
***
### 🔴 AutoKey e iniciando con animaciones
Primero diríjase a la pestaña de animaciones de su proyecto. (CONSEJO: probablemente estará en el modo predeterminado, así que intente encontrarlo) ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/87b17fb4-6d73-4ebd-83e9-0e3935247b34) > ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/e80f55c4-5eaa-4d9e-ba3d-637a099b5504) Ahora ve al modo Pose y asegúrate de haber creado una nueva acción como esta: (Asegúrese de seleccionar el editor de acciones) ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/20b88013-524f-4e7b-ae11-b7676cf29239) Haz tu primer cuadro presionando "i" y guardando lo que desees. Loc = Ubicación Rot = Rotación

No importa los otros tipos de guardar un fotograma clave, por ahora todo lo que queremos deberían ser las opciones de ahorro por defecto. (Sin guardado visual o delta)

Puede utilizar la hoja de papeles para ver dónde se encuentra cada fotograma, y puede cambiar el stant de animación y los fotogramas finales en la línea de tiempo. Resumen de hoja de papeles: ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/64a1a133-90a9-4a66-97b1-57acd0a1dcf8) Línea de tiempo donde desea establecer el marco inicial y final. ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/defbf770-1edc-44d0-a0b0-839ca33e0fcd) Puede usar estos botones para reproducir su animación o moverse por los cuadros de animación. ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/eb7f0c29-c0c8-459f-9b6e-bd177c838966) También puedes usar las flechas izquierda y derecha en tu teclado para ir al siguiente cuadro.
***
#### AutoKey
AutoKey es una herramienta práctica que se utiliza para autorregistrar fotogramas clave cuando se hace una alteración a un hueso u objeto en una escena. Puedes activarlo haciendo clic en este botón rojo: ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/03954366-7866-4399-8e61-7379a0e527f9) (Es importante que la tecla automática pueda ser muy molesta a veces)
***
### 🔘 Mostrar modos para objetos
Puedes cambiar el modo de visualización para que tengas diferentes perspectivas de cada objeto. ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/bf817606-2367-47aa-932e-5d8b1ba48268)

Por ejemplo, tenemos el modo WireFrame que te permite desactivar la textura y trsnaparencia de un objeto para que sólo te quedes con un marco de red rugoso, permitiéndole ver fácilmente lo que hay en el otro lado.

También tenemos el modo de textura que mostrará la textura de los objetos.

Y modo sólido que hará que el objeto seleccionado tenga una textura gris y aburrida, a menudo usada para comprobar las proyecciones de las sombras sobre un objeto.
***
### ✒️ Pintura de peso
La pintura de peso es probablemente una de las herramientas más utilizadas a la hora de crear un aparato. Sirve como una manera de determinar el peso de influnce que cada grupo de vértices (hueso) tendrá sobre un vértice. Le permite básicamente hacer el proceso de animación más fácil.

Imagina si tienes que transformar manualmente la malla de tu objeto para cada pose y fotograma de clave que querías crear, llevaría meses hacer una única animación ya que llevaría mucho tiempo, así que los huesos donde se creó por lo que ahora solo necesitas interactuar con ellos, pero cómo se determinan las transformaciones de malla dependiendo de cada hueso, eso se calcula por pintura de peso.

No hay una forma adecuada de mostrarte cómo hacer frente a la pintura de pesos, pero básicamente, al asignar un grupo de huesos a un objeto creará un grupo de vértices que puede establecer la influencia de cada vértice. Es importante que todos los vértices tengan que ser asignados a un grupo de vértices para que sea exportable.

Aquí hay dos videos que explican cómo utilizar / qué hace la pintura de peso. (Recomiendo verlos en orden) [Video 1](https://www.youtube.com/watch?v=4fICQmBEt4Y&ab_channel=RoyalSkies) [Video 2](https://www.youtube.com/watch?v=5M7YO3SYJ_U&ab_channel=Yami3D)
***
### 🟪 Mapeo UV & Texturizado

El mapeo UV significa "mapeo de coordenadas UV" en el campo de los gráficos de computadora y el modelado 3D. Es una técnica utilizada para mapear texturas 2D sobre superficies 3D de un objeto generado por computadora. El término "UV" se refiere al sistema de coordenadas 2D usado para representar la imagen de textura 2D, donde U representa el eje horizontal y V representa el eje vertical.

En epic fight, usamos mayormente mapeo UV para arreglar problemas entre articulaciones (donde blender puede tener problemas determinando dónde usar ciertas partes de la textura), y para mapear adecuadamente la textura de cada lado plano de un cubo.

Puede cambiar la pantalla a modo de edición UV yendo a la parte superior de la pantalla y cambiando el diseño de pantalla. ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/3fcf3343-f5ae-418b-9797-9704de66d819)

Puede crear nuevas texturas haciendo clic en este botón inferior / También puede asignar texturas existentes haciendo clic en esto:


<img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/742e9658-1832-48d3-a681-005a417226ae" alt="image" style="float:left; margin-right:10px;" /> /  <img  src="https://github.com/Yesssssman/epicfightmod/assets/77132244/12a57d9a-ad48-4daf-8830-806afc9b98cf"  alt="Image"  style="float:right; margin-left:10px;" />

#### Corregir problemas entre articulaciones (Cortes de Bucle)
Si usted es un desarrollador o alguien que busca crear modelos de entidades puede que se encuentre teniendo que añadir articulaciones a sus modelos. Uno de los problemas más comunes es cuando blender no logra determinar qué textura debe utilizarse en ese espacio estrecho entre cortes de bucle.

<p align="center">  <img src="https://github.com/Yesssssman/epicfightmod/assets/77132244/933a7101-0db1-480d-8af8-f58d928ecd94" alt="Image" style="display: block; margin: 0 auto;" />  </p>
<p align="center">Este es un ejemplo de lo que puedes enfrentar al parchear armaduras, crear entidades o sumar articulaciones</p>

No se preocupe, ya que esto es fácilmente reparable al escalar dos veces las caras superiores o inferiores de ese modelo. Puedes pulsar:
* Ctrl + (numpad_plus) - selecciona el siguiente conjunto de vértices
* Ctrl + (numpad_minus) - deselecciona el último conjunto seleccionado de vértices

Probablemente esto es lo que te quedará:

![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/98b8f3fa-0fa7-4bb6-812f-39f5ea358ff3)

En modo de edición UV, puedes seleccionar los planos que tienen textura superpuesta y puedes extender sus vértices para usar la parte superior de la textura, o la parte inferior de acuerdo a su ubicación.

![2023_01_21_15_16_55_33](https://github.com/Yesssssman/epicfightmod/assets/77132244/99ed4706-9f78-4955-9667-1925a78258b2) Advertencia: Asegúrese de seleccionar la selección UV y el modo de visualización hasta el Borde.

***
### 🧲 Transformación de ajuste
El ajuste le permite mover objetos de manera precisa. Su función principal es permitirte ejecutar otros objetos más fácilmente, a trabajar como una regla cuando se quiere hacer una línea recta. Puedes activar el ajuste haciendo clic en el pequeño icono de imán cerca de tus opciones de transformación de orientación 3D. ![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/c2f16673-dcb5-4f8f-8b02-59f3c3c79860)
***
### Espejo de Eje-X
Es posible que tengas que hacer dos animaciones diferentes para una sola acción. Por ejemplo, si usted quisiera hacer una animación de "Sostener Antorcha" necesitarías reflejar tu animación en el Eje-X para tener tanto las variantes de mano principal como de mano secundaria de dicha animación.

Puedes hacer este tipo de reflejo copiando la pose actual (Ctrl + C), luego seleccionando el lado derecho (Ctrl + i) y finalmente en una acción recién creada puede pegar dicha animación pulsando "Shift" + "Ctrl" + "V"

[Referencia](https://blender.stackexchange.com/questions/75848/how-do-i-make-x-axis-mirror-available-in-pose-mode)
***
### 🔲 Transparencia
Algunos objetos que importa dentro de Blender pueden o no tener el siguiente problema:

![image](https://github.com/Yesssssman/epicfightmod/assets/77132244/02a6e79d-ce66-40f8-a017-3cb5dabab20a) Básicamente texturas negras donde debe ser transparente.

Puedes arreglarlo yendo al Modo Objeto, en materiales y habilitando la Transparencia.

[Referencia](https://docs.blender.org/manual/en/2.79/render/blender_render/materials/properties/transparency.html)
***
¡Eso por ahora! Si quieres empezar a aprender a mezclar, te sugiero que mires esta serie de listas de reproducción hecha por banas Derek. **https://www.youtube.com/playlist?list=PLpdCRuhtdVcuwfyl97L7TjeChtx0k8vcb**



 
