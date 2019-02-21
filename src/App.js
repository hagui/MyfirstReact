import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {sampleText} from "./sampleText";
import marked from 'marked'

class App extends Component {
    state = {
        text: sampleText
    };


    // update clicked
    componentDidMount() {
        const text = localStorage.getItem('text');

        if (text) {
            this.setState({text})
        } else {
            this.setState({text: sampleText})
        }
        console.log(("cycle de vie").concat("componentDidMount"))
    }


    componentWillUnmount() {
        console.log(("cycle de vie").concat(" willUnmount"))
    }


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(("cycle de vie").concat(" shouldComponentUpdate"));
        return true
    }

    // reecrire la valeur apres sauvegarde
    componentDidUpdate(prevProps, prevState, snapsh1t) {
        console.log(("cycle de vie").concat(" componentDidUpdate"));
        const {text} = this.state;
        localStorage.setItem('text', text)
    }

    handleChange = event => {
        const text = event.target.value;
        this.setState({text})
    };

    renderText = text => marked(text, {sanitize: true});

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6'>
            <textarea
                className='form-control'
                onChange={this.handleChange}
                value={this.state.text}
                rows='35'/>
                    </div>
                    <div className='col-sm-6'>
                        <div dangerouslySetInnerHTML={{__html: this.renderText(this.state.text)}}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default App;
