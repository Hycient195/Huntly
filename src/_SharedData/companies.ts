import stripe from "../../public/images/companies/stripe.svg";
import truebill from "../../public/images/companies/truebill.svg";
import square from "../../public/images/companies/square.svg";
import coinbase from "../../public/images/companies/coinbase.svg";
import robin from "../../public/images/companies/robin.svg";
import kraken from "../../public/images/companies/kraken.svg";

export const companies = [
  {
    image: stripe,
    name: "Stripe",
    description: "Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools...",
    industry: [ "Business", "Payment", "Game" ]
  },
  {
    image: truebill,
    name: "Truebill",
    description: "Take control of your money. Truebill develops a mobile app that helps consumers take control of their financial...",
    industry: [ "Education", "Travel", "Payment" ]
  },
  {
    image: square,
    name: "Square",
    description: "Square builds common business tools in unconventional ways so more people can start, run, and grow their businesses.",
    industry: [ "Game", "Entertainment", "Education" ]
  },
  {
    image: coinbase,
    name: "Coinbase",
    description: "Coinbase is a digital currency wallet and platform where merchants and consumers can transact with new digital currencies.",
    industry: [ "Business", "Travel", "Payment" ]
  },
  {
    image: robin,
    name: "Robinhood",
    description: "Robinhood is lowering barriers, removing fees, and providing greater access to financial information.",
    industry: [ "Sports", "Education", "Entertainment" ]
  },
  {
    image: kraken,
    name: "Kraken",
    description: "Based in San Francisco, Kraken is the world’s largest global bitcoin exchange in euro volume and liquidity.",
    industry: [ "Business", "Game", "Payment" ]
  },
]

export const industryColorCode = {
  Business: "text-emerald-500 border border-emerald-500",
  Game: "text-yellow-500 border border-yellow-500",
  Payment: "text-primary border border-primary",
  Sports: "text-rose-500 border border-rose-500",
  Education: "text-blue-500 border border-blue-500",
  Travel: "text-orange-500 border border-orange-500",
  Entertainment: "text-violet-500 border border-violet-500",
}