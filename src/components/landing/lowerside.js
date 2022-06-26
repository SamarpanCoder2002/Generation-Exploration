import { useNavigate } from "react-router";

const LowerSide = () => {
  return (
    <div
      className="mt-10 w-full bg-background"
      data-aos="fade-up"
      data-aos-duration="1400"
      data-aos-delay="500"
    >
      <DesignFooter />
    </div>
  );
};

const DesignFooter = () => {

  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-5 px-10">
      {/* Lower Fist Section   */}
      <div className="grid lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="text-md md:text-2xl 2xl:text-4xl">
            🙋 Designed and Developed by
            <span className="font-bold" style={{ letterSpacing: "0.6px" }}>
              {" "}
              <span
                className="cursor-pointer hover:underline"
                onClick={() =>
                  window.open("https://samarpandasgupta.com", "_blank")
                }
              >
                Samarpan Dasgupta
              </span>
            </span>
          </p>
          <br />
        </div>

        <div className="text-center lg:text-right my-auto mt-5 lg:mt-0">
          <i
            className="bx bxl-github bx-lg mr-10 cursor-pointer"
            style={{ color: "#171515" }}
            onClick={() => {
              window.open(
                "https://github.com/SamarpanCoder2002/Generation",
                "_blank"
              );
            }}
          ></i>
          <i
            className="bx bxl-youtube bx-lg cursor-pointer"
            style={{ color: "red" }}
            onClick={() => {
              window.open(
                "https://youtube.com/playlist?list=PLn4o1Gy6eg752X6ZaJ7UL55kLJ235laOg",
                "_blank"
              );
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

      <div className="mt-5">
        <div className="container mx-auto">
          <ul className="flex justify-between text-sm">
            <li className="cursor-pointer hover:underline" onClick={() => navigate("/about-us")}>About us</li>
            <li className="cursor-pointer hover:underline" onClick={() => navigate("/contact-us")}>Contact us</li>
            <li className="cursor-pointer hover:underline" onClick={() => window.open("https://www.freeprivacypolicy.com/live/a376f7bf-96d8-4ef5-9b87-7ac9790decd4", "_blank")}>Terms and Conditions</li>
            <li className="cursor-pointer hover:underline" onClick={() => window.open("https://www.freeprivacypolicy.com/live/cda00b54-5f24-4e7e-aaa0-5303d45d3c28", "_blank")}>Privacy Policy</li>
            <li className="cursor-pointer hover:underline" onClick={() => navigate("/refund")}>Refund</li>
          </ul>
        </div>
      </div>

      {/* Copyright Link */}
      <p className="text-center mt-5">
        Copyright &copy; {new Date().getFullYear()} - Generation
      </p>
    </div>
  );
};

export default LowerSide;
