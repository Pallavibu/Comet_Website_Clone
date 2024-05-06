const Banner = () => {
  return (
    <div className="bg-yellow-custom">
      <div>
        <div className="flex gap-5">
          <div>
            <img
              src="https://www.wearcomet.com/cdn/shop/files/cross_50x.png?v=1683101845"
              alt=""
              width={40}
            />
          </div>
          <div>
            <img
              src="https://www.wearcomet.com/cdn/shop/files/star_48e84c31-e897-459e-bb80-2f79507f21b5_50x.png?v=1683101845"
              alt=""
              width={40}
            />
          </div>
          <div>
            <img
              src="https://www.wearcomet.com/cdn/shop/files/headphone_50x.png?v=1683101845"
              alt=""
              width={40}
            />
          </div>
        </div>
        <div>
          <h2 className=" text-3xl font-bold">
            <span className=" bg-pink-300 rounded-lg shadow-lg text-center m-4">
              GOOD SHOES
            </span>
            WILL TAKE YOU TO GOOD PLACES
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
