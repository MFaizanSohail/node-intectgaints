const { Router } = require("express");
const router = Router();

const purchaserRoutes = require("../routes/purchaser");
const sellerRoutes = require("../routes/seller");
const adminRoutes = require("../routes/admin");
const publicRoutes = require("../routes/public");

router.use(publicRoutes);
router.use("/admin", adminRoutes);
router.use("/seller", sellerRoutes);
router.use("/purchaser", purchaserRoutes);

module.exports = router;
