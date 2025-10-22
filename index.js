// index.js

/**
 * @file index.js
 * @description CLI para interactuar con la FakeStore API para gestionar productos.
 * @author Fernando Warno
 */

// Uso de destructuring para capturar los argumentos de la línea de comandos.
const [, , method, resource, ...args] = process.argv;

/**
 * Realiza una petición asíncrona a la API para obtener todos los productos y los muestra en la consola.
 * @async
 */
const getAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("✅ Lista de todos los productos:", data);
  } catch (error) {
    console.error("❌ Error al obtener los productos:", error.message);
  }
};

/**
 * Realiza una petición a la API para obtener un producto específico por su ID.
 * @async
 * @param {string} id - El ID del producto a consultar.
 */
const getProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    if (data) {
      console.log(`✅ Detalles del producto ${id}:`, data);
    } else {
      console.warn(`⚠️ No se encontró ningún producto con el ID ${id}.`);
    }
  } catch (error) {
    console.error(`❌ Error al obtener el producto ${id}:`, error.message);
  }
};

/**
 * Envía una petición POST a la API para crear un nuevo producto con los datos proporcionados.
 * @async
 * @param {string[]} productData - Un array con los datos del producto: [title, price, category].
 */
const createProduct = async (productData) => {
  const [title, priceStr, category] = productData;
  const price = parseFloat(priceStr);

  // Validación de datos para la creación
  if (!title || !priceStr || !category) {
    console.error(
      "❌ Error: Faltan argumentos. Se requiere título, precio y categoría."
    );
    console.info(
      'Ejemplo: npm run start POST products "Nuevo Producto" 19.99 "categoría"'
    );
    return;
  }
  if (isNaN(price)) {
    console.error("❌ Error: El precio debe ser un número válido.");
    return;
  }

  const newProduct = { title, price, category };

  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("✅ Producto creado exitosamente:", data);
  } catch (error) {
    console.error("❌ Error al crear el producto:", error.message);
  }
};

/**
 * Envía una petición DELETE a la API para eliminar un producto por su ID.
 * @async
 * @param {string} id - El ID del producto a eliminar.
 */
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(
      `✅ Producto ${id} eliminado exitosamente. Respuesta de la API:`,
      data
    );
  } catch (error) {
    console.error(`❌ Error al eliminar el producto ${id}:`, error.message);
  }
};

/**
 * Función principal que procesa los argumentos de la línea de comandos y enruta a la función correspondiente.
 */
const main = () => {
  if (!method || !resource) {
    console.error("❌ Error: Debes proporcionar un método HTTP y un recurso.");
    console.info("Ejemplo: npm run start GET products");
    return;
  }

  const [resourceName, resourceId] = resource.split("/");

  if (resourceName.toLowerCase() !== "products") {
    console.error("❌ Error: El recurso debe ser 'products'.");
    return;
  }

  // Validación de que el ID, si existe, sea un número.
  if (resourceId && isNaN(parseInt(resourceId))) {
    console.error(
      `❌ Error: El ID del producto debe ser un número. Se recibió: "${resourceId}".`
    );
    return;
  }

  switch (method.toUpperCase()) {
    case "GET":
      resourceId ? getProductById(resourceId) : getAllProducts();
      break;

    case "POST":
      createProduct(args);
      break;

    case "DELETE":
      if (!resourceId) {
        console.error(
          "❌ Error: Debes especificar el ID del producto a eliminar."
        );
        console.info("Ejemplo: npm run start DELETE products/7");
      } else {
        deleteProduct(resourceId);
      }
      break;

    default:
      console.error(
        `❌ Error: Método "${method}" no soportado. Usa GET, POST o DELETE.`
      );
      break;
  }
};

main();
