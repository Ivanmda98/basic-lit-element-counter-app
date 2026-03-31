import { LitElement, html, css } from 'lit';

export class AlertComponent extends LitElement {
    
    static get is() {
        return 'alert-component';
    };

    static get properties() {
        return {
            message: { type: String },
        }
    };

    constructor() {
        super();
        this.message = "";
    };

    render() {
        return html`
            <div>
                <div>
                    <h1>Alert Component</h1>
                    <p>${this.message}</p>
                </div>
                <div>
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
                display: block;
            }
        `
    ];
}
customElements.define('alert-component', AlertComponent);
