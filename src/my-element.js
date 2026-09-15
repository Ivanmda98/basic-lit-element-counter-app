import { LitElement, css, html, nothing } from "lit";
import "./components/Counter/counter-component.js";
import "./components/Alert/alert-component.js";

import "@banking-portal-orioninc/components/styles";
import "@banking-portal-orioninc/components/typeButton";
export class MyElement extends LitElement {
  static get is() {
    return "my-element";
  }

  static get properties() {
    return {
      /**
       * @description Whether the alert is open.
       * @type {Boolean}
       * @private
       */
      _alertOpen: {
        type: Boolean,
        state: true,
      },
      /**
       * @description The name of the user.
       * @type {String}
       * @attribute name
       */
      name: {
        type: String,
        reflect: true,
      },
      /**
       * @description The age of the user.
       * @type {Number}
       * @attribute age
       */
      age: {
        type: Number,
        reflect: true,
      },
      /**
       *
       */
      _tagList: {
        type: Array,
        state: true,
      },
    };
  }

  constructor() {
    super();
    this._alertOpen = false;
    this.name = "";
    this.age = 0;
    this._tagList = ["my-element", "counter-component", "alert-component"];
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("age")) {
      this.classList.toggle("adult", this.age >= 18);
    }
  }

  render() {
    return html`
      <div class="my-element-container">
        <p>${`Hello ${this.name}! You are ${this.age}.`}</p>
        <p class="age-message">You are an adult.</p>
        <counter-component
          algo-mas="algo"
          @counter-component-count-zero=${this._onCounterZero}
        >
        </counter-component>
        <alert-component
          ?hidden=${!this._alertOpen}
          alert-title="Counter Alert"
          message="Counter is at zero!"
          @alert-component-close=${this._onCloseAlert}
        >
        </alert-component>

        ${this._tagList.map((tag) => html` <div class="tag">${tag}</div> `)}

        <button @click=${this._onAddTag}>Add Tag</button>
        <button @click=${this._onDeleteTag}>Delete Tag</button>
      </div>
      <type-button buttonText="Secure Acces" typeButton="primary" icon="next">
      </type-button>
      <type-button
        buttonText="Biometric Login"
        typeButton="secondary"
        icon="biometric"
        iconPosition="left"
      >
      </type-button>
    `;
  }

  _onDeleteTag() {
    const str = "Carlos/Jessica/María/Andrés";

    // El método split me regresa un array con los elementos separados por el caracter que le paso como argumento
    // si no le paso algun caracter, me regresa un array con un solo elemento que es el string completo.
    let arrayNames = str.split("/");
    console.log(arrayNames);

    // El método find me regresa el primer elemento del array que cumpla con la condición que le paso como argumento,
    // en este caso, el primer elemento que sea igual a "Jessica". Si no encuentra ningún elemento que cumpla con la condición, me regresa undefined.
    const nameSelected = arrayNames.find((name) => name === "Jessica") || "";
    console.log(nameSelected);

    const peopleArray = [
      { name: "Carlos", age: 30 },
      { name: "Jessica", age: 25 },
      { name: "María", age: 28 },
      { name: "Andrés", age: 35 },
    ];

    //Solo me regresa el primer elemento que cumpla con la condicion
    // y en caso que no encuentre nada (undefined), con el operador nullish coalescing (??)
    // le asigno un objeto vacío para evitar errores al intentar acceder a propiedades de undefined
    const personSelected =
      peopleArray.find((person) => person.name === "María") ?? {};
    console.log(personSelected);

    // Me regresa un nuevo array con los elementos que cumplen con la condicion.
    const peopleOlderThan28 = peopleArray.filter((person) => person.age > 28);
    console.log(peopleOlderThan28);

    const excludePopleOf35 = peopleArray.filter((person) => person.age !== 35);
    console.log(excludePopleOf35);

    // Con el metodo map puedo agregar nuevas propiedades a los elementos que cumplan
    // con la condicion
    const peopleOlderThan20 = peopleArray.map((person) =>
      person.age > 20 ? { ...person, moreThan20: true } : person,
    );
    console.log(peopleOlderThan20);

    const numbersArray = [1, 2, 3, 4, 5];
    // Metodo map util para transformar data
    const numbersMultipliedBy2 = numbersArray.map((number) => number * 2);
    console.log(numbersMultipliedBy2);

    //Metodo indexOf me regresa la posición del elemento que busco,
    // pero solo funciona con tipos primitivos (string, number, boolean)
    const positionDirectUser = arrayNames.indexOf("María");
    console.log(positionDirectUser);

    // Metodo findIndex me regresa la posición del elemento que busco,
    // se utiliza para buscar en array de objetos o cuando necesito evaluar una condicion mas compleja.
    const positionUser = peopleArray.findIndex(
      (person) => person.name === "María",
    );
    console.log(positionUser);

    // Metodo includes me regresa un booleano indicando si el elemento que busco existe o no en el array,
    // pero solo funciona con tipos primitivos (string, number, boolean).
    const thereIsMariaInArrayNames = arrayNames.includes("María");
    console.log(thereIsMariaInArrayNames);

    // Metodo some me regresa un booleano indicando si al menos un elemento del array
    // cumple con la condicion que le paso. Perfecto para arrays de objetos o condiciones
    //
    const thereIsMariaInPeopleArray = peopleArray.some(
      (person) => person.name === "María",
    );
    console.log(thereIsMariaInPeopleArray);

    console.log(arrayNames);
    const indexOfJessica = arrayNames.indexOf("Jessica");
    console.log(arrayNames);

    console.log("5" * "4" + "2");
    console.log(Object.assign({}, ["a", "b", "c"]));

    let var1 = "Nombre";
    let var2 = "Apellido";
    let var3 = "Apodo";
    let frase = var1 ?? var2 ?? var3;
    console.log(frase); // "Nombre", porque var1 no es null ni undefined

    console.log([] + []);
    console.log("coersion a strings de []");
    console.log([].toString());
    console.log("coersion a strings de [1] y [3,9]");
    console.log([1] + [3, 9]);
    console.log("coersion a strings de [1].toString() y [3,9].toString()");
    console.log([1].toString() + [3, 9].toString());

    const amount = 123_00;
    console.log(amount);

    for (var i = 0; i < 3; i++) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }

    const writer = {
      name: "Gabriel García Márquez",
      country: "Colombia",
    };

    console.log(JSON.stringify(Object.entries(writer))); // [["name","Gabriel García Márquez"],["country","Colombia"]]

    const anotherWriter = { ...writer };

    writer.name = "Isabel Allende";

    let a = [1, 2];
    let b = a;
    b.push(3);
    console.log(a);

    console.log(typeof ([] + {}));
    console.log(typeof ({} + []));

    console.log({} + {});
    console.log(anotherWriter); // "Gabriel García Márquez", porque anotherWriter es una copia superficial de writer, y el cambio en writer no afecta a anotherWriter
    if (this._tagList.length > 0) {
      //usar requestUpdate para actualizar la propiedad tagList después de eliminar el último tag
      // this._tagList.pop();
      // this.requestUpdate('tagList');

      // usar slice para crear una nueva matriz sin el último tag
      // y asignarla a tagList y asi crear una nueva referencia y activar la actualización automática
      this._tagList = this._tagList.slice(0, -1);
    }
    this.examplesSet();
  }

  examplesSet() {
    const mySet1 = new Set();

    mySet1.add(1); // Set [ 1 ]
    mySet1.add(5); // Set [ 1, 5 ]
    mySet1.add(5); // Set [ 1, 5 ]
    mySet1.add("algún texto"); // Set [ 1, 5, 'algún texto' ]
    const o = { a: 1, b: 2 };
    mySet1.add(o);

    mySet1.add({ a: 1, b: 2 }); // o está haciendo referencia a un objeto diferente,
    // por lo que está bien

    mySet1.has(1); // true
    mySet1.has(3); // false, ya que 3 no se ha agregado al conjunto
    mySet1.has(5); // true
    mySet1.has(Math.sqrt(25)); // true
    mySet1.has("Algún Texto".toLowerCase()); // true
    mySet1.has(o); // true

    mySet1.size; // 5

    mySet1.delete(5); // elimina 5 del conjunto
    mySet1.has(5); // false, 5 ha sido eliminado

    mySet1.size; // 4, ya que acabamos de eliminar un valor

    console.log("mySet1", mySet1);
    // imprime en consola Set(4) [ 1, "algún texto", {…}, {…} ] en Firefox
    // imprime en consola Set(4) { 1, "algún texto", {…}, {…} } en Chrome

    const mySet2 = new Set([1, 2, 3, 4]);
    console.log("mySet2", mySet2);

    const intersection = new Set([...mySet1].filter((x) => mySet2.has(x)));
    console.log("intersection", intersection);

    for (let item of mySet1) console.log(item);
    console.log("keys");

    for (let item of mySet1.keys()) console.log(item);

    console.log("values");

    for (let item of mySet1.values()) console.log(item);

    console.log("entries");

    for (let item of mySet1.entries()) console.log(item);
  }

  _onAddTag() {
    const newTag = `new-tag-${this._tagList.length + 1}`;

    //usar requestUpdate para actualizar la propiedad tagList después de agregar el nuevo tag
    // this.tagList.push(newTag);
    // this.requestUpdate('tagList');

    // usar spread operator para crear una nueva matriz con el nuevo tag
    // y asignarla a tagList y asi crear una nueva referencia y activar la actualización automática
    this._tagList = [...this._tagList, newTag];
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

      :host([name="Alex"]) {
        background-color: lightblue;
      }

      :host(.adult) .age-message {
        display: block;
      }

      .my-element-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .age-message {
        display: none;
      }

      alert-component {
        --alert-title-color: blue;
        --alert-message-color: red;
        --alert-button-color: green;
      }
    `;
  }
}

window.customElements.define(MyElement.is, MyElement);
