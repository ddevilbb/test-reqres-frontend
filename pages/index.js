import Head from '../componets/head'
import Layout from '../layouts/main'
import fetch from 'isomorphic-unfetch'

import { Card, CardBody, CardImg, Row, Col, CardTitle } from 'reactstrap'

export default props => (
  <Layout>
    <div>
      <Head/>
      <Row>
        {props.users.map(user => (
          <Col xs="1">
            <Card>
              <CardImg src={user.avatar}/>
              <CardBody>
                <CardTitle>
                  <a href={`/users/${user.id}`}>
                    {user.last_name} {user.first_name}
                  </a>
                </CardTitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </Layout>
)

export async function getServerSideProps(context) {
  const headers = {
    accept: 'application/json'
  }
  const res = await fetch(`${process.env.API_URL}/users`, { headers })
  const users = await res.json()

  return {
    props: {
      users
    }
  }
}
