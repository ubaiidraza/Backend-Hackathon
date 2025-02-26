import express from "express";
import { addProduct, deleteProduct, getProducts, getSingleProduct, updateProduct } from "../controllers/product.controllers.js";
import { upload } from "../middleware/multer.middleware.js"


const router = express.Router();

router.post("/addProducts", upload.single("image"), addProduct);
router.get("/products", getProducts);
router.get("/products/:id", getSingleProduct);
router.put("/updateProduct/:id", upload.single("image"), updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

      
export default router;  




// import express from "express";
// import { addProduct, deleteProduct, getProducts, getSingleProduct, updateProduct } from "../controllers/product.controllers.js";
// import { upload } from "../middleware/multer.middleware.js"


// const router = express.Router();

// router.post("/addProducts", upload.single("image"), addProduct);
// router.get("/products", getProducts);
// router.get("/products/:id", getSingleProduct);
// router.put("/updateProduct/:id", upload.single("image"), updateProduct);
// router.delete("/deleteProduct/:id", deleteProduct);


// export default router;