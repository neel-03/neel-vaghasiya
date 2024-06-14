'use client'
import { CustomAnchor, CustomButton } from "./components/custom/CustomHTMLTags";
import { kanit } from "./fonts/fonts";

export default function Home() {
  return (
    <div>
      <h1 className={`text-4xl ${kanit.className}`}>
        <span>Neel Vaghasiya</span><br/>
        <span>NEEL VAGHASIYA</span><br/>
      </h1>
      <CustomButton onClick={()=>{window.open('https://www.github.com/neel-03')}}>
        GitHub
      </CustomButton>
      <CustomAnchor href="https://www.google.com">learn more</CustomAnchor>
    </div>
  );
}
