import Script from 'next/script';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = () => {
  return (
    <div className="p-10">
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map center={{ lat: 37.46762, lng: 126.94551 }} style={{ width: '530px', height: '350px' }}>
        <MapMarker position={{ lat: 37.46762, lng: 126.94551 }}>
          <div className="text-xs p-2 rounded">요 근처랍니다 (어디게요)</div>
        </MapMarker>
      </Map>
    </div>
  );
};

export default KakaoMap;
