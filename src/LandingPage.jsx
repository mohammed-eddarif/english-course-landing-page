import React, { useState , useEffect } from "react";
import axios from "axios";
import profil from "./images/profil-english.png";
import profil1 from "./images/profil1.png";
import profil2 from "./images/profil2.png";
import { CgProfile } from "react-icons/cg";
import { CgTime } from "react-icons/cg";
import { CgPullClear } from "react-icons/cg";
import Accordion from "./Components/Accordion";
import Humburger from 'hamburger-react'
const LandingPage = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);





  // edarrif

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const pabblyWebhookUrl =
        "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZkMDYzMDA0M2M1MjY5NTUzNzUxM2Ei_pc";

      await axios.post(pabblyWebhookUrl, JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setSubmitMessage(
        "Thank you for your interest! We will contact you soon."
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="all-home">
      <header className={active ? 'activenav' : ''} >
        <div className="container mx-auto flex justify-between px-5 items-center">
          <h1 className="text-3xl font-bold">EnglishMaster</h1>
          <nav>
            <a  href="#home" className="mx-2 hover:underline">
              Home
            </a>
            <a href="#features" className="mx-2 hover:underline">
              Features
            </a>
            <a href="#testimonials" className="mx-2 hover:underline">
              Testimonials
            </a>
            <a href="#pricing" className="mx-2 hover:underline">
              Pricing
            </a>
            <a href="#faq" className="mx-2 hover:underline">
              FAQ
            </a>
            <a href="#contact" className="mx-2 hover:underline">
              Contact
            </a>
          </nav>
          <div className="menu">
          <Humburger toggled={open} toggle={setOpen} size={28} />
        </div>
        </div>
      </header>
         
      {open && (
        <div className="menu-content">
        <nav>
            <a onClick={closeMenu} href="#home" className="mx-2 hover:underline">
              Home
            </a>
            <a onClick={closeMenu}  href="#features" className="mx-2 hover:underline">
              Features
            </a>
            <a onClick={closeMenu}  href="#testimonials" className="mx-2 hover:underline">
              Testimonials
            </a>
            <a onClick={closeMenu}  href="#pricing" className="mx-2 hover:underline">
              Pricing
            </a>
            <a onClick={closeMenu}  href="#faq" className="mx-2 hover:underline">
              FAQ
            </a>
            <a onClick={closeMenu}  href="#contact" className="mx-2 hover:underline">
              Contact
            </a>
          </nav>
        </div>
      )}
      {/* Hero Section */}
      <section id="home">
        <div className="home-info">
          <h1>
            Master English <br /> with Our Expert Courses
          </h1>
          <p className='descrp-home'>
            Unlock new opportunities by learning English with us! 
            Start your journey to fluency today.
          </p>
          <p className="text-[18px]  flex gap-2 text-[#003b7a]" id='contact-us'>
            Contact us for an instant demo class:
          </p>
          <a href="#contact">
            <h2>Join Now</h2>
          </a>
        </div>
        <div className="home-img">
          <img src={profil} alt="" />
        </div>
      </section>
      </div>
      {/* Features Section */}
      <div >
      <div id="features" className="text-center py-12">
        <h2 className="f-title">Why Choose EnglishMaster?</h2>
        <div className="box-all">
        <div className="features-box" >
          <div  className="block w-72 shadow-md p-5 rounded-lg cursor-pointer transform hover:scale-105 ">
            <div className="flex justify-center">
              <CgProfile size={60} />
            </div>
            <h3 className="text-lg text-center text-blue-700">
              Expert Instructors
            </h3>
            <p className="mt-2 text-left text-sm text-gray-600">
              Learn from qualified native English speakers with years of
              teaching experience.
            </p>
          </div>

          <div className="block w-72 shadow-md p-5 rounded-lg cursor-pointer transform hover:scale-105">
            <div className="flex justify-center">
              <CgTime size={60} />
            </div>
            <h3 className="text-lg text-center text-blue-700">
              Flexible Learning Hours
            </h3>
            <p className="mt-2 text-left text-sm text-gray-600">
              Study at your own pace with flexible schedules tailored to your
              needs.
            </p>
          </div>

          <div className="block w-72 shadow-md p-5 rounded-lg cursor-pointer transform hover:scale-105">
            <div className="flex justify-center">
              <CgPullClear size={60} />
            </div>
            <h3 className="text-lg text-center text-blue-700">
              Comprehensive Curriculum
            </h3>
            <p className="mt-2 text-left text-sm text-gray-600">
              Our courses cover all aspects of English, from grammar and
              vocabulary to fluency and confidence.
            </p>
          </div>
        </div>
        </div>
      </div>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="f-title">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="profil-info">
                <img src={profil1} className="profil-image" alt="profil" />
                <p className="font-semibold">
                  - Sarah L., Business Professional
                </p>
              </div>
              <p id="descrp-info" className="mb-4">
                "EnglishMaster has transformed the way I approach learning. The
                courses are engaging, and the instructors truly care about my
                progress. I feel more confident in my business communication."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="profil-info">
                <img src={profil2} className="profil-image" alt="profil" />
                <p className="font-semibold">- Carlos M., University Student</p>
              </div>
              <p id="descrp-info" className="mb-4">
                "I've tried many English courses, but none compare to
                EnglishMaster. The interactive lessons and personalized feedback
                have boosted my confidence tremendously."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      
      <section id="pricing" className="bg-white py-20 ">
        <div className="container mx-auto ">
          <h2 className="f-title">Affordable Pricing Plans</h2>
          
          <div id='prc-box' className=" space-x-8">
            <div id='prc-card' className="bg-gray-100 p-8 rounded-lg shadow-lg text-center border-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
              <p className="text-4xl font-bold mb-4">
                $49<span className="text-sm">/month</span>
              </p>
              <ul className="mb-6 text-left">
                <li>✓ 2 hours of lessons per week</li>
                <li>✓ Access to learning materials</li>
                <li>✓ Weekly progress reports</li>
              </ul>
            </div>
            <div id='prc-card' className="bg-gray-100 p-8 rounded-lg shadow-lg text-center border-4 border-blue-500">
              <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
              <p className="text-4xl font-bold mb-4">
                $89<span className="text-sm">/month</span>
              </p>
              <ul className="mb-6 text-left">
                <li>✓ 5 hours of lessons per week</li>
                <li>✓ Unlimited access to materials</li>
                <li>✓ 1-on-1 tutoring sessions</li>
                <li>✓ Personalized study plan</li>
              </ul>
            </div>
          
          </div>
        </div>
      </section>
      

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-200 py-20">
        <h2 className="f-title">Frequently Asked Questions</h2>
        <div className="flex justify-center w-full">
          <div className="p-4 bg-gray-200 rounded-lg">
            <div className="mt-5 text-lg">
              <Accordion
                title="How long are the lessons?"
                answer="Our standard lessons are 50 minutes long, allowing for a 10-minute break between sessions."
              />
            </div>
            <div className="mt-5 text-lg">
              <Accordion
                title="Can I choose my own schedule?"
                answer="Yes! We offer flexible scheduling options so you can learn at a time that suits you."
              />
            </div>
            <div className="mt-5 text-lg">
              <Accordion
                title="Do I get a certificate after completing the course?"
                answer="Yes, you will receive an official certificate upon successful completion of the course."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <h2 className="f-title">Get More Information</h2>
        <form
          className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Get Started"}
          </button>
          {submitMessage && (
            <p className="mt-4 text-center text-green-600">{submitMessage}</p>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 EnglishMaster. All rights reserved.</p>
          <div className="mt-4">
            <a href="/privacy-policy" className="mx-2 hover:underline">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="mx-2 hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;