"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Soon",
    description: `Soon Baby !`,
    link: "https://github.com/H1ouredWish/profile",
    images: [
      "/assets/projects-screenshots/aidockerfileoptimizer/1.png",
      "/assets/projects-screenshots/aidockerfileoptimizer/2.png",
      "/assets/projects-screenshots/aidockerfileoptimizer/3.png",
    ],
  },
  {
    id: 2,
    name: "Soon",
    description: `Soon Baby !`,
    link: "https://github.com/H1ouredWish/profile",
    images: [
      "/assets/projects-screenshots/financeme/1.png",
      "/assets/projects-screenshots/financeme/2.png",
      "/assets/projects-screenshots/financeme/3.png",
      "/assets/projects-screenshots/financeme/4.png",
      "/assets/projects-screenshots/financeme/5.png",
      "/assets/projects-screenshots/financeme/6.png",
      "/assets/projects-screenshots/financeme/7.png",
      "/assets/projects-screenshots/financeme/8.png",
      "/assets/projects-screenshots/financeme/9.png",
      "/assets/projects-screenshots/financeme/10.png"
    ],
  },
  {
    id: 3,
    name: "Soon",
    description: `Soon Baby !`,
    link: "https://github.com/H1ouredWish/profile",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
    ],
  },
  {
    id: 4,
    name: "Soon",
    description: `Soon Baby !`,
    link: "https://github.com/H1ouredWish/profile",
    images: [
      "/assets/projects-screenshots/smartparkingassitant/01.jpeg",
      "/assets/projects-screenshots/smartparkingassitant/03.jpeg",
      "/assets/projects-screenshots/smartparkingassitant/04.jpeg",

    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
