import Banner from "@/Components/Banner";
import BigSavingZone from "@/Components/BigSavingZone";
import CategoriesForMen from "@/Components/CategoriesForMen";
import CategoriesForWomen from "@/Components/CategoriesForWomen";
import Feedback from "@/Components/Feedback";
import IntheLimelight from "@/Components/IntheLimelight";
import NewArrival from "@/Components/NewArrival";
import TopBrandsDeal from "@/Components/TopBrandsDeal";

export default function Home() {
  return (
    <main>
      <Banner/>
      <NewArrival/>
      <BigSavingZone/>
      <CategoriesForMen/>
      <CategoriesForWomen/>
      <TopBrandsDeal/>
      <IntheLimelight/>
      <Feedback/>
    </main>
  );
}
