import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}

export default function ContactForm() {
    const [state, setState] = useState({});

    const failurePopup = () => {
        const MySwal = withReactContent(Swal);

        MySwal.fire({
            onOpen: () => {
                MySwal.clickConfirm();
            },
        }).then(() => {
            return MySwal.fire('Sorry!', 'Something went wrong, please try again later!', 'error');
        });
    };

    const successPopup = () => {
        const MySwal = withReactContent(Swal);

        MySwal.fire({
            onOpen: () => {
                MySwal.clickConfirm();
            },
        }).then(() => {
            return MySwal.fire('Good job!', 'Your message has arrived!', 'success');
        });
    };

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => alert('success'))
            .catch((error) => alert(error));
    };

    return (
        <>
            <h1>Contact</h1>
            <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                </div>
                <label>
                    Your name:
                    <input type="text" name="name" onChange={handleChange} />
                </label>
                <label>
                    Your email:
                    <input type="email" name="email" onChange={handleChange} />
                </label>
                <label>
                    Message:
                    <textarea name="message" onChange={handleChange} />
                </label>
                <button type="submit">Send</button>
            </form>
        </>
    );
}
