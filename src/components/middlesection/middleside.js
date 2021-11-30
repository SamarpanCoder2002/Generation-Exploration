import FeatureCard from "./cards";
import Masonry from "react-masonry-css";

// Images Are not uploaded due to security policy . You can try with your own images. Just make a directory named "img" under src and put images there and update your images path below
import AvailableConnections from "../../img/generation_available_connections_short.png";
import ChatMessageBox from "../../img/generation_img_txt_chat_box.png";
import GenerationActivity from "../../img/generation_activity.png";

const MiddleSide = () => {
  // For Masonry Break Point Management
  const breakpointColumnsObj = {
    default: 2,
    800: 1,
  };

  // Additional Features List Component
  const AdditionalFeaturesList = () => (
    <ul className="mt-5 ">
      <li className="mb-3">
        1. Receive Notification Even When Your App is Off
      </li>
      <li className="mb-3">
        2. Add your favourite photo as your Profile Picture
      </li>
      <li className="mb-3">3. Control Your Notification</li>
      <li className="mb-3">4. Change Chat Background</li>
      <li className="mb-3">5. Send Message to Multiple Connections</li>
      <li className="mb-3">
        6. Profile Picture or Chat Screenshot can't steal, as it's restricted.
      </li>
      <li>And Many More...</li>
    </ul>
  );

  return (
    <div className="mt-10">
      <div
        className="text-4xl md:text-5xl text-center"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        Features
      </div>

      <div className="container mx-auto p-5 2xl:px-10 mt-5">
        {/* For Space Utilization Properly */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          align="center"
        >
          {/* Card 1 */}
          <div>
            <FeatureCard
              title="Communicate With Security"
              body="Chat Messages are End-to-End-Encrypted. No-other third party app or Generation Team can't read your messages."
              imgsrc="https://img.icons8.com/office/50/000000/keyhole-shield.png"
              imgalt="security"
              animation="fade-right"
            />
          </div>

          {/* Card 2 */}
          <div>
            <FeatureCard
              title="Connect With Protection"
              body="Get Connected with send and accept connection
            request. No fear of experiencing random incoming spamming messages."
              imgsrc="https://img.icons8.com/dusk/50/000000/share-2.png"
              imgalt="connect"
              grantImg={AvailableConnections}
              grantImgAlt="Available Connections"
              animation="fade-left"
              makeWidthResize={true}
            />
          </div>

          {/* Card 3 */}
          <div>
            <FeatureCard
              title="Enjoy Free Messaging"
              body="Send Text, Image, Voice, Video, Document and Audio Messages to your favourite one"
              imgsrc="https://img.icons8.com/external-bearicons-outline-color-bearicons/50/000000/external-Message-social-media-bearicons-outline-color-bearicons.png"
              imgalt="message"
              grantImg={ChatMessageBox}
              grantImgAlt="Messaging Demo"
              animation="fade-right"
            />
          </div>

          {/* Card 4 */}
          <div>
            <FeatureCard
              title="Share Moments that Matter"
              body="Share Your Special Moments With Activity Images. Upload Images from Gallery or Take Picture of your sweet moment with camera to share with your connections."
              imgsrc="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-picture-home-and-living-justicon-flat-justicon.png"
              imgalt="message"
              grantImg={GenerationActivity}
              grantImgAlt="Activity"
              animation="fade-left"
            />
          </div>

          {/* Card 5 */}
          <div>
            <FeatureCard
              title="Additional Features that You Wants"
              body={<AdditionalFeaturesList />}
              imgsrc="https://img.icons8.com/nolan/64/filled-like.png"
              imgalt="attractive"
              animation="fade-right"
            />
          </div>
        </Masonry>
      </div>
    </div>
  );
};

export default MiddleSide;
