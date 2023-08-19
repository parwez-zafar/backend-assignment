const express = require('express');
const { getAllUser, getSingleUser, updaterUserRole, deleteUser, getAdminProducts } = require('../controllers/adminControler');
const { isAuthenticatedUser, authorizeRole } = require('../middleware/auth');
const router = express.Router();
const { createProduct, updateProduct, deleteProduct } = require('../controllers/adminControler')

// route for user
/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieve a list of all users.
 *     responses:
 *       200:
 *         description: A list of users.
 *       500:
 *         description: Internal server error.
 */
router.route('/admin/users').get(isAuthenticatedUser, authorizeRole("admin"), getAllUser);

router.route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRole("admin"), getSingleUser)
    .put(isAuthenticatedUser, authorizeRole("admin"), updaterUserRole)
    .delete(isAuthenticatedUser, authorizeRole('admin'), deleteUser);


// Route for Product


router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRole("admin"), createProduct);

router.route('/admin/products').get(isAuthenticatedUser, authorizeRole("admin"), getAdminProducts)

router
    .route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRole("admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizeRole("admin"), deleteProduct)



module.exports = router;