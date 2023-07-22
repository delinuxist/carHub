import { CarProps, FilterProps } from "../../shared/interfaces";

export async function fetchCars(filters: FilterProps) {
  const { year, manufacturer, model, fuel, limit } = filters;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&make=${manufacturer}&year=${year}&limit=${limit}&fuel_type=${fuel}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8cb7b73895mshf7a87a9c67cc6b3p1fc133jsn7feee8d4f846",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };
  const response = await fetch(`${url}`, options);

  const result = await response.json();

  return result;
}

export function generateCarImageUrl(car: CarProps, angle?: string) {
  const key = "hrjavascript-mastery";
  const { make, year, model } = car;
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", key);
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("customer", key);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle ? angle : ""}`);

  return `${url}`;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
