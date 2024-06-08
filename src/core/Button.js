//Taylor Zweigle, 2024
class Button extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const prefix = this.getAttribute("prefix");
    const suffix = this.getAttribute("suffix");
    const variant = this.getAttribute("variant");

    this.shadowRoot.innerHTML = `
    <style>${css}</style>
    <button class="button">
        ${prefix ? `<ion-icon name=${prefix}></ion-icon>` : ""}
        <slot></slot>
        ${suffix ? `<ion-icon name=${suffix}></ion-icon>` : ""}
    </button>
    `;

    variant && this.shadowRoot.querySelector(".button").classList.add(`variant-${variant}`);
  }
}

const css = `
    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        gap: 4px;
        background-color: #166df7;
        border-radius: 4px;
        color: #ffffff;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .variant-primary {
        background-color: #166df7;
        color: #ffffff;
    }

    .variant-secondary {
        background-color: #dd050c;
        color: #ffffff;
    }

    ion-icon {
        font-size: 18px;
    }
`;

customElements.define("core-button", Button);
