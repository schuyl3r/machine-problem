const { readCSV, writeCSV } = require("../utils/csvHandler");
const path = require("path");

const CSV_PATH = path.join(__dirname, "../products.csv");

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await readCSV(CSV_PATH);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error reading products" });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const products = await readCSV(CSV_PATH);
    const product = products.find((p) => p.id === req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Error finding product" });
  }
};

// Get distinct product types
exports.getProductTypes = async (req, res) => {
  try {
    const products = await readCSV(CSV_PATH);
    const types = [...new Set(products.map((p) => p.type))];
    res.json(types);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving product types" });
  }
};

// Add product
exports.addProduct = async (req, res) => {
  try {
    const { type, name, id, price } = req.body;

    // Validation
    if (!type || !name || !id || !price) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const products = await readCSV(CSV_PATH);

    // Check if product ID already exists
    if (products.some((p) => p.id === id)) {
      return res.status(409).json({ message: "Product ID already exists" });
    }

    const newProduct = { type, name, id, price };
    products.push(newProduct);

    await writeCSV(CSV_PATH, products);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error adding product" });
  }
};

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    const products = await readCSV(CSV_PATH);
    const filteredProducts = products.filter((p) => p.id !== req.params.id);

    if (products.length === filteredProducts.length) {
      return res.status(404).json({ message: "Product not found" });
    }

    await writeCSV(CSV_PATH, filteredProducts);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product" });
  }
};
