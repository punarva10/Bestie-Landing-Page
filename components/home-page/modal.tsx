"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import emailjs from "@emailjs/browser";

const Modal = ({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: { target: any; }) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(`Starting to send email with details: ${form}`)

    emailjs
      .send(
        "service_a96z0tl",
        "template_r1tijvr",
        {
          from_name: form.name,
          to_name: "Punarv Dinakar",
          from_email: form.email,
          to_email: "useful.fake.acnt@gmail.com",
          message: form.email,
        },
        "rad1WIRaZO7pN6UiO"
      )
      .then(
        () => {
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
          });
        },
        (error: Error) => {
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );

    setShowModal(false);
  };

  return (
    <div className="card flex justify-content-center">
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogTrigger asChild>
          <button className="button">Join Waitlist</button>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay />
          <DialogContent>
            <DialogHeader className="pb-3">
              <DialogTitle>Join the Waitlist !</DialogTitle>
            </DialogHeader>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="name"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-2 mb-4 border rounded"
              />
              <div className="w-full flex justify-end">
                <Button variant="default" className="bg-green-400">
                  Submit
                </Button>
              </div>
            </form>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};

export default Modal;
