import { useState } from "react";
import '/src/ContactUsPopUp/ContactUsPopUp.css';

function ContactUsPopUp() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <div className="modal">
            <div className="overlay">
                <div className="model-content">
                    
                    <div className="model-buttons">
                    <button onClick={() => setModal(false)}>Cancel</button>
                    <button onClick={() => setModal(false)}>Send</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactUsPopUp;