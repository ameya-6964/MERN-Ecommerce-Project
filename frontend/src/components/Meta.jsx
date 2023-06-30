import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To ProShop 🛍️",
  description: "We Sell The Best Products For Cheap",
  keywords: "Electronics, Buy Electronics, Cheap Electroincs",
};

export default Meta;
