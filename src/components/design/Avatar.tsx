interface AvatarProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  border?: string;
  spacing?: string;
  customStyle?: string;
}

const Avatar = ({
  src = "/basicProfile.svg",
  alt = "basic-profile",
  width = "w-[82px]",
  height = "h-[82px]",
  border = "rounded-full",
  spacing,
  customStyle,
}: AvatarProps) => {
  return (
    <div className={`avatar ${spacing} ${customStyle}`}>
      <img src={src} alt={alt} className={`${border} ${width} ${height}`} />
    </div>
  );
};
export default Avatar;
