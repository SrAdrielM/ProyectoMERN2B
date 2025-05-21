import React from "react";
import Button from "../Button"

const RegisterCustomers = ({ 
    id,
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

    handleSubmit,
    handleUpdate,
}) => {
    return (
        <>
          <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded mb-5">
            <h1 className="text-2xl hidden">Id del Cliente {id}</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4 col-span-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ej: Juan"
                />
              </div>
              <div className="mb-4 col-span-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="lastName"
                >
                  Apellido
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ej: Pérez"
                />
              </div>
              <div className="mb-4 col-span-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="birthday"
                >
                  Fecha de Nacimiento
                </label>
                <input
                  type="date"
                  name="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="mb-4 col-span-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="email"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ej: juan.perez@example.com"
                />
              </div>
              <div className="mb-4 col-span-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="********"
                />
              </div>
              <div className="mb-4 col-span-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="telephone"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ej: 1234-5678"
                />
              </div>
              <div className="mb-4 col-span-2">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="dui"
                >
                  DUI
                </label>
                <input
                  type="text"
                  name="dui"
                  value={dui}
                  onChange={(e) => setDui(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Ej: 12345678-9"
                />
              </div>
            </div>
      
            {id ? (
              <Button
              type="submit"
              label={"Editar Cliente"}
              actionButton={(e) => {
                e.preventDefault();
                handleUpdate(e);
              }}
              colorClass={"warning"}
            />
          ) : (
            <Button
              type="submit"
              label={"Registrar Cliente"}
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

export default RegisterCustomers;
