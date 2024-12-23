import Header1 from "../ui/header1";

export default function CoffeeMain() {
  return (
    <main className="bg-zinc-950 grid grid-cols-1 md:grid-cols-2 h-screen snap-mandatory snap-y overflow-y-scroll overflow-x-hidden md:snap-none"> 
      <div className="h-[50vh] snap-start flex flex-col justify-end items-end p-4">
        <Header1>Coffee</Header1>
        <p className="text-white font-light text-xl">
          Click on the the category to see the instructions and tips
        </p>
      </div>

      <div className="coffeeContainer filteredCoffee"><p>Filtered</p></div>
      <p className="coffeeLabel font-extrabold text-2xl justify-self-end mt-[-40px] z-10 me-6">
        Filtered
      </p>

      <div className="mokaCoffee coffeeContainer">
        <p>Moka Pot</p>
      </div>
      <p className="coffeeLabel font-extrabold text-2xl justify-self-end mt-[-40px] z-10 me-6">
        Moka Pot
      </p>

      <div className="frenchPressCoffee coffeeContainer">
        <p>French Press</p>
      </div>

      <p className="coffeeLabel font-extrabold text-2xl justify-self-end mt-[-40px] z-10 me-6">
        French Press
      </p>

      <div className="milkProcess coffeeContainer">
        <p>Milk Processing</p>
      </div>

      <p className="coffeeLabel font-extrabold text-2xl justify-self-end mt-[-40px] z-10 me-6">
        Milk Processing
      </p>

      <div className="h-[50vh] snap-start flex flex-col justify-start items-end p-4">
        <p className="text-white font-light text-xl">More to come!</p>
      </div>
    </main>
  );
}
