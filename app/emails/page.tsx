"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { client } from "./client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+33 7 82 70 97 22",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "widewebagency@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: "15 rue Victor Hugo 75016",
  },
];

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loadding, setLoadding] = useState(false);
  const [formData, setFormData] = useState({ name: '', email:'', message:'', phone: '', select:''})

  const { name, email, message, phone, select } = formData;

  const handleChangeInput = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoadding(true);


    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
      phone: phone,
      select: select,
    }

    // client.create(contact)
    // .then(() => {
    //   setLoadding(false);
    //   setIsFormSubmitted(true);
    // })
  }
 
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {

      emailjs
      .sendForm(
        "service_j728cdh",
         "template_uh5qrcu",
          formRef.current,
          "X48ty5dOSBAnQPCUz"
        )
      .then(
        (result) => {
          setSuccess(true)
        },
         (error) => {
          setError(true)
        }
      );
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 bg-[#1c1c22]"
    >
      
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          {!isFormSubmitted ? 
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl">
                Travaillons <span className="text-purple">ensemble</span>
              </h3>
              <p className="text-white/60">
                Contactez-nous dès maintenant pour créer un site web
                exceptionnel et un logo qui vous démarque. Faisons de votre
                vision une réalité dès aujourd&apos;hui!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" required placeholder="Prénom" name="firstName" />
                <Input type="lastname" required placeholder="Nom" name="LastName" />
                <Input type="email" required placeholder="Adresse Email" name="email" />
                <Input type="phone" required placeholder="Téléphone" name="phone" />
              </div>
              {/* select */}
              <Select required name="select">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>Selectionnez un service</SelectGroup>
                  <SelectItem value="est">Site Internet</SelectItem>
                  <SelectItem value="cst">UI/UX Design</SelectItem>
                  <SelectItem value="mst">SEO</SelectItem>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                required
                placeholder="Tapez votre message ici."
                value={message}
                onChange={handleChangeInput}
                name="message"
              />
              {/* btn */}
              <Button 
              size="lg" 
              className="max-w-40"
              onClick={handleSubmit}
              >
                {loadding ? 'Envoi' : 'Envoyer le message'}
              </Button>
              {error && "Error"}
              {success && "Succès"}
            </form>
          </div>
          : <div>
            <h3 className="text-4xl">
            Merci de nous avoir contactés !
            </h3>
          </div>}
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#CBACF9] rounded-xl flex items-center justify-center">
                      <div className="text-28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
