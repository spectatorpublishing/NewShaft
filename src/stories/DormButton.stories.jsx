import React from 'react'

import DormButton from '../client/src/components/DormButton.js'

export default {
	title: 'Shaft/DormButton',
	component: DormButton,
}

const Template = (args) => <DormButton {...args} />;

let sampleAmenities = [
  ["bathroom", "Semi-private"],
  ["laundry", "Laundry - in basement"],
  ["kitchen", "Kitchen - in basement"],
  ["airConditioning", "Air conditioning"],
  ["lounge", "Floor lounge"],
  ["fitness", "Fitness room"],
  ["lounge", "Sky lounge"],
  ["lounge", "Basement lounge"]
];

// TODO: investigate why this story below looks different than the ones on the deployed shaft website
export const ADIDormButton = Template.bind({})
ADIDormButton.args = {
	school: 'Columbia',
	name: 'ADI House',
	image: 'https://arc-anglerfish-arc2-prod-spectator.s3.amazonaws.com/public/FHXBX6S53BANRLVYYEP2SM7KBQ.jpg',
	// amenities: sampleAmenities[0],
	description: 'It\'s lit',
}
