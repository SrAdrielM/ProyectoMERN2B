import React from "react"
import "./navbar.css";

import img1 from "../imgs/logoZ.jpg"
import img2 from "../imgs/products.png"
import img3 from "../imgs/customers.png"
import img4 from "../imgs/employees.png"

const Nav = () => {
    return (
        <nav>
            <div id="bar">
                <div>
                    <img src={img1} id="logo"/>
                </div>
                <ul>
                    <li>
                        <a href="/">Productos
                        <img src={img2}/></a>
                    </li>
                    <li>
                        <a href="/Customers">Clientes
                        <img src={img3}/></a>
                    </li>
                    <li>
                        <a href="/Employees">Empleados
                        <img src={img4}/></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;