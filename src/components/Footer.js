import React from 'react';

class Footer extends React.Component {
    render() {
        return ( <
            div >
            <
            section className = "contact-section bg-black" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            /div>

            <
            div className = "social d-flex justify-content-center" >
            <
            a className = "mx-2"
            href = "#!" > < i className = "fab fa-twitter" > < /i></a >
            <
            a className = "mx-2"
            href = "#!" > < i className = "fab fa-facebook-f" > < /i></a >
            <
            a className = "mx-2"
            href = "#!" > < i className = "fab fa-github" > < /i></a >
            <
            /div> < /
            div > <
            /section>

            <
            footer className = "footer bg-black small text-center text-white-50" >
            <
            div className = "container" > Copyright© Afni Sakinah < /div> < /
            footer > <
            /div>
        );
    }
}

export default Footer;