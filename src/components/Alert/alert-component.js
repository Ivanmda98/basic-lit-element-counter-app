import { LitElement, html, css } from 'lit';

export class AlertComponent extends LitElement {
    
    static get is() {
        return 'alert-component';
    };

    static get properties() {
        return {
            /**
             * @description The message to be displayed in the alert.
             * @type {String}
             */
            message: {
                type: String
            }
        }
    };

    constructor() {
        super();
        this.message = "";
    };

    render() {
        return html`
            <div class="alert-component-container">
                <div class="alert-message-container">
                    <h1>Alert Component</h1>
                    <p>${this.message}</p>
                </div>
                <div class="alert-button-container">
                    <button @click=${this._closeAlert}>Accept</button>
                </div>

            </div>
        `;
    }

    _closeAlert() {
        this.dispatchEvent(new CustomEvent(`${AlertComponent.is}-close`, {
            bubbles: true,
            composed: true
        }));
    }

    static styles = [
        css`
            :host {
                width: 100vw;
                height: 100vh;
                box-sizing: border-box;
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
                position: fixed;
                top: 0;
                left: 0;
                display: flex;
                z-index: 1000;
                align-items: center;
                justify-content: center;
                background-color: rgba(0, 0, 0, 0.5);
            }

            .alert-component-container {
                background-color: white;
                padding: 20px;
                border-radius: 5px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .alert-component-container .alert-message-container {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .alert-component-container .alert-message-container h1 {
                margin: 0;
            }

            .alert-component-container .alert-button-container button {
                padding: 10px 20px;
                border-radius: 5px;
                border: none;
                color: white;
                background-color: #007BFF;
                cursor: pointer;

            }
        `
    ];
}
customElements.define('alert-component', AlertComponent);
