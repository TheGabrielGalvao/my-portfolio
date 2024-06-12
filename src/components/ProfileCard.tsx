import Image from "next/image";
import avatarImg from "@/assets/img/avatar.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationCity, MdWhatsapp } from "react-icons/md";

export const ProfileCard = () => {
  return (
    <div className="text-center flex flex-col gap-sm p-6 bg-primary relative rounded-2xl">
      <div className="w-64 h-64 bg-white rounded-2xl mx-auto overflow-hidden relative -mt-32">
        <Image
          src={avatarImg}
          alt="Avatar"
          className="w-full h-full object-cover"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col gap-xs items-center justify-center">
        <h1 className="text-2xl text-white">Gabriel Galvão</h1>

        <span className="px-xs py-xs w-fit bg-light text-gray-400 font-light rounded-xl">
          Web Developer/Designer
        </span>

        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-secondary hover:text-white"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="text-secondary hover:text-white"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-secondary hover:text-white"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>

      <div className="bg-light p-md rounded-lg text-left flex flex-col gap-sm">
        <a
          className="flex items-center gap-xs cursor-pointer"
          href="https://api.whatsapp.com/send?phone=+5543988578911&text=Olá! Gostaria de mais informações"
          target="_blank"
        >
          <span className="bg-primary p-2 rounded-xl">
            <MdWhatsapp className="text-success" size={32} />
          </span>
          <span className="flex flex-col text-white">
            <small>Whatsapp</small>
            <strong className="text-sm font-thin">(43) 98857-8911</strong>
          </span>
        </a>

        <a
          className="flex items-center gap-xs cursor-pointer"
          href="mailto:gabriel.galvao736@gmail.com"
        >
          <span className="bg-primary p-2 rounded-xl">
            <MdEmail className="text-info" size={32} />
          </span>
          <span className="flex flex-col text-white">
            <small>E-mail</small>
            <strong className="text-sm font-thin">
              gabriel.galvao736@gmail.com
            </strong>
          </span>
        </a>

        <span className="flex items-center gap-xs">
          <span className="bg-primary p-2 rounded-xl">
            <MdLocationCity className="text-secondary" size={32} />
          </span>
          <span className="flex flex-col text-white">
            <small>Cidade</small>
            <strong className="text-sm font-thin">Lupionópolis - PR</strong>
          </span>
        </span>
      </div>
    </div>
  );
};
