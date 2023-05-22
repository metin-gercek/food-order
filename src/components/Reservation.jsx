import React from "react";
import Title from "./ui/Title";
import Input from "./form/Input";

const Reservation = () => {
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Enter your full name...",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Phone Number",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email Address",
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many People?",
    },
    {
      id: 5,
      name: "persons",
      type: "datetime-local",
      placeholder: "How Many People?",
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10">Book A Table</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10">
        <div className="lg:flex-1 w-full">
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
              <Input key={input.id} {...input} />
            ))}
          </div>
          <button className="btn-primary mt-4">BOOK NOW</button>
        </div>
        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15877.904489172613!2d24.92671311118586!3d60.1685150968224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a34d032778f%3A0x2600b5523c1977b1!2sKamppi%2C%20Helsinki!5e0!3m2!1str!2sfi!4v1684749390389!5m2!1str!2sfi"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
