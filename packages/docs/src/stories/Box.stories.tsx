import type { StoryObj, Meta } from "@storybook/react";
import { Box, type BoxProps, Text } from "@ignite-ui/react";

export default {
	title: "Surfaces/Button",
	component: Box,
	args: {
		children: <Text>Testando o elemento Box</Text>,
	},
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
