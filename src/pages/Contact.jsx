import React from "react";
import ContactForm from "../components/Forms/ContactForm"; // Assuming you have a ContactForm component
export function Contact() {
  return (
    <>
      <div className="flex items-center justify-between px-10 py-3  mb-2">
        <ContactForm />
      </div>
    </>
  );
}
