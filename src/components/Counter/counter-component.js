import { LitElement, html, css } from 'lit';

export class CounterComponent extends LitElement {
    static get is() {
        return 'counter-component';
    };

    static get properties() {
        return {
            /**
             * @description The current count value.
             * @type {Number}
             * @private
             */
            _count: {
                type: Number,
                state: true
            }
        }
    }

    constructor() {
        super();
        this._count = 0;
    }

    

    _onClickIncrement() {
        this._count++;
    }

    _onClickDecrement() {
        if (this._count === 0) {
            this.dispatchEvent(new CustomEvent(`${CounterComponent.is}-count-zero`, {
                bubbles: true,
                composed: true
            }));
        } else {
            this._count--;
        }
    }

    render() {
        return html`
            <div class="counter-component-container">
                <p>Count: ${this._count}</p>
                <div class="counter-buttons-container">
                    <button id="increment-button" @click=${this._onClickIncrement}>Increment</button>
                    <button id="decrement-button" @click=${this._onClickDecrement}>Decrement</button>
                </div>
            </div>
            
        `;
    }

    static styles = [
        css`
            :host {
                width: 100%;
                box-sizing: border-box;
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 0;
            }

            .counter-component-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            .counter-component-container p {
                font-size: 18px;
                font-weight: 900;
            }

            .counter-buttons-container {
                display: flex;
                gap: 10px;
            }

            .counter-buttons-container button {
                padding: 10px 20px;
                border-radius: 5px;
                border: none;
                color: white;
                font-size: 16px;
                font-weight: 900;
                transition: ease-in-out 0.3s;
            }

            .counter-buttons-container button:hover {
                cursor: pointer;
                opacity: 0.8;
                background-color: #555;
            }

            .counter-buttons-container button#increment-button {
                background-color: #4CAF50;
            }

            .counter-buttons-container button#decrement-button {
                background-color: #f44336;
            }
        `
    ];
}
customElements.define('counter-component', CounterComponent);
