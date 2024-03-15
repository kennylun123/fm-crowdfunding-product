"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DialogProps } from "@/app/lib/definitions";
import CloseButton from "./CloseButton";
import DialogPledgeOption from "./DialogPledgeOption";
import CustomButton from "./CustomButton";

const Dialog = ({
  title,
  content,
  pledges,
  selectedOpt,
  setData,
  closeModal,
}: DialogProps) => {
  const modalRef = useRef<any>(null);
  const [mounted, setMounted] = useState(false);

  // State to hold the value of the selected radio input
  const [selectedOptionId, setSelectedOptionId] = useState<string>(selectedOpt);
  const [input, setInput] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const defaultOptions = [
    {
      id: "0",
      title: "Pledge with no reward",
      content:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      price: 0,
      qty: 0,
    },
    ...pledges,
  ];

  useEffect(() => {
    // use mounted state to force this component to render on client browser only
    // maybe not the best practice
    setMounted(true);
    document.addEventListener("mousedown", checkClickOutside);

    return () => {
      setMounted(false);
      document.removeEventListener("mousedown", checkClickOutside);
    };
  }, []);

  // Function to check if click outside of dialog
  const checkClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionId(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setData((prev) => {
      const { pledges } = prev;
      const updatedData = pledges.map((pledge) => {
        if (pledge.id === selectedOptionId && pledge.qty > 0) {
          return { ...pledge, qty: pledge.qty - 1 };
        }
        return pledge;
      });

      return {
        status: {
          backed: prev.status.backed + input,
          backers: prev.status.backers + 1,
        },
        pledges: updatedData,
      };
    });

    setSubmitted(true);
  };

  return (
    mounted &&
    createPortal(
      <div
        id="pledge_dialog"
        className="fixed inset-0 grid place-content-center bg-black/40 px-6 pt-36 pb-10"
        aria-hidden={mounted ? "true" : "false"}
      >
        {!submitted ? (
          <form
            ref={modalRef}
            className="dialog__form-container"
            onSubmit={handleSubmit}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg lg:text-xl font-bold">
                Back this project
              </h2>
              <CloseButton handleClose={closeModal} />
            </div>
            <p>{content}</p>

            <fieldset className="space-y-6">
              {defaultOptions.map((item) => (
                <DialogPledgeOption
                  key={item.title}
                  pledge={item}
                  selectedOptionId={selectedOptionId}
                  handleOptionChange={handleOptionChange}
                  input={input}
                  setInput={setInput}
                />
              ))}
            </fieldset>
          </form>
        ) : (
          <div ref={modalRef} className="dialog__thanks-container">
            <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
                <path
                  stroke="#FFF"
                  strokeWidth="5"
                  d="M20 31.86L28.093 40 44 24"
                />
              </g>
            </svg>
            <h2 className="mt-6 lg:mt-8 font-bold text-lg lg:text-xl">
              Thanks for your support!
            </h2>
            <p className="mt-6 lg:leading-7">
              {`Your pledge brings us one step closer to sharing ${title} worldwide. You will get an email once our
                campaign is completed.`}
            </p>
            <CustomButton
              title="Got it!"
              containerStyle="mt-8"
              handleClick={closeModal}
              type="button"
            />
          </div>
        )}
      </div>,
      document.body
    )
  );
};

export default Dialog;
