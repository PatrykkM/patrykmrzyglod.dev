// import Planet3Dmodel from "./Models3D/Planet3Dmodel";

const ContactMe = () => {
  return (
    <section className="text-white bg-Grey-Wave p-5 -mt-px sm:px-10 lg:max-w-7xl lg:m-auto lg:px-16">
      <div className="bg-main-dark  mt-18 p-7 rounded-xl">
        <div className="uppercase text-sm text-gray-400 mt-2 ">
          Get in touch
        </div>
        <div className="text-3xl font-bold my-2 sm:text-5xl"> Contact</div>
        <div className="mt-4 text-gray-400">
          I appreciate any communication you can provide via
          <a href="">email</a>, <a href="">LinkedIn</a>, or the form provided
          below.
        </div>
        <form action="" className="mt-5">
          <div className="mt-8">
            <p>Your Name</p>
            <input
              type="text"
              className="bg-dynamic-menu py-4  px-3 rounded-lg mt-3 w-full"
              placeholder="Whats your name"
            />
          </div>
          <div className="mt-8">
            <p>Your Email</p>
            <input
              type="text"
              className="bg-dynamic-menu py-4  px-3 rounded-lg mt-3 w-full"
              placeholder="Whats your email"
            />
          </div>
          <div className="mt-8 ">
            <p>Your Message</p>
            <input
              type="text"
              className="bg-dynamic-menu py-4  px-3 rounded-lg mt-3 w-full  flex justify-start items-start "
              placeholder="Whats your message"
            />
          </div>
          <button className="bg-light-blue px-7 py-3 rounded-2xl mt-7 font-medium">
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
