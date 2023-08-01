const express = require("express");
const router = express.Router();
const adminRoutes = require("./adminRouter");
const buyerRoutes = require("./buyerRoutes");
const sellerRoutes = require("./sellerRoutes");

router.use("/admin/", adminRoutes);
router.use("/buyer/", buyerRoutes);
router.use("/seller/", sellerRoutes);

module.exports = router;