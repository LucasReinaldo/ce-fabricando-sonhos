import React from "react";
import Link from "next/link";
import Image from 'next/image';
import { IoMdCall, IoMdMail } from "react-icons/io";

import { Container, Header } from "@/styles/components/Navbar";

const Navbar: React.FC = () => {
  return (
    <Header>
      <Container>
        <Image src="/logo.png" unsized />
        <nav>
          <ul>
            <li className="active">
              <Link href="#CV">sobre</Link>
            </li>
            <li>
              <Link href="#CV">classes</Link>
            </li>
            <li>
              <Link href="#CV">extra-classes</Link>
            </li>
            <li>
              <Link href="#CV">contato</Link>
            </li>
            <div>
              <div>
                <span className="icon">
                  <IoMdCall />
                </span>
                <p>48 3259-1928</p>
              </div>
              <div>
                <span className="icon">
                  <IoMdMail />
                </span>
                <p>cefabricandosonhos@gmail.com</p>
              </div>
            </div>
          </ul>
        </nav>
      </Container>
    </Header>
  );
};

export default Navbar;
