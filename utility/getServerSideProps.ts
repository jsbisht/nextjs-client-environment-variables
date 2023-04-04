import { GetServerSidePropsContext } from "next";

export const getPublicConfigs = (context: GetServerSidePropsContext) => {
  return {
    // Feature Flags
    NEW_FEATURE_ENABLED: process.env.NEW_FEATURE_ENABLED,
    // Environment Variables
    AB_TEST_ID: process.env.AB_TEST_ID,
    // Values
    HAS_SUBSCRIPTION: process.env.HAS_SUBSCRIPTION,
  };
};

const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const publicConfigs = getPublicConfigs(context);
  return {
    props: {
      publicConfigs,
    },
  };
};

export default getServerSideProps;
