# CLI de Gestión de Productos con FakeStore API

Una herramienta de línea de comandos (CLI) creada con Node.js para realizar operaciones CRUD (Crear, Leer, Eliminar) interactuando con la [FakeStore API](https://fakestoreapi.com/).

Este proyecto fue desarrollado como parte de la pre-entrega para el curso de Backend con Node.js, enfocado en buenas prácticas de desarrollo, incluyendo validación de entradas y documentación de código.

## Tabla de Contenidos

1.  [Características Principales](#características-principales)
2.  [Requisitos Previos](#requisitos-previos)
3.  [Instalación](#instalación)
4.  [Uso Detallado](#uso-detallado)
    *   [Consultar Todos los Productos](#1-consultar-todos-los-productos)
    *   [Consultar un Producto Específico](#2-consultar-un-producto-específico)
    *   [Crear un Producto Nuevo](#3-crear-un-producto-nuevo)
    *   [Eliminar un Producto](#4-eliminar-un-producto)
5.  [Notas Importantes sobre los Argumentos](#notas-importantes-sobre-los-argumentos)
6.  [Manejo de Errores y Validaciones](#manejo-de-errores-y-validaciones)
7.  [Documentación del Código](#documentación-del-código)
8.  [Autor](#autor)
9.  [Licencia](#licencia)

## Características Principales

*   **Listar productos**: Obtiene la lista completa de productos.
*   **Consultar producto por ID**: Muestra los detalles de un producto específico.
*   **Crear un nuevo producto**: Agrega un nuevo producto con título, precio y categoría.
*   **Eliminar un producto**: Elimina un producto existente mediante su ID.
*   **Código Robusto**: Incluye validaciones de entrada para prevenir errores.
*   **Documentación Profesional**: El código fuente está documentado utilizando el estándar JSDoc.

## Requisitos Previos

*   [Node.js](https://nodejs.org/) (versión 16.x o superior recomendada).

## Instalación

1.  Clona este repositorio en tu máquina local.
2.  Navega al directorio del proyecto.
3.  No se requieren dependencias externas.

## Uso Detallado

Todas las operaciones se ejecutan a través del script `start` de npm.

### 1. Consultar Todos los Productos

```bash
npm run start GET products
```

### 2. Consultar un Producto Específico

```bash
npm run start GET products/15
```

### 3. Crear un Producto Nuevo

```bash
npm run start POST products "Laptop Gamer Pro" 1599.99 "electronics"
```

### 4. Eliminar un Producto

```bash
npm run start DELETE products/7
```

## Notas Importantes sobre los Argumentos

Es crucial escribir los comandos correctamente en la terminal para que el programa funcione como se espera.

*   **Uso de Comillas**: Cualquier argumento que contenga espacios, como el título de un producto, **debe estar encerrado entre comillas dobles (`"..."`)**.

*   **Comillas sin Cerrar**: Si accidentalmente olvidas cerrar una comilla, la terminal se quedará esperando que termines de escribir el comando. Esto se suele indicar con un símbolo como `>>` (en PowerShell) o `>` (en otros sistemas).
    *   **Ejemplo de error:** `npm run start POST products "Producto sin cerrar`
    *   **Solución:** Si la terminal se queda "colgada" con `>>`, significa que no has terminado el comando. Presiona `Ctrl+C` para cancelar la operación y vuelve a escribir el comando correctamente.

## Manejo de Errores y Validaciones

El script está diseñado para ser robusto y guiar al usuario en caso de un uso incorrecto:
*   **Comandos incompletos**: Si no se proporcionan el método o el recurso, el programa mostrará un mensaje de error.
*   **ID no numérico**: Si se proporciona un ID que no es un número (ej. `products/abc`), se notificará el error.
*   **Argumentos faltantes para POST**: Al crear un producto, se valida que se incluyan el título, el precio y la categoría.
*   **Precio no válido**: El precio al crear un producto debe ser un número.

## Documentación del Código

El código fuente en `index.js` ha sido documentado siguiendo el estándar **JSDoc**. Esto facilita la comprensión de la funcionalidad de cada parte del programa y promueve la mantenibilidad del proyecto.

## Autor

*   **Fernando Warno**

## Licencia

Este proyecto está bajo la Licencia MIT.

