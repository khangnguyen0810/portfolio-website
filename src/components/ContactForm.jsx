import { useState } from "react";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/khangnguyen081003@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        },
      );
      if (response.ok) {
        setStatus("Success!");
        setTimeout(() => {
          setIsOpen(false);
          setStatus("");
        }, 500);
      } else {
        setStatus("Error sending message.");
      }
    } catch {
      setStatus("Error connecting to server.");
    }
  };

  return (
    <>
      <button
        type="button"
        className="font-istok-web flex scale-[0.85] items-center justify-center rounded-4xl bg-purple-50 p-2 font-bold text-purple-900 hover:cursor-pointer md:scale-[1]"
        onClick={() => setIsOpen(true)}
      >
        Contact Me
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="flex w-[25vw] flex-col overflow-hidden rounded-lg bg-white p-8 shadow-lg">
            <div className="font-istok-web mb-2 text-xl font-bold">
              What project are you looking for?
            </div>

            <form
              onSubmit={handleSubmit}
              className="my-4 flex flex-col gap-y-5"
            >
              <input
                type="text"
                name="Name"
                required
                className="p-4 outline-1 focus:outline-1"
                placeholder="Name"
              />
              <input
                type="email"
                name="Email"
                required
                className="p-4 outline-1 focus:outline-1"
                placeholder="Email"
              />
              <textarea
                name="Message"
                required
                className="w-full p-4 outline-1 focus:outline-1"
                placeholder="How can I help you?"
              ></textarea>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="rounded-md bg-purple-900 px-4 py-2 text-white hover:cursor-pointer"
                >
                  {status || "Send"}
                </button>
                <button
                  type="button"
                  className="text-gray-500 hover:cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
