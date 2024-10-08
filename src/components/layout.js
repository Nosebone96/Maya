import React from "react";
import Header from "./header";


const Layout = ({ children }) => {
    return(
        <>
            <div>
                <Header />
                <section className="section">
                    <main>{children}</main>
                </section>  
            </div>
                      
        </>

    )
    
    
}

export default Layout;