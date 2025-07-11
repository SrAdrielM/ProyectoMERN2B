// Importo todo lo de la libreria de Express
import express from "express";
import cors from "cors";
import productsRoutes from "./src/routes/products.js";
import customersRoutes from "./src/routes/customers.js";
import employeeRoutes from "./src/routes/employees.js";
import branchesRoutes from "./src/routes/branches.js";
import faqsRouter from "./src/routes/faqs.js";
import reviewRoutes from "./src/routes/reviews.js";
import registerEmployesRoutes from "./src/routes/registerEmployees.js";
import cookieParser from "cookie-parser";
import loginRoute from "./src/routes/login.js";
import logoutRoute from "./src/routes/logout.js";
import registerClient from "./src/routes/registerClients.js";
import passwordRecoveryRoutes from "./src/routes/passwordRecovery.js";
import blogRoutes from "./src/routes/blog.js";
import salesRoutes from "./src/routes/sales.js";
import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";

// Creo una constante que es igual a la libreria que importé
const app = express();

app.use(
    cors({
      origin: [
            "https://proyecto-mern-2-b-eosin.vercel.app",
            "https://proyectomern2b-wu9z.onrender.com", 
        ],
      credentials: true, 
    })
  );
//Que acepte datos en json
app.use(express.json());
//Que acepte cookies en postman
app.use(cookieParser());
// Definir las rutas de las funciones que tendrá la página web
app.use("/api/products", productsRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/faqs", faqsRouter);
app.use("/api/sales", salesRoutes);

app.use("/api/registerEmployees", registerEmployesRoutes);
app.use("/api/login", loginRoute);app.use("/api/logout", logoutRoute);

app.use("/api/registerClients", registerClient);
app.use("/api/passwordRecovery", passwordRecoveryRoutes);

app.use("/api/blog", validateAuthToken(["employee"]), blogRoutes);
// Exporto la constante para poder usar express en otros archivos
export default app;