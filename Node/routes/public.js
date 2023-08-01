const { Router } = require("express");
const router = Router();

// Show all the featured products
router.get("/products", (req, res) => {
  res.send("All the prodcts available");
});

module.exports = router;
