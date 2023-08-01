const auth = require("../middlewares/auth");
const purchaserControllers = require("../controllers/purchaserControllers");

const { Router } = require("express");
const router = Router();

// Purchasers
// Router = localhost:8000/purchaser

// Purchaser -> Signup -> Signin -> View available products -> add products to cart -> Place order and Checkout via stripe

// Post Purchaser signup
// Credentials save
router.post("/signup", purchaserControllers.Signup);

// Post Purchaser Signin
// Through Credentials and will get JWT
// JWT will be stored in local storage
router.post("/signin", purchaserControllers.Signin);

// Can view all products
// Get Products
router.get("/products", purchaserControllers.viewProducts);

// Add products to cart
// Post Prodct to the cart list
// send the product id with pruchaser id through jwt and will also decrement the products stock of products mentioned in request
// and it will append the products in cart list
router.post("/myCart", auth, purchaserControllers.addProductToCart);

// View the Cart
// Get Purchaser Cart

router.get("/myCart", auth, purchaserControllers.viewCartProducts);

// Can place order and Checkout via stripe and clear the cart
// Post Purchaser Crededntials to Stripe make payment if payment is successful then place the order in the order table
// with puchaser id and seller id of product holder present in the cart
router.post("/checkout", auth, purchaserControllers.checkout);

// View Purchasers Orders
// Get Orders list
router.get("/orders/:id", auth, purchaserControllers.viewOrders);

module.exports = router;
