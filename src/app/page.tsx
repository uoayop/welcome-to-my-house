import Image from 'next/image';
import InfoIcon from '../components/InfoIcon';
import KakaoMap from '../components/KakaoMap';

export default function Home() {
  return (
    <main className="flex w-full h-full min-h-screen max-h-full flex-col items-center justify-evenly  md:p-24 p-3 py-10 overflow-x-hidden">
      <div>
        <h1 className="text-4xl font-YClover font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl pt-5">
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
      <div className="text-gray-900 font-OGRenaissance break-keep tracking-tight text-xl sm:text-2xl  text-center md:text-left flex flex-col items-center">
        <p>따뜻한 온실 속에서 자라온지 어언 26년..</p>
        <br />
        <p>왕복 4시간 출퇴근에 지친 어느 날 마참내! 결심을&nbsp;하였습니다.</p>
        <p>저의 첫번째 자취를 축하해주시궜어요?</p>
        <br />
        <p className="font-SDKukdetopokki italic text-2xl sm:text-3xl">would you...?</p>
        <Image
          src="/prodo.png"
          alt="해주시궛어요?"
          width={70}
          height={70}
          className="animate-wiggle pt-3"
        />
      </div>
      <div className="font-LeeSeoyun break-keep mt-7">
        <h2 className="flex text-2xl mt-10 text-center">
          <span>주의사항&nbsp;</span>
          <InfoIcon />
        </h2>
        <div className="md:text-xl text-lg">
          <ol>
            <li>
              <p>1. 집들이 선물 준비하시면 출입이 어려우세요 :pray:</p>
              <p>편하게 입을 옷 준비 부탁드려요 🙏 </p>
            </li>
            <li>
              <p>
                2. 서울 집 값이 만만치 안더라고요? 방이
                생각보다&nbsp;좁아도&nbsp;놀라지&nbsp;마세요. :')
              </p>
            </li>
            <li>
              <p>3. 옆 집에 주인집이 살고있어요. 방음은 잘 되지만 쉿!&nbsp;목소리 조금만 작게..!</p>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
