import * as React from "react"
import "../components/index.css"



const IndexPage = () => {
  return (
    <main className="main-all">
      <header classNameName="header">
        <div className="container">
            <div className="flex-container">
                <h1><a href="" className="logo">ARTEMAYA</a></h1>
                <div className="nav-icons">
                    <button className="icon-button hidden md-flex">
                        <span className="menu-icon">☰</span>
                        <span className="sr-only">Menú</span>
                    </button>
                </div>
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="productos/bolsos.html" className="nav-link">Bolsos</a></li>
                    <li><a href="productos/manillas.html" className="nav-link">Manillas Tejidas</a></li>
                    <li><a href="productos/camandulas.html" className="nav-link">Camandulas</a></li>
                    <li><a href="productos/pañoletas.html" className="nav-link">Pañoletas</a></li>
                </ul>
            </nav>
        </div>
    </header>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
