import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Navigation() {
  return (
    <container className="text-center">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Correo:</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Descripcion:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger">Enviar</Button>
      </Form>
    </container>
  );
}
