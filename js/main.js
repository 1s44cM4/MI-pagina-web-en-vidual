// Definición de una función llamada 'tablas' que calcula y muestra una tabla de multiplicar
function tablas() {

    // Establecer un punto de depuración para verificar el funcionamiento paso a paso en el navegador
    debugger
  
    // Declaración de variables:
    // 'resp' para el elemento donde se mostrará el resultado
    // 'tab' para el número de la tabla de multiplicar
    // 'ini' y 'fin' para el rango inicial y final de la tabla
    // 'r' para almacenar el resultado de cada multiplicación
    // 'msg' para acumular el mensaje final que se mostrará en la pantalla
    let resp = "", tab = "", ini = "", fin = "", r = 0, msg = ""
  
    // Cambia el contenido de un elemento con id "h" a "Tabla de Sumar"
    document.getElementById("h").innerHTML = "Tabla de Sumar"
  
    // Captura el valor de la tabla de multiplicar del elemento con id "tabla"
    tab = document.getElementById("tabla").value
  
    // Captura el valor inicial del rango desde el elemento con id "vi"
    ini = document.getElementById("vi").value
  
    // Captura el valor final del rango desde el elemento con id "vf"
    fin = document.getElementById("vf").value
  
    // Asigna el elemento con id "resp" a la variable 'resp' para mostrar el resultado después
    resp = document.getElementById("resp")
  
    // Convierte los valores capturados 'tab', 'ini', y 'fin' de cadena de texto a enteros
    tab = parseInt(tab)
    ini = parseInt(ini)
    fin = parseInt(fin)
  
    // Bucle para calcular la tabla de multiplicar desde el valor 'ini' hasta el valor 'fin'
    while (ini <= fin) {
      // Calcula el producto de 'ini' por 'tab' y lo asigna a 'r'
      r = ini * tab
  
      // Acumula el resultado en 'msg' usando una plantilla de cadena para mostrar cada operación
      msg = msg + `${ini} * ${tab} = ${r}` + "\n"
  
      // Incrementa 'ini' en 1 para pasar al siguiente número en el rango
      ini = ini + 1
    }
  
    // Asigna el mensaje acumulado 'msg' al contenido de 'resp', mostrando la tabla en pantalla
    resp.innerHTML = msg
  }
  
  
  // Función llamada 'esPar' que determina si un número 'x' es par o impar
  function esPar(x) {
    // Inicializa una variable 'r' para almacenar el resultado como una cadena vacía
    let r = ""
  
    // Verifica si el residuo de 'x' dividido entre 2 es igual a 0
    if (x % 2 == 0) {
      // Si el residuo es 0, el número es par, por lo que asigna "Es Par" a 'r'
      r = " Es Par"
    } else {
      // Si el residuo no es 0, el número es impar, por lo que asigna "Es Impar" a 'r'
      r = " Es Impar"
    }
  
    // Devuelve el resultado almacenado en 'r'
    return r
  }
  
  // Segunda función 'parImpar' que también determina si 'x' es par o impar y muestra el resultado en la consola
  function parImpar(x) {
    // Declara una variable 'r' que se usará para almacenar el resultado
    let r;
  
    // Verifica si el residuo de 'x' dividido entre 2 es igual a 0
    if (x % 2 === 0) {
      // Si el residuo es 0, el número es par
      console.log(x + " es Par");
    } else {
      // Si el residuo no es 0, el número es impar
      console.log(x + " es Impar");
    }
  }
  
  // Función para encontrar y mostrar todos los divisores de un número dado
  function divisores() {
    debugger // Punto de interrupción para depuración
    let resp = "", num = "", r = 0, divisor = 1, msg = "", acu = 0
  
    // Obtiene el valor ingresado en el campo "numero" en el HTML y convierte a número entero
    num = document.getElementById("numero").value
    resp = document.getElementById("resp")
    num = parseInt(num)
  
    // Bucle para encontrar divisores de num excluyendo el propio número
    while (divisor < num) {
      r = num % divisor // Calcula el residuo de la división de num y divisor
      if (r == 0) {     // Si el residuo es 0, entonces divisor es un divisor de num
        msg = msg + `${divisor},`  // Agrega el divisor a la cadena de mensaje
        acu = acu + divisor        // Acumula el divisor en la variable acu
      }
      divisor = divisor + 1        // Incrementa el divisor
    }
  
    // Muestra los divisores y su suma en el campo "resp"
    resp.innerHTML = msg + "\n" + acu
  }
  
  // Función para verificar si un número es perfecto
  function perfecto() {
    debugger
    let resp = "", num = "", r = 0, divisor = 1, msg = "", acu = 0
  
    // Obtiene el valor ingresado en "numero" y lo convierte a entero
    num = document.getElementById("numero").value
    resp = document.getElementById("resp")
    num = parseInt(num)
  
    // Calcula la suma de los divisores de num excluyendo el propio número
    while (divisor < num) {
      r = num % divisor
      if (r == 0) { // Si divisor es un divisor, agrégalo a la suma total (acu)
        acu = acu + divisor
      }
      divisor = divisor + 1
    }
  
    // Verifica si la suma de los divisores es igual al número original
    if (acu == num) {
      resp.innerHTML = `${num} Es perfecto`  // Muestra que es un número perfecto
    } else {
      resp.innerHTML = `${num} No Es perfecto` // Muestra que no es perfecto
    }
  }
  
  // Función para verificar si un número es primo
  function primos() {
    debugger
    let resp = "", num = "", r = 0, divisor = 2, primo = 1
  
    // Obtiene el valor en "numero" y lo convierte a entero
    num = document.getElementById("numero").value
    resp = document.getElementById("resp")
    num = parseInt(num)
  
    // Bucle para verificar si num es divisible por algún número menor a sí mismo
    while (divisor < num && primo == 1) {
      r = num % divisor
      if (r == 0) {     // Si el residuo es 0, entonces no es primo
        primo = 0
      } else {
        divisor = divisor + 1
      }
    }
  
    // Muestra si el número es primo o no
    if (primo == 1) {
      resp.innerHTML = `${num} Es Primo`
    } else {
      resp.innerHTML = `${num} No Es Primo`
    }
  }
  
  // Función para invertir un número ingresado
  function numeroInvertido() {
    debugger
    let resp = "", num = "", dig = 0, msg = ""
  
    // Obtiene el número ingresado y lo convierte a entero
    num = document.getElementById("numero").value
    resp = document.getElementById("resp")
    num = parseInt(num)
  
    // Bucle para invertir el número al extraer cada dígito
    while (num > 0) {
      dig = num % 10          // Obtiene el último dígito de num
      msg = msg + `${dig}`     // Agrega el dígito al mensaje
      num = Math.trunc(num / 10) // Elimina el último dígito
    }
  
    // Muestra el número invertido en el campo "resp"
    resp.innerHTML = msg
  }
  
  // Función para invertir una cadena de texto que representa un número
  function numeroInvertidoCad() {
    debugger
    let resp = "", num = "", msg = ""
  
    // Obtiene el valor en "numero" y asigna la longitud de la cadena menos 1
    num = document.getElementById("numero").value
    resp = document.getElementById("resp")
    lon = num.length - 1
  
    // Bucle para invertir la cadena agregando cada dígito desde el final al inicio
    while (lon >= 0) {
      msg = msg + num[lon]
      lon = lon - 1
    }
  
    // Muestra el número invertido en el campo "resp"
    resp.innerHTML = msg
  }
  
  // Función para invertir un número utilizando un arreglo para almacenar cada dígito
  function numeroInvertidoArr() {
    debugger
    let resp = "", num = "", inv = [], msg = ""
  
    // Obtiene el valor en "numero"
    num = document.getElementById("numero").value
    resp = document.getElementById("resp")
    lon = num.length - 1
  
    // Bucle para invertir la cadena y almacenar cada dígito en el arreglo inv
    while (lon >= 0) {
      inv.push(num[lon]) // Agrega el dígito al final del arreglo inv
      lon = lon - 1
    }
  
    // Bucle para construir el mensaje con los dígitos en el arreglo inv
    for (let i = 0; i < inv.length; i++) {
      msg = msg + inv[i]
    }
  
    // Muestra el número invertido en el campo "resp"
    resp.innerHTML = msg
  }
  
  
  // Definición de una función llamada arreglo que trabaja con arreglos de números
  function arreglo() {
  
    // Declaración de una variable 'num' con valor inicial de 20
    let num = 20
  
    // Actualización del valor de 'num' a 30
    num = 30
  
    // Declaración de un arreglo vacío llamado 'numeros'
    let numeros = []
  
    // Declaración de un arreglo llamado 'nombres' con tres elementos
    let nombres = ["Ani", "Jose", "Dan"]
    // índice:            0       1       2    y longitud = 3
  
    // Agregar valores en posiciones específicas del arreglo 'numeros'
    numeros[0] = 20
    numeros[1] = 35
    numeros[2] = 40
  
    // Agregar el valor 50 al final del arreglo 'numeros' usando su longitud
    numeros[numeros.length] = 50
  
    // Usar el método push para agregar el valor 65 al final del arreglo 'numeros'
    numeros.push(65)
  
    // Almacenar la longitud actual del arreglo 'numeros' en la variable 'lon'
    let lon = numeros.length
  
    // Definición de variables 'ac' y 'cd' para acumular la suma y contar los pares
    let ac = 0, cd = 0
  
    // Bucle para recorrer el arreglo desde el último elemento hasta el primero
    for (let i = lon - 1; i >= 0; i = i - 1) {
      // Verificar si el elemento en la posición 'i' es par
      if (numeros[i] % 2 == 0) {
        // Imprimir el número par en la consola
        console.log(numeros[i])
  
        // Acumular el valor de números[i] en 'ac'
        ac = ac + numeros[i]
  
        // Incrementar el contador 'cd' en 1 por cada número par encontrado
        cd = cd + 1
      }
    }
  }
  // Llamada a la función arreglo
  //arreglo()
  // Definición de una función llamada 'ingresarCadena' para trabajar con cadenas de texto
  function ingresarCadena() {
  
    // Declaración de variables para la posición, la frase y el contador de vocales
    let pos, frase = "", cv = 0
  
    // Asignación de una cadena de texto a la variable 'frase'
    frase = "Hola que"
    // índice:     01234567   y longitud = 8
  
    // Imprimir la frase en la consola
    console.log(frase)
  
    // Bucle para recorrer cada carácter de la frase
    for (pos = 0; pos < frase.length; pos++) {
      // Condición para verificar si el carácter en la posición 'pos' es 'a' o 'o'
      if (frase[pos] == "a" || frase[pos] == "o") {
        // Imprimir el carácter en la consola
        console.log(frase[pos])
  
        // Incrementar el contador 'cv' en 1 por cada vocal encontrada
        cv = cv + 1
      }
    }
  
    // Asignar la longitud del arreglo 'numeros' a 'lon'
    lon = numeros.length
  
    // Bucle para recorrer el arreglo 'numeros' en orden inverso
    for (let i = lon - 1; i >= 0; i = i - 1) {
      // Imprimir cada número en el arreglo 'numeros'
      console.log(numeros[i])
    }
  }
  
  // Llamada a la función ingresarCadena
  ingresarCadena()