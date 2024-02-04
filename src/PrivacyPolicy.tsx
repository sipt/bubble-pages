import "./App.css";
import icon from "./assets/icon-white.svg";
import twitter from "./assets/Twitter.svg";
import telegram from "./assets/Telegram.svg";

function PrivatePolicy() {
  return (
    <div className="flex flex-col text-white h-full">
      <div className="flex h-[64px] py-[12px] px-[16px] md:px-[64px] w-full items-center justify-between">
        <div className="flex flex-row">
          <img className="h-[32px]" src={icon} alt="screen short" />
          <div className="font-bold text-white text-2xl ml-4">ChatHarvest</div>
        </div>
        <div className="flex flex-row gap-2">
          <a href="https://twitter.com/sipt_wu">
            <img className="h-[32px] w-[32px]" src={twitter} />
          </a>
          <a href="https://t.me/+dn8dvhHALP9lZmFl">
            <img className="h-[32px] w-[32px]" src={telegram} />
          </a>
        </div>
      </div>
      <div className="w-full flex p-[24px] md:p-[64px] justify-center">
        <div className="flex flex-col gap-4 max-w-[1024px]">
          <h1 className="inline-block text-2xl sm:text-3xl font-extrabold tracking-tight">
            Privacy Policy for ChatHarvest
          </h1>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            Introduction
          </h2>
          <p>
            Welcome to ChatHarvest, the AI-powered chat application designed to
            offer users a seamless conversational experience. This privacy
            policy outlines the types of data we collect, how we use it, and the
            measures we take to protect your information.
          </p>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            What Information Do We Collect?
          </h2>
          <p>
            Usage Data: We collect non-personal usage data that helps us
            understand how users interact with our app. This includes details
            such as frequency of usage, app features accessed, and performance
            metrics.
          </p>
          <p>
            Crash Reports: Our app may collect anonymous crash reports to help
            us improve the stability of the app. These reports contain data
            related to the app&#39;s performance and any errors that may have
            occurred, but they do not include any personal user information.
          </p>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            How Do We Use Your Information?
          </h2>
          <p>
            The information collected by ChatHarvest is used solely for the
            purpose of enhancing the functionality and overall performance of
            the app. We analyze the usage data and crash reports to:
          </p>
          <ol className=" list-disc">
            <li>Identify and fix bugs</li>
            <li>Improve app stability</li>
            <li>Enhance user experience</li>
            <li>Develop new features</li>
          </ol>
          <p>
            We do not use the data for any other purposes, such as advertising,
            marketing, or tracking users across apps and websites.
          </p>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            No Personal Data Association
          </h2>
          <p>
            ChatHarvest does not require user accounts, and therefore, we do not
            collect any personal identification information. The data we collect
            cannot be associated with any specific user, and we make no efforts
            to link this data with individual identities.
          </p>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            Data Sharing
          </h2>
          <p>
            We do not share the data collected with any third parties. The data
            is used exclusively by our development and quality assurance teams
            to enhance the app experience.
          </p>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            Security Measures
          </h2>
          <p>
            We implement industry-standard security measures to protect the data
            we collect from unauthorized access or breach. However, no method of
            transmission over the Internet or electronic storage is 100% secure,
            so we cannot guarantee its absolute security.
          </p>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            Changes to Our Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            with an updated effective date.
          </p>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            Contact Us
          </h2>
          <p>
            If you have any questions about our Privacy Policy, please contact
            us at wxysipt@gmail.com.
          </p>
          <h2 className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight">
            Acknowledgment
          </h2>
          <p>
            By using ChatHarvest, you acknowledge that you have read and
            understood this Privacy Policy.
          </p>
          <br />
          <p>
            <strong>Effective Date: 2024-02-04</strong>
          </p>
        </div>
      </div>
      <div className="min-h-[64px] w-full flex flex-row items-center px-[16px] md:px-[64px]">
        <span>©2023 ChatHarvest</span>
      </div>
    </div>
  );
}

export default PrivatePolicy;
