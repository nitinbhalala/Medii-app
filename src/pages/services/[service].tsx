import React from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import IndividualServicePage from "@/components/service";

interface Props {
  serviceName: string;
}

function ServicePage({ serviceName }: Props) {
  return (
    <main>
      <IndividualServicePage />
    </main>
  );
}

export default ServicePage;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context: GetServerSidePropsContext
) => {
  const { params } = context;

  /* getFilteredData */
  const mainCategory: string = params?.service as string;

  return {
    props: {
      serviceName: mainCategory,
    },
  };
};
