import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

const ButtonWithFaIcon = ({
  icon,
  bgColor,
  bgHoverColor,
  bgTextColor,
  bgTextHoverColor,
  buttonText,
  width,
}) => {
  const colors = {
    black: "bg-black",
    white: "bg-white",
  };

  const textColors = {
    black: "text-black",
    white: "text-white",
  };

  const hoverColors = {
    black: "hover:bg-black",
    white: "hover:bg-white",
  };

  const textHoverColors = {
    black: "hover:text-black",
    white: "hover:text-white",
  };

  return (
    <div>
      <button
        className={`${colors[bgColor]} ${textColors[bgTextColor]} flex flex-row  items-center justify-center gap-2 p-2 rounded ${hoverColors[bgHoverColor]} ${textHoverColors[bgTextHoverColor]} ${width} border border-black`}
        type="submit"
      >
        {icon ? <FontAwesomeIcon icon={icon} className="my-1" /> : ""}
        {buttonText}
      </button>
    </div>
  );
};

const ContactUsContent = () => {
  const onSubmit = (event) => {
    event.preventDefault();

    // Accessing form field values
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Logging the values
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clearing the form fields (optional)
    event.target.elements.name.value = "";
    event.target.elements.email.value = "";
    event.target.elements.message.value = "";
  };
  return (
    <div className="flex flex-col w-[75vw] mx-auto gap-2">
      <div className="contact-us-heading">
        <h1 className="font-black text-4xl">CONTACT US</h1>
      </div>

      <div className="contact-us-content text-sm w-[70%]">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </div>

      <div className="contact-us-body flex md:flex-row flex-col  gap-8 w-[100%]">
        <div className="contact-form  md:w-[40%] md:w-[100%]">
          <form
            action="submit"
            className="flex flex-col gap-2 w-[100%] p-2"
            onSubmit={onSubmit}
          >
            <div className="contact-form-button flex flex-col gap-4 w-[80%]">
              <div className="from-button-row-1 flex flex-row gap-4 justify-between">
                <ButtonWithFaIcon
                  icon={faMessage}
                  bgColor={"black"}
                  bgTextColor={"white"}
                  buttonText={"VIA SUPPORT CHAT"}
                  bgHoverColor={"white"}
                  bgTextHoverColor={"black"}
                />
                <ButtonWithFaIcon
                  icon={faPhone}
                  bgColor={"black"}
                  bgTextColor={"white"}
                  buttonText={"VIA CALL"}
                  bgHoverColor={"white"}
                  bgTextHoverColor={"black"}
                />
              </div>
              <div className="form-button-row-2">
                <ButtonWithFaIcon
                  icon={faMessage}
                  bgColor={"white"}
                  bgTextColor={"black"}
                  buttonText={"VIA EMAIL FORM"}
                  bgHoverColor={"black"}
                  bgTextHoverColor={"white"}
                  width={"w-[100%]"}
                />
              </div>
            </div>

            <div className="from-input-box ">
              <div className="">
                <fieldset className="border border-black p-1">
                  <legend className="mx-4">Name</legend>
                  <input
                    type="text"
                    name="name"
                    className="w-[100%] p-1 h-[100%]"
                  />
                </fieldset>
              </div>
              <div className="">
                <fieldset className="border border-black p-1">
                  <legend className="mx-4">E-Mail</legend>
                  <input
                    type="text"
                    name="email"
                    className="w-[100%] p-1 h-[100%]"
                  />
                </fieldset>
              </div>
              <div className="">
                <fieldset className="border border-black p-1">
                  <legend className="mx-4">Text</legend>
                  <textarea
                    name="message"
                    id=""
                    cols="20"
                    rows="8"
                    className="w-[100%]"
                  ></textarea>
                </fieldset>
              </div>
            </div>

            <div className="submit-button grid justify-items-end">
              <ButtonWithFaIcon
                bgColor={"black"}
                bgTextColor={"white"}
                buttonText={"SUBMIT"}
                bgHoverColor={"white"}
                bgTextHoverColor={"black"}
              />
            </div>
          </form>
        </div>

        <div className="contact-us-image">
          <object
            data="/svg/Service 24_7-pana 1.svg"
            className="h-[100%] w-[100%] object-cover"
          ></object>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;
