import React from 'react';

class Navigation extends React.Component {
    render() {
        return ( <
            div >
            <
            nav className = "navbar navbar-expand-lg navbar-light fixed-top"
            id = "mainNav" >
            <
            div className = "container" >
            <
            a className = "navbar-brand js-scroll-trigger"
            href = "#page-top" > Home < /a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i class="fas fa-bars"></i > < /button> <
            div className = "collapse navbar-collapse"
            id = "navbarResponsive" >
            <
            ul className = "navbar-nav ml-auto" >
            <
            li className = "nav-item" > < a className = "nav-link js-scroll-trigger"
            href = "#about" > Tentang Penelitian < /a></li >
            <
            li className = "nav-item" > < a class = "nav-link js-scroll-trigger"
            href = "#projects" > Training < /a></li >
            <
            li className = "nav-item" > < a class = "nav-link js-scroll-trigger"
            href = "#signup" > Test < /a></li >
            <
            /ul> <
            /div> <
            /div> <
            /nav>   <
            /div>
        );
    }
}

export default Navigation;