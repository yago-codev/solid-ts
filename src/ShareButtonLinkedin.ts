import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonLinkedin extends AbstractLinkShareButton {
  constructor(clazz: string, url: string) {
    super(clazz, url);
  }

  createLink(): string {
    return `http://www.linkedin.com/shareArticle?url=${this.url}`;
  }
}
