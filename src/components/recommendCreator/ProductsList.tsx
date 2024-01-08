const ProductsList = ({ products }: any) => {
  return (
    <ul>
      {products.map((index: number) => (
        <li
          key={index}
          className="w-[92px] h-[92px] bg-neutral-10 rounded-[6px]"
        >
          <img src={products} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
