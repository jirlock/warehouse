import Navigation from "./navigation/navigation";
import Cover from "./cover/cover";
import Works from "./works/work";

export default function Home() {
  return (
    <main className="">
      <Navigation needDummy={false} />
      <Cover/>
      <Works/>
    </main>
  );
}
