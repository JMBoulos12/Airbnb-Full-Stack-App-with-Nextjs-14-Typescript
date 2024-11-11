import { fetchChartsData } from "@/utils/actions";
import Chart from "./Chart";

async function ChartsContainer() {
  const bookings = await fetchChartsData()
  
  return <Chart data={bookings} />
}

export default ChartsContainer;
