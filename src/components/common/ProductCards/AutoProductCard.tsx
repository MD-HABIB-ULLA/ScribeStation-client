import { FaCartPlus, FaEye, FaRegHeart } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const AutoProductCard = () => {
  return (
    <div>
      <div className="flex flex-col cursor-pointer bg-clip-border w-full h-[250px] md:h-[350px] overflow-hidden group">
        {/* Product Image */}
        <div className="relative overflow-hidden bg-black h-[80%] rounded-xl">
          {/* Hover Icons - Ensure z-10 keeps them visible */}
          <div className="absolute top-2 right-[-40px] flex flex-col gap-2 transition-all duration-300 group-hover:right-2 z-10">
            <div className="bg-white p-2 border rounded border-[#D7D7D7] hover:text-primary text-black/60 cursor-pointer">
              <FaEye size={20} />
            </div>
            <div className="bg-white p-2 border rounded border-[#D7D7D7] hover:text-primary text-black/60 cursor-pointer">
              <FaCartPlus size={20} />
            </div>
            <div className="bg-white p-2 border rounded border-[#D7D7D7] hover:text-primary text-black/60 cursor-pointer">
              <FaRegHeart size={20} />
            </div>
          </div>

          {/* Product Image - Ensure it's behind icons */}
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&auto=format&fit=crop&w=927&q=80"
            alt="card-image"
            className="object-cover h-full w-full group-hover:scale-110 duration-300 transition-all z-0"
          />
        </div>

        {/* Product Details */}
        <div className="flex items-center justify-center flex-col h-[20%]">
          <p className="font-bold text-foreground">Hleleofasdfsdfsd</p>
          <p className="text-foreground flex items-center text-sm text-gray-700">
            <TbCurrencyTaka /> 500
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutoProductCard;
