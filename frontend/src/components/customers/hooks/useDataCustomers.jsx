import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

const useDataCustomers = () => {
    const ApiCustomers = "https://proyectomern2b-wu9z.onrender.com/api/customers";

    const [activeTab, setActiveTab] = useState("list"); 
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telephone, setTelephone] = useState("");
    const [dui, setDui] = useState("");
    const [errorCustomer, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState([]);

    const cleanData = () => {
        setName("");
        setLastName("");
        setBirthday("");
        setEmail("");
        setPassword("");
        setTelephone("");
        setDui("");
        setId("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
          !name ||
          !lastName ||
          !birthday ||
          !email ||
          !password ||
          !telephone ||
          !dui
        ) {
            setError("Todos los campos son obligatorios");
            toast.error('Todos los campos son obligatorios');
            return;
        }

        try {
            const newCustomer = {
                name,
                lastName,
                birthday,
                email,
                password,
                telephone,
                dui
            };

            console.log(newCustomer, "datos nuevo Cliente");

            const response = await fetch(ApiCustomers, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(newCustomer),
            });

            if (!response.ok) {
                throw new Error("Hubo un error al registrar un nuevo cliente");
            }

            const data = await response.json();
            toast.success("Cliente registrado");
            setCustomers(data);
            setSuccess("Cliente registrado correctamente");
            cleanData();
            fetchData();
        } catch (error) {
            setError(error.message);
            console.error("Error:", error);
            alert("Error", "Ocurrió un error al registrar el cliente");
            toast.error('Ocurrió un error al registrar el cliente');
        } finally {
            setLoading(false);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch(ApiCustomers);
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const data = await response.json();
            console.log(data);
            setCustomers(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteCustomer = async (id) => {
        try {
            const response = await fetch(
              `${ApiCustomers}/${id}`,
              {
                method: "DELETE",
                body: JSON.stringify({ id }),
              }
            );
        
            if (!response.ok) {
              throw new Error("Failed to delete customer");
            }
        
            const result = await response.json();
            console.log("Deleted:", result);
            toast.success('Cliente eliminado');
            setCustomers((prev) => prev.filter(emp => emp._id !== id));
            fetchData();
        } catch (error) {
            console.error("Error deleting customer:", error);
        }
    };

    const updateCustomer = async (dataCustomer) => {
        setId(dataCustomer._id);
        setName(dataCustomer.name);
        setLastName(dataCustomer.lastName);
        setBirthday(dataCustomer.birthday);
        setEmail(dataCustomer.email);
        setPassword(dataCustomer.password);
        setTelephone(dataCustomer.telephone);
        setDui(dataCustomer.dui);
        setError(null);
        setSuccess(null);
        setActiveTab("form");
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const updateCustomer = {
                name,
                lastName,
                birthday,
                email,
                password,
                telephone,
                dui
            };

            const response  = await fetch(
            `${ApiCustomers}/${id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updateCustomer),
            }
            )

            if (!response.ok) {
                throw new Error("Error al actualizar el cliente");
            }

            toast.success('Cliente actualizado');
            setSuccess("Cliente actualizado correctamente");
            cleanData();
            setId("");
            setActiveTab("list");
            fetchData();
        } catch (error) {
            setError(error.message);
            alert("Error al actualizar el cliente");
            console.error("Error:", errorCustomer);
        } finally {
            setLoading(false);
        }
    };

    return {
        activeTab,
        setActiveTab,
        id,
        setId,
        name,
        setName,
        lastName,
        setLastName,
        birthday,
        setBirthday,
        email,
        setEmail,
        password,
        setPassword,
        telephone,
        setTelephone,
        dui,
        setDui,
        errorCustomer,
        setError,
        success,
        setSuccess,
        loading,
        setLoading,
        customers,
        setCustomers,
        cleanData,
        handleSubmit,
        fetchData,
        deleteCustomer,
        updateCustomer,
        handleUpdate
    };
};

export default useDataCustomers;
