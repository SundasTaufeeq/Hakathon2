import Heroimage from "./Component/Homeimage";
import GridWithBoxes from "./Component/gridWithboxes";
import Featured from "./Component/featured";
import GridWithTwoSections from "./Component/gear-up";
import DontMiss from "./Component/dontMiss";
import TheEssentials from "./Component/theEsencial";

export default function Home() {
  return (
    <div>
      <Heroimage />
      <GridWithBoxes />
      <Featured />
      <GridWithTwoSections />
      <DontMiss />
      <TheEssentials />
    </div>
  );
}
