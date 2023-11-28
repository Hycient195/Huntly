const getRandomStatus = () => {
  const statuses = ["all","in-review","interviewing","assessment","rejected","offered"];
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};

const generateRandomDate = () => {
  const startDate = new Date(2021, 0, 1); // January 1, 2021
  const endDate = new Date();
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return randomDate.toISOString().split('T')[0];
};

export const applicationHistory = [
  {
    companyName: "Metro",
    roles: "Advertising Manager",
    dateApplied: "24th July 2021",
    status: "in-review"
  },
  // Generate 50 more objects
  ...Array.from({ length: 50 }, (_, index) => ({
    companyName: `Company${index + 2}`,
    roles: `Role${index + 2}`,
    dateApplied: generateRandomDate(),
    status: getRandomStatus()
  }))
];

export const statusColor = {
  "in-review": "border border-yellow-500 text-yellow-500",
  "interviewing": "border border-orange-500 text-orange-500",
  "assessment": "border border-purple-500 text-purple-500",
  "offered": "border border-emerald-500 text-emerald-500",
  "rejected": "border border-rose-500 text-rose-500"
}