'use client';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Metrics from '../components/Metrics';
import Foundations from '../components/Foundations';
import Ticker from '../components/Ticker';
import Infrastructure from '../components/Infrastructure';
import Footer from '../components/Footer';
import Background from '../components/Background';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useLayoutEffect(() => {
    // 1. Initial Load Sequence
    const tl = gsap.timeline();

    tl.to("#progress", { width: "100%", duration: 1, ease: "power4.inOut" })
      .from("#hero-title", { y: 300, duration: 1.5, ease: "expo.out" }, "-=0.2")
      .from("#hero-title-2", { y: 300, duration: 1.5, ease: "expo.out" }, "-=1.3")
      .from(".reveal-text", { opacity: 0, y: 20, stagger: 0.1, duration: 1 }, "-=1");

    // 2. Smooth Scroll Progress
    gsap.to("#progress", {
      width: "100%",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3
      }
    });

    // 3. Ticker Parallax
    gsap.to("#ticker", {
      xPercent: -50,
      scrollTrigger: {
        trigger: "#ticker",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // 4. Heavy Block Reveals
    const revealBlocks = document.querySelectorAll('.reveal-block');
    if (revealBlocks.length > 0) {
      revealBlocks.forEach(block => {
        gsap.from(block, {
          scrollTrigger: {
            trigger: block,
            start: "top 90%",
          },
          opacity: 0,
          y: 100,
          duration: 1.5,
          ease: "power4.out"
        });
      });
    }

    // 5. Parallax Hero Elements
    const heroTitle2 = document.querySelector("#hero-title-2");
    if (heroTitle2) {
      gsap.to("#hero-title-2", {
        x: 100,
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []); // Run once on mount

  return (
    <main>
      <Background />
      <Navbar />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[60]">
        <div id="progress" className="h-full bg-blue-500 w-0"></div>
      </div>

      <Hero />
      <Metrics />
      <Foundations />
      <Ticker />
      <Infrastructure />
      <Footer />
    </main>
  );
}
