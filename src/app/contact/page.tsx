import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | PrayanEnricher",
  description: "We’re here to help! At PrayanEnricher, we value open communication ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get in Touch"
        description="We’re here to help! At PrayanEnricher, we value open communication and are eager to hear from you. Whether you have questions about our services, need support, or want to discuss a potential project, our team is ready to assist you."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
