import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseenter:h1": this.onHeaderHover,
    };
  }

  onButtonClick(): void {
    console.log("Button clicked!");
  }

  onHeaderHover(): void {
    console.log("Header hover");
  }

  template(): string {
    return `
        <h1>User Form</h1>
        <div>User name: ${this.model.get("name")}</div>
        <div>User name: ${this.model.get("age")}</div>
        <input />
        <button>Change</button>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this, this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
