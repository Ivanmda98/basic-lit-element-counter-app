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
       * @description Whether the alert is open.
       * @type {Boolean}
       * @private
       */
      _alertOpen: { 
        type: Boolean,
        state: true
      },
      /**
       * @description The name of the user.
       * @type {String}
       * @attribute name
       */
      name: { 
        type: String 
      },
      /**
       * @description The age of the user.
       * @type {Number}
       * @attribute age
       */
      age: { 
        type: Number 
      }
    }
  }

  constructor() {
    super()
    this._alertOpen = false;
    this.name = "";
    this.age = 0;
  }

  render() {
    return html`
    <div class="my-element-container">
      <p>${`Hello ${this.name}! You are ${this.age}.`}</p>
      <counter-component
        @counter-component-count-zero=${this._onCounterZero}>
      </counter-component>
      <alert-component ?hidden=${!this._alertOpen}
        alert-title="Counter Alert"
        message="Counter is at zero!"
        @alert-component-close=${this._onCloseAlert}>
      </alert-component>
    </div>
    `
  }

  _onCounterZero() {
    this._alertOpen = true;
  }

  _onCloseAlert() {
    this._alertOpen = false;
  }

  static get styles() {
    return css`

      :host {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .my-element-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;     
      }

      alert-component {
        --alert-title-color: blue;
        --alert-message-color: red;
        --alert-button-color: green;
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
