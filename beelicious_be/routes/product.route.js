const express = require("express");
const {
  getProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");
const protect = require("../middleware/auth.js");
const adminOnly = require("../middleware/admin.middleware.js");
const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getOneProduct);

router.post("/", protect, adminOnly, addProduct);

router.put("/:id", protect, adminOnly, updateProduct);

router.delete("/:id", protect, adminOnly, deleteProduct);

module.exports = router;
