import Navigation from "../navigation/navigation";
import Contact from "./contact";

export default function Page() {

    return (
        <div>
            <Navigation needDummy={true}/>
            <Contact/>
        </div>
    )
}