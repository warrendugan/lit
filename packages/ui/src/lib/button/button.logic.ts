import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import * as content from './button.template.js';

@customElement('button')
export class Button extends LitElement {
  override render() {
    return html`${content}`;
  }
}
