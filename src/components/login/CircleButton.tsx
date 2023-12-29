interface CircleButtonProps {
  src: string;
  alt: string;
  margin?: string;
  borderRadius?: string;
}

const CircleButton = ({
  src,
  alt,
  margin,
  borderRadius,
}: CircleButtonProps): JSX.Element => {
  return (
    <button className={`${margin} ${borderRadius}`}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default CircleButton;
