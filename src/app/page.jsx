import AllProject from "@/components/AllProject";
import Brands from "@/components/Brands";
import Contacts from "@/components/Contacts";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Stats from "@/components/Stats";

const Page = () => {
  return (
    <div>
        <Hero/>
        <Stats/>
        <HowWorks/>
        <AllProject/>
        <Contacts/>
        <Brands/>
    </div>
  )
}

export default Page;