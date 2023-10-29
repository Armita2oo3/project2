import Layout from "@/layouts/main";
import { Home } from "@/components/pages";
import { NextPageWithLayout } from "./_app";
const HomePage: NextPageWithLayout = () => {
  return <Home />;
};
HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default HomePage;
