import faqsModel from "../models/faqs.js";

const faqsController = {};

faqsController.getFaqs = async (req, res) => {
    try {
        const faqs = await faqsModel.find();
        res.status(200).json(faqs)
    } catch (error) {
        console.log("Error " + error)
        res.status(500).json({message: "Error finding faqs"})
    }
};

faqsController.insertFaqs = async (req, res) => {
    const {question, answer, level, isActive} = req.body;

    try {
        if (!question || !answer || !level || !isActive) {
            return res.status(400).json({message: "ingrese todos los campos"})
        }

        if (level > 5 || level < 1) {
            return res.status(400).json({message: "Ingrese un valor de nivel valido"})
        }

        const newFaqs = new faqsModel({
            question, answer, level, isActive
        })

        newFaqs.save()

        res.status(200).json({message: "faq saved"})
    } catch (error) {
        console.log("Error" + error)
        res.status(400).json({message: "Error saving"})
    }
};

faqsController.updateFaqs = async (req, res) => {
    const {question, answer, level, isActive} = req.body;

    try {

        if (level > 5 || level < 1) {
            return res.status(400).json({message: "Ingrese un valor de nivel valido"})
        }

        const updateFaqs = await faqsModel.findByIdAndUpdate(
            req.params.id,
            {question, answer, level, isActive},
            {new: true}
        )

        if (!updateFaqs) {
            return res.status(400).json({message: "faqs not found"})
        }

        res.status(200).json({message: "faq updated succesfully"})
    } catch (error) {
        console.log("Error" + error)
        res.status(400).json({message: "Error updating faqs"})
    }
};

faqsController.deleteFaqs = async(req, res) => {
    try {
        const deleteFaqs = await faqsModel.findByIdAndDelete(
            req.params.id
        )

        if (!deleteFaqs) {
            return res.status(400).json({message: "faqs not found"})
        }

        res.status(200).json({message: "faqs deleted"})
    } catch (error) {
        console.log("error" + error)
        res.status(400).json({message: "error"})
    }
}

export default faqsController;