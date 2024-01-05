const NextArrow = (props: any) => {
  const { style, onClick } = props;

  return (
    <div
      style={{
        ...style,
        position: "absolute",
        right: "0px",
        width: "88px",
        height: "100%",
        zIndex: 9999,
        background:
          "linear-gradient(90deg, rgba(245,248,255,0) 0%, rgba(245,248,255,0.8) 70%, rgba(245,248,255,0.8) 70%, rgba(245,248,255,1) 100%)",
      }}
      onClick={onClick}
    >
      <img
        src="/BannerSlideRight.svg"
        alt="배너 오른쪽으로 넘기기"
        className="block"
        style={{
          position: "absolute",
          width: "50px",
          right: "20px",
          top: "50%",
          transform: "translate(0, -50%)",
          zIndex: 9999,
          textAlign: "center",
        }}
      />
    </div>
  );
};

export default NextArrow;
