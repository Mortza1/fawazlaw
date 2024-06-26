import axios from "axios";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const activeLanguage = i18n.language; // 'en' or 'ar'

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } 
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePhoneChange = (value, data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      phone_number: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://api.fawazlaw.sa/api/contact-us",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle successful response
      console.log("Contact sent successfully:", response.data);
      toast.success("Contact Sent");
      // Reset form data or navigate to a different route
      setFormData({ name: "", email: "", phone_number: "", message: "" });
      // navigate("/articles");
    } catch (error) {
      console.error("Error sending contact", error);
      setError(error.response.data.message || "Failed to send contact.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" w-full lg:py-16">
      <div className=" lg:w-[60%] w-[100%] mx-auto justify-center items-center flex flex-col gap-4 ">
        <div className=" flex flex-col lg:gap-4 gap-2 justify-center items-center">
          <h1 className="font-bold text-[24px] lg:text-[50px] ">
            {t('contactTitle')}
          </h1>
          <p className="text-lg font-normal">{t('contactSubtitle')}</p>
        </div>
        <div className=" flex flex-col w-[90%] items-end border rounded-md px-4 py-4">
          <div className=" w-full items-end justify-end flex flex-col pb-5">
            <h1>{t('formTitle')}</h1>
          </div>
          <h1 className="pb-1">{t('fullName')}</h1>
          <div className="w-full gap-2 flex flex-col">
            <form
              onSubmit={handleSubmit}
              className=" w-full flex justify-end items-end text-end flex-col gap-4"
            >
              <label className=" justify-end text-end w-full flex items-center gap-2 hover:border px-4 py-2 active:border rounded-lg outline outline-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="grow outline-none bg-transparent border-none text-end justify-end w-full"
                  placeholder={t('fullName')}
                  required
                />
              </label>
              <div className=" w-full gap-2 flex flex-col">
                <p>{t('emailForm')}</p>
                <label className=" justify-end text-end w-full flex items-center gap-2 hover:border px-4 py-2 active:border rounded-lg outline outline-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="grow outline-none bg-transparent border-none text-end justify-end w-full"
                    placeholder={t('emailForm')}
                    required
                  />
                </label>
              </div>

              <div className="w-full gap-2 flex flex-col">
                <p>{t('phone')}</p>
                <label
                  htmlFor=""
                  className="justify-start text-end w-full flex items-center gap-2 hover:border px-4 py-2 active:border rounded-lg outline outline-1"
                >
                  <div className=" flex justify-start items-start left-0">
                    <PhoneInput
                      country={"sa"}
                      value={formData.phone_number}
                      onChange={handlePhoneChange}
                      inputStyle={{
                        border: "none",
                        gap: 0,
                        justifyContent: "start",
                        width: "200px",
                      }}
                      className="grow outline-none bg-transparent border-none text-end justify-end w-full"
                      name="phone_number"
                      required
                    />
                  </div>
                </label>
              </div>
              <div className=" w-full gap-2 flex flex-col">
                <p>{t('message')}</p>
                <label className=" justify-end text-end w-full flex items-center gap-2 hover:border px-4 py-2 active:border rounded-lg outline outline-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="grow lg:max-h-[200px] outline-none bg-transparent border-none text-end justify-end w-full"
                    placeholder={t('message')}
                    required
                  />
                </label>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className=" btn bg-[#003E6F] hover:bg-[#b6953e] w-full text-white "
                disabled={isLoading}
              >
                {isLoading? "Loading..." : t('send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
