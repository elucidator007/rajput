import React from 'react';

const ContactForm = ({ handleContactButton }) => {
  const handleFormFill = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const payload = Object.fromEntries(data);
    console.log(payload);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#3B1C32] bg-opacity-80">
      <div className="contact-us-form bg-[#3B1C32] bg-opacity-80 p-8 rounded-lg w-full max-w-lg mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-lg">I look forward to speaking with you!</h2>
          <button onClick={handleContactButton} className="text-white text-xl">&times;</button>
        </div>
        <form onSubmit={handleFormFill} className="space-y-4">
          <div>
            <label className="block text-white text-sm mb-2" htmlFor="name">Name *</label>
            <div className="flex space-x-4">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
                className="w-1/2 p-2 rounded"
              />
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
                className="w-1/2 p-2 rounded"
              />
            </div>
          </div>
          <div>
            <label className="block text-white text-sm mb-2" htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-2" htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-white text-sm mb-2" htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 rounded resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;