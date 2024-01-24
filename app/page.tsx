import Home from "@/components/Home";
import Error from "./error";

export const metadata = {
  title: "HomePage - Chennai Hotels",
};

const getRooms = async (searchParams: string) => {
  const urlParams = new URLSearchParams(searchParams);
  const queryString = urlParams.toString();

  try {
    const res = await fetch(`${process.env.API_URL}/api/rooms?${queryString}`, {
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log();
  }
};

export default async function HomePage({
  searchParams,
}: {
  searchParams: string;
}) {
  const data = await getRooms(searchParams);

  // console.log("Data", data);

  if (data?.errMessage) {
    return <Error error={data} />;
  }

  return <Home data={data} />;
}
