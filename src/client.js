import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "bwhws3ba",
	dataset: "production",
	apiVersion: "2022-02-01",
	useCdn: true,
	token:
		"skc7n1DMDyLgiOJ1ZsNMBNAT6gTY51ulkYOATd94apPWbHW59wrO6qNglMp7PiZRBe1FaFw6u1qBMT26ycZklXyFcsPAB6gelbVtpzyYFx0Gh8BhosHKs1YT00NGnEqLVUNTYaaVjQv8GHLSj1wwBzjdY1TkWLEgoYRX3cGtzKoS1aRHUHGK",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
