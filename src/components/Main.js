import React from 'react';

class Main extends React.Component {
    render() {
        return ( <
            div >
            <
            section className = "about-section text-center"
            id = "about" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-lg-8 mx-auto" >
            <
            h2 className = "text-white mb-4" > Tentang Penelitian < /h2> <
            p className = "text-white-50" > Penelitian ini ditujukan untuk mengetahui seberapa berpengaruh nilai sudut di dalam citra untuk melakukan klasifikasi kompleksitas dari citra. < /p>  < /
            div > <
            /div> <
            img className = "img-fluid"
            src = " "
            alt = "" / >
            <
            /div> < /
            section >

            <
            section className = "projects-section bg-light"
            id = "projects" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-lg-8 mx-auto text-center" >
            <
            h2 className = "mx-auto" > TRAINING SECTION < /h2> < /
            div > <
            form className = "col-lg-8 mx-auto text-center"
            id = "train_form"
            name = "train_form"
            enctype = "multipart/form-data"
            method = "POST" >
            <
            div className = "col-lg-8 mx-auto text-center" >
            <
            label > Data Training < /label> <
            input className = "form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
            type = "text"
            name = "id_train"
            placeholder = "% Data Train" / >
            <
            /div>

            <
            div className = "col-lg-8 mx-auto text-center" >
            <
            label className = "mt-2" > Data Test < /label> <
            input className = "form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
            type = "text"
            id = "id_test"
            name = "id_test"
            placeholder = "% Data Test" / >
            <
            /div>

            <
            div className = "col-lg-8 mx-auto text-center" >
            <
            input id = "proses"
            name = 'proses'
            type = 'hidden'
            value = 'training' / >
            <
            button className = "btn btn-primary mt-2"
            type = "submit" > TRAINING < /button> < /
            div > <
            /form>             < /
            div > <
            /div> < /
            section >

            <
            section className = "signup-section"
            id = "signup" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-10 col-lg-8 mx-auto text-center" >
            <
            h3 className = "text-white mb-5" > TEST SECTION < /h3>

            <
            form className = "form-inline d-flex"
            method = "POST"
            id = "test_form"
            name = "test_form"
            enctype = "multipart/form-data" >
            <
            input className = "form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
            id = "input_test"
            name = "input_test"
            type = "file" / >
            <
            input id = "proses1"
            name = 'proses'
            type = 'hidden'
            value = 'testing' / >
            <
            button className = "btn btn-primary mx-auto"
            type = "submit" > Submit < /button> < /
            form > <
            /div> < /
            div > <
            /div> < /
            section > <
            /div>
        );
    }
}

export default Main;