//Importamos las tablas de los usuario
import customersModel from "../models/customers.js";
import employeesModel from "../models/employee.js";
import bcryptjs from "bcryptjs"; // encriptar
import jsonwebtoken from "jsonwebtoken"; //Token
import { config } from "../config.js";

const loginController = {};

loginController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let userFound; //Para guardar el usuario encontrado
    let userType; //Para guardar el tipo usuario encontrado

    // 1. ADMIN
    if (
      email === config.emailAdmin.email &&
      password === config.emailAdmin.password
    ) {
      (userType = "admin"), (userFound = { _id: "admin" });
    } else {
      //2-EMPLEADO
      userFound = await employeesModel.findOne({ email });
      userType = "employee";

      if (!userFound) {
        userFound = await customersModel.findOne({ email });
        userType = "customer";
      }
    }

    //Usuario no encontrado
    if (!userFound) {
      console.log("A pesar de buscar en todos lados, no existe");
      return res.json({ message: "User not found" });
    }

    //Primero. verificamos si el usuario esta bloqueado
    if (userType !== "Admin"){
      if (userFound.lockTime > Date.now()){
        const minutosRestantes = Math.ceil((userFound.lockTime - Date.now()) /60000)
        return res.status(403).json({message: "Cuenta bloqueada, faltan " + minutosRestantes + " minutos"})
      }
    }

    // Validar la contraseña
    // Solo si no es Admin
    if (userType !== "admin") {
      //veamos si la contraseña que están escribiendo
      // en el login
      // Es la misma, que la que está en la BD (encriptada)
      const isMatch = await bcryptjs.compare(password, userFound.password);
      if (!isMatch) {

        userFound.loginAttempts = userFound.loginAttempts + 1

        if (userFound.loginAttempts > 5){
          userFound.lockTime = Date.now() + 15 * 60 * 1000
          await userFound.save();

          return res.status(403).json({message: "cuenta bloqueada"})
        }

        await userFound.save()
        console.log("no matchea");
        return res.json({ message: "Contraseña incorrecta" });
      }

      userFound.loginAttempts = 0;
      userFound.lockTime = null;
      await userFound.save();
     }

    // --> TOKEN <--
    jsonwebtoken.sign(
      //1-Que voy a guardar
      { id: userFound._id, userType },
      //2-Secreto
      config.JWT.secret,
      //3- cuando expira
      { expiresIn: config.JWT.expiresIn },
      //4-funcion flecha
      (error, token) => {
        if (error) console.log(error);

        res.cookie("authToken", token);
        res.json({ message: "login successful" });
      }
    );
  } catch (error) {
    res.json({ message: "error" });
  }
};

export default loginController;
