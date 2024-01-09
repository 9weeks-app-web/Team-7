const PrevArrow = (props: any) => {
  const { style, onClick } = props;

  return (
    <div>
      <div
        style={{
          ...style,
          position: "absolute",
          left: "0px",
          width: "88px",
          height: "100%",
          zIndex: 9999,
          background:
            "linear-gradient(90deg, rgba(245,248,255,1) 0%, rgba(245,248,255,0.8) 40%, rgba(245,248,255,0.6) 70%, rgba(245,248,255,0) 100%)",
        }}
        onClick={onClick}
      >
        <img
          src="/BannerSlideLeft.svg"
          alt="배너 왼쪽으로 넘기기"
          className="block"
          style={{
            position: "absolute",
            left: "20px",
            top: "50%",
            transform: "translate(0, -50%)",
            zIndex: 9999,
            textAlign: "center",
          }}
        />
      </div>
    </div>
  );
};

export default PrevArrow;
