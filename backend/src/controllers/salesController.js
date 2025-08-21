import salesModel from "../models/sales.js"

const salesController = {}

salesController.getAllSales = async (req, res) => {
    try {
        const sales = await salesModel.find();
        res.status(200).json(sales);
    } catch (error) {
        console.log("error " + error);
        res.status(500).json({ message: "Error fetching sales data" });
    }
}

salesController.insertSales = async (req, res) => {
    try {
        const { product, category, customer, total } = req.body;

        if (total <= 0) {
            return res.status(400).json({ message: "Total must be greater than zero" });
        }

        const newSale = new salesModel({
            product,
            category,
            customer,
            total
        });
        await newSale.save();
        res.status(201).json({ message: "Sale inserted successfully", sale: newSale });
    } catch (error) {
        console.log("error " + error);
        res.status(500).json({ message: "Error inserting sales data" });
    }
}

//=====================================//
//== Ventas que tiene cada categoria ==//
//=====================================//

salesController.getSalesByCategory = async (req, res) => {
    try {
        const resultado = await salesModel.aggregate([
            {
                $group: {
                    _id: "$category",
                    totalSales: { $sum: "$total" }
                }
            },
            {
                $sort: { totalSales: -1 }
            }
        ]);
        res.status(200).json(resultado);
    } catch (error) {
        console.log("error " + error);
        res.status(500).json({ message: "Error fetching sales by category" });
    }
}

//============================//
//== Productos mas vendidos ==//
//============================//

salesController.getBestSelledProducts = async (req, res) => {
    try {
        const resultado = await salesModel.aggregate([
            {
                $group: {
                    _id: "$product",
                    totalSales: { $sum: 1 }
                }
            },
            {
                $sort: { totalSales: -1 }
            },
            {
                $limit: 3
            }
        ]);

        res.status(200).json(resultado);
    } catch (error) {
        console.log("error " + error);
        res.status(500).json({ message: "Error fetching best-selled products" });
    }
};

//=======================//
//== Ganancias totales ==//
//=======================//

salesController.getTotalEarnings = async (req, res) => {
    try {
        const resultado = await salesModel.aggregate([
            {
                $group: {
                    _id: null,
                    gananciasTotales: { $sum: "$total" }
                }
            }
        ]);
        res.status(200).json(resultado);
    } catch (error) {
        console.log("error " + error);
        res.status(500).json({ message: "Error fetching total earnings" });
    }
}

export default salesController;