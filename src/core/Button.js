//Taylor Zweigle, 2024
class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const prefix = this.getAttribute("prefix");
    const suffix = this.getAttribute("suffix");
    const color = this.getAttribute("color");

    this.shadowRoot.innerHTML = `
    <style>${css}</style>
    <button class="button">
        ${prefix ? `<ion-icon name=${prefix}></ion-icon>` : ""}
        <slot></slot>
        ${suffix ? `<ion-icon name=${suffix}></ion-icon>` : ""}
    </button>
    `;

    color && this.shadowRoot.querySelector(".button").classList.add(`color-${color}`);
  }
}

const css = `
    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px 8px;
        gap: 4px;
        background-color: #1EB2CC;
        color: #ffffff;
        border: none;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
    }

    .color-primary {
        background-color: #1EB2CC;
        color: #ffffff;
    }

    .color-secondary {
        background-color: #E7B432;
        color: #ffffff;
    }

    .color-error {
        background-color: #D9123D;
        color: #ffffff;
    }

    ion-icon {
        font-size: 18px;
    }
`;

customElements.define("core-button", Button);
