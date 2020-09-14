export class UserForm {
  constructor(public parent: Element) {}

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
