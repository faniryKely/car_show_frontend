"use client"
import axios from "axios"

import { useEffect, useState } from "react"

type Car = {
    name: string
    model: string
    price: number
    color: string
    power: number
    placeNumber: number
    status: boolean
    image: Image[]
    brand: Brand
    carTypes: {name: string}
    motorTypes: {name: string}
}
type Image ={
    url: string
}
type Brand = {
    name: string
    logoUrl: string
}

export default function CarInfo(props: Car){
    
      return (
        <p>To fetch</p>
      )
}