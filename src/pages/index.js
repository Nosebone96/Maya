import * as React from "react"
import "../components/index.css"
import Layout from"../components/layout"
import Card from "../components/card"


const IndexPage = () => {
  return (
    <Layout>
        <div>
            <h2>hola buenas noches</h2>

            <Card title="manilla" description="hecha de los mejores materiales del mercado" imageUrl="" price="12.000$" />

        </div>

    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
