import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="columns is-desktop">
                <div className="column">
                        <div className="title is-5">Sede Medellín</div>
                        <div className="title is-7  has-text-danger">Centro Comercial Cisneros - Cra. 52 No. 44-70 Local 105C y 106C</div>
                    </div>
                    <div className="column">
                        <div className="has-text-danger ">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
                            <div className="is-7">314 48641980</div>
                        </div>
                        <div className="has-text-danger ">
                            <FontAwesomeIcon icon={ faGoogle } size="2x" />
                            <div className="is-7">artesaniasyaccesoriosmaya@gmail.com</div>
                        </div>
                    </div>
            </div>
            <div className="mb-0">© 2020-Artemaya</div>
        </footer>
    )
}

export default Footer;