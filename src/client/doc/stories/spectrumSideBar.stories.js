import React from 'react';
import { storiesOf } from '@storybook/react';
import SpectrumSidebar from "../../src/components/SpectrumSidebar.js";

storiesOf('SpectrumSidebar', module)
  .add('SpectrumSidebar', () =>
    <SpectrumSidebar
                spectrumSidebarData = {[
                  {
                    title: "How Have Local Hiring Targets Shaped Columbia’s Manhattanville Construction Site?",
                    img_src: "https://www.gstatic.com/webp/gallery/1.jpg",
                    author: "BY YULONG LI",
                    date: "APRIL 8, 2018"
                  },
                  {
                    title: "Newly proposed committee for Barnard calls for increased transparency",
                    img_src: "https://www.gstatic.com/webp/gallery/3.jpg",
                    author: "BY ROUNAK",
                    date: "APRIL 7, 2018"
                  }
                ]}
    />
    );
