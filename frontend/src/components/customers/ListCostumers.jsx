import React from "react";
import CardCustomer from "./CustomersCard";

const ListCustomers = ({
  deleteCustomer,
  updateCustomer,
  loading,
  customers,
}) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Clientes
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {customers?.map((customer) => (
          <CardCustomer
            key={customer._id}
            customer={customer}
            deleteCustomer={deleteCustomer}
            updateCustomer={updateCustomer}
          />
        ))}
      </div>
    </>
  );
};

export default ListCustomers;