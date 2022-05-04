import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

interface RssListItemData {
  title: string;
  links: string[];
}

interface RssListItem {
  title: string;
  data: RssListItemData[];
}

type RssListType = RssListItem[];

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("rss-list")
export class RssList extends LitElement {
  static styles = css`
    :host {
      text-align: left;
    }
  `;
  /**
   * rss list data.
   */
  // @property({ type: Array }) data: RssListType = RssListData;
  @property({ type: Array }) data: RssListType = [];
  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    function renderSummaryItem(data: RssListItemData[]) {
      return data.map(
        (item) => html`
          <details>
            <summary>${item.title}</summary>
            ${item.links.map(
              (link) => html`<p><a href=${link} target="_blank">${link}</a></p>`
            )}
          </details>
        `
      );
    }

    return html`
      <slot></slot>
      ${this.data.map(
        (item) => html`
          <h3>${item.title}</h3>
          <hr />
          ${renderSummaryItem(item.data)}
        `
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "rss-list": RssList;
  }
}
