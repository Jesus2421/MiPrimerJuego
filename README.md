# PruebaEmpresa


Detalles de la prueba:
Puede ser realizada en Blueprint. Si la prueba es realizada en C++ se valorará muy positivamente. Puedes realizar este test con el “Third Person Template” por defecto de Unreal Engine.
La versión de UE para realizar la prueba será la 4.25. Si se realiza en una versión que no sea esta, la prueba quedará automáticamente descalificada.

La prueba consiste en desarrollar algunas mecánicas que te puedes encontrar en el proyecto de Fragments of Child. Se debe tener en mente que todo lo que se desarrolla deberá ser fácilmente extensible y modificable por un diseñador.

Disparo [C++]
Crear un Actor que herede de ACharacter (puede extenderse el dado por el "Thid Person Template") que, dado un input, genere y disparar un proyectil que se destruirá al impactar con cualquier cosa. El disparo será continuo mientras se mantenga el input y tendrá un cadencia de disparo que debe poder ser modificable. La bala deberá ir en línea recta desde un punto de disparo que puede ser modificable.
Las balas deben hacer daño al impactar y daño tiene que poder ser modificable.

Enemigo [C++]
Crear un actor enemigo y crear un componente reutilizable que gestione la vida del actor al que se le añada.
El actor enemigo puede ser una caja o una cápsula y deberá destruirse cuando su vida llegue 0.

UI [C++/BP]
Crear un Widget que sirva para visualizar la vida del enemigo. Deber ser un widget se visualize en el espacio de mundo, pero que pueda ser reutilizable en un HUD.

Apuntado [C++]
Dado un segundo input, el personaje debe rotarse para apuntar al enemigo más cercano. Deberá mantener la rotación siempre que el input de disparo sea pulsado. Si el enemigo muere, el personaje deberá rotar hacia el siguiente enemigo más cercano. Deberá mantenerlo como objetivo si el personaje se mueve aunque de esta forma dicho objetivo deje de ser el más cercano. El cambio solo se produce en caso de muerte del enemigo o por orden del imput.

Spawner [C++]
Cada tres segundos se debe de spawnear un nuevo enemigo en una localización random. Como máximo debe de haber cinco enemigos simultáneamente en el level.
