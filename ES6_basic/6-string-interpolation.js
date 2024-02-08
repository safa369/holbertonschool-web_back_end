export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',

  };
  const str1 = 'As of ';
  const str2 = ', it was the seventh-highest income county in the United States';
  const str3 = ', with a per capita personal income of ';
  const str4 = '. As of 2015, San Francisco';
  const str6 = ', and a GDP per capita of ';
  const str5 = ' proper had a GDP of ';
  const str7 = '.';
  return `${str1}${year}${str2}${str3}${budget.income}${str4}${str5}${budget.gdp}${str6}${budget.capita}${str7}`;
}
