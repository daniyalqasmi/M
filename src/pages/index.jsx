import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"M Main Home"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;