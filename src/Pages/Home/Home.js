import React, { useEffect, useRef } from "react";
import "./home.scss";
import Logo from "../../Assets/Img/logo.svg";
import { Link } from "react-router-dom";

export default function Home() {
  const firstImgRef = useRef(null);
  const secondImgRef = useRef(null);
  const heroRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    document.onmouseover = (e) => {
      console.log(e.target);
    };
  }, []);
  return (
    <div className="outer__wrapper">
      <header className="header wrapper" ref={headerRef}>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__links" to="about">
                about us
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__links" to="service">
                our services
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__links" to="/">
                <img className="nav__logo" src={Logo} alt="Logo" />
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__links" to="portfolio">
                portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__links" to="contacts">
                our contacts
              </Link>
            </li>
          </ul>
        </nav>
        <section className="hero" ref={heroRef}>
          <h1 className="hero__heading">
            Together, we share the ambition create beautiful sustainable and
            usableinteractive discussions
          </h1>
          <button className="hero__btn">Отправить заявку</button>
          <div className="hero__back-linear1" ref={firstImgRef}>
            <div className="hero__background1"></div>
            <div className="hero__background2"></div>
            <div className="hero__background3"></div>
            <div className="hero__background4"></div>
          </div>
          <div className="hero__back-linear2" ref={secondImgRef}>
            <div className="hero__background5"></div>
            <div className="hero__background6"></div>
            <div className="hero__background7"></div>
            <div className="hero__background8"></div>
          </div>
        </section>
      </header>
      <main className="main">
        <section className="directions">
          <div className="container">
            <div className="directions__top">
              <div className="directions__info">
                <h2 className="directions__heading">Наше направлении</h2>
                <p className="directions__text">
                  Using videos, quizzes, and interactive discussions, you’ll
                  learn the value of user research in the design phase and
                  explore techniques for gathering m
                </p>
              </div>
              <button className="directions__btn">Отправить заявку</button>
            </div>
            <ul className="directions__list">
              <li className="directions__item">
                <div className="directions__item-info">
                  <h3 className="directions__item-heading">ProNews</h3>
                  <p className="directions__item-text">
                    Using videos, quizzes, and interactive discussions, you’ll
                    learn the value of user research in the design phase and
                    explore techniques for gathering m
                  </p>
                </div>
              </li>
              <li className="directions__item">
                <div className="directions__item-info">
                  <h3 className="directions__item-heading">ProNews</h3>
                  <p className="directions__item-text">
                    Using videos, quizzes, and interactive discussions, you’ll
                    learn the value of user research in the design phase and
                    explore techniques for gathering m
                  </p>
                </div>
              </li>
              <li className="directions__item">
                <div className="directions__item-info">
                  <h3 className="directions__item-heading">ProNews</h3>
                  <p className="directions__item-text">
                    Using videos, quizzes, and interactive discussions, you’ll
                    learn the value of user research in the design phase and
                    explore techniques for gathering m
                  </p>
                </div>
              </li>
              <li className="directions__item">
                <div className="directions__item-info">
                  <h3 className="directions__item-heading">ProNews</h3>
                  <p className="directions__item-text">
                    Using videos, quizzes, and interactive discussions, you’ll
                    learn the value of user research in the design phase and
                    explore techniques for gathering m
                  </p>
                </div>
              </li>
              <li className="directions__item">
                <div className="directions__item-info">
                  <h3 className="directions__item-heading">ProNews</h3>
                  <p className="directions__item-text">
                    Using videos, quizzes, and interactive discussions, you’ll
                    learn the value of user research in the design phase and
                    explore techniques for gathering m
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="poart">
          <div className="container">
            <div className="poart__info">
              <h2 className="poart__heading">
                Proart центр эффектного искуства
              </h2>
              <p className="poart__text">
                Using videos, quizzes, and interactive discussions, you’ll learn
                the value of user research in the design phase and explore
                techniques for gathering m
              </p>
              <button className="poart__btn">заказать проект</button>
            </div>
            <img className="poart__image" src="" alt="" />
          </div>
        </section>
      </main>
    </div>
  );
}
