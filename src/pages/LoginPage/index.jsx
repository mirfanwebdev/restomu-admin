import image from "../../assets/cover-image.jpg";
export default function LoginPage() {
  return (
    <main id="login-page" className="flex gap-8">
      <section id="cover" className="relative">
        <img src={image} alt="food-cover" className=" h-screen" />
        <div className=" absolute bottom-0 right-2 px-2 rounded-sm bg-white">
          Photo by{" "}
          <a href="https://unsplash.com/@lvnatikk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Lily Banse
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/cooked-dish-on-gray-bowl--YHSwy6uqvk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </div>
      </section>
      <section
        id="login-section"
        className="flex flex-col gap-4 justify-center"
      >
        <h1 className="text-3xl font-bold">RESTOMU</h1>
        <form className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" className="border" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border"
            />
          </div>
          <div>
            <button type="submit" className="border-2 rounded w-full py-1">
              Login
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
