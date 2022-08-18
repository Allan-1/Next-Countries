export async function getCountries() {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries = res.json();

  return countries;
}
