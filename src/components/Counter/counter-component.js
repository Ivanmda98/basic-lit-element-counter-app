import { LitElement, html, css } from 'lit';

export class CounterComponent extends LitElement {
    static get is() {
        return 'counter-component';
    };

    static get properties() {
        return {
            count: { type: Number }
        }
    }

    constructor() {
        super();
        this.count = 0;
    }

    

    _onClickIncrement() {
        this.count++;
    }

    _onClickDecrement() {
        if (this.count === 0) {
            this.dispatchEvent(new CustomEvent(`${CounterComponent.is}-count-zero`, {
                bubbles: true,
                composed: true
            }));
        } else {
            this.count--;
        }
    }

    render() {
        return html`
            <p>Count: ${this.count}</p>
            <button @click=${this._onClickIncrement}>Increment</button>
            <button @click=${this._onClickDecrement}>Decrement</button>
        `;
    }

    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
}
customElements.define('counter-component', CounterComponent);
