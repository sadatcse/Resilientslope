import React from 'react';
import { useRef } from "react";

import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_uzkvpvg",
            "template_a5m3vbr",
            form.current,
            "I54EHbb6_LwYWwU4e"
          )
          .then(
            (result) => {
              form.current.reset();
              Swal.fire({
                icon: "success",
                title: "Message Sent",
                text: "Your message has been sent successfully!",
              });
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

    return (
        <div className="min-h-screen my-auto mt-5 md:mt-10 lg:mt-20">
            <div className="flex justify-center items-center bg-blue-50">
                <div className="container mx-auto my-4 px-4 lg:px-20">
                    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-bold uppercase text-blue-700 text-3xl md:text-4xl lg:text-5xl">
                                Send us a message
                            </h1>
                        </div>

                        <form ref={form} onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <input
                                    className="w-full mt-2 p-3 bg-transparent border-2 text-blue-700 rounded-lg focus:outline-none"
                                    type="text"
                                    name="from_name"
                                    placeholder="First Name*"
                                    required
                                />
                                <input
                                    className="w-full mt-2 p-3 bg-transparent border-2 text-blue-700 rounded-lg focus:outline-none"
                                    type="text"
                                    placeholder="Last Name*"
                                />
                                <input
                                    className="w-full mt-2 p-3 bg-transparent border-2 text-blue-700 rounded-lg focus:outline-none"
                                    type="email"
                                    name="user_email"
                                    placeholder="Email*"
                                />
                                <input
                                    className="w-full mt-2 p-3 bg-transparent border-2 text-blue-700 rounded-lg focus:outline-none"
                                    type="text"
                                    placeholder="Subject*"
                                />
                            </div>

                            <div className="my-4">
                                <textarea
                                    placeholder="Message*"
                                    name="message"
                                    required
                                    className="w-full h-32 bg-transparent border-2 text-blue-700 mt-2 p-3 rounded-lg focus:outline-none"
                                ></textarea>
                            </div>

                            <div className="my-2 w-1/2 lg:w-1/4">
                                <button
                                    type="submit"
                                    className="uppercase text-xs md:text-sm lg:text-lg font-bold tracking-wide bg-blue-700 text-white p-2 rounded-lg w-full focus:outline-none"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-blue-700 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <h1 className="font-bold uppercase text-3xl md:text-4xl my-4">
                                Drop in our office
                            </h1>
                            <p className="text-gray-100 text-xs md:text-sm">
                                dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt
                                arcu diam, eu feugiat felis fermentum id. Curabitur vitae nibh
                                viverra, auctor turpis sed, scelerisque ex.
                            </p>

                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Main Office</h2>
                                    <p className="text-gray-100 text-xs md:text-sm">
                                    2000 E Lamar Blvd, Suite 600, Arlington, TX, 76006-7361
                                    </p>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-2/3">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-gray-100 text-xs md:text-sm">
                                        Tel: 817-319-0079
                                    </p>
                                    <p className="text-gray-100 text-xs md:text-sm">
                                    Email: info@resilientslope.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
