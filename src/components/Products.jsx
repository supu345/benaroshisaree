import React from "react";

const Products = () => {
  return (
    <div className="px-9 py-12">
      <p className="text-3xl font-bold">Themed Collections</p>
      {/* 6 div */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className="">
          <img
            src="https://images.pexels.com/photos/11652443/pexels-photo-11652443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo1"
            className=""
          />
        </div>
        <div className="">
          <img
            src="https://images.pexels.com/photos/30656951/pexels-photo-30656951/free-photo-of-portrait-of-woman-in-traditional-bengali-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo1"
            className=""
          />
        </div>
        <div className="">
          <img
            src="https://images.pexels.com/photos/15181109/pexels-photo-15181109/free-photo-of-woman-in-traditional-bridal-saree-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo1"
            className=""
          />
        </div>
        <div className="">
          <img
            src="https://images.pexels.com/photos/30708215/pexels-photo-30708215/free-photo-of-elegant-indian-bride-in-traditional-bridal-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo1"
            className=""
          />
        </div>
        <div className="">
          <img
            src="https://images.pexels.com/photos/29192719/pexels-photo-29192719/free-photo-of-elegant-indian-bride-in-traditional-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo1"
            className=""
          />
        </div>
        <div className="">
          <img
            src="https://images.pexels.com/photos/24650534/pexels-photo-24650534/free-photo-of-portrait-of-woman-standing-in-traditional-clothing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo1"
            className=""
          />
        </div>
      </div>
      {/* 3 div */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 mt-9 ">
        <div className="w-2/4">
          <img
            src="https://images.pexels.com/photos/11822308/pexels-photo-11822308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo1"
            className="h-[350px] w-full object-cover"
          />
        </div>
        <div className="w-1/4">
          <img
            src="https://images.pexels.com/photos/29351976/pexels-photo-29351976/free-photo-of-elegant-south-asian-bride-in-intricate-attire.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo1"
            className="h-[350px] w-full object-cover"
          />
        </div>
        <div className="w-1/4">
          <img
            src="https://images.pexels.com/photos/29133465/pexels-photo-29133465/free-photo-of-elegant-south-asian-bridal-portrait-with-jewelry.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo1"
            className="h-[350px] w-full object-cover"
          />
        </div>
      </div>

      {/* 3 div */}
    </div>
  );
};

export default Products;
