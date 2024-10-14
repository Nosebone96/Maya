import React from "react";
import Header from "./header";
import Footer from "./footer";


const Layout = ({ children }) => {
    return(
        <>
            <div>
                <Header />
                <section className="section is-centered">
                    <main>{children}</main>
                </section> 
                <Footer /> 
            </div>
                      
        </>

    )
    
    
}

export default Layout;