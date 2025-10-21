const method = process.argv[2];
const resource = process.argv[3];

if (method.toUpperCase() == "GET" && resource.toLowerCase() == "products") {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data);
}
