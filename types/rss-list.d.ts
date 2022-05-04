import { LitElement } from "lit";
interface RssListItemData {
    title: string;
    links: string[];
}
interface RssListItem {
    title: string;
    data: RssListItemData[];
}
declare type RssListType = RssListItem[];
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class RssList extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * rss list data.
     */
    data: RssListType;
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "rss-list": RssList;
    }
}
export {};
