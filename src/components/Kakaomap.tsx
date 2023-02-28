import { Restaurant } from "@/types/restaurant";
import { NEXT_PUBLIC_KAKAO_KEY } from "const";
import { useEffect } from "react";

interface MapProps {
	detail: Restaurant;
}

declare global {
	interface Window {
		kakao: any;
	}
}

const Map = ({ detail }: MapProps) => {
	const {
		BPLCNM: name,
		RDNWHLADDR: newAddress,
		SITEWHLADDR: oldAddress,
	} = detail;

	useEffect(() => {
		const mapScript = document.createElement("script");

		mapScript.async = true;
		mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${NEXT_PUBLIC_KAKAO_KEY}&libraries=services&autoload=false`;

		document.head.appendChild(mapScript);

		const onLoadKakaoMap = () => {
			window.kakao.maps.load(() => {
				const container = document.getElementById("map");
				const options = {
					center: new window.kakao.maps.LatLng(
						37.566968285536504,
						126.9782334118004
					),
				};
				const map = new window.kakao.maps.Map(container, options);
				const markerPosition = new window.kakao.maps.LatLng(
					37.566968285536504,
					126.9782334118004
				);
				const marker = new window.kakao.maps.Marker({
					position: markerPosition,
				});
				marker.setMap(map);

				const geocoder = new window.kakao.maps.services.Geocoder();
				geocoder.addressSearch(oldAddress, function (result: any, status: any) {
					if (status === window.kakao.maps.services.Status.OK) {
						var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
						const marker = new window.kakao.maps.Marker({
							map: map,
							position: coords,
						});
						map.setCenter(coords);
					}
				});
			});
		};

		mapScript.addEventListener("load", onLoadKakaoMap);

		return () => mapScript.removeEventListener("load", onLoadKakaoMap);
	}, [detail, name, newAddress, oldAddress]);

	return (
		<div
			id="map"
			style={{
				width: "100%",
				paddingTop: "50%",
			}}
		/>
	);
};

export default Map;
