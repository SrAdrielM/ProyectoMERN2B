import React from "react";
import Button from "../Button"

const RegisterProducts = ({
  id,
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  stock,
  setStock,

  handleSubmit,
  handleUpdate,
}) => {
    return (
        <>
          <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded mb-5">
            <h1 className="text-2xl hidden">Id del producto {id}</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4 col-span-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre del Producto
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ej: Laptop HP"
                />
              </div>
              <div className="mb-4 col-span-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="description"
                >
                  Descripción
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ej: Laptop HP con procesador i7, 16GB RAM, SSD 512GB"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="price"
                >
                  Precio ($)
                </label>
                <input
                  type="number"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ej: 799.99"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="stock"
                >
                  Stock
                </label>
                <input
                  type="number"
                  name="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ej: 25"
                />
              </div>
            </div>
      
            {id ? (
              <Button
                type="submit"
                label={"Editar Producto"}
                actionButton={(e) => {
                  e.preventDefault();
                  handleUpdate(e);
                }}
                colorClass={"warning"}
              />
            ) : (
              <Button
                type="submit"
                label={"Registrar Producto"}
                actionButton={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
                colorClass={"primary"}
              />
            )}
          </form>
        </>
      );
      
};

export default RegisterProducts;