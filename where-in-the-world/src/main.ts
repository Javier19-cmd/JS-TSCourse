import { elements } from "./dom/elements";
import renderCountries from "./dom/renderCountries";
import { initializeLocalStorage } from "./store/countries";
import getCountriesByQuery from "./store/getCountriesByQuery";
import "./styles.css";

void initializeLocalStorage();

elements.form.onsubmit = async (e) => {
  e.preventDefault();
  const countryName = elements.search.value.trim();

  const countries = getCountriesByQuery(countryName);
  renderCountries(countries);

  elements.search.value = "";
};
