const method = process.argv[2];
const resource = process.argv[3];

if (method.toUpperCase() == "GET" && resource.toLowerCase() == "products") {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
}

if (
  method.toUpperCase() == "GET" &&
  resource.toLowerCase().startsWith("products/")
) {
  const id = resource.split("/")[1];
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  console.log(data);
}

if (method.toUpperCase() == "POST" && resource.toLowerCase() == "products") {
  const newProduct = {
    title: process.argv[4] || "Default Title",
    price: process.argv[5] || 0,
    category: process.argv[6] || "general",
  };
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
}

if (
  method.toUpperCase() == "DELETE" &&
  resource.toLowerCase().startsWith("products/")
) {
  const id = resource.split("/")[1];
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log(data);
}
