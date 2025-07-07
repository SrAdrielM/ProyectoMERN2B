import express from 'express';
import salesController from '../controllers/salesController.js';

const router = express.Router();
router.route('/')
    .get(salesController.getAllSales)
    .post(salesController.insertSales);

router.route('/getSalesByCategory')
    .get(salesController.getSalesByCategory);

router.route('/getBestSelledProducts')
    .get(salesController.getBestSelledProducts);

router.route('/getTotalEarnings')
    .get(salesController.getTotalEarnings);

export default router;