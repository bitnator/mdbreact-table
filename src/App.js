import './App.css';
import React, { useEffect, useState } from "react";
import DatatablePage from './Components/Table';
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import api from "./services/api";

function App() {
  const [transferencias, setTransferencias] = useState();
  const transacoes = [{"id":1,"dataTransferencia":"2019-01-01 12:00:00","valor":30895.46,"tipo":"DEPOSITO","nomeOperadorTransacao":null,"conta":{"id":1,"nomeResponsavel":"Fulano"}},{"id":2,"dataTransferencia":"2019-02-03 09:53:27","valor":12.24,"tipo":"DEPOSITO","nomeOperadorTransacao":null,"conta":{"id":2,"nomeResponsavel":"Sicrano"}},{"id":3,"dataTransferencia":"2019-05-04 08:12:45","valor":-500.5,"tipo":"SAQUE","nomeOperadorTransacao":null,"conta":{"id":1,"nomeResponsavel":"Fulano"}},{"id":4,"dataTransferencia":"2019-08-07 08:12:45","valor":-530.5,"tipo":"SAQUE","nomeOperadorTransacao":null,"conta":{"id":2,"nomeResponsavel":"Sicrano"}},{"id":5,"dataTransferencia":"2020-06-08 10:15:01","valor":3241.23,"tipo":"TRANSFERENCIA","nomeOperadorTransacao":"Beltrano","conta":{"id":1,"nomeResponsavel":"Fulano"}},{"id":6,"dataTransferencia":"2021-04-01 12:12:04","valor":25173.09,"tipo":"TRANSFERENCIA","nomeOperadorTransacao":"Ronnyscley","conta":{"id":2,"nomeResponsavel":"Sicrano"}}];

  useEffect(() => {
    api
      .get("/transferencia", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept", 
            "Access-Control-Allow-Methods": "*",
          },
          responseType: "json",
      })
      .then((response) => setTransferencias(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
      console.log(transferencias);
  }, []);

  return (
    <div className="App">
    <MDBContainer>
    <MDBCard>
      <MDBCardBody>
        <MDBRow>
        <MDBCol size='md' className='col-example'>
          <div id='labelDataInicio' className='form-text'>
            Data de Início
          </div>
          <MDBInput id='dataInicio' type='text' aria-describedby='labelDataInicio' />
        </MDBCol>
        <MDBCol size='md' className='col-example'>
        <div id='labelDataFim' className='form-text'>
            Data de Fim
          </div>
          <MDBInput id='dataFim' type='text' aria-describedby='labelDataFim' />
        </MDBCol>
        <MDBCol size='md' className='col-example'>
        <div id='labelNome' className='form-text'>
            Nome operador transação
          </div>
          <MDBInput id='nome' type='text' aria-describedby='labelNome' />
        </MDBCol>
        </MDBRow>
      </MDBCardBody>

      <MDBCardBody>
      <div className="d-flex justify-content-end">
      <MDBBtn className='text-dark' color='light'>
        Pesquisar
      </MDBBtn>
      </div>
      </MDBCardBody>

      <MDBCardBody>
        <DatatablePage transacoes={transacoes}/>
      </MDBCardBody>
    </MDBCard>
    </MDBContainer>

    </div>
  );
}

export default App;
