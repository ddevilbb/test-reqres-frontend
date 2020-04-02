import NextHead from 'next/head'
import { string } from 'prop-types'

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8"/>
    <title>{props.title || 'Test-reqres-frontend'}</title>
  </NextHead>
)

Head.propTypes = {
  title: string
}

export default Head
