function calcularPromedioPares() {
    // Genera 10 números aleatorios y los almacena en un arreglo
    const numeros = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    document.getElementById("numeros").value = numeros.join(", ");
    
    // Filtra los números pares y calcula el promedio
    const pares = numeros.filter(num => num % 2 === 0);
    const promedioPares = pares.length > 0 ? pares.reduce((acc, num) => acc + num, 0) / pares.length : 0;
    
    // Muestra el promedio de los números pares en el textarea
    document.getElementById("promedio").value = promedioPares.toFixed(2);
  }
  
  function contarPalabras() {
    const frase = document.getElementById("frase").value;
    
    // Contamos las palabras en la frase
    const palabras = frase.split(/\s+/).filter(Boolean);
    const cantidadPalabras = palabras.length;
    
    // Verificamos si hay vocales en cada palabra
    let palabrasConVocales = [];
    for (let i = 0; i < palabras.length; i++) {
      let palabra = palabras[i];
      let contieneVocal = false;
      
      // Recorremos cada letra de la palabra
      for (let j = 0; j < palabra.length; j++) {
        if ('aeiouáéíóú'.includes(palabra[j].toLowerCase())) {
          contieneVocal = true;
          break;
        }
      }
      
      // Si contiene vocal, la agregamos al arreglo
      if (contieneVocal) {
        palabrasConVocales.push(palabra);
      }
    }
    
    // Mostramos el resultado en el textarea
    document.getElementById("resultado").value = `${cantidadPalabras} palabras tiene la frase.`;
  }
  
  function divisiblesPor3Y7() {
    let sumaPares = 0;
    let sumaImpares = 0;
    let resultado = "";
  
    // Mostrar números divisibles por 3
    resultado += "Números divisibles por 3: ";
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0) {
        resultado += i + " ";
  
        // Verificamos si el número es par o impar y sumamos
        if (i % 2 === 0) {
          sumaPares += i;
        } else {
          sumaImpares += i;
        }
      }
    }
  
    // Añadimos salto de línea
    resultado += "\n\n";
  
    // Mostrar números divisibles por 7
    resultado += "Números divisibles por 7: ";
    for (let i = 1; i <= 50; i++) {
      if (i % 7 === 0) {
        resultado += i + " ";
  
        // Verificamos si el número es par o impar y sumamos
        if (i % 2 === 0) {
          sumaPares += i;
        } else {
          sumaImpares += i;
        }
      }
    }
  
    // Mostrar las sumas de pares e impares
    resultado += `\n\nSuma de números pares: ${sumaPares}`;
    resultado += `\nSuma de números impares: ${sumaImpares}`;
  
    // Mostramos el resultado en el textarea
    document.getElementById("resultado").value = resultado;
  }
  
  function contarDigitos() {
    let frase = document.getElementById("frase").value;
    let contador = 0;
  
    // Recorrer cada carácter de la frase
    for (let i = 0; i < frase.length; i++) {
      // Verificar si el carácter es un dígito
      if (frase[i] >= '0' && frase[i] <= '9') {
        contador++;
      }
    }
  
    // Mostrar el resultado en el textarea
    document.getElementById("resultado").value = `${contador} dígitos tiene la frase`;
  }
  
  function calcularDivisores() {
    let numero = parseInt(document.getElementById("numero").value);
    let divisores = [];
  
    // Recorrer todos los números menores que el número dado
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) { // Verificar si i es divisor de numero
        divisores.push(i);
      }
    }
  
    // Mostrar los divisores en el textarea
    if (divisores.length > 0) {
      document.getElementById("resultado").value = `Los divisores de ${numero} son: ${divisores.join(', ')}`;
    } else {
      document.getElementById("resultado").value = `El número ${numero} no tiene divisores (además de sí mismo).`;
    }
  }
  
  function calcularTotal() {
    // Obtener valores del formulario
    let producto = document.getElementById("producto").value.toLowerCase();
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let precio = parseFloat(document.getElementById("precio").value);
    let total = cantidad * precio;
  
    // Aplicar descuentos según el tipo de producto
    if (producto === "televisor" && cantidad >= 2) {
      total *= 0.90; // 10% de descuento
    } else if (producto === "refrigeradora" && cantidad > 3) {
      total *= 0.85; // 15% de descuento
    }
  
    // Aplicar descuento adicional si el total supera los $2000
    if (total > 2000) {
      total *= 0.95; // 5% de descuento adicional
    }
  
    // Mostrar el total calculado
    document.getElementById("total").value = `Total a pagar: $${total.toFixed(2)}`;
  }
  
  function verificarPerfecto() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resp");
  
    if (isNaN(numero) || numero <= 0) {
        resultado.value = "Por favor, ingresa un número positivo.";
        return;
    }
  
    let sumaDivisores = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
  
    if (sumaDivisores === numero) {
        resultado.value = `El número ${numero} es perfecto.`;
    } else {
        resultado.value = `El número ${numero} no es perfecto.`;
    }
  }
  
  function calcularFactura() {
    const montoBase = parseFloat(document.getElementById("montoBase").value);
    const dia = document.getElementById("dia").value;
    const personas = parseInt(document.getElementById("personas").value);
    const metodoPago = document.getElementById("metodoPago").value;
    const resultado = document.getElementById("resp");
  
    if (isNaN(montoBase) || isNaN(personas) || montoBase <= 0 || personas <= 0) {
        resultado.value = "Por favor, ingresa valores válidos.";
        return;
    }
  
    let total = montoBase;
  
    // Aplicar descuentos o recargos por día de la semana
    if ((dia === "Lunes" || dia === "Miércoles") && personas > 4) {
        total *= 0.85; // Descuento del 15%
    } else if (dia === "Sábado" || dia === "Domingo") {
        total *= 1.10; // Recargo del 10%
    }
  
    // Aplicar recargo por pago con tarjeta de crédito
    if (metodoPago === "tarjeta") {
        total *= 1.05; // Comisión del 5%
    }
  
    resultado.value = `Total a pagar: $${total.toFixed(2)}`;
  }
  
  function sumarDigitos() {
    const numeroInput = document.getElementById("numero").value;
    const respuesta = document.getElementById("resp");
  
    // Crear un arreglo vacío para almacenar los dígitos
    const digitos = [];
  
    // Convertir cada carácter de la cadena en un número y agregarlo al arreglo
    for (let i = 0; i < numeroInput.length; i++) {
      const digito = parseInt(numeroInput[i], 10);
      if (!isNaN(digito)) {
        digitos.push(digito); // Agregar el dígito al arreglo
      } else {
        respuesta.value = "Por favor, ingresa un número válido.";
        return;
      }
    }
  
    // Calcular la suma de los dígitos en el arreglo
    const suma = digitos.reduce((total, num) => total + num, 0);
    respuesta.value = `La suma de los dígitos es: ${suma}`;
  }