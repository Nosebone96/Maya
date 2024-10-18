import * as React from "react"
import "../components/index.css"
import Layout from"../components/layout"
import Card from "../components/card"


const IndexPage = () => {
  return (
    <Layout>
        <div>
            <Card name="manilla" description="hecha de los mejores materiales del mercado" imgUrl="https://via.placeholder.com/300" price="12.000$ " />
        </div>

    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
