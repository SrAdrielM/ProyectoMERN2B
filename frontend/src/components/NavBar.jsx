import React from "react"
import "./navbar.css";

const Nav = () => {
    return (
        <nav>
            <div id="bar">
                <div>MyApp</div>
                <ul>
                    <li>
                        <a href="/">
                            Productos
                        </a>
                    </li>
                    <li>
                        <a href="/Branches">
                            Branches
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;