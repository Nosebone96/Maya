import React from "react";
import Header from "./header";
import Footer from "./footer";


const Layout = ({ children }) => {
    return(
        <>
            <div>
                <Header />
                <section className="section">
                    <main>{children}</main>
                </section> 
                <Footer /> 
            </div>
                      
        </>

    )
    
    
}

export default Layout;