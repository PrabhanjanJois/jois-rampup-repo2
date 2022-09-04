/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const forgotpassword = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <div>
          <a href="/loginpage" className="BackButton">
            Back
          </a>
          <div className="ForgotText">Forgot your Password</div>
          <div className="ForgotText1">
            Enter your email address, and we’ll send you an <br />
            email with all the instructions.
          </div>
          <div className="greyEmail">Email</div>
          <input className="input3" type="email" name="email" />
          <div className="emailRectangle"></div>
          <button
            className="InstructionButton"
            onClick={() => {
              router.push("/forgot2");
            }}
          >
            <p className="inner-btn">Send Me Instructions</p>
          </button>
          <a href="/loginpage" className="cancelButton">
            Cancel
          </a>
        </div>
      </main>
    </div>
  );
};

export default forgotpassword;