import React, { useState, useEffect } from "react";
import RegisterCustomers from "../components/customers/RegisterCostumers";
import ListCustomers from "../components/customers/ListCostumers";

import useDataCustomers from "../components/customers/hooks/useDataCustomers";


const Customers = () => {

  useEffect(() => {
      document.title = 'Clientes';
  }, []);

  const {
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
  } = useDataCustomers();

  

  return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Clientes</h1>
          <div>
            <div className="flex border-b border-gray-200 mb-4">
              <button
                className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                onClick={() => setActiveTab("list")}
              >
                Lista de clientes
              </button>
              <button
                className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
                onClick={() => {
                  setActiveTab("form");
                  cleanData();
                }}
              >
                Gestionar Clientes
              </button>
            </div>
            <div>
              {activeTab === "list" && (
                <div>
                  <ListCustomers
                    setId={setId}
                    setActiveTab={setActiveTab}
                    updateCustomer={updateCustomer}
                    handleUpdate={handleUpdate}
                    deleteCustomer={deleteCustomer}
                    customers={customers}
                    loading={loading}
                  />
                </div>
              )}
              {activeTab === "form" && (
                <div>
                  <RegisterCustomers
                    id={id}
                    setId={setId}
                    name={name}
                    setName={setName}
                    lastName={lastName}
                    setLastName={setLastName}
                    birthday={birthday}
                    setBirthday={setBirthday}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    telephone={telephone}
                    setTelephone={setTelephone}
                    dui={dui}
                    setDui={setDui}
                    errorCustomer={errorCustomer}
                    setError={setError}
                    success={success}
                    setSuccess={setSuccess}
                    loading={loading}
                    setLoading={setLoading}
                    customers={customers}
                    setCustomers={setCustomers}
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
};

export default Customers;