import { LitElement, css, html, nothing } from 'lit'
import './components/Counter/counter-component.js';
import './components/Alert/alert-component.js';

export class MyElement extends LitElement {

  static get is() {
    return 'my-element';
  };

  static get properties() {
    return {
      /**
       * The number of times the button has been clicked.
       */
      alertOpen: { type: Boolean },
      name: { type: String },
      age: { type: Number }
    }
  }

  constructor() {
    super()
    this.alertOpen = false;
    this.name = "";
    this.age = 0;
  }

  render() {
    return html`
      <p>${`Hello ${this.name}! You are ${this.age}.`}</p>
      <counter-component
        @counter-component-count-zero=${this._onCounterZero}>
      </counter-component>
      ${this.alertOpen ? html`
        <alert-component
          message="Counter is at zero!"
          @alert-component-close=${this._onCloseAlert}>
        </alert-component>` : nothing}
    `
  }

  _onCounterZero() {
    this.alertOpen = true;
  }

  _onCloseAlert() {
    this.alertOpen = false;
  }

  static get styles() {
    return css`
      
    `
  }
}

window.customElements.define('my-element', MyElement)
