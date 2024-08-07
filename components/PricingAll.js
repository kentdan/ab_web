import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// Sample plans array. This can be moved to a separate config file or fetched from an API.
const plans = [
  {
    priceId: process.env.NODE_ENV === "development" ? "price_1Niyy5AxyNprDp7iZIqEyD2h" : "price_456",
    name: "3 months plan",
    description: "with small interest rate",
    price: 0.8,
    priceAnchor: 2.4,
    features: [
      { name: `Total amount: ${(200000 * 1.008).toFixed(2)}` },
      { name: `${(200000 * 1.008 / 3).toFixed(2)} /month` },
    ],
  },
  {
    isFeatured: true,
    priceId: process.env.NODE_ENV === "development" ? "price_1O5KtcAxyNprDp7iftKnrrpw" : "price_456",
    name: "6 months plan",
    description: "most popular",
    price: 2.2,
    priceAnchor: 3.3,
    features: [
      { name: `Total amount: ${(200000 * 1.022).toFixed(2)}` },
      { name: `${(200000 * 1.022 / 6).toFixed(2)} /month` },
    ],
  },
  {
    isFeatured: true,
    priceId: process.env.NODE_ENV === "development" ? "price_1O5KtcAxyNprDp7iftKnrrpw" : "price_456",
    name: "12 months plan",
    description: "You need more time",
    price: 3.1,
    priceAnchor: 5.4,
    features: [
      { name: `Total amount: ${(200000 * 1.031).toFixed(2)}` },
      { name: `${(200000 * 1.031 / 12).toFixed(2)} /month` },
    ],
  },
];

const planb = [
  {
    priceId: process.env.NODE_ENV === "development" ? "price_1Niyy5AxyNprDp7iZIqEyD2h" : "price_456",
    name: "3 months plan",
    description: "with small interest rate",
    price: 0,
    priceAnchor: 1.2,

  },
  {
    isFeatured: true,
    priceId: process.env.NODE_ENV === "development" ? "price_1O5KtcAxyNprDp7iftKnrrpw" : "price_456",
    name: "6 months plan",
    description: "most popular",
    price: 1.2,
    priceAnchor: 3,
  },
  {
    isFeatured: true,
    priceId: process.env.NODE_ENV === "development" ? "price_1O5KtcAxyNprDp7iftKnrrpw" : "price_456",
    name: "12 months plan",
    description: "You need more time",
    price: 2.1,
    priceAnchor: 5,
  },
];

// PlanCard Component
const PlanCard = ({ plan }) => (
  <div className="relative w-full max-w-lg">
    {plan.isFeatured && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <span className="badge text-xs text-primary-content font-semibold border-0 bg-primary">POPULAR</span>
      </div>
    )}
    {plan.isFeatured && <div className="absolute -inset-[1px] rounded-[9px] bg-primary z-10"></div>}

    <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
      <div className="flex justify-between items-center gap-4">
        <div>
          <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
          {plan.description && <p className="text-base-content/80 mt-2">{plan.description}</p>}
        </div>
      </div>

      <div className="flex gap-2">
        {plan.priceAnchor && (
          <div className="flex flex-col justify-end mb-[4px] text-lg">
            <p className="relative">
              <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
              <span className="text-base-content/80">{plan.priceAnchor}%</span>
            </p>
          </div>
        )}
        <p className="text-5xl tracking-tight font-extrabold">{plan.price}%</p>
      </div>

      {plan.features && (
        <ul className="space-y-2.5 leading-relaxed text-base flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-[18px] h-[18px] opacity-80 shrink-0"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="space-y-2">
        <ButtonCheckout priceId={plan.priceId} />
        <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
          best instalment rate for you
        </p>
      </div>
    </div>
  </div>
);

// Pricing Component
const PricingAll = () => (
  <section className="bg-base-200 overflow-hidden" id="pricing">
    <div className="py-24 px-8 max-w-5xl mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <p className="font-medium text-primary mb-8">Pricing</p>
        <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">An easy way to pay monthly</h2>
      </div>

      <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
        {plans.map((plan) => (
          <PlanCard key={plan.priceId} plan={plan} />
        ))}
      </div>
    </div>
  </section>
);

export default PricingAll;
