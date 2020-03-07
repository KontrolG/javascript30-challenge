# Javascript30 Challengue
## Cosas aprendidas
### Day 1
- Evento transitionend? para animaciones.
### Day 2
- CSS: transform-origin: para mover el origen de un elemento y poder rotarlo respecto a ese origen. 
### Day 3
- document.documentElement.style.setProperty: para modificar las propiedades personalizadas aka variables.
- Al usar const o let las varibles no son añadidas al objeto window. Para funciones, declararlas para poder acceder a ellas a traves del objeto window por su nombre en string.
### Day 4
- console.table <- :'(
- Array.prototype.sort: el ordenamiento depende de si el valor retornado por la función es negativo, positivo o igual a 0.
- const { count, countReset, group, groupCollapse, time, timeEnd, trace } = console; aceptan una etiqueta como parametro.
- Para calcular cuanto tarda una pagina en cargar: Sumar el tiempo de recepcion de cabeceras en la pestaña Network de las herramientas de desarrollador con lo que tarda el script en ejecutarse con time y timeEnd.
### Day 6
- Usar expresiones regulares para determinar si una string esta dentro de otra en lugar de includes() para que sea caseinsensitive (tambien por functional proggramming, para no editar el objeto original).
- Objeto RegExp.
- Programación funcional: Evitar alterar variables globales. Utilizar parametrización y retornar valores.
### Day 7
- Array.prototype.some: Utiliza el mismo parametro que find, una funcion. Retorna true si al ejecutar la callback sobre ese elemento esta retorna true. Como el find y findIndex, solo que retorna un booleano.
- Array.prototype.every: contrario a some, todos los elementos deben cumplir la evaluacion realizada por la funcion pasada como parametro.
### Day 8
- {inserte reflexión referente al aprendizaje aqui.}
### Day 9
- Break on: Breakpoint para cuando se realizan cambios en un elemento.
- .info y .log no muestran call trace, error y warn si.
- console.assert(condicion, texto), para evaluar expresiones.
- console.dir(domElement), muestra el prototipo del objeto. 
### Day 10
- No todo se hace con metodos de Arrays :(
### Day 11
- Repaso Video API.