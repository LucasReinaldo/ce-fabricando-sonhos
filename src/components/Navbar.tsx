import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdCall, IoMdMail } from "react-icons/io";

import {
  Container,
  Header,
  Menu,
  HamburguerIcon,
  ContactContainer,
  Contact,
} from "@/styles/components/Navbar";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <Container>
        <Link href="#Home">
          <Image src="/logo.png" unsized />
        </Link>
        <Menu open={open}>
          <HamburguerIcon onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
          </HamburguerIcon>
          <div className="items-list">
            <ul>
              <li>
                <Link href="#Home">Home</Link>
              </li>
              <li>
                <Link href="#About">Sobre a creche</Link>
              </li>
              <li>
                <Link href="#Classes">classes</Link>
              </li>
              <li>
                <Link href="#Contact">contato</Link>
              </li>
              <ContactContainer>
                <Contact>
                  <span className="icon">
                    <IoMdCall />
                  </span>
                  <span className="text">48 3259-1928</span>
                </Contact>
                <Contact>
                  <span className="icon">
                    <IoMdMail />
                  </span>
                  <span className="text">cefabricandosonhos@gmail.com</span>
                </Contact>
              </ContactContainer>
            </ul>
          </div>
        </Menu>
      </Container>
    </Header>
  );
};

export default Navbar;
