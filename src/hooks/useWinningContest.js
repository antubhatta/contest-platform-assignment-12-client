import { useQuery } from "@tanstack/react-query";
import { getWinningContests } from "../api/contest";

const useWinningContest = () => {
  const {
    data: contests,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["winningContest"],
    queryFn: getWinningContests,
  });

  return { contests, error, isLoading };
};

export default useWinningContest;
