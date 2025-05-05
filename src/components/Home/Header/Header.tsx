"use client"
import React, { useState } from 'react';
import style from './Heder.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
  const { data: session } = useSession();
  const [isFormVisible, setFormVisible] = useState(false);

  const handleOpenForm = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <header className={style.header}>
      <div className={style.logo}> 
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </Link>
      </div>

      <div className={style.navigation}>
        <span><Link href="/">Main Page</Link></span>
        <span><Link href="/Categories">Categories</Link></span>
        <span><Link href="/All_Product">All products</Link></span>
        {session?.user ? (
      <span onClick={() => signOut()}>Logout</span>
    ) : (
      <span onClick={() => signIn()}>Login</span>
    )}
      </div>

      <div className={style.purchases}>
        <Link href="/basket">
          <Image src="/icon.svg" alt="Basket" width={40} height={40} />
        </Link>
      </div>

      {isFormVisible && !session && (
        <div className={style.form_container}>
          <form onSubmit={(e) => { e.preventDefault(); handleCloseForm(); }}>
            <h2>Регистрация</h2>
            <input type="text" name="name" placeholder="Имя" />
            <input type="tel" name="phone" placeholder="Номер телефона" />
            <input type="email" name="email" placeholder="Электронная почта" />
            <button type="submit">Отправить</button>
          </form>
        </div>
      )}
    </header>
  );
}
