import { GetServerSideProps, NextPage } from "next";
import { getProviders, signIn as SigninProvider } from "next-auth/react";
import React from "react";
import Header from "../../components/Header";

interface SigninProps {
  providers: Awaited<ReturnType<typeof getProviders>>;
}

const Signin: NextPage<SigninProps> = ({ providers }: SigninProps) => {
  // @ts-ignore
  const { name, id } = providers?.google;

  const handleSignin = () => SigninProvider(id);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center mt-5">
        <img
          className="max-w-6xl object-cover rounded-xl"
          src="https://st.quantrimang.com/photos/image/2021/12/28/Instagram-filter-dau-lau-700-size-480x252-znd.jpg"
          alt=""
        />
        <div className="flex items-center justify-center mt-10">
          <button
            className="p-3 bg-blue-500 rounded-lg text-white font-semibold"
            onClick={handleSignin}
          >
            Signin with {name}
          </button>
        </div>
      </div>
    </>
  );
};

export default Signin;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
