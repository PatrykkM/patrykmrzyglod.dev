import { motion } from "framer-motion";

const ContactMe = () => {
  const formVariants = {
    offscreen: {
      x: -100,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div className="bg-Grey-Wave dark:bg-light-mode-items" id="Contact">
      <section className="text-white bg-Grey-Wave p-5 -mt-px sm:px-10 lg:max-w-7xl lg:m-auto lg:px-16 lg:justify-start dark:bg-light-mode-items">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={formVariants}
          className="bg-main-dark mt-18 p-7 rounded-xl dark:bg-main-light"
        >
          <div className="uppercase text-sm text-gray-400 mt-2 dark:text-gray-500">
            Get in touch
          </div>
          <div className="text-3xl font-bold my-2 sm:text-5xl dark:text-black">
            {" "}
            Contact
          </div>
          <div className="mt-4 text-gray-400 dark:text-gray-500">
            I appreciate any communication you can provide via
            <a href="">email</a>, <a href="">LinkedIn</a>, or the form provided
            below.
          </div>
          <form action="" className="mt-5 font-me dark:text-gray-800">
            <div className="mt-8">
              <p>Your Name</p>
              <input
                type="text"
                className="bg-dynamic-menu py-4  px-3 rounded-lg mt-3 w-full dark:bg-light-mode-items"
                placeholder="What's your name"
              />
            </div>
            <div className="mt-8">
              <p>Your Email</p>
              <input
                type="email"
                className="bg-dynamic-menu py-4  px-3 rounded-lg mt-3 w-full dark:bg-light-mode-items"
                placeholder="What's your email"
              />
            </div>
            <div className="mt-8">
              <p>Your Message</p>
              <textarea
                className="bg-dynamic-menu py-4 px-3 rounded-lg mt-3 w-full flex justify-start items-start dark:bg-light-mode-items"
                placeholder="What's your message"
              />
            </div>
            <button
              type="submit"
              className="bg-light-blue px-7 py-3 rounded-2xl mt-7 font-medium dark:text-white "
            >
              Send
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactMe;