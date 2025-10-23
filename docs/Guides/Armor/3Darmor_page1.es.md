---
search:
  exclude: true
---
# Problemas de renderizado de Texturas & Armaduras 3D

La mayoría de las armaduras personalizadas están rotas en Epic Fight. Esto es porque Epic Fight usa su propio modelo, no solo para entidades sino también para armaduras. Por suerte, Epic Fight tiene un algoritmo de generación de modelos basado en las armaduras personalizadas pero a veces los cambia de mala manera. Esta es la guía para creadores de paquetes de mods para hacer que la armadura personalizada sea visualmente impecable sin tener que modificar nuestro código fuente. Estos son los pasos a los que tú puedes seguir para lograr una armadura parcheada:

***
Herramientas requeridas:<br>

* **[BlockBench](https://www.blockbench.net/) (Opcional)**<br>
* **[Blender 2.79](https://download.blender.org/release/Blender2.79/)**<br>
- **[Blender Json Exporter](https://github.com/Yesssssman/blender-json-exporter)**<br>
- **[Blender Armor Files](https://drive.google.com/file/d/15xYnpmkmlJaEnw3Y7bykpqmjx1Rr9Koh/view?usp=share_link)**<br>

***
## 💡 Rehacer armaduras en Blockbench (Opcional)
No es necesario que rehagas la armadura en Blockbench siempre que tengas los archivos de armadura oficiales para el mod que deseas parchear.

Después de descargar e instalar los tres softwares, lo primero que querrás hacer es elegir un mod que tenga un conjunto de armadura que quieras parchear y, a partir de ahí, intentar recrear el modelo con la mayor precisión posible. Una forma eficiente de hacerlo es mirar la armadura dentro del juego y obtener las texturas del código fuente del mod deseado.

 **EJEMPLO:**

<br>![archers_armor](https://user-images.githubusercontent.com/77132244/215155978-874a293e-71ea-4690-adf3-059e45a37ed8.png) <br>Arriba está el archivo de textura para archers_armor de Dungeon Gear Mod. Veamos cómo podemos recrear esta armadura solo con Blockbench<br>
1. Cree un Modelo Genérico para que podamos exportarlo a blender más adelante. Preferiblemente, nombra el modelo con algo que puedas reconocer, por ejemplo, *Archer's Armor*.<br>  
   ![showcase55](https://user-images.githubusercontent.com/77132244/215159597-aac5fdb1-45f1-4084-8f18-50baae9df6f0.jpg)<br>
2. Asegúrese de tener instalado CEM Template Loader para poder importar los modelos Vanilla. (Puede descargar Plugins en la opción File/Plugins option).<br>
3. A partir de ahí, querrás importar todos los modelos de armadura vanilla. (Puede importar los modelos de armadura vanilla en Tools/Load CEM Template/Unsupported Entities).<br>  
   ![showcase66](https://user-images.githubusercontent.com/77132244/215161290-8ecb58ec-55e3-4297-8f46-48551a0769d7.jpg)<br>
4. Importe las texturas y cambie el tamaño de la textura en el proyecto al mismo que la textura. (Consejo: puede aplicar las texturas en el modelo arrastrándolo y soltándolo en cada grupo de piezas de armadura).<br>  
   ![showcase77](https://user-images.githubusercontent.com/77132244/215230534-6eb84ed6-1afb-4a44-bdf2-3ef98bfccdc6.jpg)<br>
5. Ahora, corrija las texturas hasta que estén en el orden correcto y se vean como el modelo original.<br>
6. Después de organizar las texturas, presione "ctrl + A" y asegúrese de que se estén utilizando todas las texturas. Si pierde alguna textura, eso significa que su modelo necesita más ajustes y, por lo tanto, deberá agregar piezas adicionales a la armadura. En nuestro caso, Archer's Armor tiene una parte adicional en su sombrero, por lo que tendremos que agregar un cubo e intentar adivinar su rotación, escala y posición en función de la armadura del juego agregada por Dungeon's Gear y el tamaño de la textura.<br>  
   <br>  <a href="url"><img src="https://user-images.githubusercontent.com/77132244/215236925-8fcf459a-e972-4f2d-b43d-65667ce39e1e.jpg" align="center" ></a><br>
7. Como puede ver, después de algunos cambios, logramos que nuestro modelo se pareciera al original, y ahora estamos listos para pasar a Blender y parchear cada parte individual.<br>  
   ![image](https://user-images.githubusercontent.com/77132244/215238157-3ddd8369-6f04-48f5-8d95-0623d833b3be.png)<br>
8. Ahora, cuando exporte su archivo de armadura, asegúrese de exportarlo como .obj, porque eso es lo que usaremos dentro de Blender.<br>

***
## 💡 Pintura de peso y corrección de vértices
Vaya a [[Guía de Blender|Conceptos básicos y consejos y trucos de Blender]] para obtener consejos, trucos y soluciones sobre cómo usar Blender

1. Primero, abra blender, vaya a file/import/Wavefront (.obj) e importe el archivo de armadura que acaba de crear en blockbench.
2. Después de esto, seleccione una parte de la armadura para parchear, en nuestro caso, primero parchearemos la parte de la capa de la cabeza. Primero parchearemos la capa de la cabeza. Así que seleccionaremos cada cubo y parte que compone el casco de la Archer's Armor. Para nosotros, "head" y "headback.001" son las partes que componen el casco, así que seleccionaremos ambas y presionaremos "ctrl + j" para unir todas las partes en un solo modelo _ (CONSEJO: Para unir todas las partes, querrá estar en modo objeto)_.  
   **Seleccionar**  
   ![image](https://user-images.githubusercontent.com/77132244/215290753-d88f7ed2-a32b-43bc-9e33-a35c273d04b9.png)  
   **Unir** _(Siéntete libre de cambiar el nombre del nuevo modelo unido a la parte de la armadura a la que corresponde, en nuestro caso más tarde lo renombré como "Casco")_.  
   ![image](https://user-images.githubusercontent.com/77132244/215290768-f91985a4-31a5-4606-bd25-91b150ba0119.png)  
   _(En estas capturas de pantalla, todas las demás partes de la armadura están ocultas)_
3. En el modo de objeto, corrija la rotación de importación y la posición haciendo clic en _"alt + r"_ & _"alt+g"_.
4. En el modo de edición, gire el modelo y corrija su posición a la ubicación original antes de restablecer la rot/pos en el modo objeto.
5. Ahora, después de corregir la rotación de importación, vincularemos el modelo con la armadura yendo al modo de objeto, seleccionando el modelo de casco y también la armadura, yendo a Objeto/Padre/Deformación de armadura/Con grupos vacíos/Con grupos vacíos. Ahora que ha emparejado con éxito el modelo con la armadura, pasemos a la pintura de peso. _(CONSEJO: Puede seleccionar dos cosas presionando shift mientras hace clic con el botón derecho en ellas. Asegúrese de que ambos estén seleccionados en modo objeto y no en modo pose o edición)_ ![image](https://user-images.githubusercontent.com/77132244/218175943-dcde10ab-9f45-4fb3-a1ec-a2ec7f851483.png) ![image](https://user-images.githubusercontent.com/77132244/218176163-4972a8bf-a70d-4570-aafe-a0b9a0bbcb85.png)
6. Al seleccionar el modelo de casco y cambiar del modo de objeto a pintura de peso, finalmente aplicaremos las deformaciones del grupo de vértices para que el casco siga a la cabeza mientras nuestro jugador reproduce cualquier animación. ![image](https://user-images.githubusercontent.com/77132244/218176695-4cfafe68-7010-4450-a5f8-93e3dff1f3dd.png)
7. Para aplicar la pintura de peso, asegúrese de que puede ver los vértices y tiene habilitado el modo de estructura alámbrica como en la siguiente imagen: ![Showcase89](https://user-images.githubusercontent.com/77132244/218177435-f9d01478-fbe0-45f9-b754-adf5d2efa745.jpg)
8. Ahora puede elegir entre una gama de pinceles para aplicar la pintura de peso, pero los que usamos principalmente son restar y sumar ![image](https://user-images.githubusercontent.com/77132244/218177593-95794246-6d9a-4caf-afa2-636b784b8d3a.png)
9. Seleccione el grupo de vértices deseado a la derecha, con el que trabajaremos es el grupo de la cabeza, ya que estamos parcheando un casco. ![Showcase99](https://user-images.githubusercontent.com/77132244/218178265-69388152-b465-45e5-8ccd-cfe3e430dfb7.jpg)
10. Ahora simplemente continúa pintando todo el modelo para que siga toda la cabeza. Al final podrás obtener algo como esto: ![image](https://user-images.githubusercontent.com/77132244/218178527-210b4b77-5f16-4cf7-9310-6c2b3e2ce83a.png)
11. Puede probar para ver si ha sincronizado y pintado con peso con éxito el casco en la cabeza yendo a su armadura en modo pose y girando el hueso de la cabeza. Si su modelo sigue el hueso de la cabeza, entonces es correcto, si no, retroceda unos pasos y vuelva a verificar para ver si se ha perdido algo. ![2023-02-10-16-20-11](https://user-images.githubusercontent.com/77132244/218179173-df15dcba-97fa-4081-ad1d-cf1ffbcd92e8.gif)
***
## 💡 Exportando tus modelos parcheados
Ahora que ha parcheado sus modelos, querrá exportar su trabajo y aplicar los cambios en el juego. Pero, ¿cómo puedes hacer eso? Bueno, es realmente simple.

1. Asegúrese de no tener piezas de armadura o modelos no deseados en su proyecto y solo la pieza de armadura deseada para exportar como tal. _(CONSEJO: no puedes exportar dos partes de armadura a la vez, así que exporta una a la vez y elimina todas las demás)._  
   ![image](https://user-images.githubusercontent.com/77132244/218179518-18c8d979-68af-44ff-989a-aa55ebb6c239.png)
2. Después de limpiar los modelos no deseados o las piezas de armadura que no se exportarán, diríjase a Archivo/Exportar/Modelo animado de Minecraft (.json)  
   ![image](https://user-images.githubusercontent.com/77132244/218179838-bbc7d557-8525-4ab8-beaf-41211bf334fd.png)
3. Asegúrate de que solo hayas seleccionado Exportar malla, ya que solo estamos exportando una armadura y no una animación o una armadura personalizada.  
   ![image](https://user-images.githubusercontent.com/77132244/218179992-0f54bb48-99b6-45c2-8166-107668b200e7.png)
4. Verifique el nombre de exportación para ver si coincide con el nombre de registro de armadura personalizada en el juego.  
   ![image](https://user-images.githubusercontent.com/77132244/218180136-b229edd0-3941-4a68-b82b-dfc0fcf80bca.png)
5. Haga clic en Exportar a Json Minecraft una vez que haya terminado.  
   ![image](https://user-images.githubusercontent.com/77132244/218180246-7c04c4ad-ad96-4361-b43a-3ff434de419d.png)
6. Ahora ve a tu juego, selecciona paquetes de recursos y, dentro de la carpeta de paquetes de recursos, crea una nueva carpeta. Dentro de él, puedes crear tu pack.mcmeta así:
### Creando el archivo pack.mcmeta

Primero, deberá crear un pack.mcmeta creando un archivo txt normal y renombrándolo a pack.mcmeta (asegúrese de que la extensión de nombre de archivo esté activada).

Después de eso, edítelo y agregue estas líneas de código para que su paquete de datos funcione.
```JSON
{
    "pack":{
        "pack_format":6,
        "description":"Una breve descripción de tu paquete"
        }
}
```

### valores de formato de paquete

| Versión       | Valor |
| ------------- | ----- |
| 1.16.2–1.16.5 | 6     |
| 1.17.x        | 7     |
| 1.18.2        | 9     |

### Hacer la ruta de la carpeta

Deberá crear una serie de carpetas con los siguientes nombres. Cada carpeta o archivo debe estar dentro del último.

`assets -> "modid" -> animmodels -> armor -> "registryname".json` _(Suelte su archivo exportado de armadura aquí)_


🎉 **Felicitaciones, has parcheado tu armadura con éxito.** 🎉


**_Algunas soluciones más sencillas para parchear armaduras aquí: [Otras soluciones para fallos de armaduras 3D](3Darmor_page2.es.md)_**
