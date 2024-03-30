import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../services/api-client";

const useMatches = () => {
  const data = useQuery({
    queryKey: ["matches"],
    queryFn: fetchData,
  });
  return data;
};

export default useMatches;
