const PRICE_LIST = [
  {
    id: "p1",
    name: "BASIC",
    size: "100GB",
    payment: "$1.99/Month",
    benefits: [
      "100 GB of storage",
      "Option to add members",
      "Extra member benefits",
    ],
    isFeatured: false,
  },
  {
    id: "p2",
    name: "STANDARD",
    size: "200GB",
    payment: "$3.99/Month",
    benefits: [
      "200 GB of storage",
      "Option to add members",
      "Extra member benefits",
    ],
    isFeatured: true,
  },
  {
    id: "p3",
    name: "PREMIUM",
    size: "2TB",
    payment: "$8.99/Month",
    benefits: [
      "2 TB of storage",
      "Option to add members",
      "Extra member benefits",
    ],
    isFeatured: false,
  },
];

export const getPriceList = () => {
  return PRICE_LIST;
};
