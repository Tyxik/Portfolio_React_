import React from 'react';
import MyButton from "../buttons/button";
import Carousel from "../carousel/carousel";
import NavigationMenu from "../navigation/navigation_menu";
import BootstrapButton from "../buttons/bootstrapbuttons/buttonsbootstrap";
import NavigationBar from "../bootstrapnavigation/bootstrapnavigation_menu";



function Homepage() {
    return (
        <div>
          <NavigationBar></NavigationBar>
            <section id="section1">
                <h2>Skills </h2>
                {
                
                 <MyButton/>
              }
            </section>
            <section id="section2">
                <h2>Zvířátka</h2>
                {
                    <Carousel/>

                }
            </section>
            <section id="section3">
                <h2>Sekce 3</h2>
                {<div>
                    <BootstrapButton></BootstrapButton>

                </div>}
            </section>
        </div>
    );
}
export default Homepage;