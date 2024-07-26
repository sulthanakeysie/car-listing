import { useState, useEffect } from "react";
import Image from "next/image";

const CarList = ({ cars }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const openModal = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <div>
      {cars.length === 0 ? (
        <div className="flex items-center justify-center h-[65vh]">
          <p className="text-xl font-bold text-gray-500">No cars available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cars.map((car) => (
            <div
              key={car.id}
              className="border rounded-2xl shadow-lg bg-[#FFF] cursor-pointer"
              onClick={() => openModal(car)}
            >
              <Image
                src={`/cars/${car.image}`}
                alt={`${car.brandName} ${car.carName}`}
                width={100}
                height={100}
                style={{ width: "100%", height: "200px" }}
                className="rounded-t-2xl"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold">
                  {car.carName} - {car.date}
                </h2>
                <p className="mb-1 text-[#CCC]">{car.id}</p>
                <hr />
                <p className="mt-2">Brand: {car.brandName}</p>
                <p>Model: {car.modelName}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && selectedCar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-6 w-[50%] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-end">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className=" text-red-500 cursor-pointer"
              >
                Close
              </button>
            </div>
            <div className="relative">
              <Image
                src={`/cars/${selectedCar.image}`}
                alt={selectedCar.brandName}
                width={100}
                height={300}
                className="w-full h-auto max-h-[80vh] cover rounded-md"
              />
              <div className="absolute bottom-2 left-2">
                <h2 className="text-2xl font-bold">{selectedCar.carName}</h2>
                <p className="mt-2">Brand: {selectedCar.brandName}</p>
                <p>Model: {selectedCar.modelName}</p>
                <p>Date: {selectedCar.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarList;
