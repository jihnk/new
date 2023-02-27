import { RecoilRoot } from "recoil";
import Layout from "@/components/Layout";
import { GlobalStyle } from "@/styles/globalStyle";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</RecoilRoot>
	);
}
