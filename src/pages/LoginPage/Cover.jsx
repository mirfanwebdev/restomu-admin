import image from "../../assets/cover-image.jpg";
export default function Cover() {
  const linksData = [
    {
      rel: "noreferrer",
      target: "_blank",
      href: "https://unsplash.com/@lvnatikk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      text: "Lily Banse",
    },
    {
      rel: "noreferrer",
      target: "_blank",
      href: "https://unsplash.com/photos/cooked-dish-on-gray-bowl--YHSwy6uqvk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      text: "Unsplash",
    },
  ];

  return (
    <section id="cover" className="relative">
      <img src={image} alt="food-cover" className=" h-screen" />
      <div className=" absolute bottom-0 right-2 px-2 rounded-sm bg-white">
        Photo by{" "}
        <a
          rel={linksData[0].rel}
          target={linksData[0].target}
          href={linksData[0].href}
          className="font-semibold"
        >
          {linksData[0].text}
        </a>{" "}
        on{" "}
        <a
          rel={linksData[1].rel}
          target={linksData[1].target}
          href={linksData[1].href}
          className="font-semibold"
        >
          {linksData[1].text}
        </a>
      </div>
    </section>
  );
}
