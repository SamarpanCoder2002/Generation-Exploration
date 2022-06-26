import BaseCommonSection from "../base";
import DownloadApp from "../../img/download.png";

const AboutUsSection = () => {
  return (
    <BaseCommonSection>
      <div className="h-screen pt-20 container mx-auto text-center">
        <div className="text-2xl font-semibold">About Us</div>
        <div className="md:text-lg mt-5 mx-5 md:mx-0">
          Generation is a privacy-focused user-friendly free messaging app, that
          helps people to connect without compromising data security. Creator of
          this app is not an organization. It's made by an Individual,
          <span
            className="cursor-pointer font-semibold mx-1 hover:underline text-blue-600"
            onClick={() =>
              window.open("https://samarpandasgupta.com", "_blank")
            }
          >
            Samarpan Dasgupta
          </span>
          . Generation mainly focuses to make communication easier with
          maintaining privacy. A Private, Secure, End-to-End Encrypted Messaging
          app that helps you to connect with your connections without any Ads,
          promotion. No other third party person, organization, or even
          Generation Team can't read your messages.
        </div>

        <div className="flex justify-center mt-10">
          <img
            src={DownloadApp}
            alt="Download Generation App From Play Store"
            className="cursor-pointer w-48 lg:w-52 2xl:w-60"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.samarpandasgupta.generation",
                "_blank"
              )
            }
          />
        </div>
      </div>
    </BaseCommonSection>
  );
};

export default AboutUsSection;
