import { title } from "@/components/primitives";
// import SearchBar from "./searchbar";
// import GetData from "./GetData";
// import { Divider } from "@nextui-org/divider";
import SearchApp from "./SearchApp";

export default function OrderPage() {
  return (
    <div className="transition ease-soft-spring duration-500 w-full justify-center max-w-[400]">
      <h1 className={title({ color: "violet" })}>Pencarian&nbsp;</h1>

      <SearchApp />
    </div>
  );
}
