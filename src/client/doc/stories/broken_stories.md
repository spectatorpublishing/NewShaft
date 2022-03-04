# General
Prepend the code snippets below with the following imports to reproduce the
error:

```react
import React from 'react';
import { storiesOf } from '@storybook/react';
```


# Broken Stories

## FAKEfaqbubblecontainer
```react
import FAKEfaqbubblecontainer from'../../src/components/FAKEfaqbubblecontainer.js';

storiesOf('FAKEfaqbubblecontainer', module)
  .add('FAKEfaqbubblecontainer', () =>
  <FAKEfaqbubblecontainer/>)
```

## FAQBubble
```react
import FAQBubble from '../../src/components/FAQBubble.js';

storiesOf('FAQBubble', module)
  .add('FAQBubble', () =>
  <FAQBubble/>)
```

## FloorButton
```react
import FloorButton from "../../src/components/FloorButton.js";

storiesOf('FloorButton', module)
  .add('FloorButton', () =>
    <FloorButton dorm="Carman Hall" floorNums={[10]} />)
```

## DormButton
```react
import DormButton from '../../src/components/DormButton.js';

storiesOf('DormButton', module)
  .add('dorm button', () => <DormButton name="ADI House" address="21 Savage St." sundial_distance="12 minutes" description="It's lit"/>);
```

## QuickReview
```react
import QuickReview from '../../src/components/QuickReview.js';

storiesOf('QuickReview', module)
  .add('reviews', () => <QuickReview />);
```

## Review
```react
import Review from '../../src/components/Review.js';

storiesOf('Review', module)
  .add('review', () => <Review stars="3" review="I hate this place" thumbsUp="100" thumbsDown="1" />);
```

## ReviewList
```react
import ReviewList from '../../src/components/ReviewList.js';

storiesOf('ReviewList', module)
  .add('ReviewList', () => <ReviewList />);
```

## FloorPlan
```react
import FloorPlan from '../../src/components/FloorPlan.js';

storiesOf('FloorPlan', module)
  .add('keikaku means plan', () => <FloorPlan floorOffset={1} planArray={planArray}/>);
```

## Filter/filter_full
```react
import FilterButton from '../../src/components/FilterButton.js';
import FilterComponent from '../../src/components/FilterComponent.js';

storiesOf('Filter', module)
  .add('filter', () => <FilterButton name="barnard"/>);
storiesOf('Filter', module)
  .add('filter_full', () => <FilterComponent type="school"/>);
```

## FullReview
```react
import FullReview from '../../src/components/FullReview.js';

storiesOf('FullReview', module)
  .add('fullreview', () => <FullReview />);
```

## test
```react
import Expander from '../../src/components/Expander.js';
import QuickReview from '../../src/components/QuickReview.js';

storiesOf('test', module)
  .add('test', () => <Expander custom={null} showAll={<QuickReview/>} showSome="Here's a preview shown."><h1>Some Static Heading</h1></Expander>);
```

## AtAGlance
```react
import AtAGlance from '../../src/components/AtAGlance.js';

storiesOf('AtAGlance', module)
  .add('at a glance', () => <AtAGlance location="545 W. 114th St." roomtype="Suite-style doubles" classmakeup="First-Years" numfloors="13"/>);
```

## SlidingReview
```react
import SlidingReview from "../../src/components/SlidingReview.js";

storiesOf('SlidingReview', module)
  .add('sliding review', () => <SlidingReview />);
```

## RelatedDorms
```react
import RelatedDorms from '../../src/components/RelatedDorms';

let sampleRelatedDorms = [
  {
    id: "McBain",
    school: "Columbia",
    name: "McBain Hall",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  {
    id: "Carman",
    school: "Columbia",
    name: "Carman Hall",
    image: "https://housing.columbia.edu/files/housing/Carman.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  {
    id: "Sulzberger",
    school: "Barnard",
    name: "Sulzberger Tower",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  {
    id: "mcbain",
    school: "Columbia",
    name: "McBain Hall",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  },
  {
    id: "mcbain",
    school: "Columbia",
    name: "McBain Hall",
    image: "https://housing.columbia.edu/files/housing/McBain.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nulla nulla, condimentum a mattis in, faucibus id sapien. Sed rhoncus.",
    amenities: "No AC"
  }
];


storiesOf('RelatedDorms', module)
  .add('related dorms', () => <RelatedDorms relatedDorms={sampleRelatedDorms}/>);
```

## ExploreSideBar
```
import ExploreSidebar from '../../src/components/ExploreSidebar';
import { MemoryRouter } from 'react-router';

storiesOf('ExploreSidebar', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('explore sidebar', () => <ExploreSidebar/>);
```
