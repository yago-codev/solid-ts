import AbstractShareButton from "./AbstractShareButton";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";

const twitter: AbstractShareButton = new ShareButtonTwitter(
  ".btn-twitter",
  "https://www.youtube.com/rodrigobranas"
);
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(
  ".btn-facebook",
  "https://www.youtube.com/rodrigobranas"
);
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(
  ".btn-linkedin",
  "https://www.youtube.com/rodrigobranas"
);
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint(".btn-print");
print.bind();
