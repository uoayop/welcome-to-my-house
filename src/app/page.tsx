import InfoIcon from '../components/InfoIcon';
import KakaoMap from '../components/KakaoMap';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-4xl font-YClover font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          제 1회 집들이 초대장
        </h1>
        <div className="mt-10 text-lg bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
          <p>
            <span className="text-lime-400">doyeon</span>:~
            <span className="text-sky-500">$</span>
            &nbsp;echo&nbsp;$일시
          </p>
          <p>님 가능할 때</p>
          <p>
            <span className="text-lime-400">doyeon</span>:~<span className="text-sky-500">$</span>
            &nbsp;echo&nbsp;$장소
          </p>
          <p>서울특별시 알려드린 그 주소</p>
        </div>
      </div>
      <KakaoMap />
      <div className="text-gray-900 font-OGRenaissance tracking-tight  text-xl sm:text-2xl">
        <p>따뜻한 온실 속에서 자라온지 어언 26년..</p>
        <br />
        <p>왕복 4시간 출퇴근에 지친 어느 날 마참내! 결심을 하였습니다.</p>
        <p>저의 첫번째 자취를 축하해주시궜어요?</p>
        <br />
        <p className="font-SDKukdetopokki italic text-2xl sm:text-3xl">would you...?</p>
      </div>
      <div className="font-LeeSeoyun">
        <h2 className="flex text-2xl mt-10 text-center">
          <span>주의사항&nbsp;</span>
          <InfoIcon />
        </h2>
        <div className="text-xl">
          <ol>
            <li>
              <p>1. 집들이 선물 준비하시면 출입이 어려우세요 :pray:</p>
            </li>
            <li>
              <p>2. 서울 집 값이 만만치 안더라고요? 방이 생각보다 좁아도 놀라지 마세요. :)</p>
            </li>
            <li>
              <p>3. 옆 집에 주인집이 살고있어요. 방음은 잘 되지만 쉿! 목소리 조금만 작게..!</p>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
