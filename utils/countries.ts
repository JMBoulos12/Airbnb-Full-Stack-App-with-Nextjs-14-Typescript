import countries from "world-countries";

export const formatCountries = countries.map((item) => {
  return {
    code: item.cca2,
    name: item.name.common,
    flag: item.flag,
    location: item.latlng,
    region: item.region,
  };
});

export const findCountryByCode = (code: string) => {
  return formatCountries.find((item) => item.code === code);
};
