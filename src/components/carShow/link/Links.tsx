"use client"

import Link from "next/link";
import styles from "../carShow.module.css";
import Image from "next/image";
import taunus from "../../../../public/Assets/ford-taunus.png";
import mercedes from "../../../../public/Assets/mercedes-benz-300sl.jpg"
import porshe from "../../../../public/porshe-911-turbo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";



export default function Links() {
  const brands = [
    {
      name: "Ford Taunus",
      image: taunus,
      path: "/CAR_SHOW_FRONTEND/public/Assets/ford-taunus.png",
    },
    {
      name: "Mercedes",
      image: mercedes,
      path: "/CAR_SHOW_FRONTEND/public/Assets/mercedes-benz-300sl.jpg",
    },
    {
      name: "Aston Martin",
      image: taunus,
      path: "/CAR_SHOW_FRONTEND/public/Assets/ford-taunus.png",
    },
    {
      name: "Nissan",
      image: taunus,
      path: "/CAR_SHOW_FRONTEND/public/Assets/ford-taunus.png",
    },
    {
      name: "Porsche",
      image: porshe,
      path: "/CAR_SHOW_FRONTEND/public/Assets/porshe-911-turbo.jpg",
    },
    {
      name: "Mazda",
      image: taunus,
      path: "/CAR_SHOW_FRONTEND/public/Assets/ford-taunus.png",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/js/bootstrap.bundle.min');
    }
  }, []);

  return (
    <div className="container mt-5">
      <div id="brandCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {brands.map((link, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={link.name}>
              <Link href={link.path}>
                <div>
                  <Image src={link.image} alt={link.name} width={500} height={300} className="d-block w-100" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{link.name}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#brandCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#brandCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}