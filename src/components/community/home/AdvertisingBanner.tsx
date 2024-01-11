import Card from "../../design/Card";

const AdvertisingBanner = () => {
  return (
    <section className="advertising banner mt-[20px]">
      <Card
        width="w-[841px]"
        height="h-auto"
        spacing="p-0"
        customStyle="cursor-pointer"
      >
        <img src="/adBanner.svg" alt="ad-banner" />
      </Card>
    </section>
  );
};

export default AdvertisingBanner;
