import { useState } from "react";
import Image from "next/image";
import Title from "../../components/ui/Title";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const extraItemList = [
    {
      id: 1,
      name: "Mozzarella",
      price: 1,
    },
    {
      id: 2,
      name: "Pepperoni",
      price: 1,
    },
    {
      id: 3,
      name: "Mushrooms",
      price: 2,
    },
    {
      id: 4,
      name: "Onions",
      price: 1,
    },]

    const foodItems = [
      {
        id: 1,
        name: "Pizza 1",
        price: 8,
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque, repudiandae aperiam, harum at blanditiis ipsam alias quod esse, animi dolor voluptatum aut recusandae illo?",
        extraOptions: [
          {
            id: 1,
            name: "Mozzarella",
            price: 1,
          },
        ],
      },
    ]
    const [prices, setPrices] = useState([8, 12, 16]);
    const [price, setPrice] = useState(prices[0]);
    const [size, setSize] = useState(0);
    const [extraItems, setExtraItems] = useState(extraItemList);
    const [extras, setExtras] = useState([]);
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
  
    const handleSize = (sizeIndex) => {
      const difference = prices[sizeIndex] - prices[size];
      setSize(sizeIndex);
      changePrice(difference);
    };
  
    const changePrice = (number) => {
      setPrice(price + number);
    };
  
    const handleChange = (e, item) => {
      const checked = e.target.checked;
  
      if (checked) {
        changePrice(item.price);
        setExtras([...extras, item]);
      } else {
        changePrice(-item.price);
        setExtras(extras.filter((extra) => extra.id !== item.id));
      }
    };

    const handleClick = () => {
      dispatch(addProduct({...foodItems[0], size, extras, quatity: 1}));
      
    }
    console.log(cart);

  return (
    <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5; py-20 flex-wrap ">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-64 h-64  mx-auto">
        <Image
          src="/images/pizza3.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block">
          €{price}
        </span>
        <p className="text-sm my-4 md:pr-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit neque,
          repudiandae aperiam, harum at blanditiis ipsam alias quod esse, animi
          dolor voluptatum aut recusandae illo?
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div className="relative w-8 h-8 cursor-pointer" onClick={() => handleSize(0)}>
              <Image src="/images/sizepizza.svg" alt="" fill />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12  cursor-pointer" onClick={() => handleSize(1)}>
              <Image src="/images/sizepizza.svg" alt="" fill />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16  cursor-pointer" onClick={() => handleSize(2)}>
              <Image src="/images/sizepizza.svg" alt="" fill />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <h4 className="text-base font-bold">Extras</h4>
        <div className="flex gap-x-4 my-6 md:justify-start justify-center">
        {extraItems.map((item) => (
            <label className="flex items-center gap-x-1 cursor-pointer" key={item.id}>
              <input
                type="checkbox"
                className="w-5 h-5 accent-primary"
                onChange={(e) => handleChange(e, item)}
              />
              <span className="text-sm font-semibold">{item.name}</span>
            </label>
          ))}
        </div>
        <button className="btn-primary" onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Index;
