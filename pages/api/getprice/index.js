// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pf = require("price-finder");

const priceFinder = new pf();

export default async (req, res) => {
  const {
    body: { link },
    method,
  } = req;

  console.log(link);
  switch (method) {
    case "POST":
      priceFinder.findItemDetails(link, (error, item) => {
        if (error) return res.status(400).json({ error });
        return res.status(200).json({ item });
      });
  }
};
