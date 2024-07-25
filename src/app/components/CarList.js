import Image from "next/image";

const CarList = ({ cars }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cars.map((car) => (
        <div key={car.id} className="border  rounded-2xl shadow-lg bg-[#FFF]">
          <Image
            src={`/cars/${car.image}`}
            alt={car.brandName}
            width={100}
            height={100}
            style={{ width: "100%", height: "200px" }}
            className="rounded-t-2xl"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold ">{car.carName} - {car.date}</h2>
            <p className='mb-1 text-[#CCC]'>{car.id}</p>
            <hr />
            <p className='mt-2 '>Brand: {car.brandName}</p>
            <p>Model: {car.modelName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
