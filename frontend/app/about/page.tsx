import Navigation from "../navigation/navigation";
import About from "./about";

export default function Page() {

    return (
        <div>
            <Navigation needDummy={true}/>
            <About/>
        </div>
    )
}