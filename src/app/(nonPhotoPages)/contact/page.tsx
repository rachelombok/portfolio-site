import ContactForm from "@/components/ContactForm";
const Contact = () => {
  return (
    <div>
      <p className="md:text-5xl text-4xl font-bold my-8 uppercase">
        Contact 📲
      </p>
      <p className="pb-8 md:text-lg text-md text-muted-foreground">
        if you wish to contact me, fill out this form or{" "}
        <a
          className="link underline hover:text-pink-200"
          href="mailto:rachel.ombok@gmail.com?subject=Hey!"
          target="_blank"
          rel="noopener"
        >
          email me.
        </a>
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
