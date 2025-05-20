import React, { useState, useEffect } from "react";
import RegisterProducts from "../components/Products/registerProduct"
import ListProducts from "../components/Products/ListProducts";

import useDataProducts from "../components/Products/hooks/useDataProducts";


const Products = () => {

    useEffect(() => {
        document.title = 'Empleados';
    }, []);

    const {
        activeTab,
        setActiveTab,
        id,
        setId,
        name,
        setName,
        description,
        setDescription,
        price,
        setPrice,
        stock,
        setStock,
        errorProduct,
        setError,
        success,
        setSuccess,
        loading,
        setLoading,
        products,
        setProducts,
        cleanData,
        handleSubmit,
        fetchData,
        deleteProduct,
        updateProduct,
        handleUpdate
    } = useDataProducts();

    console.log(products, 'desde pantalla')

    return (
        <div className="min-h-screen bg-gray-100 p-6">
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Productos</h1>
            <div>
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                  onClick={() => setActiveTab("list")}
                >
                  Lista de productos
                </button>
                <button
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                  onClick={() => {
                    setActiveTab("form");
                    cleanData();
                  }}
                >
                  Gestionar Productos
                </button>
              </div>
              <div>
                {activeTab === "list" && (
                  <div>
                    <ListProducts
                      setId={setId}
                      setActiveTab={setActiveTab}
                      updateProduct={updateProduct}
                      handleUpdate={handleUpdate}
                      deleteProduct={deleteProduct}
                      products={products}
                      loading={loading}
                    />
                  </div>
                )}
                {activeTab === "form" && (
                  <div>
                    <RegisterProducts
                      id={id}
                      setId={setId}
                      name={name}
                      setName={setName}
                      description={description}
                      setDescription={setDescription}
                      price={price}
                      setPrice={setPrice}
                      stock={stock}
                      setStock={setStock}
                      errorProduct={errorProduct}
                      setError={setError}
                      success={success}
                      setSuccess={setSuccess}
                      loading={loading}
                      setLoading={setLoading}
                      products={products}
                      setProducts={setProducts}
                      cleanData={cleanData}
                      handleSubmit={handleSubmit}
                      handleUpdate={handleUpdate}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
}

export default Products