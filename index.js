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
