"use client";
import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { FormEvent, useRef, useState } from "react";
import HolidayHome from "./Inputs/HolidayHome";
import Adults from "./Inputs/Adults";
import Children from "./Inputs/Children";
import { IoIosSend } from "react-icons/io";
import DataRangeComponent from "./Inputs/DateRangeComponent";
import emailjs from "@emailjs/browser";
import { MuiTelInput } from "mui-tel-input";
import "./style.css";
import { useLocale } from "next-intl";
import { getContactData } from "@/lib/contact";

function ContactForm() {
  const form = useRef(null);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [value, setValue] = React.useState("");
  const localeActive = useLocale();
  const ContactData = getContactData(localeActive);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessageSent(true);

    setTimeout(() => {
      setMessageSent(false);
    }, 10000);
    if (form.current) {
      emailjs
        .sendForm("service_jgpc6ko", "template_76f692g", form.current, {
          publicKey: "x1heB8vixoZsmR2Mh",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setEmail("");
            setValue("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="rounded-md px-6 py-8 custom_border shadow-md bg-gray-100">
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <div className="flex flex-col sm:flex-row w-full items-end">
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <TextField
              required
              id="outlined-required"
              name="from_name"
              className="w-full bg-white"
              InputLabelProps={{
                className: "!font-Bold ",
              }}
              label="Name"
              size="small"
            />
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <TextField
              required
              id="outlined-required"
              className="w-full bg-white rounded-md"
              InputLabelProps={{
                className: "!font-Bold",
              }}
              name="user_email"
              type="email"
              label="Email:"
              size="small"
              style={{
                border: isValidEmail ? "" : "1px solid red",
              }}
            />
            {!isValidEmail && (
              <p style={{ color: "red" }}>Please enter a valid email address</p>
            )}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full items-end">
          <div className="w-full sm:w-1/2 px-2 mb-4 phone_input">
            <InputLabel id="outlined-required" className="font-Bold">
              {ContactData.data[0].phone}
            </InputLabel>
            <MuiTelInput
              id="outlined-required"
              value={value}
              required
              onChange={handleChange}
              className="w-full bg-white rounded-md h-[40px]"
              defaultCountry="US"
            />
          </div>
          <div className="w-full sm:w-1/2 mb-4 px-2">
            <HolidayHome />
          </div>
        </div>

        <div className="flex items-end mb-4">
          <div className="w-1/2 px-2">
            <Adults />
          </div>
          <div className="w-1/2 px-2">
            <Children />
          </div>
        </div>
        <div>
          <DataRangeComponent />
        </div>
        <div className="flex w-full mb-4 px-2 ">
          <TextField
            InputLabelProps={{
              className: "!font-Bold",
            }}
            id="filled-multiline-static"
            label="Inquiry"
            className="bg-white w-full !font-Bold"
            multiline
            rows={5}
            name="message"
            variant="outlined"
            required
          />
        </div>
        <p className="text-xs mb-4 text-grey3">
          {/* {ContactData.data[0].des} */}
          The content of this form will be sent directly to the e-mail address
          of the owner of accommodation and is used exclusively for sending
          inquiries about booking of listed property.
        </p>
        <div className="px-4">
          <Button
            type="submit"
            variant="contained"
            className={`${
              messageSent
                ? "bg-[#EDF7ED] hover:bg-[#EDF7ED]"
                : "!bg-yellow hover:bg-yellow"
            } w-full tracking-widest text-base font-Bold py-3`}
          >
            {messageSent ? (
              <Alert severity="success" className="">
                {/* {ContactData.data[0].sent} */}
                Successfully sent
              </Alert>
            ) : (
              <>
                {/* {ContactData.data[0].button} */}
                Send Inquiry
                <IoIosSend className="text-2xl" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
