import React from "react";
import Button from "../Button"

const CardCustomer = ({ customer, deleteCustomer, updateCustomer }) => {
    if (!customer) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {customer.name} {customer.lastName}
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Email: </span> {customer.email}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Telefono:</span> {customer.telephone}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Fecha de nacimiento:</span> {customer.birthday}
        </p>
        <p>dui: {customer.dui}</p>

        <Button 
        label={"Eliminar"}
        actionButton={() => deleteCustomer(customer._id)}
        colorClass={"danger"}
        />

        <Button 
        label={"Editar Información"}
        actionButton={() => updateCustomer(customer)}
        colorClass={"warning"}
        />

      </div>
    </div>
    );
};

export default CardCustomer;