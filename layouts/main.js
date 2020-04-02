import NavBar from '../componets/navbar'
import { Container, Row, Col } from 'reactstrap'

export default ({ children }) => (
  <div>
    <NavBar/>
    <Container fluid>
      <Row>
        <Col sm="12" md={{ size: 12 }}>{ children }</Col>
      </Row>
    </Container>
  </div>
)
