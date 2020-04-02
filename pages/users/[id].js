import Layout from '../../layouts/main'
import { Container } from 'reactstrap'
import fetch from 'isomorphic-unfetch'

const User = props => (
  <Layout>
    <Container>
      <h1>{props.user.last_name} {props.user.first_name}</h1>
      <img src={props.user.avatar}/>
      <p>Email: {props.user.email}</p>
    </Container>
  </Layout>
)

User.getInitialProps = async function (context) {
  const { id } = context.query
  const headers = {
    accept: 'application/json'
  }
  const res = await fetch(`${process.env.API_URL}/users/${id}`, { headers })
  const user = await res.json()

  return { user }
}

export default User
