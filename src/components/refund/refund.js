import BaseCommonSection from "../base";

const RefundScreen = () => {
  return (
    <BaseCommonSection>
      <div className="grid place-items-center h-screen">
        <div className="container mx-40 md:mx-auto mt-10 md:mt-0">
          <div className="text-center">
            <div className="md:text-xl">
              We are taking donation from our App{" "}
              <span
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.samarpandasgupta.generation",
                    "_blank"
                  )
                }
              >
                Generation
              </span>
              . This is not mandatory to give donation. It's your choice. We are
              requesting you to donate through app for improving app
              performances with new functionality.
            </div>
            <br />
            <div className="font-semibold tracking-wider">
              Notice: Please keep in mind, Donation is not refundable.
            </div>
          </div>
        </div>
      </div>
    </BaseCommonSection>
  );
};

export default RefundScreen;
