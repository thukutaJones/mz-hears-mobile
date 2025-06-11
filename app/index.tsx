import LoadingAnimation from "@/components/LoadingAnimation";
import { useCheckLogIn } from "@/context/checkLogIn";
import { Redirect } from "expo-router";

const Page = () => {
  const { isLoading, route } = useCheckLogIn();
  if (isLoading) return <LoadingAnimation displayModal={isLoading} />;

  if (route && !isLoading) return <Redirect href={route as "/(root)/home" | "/(auth)/welcome"} />;
};

export default Page;
