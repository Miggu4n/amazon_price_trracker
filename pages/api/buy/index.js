const amazon = require("amazon-auto-buy-bot");

const loginLink =
  "https://www.amazon.it/ap/signin?_encoding=UTF8&openid.assoc_handle=amazon_checkout_it&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.it%2Fgp%2Fcheckoutportal%2Fenter-checkout.html%3Fie%3DUTF8%26asin%3DB07V6DVY96%26buyNow%3D1%26cartCustomerID%3D0%26fromSignIn%3D1%26isBuyBack%3D%26isGift%3D0%26offeringID%3D2gtKXqtGrwk32fEtFi1gNqYys8uPj5QhMKMxZmAUsjZiWYNEtKlMYfnuAmrEhREJ4WwqKH928r84XkgYyqB9KiAnf7egLJMCqZg%25252BNwzI92SbIDvra%25252F0avcWWvmaTso7i9Ku4hNc0%25252BovO1AJtA%25252FThCw%25253D%25253D%26purchaseInputs%3DHASH%25280xa27013cc%2529%26quantity%3D1%26sessionID%3D259-8512097-4407466&pageId=amazon_checkout_it&showRmrMe=0&siteState=IMBMsgs.&suppressSignInRadioButtons=0";

export default async (req, res) => {
  const {
    body: { link },
    method,
  } = req;

  switch (method) {
    case "POST":
      amazon.buy(link);
      amazon.login(loginLink, "migguan97@gmail.com", "Billy567!!");
      amazon.place_order();
      return res.status(200).json({ message: "fatto" });
  }
};
