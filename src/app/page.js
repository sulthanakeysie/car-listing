"use client";
import { useState } from "react";
import CarList from "./components/CarList";
import Filter from "./components/Filter";

const carsData = [
  {
    id: 'ABC101',
    carName: "Model S",
    image:"image12.png",
    brandName: "Tesla",
    modelName: "S",
    date: "2023",
  },
  {
    id: 'ABC102',
    carName: "Mustang",
    image:"image9.png",
    brandName: "Ford",
    modelName: "GT",
    date: "2022",
  },
  {
    id: 'ABC103',
    carName: "Civic",
    image:"image7.jpg",
    brandName: "Honda",
    modelName: "EX",
    date: "2021",
  },
  {
    id: 'ABC104',
    carName: "Camry",
    image:"image2.png",
    brandName: "Toyota",
    modelName: "LE",
    date: "2020",
  },
  {
    id: 'ABC105',
    carName: "3 Series",
    image:"image4.png",
    brandName: "BMW",
    modelName: "330i",
    date: "2019",
  },
  {
    id: 'ABC106',
    carName: "A4",
    image:"image5.png",
    brandName: "Audi",
    modelName: "Premium",
    date: "2018",
  },
  {
    id: 'ABC107',
    carName: "Accord",
    image:"image6.png",
    brandName: "Honda",
    modelName: "Sport",
    date: "2021",
  },
  {
    id: 'ABC108',
    carName: "Corolla",
    image:"image.png",
    brandName: "Toyota",
    modelName: "SE",
    date: "2017",
  },
  {
    id: 'ABC109',
    carName: "Model 3",
    image:"image8.png",
    brandName: "Tesla",
    modelName: "3",
    date: "2023",
  },
  {
    id: 'ABC110',
    carName: "Charger",
    image:"image3.png",
    brandName: "Dodge",
    modelName: "SXT",
    date: "2020",
  },
  {
    id: 'ABC111',
    carName: "Model S Long Range",
    image:"image1.png",
    brandName: "Tesla",
    modelName: "S",
    date: "2022",
  },
  {
    id: 'ABC112',
    carName: "Model S Plaid",
    image:"image2.png",
    brandName: "Tesla",
    modelName: "S",
    date: "2023",
  },
  {
    id: 'ABC113',
    carName: "Civic LX",
    image:"image6.png",
    brandName: "Honda",
    modelName: "LX",
    date: "2021",
  },
  {
    id: 'ABC114',
    carName: "Civic Sport",
    image:"image.png",
    brandName: "Honda",
    modelName: "Sport",
    date: "2022",
  },
  {
    id: 'ABC115',
    carName: "Camry XSE",
    image:"image5.png",
    brandName: "Toyota",
    modelName: "XSE",
    date: "2020",
  },
  {
    id: 'ABC116',
    carName: "Camry SE",
    image:"image1.png",
    brandName: "Toyota",
    modelName: "SE",
    date: "2021",
  },
];

const IndexPage = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const brands = Array.from(new Set(carsData.map((car) => car.brandName)));
  const models = Array.from(new Set(carsData.map((car) => car.modelName)));

  const filteredCars = carsData.filter(
    (car) =>
      (selectedBrand === "" || car.brandName === selectedBrand) &&
      (selectedModel === "" || car.modelName === selectedModel)
  );

  return (
    <div className="container mx-auto p-4 h-full">
      <div className='md:flex justify-between align-center mb-4'>
      <h1 className="text-2xl font-bold mb-2 md:mt-0">Explore Cars</h1>
      <Filter
        brands={brands}
        models={models}
        selectedBrand={selectedBrand}
        selectedModel={selectedModel}
        onBrandChange={setSelectedBrand}
        onModelChange={setSelectedModel}
      />
      </div>
      <CarList cars={filteredCars} />
    </div>
  );
};

export default IndexPage;
