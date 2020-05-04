import AbstractShareButton from "./AbstractShareButton";

export default class AbstractLinkShareButton extends AbstractShareButton {
  url: string;

  constructor(clazz: string, url: string) {
    super(clazz);

    this.url = url;
  }

  abstract createLink(): string;

  createAction(): any {
    const link = this.createLink();
    return () => window.open(link);
  }
}
