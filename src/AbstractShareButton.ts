import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {
  clazz: string;
  eventHandler: EventHandler;

  constructor(clazz: string) {
    this.clazz = clazz;
    this.eventHandler = new EventHandler();
  }

  abstract createAction();

  bind() {
    const action = this.createAction();

    this.eventHandler.addEventListenerToClass(this.clazz, "click", action);
  }
}
