import { configure } from '@storybook/react';

const stories = require.context('../components/', true, /\.stories\.tsx$/);

function loadStories() {
  stories.keys().forEach((filename) => stories(filename));
}

configure(loadStories, module);
