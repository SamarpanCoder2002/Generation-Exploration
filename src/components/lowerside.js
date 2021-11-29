const LowerSide = () => {
  return (
    <div
      className="mt-10 w-full bg-background"
      data-aos="fade-up"
      data-aos-duration="1400"
      data-aos-delay="1500"
    >
      <DesignFooter />
    </div>
  );
};

const DesignFooter = () => {
  return (
    <div className="container mx-auto p-5 px-10">
      {/* Lower Fist Section   */}
      <div className="grid lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="text-md md:text-2xl 2xl:text-4xl">
            🙋 Designed and Developed by
            <span className="font-bold" style={{ letterSpacing: "0.6px" }}>
              {" "}
              Samarpan Dasgupta
            </span>
          </p>
          <br />
        </div>

        <div className="text-center lg:text-right my-auto mt-5 lg:mt-0">
          <i
            className="bx bxl-github bx-lg mr-10 cursor-pointer"
            style={{ color: "#171515" }}
            onClick={() => {
              window.open("https://github.com/SamarpanCoder2002/Generation", "_blank");
            }}
          ></i>
          <i className="bx bxl-youtube bx-lg cursor-pointer" style={{ color: "red" }}
          onClick={() => {
            window.open("https://youtube.com/playlist?list=PLn4o1Gy6eg752X6ZaJ7UL55kLJ235laOg", "_blank");
          }}
          ></i>
        </div>
      </div>

      {/* Learning Link */}
      <div className="mt-10 lg:mt-5 text-center">
        <button
          className="transition duration-500 border-0 text-lg h-12 2xl:h-20 text-center w-74 md:w-80 2xl:w-auto text-white px-3 rounded-md btn hover:shadow-2xl"
          onClick={() =>
            window.open(
              "https://youtube.com/playlist?list=PLn4o1Gy6eg752X6ZaJ7UL55kLJ235laOg",
              "_blank"
            )
          }
        >
          {" "}
          <span className="2xl:text-3xl">
            I want to Learn how to make it
          </span>{" "}
        </button>
      </div>

      {/* Copyright Link */}
      <p className="text-center mt-5">
        &copy; {new Date().getFullYear()} - Generation
      </p>
    </div>
  );
};

export default LowerSide;
