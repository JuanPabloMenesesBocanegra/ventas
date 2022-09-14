import React from "react";
import Layout from "../components/commons/Layout";
import TableCliente from "../components/clientes/TableCliente";
import ToolbarCliente from "../components/clientes/ToolbarCliente";
import Modal from "../components/commons/Modal";

const Clientes = () => {
  return (
    <Layout>
      <div className="panle">
        <div className="panel-heading">Clientes</div>
        <div className="box">
          <ToolbarCliente/>
          <TableCliente />
        </div>
      </div>
      <Modal/>
    </Layout>
  );
};
export default Clientes;
