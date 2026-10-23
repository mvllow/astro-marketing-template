// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://example.com",

	// Configured fonts must be added to your page head with an identifying CSS
	// variable.
	// https://docs.astro.build/en/reference/configuration-reference/#fonts
	fonts: [
		{
			provider: fontProviders.local(),
			name: "Inter",
			cssVariable: "--font-inter",
			fallbacks: ["sans-serif"],
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/inter/InterVariable.woff2"],
						weight: "100 900",
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/inter/InterVariable-Italic.woff2"],
						weight: "100 900",
						style: "italic",
					},
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: "Editorial New",
			cssVariable: "--font-editorial-new",
			fallbacks: ["serif"],
			options: {
				variants: [
					{
						src: [
							"./src/assets/fonts/editorial-new/PPEditorialNew-Ultralight.otf",
						],
						weight: "300",
						style: "normal",
					},
					{
						src: [
							"./src/assets/fonts/editorial-new/PPEditorialNew-UltralightItalic.otf",
						],
						weight: "300",
						style: "italic",
					},
				],
			},
		},
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
