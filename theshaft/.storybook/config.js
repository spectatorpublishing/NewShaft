import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from "styled-components";
import { withInfo } from '@storybook/addon-info';
import { GlobalStyles, theme } from "../src/client/util/GlobalStyles";

function withGlobalStyles(storyFn) {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
          <GlobalStyles />
          {storyFn()}
      </React.Fragment>
    </ThemeProvider>
  );
}

addDecorator(
  withInfo({
    inline: true,
  })
);
addDecorator(withGlobalStyles);

function loadStories() {
  require('../stories/StyleGuide.js');
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);