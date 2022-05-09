import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = ({ transacoes }) => {
  const data = {
    columns: [
      {
        label: 'Data',
        field: 'dataTransferencia',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Valor',
        field: 'valor',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Tipo',
        field: 'tipo',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Nome operador transação',
        field: 'nomeOperadorTransacao',
        sort: 'asc',
        width: 270
      }
    ],
    rows: transacoes
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default DatatablePage;