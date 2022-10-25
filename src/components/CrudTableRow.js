import React from "react";

export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, house, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{house}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id, name)}>Eliminar</button>
      </td>
    </tr>
  );
};
