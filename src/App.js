import './App.css';
import DatatablePage from './Components/Table';
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="App">
    <MDBContainer>
    <MDBCard>
      <MDBCardBody>
        <MDBRow>
        <MDBCol size='md' className='col-example'>
          <div id='textExample1' className='form-text'>
            Data de Início
          </div>
          <MDBInput label='Example label' id='formTextExample1' type='text' aria-describedby='textExample1' />
        </MDBCol>
        <MDBCol size='md' className='col-example'>
        <div id='textExample1' className='form-text'>
            Data de Fim
          </div>
          <MDBInput label='Example label' id='formTextExample1' type='text' aria-describedby='textExample1' />
        </MDBCol>
        <MDBCol size='md' className='col-example'>
        <div id='textExample1' className='form-text'>
            Nome operador transação
          </div>
          <MDBInput label='Example label' id='formTextExample1' type='text' aria-describedby='textExample1' />
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
        <DatatablePage/>
      </MDBCardBody>
    </MDBCard>
    </MDBContainer>

    </div>
  );
}

export default App;
