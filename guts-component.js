import {html, LitElement} from "@polymer/lit-element";

class GutsComponent extends LitElement {
    constructor(){
        super();
        this.greetings = 'Hola';
    }

    static get properties(){
        return {
            greetings: {
                type: String
            }
        };
    }

    render(){
        return html`
            <h3>Greetings ${this.greetings}</h3>  
        `;
    }
}

window.customElements.define('guts-component', GutsComponent);
