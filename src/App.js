import logo from './logo.svg';
import './App.css';
import { Table } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <h1>React Bootstrap</h1>
      <br />
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Umur</th>
              <th>Tempat, Tanggal Lahir</th>
              <th>Alamat</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Alexa Arianna</td>
              <td>17 Tahun</td>
              <td>Malang, 8 Desembar 2003</td>
              <td>St. Elm Northside Brooklyn West</td>
              <td>@heyitslexi</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Reynold Zachy</td>
              <td>17 Tahun</td>
              <td>Malang, 21 Februari 2003</td>
              <td>St. Elm Northside The Bridge</td>
              <td>@reyzachy</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Victoria Sydney</td>
              <td>17 Tahun</td>
              <td>Malang, 29 Juni 2003</td>
              <td>St. Elm Northside Brigerton Out Wood</td>
              <td>@victorious</td>
            </tr>
            <tr>
              <td>4</td>
              <td>King Marco</td>
              <td>17 Tahun</td>
              <td>Kalimantan, 27 Oktober 2003</td>
              <td>St. Elm Northside Brooklyn Est</td>
              <td>@iamtheking</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
