# Encriptadordetexto-AluraChallengesONE
<div align= "center">
  <img src="https://img.shields.io/badge/Estado-En%20espera%20de%20aprobaci%C3%B3n-purple" alt="Estado: En espera de aprobación">
</div>

## Qué es
Este proyecto consiste en la realización de encriptador y desencriptador de texto sujeto a una serie de reglas. Esto como parte del challenge final de la Formación Principiante en Programación del programa ONE de Oracle y Alura.
### Reglas de encriptación
* La letra `a` se convierte en `ai`.
* La letra `e` se convierte en `enter`.
* La letra `i` se convierte en `imes`.
* La letra `o` se convierte en `ober`.
* La letra `u` se convierte en `ufat`.

Este proceso debe realizarse inversamente para la desencriptación.
### Restricciones
* Se permite solo el ingreso de letras minúsculas.
* No se permite el ingreso de letras con carácteres especiales.

En el caso de este proyecto solo se permitirá entonces las letras en el rango `a-z` del español y los siguientes carácteres `. , ; ¡ ! ¿ ? : ( )`.
## Apariencia
Consiste en tres áreas, la cabecera, el contenido y el pie de página.
* Cabecera: Contiene el título de la página "Encriptador y desencriptador de mensajes".
* Contenido: Este consiste en dos zonas.

    * La zona de la izquierda contiene el espacio para la inserción y verificación del texto ingresado.

    * La zona de la derecha contiene el espacio correspondiente a la visualización del texto ya procesado y su utilización.
### Computador

![Computador-oculto](https://github.com/user-attachments/assets/9c89b6f2-6e3f-4b7d-b18b-6788eef9041a)

*Imagen del diseño para computador previo a la desencriptación o encriptación.*

---

![Computador-visible](https://github.com/user-attachments/assets/b0aa8630-7d3a-4361-9fd5-be0240dc6011)

*Imagen del diseño para computador posterior a la desencriptación o encriptación.*

### Tablet

<div align="center">
  <img src="https://github.com/user-attachments/assets/b8838f8f-b08b-4aa7-a5a3-529c40b532d5" style="width: 768px;">

  *Imagen del diseño para tablet previo a la desencriptación o encriptación.*
</div>

---

<div align="center">
  <img src="https://github.com/user-attachments/assets/7b2d73ea-e297-434a-8d33-d087b9c4170a" style="width: 768px;">

  *Imagen del diseño para tablet posterior a la desencriptación o encriptación.*
</div>

### Celular

<div align="center">
  <img src="https://github.com/user-attachments/assets/ccd547d6-bb3d-4a9e-8a78-bb60f55e5a3b" style="width: 375px;">

  *Imagen del diseño para celular previo a la desencriptación o encriptación.*
</div>

---

<div align="center">
  <img src="https://github.com/user-attachments/assets/013085ec-815f-44ca-9e17-0773fe493931" style="width: 375px;">

  *Imagen del diseño para celular posterior a la desencriptación o encriptación.*
</div>

### Estado de los botones

<div align="center">
  <img src="https://github.com/user-attachments/assets/0eb6f05a-1027-4321-b422-bd98333abdc3">

  *Diseño de los botones desactivados*
</div>

---

<div align="center">
  <img src="https://github.com/user-attachments/assets/7c0d17a6-f749-42fa-985a-d5f4fad1ae37">

  *Diseño de los botones activados*
</div>

## Funcionamiento
### Contenido
#### Zona izquierda

<div align="center">
  <img src="https://github.com/user-attachments/assets/c6452787-3843-4e4c-9cda-405d8adce2a5">

  *Zona izquierda del contenido.*
</div>

Aquí se puede encontrar un área para ingresar el texto, con la frase "Ingrese el texto aquí", seguida de una señal de advertencia acerca del tipo de contenido permitido.

Abajo finalmente se encuentran dos botones, cuyo próposito es desencadenar la revisión del correcto estado del texto. Si las condiciones se cumplen, se procede a realizar el proceso de encriptación o desencriptación, respectivamente y se vacía el campo de texto. En caso de no cumplirse, la señal de advertencia se enmarca, y se vacía el campo de texto y se hace focus en él.

---

#### Zona derecha

<div align="center">
  <img src="https://github.com/user-attachments/assets/5e6a3204-f73f-4588-88e9-f77319248f88">
</div>

*Zona derecha del contenido previa a la encriptación o desencriptación.*

---

<div align="center">
  <img src="https://github.com/user-attachments/assets/3c38c44f-b3c7-441c-81e9-8c2329085e18">
  
  *Zona derecha del contenido posterior a la encriptación o desencriptación.*
</div>

Antes de presionar cualquiera de los botones, esta zona presenta un logo y texto referente a que no se ha encontrado ningún mensaje. Posterior a esto, esta zona es reemplazada por un campo donde aparece el texto ya convertido, ya sea cifrado o descrifrado, y un botón de copiar de bajo de este, cuyo proposito es, como su nombre lo indica, copiar dicho texto en el portapapeles mediante el uso de `Clipboard API`.

## Lenguajes

### HTML

<div align="center">
  <img src="https://github.com/user-attachments/assets/cf11ab51-daca-4581-b248-700629bb932a" style="height: 300px">

  *Logo de HTML*
</div>

### CSS

<div align="center">
  <img src="https://github.com/user-attachments/assets/1fa42f49-a9d4-4757-9560-4a9cbe79fe84" style="height: 300px">

  *Logo de CSS*
</div>

### JavaScript

<div align="center">
  <img src="https://github.com/user-attachments/assets/2b73b858-3aa9-4d70-be09-71bf4feb31ea"  style="height: 300px">

  *Logo de JavaScript*
</div>

## Desarrollado por

<div align="center">
  
  <img src="https://github.com/user-attachments/assets/b678a2e8-5a8c-428b-819f-34bd88741a72" style="width: 300px; height: 300px;">
  
  *Juan Rodríguez*
</div>

---
