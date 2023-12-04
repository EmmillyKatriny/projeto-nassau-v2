// src/components/Tabela.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tabela = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/clientes/${id}`);
      setClientes(clientes.filter((cliente) => cliente._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (id) => {
    // Implemente a lógica de edição conforme necessário
    console.log(`Editar cliente com ID: ${id}`);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Número</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente._id}>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.numero}</td>
            <td>
              <button onClick={() => handleEdit(cliente._id)}>Editar</button>
              <button onClick={() => handleDelete(cliente._id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;
