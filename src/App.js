import "./App.css";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import MangaList from "./manga-list";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const mangalist = [
    {'name': 'Teste 1', 'chapter': '700/700', 'status': 'finished'},
    {'name': 'Teste 2', 'chapter': '700/700', 'status': 'finished'},
    {'name': 'Teste 3', 'chapter': '700/700', 'status': 'finished'}
  ]

  return (
    <div>
      <header className="header">
        <h1>Alexandre's Mangá List</h1>
      </header>
      <Container>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Current chapter/Total Chapters</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {MangaList.map(manga => (
              <tr>
                <th scope="row">1</th>
                <td>{manga.name}</td>
                <td>{manga.chapter}</td>
                <td>{manga.status}</td>
                <td>
                  <Button variant="primary" onClick={handleShow}>Edit</Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
            ))}
{/*             
            <tr>
              <th scope="row">2</th>
              <td>In Another World With my Smartphone</td>
              <td>--/--</td>
              <td>to read</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Accel World</td>
              <td>20/--</td>
              <td>reading</td>
            </tr> */}
          </tbody>
        </table>
        

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Mangá</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter new name" value="Naruto" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicChapters">
          <Form.Label>Chapter track</Form.Label>
          <Form.Control type="text" placeholder="Update chapters" value="700/700" />
        </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </div>
  );
}

export default App;
