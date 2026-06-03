export type Character = {
  id: string; // codename in lower case
  codename: string;
  title?: string; // Ace, Leader, Elite, etc.
  badge?: {
    text: string;
    color?: string;
    textColor?: string;
    shadow?: string;
  };
  affiliation: string; // Team
  gender?: string;
  age?: string;
  oneLiner?: string; // 프로필의 한마디
  quote: string; // 로딩 화면 한줄대사
  intro?: string; // Character introduction text
  story?: string; // Character backstory or detailed story
  themeColor?: string; // Main accent color
  themeGradient?: string[]; // Gradient for buttons/blobs
  vectorType?: string;
  appearance?: {
    height?: string;
    features?: string;
    clothing?: string;
  };
  psychicPower?: {
    name: string;
    description: string;
  };
  status?: string;
  weapons?: string;
  personality?: string;
  leaderComments?: {
    qna?: string;
    comment?: string;
    commentHighlight?: string;
    author?: string;
    rating?: string;
    qnaColor?: string;
    qnaShadow?: string;
    highlightColor?: string;
    ratingColor?: string;
  };
  themeSongs?: { title: string; artist?: string; url: string; duration?: string }[];
  chatLogs?: {
    sender: string;
    message: string;
    isMe?: boolean;
    timestamp?: string;
  }[];
  tabs?: {
    general?: string;
    power?: string;
    story?: string;
  };
  frostProject?: string;
  ignisProject?: string;
  isGlitch?: boolean;
  isDarkContent?: boolean;
};

export const CHARACTERS: Character[] = [
  // Central
  {
    id: "epic",
    codename: "Epic",
    title: "Ace of EVERLAST",
    badge: { text: "ACE OF EVERLAST", color: "#a18cd1", textColor: "white", shadow: "#000" },
    affiliation: "CENTRAL",
    gender: "남성",
    age: "26세",
    oneLiner: "거기 계속 서 있을 거야? 취미가 길막기인 줄은 몰랐는데.",
    quote: "세상은 모르겠고, 네 이상이 되어줄 순 있는데.",
    themeColor: "#a18cd1",
    intro: "헤센 저스티스,\n코드네임 에픽(Epic).\n단독으로 피규어 20% 복구, 찾은 퍼즐은 200개 이상. 그 같은 위인이 <span style=\"color:#b19cd9;font-weight:600\">A지부 &lt;센트럴&gt;</span>에 속해 있음은 어쩌면 자명한 이치이겠다.\n\n동급의 벡터에게도 연예인 취급을 받곤 한다.\n얼굴마담이란 이런 것이 아닐지?",
    story: "[캐릭터 스토리 1]\n헤센 저스티스는 까다로운 이능력을 가졌다. 지금도 가끔 자신의 손이 두려운 것처럼 허탈한 눈을 하곤 한다. 그런 것 치고 필요한 상황이 오면 핑거스냅을 날리는 데 망설임이 없으니 참 재미있는 일이다.\n일 년에 한두번씩 \"그 대단한 능력을 처음 가지게 됐을 때 처음 한 일이 무엇인지\" 순진하게 묻는 사람들이 있다. 전능 계열 이능력자가 받는 단골 질문인데, 그럴 때마다 그는 악동 같은 표정을 짓고 질문자를 쉽게 골탕먹이는 데 손가락을 사용하곤 한다.\n유치하다. 유치함 정도는 찍어누를 수 있을 정도로 우아한 눈을 하고서.\n\n[캐릭터 스토리 2]\n그는 벡터의 연예인이다. 이렇게 말하면 감이 잘 안 잡히지 싶다.\n벡터 화보촬영부터 미디어매체 광고 모델까지 전부 '에픽'이라는 요원이 도맡는다. 가끔 얼굴이 반듯한 요원이 한두번씩 대타를 뛰기는 하지만 그것도 다 대타의 이야기다. 메인 모델은 에픽이라는 소리다.\n이목을 사로잡는 데 천부적인 재능이 있고, 화술이 적당하며 '손끝으로 뭐든 이뤄낸다'는 기가 막힌 능력 또한 시민들을 낭만에 부풀게 한다.\n같은 벡터가 보아도 입이 벌어지는데 일반인의 눈에는 어떻겠는가? 그는 포인트노드에 잠깐 식사하러 나갈 때조차 주머니에 검은 펜을 넣어다닌다. 사인 요청에 응하기 위함이다.\n이러니 '벡터의 왕자님'이라는 별명을 들어도 도저히 웃을 수가 없다.",
    themeGradient: ["#a18cd1", "#84fab0"],
    vectorType: "CENTRAL-A",
    appearance: {
      height: "186cm",
      features: "창백한 보라색 머리칼과 그보단 짙은 자안.\n늘상 웃는 얼굴이 어떻게 봐도 아름답다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#a18cd1;\">[ 센트럴 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 백정장, 금장 장식</span><br/><span style=\"padding-left:4px;\">- 발목까지 내려오는 흰 코트</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#a18cd1;\">[ 에픽 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">단추를 목 끝까지 채우지 않아 약간의 여유를 둔 세미 포멀 스타일. 옷이 구겨지는 것을 극도로 싫어하며 사인을 하기 위한 검은 펜을 상시 소지하고 있다.</span></div>"
    },
    psychicPower: {
      name: "가능성 조작",
      description: "🔮 '행운'.\n🔮 적 명중률을 100으로 만들 수도 있고, 균열이 일어날 확률을 100으로 만들 수도 있고, 사망률을 100으로 만들 수도 있고, 심지어는 죽어가는 사람의 완치율을 100으로 만들 수도 있다.\n    본인 스스로에게 사용하는 것도 가능하고, 반대로 상대의 가능성을 0으로 만드는 것 또한 가능하다.\n🔮 시전 방식은 핑거스냅: 맨손 상태에서만 발동한다.\n🔮 만에 하나의 위험성을 방지하기 위해 언제나 면장갑을 착용한다.\n🔮 가능성을 조작한 범위가 커질수록 부작용도 커진다.\n🔮 절대로 쉽게 남발해서는 안되는 능력이다. 본인도 그걸 알기 때문에 능력 조절을 굉장히 세심하게 한다."
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n웃되 진심이 아니고, 감정을 내비쳐도 계산적이다.\n개인주의, 완벽주의, 어쩌면 강박이 있을지도.\n\n보통 라인이나 기타 파트너와 움직이는 다른 센트럴과 달리, 그는 독립적으로 임무 수행하기를 좋아한다.\n다치는 일이 없지는 않지만 죽을만큼 아픈 적도 없다. 다행인 일이다. 그 벽치는 미소를 제치고 붙을 수 있는 '파트너'는 세상에 없을테니까.",
    leaderComments: {
      qna: " Q: 파트너를 만들 생각은 아직도 없고?\n A: 정확히는 필요성을 못 찾았고.\n Q: 왜지?\n A: 네가 내가 되어보든가.\n A: 의존이라니 죽고 말지.",
      comment: "눈치도 판단력도 무섭도록 빠르다.\n그러나 나는 그의 가장 무서운 점이 혓바닥이라고 생각한다. 펜도 칼도 그의 촌철살인을 이길 수는 없을 것이다.\n\n가시 돋쳤다.\n티를 안 내다니 여러모로 대단하고.",
      commentHighlight: "언제 무너질지 몰라 두렵기는 하다.",
      author: "A - THEATER",
      rating: "★★★★★ (EX)",
      qnaColor: "#b2d4be",
      qnaShadow: "#9cada3",
      highlightColor: "#d4a5ff",
      ratingColor: "#b19cd9"
    },
  },
  {
    id: "voice",
    codename: "Voice",
    affiliation: "CENTRAL",
    gender: "남성",
    age: "29세",
    oneLiner: "하나하나 마음 쓰고 신경 쓰고, 그러다 보면 정작 중요한 걸 놓치고 살아요. 그럼 안 되잖아.",
    quote: "재앙은 생각보다 사소한 오류에서 시작된다.",
    themeSongs: [{ title: "Voice's Theme", url: "https://www.image2url.com/r2/default/audio/1778381537291-6f28fad7-0b14-4ef3-8b16-0d2985e48620.mp3" }],
    themeColor: "#b0c4de",
    intro: "테렌티우스 케어,\n코드네임 보이스(Voice).\n앞뒤양옆으로 후배들을 달고 다니는 선배, 해결사, <span style=\"color:#9fb6cd;font-weight:600\">A지부 &lt;센트럴&gt;</span>. 언젠가부터 우리 곁에 있었다.\n생각보다 입사 연차는 얼마 안 됐으나, 무슨 일이 벌어져도 잘 놀라지 않는 강심장으로 이런저런 귀찮은 일에 등 떠밀리곤 한다.\n\n어쩐지 본인은 주변에 사람이 몰리는 이유를 잘 모르고 있는 것 같다. 어쩌면 관심이 없는 것일 수도 있고.\n\n직무 적성이 정말 안 맞아 보인다.\n솔직하게 평가했더니 본인도 동의했다.",
    story: "[캐릭터 스토리 1]\n중앙 출신, 교육 수준만 따지자면 A지부의 최고 학력 수준이다.\n머리가 비상하고 배운 것이 많다. 이대로 교사를 해도 손색이 없었을 것 같은데, 무슨 이유에서인지 대뜸 벡터 요원 면접장에 나타났다. 이력서 학력란이 화려했으므로 등장부터 이목을 끌었다.\n그러나 그의 이능력을 테스트한 순간, 현장의 모두가 '테렌티우스 케어'라는 인간이 왜 평범하게 살지 않으려고 하는지를 반쯤 이해했다. 생각해보라, 말하는대로 이루어진다니 이게 있을 수나 있는 일인지.\n그는 자신의 이능력과 코드네임을 통일하고 싶다고 했다. 편의상 언령이라고 부르기는 하지만, 정식 명칭은 그의 이름을 딴 그대로의 'VOICE'다.\n그렇게 불리면 아주 멀리까지 닿을 목소리를 낼 수 있을 것 같다고 했다. 이름값이라는 말이 괜히 있는 것은 아니라면서. 그 말을 하는 그의 얼굴이 꽤 외로워보였기 때문에 이 이상의 후속 질문은 없었다.\n우리 모두 말 못할 뭔가 잃어보거나, 포기하거나 하면서 여기까지 당도했잖은가?\n\n[캐릭터 스토리 2]\n벡터의 일반 베테랑에 비하면 애매하게 어린 나이를 가지고 있는데, 이상하게 주변에 사람들을 주렁주렁 달고 다닌다. 그 지고하신 에픽마저도 종종 그를 고민 창구 취급할 정도다. 성격 좋고 무던하기로는 누구와 견주어도 손색이 없다.\n매사 흥미가 없어서 어떤 말을 들어도 쉽게 쉽게 흘려넘긴다. 물 같다. 심지어는 자기 자신에게도 큰 관심이 없는데, 그 스스로 정의하기를 '마음에 뭔가 오래 담아두지 않기 때문에 상처를 잘 안 받는다'고 한다.\n그건 여유가 아니다. 그렇다고 허세도 아니다. 세상 만사에 태평할 뿐이다.\n\n[캐릭터 스토리 3]\n그렇게나 권태로워 보이는 사람이지만 사실 내면이 가시밭길처럼 예민하다. 민감함이 표면적으로 드러나는 단 하나의 증거가 있는데, 바로 '귀'다.\n이능력이 발현된 이후로 청력이 심하게 발달했다. 어느 수준을 예상하든 그것보다 훨씬 더 귀가 밝다. 그의 평정을 깨뜨리고 싶다면 귀 바로 옆에서 말을 하거나 큰 소리를 내면 된다. 이렇게까지 번거롭게 굴어서 그를 놀래키고 싶은 사람이 있을지는 모르겠으나.",
    themeGradient: ["#d1d9e0", "#a9b9c9"],
    vectorType: "CENTRAL-A",
    appearance: {
      height: "188cm",
      features: "어깨까지 늘어진 은발, 청안.\n항상 피곤해 보인다. 복장도 썩 바른 편은 아니고.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#b0c4de;\">[ 센트럴 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 백정장, 금장 장식</span><br/><span style=\"padding-left:4px;\">- 발목까지 내려오는 흰 코트</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#b0c4de;\">[ 보이스 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">풀어헤친 셔츠, 한쪽 어깨에 대충 걸친 코트.</span></div>"
    },
    psychicPower: {
      name: "VOICE",
      description: "💎 말하는대로 이루어진다.\n💎 생명을 아예 없애거나 되살리는 등의 전지전능한 범위까지는 확장되지 않는다. 해당 능력은 시전자의 상식을 넘어설 수 없다.\n💎 <span>언령의 소유주가 '많이 알고 있을수록' 빛을 발하는 능력이다.<br/><span style=\"color:#808080;font-size:11px;\">* 고로 보이스는 머리가 매우 좋다.</span></span>\n💎 시전은 한 마디면 충분하다. : \"Attention.\""
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n권태롭고, 지루하고, 만사에 덤덤한 평화주의자.\n깽판도 청소하듯 치우고 홀연히 사라지는 인물......\n연차가 덜 찬 벡터의 구원 같은 존재다. 본인에게 물으면 \"그냥.\" 같은 말로 대충 넘기는데, 고평가에 익숙하지는 않은 듯 하다.\n\n그의 언어를 빌리자면,\n그냥 눈에 보이면 안심이 된다.\n그냥.",
    leaderComments: {
      qna: " Q: ......\n A: ......\n Q: 무슨 말이라도 좀 하지?",
      comment: "머리가 지끈거리는 A지부 인물 중\n내버려둬도 신경이 안 쓰이는 유일한 인물이다.\n정도 이상 사고를 치지 않을 것이고,\n끝내 알아서 살아남을 것이다.",
      commentHighlight: "결과로 증명을 하니 날 자꾸 안일하게 만든다.",
      author: "A - THEATER",
      rating: "★★★★★ ...... +★",
      qnaColor: "#9fb6cd",
      qnaShadow: "rgba(159,182,205,.6)",
      highlightColor: "#b0c4de",
      ratingColor: "#9fb6cd"
    }
  },
  {
    id: "ensure",
    codename: "Ensure",
    badge: { text: "ELITE OF EVERLAST", color: "#a3d9d1", textColor: "black", shadow: "#000" },
    affiliation: "CENTRAL",
    gender: "남성",
    age: "24세",
    oneLiner: "……기다려. 생각할 시간을 줘.",
    quote: "과거의 낙원도 백지부터 시작했다.",
    themeSongs: [{ title: "Ensure's Theme", url: "https://foolish-red-hkxwapvhau.edgeone.app/Ensure.mp3" }],
    themeColor: "#a3d9d1",
    intro: "에녹 세이비어,\n코드네임 엔슈어(Ensure).\n<span style=\"color:#8abdb6;font-weight:600\">A지부 &lt;센트럴&gt;</span> 소속의 전술 담당이자 핵심 인력이다.\n모두가 인정할 것이다. 그는 천재다. 사고 방식이 기상천외하고 통찰력은 첨예하다.\n\n그러나 가끔 중얼거리는 말을 들어보면,\n본인은 벡터가 될 생각은 없었던 것 같다.",
    story: "[캐릭터 스토리 1]\n인간 중에는 가장 똑똑하고, 이종족과 겨뤄도 넘어설 자가 거의 없다. 작게는 스도쿠에서 이기는 정도고, 크게는 균열 세 개의 공간을 연산해 한꺼번에 종식시킬 정도다. 그가 제시하는 방법은 보통 아무도 생각해내지 못한 방식이기 때문에, 엔슈어는 쉽게 괴짜가 되어버리곤 한다.\n성격이 차분하고 혼자 있기를 극도로 즐긴다. 이런 타입의 천재들이 으레 그렇듯 혼자서도 잘 놀고, 잘 먹고, 잘 잔다. 잘 사는 편이다. 주변에 좋은 인연이 많이 모여있어서 사실상 혼자 시간을 보내는 때는 거의 없지만 말이다.\n\n[캐릭터 스토리 2]\n평범한 대학생이 세상을 구하는 영웅이 되었다.\n원래부터 창작을 하고 살았던 것은 아니다. 스케마 최고의 아카데미 '페이퍼'에서 수리학부 기하학을 전공했고, 정교한 창작보다는 정교한 측정과 계산이 적성에 훨씬 더 잘 맞다. 애석하게도 이능력이 이런 쪽으로 돋아서 적성과 별개로 미래가 고정되어 버렸지만. 예체능이라니 인연에도 없었는데, 그는 지금 생각해도 가끔 황당하다고 실토하곤 한다.\n에녹 세이비어는 테 두꺼운 안경을 쓰고 관심 밖에 있던 안경 쓴 샌님이었다. 그런 그가 네 지부 중에서도 엘리트만 모인다는 A지부에 발령받고, 그 중에서도 최전선에서 현장에 투입되는 센트럴이 되었단다. 길가만 지나다녀도 사람들이 그를 알아보기 시작했다.\n세상에 이런 신데렐라 스토리도 없다. 그는 자기 얼굴이 대문만하게 실린 잡지를 휙휙 넘겨볼 때면 두드러기가 돋은 표정을 짓는다.\n컴퍼스를 잡던 손에 이제는 물감이 묻어있고, 길바닥을 지나면서도 무엇으로 뭘 어떻게 그릴 수 있을지를 고민하는 인생이라니.\n역시 인생은 설계한대로 흘러가지만은 않는 법이다.",
    themeGradient: ["#f7d7d7", "#7fb3ad"],
    vectorType: "CENTRAL-A",
    appearance: {
      height: "182cm",
      features: "옅은 녹색 머리칼, 투명한 회색 눈.\n체향이 지향(紙香)이다. 화방에서나 날 법한 향.\n대단한 미남. 상당히 날카로운 인상으로, 잘 웃지 않는다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#a3d9d1;\">[ 센트럴 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 백정장, 금장 장식</span><br/><span style=\"padding-left:4px;\">- 발목까지 내려오는 흰 코트</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#a3d9d1;\">[ 엔슈어 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">목에 대롱대롱 걸린 두 개의 은 체인이 엉성한 상의를 연결했다. 풀 수 있는 구석을 전부 헐렁하게 풀었다. 보통 현장에 나다니면서 여기저기서 옷매무새를 체크 받는 편이다. 본인은 아무 생각 없을지 모르겠지만.</span></div>"
    },
    psychicPower: {
      name: "공백 서술",
      description: "🫧<span style=\"background-color:#a3d9d1; color:#000; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:12px; flex-shrink:0;\">투명화</span><span style=\"flex:1;\">- 신체가 시야에서 사라진다. 그림자까지.<br/>- 완벽한 은신이다. 다만 시전자의 컨디션 상태에 따라, 지나간 자리에 일렁이는 이펙트가 일어나기도 한다.<br/>- 발자국 등은 지워주지 못한다. 때문에 모래나 진흙 등 흔적이 잘 남는 환경에 약하다.</span>\n🫧<span style=\"background-color:#a3d9d1; color:#000; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:12px; flex-shrink:0;\">실체화</span><span style=\"flex:1;\">- 상상하는 모든 것을 그리거나, 빚거나, 글로 써서 물성을 부여한다.<br/>- 이론상 환경이나 공간을 실체화하는 것도 가능하다. 손으로 표현만 가능하다면. 때문에 '균열'과 비슷한 것을 만들어낼 수 있는 유일한 벡터로 평가받는다.<br/>- 물성이 유지되는 기간은 최대 1일이다.<br/>- 실체화 가능한 창작 도구가 없으면 시전이 불가능하다.<br/>- 반대로, 그릴 수만 있다면 어디서든 시전할 수 있다.</span>"
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n센트럴의 이성, 중재자, 자랑스러운 막내.\n이런 평가를 좀 부담스러워 하는 것 같기는 하다. 어쩌겠는가? 찬사를 아낄 필요가 없는 겸손한 천재다.\n\n감정 표현이 뜸하고 웃음도 드물다.\n생각이 많은 것은 덤이고.\n그래도 아닌 것을 보면 확실하게 '아니다' 표현할 줄 아는 것을 보니, 그 역시 영 물러터진 성격은 아닌 모양이다.",
    leaderComments: {
      qna: " Q: ......해서, 내 생각에는 우리가 선수쳐 이쪽으로 우회하는 게 좋을 것 같다.\n Q: 그대 생각엔 어떻지?\n A: 저기, 근데 그걸 왜 나한테 묻는 거야?\n Q: 그대가 아니면 누구에게 묻지?\n A: ?\n Q: ?",
      comment: "차분하고, 일처리가 좋고, 냉정하며 감정에 휘둘리지 않는다.\n사명감도 좋다. 이대로만 적응하면 좋은 영웅으로 자리잡을 수 있을 것이다.",
      commentHighlight: "아프지 말고.",
      author: "A - THEATER",
      rating: "★★★★★",
      qnaColor: "#5f9ea0",
      qnaShadow: "rgba(138,189,182,.6)",
      highlightColor: "#a3d9d1",
      ratingColor: "#7fb3ad"
    }
  },
  {
    id: "return",
    codename: "Return",
    affiliation: "CENTRAL",
    gender: "남성",
    age: "26세",
    oneLiner: "빌어 봐. 혹시 모르잖아? 내가 예쁘다고 건져갈지.",
    quote: "되돌릴 수만 있다면, 오늘 죽어도 상관없다.",
    themeSongs: [{ title: "Return's Theme", url: "https://violent-yellow-h9jxfrrkzt.edgeone.app/Return.mp3" }],
    intro: "아이덴 아레테,\n코드네임 리턴(Return).\n누군가 구할 성정은 아닌듯 한데, 일단 결론만 보자면 <span style=\"color:#c18c8c;font-weight:600\">A지부 &lt;센트럴&gt;</span> 소속으로 발령받았다.\n에러가 아닌 것을 다행으로 여겨야 할까.\n벡터에 속한 이상 조금 비뚤어지고 짓궂기는 해도 어떻게든 정의를 실현할 수 밖에 없을테니 말이다.\n\n난 그의 입사를 진심으로 환영하고 싶다.\n세상을 위해서라도.",
    story: "[캐릭터 스토리 1]\n그는 민간에 윙크 신드롬을 일으켰다.\n어떤 상황에서도 한쪽 눈을 뜨지 않는데, 마주치면 웃기까지 하니 일종의 팬서비스처럼 보인다. 벡터 일이 장난이냐는 물음에는 \"이미지를 세탁하겠다면서?\" 같은 빙글거리는 말투로 수뇌부를 비웃기도 한다. 덕분에 인지도와 평판 모두 올라가긴 했으니 본부 입장에서는 더 할 말도 없었다.\n이렇듯 쥐어박고 싶을만큼 장난을 치면서도 가끔 세상의 시련은 본인이 다 짊어진 것 같은 표정을 지을 때가 있다.\n그럼 그의 트레이드 마크 같던 '윙크'도 단순한 반항심은 아니겠다고 생각하게 되는 것이다.......\n\n[캐릭터 스토리 2]\n그는 종종 미래를 내다버린 사람처럼 자유롭게 돌아다닌다. 눈총을 받고 뒷담화를 들어도 전혀 상관 없는 사람처럼. 덕분에 지부 안에서 리턴의 평판은 그다지 좋지 않은 편이다.\n그에게는 의외의 일면이 많다. 알고 있는가?\n그가 개인실에서 새벽까지 웅크려 앉아 일기를 쓰고 몰아 읽는다는 사실을 아는가? 그가 한번 되돌린 시간을 어떻게든 입체적으로 기억하기 위해 서툰 선을 그으며 그림을 그린다는 사실을 아는가.\n아니, 우리는 모른다. 눈앞에 보이는 리턴은 언제 아팠냐는 듯이 한쪽 눈을 감고 짓궂게 웃고 있으므로.\n그는 어쩌면 세상에 이해받을 수 있으리라는 기대를 애진작 버렸는지도 모른다.",
    themeColor: "#e5a9a9",
    themeGradient: ["#f7d7d7", "#c18c8c"],
    vectorType: "CENTRAL-A",
    appearance: {
      height: "185cm",
      features: "창백한 분홍색 머리칼, 투명에 가까운 백안\n왼쪽 눈을 항상 감고 다닌다. 웃는 얼굴과 맞물려서 왠지 끼를 부리는 것 같다는 착각이 든다.\n여우상이다. 웃지 않을 때는 눈매가 꽤 날카롭다. 본인도 그것을 아는지 항상 얄쌍한 미소를 짓고 있다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#e5a9a9;\">[ 센트럴 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 백정장, 금장 장식</span><br/><span style=\"padding-left:4px;\">- 발목까지 내려오는 흰 코트</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#e5a9a9;\">[ 리턴 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">깔끔하게 차려입은 듯 하면서도 외투를 걸친 어깨 한쪽이 살짝 흘러내리거나 비대칭적인 실루엣 자아낸다. 특유의 짓궂은 분위기를 풍기는 다소 불량한 착장 방식.</span></div>"
    },
    psychicPower: {
      name: "뒤로!",
      description: "🍭 시간을 뒤로 감을 수 있다. 물리적인 상태, 공간, 기억 등의 정보를 포함한다.\n🍭 <span>시전자 본인은 되돌아가지 않는다.<br/><span style=\"color:#808080;font-size:11px;\">* 때문에 리턴은 능력 시전자인 동시에 자신이 되돌렸던, 혹은 사라져버린 모든 시간을 기억하는 유일한 인물이기도 하다.</span></span>\n🍭 단일 대상만을 지정해서 회귀시키는 것도 가능하다.\n🍭 미래 이동 불가, 시간 정지 불가. 오로지 뒤로 감기만 가능.\n🍭 역행하는 시간 자체에는 제한이 없다.\n🍭 이론상, 시간을 한도 끝까지 돌려서 태초의 '없음' 상태로 만들어 버릴 수도 있다."
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n적으로 만나면 최악이고, 아군으로 붙어도 썩 안심되진 않는다. 행동 패턴을 종잡을 수 없다. 실적도 실력도 굉장하나 동료애가 없어 팀을 안전하게 지킬 인물은 아니다.\n\n헐렁하게 웃고 다닌다.\n조심할 것. 즉흥적인 듯 해도 막상 계산되지 않은 행동이 없다.",
    leaderComments: {
      qna: " Q: 귀하의 입사 사유가 궁금하군.\n A: 굳이 그런 건 왜 물어봐요?\n Q: 내가 그대의 상사이기 때문에.\n A: 아하하하하하!\n A: 아~아. 그냥 심심했어.\n A: 심심하다고 사람 구하러 오다니 얼마나 건전해.",
      comment: "현재 뭔가 견디고 살고 있는 것 같은데, 검사란 검사는 죄다 거부하고 도망만 다니니 나로써도 당최 짐작을 하기가 힘들다.",
      commentHighlight: "가끔 멍하다. 악랄하다가도.\n그럼 마음이 쓰인다.",
      author: "A - THEATER",
      rating: "★★★★☆",
      qnaColor: "#c2b29d",
      qnaShadow: "rgba(229,169,169,.6)",
      highlightColor: "#d2b48c",
      ratingColor: "#c18c8c"
    }
  },
  {
    id: "lucid",
    codename: "Lucid",
    affiliation: "CENTRAL",
    gender: "남성",
    age: "25세",
    oneLiner: "잔류 인원은 구해야 합니다. 미안합니다. 곧 회신하겠습니다.",
    quote: "그럼 내가 기꺼이 세상의 구원이 되리.",
    intro: "루시안 트와일라,\n코드네임 루시드(Lucid).\n태어나서 이렇게까지 사명이 강한 인물을 본 적이 없다. <span style=\"color:#f3e5ab;font-weight:600\">A지부 &lt;센트럴&gt;</span> 소속으로, 간혹 임무 밖에 모르는 전투 기계 같은 면모를 보이기도 한다.\n\n그는 죽는 순간까지 요구조자의 손을 놓지 않을 것이다.\n어깨에 힘을 좀 빼고 살아도 괜찮으련만.",
    story: "[캐릭터 스토리 1]\n스케마 동부는 [이프에덴]이다.\n창공의 땅이라고도 한다. 옛 낙원을 재현한 것처럼 신성하며, 땅이 간헐적으로 공중에 떠 있는 독특한 지형 환경을 가지고 있어서 신이 그곳을 훑고 지나갔다는 낭설이 자주 돈다.\n이프에덴의 공중 땅에는 날개를 가지고 있는 이종족이 거주하며, 에덴인-인간-은 하늘을 날 수 없으니 전부 지상 대지에 모여있다.\n고층의 건물이 많고 종교 시설이 크게 발달해 있다. 가령 성당이라거나. 있을지 없을지, 처음부터 없었는지도 모를 신을 찾고 환영하기 위해.\n위성으로 보면 그렇게 아름다울 수가 없다. 빛과 치유의 힘을 가진 이능력자가 이 땅에 모여 있다. 전부까지는 아니겠지만, 대부분.\n\n[라테아에 대하여]\n이프에덴의 랜드마크이자 가장 큰 성당이라고 하면 누구나 라테아 대성당의 이름을 말한다. 주로 아이들을 위탁해 성자로 기르거나 성가대로 육성하기도 하는데, 겉만 번지르르한 석조 성당이고 실상 까 보면 교육 기관에 가깝다.\n루시안 트와일라는 이프에덴 출신의 에덴인이자 라테아 대성당의 우수한 성자 후보였다. 교육생이라는 호칭이 일단 맞겠다. 유년기부터 성당에 들어와 성가와 기도하는 법을 배우고, 아기의 머리에 이름 모를 물을 부으면서 축복하는 법을 배웠다.\n비록 결말에는 성자가 아니라 벡터라는 영 이상한 길로 빠지게 되기는 했지만, 라테아의 '아웃풋'으로 따지자면 루시드가 가장 훌륭한 사례다.\n라테아 대성당은 아직도 그의 얼굴을 좀 쓰고 싶어하는 모양이다. 그러나 북부의 벡터가 된 이후 그는 다시는 이프에덴으로 돌아간 적이 없다.\n\n[캐릭터 스토리 2]\n침착하다. 멋지다. 강하다.\n이 세 가지가 루시드라는 벡터를 평가할 때 가장 많이 등장하는 수식어다. 무심하게 지나칠 것 같은 얼굴을 하고서 타인의 손을 아무렇지 않게 잡고, 어둠을 스스럼없이 밝혀버린다. 아마 이 지부에서 루시드의 도움을 받아보지 않은 사람은 아무도 없을 것이다.\n과하게 이성적이고 굉장히 냉철하다. 이런 성격 때문인지 그가 가장 많이 받는 오해 중 하나는 '경멸' 또는 '무시'에 관한 것인데, 정작 그는 자기자신에 대한 기준이 각박할 뿐 타인에게까지 까다롭게 구는 성격은 아니다.\n아니, 어쩌면 관대한 편일지도 모르겠다. 상대가 약하다는 인지가 들면 본능처럼 마음이 물러지는 경향이 있다. 본인은 이런 성격에 대해 제대로 인지하고 있지는 않은 것 같다.",
    themeColor: "#f3e5ab",
    themeGradient: ["#f3e5ab", "#d4af37"],
    vectorType: "CENTRAL-A",
    appearance: {
      height: "184cm",
      features: "금발, 벽안, 전형적인 정석미남.\n따뜻하지도 날카롭지도 않다. 평소 표정이 거의 없다.\n거의 완벽에 가까운 얼굴 조형을 가지고 있는데, 정작 용모에 대한 칭찬에는 면역이 없다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#f3e5ab;\">[ 센트럴 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 백정장, 금장 장식</span><br/><span style=\"padding-left:4px;\">- 발목까지 내려오는 흰 코트</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#f3e5ab;\">[ 루시드 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">반듯하게 다려 입은 정석 유니폼. 리폼 한 번 하지 않고 목 끝까지 답답하게 챙겨 입었다.<br/>주목할만한 포인트라면 손목에 메인 '전혀 어울리지 않는' 흰색 리본이겠다. 워낙 장신구가 없어 유달리 눈에 톡 튄다.</span></div>"
    },
    psychicPower: {
      name: "그늘 사냥",
      description: "✨ 빛을 감축하거나 증폭해서 다양한 전략을 가능하게 한다.\n✨ 순간이동, 시야섬멸, 광역차단, 공격.\n✨ 광원이 없으면 모든 능력이 무효화된다.\n✨ 아주 약한 빛만 있어도 막강한 능력을 낼 수 있다. 인위적인 빛도 상관 없다.\n✨ 시전자 루시드는 실낱 같은 빛도 아주 커다란 빛으로 이끌어내는 데 천부적인 재능이 있다."
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n\n손을 쉽게 내밀고 쉽게 잡아준다.\n벡터 발 히어로가 구원자 취급을 받는 일이 하루이틀 일은 아니나, 그는 정말로 너무 많은 사람의 목숨을 구했다.\n\n장난 같은 건 쳐 본 적도 없고 앞으로도 칠 일이 없다.\n칼 같고 딱딱한 그 성격 덕분에 객관성을 잃지 않는다...... 아마 우리가 상상할 수 있는 가장 완벽한 형태의 센트럴일 것이다.",
    leaderComments: {
      qna: " Q: 보고.\n A: 남쪽 경계 지하도에서 균열 발생, 사건 발생 7분 내 진입하여 민간인 4명과 퍼즐 모두 확보. 추가 사상자 없으며 피해에 대해서는 터널 인계 완료했습니다.\n A: 이상입니다.",
      comment: "철혈 같은 태도로 숨겼다 생각할지 모르겠으나 매 임무마다 크고작은 불안에 시달림을 안다.\n그는 납득하려 하지 않겠지만,",
      commentHighlight: "그에게는 파트너가 필요하다.",
      author: "A - THEATER",
      rating: "★★★★☆",
      qnaColor: "#b0c4de",
      qnaShadow: "rgba(173,216,230,.6)",
      highlightColor: "#add8e6",
      ratingColor: "#f3e5ab"
    },
    themeSongs: [{ title: "Lucid's Theme", url: "https://ruling-ivory-yikchguuiz.edgeone.app/Lucid.mp3" }]
  },
  {
    id: "alter",
    codename: "Alter",
    affiliation: "CENTRAL",
    gender: "남성",
    age: "35세",
    oneLiner: "Show must go on, sweetie. 이것도 나름 공적 업무 시간인데 정신 빼놓고 있으면 어떡해.",
    quote: "살고 죽는 데 완벽이 어디 있나?",
    intro: "에이드리언 피스,\n코드네임 얼터(Alter).\n<span style=\"color:#5080FF;font-weight:600\">A지부 &lt;센트럴&gt;</span> 소속, 매 순간 상쾌한 얼굴로 전장을 활보한다. 헐렁해 보여도 인생의 절반을 벡터로 산 베테랑 중의 베테랑이다.\n\n긴장감이라곤 없어서 가끔 얄밉기는 하지만,\n......\n......그래, 모든 구조가 비장할 필요는 없지.",
    story: "[캐릭터 스토리 1]\n에이드리언 피스는 소규모 극장에서 무대를 전전하던 연극배우였다.\n인생의 절반을 배우로 살았지만, 그렇게 유명하지 않다는 사실을 본인도 알고 그의 팬들도 알았다. 그래도 연기하는 인생이 행복했다. 유명세를 위해 꿈을 팔 생각은 없었다.\n오히려 벡터로 전향하고 나서 얼굴이 더 크게 알려졌다. 훈련된 쇼맨십이 그의 캐릭터를 만들었으며, 사람들은 작은 대사에도 쉽게 열광했다. 세상의 주연이 된 것 같았다. 얼떨떨하지 않았다면 솔직히 거짓말이다.\n\n센트럴로서 균열에 몸을 던지고, 가끔 그런 것은 아주 거짓말인 것처럼 평범하게 인터뷰를 찍고 시민들과 인사를 나누면서 그는 자신에게 새로 배정된 이 '히어로'라는 역할이 꽤 웃기다고 생각했다.\n가까이서 보면 촌극이고 코미디인데 일단 능력껏 구하기만 하면 환호가 돌아왔다. 피드백 구조가 참으로 단순했다. 뭐, 오히려 좋잖은가? 배역에 충실하기로 마음 먹으면 이전의 삶과 크게 달라질 것도 없었다.\n벡터는 그에게 두 번째 무대였다. 흰 옷을 입고 웃음을 날릴 준비 정도는 애저녁에 끝나 있었다.\n\n[캐릭터 스토리 2]\n각성은 무대 사고에서 발생했다.\n뉴스에는 단순히 <극장 붕괴 사건> 정도로 보도되었는데, 에이드리언은 그날 자신의 인생이 끝났다고 생각했다. 평생 스포트라이트를 받았던 무대가 망가졌다는 감성적인 이유 때문이 아니라 건물에 깔려 죽을 뻔했기 때문이다.\n면접 당시 그 자신은 이능력이 생길 당시 단순히 '죽고 싶지 않다'는 생각만 했다고 했다. 그런데 사실 얼터의 능력을 보면 그는 연기하던 자신이 죽어버릴까봐 걱정했던 것 같기도 하다. 머리부터 발끝까지 다른 사람이 될 줄 아는 이능력이라니, 배우로서는 최상 아닌가.\n\n그는 배우이던 자신을 사랑하는 사람이고, 과거의 자신을 사랑하는 지금의 자신 또한 사랑하며, 앞으로 사람을 구하며 살게 될 자신 또한 사랑한다. 자존감이 높고 상처는 잘 받지 않는다. 그러나 종종 벡터 명찰이나 훈장 같은 것들은 종영 후 받은 트로피보다 더 무겁게 느껴진다고 한다. 아마 직업적인 무게감 때문일 것이다.\n'얼터'가 된 이후로는 텔레비전, 라디오, 하다못해 연극이나 영화 같은 대중 문화도 잘 즐기지 않는다. 괜한 미련이 생겨서 좋을 것이 없다는 것이 그의 주장인데, 입은 웃고 있어도 눈이 썬글라스에 가려져 있기 때문에 진심을 간파하려면 까다롭기만 하다.\n\n[캐릭터 스토리 3]\n아무것도 두려워 보일 것이 없는데, 의외로 그도 무서워하는 것이 있다.\n암흑이다. 새카매서 아무것도 보이지 않는 상태. 임무가 늦어 불 꺼진 복도를 걸어가야 할 때, 하다 못해 사방이 깜깜한 균열에 들어가야 할 때도 자연스럽게 파트너를 앞세워 눈총을 받곤 한다.\n사고 이후부터 생긴 공포증이라 좀 오래됐다. 본인도 종종 잊어버리고 지낸다. 잊어버린 척 하는 건지, 정말로 잊어버린 건지.\n\n<div class='mt-4 flex flex-col items-start'><button class='win95-button !bg-[#eee] px-4 py-1.5 flex items-center gap-2 shadow-[2px_2px_0_0_#808080] active:shadow-inner border-2 border-white border-r-[#808080] border-b-[#808080] group' onclick=\"appNavigate('theater')\"><div class='w-4 h-4 bg-[#C5B358] flex items-center justify-center shrink-0 border border-black shadow-[1px_1px_0_#fff]'><div class='w-1.5 h-1.5 bg-white'></div></div> <span class='font-bold text-[11px] text-black'>시어터 프로필 바로가기</span> <span class='text-black group-hover:translate-x-1 transition-transform text-[11px]'>▸</span></button></div>",
    themeColor: "#305CDE",
    themeGradient: ["#305CDE", "#00D4FF"],
    vectorType: "CENTRAL-A",
    appearance: {
      height: "188cm",
      features: "짧게 다듬은 흑발, 가끔 색을 특정하기 힘든 까만 눈동자. 시원스럽게 잘생겼다.\n빙글빙글 웃고 있지만 않았더라면 인상이 꽤 날카로웠을 것이다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#305CDE;\">[ 센트럴 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 백정장, 금장 장식</span><br/><span style=\"padding-left:4px;\">- 발목까지 내려오는 흰 코트</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#305CDE;\">[ 얼터 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">대충대충 걸쳐 입은 유니폼. 목 끝까지 보수적으로 가린 파트너를 옆에 두고 있어서 상대적으로 더 불량해 보인다.<br/>알이 까만 선글라스를 소지하고 있다. 옷깃에 걸치고 언제든 썼다 벗었다 한다.</span></div>"
    },
    psychicPower: {
      name: "카피",
      description: "👤<span style=\"flex:1;\">손바닥 접촉을 통해 상대방의 특성을 복제한다.</span>\n👤<span style=\"flex:1;\">주로 이능력을 복제하지만, 외형을 카피해서 도플갱어가 될 수도 있다.</span>\n👤<span style=\"flex:1;\">영원히 가지고 오는 것은 불가하다.<br/><span style=\"color:#808080;font-size:11px;\">* 카피한 특성의 최대 지속 시간: 3분</span></span>\n👤<span style=\"flex:1;\">카피한 이능력은 카피 당한 주인과 100% 똑같이 사용 가능하다.</span>\n👤<span style=\"flex:1;\">능력을 쓰기 직전에 눈빛에 깜빡이는 점멸 신호가 있다.</span>"
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n살고 싶은 대로 사는 것 같은데 실적은 좋다.\n단점이라면 약간 재수가 없고, 그것 빼고는 등 뒤를 맡겨도 좋을만큼 장점 뿐이다......\n\n능청스럽다. 장난기도 많다. 그가 진심으로 화를 내는 건 ---. ---적어도 나는 못 본 것 같다.",
    leaderComments: {
      qna: " Q: 이번 외곽에ㅅ-\n A: -터졌던 균열~. 안 그래도 시간 남아돌길래 내가 가서 슥삭 좀 손 보고 왔어. 어때, 고맙지. 네 할 일 덜어줘서 내가 예뻐죽겠지, 키티.\n A: 그니까 이제 눈이나 좀 붙여.\n Q: -\n Q: ......허어.",
      comment: "장난 치는 것을 보고 있자면 진절머리가 날 정도로 철이 없는데, 어쩐지 한 번도 '정말' 골치를 썩인 적은 없다.",
      commentHighlight: "노련하다. 그 점은 인정할만 하다.",
      author: "A - THEATER",
      rating: "★★★★★ (EX)",
      qnaColor: "#E0E8FF",
      qnaShadow: "#E0E8FF",
      highlightColor: "#5080FF",
      ratingColor: "#305CDE"
    }
  },
  {
    id: "savory",
    codename: "Savory",
    affiliation: "CENTRAL",
    gender: "남성",
    age: "36세",
    oneLiner: "내가 옆에 있으니까 같이 고민해봐요.",
    quote: "‘사랑하는 법’도 배워야 아는 시대 속에서,",
    themeSongs: [{ title: "Savory's Theme", url: "https://accused-tan-lbtxvxnnkv.edgeone.app/Savory_1.mp3" }],
    intro: "잉센 엔야드,\n코드네임 세이버리(Savory).\n<span style=\"color:#FF8E7A;font-weight:600\">A지부 &lt;센트럴&gt;</span> 소속, 무너진 땅 속에서도 아름다운 구석을 찾는 낭만주의자.\n\n사람을 사랑하는 법을 잊었는가?\n걱정하지 마라. 울며 손 뻗어도 맞잡아 줄 다정의 화신이 여기에 있으니.",
    story: "[캐릭터 스토리 1]\n집단 테러를 일으킨 12명의 에러가 벡터로 들어왔다.\nA지부와 C지부가 뒤집어졌다. 각각 여섯 명의 범죄자였던 요원을 받아들이게 된 입장에서 충분히 경악스러울만 했다. 그들을 대동하고 A지부로 함께 들어온 백발의 미소년이 바로 세이버리였다. 얼굴에 평화롭기 그지없는 예쁜 미소를 걸치고 있었다. 그때의 나이가 열다섯이었다.\n\n세이버리의 코드네임을 처음 듣는 사람은 '뭐 그런 단어를 코드네임으로 썼냐'며 쉽게 비웃고는 하는데, 막상 그의 능력을 한번이라도 겪어본 사람에게 물으면 그보다 적합한 이름은 없다고 딱 잘라 말한다.\n그의 능력을 한번도 안 겪은 사람은 있어도 한번만 겪은 사람은 없다. 정확히는 두번, 세번을 다시 겪으려고 스스로 그를 찾아오는 편이다. 덕분에 피리 부는 사나이 같은 기이한 광경이 연출되기도 한다. 눈 풀린 사람들 사이에 홀로 웃고 있는 그의 모습은 괴기스러울 정도로 평화롭다.\n그건 소년일 적이나, 서른을 한참 넘긴 지금이나 똑같다.\n\n[캐릭터 스토리 2]\n세이버리의 입사 초기 포지션은 '아리아'였다.\nCORE가 현재의 CORE가 되기 이전의 이야기다.\n한 팀을 구성하는 이니셜의 첫 자를 맡는 인원을 두고 그 팀의 '에이스'라고 하는데, 당시 아리아 팀이었던 SCORE의 S를 세이버리(Savory)가 맡고 있었다. 입사 후 10년 간 아리아로 활동했고 이후 10년을 센트럴로 활동했다. 어느 모로 보나 대단한 베테랑이다.\n\n에이스를 꿰찰 정도로 유능한 아리아였던 그가 돌연 센트럴로 바뀐 이유는 세이버리 자신도 잘 모른다. 임무 중 우연히 균열에 한번 휘말렸을 뿐이다.\n죽지 않고 살아서 돌아왔더니 일방적 통보로 테스트를 다시 받고, 며칠 내로 변경 조치가 내려졌다. 변화에 예민한 타입이 아니었기 때문에 그는 그 결정을 순순히 받아들였다.\n\n그는 센트럴, 아리아, 라인, 터널을 아울러 어떤 포지션이 투입되어도 능력을 활용할 여지가 있다. 소위 말하는 올라운더형 인재다.\n현재는 긴급 대체 인력으로 가장 많이 호명되며, 두루 쌓은 실적 때문에 벡터 내에서 가장 영향력 있는 인물 중 하나로 손꼽히기도 한다.\n정작 그 스스로는 자신이 벡터이며 영웅이라는 데 그렇게 큰 감흥이 있는 것 같지 않다. 아주 오랜 시간동안 벡터로서 현장에 자주 투입되었지만 화려한 액션이나 격한 전투를 여전히 꺼려한다.\n\n[캐릭터 스토리 3]\n세이버리에게는 터널 직군의 정식 파트너가 있다. 코드네임 히어(Here)라고 한다.\n흔한 일은 아니다. 터널은 지부 밖을 웬만해서 벗어나지 않는 사무직이라는 점에서 현장을 뛰어다니는 센트럴을 전혀 서포트해줄 수 없기 때문이다.\n그럼에도 세이버리는 그 나무 같은 청년의 손을 잡고 벡터 본부에 통보를 날렸다. 고정점도 없이 방랑자를 전전하던 본부의 편리한 치트키가 처음으로 자신의 의견을 피력한 것이다.\n\n\"눈앞이 까매지는 기분이 뭔지 알겠더라고.\"\n히어가 웃었다.\n\"스무 살때부터 서로를 알았는데, 십 년이 지난 지금도 세이에 대해 다 알지는 못해.\"\n\n<div class='mt-4 flex flex-col items-start'><button class='win95-button !bg-[#eee] px-4 py-1.5 flex items-center gap-2 shadow-[2px_2px_0_0_#808080] active:shadow-inner border-2 border-white border-r-[#808080] border-b-[#808080] group' onclick=\"appNavigate('here')\"><div class='w-4 h-4 bg-[#2d5a4c] flex items-center justify-center shrink-0 border border-black shadow-[1px_1px_0_#fff]'><div class='w-1.5 h-1.5 bg-white'></div></div> <span class='font-bold text-[11px] text-black'>히어 프로필 바로가기</span> <span class='text-black group-hover:translate-x-1 transition-transform text-[11px]'>▸</span></button></div>",
    themeColor: "#FF6F61",
    themeGradient: ["#FF6F61", "#FFB38E"],
    vectorType: "CENTRAL-A",
    appearance: {
      height: "191cm",
      features: "허리까지 기른 긴 백발을 비녀로 반묶어 정리했다.\n언제나 반쯤 웃고 있는 분홍색 눈을 가지고 있다.\n키가 매우 크지만, 움직임이 부드럽고 걸음이 느긋해서 딱히 위압적이라는 느낌은 들지 않는다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#FF6F61;\">[ 센트럴 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 백정장, 금장 장식</span><br/><span style=\"padding-left:4px;\">- 발목까지 내려오는 흰 코트</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#FF6F61;\">[ 세이버리 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">정갈하고 보수적으로 갖춰 입었다. 웬만하면 복식을 생략하지 않지만, 손이 답답한 것을 선호하지 않아서 장갑은 자주 뺀다.</span></div>"
    },
    psychicPower: {
      name: "아로마사이트",
      description: "🥀 현장의 공기를 날리고, 목표 상대가 가장 그리워하는 향기를 만들어 '향수'를 불러일으킨다.\n🥀 공기에 물성을 부여하여 개인의 인지와 결합한다. 환각과 유사하다.\n🥀 목표 상대의 가장 사적인 환상을 만들어낸다. 만질 수도 없는 것으로 감정을 뒤흔들고 이성을 흐트러뜨리는 것이 능력의 본질이다.\n🥀 능력을 사용하는 것이 눈에 잘 보이지 않는다.\n🥀 지속 시간은 '향기가 스스로 옅어질 때까지', 또는 상대가 감정적으로 지쳐서 쓰러질 때까지.\n🥀 능력을 쓰는 동안 시전자: 세이버리는 상대의 감정을 묵묵하게 받아낸다. 상대가 제풀에 꺾여 쓰러질 때까지 이야기를 듣고, 정신을 잃거나 격분하면 향을 거두고 '안전하게 처리'한다"
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n말수가 딱히 많은 편은 아니다. 그럼에도 알 수 있다. 그는 따뜻한 사람이다. 벡터라는 삭막한 공간에 갇혀있는 것이 이해되지 않을 정도로.\n\n그는 모든 것을 잃은 우리에게도 아직 다정할 용기가 있다고 말한다. 근거를 물으면 웃을 뿐이나, 어쩐지 그 터무니없는 이상론도 기꺼이 믿고 싶다. 적어도 내 앞의 그가 먼저 다정을 실천하고 있으므로.",
    leaderComments: {
      qna: " Q: 그댄 어쩌다 여길 들어왔나?\n A: -우리가 하는 일이 반드시 정의구현이라고는 생각하지 않아요.\n A: 그러나 더 나은 세상에 가장 적극적으로 이바지하는 길임은 압니다.\n Q: 그렇다면 사명, 대의, 선의지, ......\n Q: ......이유는 그 뿐?\n A: 그 뿐.",
      comment: "이상을 꿈꾸는 법도, 이상을 실현하는 법도 잘 알고 차근차근 실천하는 인물이다.",
      commentHighlight: "그러니 우리의 할 일은 그저 눈을 뜨는 것 뿐.\n무너진 세상도 사랑하는 법은 그가 알고 있다.",
      author: "A - THEATER",
      rating: "★★★★★ (EX)",
      qnaColor: "#FFE4D1",
      qnaShadow: "#FFB38E",
      highlightColor: "#FF8E7A",
      ratingColor: "#FF6F61"
    }
  },
  {
    id: "theater",
    codename: "Theater",
    title: "Leader of EVERLAST",
    badge: { text: "LEADER OF EVERLAST", color: "#C5B358", textColor: "black", shadow: "#000" },
    affiliation: "CENTRAL",
    gender: "남성",
    age: "34세",
    oneLiner: "복귀해. 지원은 필요 없다. 세 번 말하게 하지 마라.",
    quote: "설령 신이 있다 해도, 죽을 사람은 죽는다.",
    themeSongs: [{ title: "Theater's Theme", url: "https://considerable-orange-2dmtjnmnzq.edgeone.app/Theater.mp3" }],
    intro: "세레 반 헤타이로이,\n코드네임 시어터(Theater).\n<span style=\"color:#EEE8AA;font-weight:600\">A지부 &lt;센트럴&gt; 팀장</span> 이자 <span style=\"color:#EEE8AA;font-weight:600\">A지부 리더</span>를 맡고 있다.\n\n긴 설명은 생략한다.",
    story: "[캐릭터 스토리 1]\n'지부장'.\n지부의 총책임자를 의미하는 직책 이름이다.\n꼭대기에 앉아있으니 세상 무서울 것이 없을 것 같지만, 실상 일반 요원들은 상상할 수 없는 다양한 압박을 견디고 군더더기를 뒤집어쓰는 것이 일이다.\n보통 애정으로는 감당할 수 없다. 애정이 있다가도 질려서 포기하곤 한다. A지부는 사람이 죽고 그만두는 빈도가 잦은만큼 유독 갈아치워지는 정도가 심했다.\n\n시어터가 아주 어린 나이에 큰 지부를 떠안게 된 데는 그런 이유가 있었다.\n\n세레 반 헤타이로이는 스케마를 덮쳤던 자연재해급의 폭우를 단신으로 막아내고 화려하게 스카우트 되었다. 그 즈음 그는 이미 자신의 능력을 완성형으로 다룰 줄 아는 상태였다.\n고속 승진을 겪던 당시를 회상할 때의 시어터의 얼굴은 썩 유쾌하지 않다. 승진은 -그의 노고에 대한- 일종의 보상이었다. 눈을 뜨면 이 지부, 저 지부로 짐짝처럼 배송되어 굴려지는데 무급이기까지 했다면 그는 진작 벡터를 관두었을 것이다.\n\n일에 치여 살다가 더 올라갈 구석이 없던 차에, 지부장직이 공석이 된 A지부가 본부의 관할로 굴러떨어졌다. 시어터는 선물처럼 A지부를 품에 안게 되었다. 모두가 버리고 도망간 대단한 직급도 자연스럽게 딸려왔다.\n낙하산이기는 했지만 처음으로 생긴 내 공간이었다. 그가 선뜻 '알겠다'고 받아들였을 때 의외라는 표정을 짓던 결정권자의 표정을 시어터는 아직도 선명하게 기억하고 있다.\n\n\"이 지부가 '남는' 카드였다는 것을 본인들도 알기는 했나 보지. 대놓고 잘 굴러가던 바다나 하늘 지부를 주려니 아깝고, 개발도 덜 끝난 지하 지부를 맡기려니 양심에 찔리고.\"\n\n그가 신랄하게 혀를 차면 얼터는 박수를 치며 즐거워 했다. 시어터는 이제 본부의 수직적이고 고압적인 체계에 완전히 신물이 났다.\n\n지킬 것이다. 버리듯이 맡게 된 이곳을 보란듯이 잘 길러 싫은 소리 하나 못 하게 만들어줄 것이다. 시어터가 가진 사명은 그렇게나 단순했다. 단순해도 흔들리지 않는 뜻을 가지기란 어려운 법인데, 이 신념을 그는 지부장직을 얻은 당시부터 지금까지 날카롭게 벼려두고 있다.\n\n시어터가 의지할 구석은 위에도 없고 아래에도 없다.\n지부와 본부를 사이에 두고 '명함만 화려한 중간 다리' 역할을 하고 있다는 사실을 본인이 가장 잘 알고 있다. 피곤하지 않을 때가 없어서 예민함을 항상 억누르고 산다.\n\n그래서 가끔 멍하니 앉아있을 때가 있다.\n그럴 때는 그를 그냥 좀 내버려두자.\n오랫동안 무너지지 않기 위해서는 스스로를 충전하는 시간도 필요한 법이니까.\n\n[캐릭터 스토리 2]\n시어터의 수많은 별명 중 하나는 '살아있는 재앙'이다.\n멸칭에 가까운데, 그것보다 정확하게 그의 능력을 설명하는 이름도 없으니 아이러니한 일이다. 센트럴 중 가장 전투인력에 가까운 인물이면서 정작 일에 치여서 현장에 출현하는 일은 거의 없다.\n\n그의 이 대단한 이능력의 출처는 반순혈이라는 데 있다.\n여기서 순혈이란 네 가지 종류로 나뉜다.\n시초가 천상에서 힘을 가지고 내려온 천사의 후예 이그니스,\n원소를 관장할 권한을 가진 신왕 레이,\n우주 바깥에서 숨쉴 수 있는 요정 _ _ 시,\n만물과 언어의 기원 ◼︎◼︎◼︎◼︎가 그들이다.\n그들의 이능력은 '인간' 이능력자와 달리 에너지가 뒤섞여 만들어진 모조품 따위가 아니다. 시어터는 이 중 선천적으로는 아무 케이스에도 들어가지 않고, 죽다 살아나서 후천적으로 신을 받은 경우에 해당한다. 반은 모조품이고 반은 모조품이 아닌 상태. 그러나 어떤 이종족도 아니고 그냥 인간이다.\n\n코드네임 뷰어는 그를 두고 '그릇이 넓고 단단한 사람' 이라고 표현하곤 한다.\n\"어떻게 살아있는지 잘 모르겠네. 몸 구조가 좀 이상해.\"\n그가 볼펜으로 턱을 긁었다.\n\"다른 사람 같으면 진작 산산조각 나서 세상의 영양분으로 돌아갔을 거예요. 대체 무슨 일이 있었던 거예요?\"\n그런: 어린 시절에 관한 질문을 받으면 시어터는 딱 잘라 \"아무 기억도 없다.\" 고 말한다. 그러나 표정이 미묘한 데서 그게 완전히 사실은 아님을 알 수 있다.\n적어도 트라우마가 있어 보이지는 않으니 다행인 일이다.\n\n이능력을 오래 사용하면 종종 몸에 든 것이 통제 불능 상태로 날뛸 때가 있다. 평소의 성격이 잡아먹혀 마치 이중인격처럼 보이기도 하는데, 시어터는 이 현상을 통제하기 위해 꽤 오랜 시간 애를 먹고 있다.\n자아가 마모되는 감각. 그건 겪어보지 않은 사람은 심정을 짐작할 수 없다.\n\n벡터를 둘러보다 보면 자신을 자신이게끔 붙잡아줄 파트너가 반드시 필요한 요원이 있다. 시어터 역시 그 중 한 사람이다. 겁이라고는 한 톨도 없는 목소리가 저를 \"시어터\" 라고, 하다못해 \"키티\" 라고 애칭 한 번 불러주기만 해도 이성이 크게 회복되니 말이다.\n그래서 그는 자신의 파트너를 내심 그렇게나 애틋해 한다.\n그의 태평한 파트너가 그 사실을 알고 있는지는 모르겠지만.\n\n<div class='mt-4 flex flex-col items-start'><button class='win95-button !bg-[#eee] px-4 py-1.5 flex items-center gap-2 shadow-[2px_2px_0_0_#808080] active:shadow-inner border-2 border-white border-r-[#808080] border-b-[#808080] group' onclick=\"appNavigate('alter')\"><div class='w-4 h-4 bg-[#305CDE] flex items-center justify-center shrink-0 border border-black shadow-[1px_1px_0_#fff]'><div class='w-1.5 h-1.5 bg-white'></div></div> <span class='font-bold text-[11px] text-black'>얼터 프로필 바로가기</span> <span class='text-black group-hover:translate-x-1 transition-transform text-[11px]'>▸</span></button></div>\n\n[캐릭터 스토리 3]\n보고서 제출을 위해, 또는 조언 요청을 위해 지부장실 앞에 섰다가 노크 한 번 하지 못하고 자신을 찾아온 후배들이 있으면 얼터는 \"걔 장난기 되게 많은데.\" 라는 말로 시어터를 일축한다.\n\n괜히 하는 말이 아니다. 보통 사람이 알아차리기 어려운 농담을 해서 티가 잘 나지 않을 뿐이다.\n평상시에는 냉정하고 얼굴에 드러나는 표정이 없기 때문에, 임무 중에는 끊고 맺음이 확실하기 때문에 철혈이라는 오해를 자주 받기는 한다.\n억울하게도 시어터는 타인을 쉽게 괄시하거나 경멸하는 부류의 사람이 아니다. 조언을 구하러 온 사람에게는 따박따박 아는 선에서의 도움을 제공하고, 실수가 발생하면 할 수 있는 한 눈 감고 덮어주기까지 하는데 복도를 지날 때마다 기겁을 하고 도망가는 어린 요원들을 보면서 가끔 황당함을 느낄 때도 있다.\n\n<div class='my-4 p-1 border-2 shadow-[2px_2px_0_rgba(255,255,255,0.2)] border-[#808080] bg-[#333] max-w-[340px]'><div class='p-3 flex flex-col gap-2 font-sans shadow-inner bg-[#f0f0f0]'><div class='flex justify-between items-center px-1 mb-1 border-b border-[#ccc] pb-1 text-[9px] text-[#999] uppercase tracking-tighter'><div class='flex items-center gap-1'><div class='w-1 h-1 bg-[#999]'></div><div class='w-1 h-1 bg-[#999]'></div><div class='w-1 h-1 bg-[#999]'></div><span>LTE</span></div><span class='font-bold whitespace-nowrap overflow-hidden text-ellipsis px-2'>Alter</span><div class='flex items-center gap-1'><span>14:30</span><div class='w-4 h-2 border border-[#999] p-[1px]'><div class='bg-[#999] h-full w-[80%]'></div></div></div></div><div class='flex flex-col items-start'><div class='flex items-center gap-1 mb-1 ml-1'><div class='w-5 h-5 bg-[#305CDE] text-white border border-[#455A64] flex items-center justify-center text-[8px] font-bold'>A</div><span class='text-[10px] text-[#666] font-bold'>Alter</span></div><div class='max-w-[85%] px-3 py-2 rounded-2xl text-[12px] leading-tight shadow-sm relative bg-white text-black border border-[#ddd] rounded-tl-none'>삐칠 게 아니라 생각을 좀 해 봐, 키티. 걔네 나이 때 너는 안 그랬냐고.</div></div><div class='flex flex-col items-end mt-1'><div class='max-w-[85%] px-3 py-2 rounded-2xl text-[12px] leading-tight shadow-sm relative bg-[#C5B358] text-black border border-[#A69542] rounded-tr-none'>안 그랬다.</div></div><div class='flex flex-col items-start mt-1'><div class='flex items-center gap-1 mb-1 ml-1'><div class='w-5 h-5 bg-[#305CDE] text-white border border-[#455A64] flex items-center justify-center text-[8px] font-bold'>A</div><span class='text-[10px] text-[#666] font-bold'>Alter</span></div><div class='max-w-[85%] px-3 py-2 rounded-2xl text-[12px] leading-tight shadow-sm relative bg-white text-black border border-[#ddd] rounded-tl-none'>그럼 할 말이 없긴 해.</div></div></div></div>\n\n그를 오래 겪은 시니어들은 시어터를 두고 좋은 상사라고 말한다.\n할 말은 앞에서 끝내고 뒤끝이 없다는 점에서 가장 그랬다. 좀 맹랑하게 기어올라도 어디까지 하나 보자고 세 번은 참아주고, 무모하게 덤비면 뒤를 살펴준다는 점도 그의 꽤 괜찮은 점이었다.\n\n\"하여간 꽉 막힌 사람은 아니야.\"\n얼터가 테이블을 치다가 도로 선글라스를 걸쳤다. 입꼬리가 말려 올라가 있었다.\n\"나름 귀여운 구석도 있어. 생각해 봐. 걔도 이제 겨우 서른 넷이라니까.\"",
    themeColor: "#C5B358",
    themeGradient: ["#C5B358", "#EEE8AA"],
    vectorType: "CENTRAL-A",
    appearance: {
      height: "187cm",
      features: "긴 금발을 허리 길이까지 길렀다. 한쪽은 금빛의, 다른 쪽은 은빛의 오드아이를 가지고 있는데, 본인이 넌지시 흘린 바에 따르면 둘 중 한쪽은 후천성이다.\n손가락이 유독 길고 정갈하다. 그렇게 예쁜 손으로 뭔가 처단하는 데 망설임이 없다니 이따금 무서울 지경이다.\n\n피부가 마치 건강하지 않은 사람처럼 하얗다.\n<div style=\"background-color:#0A84FF; color:white; padding:8px 14px; border-radius:16px; border-bottom-left-radius:4px; display:inline-block; font-size:13px; margin-top:10px; box-shadow:1px 1px 4px rgba(0,0,0,0.2);\">밖엘 안 나가고 콕 틀어박혀 일만 하고 앉아있으니까 그런 거 아니야.</div>",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#C5B358;\">[ 센트럴 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 백정장, 금장 장식</span><br/><span style=\"padding-left:4px;\">- 발목까지 내려오는 흰 코트</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#C5B358;\">[ 시어터 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">단정하다. 다른 일반/정예 센트럴보다 눈에 띄게 긴 코트를 어깨에 걸치고 다닌다.<br/>왼손에 긴 소드스틱을 쥐고 있다. 본래 의도보다는 주로 지팡이로 쓰는 모양이지만.</span></div>"
    },
    psychicPower: {
      name: "광휘의 개선",
      description: "<div style=\"display:flex; flex-direction:column; gap:8px;\">\n  <div>\n    <div style=\"background-color:#C5B358; color:#000; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:11px; display:inline-block; margin-bottom:12px; margin-top:8px;\">[하우스]</div>\n    <div style=\"margin-bottom:12px;\">\n      <div style=\"display:flex; align-items:flex-start; gap:10px;\">\n        <div style=\"flex-shrink:0;\">⚡️</div>\n        <div>초속 11.2km까지의 충격을 흡수하는 보호막을 설계한다.</div>\n      </div>\n    </div>\n    <hr style=\"border:0; border-top:1px solid rgba(128,128,128,0.3); margin:0 0 12px 0;\" />\n    <div style=\"margin-bottom:12px;\">\n      <div style=\"display:flex; align-items:flex-start; gap:10px;\">\n        <div style=\"flex-shrink:0;\">⚡️</div>\n        <div>'하우스' 이전 발생한 상처는 막으로 즉각 이전하여 대미지를 경감하고, '하우스' 이후 발생한 경미한 찰과상은 무력으로 회복한다.</div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div style=\"background-color:#C5B358; color:#000; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:11px; display:inline-block; margin-bottom:12px; margin-top:16px;\">[오프닝]</div>\n    <div style=\"margin-bottom:12px;\">\n      <div style=\"display:flex; align-items:flex-start; gap:10px;\">\n        <div style=\"flex-shrink:0;\">⚡️</div>\n        <div>침묵: 반경 14.8km까지 광역 범위를 지정하여 '싸우기 좋은 환경'을 만든다.</div>\n      </div>\n    </div>\n    <hr style=\"border:0; border-top:1px solid rgba(128,128,128,0.3); margin:0 0 12px 0;\" />\n    <div style=\"margin-bottom:12px;\">\n      <div style=\"display:flex; align-items:flex-start; gap:10px;\">\n        <div style=\"flex-shrink:0;\">⚡️</div>\n        <div>범위 내 '침묵'에 걸린 모든 상대는 얼굴이 제거되어 무장해제 상태에 빠진다.</div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div style=\"background-color:#C5B358; color:#000; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:11px; display:inline-block; margin-bottom:12px; margin-top:16px;\">[드라마]</div>\n    <div style=\"margin-bottom:12px;\">\n      <div style=\"display:flex; align-items:flex-start; gap:10px;\">\n        <div style=\"flex-shrink:0;\">⚡️</div>\n        <div>전개: 벼락 참격. 보통 하늘에서 떨어지나, 특수 균열 환경에서는 대지에서 솟게 만드는 것도 가능하다.</div>\n      </div>\n    </div>\n    <hr style=\"border:0; border-top:1px solid rgba(128,128,128,0.3); margin:0 0 12px 0;\" />\n    <div style=\"margin-bottom:12px;\">\n      <div style=\"display:flex; align-items:flex-start; gap:10px;\">\n        <div style=\"flex-shrink:0;\">⚡️</div>\n        <div>범위: 최소 도시 하나 - 최대치는 측정된 바 없다.</div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <div style=\"background-color:#C5B358; color:#000; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:11px; display:inline-block; margin-bottom:12px; margin-top:16px;\">[아이러니]</div>\n    <div style=\"margin-bottom:12px;\">\n      <div style=\"display:flex; align-items:flex-start; gap:10px;\">\n        <div style=\"flex-shrink:0;\">⚡️</div>\n        <div>타겟팅: 지정한 범위 내에만 뇌전을 꽂는다. 단일 또는 불특정다수를 한번에 즉사에 이르게 한다.</div>\n      </div>\n      <br/><span style=\"color:#808080;font-size:11px;\">*웬만한 총보다 에임이 정확하나, 비인도적이고 위험한 '집형령'에 가깝기 때문에 시전자(시어터)는 사용을 선호하지 않는다.</span>\n    </div>\n  </div>\n  <div>\n    <div style=\"background-color:#C5B358; color:#000; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:11px; display:inline-block; margin-bottom:12px; margin-top:16px;\">[시퀀스]</div>\n    <div style=\"margin-bottom:12px;\">\n      <div style=\"display:flex; align-items:flex-start; gap:10px;\">\n        <div style=\"flex-shrink:0;\">⚡️</div>\n        <div>대기를 흐려 뇌우의 현장으로 날씨를 조작한다.</div>\n      </div>\n      <br/><span style=\"color:#808080;font-size:11px;\">*임무 시작 전 환경을 정리하거나, 임무를 난장판으로 완수하고 빗물로 치우는 데 특히 유용하다.</span>\n    </div>\n  </div>\n</div>"
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n살아있는 재앙. 지부와 본부를 사이에 둔 '명함만 화려한 중간 다리' 역할을 하고 있어서 종종 살짝 피곤해 한다.\n\n차분하고 흐트러짐 없는 성정. 피곤함에 가려진 옅은 장난기를 알아채는 자는 드물다. 원리원칙을 중시하지만 들어야 할 말은 끝까지 들어준다.<div style=\"margin-top:16px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.1);text-align:right;font-size:11px;color:#aaa;\">작성자: Alter</div>"
  },

  // Area
  {
    id: "comoedia",
    codename: "Comoedia",
    title: "Ace of CORE",
    badge: { text: "ACE OF CORE", color: "#6cd9b8", textColor: "black", shadow: "#000" },
    affiliation: "AREA",
    gender: "남성",
    age: "25세",
    oneLiner: "선배, 땅굴 파지 말고 앞을 봐요. 이럴 시간 없어.",
    quote: "세상이 혹독하여 웃어넘기기 힘들더라도.",
    themeColor: "#D4AF37",
    intro: "케인 코랑,\n코드네임 코모이디아(Comoedia).\n지나간 자리를 웃음바다로 만드는 <span style=\"color:#D4AF37;font-weight:600\">A지부 &lt;아리아&gt;</span> 소속 명실상부한 에이스. 그의 앞에서 물리력은 불필요하다. 몇 번을 봐도 기묘한 힘이다.\n\n눈물과 비명이 난무하기 보다는 확실히,\n웃다가 쓰러지는 편이 즐겁기는 하다.",
    story: "[캐릭터 스토리 1]\n페이퍼 아카데미의 '재학생 정서 반응 시험'은 이름만 번지르르하고 실상 고리타분한 전통 건강검진이다. 말하자면 인적성...... 학생 심리검사 같은 거다. 문제는 그 지루한 것이 한 학기마다 필수 교양 수업으로 배치되어 있다는 것이고.\n\n페이퍼의 평범한 재학생 케인 코랑도 이 지긋지긋한 검사를 피할 수 없었다. 의미 없는 플라스틱 의자에 앉아서 돌아오는 질문마다 대충 \"네네\" 대답하면 40분짜리 수업-검사-가 끝났다. 결과가 무난하면 공짜로 학점을 따게 해 주니 귀찮아도 못할 것까진 없었다. 그렇다고 생각했다. 아주 이상한 일에 휘말리기 전까지는.\n\n< 참가자 한 명이 웃자 현장의 모두가 실신할 때까지 웃었습니다. >\n\n그 참가자가 케인 코랑이었다. 이능력 의심 징후라고 했다. 이십 몇 년을 평범하게 살았으니 영문을 알 수 없었다. 그의 정서 반응 시험 검사 결과는 즉시 벡터로 전송되었는데, 그때까지도 그는 이 상황을 제대로 파악하지 못했다.\n어느모로 보나 개소리였다. 아니, 애초에 사람을 웃게 만드는 쓸모없는 이능력이 세상에 어디 있는데?\n\n벡터에서는 그의 케이스를 '비공격성 집단 제어 현상'이라는 특이 케이스로 분류했다. 이런 사람이 없지는 않은데, 그렇다고 흔한 편도 아니라고 했다.\n그는 현재 A지부 아리아의 긴급제압 담당 요원이다. 물리적 충돌을 일으키지 않고도 현장 전체를 통솔할 수 있다는 점에서 입사 당시의 기대치를 상회한다.\n\n과연 헛웃음이 나오는 상황이었다.\n\n[캐릭터 스토리 2]\n코드네임 코모이디아는 무의식적으로라도 전혀 웃지 않는 요원이다. 억지로 웃겨져서 웃음이 터질 것 같으면 차라리 혀를 깨물고 숨을 참기까지 한다.\n\"민폐잖아요.\" 그는 자신의 이능력을 민폐라고 불렀다. 말투가 가벼워서 장난인지 아닌지 구분이 되지 않았다.\n\n항상 침착하고 자가통제가 잘 된다. 감정 기복이 크지 않아 라인 팀의 관리 대상에서도 벗어나 있고, 벡터의 검진 추적망도 벗어나 있다. 웃음을 조금 참을 뿐이지 전체적인 태도가 매우 평안하기 때문에 누구에게도 크게 걱정을 사지 않는다......\n\n그러나 코드네임 료는 항상 그를 날카롭게 바라보곤 한다. 팀장으로서 팀원 관리에 엄격해지는 것이 아니라, 의심되는 구석이 있기 때문이다.\n\"무슨 약을 복용하고 있나?\"\n그럼 코모이디아는 아무렇지 않게 답한다.\n\"아? 비염약이요. 코막힘이 심해서.\"",
    themeGradient: ["#C5B358", "#FFF9C4"],
    vectorType: "AREA-A",
    themeSongs: [
      {
        title: "Comoedia's Theme",
        url: "https://www.image2url.com/r2/default/audio/1778381070033-c9ccb510-709a-4a75-ba2c-578ac09d33b3.mp3"
      }
    ],
    appearance: {
      height: "179cm",
      features: "어깨까지 내려오는 금발을 낮게 묶어서 한쪽 어깨로 냈다.\n순한듯 날카로운듯 하다. 자주 웃지 않는데도 훈훈하고 화려한 인상.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#D4AF37;\">[ 아리아 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑색 제복, 검은색 정모, 지팡이</span><br/><span style=\"padding-left:4px;\">- 은장의 긴 망토를 어깨에 두른다. 누가 봐도 경찰 같다.</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#D4AF37;\">[ 코모이디아 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">긴 망토 같은 것은 가뿐하게 생략하고, 마른 허리에 꼭 맞게 벨트를 조였다. 모자도 뭐, 쓸 때도 있고 아닐 때도 있고.<br/>얼굴이 화사하고 예뻐서 시커먼 유니폼은 눈에 들어오지도 않는다.</span></div>"
    },
    psychicPower: {
      name: "카타르시스",
      description: "🙂 반경 5m의 모든 생명체를 일제히 깔깔 웃게 만든다. 동시에, 또는 목표 대상을 지정해서.\n🙂 시전 방식: 시전자 본인이 '소리내어 웃기'.\n🙂 상대를 세상에서 가장 평화롭게 무장해제 시킨다.\n🙂 이능력을 거두어들여도 모두가 잔잔하게 기분이 좋다.\n🙂 <span>공격적인 이능력이 아닌데, 아이러니하게도 상대방의 공격 의지를 완전 해제시킨다.<br/><span style=\"color:#808080;font-size:11px;\">* 빠르고, 피해가 없으며, 흔적이 남지 않는 방식의 제압법으로 주목 받는다. 정작 그는 이능력에 대해 그렇게까지 거창한 사명은 없다.</span></span>\n🙂 인원이 많을수록 아이러니하고 기괴한 장면이 연출된다.",
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n\n적당히 젠틀하고, 적당히 능청스럽고, 뭐든 과한 법이 없다. 마주치면 이상하게 기분이 좋아지는 데는 그런 이유가 있겠다. 복도를 걷다보면 종종 그를 끼우고 간지럼을 태우는 '나잇값 못하는' 요원들을 마주치곤 하는데 <span style=\"color:#777\">-그만큼 웃고 싶었단 거겠지만-</span> 난 정작 그가 자연스럽게 웃음을 터뜨리는 모습은 본 적이 없는 것 같다......",
    leaderComments: {
      qna: " Q: 이슈는?\n A: 대상 전원 제압 완료했습니다~.\n A: 걱정하실만한 충돌은 없었고요.\n Q: 언제나처럼?\n A: 넵, 언제나처럼.",
      comment: "팀의 첫 번째 인원으로 분류되는 요원이 그 팀의 정체성이라고들 한다. 리더와 관계없이.",
      commentHighlight: "같은 이치로,\n나는 그를 신곡의 화신이라 부른다.",
      author: "A - THEATER",
      rating: "★★★★★",
      qnaColor: "#D4AF37",
      qnaShadow: "rgba(212,175,55,.2)",
      highlightColor: "#D4AF37",
      ratingColor: "#B8860B"
    },
  },
  {
    id: "orbit",
    codename: "Orbit",
    badge: { text: "ELITE OF CORE", color: "#4D9BFF", textColor: "white", shadow: "#000" },
    affiliation: "AREA",
    quote: "지옥에 온 걸 환영해, 어린 양들아.",
    themeSongs: [{ title: "Orbit's Theme", url: "https://brave-orange-szpmudpzkx.edgeone.app/Orbit.mp3" }],
    themeColor: "#4D9BFF",
    intro: "이브 엘리아스,\n코드네임 오빗(Orbit).\n이종족 이그니스(Ignis) : <s>날개 꺾인</s> 천사다.\n<span style=\"color:#4D9BFF;font-weight:600\">A지부 &lt;아리아&gt;</span> 소속으로, 별길의 주인이라든가 기적의 현신 같은 대단한 이름으로 자주 불리곤 한다. 그럴만 하다. 요구조자가 어디 있든 누구보다 빠르게 만나러 오니 말이다.\n\n그러나 명심할 것: 인간은 아니다.\n다정하긴 하지만 헌신적이지는 않고,\n상냥하긴 하지만 인간적이지는 않다.",
    themeGradient: ["#7EC8FF", "#4D9BFF", "#6C7AFF"],
    vectorType: "AREA-A",
    appearance: {
      height: "185cm",
      features: "옅은 푸른색 머리칼, 신성한 금안.\n그런데 날개가 없다. 헤일로도.",
    },
    psychicPower: {
      name: "네뷸라의 횡단",
      description: "🪽 별을 내려서 '없는 길(네뷸라)'을 만들어낼 수 있다.\n🪽 네뷸라를 깐다면 어디든 갈 수 있다. 하늘을 걷거나 물 위를 걷는 것도 가능하다.\n🪽 <span>별길: 만든 길은 육안으로 보이지 않고, 희미한 반짝임만 느껴진다.<br/><span style=\"color:#808080;font-size:11px;\">* 이 때문에 네뷸라 위의 존재는 종종 활공하는 것처럼 보인다.</span></span>\n🪽 <span>네뷸라 유지 기간: 연기가 흩어지는 속도와 비슷하다. 상당히 짧다.<br/><span style=\"color:#808080;font-size:11px;\">* 발이 닿으면 부서지는 수준.</span></span>\n🪽 <span>거리 제한: ×<br/><span style=\"color:#808080;font-size:11px;\">* 단적으로, 현재 위치에서 행성 반대편까지 이동하는 네뷸라를 만들 수도 있다.</span></span>\n🪽 네뷸라를 걷는 동안 이동 속도가 대폭 증가한다.\n<div style=\"margin-top:24px; padding-top:16px; border-top:1px dashed rgba(255,255,255,0.15)\">\n  <div style=\"background-color:#4D9BFF; color:#fff; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:11px; display:inline-block; margin-bottom:8px;\">[이그니스 센서]</div>\n  <div style=\"font-size:13px; color:#ccc; line-height:1.6;\">네뷸라를 내리거나, 네뷸라 위를 달리는 동안 일시적으로 새하얀 날개와 헤일로가 생긴다.</div>\n</div>",
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n\n그들은 이능력을 사용할 때 '만' 천사다. 능력을 쓰지 않을 때는 날개도, 헤일로도, 후광도 없다. 보통 인간이나 다를 바가 없다는 소리다.\n\n1세대 이후 모든 이그니스의 특성이다. 앞으로 이 땅에서 어떤 <em>천사</em> 를 만나도 고전적인 천사와 생김새가 다르다고 핍박하지 말 것.",
    leaderComments: {
      qna: " Q: 하늘에는......\n A: 음?\n Q: 하늘에는 신호등이 없나?\n A: 아하하하. 무슨 당연한 걸 묻고 있어.\n A: 너, 내가 너무 빨리 달려서 다칠까 무섭구나. 그치?\n A: 날던 세월이 있는데 달리는 것 쯤이야 아무것도 아니지.",
      comment: "목적지가 어디든 광속으로 달릴 수 있다.\n우리 지부의 아리아 팀이 딱히 이동 차량을 이용하지 않는 이유는 전부 이 천사 때문이다......\n\n다정하고 아름답다.\n미디어 속 천상생물과는 좀 다를지라도.",
      commentHighlight: "덕분에 신세를 많이 지고 있으니 어쨌거나 고마운 일이다.",
      author: "A - THEATER",
      rating: "? ? ? ? ?",
      qnaColor: "#BBDEFB",
      qnaShadow: "rgba(77,155,255,.6)",
      highlightColor: "#4D9BFF",
      ratingColor: "#4D9BFF"
    },
  },
  {
    id: "ryo",
    codename: "Ryo",
    title: "Leader of CORE",
    affiliation: "AREA",
    gender: "남성",
    age: "나이 불명",
    oneLiner: "아니, 그대가 싫으면 하지 않아.",
    quote: "때론 직감과 직관이 가장 효과적인 사명이다.",
    themeColor: "#1A4B8E",
    themeGradient: ["#1A4B8E", "#48CAE4"],
    intro: "카이 세이,\n코드네임 료(Ryo).\n이종족 레이(麗) 중 청룡. 종족 단위로 모여 살다가, 행성이 부서지고 스케마가 조립되면서 도심으로 편입되었다. 현재 <span style=\"color:#48CAE4;font-weight:600\">A지부 &lt;아리아&gt;</span> 소속 팀장직을 수행 중이다.\n\n한계도 인간미도 따뜻함도 그다지 없다. 동시에 어떤 적의도 없다.\n가히 '믿을만 하다'. 너무 두려워하지 말도록.",
    story: "[캐릭터 스토리 1]\n카이세이는 물의 신왕의 아들이다. 다시 말해, 왕세자다.\n언젠가는 신이 될 운명이라는 거다. 정작 그런 운명에 대해서는 아무래도 좋은 사람처럼 구니, 그를 거쳐간 수많은 사람들이 이 사실을 잘 모르고 있다.\n\n그는 본부에서도 뭘 어쩌지 못할 정도로 가진 힘이 강하다.\n원래라면 해양 지역에 배치되었어야 하는데, 본인의 선택에 의해 A지부 고위험지대에 들어오게 되었다. 힘을 허투루 쓸 생각이 없다고 했다. '모두가 기피하는 위험한 곳에서 사람을 구하겠다'고 말하는 그 형형한 눈빛을 꺾을 수 있는 인간은 아무도 없었다. 그의 입사 경로는 특채였다. 이능력 진단기를 고유 능력으로 간단하게 부순 시점에서 면접을 볼 필요가 없었기 때문이다.\n\n료가 가진 힘은 이능력인가?\n편리하게 분류하자면 이능력이라고 퉁쳐도 되지만, 사실 에너지 같은 복잡한 변이의 영향을 받지 않고 순수하게 타고났다는 점에서 보통 인간의 이능력과는 양상이 조금 달랐다. 장담컨대, 그에게는 이능력으로 인한 부작용 같은 것도 없을 것이다.\n진품은 티가 나는 법이다. 언제나.\n\n[캐릭터 스토리 2]\n땅이 추락하면서 가장 큰 피해를 입은 구역은 바다였다. 터전이 사라졌다. 해양동식물 뿐 아니라 해양에 살던 모든 이종족이 집을 잃고 미복구 구역을 망령처럼 떠돌게 되었다. 스케마가 설립된 지금은 대부분이 여기 어딘가에 거처를 마련하게 되었을 것이다. 적어도 카이는 그렇게 믿었다.\n\n료의 종족은 물의 주인이라고 불리는 청룡 파 레이였다. 물이 온전할 때는 그 힘이 가장 강대한 무리였고, 물이 전부 오염된 지금은 그 어떤 종족보다도 위상이 낮아졌다. 개체수가 적어진 것은 물론이고 상상도 못한 방식으로 핍박을 받았다. 에이로베이스의 장터에는 그들의 것이 분명해 보이는 뿔이 아직까지도 꼭 한두 쌍씩 나오곤 한다. 그럼 카이는 속이 쓰려졌다. 그들에게 뿔은 돌출된 뼈였다. 뼈가 그렇게 잘리고 전시된 것이다. 그 뿔의 주인이 죽었는지 살았는지는 아무도 몰랐다.\n\n그가 벡터로서 수입이 생기고 기반이 안정화 되었을 무렵 가장 먼저 한 일은 D지부 출장이었다.\n지원 요청이 들어오지도 않았는데, 굳이 방문해서 시장을 두 바퀴 돌았다. 뿔로 보이는 것은 죄다 사들였다. 그것이 평범한 사슴 뿔이든, 희귀생물의 뿔이든, 레이의 뿔이든 상관하지 않고. 그런 것을 따질 여유가 당시의 료에게는 없었다.\n\n\"무슨 일 있었어요?\"\n이튿날 그를 맞이하러 나온 코모이디아가 한숨을 한번 쉬었다. 이제서야 아픈 얼굴을 한다고. 정작 료는 아무 생각이 없었기 때문에 그의 말에 멍한 표정을 지었다. 시체처럼 뼛조각을 짊어지고 왔으면서. 코모이디아가 머리를 긁적이고는 파란 뼈 몇 개를 골라서 나눠 들었다.\n\"다음 번에는 다 같이 가요. 바다든 시장이든.\"",
    vectorType: "AREA-A",
    appearance: {
      height: "192cm",
      features: "백발에 가까운 푸른색 머리칼, 청안.\n아침마다 긴 머리카락을 관리하는 데 오랜 시간을 쓰는데, 보통은 낮게 묶어서 정리하거나 한쪽 어깨에 늘어뜨리거나 한다.\n전체적으로 길다. 체형마저 길쭉하다. 안기면 사람 하나가 파묻힐 정도로.\n눈이 마주치면 뒷걸음질 치게 되는 대단한 미남이다. 그러나 본인은 잘생겼다는 자각이 없어 보인다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#1A4B8E;\">[ 아리아 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑색 제복, 검은색 정모, 지팡이</span><br/><span style=\"padding-left:4px;\">- 은장의 긴 망토를 어깨에 두른다. 누가 봐도 경찰 같다.</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#1A4B8E;\">[ 료 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">정장 유니폼 위에 코트 대신 복사뼈까지 내려오는 긴 하오리(*두루마기)를 걸친다. 좀 제대로 여미고 다니면 더 좋을 것 같은데, 아직 거기까지 이해하지는 못한 것 같다.</span></div>"
    },
    psychicPower: {
      name: "파도의 부름",
      description: "🌊<span style=\"background-color:#1A4B8E; color:#fff; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:12px; flex-shrink:0;\">파랑</span><span style=\"flex:1;\">어떤 대상이든 액체화한다. 물건, 심지어는 공간까지. (생명은 포함하지 않는다. 단, 생명이 쥔 물건이나 걸친 도구는 전부 액체화 가능하다.)</span>\n🌊<span style=\"background-color:#1A4B8E; color:#fff; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:12px; flex-shrink:0;\">해랑</span><span style=\"flex:1;\">어떤 대상이든 중력을 잃고 공중에 뜨게 한다. [해랑] 시전 기간 동안 대상은 무장해제 당한다.</span>\n🌊<span style=\"background-color:#1A4B8E; color:#fff; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:12px; flex-shrink:0;\">해수</span><span style=\"flex:1;\">물에 물성을 부여한다. 어떤 물건이든 만들어낼 수 있지만, 수분이 없으면 시전 불가하다. 주변에 수분이 강할수록 [해수]의 힘이 점점 강대해진다.</span>\n&#8203;<span style=\"color:#808080;font-size:11px;\">* 이능력 사용 시 뿔이 긴 우아한 가면을 착용한다. '용'으로 추정.<br/>* 항목은 대표 능력이라 이름이 붙었을 뿐이고, 이외에도 물을 '부리는' 모든 행위에 제한이 거의 없다.</span>",
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n\n물을 관장하는가? 그것을 물었더니 '아직' 아니라고 했다. 언젠가 그렇게 될 가능성이 있다는 것이겠지. 동류를 만난듯 해 반가웠으나 정작 그는 아무 생각이 없어 보였다.\n\n믿을만 한가 싶다가도 가끔 믿을 수 없을 정도로 바보 같다. 철두철미 하면서도 가끔 상상도 못한 방향의 상식이 없고. ......모든 이종족이 이러한가?",
    leaderComments: {
      qna: " Q: 아리아의 원칙은?\n A: 국가의 질서를 유지하고 이능력자에 대한 감독, ......\n A: 다음이 뭐였지.\n Q: 그걸 지금 <em>나한테</em>  묻는 건가?",
      comment: "본부에서는 그의 자진 입사가 기적에 가까운 일이라 했으나, 팀원들과 지내는 바를 보고 있자면 그가 이끌지 않는 아리아 팀은 나로써는 잘 상상이 가지 않는다.",
      commentHighlight: "타고나길,\n누군가를 구하기 위해 태어난 존재 같다.",
      author: "A - THEATER",
      rating: "★★★★★ (EX)",
      qnaColor: "#E0E8FF",
      qnaShadow: "rgba(26,75,142,.6)",
      highlightColor: "#48CAE4",
      ratingColor: "#1A4B8E"
    },
    badge: {
      text: "Leader of CORE",
      color: "#1A4B8E",
      textColor: "white",
      shadow: "#000"
    }
  },
  { 
    id: "eterner", 
    codename: "Eterner", 
    affiliation: "AREA", 
    quote: "이토록 빛나는 아름다운 국가, 영원의…….",
    themeColor: "#90A4AE",
    themeGradient: ["#B0BEC5", "#37474F"],
    intro: "린 로이에,\n코드네임 이터널(Eterner).\n<span style=\"color:#eee;font-weight:600\">A지부 &lt;아리아&gt;</span> 소속.\n얼굴은 애송이인데 말투는 영락없이 애늙은이다. “죽을 때까지 죽기 싫어. 인간이 보통 그래.”\n\n갈 길이 멀다면 그를 길동무로 부려보자. 외롭지 않게 옆에서 지켜보는 것이야말로 그의 특기다. 영원히(Eternal).",
    vectorType: "AREA-B",
    appearance: {
      height: "-",
      features: "🪦 쥐색의 차분한 머리칼, 그보다 더 차분한 눈동자.\n🪦 대체로 무난해서 눈에 잘 띄지 않는다."
    },
    psychicPower: {
      name: "다카포",
      description: "🪦 대상이나 공간의 ‘현재 상태’를 하나 선택해 고정할 수 있다.\n🪦 고정된 상태는 외부 개입으로 변하지 않는다."
    },
    personality: "<span style=\"color:#999; font-weight:700;\">[ 요원 총평 ]</span>\n\n잠이 상당히 많다. 나른한 분위기. 말도 감정도 한 박자씩 느리다. A지부 아리아의 '가장 사랑받는!' 막내다.",
    chatLogs: [
      { sender: "C.Ensure", message: "어른스러운 척 해봤자 쟤도 애송이긴 해.", timestamp: "오전 10:24" },
      { sender: "Me", message: "너도 똑같잖아", isMe: true, timestamp: "오전 10:25" },
      { sender: "C.Ensure", message: "응~. 막내의 특권?", timestamp: "오전 10:25" }
    ]
  },

  // Line
  { id: "aroma", codename: "Aroma", title: "Ace of ACTIVE", badge: { text: "ACE OF ACTIVE", color: "#FE6334", textColor: "white", shadow: "#000" }, themeColor: "#FE6334", affiliation: "LINE", quote: "한줄대사" },
  { id: "cliche", codename: "Clichè", affiliation: "LINE", quote: "한줄대사", themeSongs: [{ title: "Clichè's Theme", url: "https://outrageous-coral-fmdv4kmlln.edgeone.app/Cliche.mp3" }], themeColor: "#F3E6C9" },
  { id: "time", codename: "Time", affiliation: "LINE", quote: "한줄대사", themeSongs: [{ title: "Time's Theme", url: "https://numerous-emerald-evqbweaohx.edgeone.app/Time.mp3" }], themeColor: "#95EE00" },
  { id: "immune", codename: "Immune", affiliation: "LINE", quote: "한줄대사", themeColor: "#B67E36" },
  { id: "viewer", codename: "Viewer", badge: { text: "ELITE OF ACTIVE", color: "#340090", textColor: "white", shadow: "#000" }, affiliation: "LINE", quote: "한줄대사", themeSongs: [{ title: "Viewer's Theme", url: "https://yucky-harlequin-gkkvxfc9v9.edgeone.app/Viewer.mp3" }], themeColor: "#340090", themeGradient: ["#340090","#978FF9"] },
  { id: "eunoia", codename: "Eunoia", title: "Leader of ACTIVE", badge: { text: "LEADER OF ACTIVE", color: "#F6CD8E", textColor: "black", shadow: "#000" }, themeColor: "#F6CD8E", affiliation: "LINE", quote: "한줄대사" },

  // Tunnel
  { 
    id: "sudden", 
    codename: "Sudden", 
    title: "Ace of SYNCHRONIZE", 
    affiliation: "TUNNEL", 
    gender: "남성",
    age: "24세",
    oneLiner: "변명이 뭐 이렇게 길어요? 그냥 때려잡았다는 소리를 존나 빙빙.",
    quote: "존나 길어. 뭐라는 거야...... 한 줄로 요약해줘요.",
    themeColor: "#ff0000",
    themeGradient: ["#ff0000", "#000000"],
    intro: "키사 커터,\n코드네임 <span style=\"color:#f00;font-weight:500;\">서든(Sudden).</span>\n'불 끄는' 구조대원 일을 하다가 '불 밝히는' 구조대원으로 이직한 독특한 케이스다.\n나서는 게 싫으니 센트럴은 아니고, 누군가를 낫게할 생각도 없다 하니 라인도 아니고, 그렇다고 아리아처럼 사명감이 있지도 않으니 남은 길은 하나였다. 면밀한 고려 끝에 그는 <span style=\"color:#f00;font-weight:600;\">A지부 수뇌 &lt;터널&gt;</span> 소속이 되었다.\n매사 단순하고, 피곤하고, 귀찮아 한다. 그러나 난 그가 만사에 예민해지기 싫어서 권태로움을 연기한다고 생각한다.\n\n철이 일찍 든 어린애 같다.",
    story: "[캐릭터 스토리 1]\n키사 커터는 어린 나이에 공무원 일을 시작했다.\n소방 쪽이었다. 쉽게 말하자면 불난 곳의 불을 끄고 다녔고, 조금 어렵게 말하자면 자기 생계 유지를 위해 다른 사람의 삶을 구하는 사람이었다. 좋든 싫든 위급 상황에 자주 노출될 수 밖에 없었다. 그는 아주 큰 사명감을 가지고 있지 않아도 자연스럽게 안전에 예민하게 구는 사람으로 자랐다.\n\n그랬던 그가 돌연 일을 관두었다.\n대형 화재 현장 한복판에서 정신계 이능력이 발현했기 때문이다. 이게 대체 앞으로의 직업에 무슨 도움이 되겠는가? 사람을 구하는 데 도움이 안 될 뿐더러 심지어는 민폐덩어리가 될지도 몰랐다.\n공포감 조성이라니. 긴급 구조가 이루어지고 피해자가 수십명씩 쏟아지는 그의 생활 환경에 공포감을 조성하는 이능력이라니! 탄내와 고함과 비명이 귀에서 겉도는 것을 느끼면서 그는 뒷걸음질을 쳤다. 도망치고 만 것이다. 당시를 회상할 때마다 그는 스스로를 비겁자라고 생각한다. 도망쳤기 때문에 불타 죽은 사람이 있을지도 모른다는 죄책감이 그를 자꾸 회피하게 만들었다. 더는 생각하고 싶지 않았다.\n그럼 잠이 왔다. 꿈속으로 기어들어가서 다 잊어버리고 싶었다.\n이런 능력을 가지고 소위 에러라고 불리는 이상한 집단에 휘말리게 될까봐 불안했던 것도 사실이다. 그에게는 자신을 자신이게끔 지켜줄 강제적인 수단이 필요했다. 그가 알기로 '힘을 올바르게 쓰는' 이능력자 단체는 하나 밖에 없었다.\n\n키사 커터가 죽을 것 같은 얼굴로 벡터 A지부를 찾아왔을 때, 코드네임 시어터는 '본부로 가지 않고 왜 지부로 왔느냐'는 질문을 하는 대신 그의 적성을 물었다.\n\"현장 경력이 있다고 했는데, 퍼즐 수집 같은 임무를 수행할 수 있겠나?\"\n\"다신 안 나가고 싶어요, 그런 데.\"\n\"그럼 센트럴은 탈락. 치료나 서포트는......\"\n\"능력이 이따위인데 치료를 어떻게 해요.\"\n\"그렇다면 라인도 아니겠군. 직업적 사명감을 가질 의향은 있나? 정의라거나,\"\n\"정의요?\"\n\"......됐어.\"\n아리아까지 소거하고 보면 남은 직군은 하나 뿐이었다. 사무직 터널 말이다. 시어터가 그 직무를 내밀었을 때, 키사 커터는 아무 말 없이 지원서를 받아들었다. \"본부에는 내가 말해두지.\" 그 말인 즉 면접을 생략해주겠다는 의미였다.\n\n시어터는 그에게 서든(Sudden)이라는 코드네임을 제안했다.\n\"왜요. 내 능력이 그렇게 우스워요?\"\n\"아니, 갑작스럽게 우리 지부의 가족이 되었으니까.\"\n말을 이으려던 시어터가 입꼬리를 반 올렸다.\n\"새 집에 온 것을 환영한다.\"\n\n[캐릭터 스토리 2]\n<div style=\"background-color:#fff; color:#000; padding:6px 10px; margin-bottom:10px; font-weight:bold; display:inline-block;\">[인가코드: 0000 | 열람 권한 제한 | 작성자: VectorOZ#05L-VIEWER]</div>\n서든을 관찰한 라인 요원들이 하나 같이 내리는 결론이 있다. '그는 민폐 끼치는 것을 죽기보다 더 싫어한다'.\n자주 아픈 요원이다. 종종 원인을 알 수 없이 복도 한가운데 나자빠져 있기도 하고, 일을 하다 말고 손이 파래질 때까지 얼음주머니를 쥐고 있기도 한다. 그렇게 아프면 의료 병동에 가라고 아무리 권유해도 말을 듣지 않는다. 티가 안 날 거라고 생각하다본데, 억지로 찬 걸 먹고 찬물에 몸을 담그고 있다가 감기에 걸려 오는 것도 자주 봤다.\n미련곰탱이 같다. 등짝을 때려서 닦달했더니 겨우 한 마디 뱉었다.\n\"냅둬요, 그냥. 현장직 사람들 줄 약도 모자라면서.\"\n\n서든은 기본적으로 단순하고, 나른하고, 모든 일에 심드렁하다.\n그런데 암만 봐도 그게 다 방어기제 같단 말이지. 앞으로 좀 더 유의깊게 살피긴 해야겠다.",
    vectorType: "TUNNEL-A",
    appearance: {
      height: "180cm",
      features: "차분한 붉은 머리, 안광 없는 흑안.\n온몸에 힘을 빼고 다닌다. 체격은 호리호리한데 힘이 무서울 정도로 세다.\n기본적으로 나른하다. 눈을 전부 뜨는 법이 없어 잘 티가 나지 않지만, 실상 눈매가 길게 올라간 여우상의 외형을 가지고 있다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#ff0000;\">[ 터널 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑정장, 긴 흑색 코트, 정장 구두</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#ff0000;\">[ 서든 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">툭툭 대충 걸치고 다닌다. 셔츠라도 제대로 입었으면 다행이고.</span></div>"
    },
    psychicPower: {
      name: "서프라이즈",
      description: "🔥 표적 대상이 가장 공포스러운 것을 직감적으로 읽어낼 줄 안다. 공포심을 기반으로, 깜짝 놀라게 해서 머릿속을 하얗게 비워버린다.\n🔥 가장 무서워 할 이미지를 만들어 뇌에 주입한다. 숨죽이고 있다가 펑 터뜨려서 순간적으로 엄청난 공포를 선사한다.\n🔥 시전 방식은 \"왁.\" 나직하게 말해도 상관 없다.",
    },
    personality: "<div style=\"color:#f00;font-weight:700;font-size:14px\">⚠ WARNING</div>\n그는 그것을 그냥 뇌 과부하에 불과하다고 일축하지만, 손을 대 본 사람은 안다. 요원 : 서든은 사람이 견딜 수 없을 정도의 고열을 매 초마다 견디고 산다. 정신계 이능력자에게 왜 이런 지독한 부작용이 붙었는지는 정밀 검진이 필요하다.",
    leaderComments: {
      qna: " Q: 벡터라면 사명을 기억해야 해. 알았나? 그 중 그대가 속한 터널의 덕목은 객관성과 철저함을 기반......\n A: 말 어렵게 하는 게 유행인가.\n Q: ......뭐라고?\n A: 요약 좀 해달라고요. 나 머리 나빠서.\n Q: 하......",
      comment: "예민하고, 예의 없고, 말본새도 그닥 곱지 않다.\n완전히 철이 없다.\n\n......\n그래도 좀 지켜보려 한다.\n그에겐 이제 이곳이 집이나 다름 없을테니.",
      author: "A - THEATER",
      rating: "★★★☆☆",
      qnaColor: "#ccc",
      qnaShadow: "rgba(255,0,0,.6)",
      highlightColor: "#f00",
      ratingColor: "#f00"
    },
    badge: {
      text: "Ace of SYNC",
      color: "#ff0000",
      textColor: "black",
      shadow: "#000"
    }
  },
  { 
    id: "youth", 
    codename: "Youth", 
    affiliation: "TUNNEL", 
    quote: "그때로, 우리 모두가 아름다웠던 그때로.",
    themeSongs: [{ title: "Youth's Theme", url: "https://www.image2url.com/r2/default/audio/1778381510576-c61217e0-7a24-4846-b1f6-bd621f6d70af.mp3" }],
    themeColor: "#4facfe",
    themeGradient: ["#ffffff", "#4facfe"],
    intro: "나다니엘 프로스트,\n코드네임 유스(youth).\n벡터 본부에서 오래전에 연구 진행된 전투개조형 '프로스트' 시리즈의 돌연변이 개체다. 살육에 특화된 본능을 다정한 자아가 짓누르는 바람에 본부와 오랫동안 대치했으나, 결과적으로 <span style=\"color:#6fbad8;font-weight:600\">A지부 서류처리반 &lt;터널&gt;</span>로 들어오게 되었다. 본부는 이를 강등이라 표현했다.\n\n현재 직무 만족도가 높아보인다.\n지부에 소속된 이후로는 그가 이능력을 사용하는 모습을 아무도 본 적이 없다.",
    vectorType: "TUNNEL-A",
    appearance: {
      height: "185cm",
      features: "보석 같은 백발, 환한 벽안.\n피부가 눈처럼 희고 인상이 선하다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#4facfe;\">[ 터널 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑정장, 긴 흑색 코트, 정장 구두</span></div>"
    },
    psychicPower: {
      name: "이성적 광채",
      description: "💍 표적 대상의 전성기를 솎아낼 수 있는 선구안.\n💍 가장 찬란했던 순간으로 상태를 회춘한다.\n💍 사람에게만 특정된 능력은 아니다."
    },
    personality: "<div style=\"color:#ff3b3b;font-weight:700;text-align:center;\">⚠ WARNING</div>\n본부 실험 팀 시절 능력은 &lt;청춘&gt;을 끌어빼는 따위의 낭만적인 방향이 아니라 기억을 마구잡이로 뒤섞어 사람을 미쳐버리게 만드는 쪽에 가까웠던 것으로 보인다.\n\n<span style=\"color:#ff0000;font-weight:bold;\">추정 피해 : [ 이성 소진 / 정신 교란 / 광증 ]</span>\n\n심리 치료를 통해 서포팅에 가깝게 능력이 조정되었으나, 이제 더는 능력 자체를 사용하려 하지 않는다.",
    leaderComments: {
      qna: " Q: 동료를 다 잃었는가?\n A: \n Q: 다 죽었나? 그대는 살았고?\n A: ......본부에 있어. 그냥,\n A: 난 그냥 탈출한 거야. 찬란했던 시대로부터.",
      comment: "본부 발 살상기계가 왜 우리 지부에 떨어져 문서 작업이나 하고 있는지는 알 길이 없다만, 프로스트의 자자한 악명과 달리 이 '요원'은 유순하고 다루기가 쉽다.\n\n세 가지만 기억할 것:\n1. 춥게 두지 말 것\n2. 가둬놓지 말 것\n3. 혼자 두지 말 것",
      commentHighlight: "파트너가--- ---. 필요할지도 모르겠다.",
      author: "A - THEATER",
      rating: "★★★★★",
      qnaColor: "#6fbad8",
      qnaShadow: "rgba(150,220,255,.6)",
      highlightColor: "#ffbc00",
      ratingColor: "#ffbc00"
    },
    frostProject: "<!-- PROJECT DESCRIPTION AREA -->\n\n\n\n\n\n"
  },
  { 
    id: "nevermore", 
    codename: "Nevermore", 
    affiliation: "TUNNEL", 
    isDarkContent: true,
    gender: "남성",
    age: "35세",
    oneLiner: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 16 16\" shape-rendering=\"crispEdges\" style=\"display:inline-block; vertical-align:-6px; margin-right: 4px;\"><path d=\"M3,7 h3 v-4 h2 v-1 h2 v5 h2 v1 h1 v4 h-1 v1 h-9 z M1,7 h2 v5 h-2 z\" fill=\"#FFDBAC\"/><path d=\"M4,7 v-4 h2 v-1 h2 v5 h2 v1 h1 v4 h-1 v1 h-9 v-6 M1,7 h2 v5 h-2 v-5\" fill=\"none\" stroke=\"#fff\" stroke-width=\"1\"/><path d=\"M6,8 h4 M6,10 h4 M6,12 h4 M3,8 h-2\" stroke=\"rgba(255,255,255,0.4)\" stroke-width=\"1\"/></svg>.",
    quote: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 12 12\" shape-rendering=\"crispEdges\" style=\"display:inline-block; vertical-align:-5px; margin: 0 2px;\"><path d=\"M3,7 h6 v3 h-6 z M4,10 h4 v1 h-4 z\" fill=\"#FFCC00\" /><rect x=\"4\" y=\"7\" width=\"1\" height=\"1\" fill=\"#000\" /><rect x=\"7\" y=\"7\" width=\"1\" height=\"1\" fill=\"#000\" /><rect x=\"4\" y=\"9\" width=\"4\" height=\"1\" fill=\"#000\" /><path d=\"M2,5 h8 v2 h-8 z M3,4 h6 v1 h-6 z M4,3 h4 v1 h-4 z M5,2 h2 v1 h-2 z\" fill=\"#FF5555\" /><path d=\"M4,4 h1 v2 h-1 z M7,4 h1 v2 h-1 z M5,3 h2 v1 h-2 z\" fill=\"#FF9900\" /><rect x=\"5\" y=\"4\" width=\"2\" height=\"1\" fill=\"#FFFF00\" /></svg>",
    themeSongs: [{ title: "Nevermore's Theme", url: "https://integrated-coffee-qt5ao8ohg6.edgeone.app/Nevermore.mp3" }],
    themeColor: "#0F0B19",
    themeGradient: ["#000000", "#444444", "#ffffff"],
    intro: "리들 리튼,\n코드네임 <span style=\"color:#fff;font-weight:500;text-shadow:0 0 5px #fff\">네버모어(Nevermore).</span>\n<span style=\"color:#fff;font-weight:400;text-shadow:0 0 8px #fff;\">A지부 수뇌 &lt;터널&gt;</span> 소속인 그는 젠틀하고 정중하며, 흠 잡을 데 없이 우아하다.\n아주 좋은 동료다. 심지어는 유능하고 조용하기까지 하다.\n\n......그 생뚱맞은 이모지 표현을 덜 쓰고\n내 말을 따라하지만 않는다면 말이다.",
    story: "[캐릭터 스토리 1]\n목소리만 존재하던 성우.\n목소리로 존재하던 사람.\n세상에 리들 리튼이라는 이름을 아는 사람은 없지만, 목소리 한 번만 들려주면 \"아!\" 하는 탄성이 터지곤 한다. 그는 신이 내린 성대를 가지고 있었다. 세상 어떤 소리든 따라할 수 있고, 어떤 목소리든 자기 것처럼 모사할 수 있었다. 그러면서도 본연의 음성은 아주 낮고 듣기 좋았다. 그가 미디어의 사랑을 한몸에 차지한 것은 어쩌면 당연한 수순이었다.\n\n그러나 그가 깔끔한 얼굴로 벡터 본부의 문을 두드리고 들어왔을 때, '어떻게 오셨느냐'는 질문에 답하기 위해 벌린 입에서 나온 소리는 차마 목소리라고 부르기 힘든 것이었다. 쇳소리 또는 신음에 가까웠다. 심상치 않은 증상에 그는 즉시 A지부 엘리트 (OVER) 팀에게로 인계되었다.\n\n\"성대결림......?\"\n코드네임 뷰어가 모호하게 진단했다. 에너지에 문제가 생긴 것 같지는 않은데, 징후가 있다고 했다.\n\"그럼 평소에 하던대로 해 봐.\"\n코드네임 로망이 팔짱을 끼고 있다가 어깨를 한 번 으쓱 했다. 의심이 있으면 시도해서 나쁠 것도 없지 않겠느냐는 의견이었다. 그래서 뷰어가 장갑을 벗었다. 에너지를 검진하는 동안 리들은 자신에게 앞으로 어떤 일이 벌어지게 될지 전혀 직감하지 못했다.\n에너지 검진을 하겠다는 말을 들었으면서도 '이능력' 같은 것은 고려조차 하지 않고 있었다. 막연하게 목소리를 잃을지도 모르겠다는 생각만 했다.\n\n결과적으로, 목소리를 잃지는 않았다. 단지 말을 할 때마다 저주 같은 굉장한 파형을 갖게 되었을 뿐이다. 선의는 흡수, 악의는 반사. 대중을 홀렸던 감미로운 성대가 입 한 번 잘못 열었다가 사람도 죽일 수 있는 엄청난 성대가 되었다. 이것이 리들 리튼의 이능력이었다. 뷰어는 이 갑작스러운 개화가 자신이 저지른 실수인 줄 알고 대단히 겁먹었다가 곧 삼삼한 얼굴로 돌아왔다. 로망이 깔끔하게 '읽었기' 때문이다.\n\"네가 꼬인 거 안 풀었으면 이 사람 목은 완전 못 쓰게 됐을 거야.\"\n그가 잠시 생각했다.\n\"게다가 조금만 조심하면 괜찮을 것 같은데.\"\n그러나 진단을 다 듣고 나서 리들 리튼은 자신의 목으로 자유롭게 말할 수 있는 마지막 기회를 사용했다.\n\n\"성대에 스위치 같은 것을 달 수 있습니까? 켜면 말할 수 있고, 끄면 말할 수 없도록.\"\n\"뭔...... 그렇게 살 수 있겠어?\"\n\"그리고 입도 막아주시죠.\"\n\n그는 자신의 목소리가 함부로 쓰이고 의도치 않게 남용되는 것을 원치 않았다. 자신이 가진 중 유일한 장점이라고 생각해 왔으니까. 그를 물끄러미 보던 뷰어가 영 탐탁치 않은 얼굴로 메스를 잡았다가 놓았다가 했다.\n\n\"일단 본부에 마스크를 제작해달라고 주문은 넣어둘게요. 홀로그램 인디케이터라도 달아달라고 하고.\"\n말을 뱉으면서도 이 결정이 맞는지 헷갈려 보였다.\n\"표현은 하고 살아야 할 거 아녜요.\"\n\n\n[캐릭터 스토리 2]\n<div style=\"background-color:#fff; color:#000; padding:6px 10px; margin-bottom:10px; font-weight:bold; display:inline-block;\">[인가코드: 0000 | 열람 권한 제한 | 작성자: VectorOZ#05L-VIEWER]</div>\n그 마스크는 코드네임 네버모어의 맞춤형으로 제작되었다. 크기부터 용도까지 전부.\n그걸 상정하고 넣은 주문이 맞기는 한데, 막상 씌우자니 마음에 걸리는 부분이 많았다. 목 속에 심은 오토스위치 태그와 마스크를 연동하고, '딱' 소리가 날 때까지 걸쇠를 조여 그의 얼굴을 덮었다.\n\n\"말해봐요.\"\n\"......\"\n그가 말을 하려는 것처럼 어깨를 여러번 들썩이다가 고개를 옆으로 기울였다. 자의로 목소리가 나오지 않는 모양이었다. 숨을 한 번 들이마시고 다시 말했다.\n\"강한 의지를 가지면 돼.\"\n\"......가지면 돼.\"\n네버모어의 목소리가 변형 한 줄 없이 내 말을 그대로 읊었다. 그가 잠시 목을 만지고 나를 바라보았다.\n수술 성공이었다. 그걸 나와 그가 동시에 알았다.\n\n\"마스크를 벗으면 그냥 평소처럼 말할 수 있어요.\"\n내가 할 수 있는 말은 그냥 그런 사무적인 안내가 다 였다.\n\"말하거나, 식사를 하거나 물을 마셔야 하거나 할 때는 그냥 마스크를 벗어. 옛날과 변한 건 아무것도 없어요.\"\n\n마스크에 가려진 얼굴이 잘 보이지는 않았지만, 난 네버모어가 분명 웃었다고 생각했다.",
    vectorType: "TUNNEL-A",
    appearance: {
      height: "195cm",
      features: "깔끔한 포마드 헤어, 푸른 기가 돌 정도의 새카만 흑발. 눈은 유리처럼 창백한 색이다. 새하얀 얼굴에 검고 딱딱한 마스크를 착용해서 하얀 눈만 보인다.\n세련되었고, 유려하며, 절세미남이다. 얼굴을 반이나 가렸는데도 외모가 다 감춰지지 않는다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#fff;\">[ 터널 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑정장, 긴 흑색 코트, 정장 구두</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#fff;\">[ 네버모어 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">입가에는 까맣고 딱딱한 마스크, 손에는 까만 반장갑. 코트를 어깨에 걸치고, 발목까지 끌리는 하이웨이스트 속에 셔츠를 정리했다. 스타일 덕분에 큰 키가 크게 두드러진다.</span></div>"
    },
    psychicPower: {
      name: "𝑆𝑎𝑦 𝑁𝑒𝑣𝑒𝑟𝑚𝑜𝑟𝑒",
      description: "📼 반경 500m 이내에서 발생하는 모든 소리를 수집한다.\n📼 '방금 들은 대상의 소리의 파형(말 또는 소음)'을 그대로 복사하여 뱉는다.\n📼 상대방의 말을 따라 하는 순간, 그 말에 담긴 물리적 힘이나 악의를 역방향으로 투사한다.\n📼 공격 의지를 가지지 않을 때는 따라해도 아무 힘이 없다.\n📼 누군가 먼저 소리를 내거나 공격의 의사를 밝히지 않으면 네버모어 본인이 먼저 강력한 공격을 시작하기 어렵다.",
    },
    personality: "<div style=\"text-align:center;margin-bottom:4px;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 16 16\" shape-rendering=\"crispEdges\" style=\"display:inline-block; vertical-align:-6px; filter: drop-shadow(0 0 5px #f00);\"><path d=\"M7,1 h2 v2 h2 v2 h2 v2 h2 v5 h-14 v-5 h2 v-2 h2 v-2 h2 v-2 z\" fill=\"#ff0000\"/><path d=\"M6,0 h4 v1 h-4 z M5,2 h2 v-1 h-2 z M9,2 h2 v-1 h-2 z M3,4 h2 v-2 h-2 z M11,4 h2 v-2 h-2 z M1,7 h2 v-3 h-2 z M13,7 h2 v-3 h-2 z M0,12 h1 v-5 h-1 z M15,12 h1 v-5 h-1 z M1,12 h14 v1 h-14 z M7,13 h2 v-1 h-2 z\" fill=\"#000\" opacity=\"0.5\"/><path d=\"M7,6 h2 v3 h-2 z M7,10 h2 v2 h-2 z\" fill=\"#fff\"/></svg><span style=\"color:#fff;font-weight:700;font-size:14px;margin-left:6px;\">WARNING</span></div>\n수술 결과: 목소리에 특이점이 생겼다. 그 스스로도 자유롭게 말하기를 거부한다. 들은 말을 '따라하기만' 하고, 감정표현은 정신 에너지를 시각화된 '이모지(Emoji)' 형태로 방출한다.\n\n<span style=\"color:#f95659\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 12 12\" shape-rendering=\"crispEdges\" style=\"display:inline-block; vertical-align:-3px; margin-right:4px;\"><path d=\"M4,2 h4 v1 h-4 z M3,3 h6 v3 h-6 z M2,6 h8 v2 h-8 z\" fill=\"#f00\"/><path d=\"M5,4 h3 v2 h-3 z\" fill=\"#fff\"/><path d=\"M1,8 h10 v2 h-10 z\" fill=\"#333\"/><path d=\"M0,8 h1 v2 h-1 z M11,8 h1 v2 h-1 z M1,7 h10 v1 h-10 z M1,10 h10 v1 h-10 z M3,2 h1 v1 h-1 z M8,2 h1 v1 h-1 z M2,3 h1 v3 h-1 z M9,3 h1 v3 h-1 z M1,6 h1 v2 h-1 z M10,6 h1 v2 h-1 z\" fill=\"#b00\" opacity=\"0.5\"/></svg> 목덜미에 auto 스위치가 달려있다.\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 12 12\" shape-rendering=\"crispEdges\" style=\"display:inline-block; vertical-align:-3px; margin-right:4px;\"><path d=\"M4,2 h4 v1 h-4 z M3,3 h6 v3 h-6 z M2,6 h8 v2 h-8 z\" fill=\"#f00\"/><path d=\"M5,4 h3 v2 h-3 z\" fill=\"#fff\"/><path d=\"M1,8 h10 v2 h-10 z\" fill=\"#333\"/><path d=\"M0,8 h1 v2 h-1 z M11,8 h1 v2 h-1 z M1,7 h10 v1 h-10 z M1,10 h10 v1 h-10 z M3,2 h1 v1 h-1 z M8,2 h1 v1 h-1 z M2,3 h1 v3 h-1 z M9,3 h1 v3 h-1 z M1,6 h1 v2 h-1 z M10,6 h1 v2 h-1 z\" fill=\"#b00\" opacity=\"0.5\"/></svg> 켜면 마스크가 느슨해져 말할 수 있는 상태로 전환된다.\n<svg width=\"16\" height=\"16\" viewBox=\"0 0 12 12\" shape-rendering=\"crispEdges\" style=\"display:inline-block; vertical-align:-3px; margin-right:4px;\"><path d=\"M4,2 h4 v1 h-4 z M3,3 h6 v3 h-6 z M2,6 h8 v2 h-8 z\" fill=\"#f00\"/><path d=\"M5,4 h3 v2 h-3 z\" fill=\"#fff\"/><path d=\"M1,8 h10 v2 h-10 z\" fill=\"#333\"/><path d=\"M0,8 h1 v2 h-1 z M11,8 h1 v2 h-1 z M1,7 h10 v1 h-10 z M1,10 h10 v1 h-10 z M3,2 h1 v1 h-1 z M8,2 h1 v1 h-1 z M2,3 h1 v3 h-1 z M9,3 h1 v3 h-1 z M1,6 h1 v2 h-1 z M10,6 h1 v2 h-1 z\" fill=\"#b00\" opacity=\"0.5\"/></svg> 수동으로 켤 수는 없다.</span>",
    leaderComments: {
      qna: "Q: 이번 정기 보고 핵심 내용은,\nA: 핵심 내용은.\nQ: ...... 규정 위반 사례를 기반으로 베이스를 보강하여,\nA: <svg width=\"20\" height=\"20\" viewBox=\"0 0 16 16\" shape-rendering=\"crispEdges\" style=\"display:inline-block; vertical-align:-4px; margin: 0 4px;\"><path d=\"M4,3 h8 v8 h-8 z\" fill=\"#FFDBAC\"/><path d=\"M3,3 h1 v8 h-1 z M12,3 h1 v8 h-1 z M4,2 h8 v1 h-8 z M4,11 h8 v1 h-8 z\" fill=\"#b00\" opacity=\"0.1\"/><path d=\"M6,5 h1 v1 h-1 z M10,5 h1 v1 h-1 z M8,8 h2 v1 h-2 z\" fill=\"#111\"/><path d=\"M6,10 h3 v5 h-3 z\" fill=\"#F1C27D\"/><path d=\"M5,10 h1 v5 h-1 z M9,10 h1 v5 h-1 z M6,15 h3 v1 h-3 z M6,9 h3 v1 h-3 z\" fill=\"#555\"/></svg>.\nQ: ...... 하......",
      comment: "묻는대로 되돌려 받다보면 그가 과연 까마귀인지 탁구공인지 정체가 의심스럽다.\n\n독대 패턴이 항상 같다.\n나는 황당하고, 그는 태연하다.",
      author: "A - THEATER",
      rating: "★★★☆☆",
      qnaColor: "#ccc",
      qnaShadow: "rgba(255,255,255,.3)",
      highlightColor: "#fff",
      ratingColor: "#fff"
    }
  },
  { 
    id: "chroma", 
    codename: "Chroma", 
    title: "Leader of SYNCHRONIZE", 
    affiliation: "TUNNEL", 
    isGlitch: true,
    isDarkContent: true,
    quote: "평화에 필요한 건 질서와 강제 아닌가?",
    themeSongs: [{ title: "Chroma's Theme", url: "https://content-peach-ym786ubelf.edgeone.app/Chroma.mp3" }],
    themeColor: "#FFD700",
    themeGradient: ["#000", "#332200", "#000"],
    intro: "페리에스 골든로드,\n코드네임 <span style=\"text-shadow: -1px 0 #FFD700, 1px 0 #f0f; font-weight: 600;\">크로마(Chroma).</span>\nA지부에 종잡을 수 없는 인물이 한둘은 아니나, 개중 독보적인 괴짜를 꼽으라면 답이 정해져 있다. 그는 무섭게 승진해서 <span style=\"color:#fff;font-weight:400;text-shadow:1px 0 #FFD700;\">A지부 수뇌 &lt;터널&gt;</span> 팀장직을 꿰찬 인물이다. 임무 보고든 뭐든 지류에 관련된 것이라면 전부 그의 손을 타게 되어 있다. 세련된 방식으로 잔혹하고, 가증스럽게도 다정하다.\n\n당신이 지부에 속한 이상, 그와는 어떤 식으로든 엮일 것이다.",
    vectorType: "TUNNEL-A",
    appearance: {
      height: "188cm",
      features: "차분하게 묶은 긴 흑발, 금안.\n재수없게도 본인 얼굴이 꽤 반반한 편이라는 것을 알긴 하는 모양이다.\n<span style=\"font-size:10px; opacity:0.5; filter:blur(1px); color:#FFD700;\">ERROR: IMAGE_CORRUPTED_BY_SUBJECT_0XFF</span>",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#FFD700;\">[ 터널 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑정장, 긴 흑색 코트, 정장 구두</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#FFD700;\">[ 크로마 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">세련된 정장 스타일. 그러나 곳곳에 노이즈가 낀 듯한 장식들이 달려 있다.</span></div>"
    },
    psychicPower: {
      name: "모노 (Mᴏɴᴏ)",
      description: "🟥 시각적 최면.\n🟩 표적 대상은 온 세상이 뒤섞이다 못해 스스로 사고 불가.\n🟦 자기 불신 상태에 빠뜨려 의지를 상실하게 한다.\n⚠️ <em style=\"text-shadow:-1px 0 #FFD700, 1px 0 #f0f; opacity:0.8;\">\"뭐가 이렇게 꼼꼼하고 길어? 취조하는 것 같잖아요.\"</em>",
    },
    personality: "<div style=\"color:#FFD700;font-weight:700;text-align:center;text-shadow:0 0 5px #FFD700;font-size:14px\">⚠ WARNING</div>\n터널 소속 이능력자의 이름값을 가장 제대로 하는 인물이다. 정신착란과 가스라이팅에 천부적인 재능이 있고 손속을 챙기는 데 도가 텄다.\n\n<span style=\"text-shadow:-1px 0 #FFD700, 1px 0 #f0f;color:#fff;font-weight:500; font-style:italic;\">[ 영구적 메타인지능력 훼손 ]</span>\n\n가장 무서운 점은 대외적인 성격이 좋다는 것이겠다. 따져봤자 <span style=\"background:#000; color:#FFD700; px-1;\">당신만 미친 사람</span> 취급 받도록.",
    leaderComments: {
      qna: " Q: 되도 않는 이유로 우리 팀원들을 압박한 이유가 무엇이라고?\n A: 그게 '되도 않는 이유'인지 뭔지를 우리 지부장님께서 어찌 알아요.\n Q: 벡터 규정에 따르면 해당 징계는 엄ㄱ-\n A: ـــــــــﮩ٨ـ .\n Q: -이, 미친. *(미들생텀 욕설)*\n A: <em style=\"text-shadow:-0.5px 0 #f00, 0.5px 0 #FFD700; font-weight:bold;\">하하하하하!</em>",
      comment: "그는 재미만 있으면 눈에 뵈는 것이 없는 듯 하다.\n가까이 해서 좋을 것이 없다.\n\n아니,\n<span style=\"color:#ffbc00; text-shadow:1px 1px 0 #000\">아니! 아군이라고 안심하지 말아라!</span>",
      author: "A - THEATER",
      rating: "★☆☆☆☆ <s><em style=\"text-shadow:-2px 0 #f00, 2px 0 #FFD700;\">★★★★★??</em></s>",
      qnaColor: "#FFD700",
      qnaShadow: "rgba(255,0,255,.4)",
      highlightColor: "#f0f",
      ratingColor: "#FFD700"
    },
    badge: {
      text: "Leader of SYNC",
      color: "black",
      textColor: "white",
      shadow: "#FFD700"
    }
  },
  { 
    id: "here", 
    codename: "Here", 
    affiliation: "TUNNEL", 
    gender: "남성",
    age: "36세",
    oneLiner: "이건…… 조금 투박하지. 네가 보기엔 어때?",
    quote: "빛나는 폐허 위에 선 우리들을 봐.",
    themeSongs: [{ title: "Here's Theme", url: "https://genetic-harlequin-6xobgqfnnk.edgeone.app/Here.mp3" }],
    themeColor: "#2d5a4c",
    themeGradient: ["#1a3c34", "#A68B6D"],
    intro: "노아 틸,\n코드네임 <span style=\"color:#A68B6D;font-weight:500\">히어(Here).</span>\n모든 일이 이성적인 범주 내에 유지되도록 상냥하고 때로 엄격하게 '지도'한다. 꽤 오래 전부터 <span style=\"color:#A68B6D;font-weight:500\">A지부 수뇌 &lt;터널&gt;</span> 소속이었다.\n\n크게 모난 구석 없다.\n난 보통 '길 잃은 어린 양'은 그에게 인수인계 하는 편이다.",
    story: "[캐릭터 스토리 1]\n최고 연차의 터널.\n이 지부의 누구와 대면하든 그에게는 전부 후배다. 심지어 지부장조차도. 이렇게나 연차가 오래됐음에도 권력 욕심이 없어 팀장직 제안에는 회의적이다.\n\"인재가 그렇게 없어?\"\n간단히 말하자면, 그런 반응이다.\n\n이능력으로 타인의 이능력 부작용까지 정지시킬 수 있기 때문에 입사 당시 서포터 팀 '라인'에 소속될 뻔 했었다. 이기적인 성격은 아니지만, 그렇다고 남들에게 무한정 헌신할 정도의 바보같은 이타심도 없으므로 자진 거부했다.\n아마 어느 직군에 배정되었어도 다 잘해냈을 것이다. 그러나 현장에서 땀 흘리며 뛰는 것보다는 머리를 쓰고 말로 다투는 사무직이 훨씬 적성이다.\n\n1충 터널 사무실 그의 자리 근처에 가면 항상 연필 소리가 들린다. 뭔가 쓰고 가감없이 체크해서 정오답을 가려내는 것이다.\n그는 종이 위의 활자는 길을 잃을지언정 도망가지는 않는다는 사실을 알고 있다. 히어는 그런 당연한 명제에서 오는 안정감을 좋아한다. 채점하고 올바른 길로 고치는 것은 차라리 쉬운 일이니까.\n\n[캐릭터 스토리 2]\n히어는 후배들이 가장 무서워하는 선배이자 가장 신뢰하다는 선배다. 따르고 싶으면서도 함부로 기어오르지는 못할 아우라가 있기 때문이다.\n베이스가 다정함과 성숙함으로 이루어져 있는 사람이다. 그게 결코 무르다는 의미는 아니다. 항상 안정적이며 흐트러지지 않는다. 행동거지 하나하나가 단정하기 때문에 혹자는 그를 두고 '품격'이라는 표현을 사용하기도 한다.\n\n그에게서 배울만한 수많은 관록 중 하나는 사교법과 화술이다. 무례하지는 않으면서도 대화의 중심을 본인에게 두고 주도권을 쉽게 넘겨주지 않는다. 많은 후배들이 이 세련된 화법을 흉내내려다 실패하곤 한다.\n그에게 자주 '혼이 나는' 후배들의 증언을 취합해보면, 히어는 대답을 고민하는 시간이 길어질지언정 화를 내는 인물은 아니다. 그냥 잘못했다고 판단한 일에 대해서 다소 엄격해질 뿐이다. 속에 쌓아놓는 것보다는 그때그때 대화로 풀기를 선호하는 호쾌함도 있다. 시원스럽달지, 그런 면이 그와의 대담을 꺼려지지 않게 만든다.\n\n이토록 나긋하지만, 호락호락하게 져 주지는 않는다. 선을 넘은 상대는 조곤조곤하게 압박하고 말다툼을 걸어온 상대는 상냥한 논리로 밟아 다시는 궤변을 늘어놓지 못하게 한다.\n말을 잘 듣지 않는 말썽쟁이를 가만히 지켜보다가 허점을 찌르고, 제 꾀에 걸려 넘어지도록 하는 취미가 있다.\n악취미라고? 아니다. 정갈하고 유쾌한 교정일 뿐이다.\n\n\"틀린 것은 고쳐야지. 그렇지 않니?\"\n\n[캐릭터 스토리 3]\n그는 이름만큼이나 정적이고 움직이지 않는 상태의 것을 좋아한다. 세이버리는 그의 규격화된 행동양상에 가끔 웃곤 한다.\n\"Stay HERE 라고도 말해보지 그래요?\"\n\"단순히 네 재미를 위한 것 아니야?\"\n그건 기분 나쁜 종류의 농담은 아니었다.\n그의 파트너는 항상 유동적이며 발 가는대로 움직이는 사람이고, 출장을 마치고 돌아올 때마다 그 지역의 꽃을 따서 오곤 한다. 벌이나 나비가 딸려오는 것은 덤이다. 히어가 벌레에 그렇게 무던하게 구는 데는 그런 황당한 비하인드가 있다. \n\n그는 파트너가 가지고 온 꽃은 어느 정도 키우다가 죄다 책 사이에 끼워 말렸다. 이 압화를 만드는 취미가 나중에 나비 표본 수집이라는 도전적인 취향으로 이어졌는데, 세이버리는 그렇게 박제되어 있는 나비를 볼 때마다 영 탐탁치 않은 표정을 짓는다. 그럼 히어는 턱 밑에 손을 받치고 웃는다.\n다정하기는, 살만큼 살다 간 것을 어그러지지 않게 고정했을 뿐인데 뭐가 그렇게 속상한지.\n\n<div class='mt-4 flex flex-col items-start'><button class='win95-button !bg-[#eee] px-4 py-1.5 flex items-center gap-2 shadow-[2px_2px_0_0_#808080] active:shadow-inner border-2 border-white border-r-[#808080] border-b-[#808080] group' onclick=\"appNavigate('savory')\"><div class='w-4 h-4 bg-[#FF6F61] flex items-center justify-center shrink-0 border border-black shadow-[1px_1px_0_#fff]'><div class='w-1.5 h-1.5 bg-white'></div></div> <span class='font-bold text-[11px] text-black'>세이버리 프로필 바로가기</span> <span class='text-black group-hover:translate-x-1 transition-transform text-[11px]'>▸</span></button></div>",
    vectorType: "TUNNEL-A",
    appearance: {
      height: "188cm",
      features: "짙은 녹색 머리칼, 밝은 갈색 눈. 부드럽고 온화한 인상이다.\n손가락이 유독 길고 피부가 창백하다.\n미감과 센스가 매우 뛰어나 종종 후배들의 옷매무새를 직접 정리해주곤 한다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#2d5a4c;\">[ 터널 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑정장, 긴 흑색 코트, 정장 구두</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#2d5a4c;\">[ 히어 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">흑색의 긴 트렌치코트 스타일. 이따금 챙이 넓은 검은 모자를 곁들여 착용한다.</span></div>"
    },
    psychicPower: {
      name: "이리",
      description: "🪾 반경 10m 내부 모든 것을 대상으로 '동작 그만'.\n🪾 <span>물건이 떨어지고 있었든, 사람이 떠들고 있었든, 총탄이 날아오고 있었든 모든 상태가 전부 정지한다.<br/><span style=\"color:#808080;font-size:11px;\">* 무의식 상태(꿈, 환각)을 포함한다.</span></span>\n🪾 시전자: 히어는 회피/속박/무중력 상태 중 선택하여 상황을 통제할 수 있다.\n🪾 시전자가 명령을 거두기 전까지 끝나지 않는 이능력이다.\n🪾 시전 언어는 \"이리 와.\"",
    },
    personality: "<span style=\"color:#777; font-weight:700;\">[ 요원 총평 ]</span>\n그의 범접 불가한 분위기는 엄격한 선성향으로부터 나온다.\n\n어딜가나 후배들이 졸졸 따르지만 결코 함부로 기어오르진 못하는 아우라가 있다. A지부 터널 팀에 다루기 까다로운 인재들이 많이 있다는 점을 떠올려보면, 난 연장자인 그가 만만치 않은 성격인 것이 오히려 다행스럽다.",
    leaderComments: {
      qna: " <span style=\"color:#88a09a;\">Q: 노고가 많아, '리더'. 요즈음 센트럴 팀에 별일은 없고?\n A: ......내가 답하는 입장?\n Q: 아무렴. 그럼 내가 답하길 바라니?</span>",
      comment: "대화의 주도권을 한 번 빼앗기면 되찾아 오기가 힘들다. 바로 위에 아주 좋은 예시가 있듯이.\n\n센스가 넘치나 위트는 없다.\n여러모로 까다롭다. 여러모로.",
      author: "A - THEATER",
      rating: "★★★★★",
      qnaColor: "#88a09a",
      ratingColor: "#2d5a4c"
    }
  },
  { 
    id: "roman", 
    codename: "Roman", 
    title: "Elite of SYNC", 
    affiliation: "TUNNEL", 
    gender: "남성",
    age: "30세",
    oneLiner: "웃겨. 내가 언제 그렇게 하라 그랬어......",
    quote: "낭만은 허상이지, 실현하려면 얼마나 어렵게.",
    themeColor: "#D4B996",
    themeGradient: ["#111111", "#D4B996"],
    intro: "레너드 로렌스,\n코드네임 <span style=\"color:#F3E5AB;font-weight:500\">로망(Roman).</span>\n<span style=\"color:#F3E5AB;font-weight:500\">A지부 수뇌 &lt;터널&gt;</span> 소속 '에이스를 꺾은 엘리트'.\n어려운 말을 많이 읽어야 하는 직군치고 어려운 것을 싫어한다.\n\n지나치게 똑똑하다는 것만 빼면, 평범하다.\n...어떤 세계에서는 그게 가장 큰 낭만임을 아는가?",
    story: "[캐릭터 스토리 1]\n세상은 넓고 인간군상은 다양하다.\n그러니 공부 같은 게 재미있어서 하는 사람이 진짜 있을 수도 있다. 대표적으로 코드네임 로망이 그랬다. 소위 말하는 재수 없는 부류. 성격도 썩 다정한 편이 아니었기 때문에 평판이 좋은 곳과 아닌 곳의 격차가 극심한 편이었다. 정작 그 스스로는 그런 것에 연연하지는 않는 눈치였지만.\n\n대단한 것을 가지고 태어난 건 아니다. 어렸을 때 누구나 하는 사고력 수학이나 아이큐 운동을 좀 착실하게 했을 뿐이다. 그가 직접 저지른 노력은 그게 다이고, 기초를 쌓으니 나머지가 알아서 딸려왔다. 어릴 때는 어리니까, 사회생활을 하면서는 아직 겪은 게 적어 그렇다 치면서 그게 당연한 것인 줄 알고 살았다. 오만이었다. 세상에 바보가 생각보다 너무 많다는 사실을 벡터까지 들어와서야 알았다.\n\"솔직히 충격 받았어요.\" 그의 감상에 코드네임 히어가 파 하고 웃었다.\n\"그래? 내 눈에는 네가 더 충격적인데.\"\n\"왜요?\"\n\"보통은 그런 느낌을 받아도 입 밖에 안 내잖아.\"\n히어도 '그런 느낌'을 받고 산다는 의미처럼 들렸다. 이번에는 굳이 솔직하게 확인하지 않았는데도 맞은편에서 웃음소리가 또 났다. 로망은 그가 새로 소속된 '터널'이라는 팀에 자신과 비슷한 부류의 사람들이 좀 있다는 사실을 그때 직감했다. 적어도 별종 보는 시선을 받지는 않을 거라는 것……. 그가 이 팀에 이상한 소속감을 가지게 된 데는 그런 배경이 있었다.\n\n터널은 면접으로 사람을 뽑는 직군이 아니었다.\n로망이 최초이자 유일한 사례라고 했다. 정예 요원이 열한 명이나 되는 A지부 터널 팀도 누구는 본부에서 굴러떨어지고, 누구는 구조되고, 또 누구는 지부장의 스카우트를 받아서 벡터가 되었지 면접을 봤다는 사람이 없었다. 가장 평범하게 입사했는데 그게 마치 특혜라도 된 것 같았다. 하여튼간에 이상한 팀이었다.\n\n\"서류 보고 글쓰는 게 재밌으면 일반 회사 사무직을 들어가지, 왜 벡터까지 왔니?\"\n\"흥미로워서요.\"\n그게 이유의 다 였다.\n\"목 끝까지 새카만 옷을 입고 좌식 생활을 하는 사람들이 망한 땅을 어떻게 구한다는 건지 궁금하기도 하고.\"\n\n[캐릭터 스토리 2]\n로망의 이능력은 보이고 들리는 모든 것을 '읽어내는' 것이다.\n이 특성은 다름이 아니라 책상 앞에서 빛을 발한다. 하루에도 몇십 개씩 개정안이 올라오고, 첨삭해서 넘겨야할 시말서와 보고자료가 사람 앉은 키만큼 쌓이는 벡터 터널 요원의 책상 앞에서.\n1층 터널 공용 사무실, 로망의 자리 근처에 가면 보통 다른 소음을 묻어버리는 무서운 키보드 소리가 들린다. 그가 신나게 일감을 처리하는 소리다.\n\"다른 일터에서 일할 때는 일이 고팠어, 항상.\"\n그가 턱을 괴고 있다가 고백했다.\n\"성에 안 차. 아무리 읽어도 항상 좀 모자랐거든? 근데 여긴 그런 게 없어. 하나를 넘기면 세 개가 날아와.\"\n단언컨대 과로가 적성이라는 소리였다. 그의 말을 들은 다른 동료들이 눈을 세모나게 떴다. 일하는 게 즐거워서 좋겠다고 볼멘소리를 하면 로망은 곧이곧대로 받았다.\n여기가 내 천직인 것 같다고.\n\n[캐릭터 스토리 3]\n로망의 가장 독특한 점 중 하나는 접촉 결벽이다.\n타인이 손만 대도 쉽게 불쾌해 하고, 가급적이면 손끝 닿는 것도 피하고 싶어 한다. 무례하게 뿌리치거나 하지는 않는데, 싫어한다는 것은 눈에 뻔히 보이는 정도다.\n\n그런데 로망과 실수로, 또는 다소 의도적으로 부딪혀 본 사람들은 그의 그런 태도를 그다지 지적하려 하지 않는다. 손이 잡히면 위치를 뒤집고 꺾이지 않게 놓아준다거나, 밀치더라도 어깨를 받쳐주고 거리감을 확보하는 그의 '젠틀한' 루틴 때문이다.\n스킨십에 질색한다는 것은 표정을 봐야만 알 수 있다.\n\n이런 불호 취향에는 아마 그의 부작용이 엮여 있을 것이다. 넌지시 찔러보면 그의 경멸 어린 시선을 받을 수 있는데, 그런 극적인 리액션이 추측의 신빙성을 더한다는 사실을 로망은 아직 모르고 있다.",
    vectorType: "VECTOR-A",
    appearance: {
      height: "186cm",
      features: "지저분한 금발을 대충 헝클어뜨려 넘겼다.\n따뜻한 다갈색 눈을 가지고 있는데, 막상 마주치면 선명하고 명석할 뿐 그다지 온기는 없다.\n팔다리가 길쭉하고 자세가 단단하게 곧다.\n자리에 한번 앉으면 돌아다니지 않고 일만 해서 그런지, 체격이 압도적이라는 느낌까지는 들지 않는다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#D4B996;\">[ 터널 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑정장, 긴 흑색 코트, 정장 구두</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#D4B996;\">[ 로망 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">어깨에 덮은 긴 케이프 코트, 얇은 금 귀걸이.<br/>주로 쓰리피스를 꼬박꼬박 챙겨 입는 편이다.</span></div>"
    },
    psychicPower: {
      name: "섬광의 세 가지 종류",
      description: "💡 속독. 모든 것을 읽는대로 이해한다.\n💡 문서 작업의 천재. 읽고 이해하는 속도가 남들의 세 배 정도 빠르다.\n💡 [섬광의 한 가지 종류]: 시각. 이미지를 읽고 이해한다. (지류, 텍스트, 상징 정보를 포함한다.)\n💡 [섬광의 두 가지 종류]: 청각. 들리는 것을 읽는다. (발화, 문법, 말이 아닌 소음을 포함한다.)\n💡 [섬광의 마지막 종류]: 공감각. 인간 내면의 보이지 않는 것을 읽는다. (서사, 생각, 감정을 포함한다.)\n💡 이해: 장면, 분위기, 잔상 형태다. 마치 '섬광'처럼.\n💡 '이해'는 습득일 뿐 공감을 포함하지 않는다.\n💡 [섬광의 마지막 종류]는 거의 시전하지 않는다. 부작용 발생 위험이 가장 크기 때문이다.",
    },
    personality: "<span style=\"color:#A68B6A; font-weight:700;\">[ 요원 총평 ]</span>\n문서 작업의 천재.\n'읽고 이해하는' 속도가 굉장하다. 보통 터널 직은 면접으로 선발되는 직군이 아닌데, 일처리 실무 능력 하나만으로 배정 받았다. 이런 경우를 본 적이 없다.\n\nA지부 터널 팀의 초 엘리트, 낭만도 연애도 한 적 없이 오로지 일만 한다.",
    leaderComments: {
      qna: " <span style=\"color:#777;\">Q: ...그렇게 필사적으로 일하지 않아도 된다.\n A: 필사적이었던 적이 없-어.</span>",
      comment: "사무 행정이 반쯤 그의 손을 거쳐야만 완성된다는 점에서 여러모로 중요한 존재다.\n정작 자각이 잘 없는 듯 보여 황당하긴 하지만.",
      author: "A - THEATER",
      rating: "★★★★★",
      qnaColor: "#A68B6A",
      ratingColor: "#F3E5AB"
    },
    badge: {
      text: "Elite of TUNNEL",
      color: "#D4B996",
      textColor: "black",
      shadow: "#000"
    }
  },
  { 
    id: "oort", 
    codename: "Oort", 
    affiliation: "TUNNEL", 
    quote: "나는 아프지 않아.",
    themeColor: "#E5A9A9",
    themeGradient: ["#111", "#E5A9A9"],
    intro: "이사야 엘리아스,\n코드네임 오르트(Oort).\n이종족 이그니스(Ignis) : <s>날개 꺾인</s> 천사다.\n능력치가 출중하나, <span style=\"color:#E5A9A9;font-weight:600\">A지부 &lt;터널&gt;</span> 소속이라 현재 좌식 서류 업무만 보고 있다. 정작 본인은 큰 유감이 없어 보인다.\n\n찬란하고, 멍하고, 유달리 인상적인 눈빛을 가졌다.\n그의 진술에 의하면 이그니스의 '종족값'이라고 한다.",
    vectorType: "VECTOR-A",
    ignisProject: "> [Ignis] RECORD_0X01\n> SUBJECT: 이그니스 1세대\n> STATUS: ACTIVE / CLASSIFIED\n\n이그니스는 스케마 외부에서 유래한 고대 종족으로 추정됨.\n날개가 꺾였다는 표현은 은유가 아닌 실제 손상을 의미함.\n\n관련 개체: ORBIT (2세대 추정)",
    appearance: {
      height: "182cm",
      features: "길고 창백한 분홍색 머리칼.\n오후 햇빛을 받은 구름이 꼭 이런 색일 것이다.\n금안이 태양 같다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#E5A9A9;\">[ 터널 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑정장, 긴 흑색 코트, 정장 구두</span></div>"
    },
    psychicPower: {
      name: "라니아케아 공동",
      description: "🔭 반경 50m 이내 유기생명체의 모든 의식을 자신의 머릿속에 수집한다.\n🔭 고로, 마음만 먹으면 모든 것을 안다. 마음까지도.\n🔭 이능력을 사용할 때 머리 뒤에 후광이 생겨난다.\n\n<em>...... 그런데 날개는?</em>",
    },
    personality: "<div style=\"color:#ff3b3b;font-weight:700;text-align:center;margin-bottom:8px;\">⚠ WARNING</div>\n그의 이능력에 대한 부작용은 우리도 모르고, 그 자신도 모른다. 매우 짧고 상당히 치명적이다. 어떤 경우에든 옆에 반드시 라인 요원을 붙이도록 한다. 반드시. 안전을 위해 당사자의 거부 의사는 반영하지 않기로 했다.\n\n<span style=\"color:#ff3b3b;font-weight:bold;\">지속 관찰 : [ 부작용 증상 : 알 수 없음 / 대응방법 : 알 수 없음 ]</span>\n\n상태에 대하여 : 1분 내외의 비명, 24시간 기절.",
    leaderComments: {
      qna: " Q: 새를 기른다 들었는데.\n A: 응, 엘리야라고 해.\n Q: 그래, 새. 지부에서 동물 반입은 썩 권장하지 않고 있다만.\n A: 그......\n A: ......\n A: ......봐 주면 안 돼?\n Q: <em>뭐?</em>",
      comment: "그의 이능력을 요약하자면, 전지(全知)에 가깝다. 나는 지금까지 그의 대단한 부작용이 이 대단한 능력에 따른 대가라고 생각했었다.\n\n<span style=\"color:#777\">......아닐 가능성도, 있나?</span>",
      author: "A - THEATER",
      rating: "? ? ? ? ?",
      qnaColor: "#FFF9C4",
      ratingColor: "#E5A9A9"
    }
  },
  { 
    id: "newmoon", 
    codename: "Newmoon", 
    affiliation: "TUNNEL", 
    gender: "남성",
    age: "초승",
    oneLiner: "내가 조금 더 다정했으면 좋겠어요? 농담도 참. 만족해 주세요. 이 '소원자판기'에 커스터마이징 기능은 탑재되어 있지 않습니다.",
    quote: "그럼 사랑해줄까요?",
    themeSongs: [{ title: "Newmoon's Theme", url: "https://historical-indigo-4naxlut3mv.edgeone.app/Newmoon.mp3" }],
    themeColor: "#2a2a35",
    themeGradient: ["#111111", "#555555"],
    intro: "이선 미드윈터,\n코드네임 <span style=\"color:#555555;font-weight:500\">뉴문(Newmoon).</span>\n프론트 데스크에서 가장 먼저 만날 수 있는 지부의 얼굴. <span style=\"color:#555555;font-weight:500\">A지부 수뇌 &lt;터널&gt;</span> 소속 비공식적인 상담 창구이기도 하다.\n\n무엇이든 들어드리고, 때로 이루어드리니\n마치 달에 대고 소원을 비는 느낌이다.",
    story: "[캐릭터 스토리 1]\n벡터 A지부에 들어온 사람이라면 민간인이든, 타 지부 요원이든, 배달원이든 공통적으로 가장 먼저 찾아야 하는 장소가 있다. 바로 프론트 데스크다. 방문자 명단에 이름을 쓰거나 출입 장부에 사인을 하고, 사유를 적고 나면 프론트 담당 요원이 '어디로 가시면 된다'는 정보를 고른 목소리로 안내한다.\n하루 동안 가장 많은 사람들과 마주하는 사람.\nA지부의 거울.\n그게 프론트 담당 요원, 코드네임 뉴문이다.\n\n그는 언제나 정자세로 앉아서 웃고 있다. 언뜻 보면 지쳐 보이기까지 한다.\n담백하게 친절한데 과하게 다정하지는 않아서 부담이 덜 하다. 뉴문은 농담처럼 그 태도를 \"사회적 저전력 모드 같은 거예요.\" 라고 칭하곤 한다. 상대방과의 적당한 거리를 유지하는 신사적인 자세가 일관성 있으면서도, 가끔은 건조한 재치를 부려 분위기를 환기하기도 하고.\n어느 모로 보나 스몰토크 상대로는 최적이다.\n\n이 젊은 프론트 데스크의 요원이 지부 안팎으로 자주 회자되는 이유는 아마 그의 이능력 때문일 것이다. 고민이 있으면 듣고 '이루어주기' 때문이다. 이 괴담 같은 현상에 대해 누군가는 부풀려진 허풍이라고 험담을 했지만, 언젠가 뉴문이 \"쥐를 잡아주세요!\" 라는 '소원'을 듣고 휘파람 한 번에 손바닥쥐 다섯 마리를 처리한 뒤로 그런 뒷담화가 쏙 들어가고 말았다. 1층에는 기상천외한 사고가 자주 벌어진다. 온갖 사람들이 나다니니 어쩔 수 없는 일이다. 그리고 뉴문은 그런 사소한 일을 해결하는 데서 은근한 즐거움을 느끼는 듯 했다.\n그런 기꺼워하는 태도에 대해 코드네임 로망이 기막혀 한 적이 있다.\n\"누가 그렇게 명령하고 시키면 기분 나빠 하는 법 좀 배워.\"\n그 말에 뉴문이 태평한 답변을 내놓았다.\n\"어쩌겠어요? 전 소원이 없으면 손을 움직일 수 없습니다.\"\n그 말대로 였다. 뉴문의 이 대단한 능력의 대가와도 같았다. 언제나 손을 꼭 모으고 바른 정자세로 앉아있는 것이 단순히 프론트 데스크 담당이라는 사명감 때문만은 아니었던 것이다.\n\n그러니 소원이 있다면 그에게 빌어라.\n들어줄 지 아닐 지는 그 날 뉴문의 기분에 달렸겠지만, 반쪽짜리 기적이라도 이루어질 가능성이 있다는 데 가치가 있는 법이다.\n\n[캐릭터 스토리 2]\n어떤 '시'라고 불리는 사람들이 있다. 요정 일파를 일컫는 용어다.\n그들은 온갖 종족이 섞여 사는 미들생텀에서 꽤 진기한 존재 취급을 받는다. 행성 밖 우주에서도 숨쉬며 살 수 있는 독특한 신체 기관을 가졌기 때문이다. 그들은 어느 환경에 내던져져도 약간의 시간만 있으면 저들끼리의 새로운 세상을 만들어 살아갈 수 있다.\n유기에너지 사태 - '대지의 퍼즐화' 이후 미들생텀이 엉망진창이 되었을 때 대지가 울어 널(null)이 생기고, 레이는 명예를 잃고, 이그니스는 날개를 잃었는데 요정만큼은 붕괴 속에서 아무것도 잃지 않았다. 개중 일부가 스케마의 건립을 도왔을 정도다.\n\n여러 시(sí)가 굳건하게 살아남은 역사가 이렇게나 선명하기 때문에, 뉴문의 종족을 처음 들은 사람이라면 '너도 별 고생은 안 하고 컸겠다'는 식의 순수한 감탄을 내뱉고는 한다. 그럼 뉴문은 대답하지 않고 웃는다. 물론 그의 종족인 하임시(Chaim sí)는 여느 요정 일파와 마찬가지로 수월하게 살아남았겠지만, 뉴문이라는 한 개체만 분해하자면 그 만큼 잃은 게 많은 요정도 없을 테니까.\n그러나 언제나 피곤하고 성숙하게 웃는 얼굴이라 그의 사정을 자세히 알아보려는 사람은 없다. 뉴문은 차라리 그 점이 다행이라고 말한다.\n\"열과 성을 다 해서 서로에게 관심을 기울이기에는 세상이 너무 피곤합니다. 그렇잖아요.\"\n\n[캐릭터 스토리 3]\n뉴문은 A지부에서 가장 넓은 개인실을 사용한다. 그 좋은 방을 잠깐의 휴식 또는 수면 시에만 이용하니 아까울 따름이다.\n어떤 공로가 있었던 것이 아니라, 들어가는 가구 중 부피가 크고 예민한 것이 있기 때문에 큰 방을 배정 받았다. 그랜드 피아노다. 이제는 뉴문 스스로 관리하기에 힘이 들어서 먼지가 쌓여있기는 하지만.\n\n하임시는 음악파의 요정이다. 음색과 선율에 힘이 있어서, 연주만으로 동족을 알아보고 대지 어느 곳이든 터전 삼아 살아갈 수 있는 생명력 강한 일파다. 뉴문은 그들이 '대지의 퍼즐화' 이후에도 분명 잘 뭉쳐 스케마 어딘가에 새 집을 만들었을 것이라고 생각했다. 그들에게 흩어짐은 일시적인 문제일 뿐이니까.\n오직 손이 굳은 뉴문만이 동족을 찾아가지 못했다. 이런 손으로 연주라니 차라리 꿈을 꾸는 것이 더 현실성 있었다.\n\n집을 잃고 가족도 잃은 뉴문이 선택할 수 있는 목적지는 그다지 많지 않았다. 가장 간단한 일을 맡아도 좋았다. 집으로 삼을 수만 있다면.\n하임시는 집이 없으면 죽는다. 그는 아직 초승(*하임시의 가장 어린 나이) 밖에 되지 않았고, 이렇게 허무하게 눈을 감고 싶지 않았다. 그게 그가 벡터가 된 이유다. 누구나 귀찮아 하고 기피하는 프론트 업무 담당이 된 이유이기도 하고.",
    vectorType: "VECTOR-A",
    appearance: {
      height: "186cm",
      features: "흑안. 안광 자리에 초승달 같은 특이한 문양이 있다.\n한밤 같은 흑발이 한쪽 눈을 덮는다. 가끔 시야를 확보하기 위해 고개를 반 바퀴 돌려 젖히는 버릇이 있다.\n미남이다. 세련되고 건조한 장난기가 얼굴에 은은하게 머물고 있다.\n\n이능력 사용 요청, 즉 '타인의 소원' 없이는 손을 움직일 수 없다. 언제나 정자세다. 불편한 기색은...... 없어 보인다. 적어도 겉보기에는.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#2a2a35;\">[ 터널 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑정장, 긴 흑색 코트, 정장 구두</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#2a2a35;\">[ 뉴문 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">목 끝까지 올린 넥카라, 단정한 차림새. 얇은 커프스 액세서리와 은 시계를 착용한다. 신기할 정도로 흐트러짐이 없다.<br/>가끔 목 근처에 독특한 매듭을 단 경우도 있다.</span></div>"
    },
    psychicPower: {
      name: "사바하",
      description: "🌑 당신이 말하는대로 이루어드린다. 정확히는, 말하는대로 이루어드리기 위해 몸이 움직인다.\n🌑 터무니없는 소원은 듣고 흘리고, 들어봄직한 소원은 선선히 이루어준다. 무조건 이루어진다.\n🌑 <span>어떤 소원이든 정성을 다 해 들어줄 수는 있지만, 이루어줄지 말지는 온전히 시전자(뉴문)의 마음이다. <br/><span style=\"color:#808080;font-size:11px;\">[ 예제 ]<br/>*'피규어를 완성해달라', '퍼즐을 없애버려라', '행성을 터뜨려라', '나를 죽여라' 등 말도 안 되는 상식 밖의 소원은 이루어주려는 고민조차 하지 않고 패스한다.<br/>*'잃어버린 가족을 찾고 싶다' 같은 상식적인 소원은 들어봄직 하다. 단말기에 이름을 검색하는 즉시 가족의 위치 행방이 뜨는 식으로 소원이 이루어진다.</span></span>\n🌑 소원을 이루어주겠다고 선언한 순간부터 손을 자유롭게 움직일 수 있다.\n🌑 소원이 이루어지는 순간, 손의 움직임이 서서히 고정 후 강제 중지한다.\n🌑 소원이 이루어졌음을 카운트하는 방식은 '안광'이다.\n🌑 규칙: 뉴문은 뉴문의 소원을 이룰 수 없다.\n\n<div style=\"margin-top:15px; border:1px solid #333; padding:12px; background:#0a0a0a;\">\n  <div style=\"color:#555555; font-weight:bold; margin-bottom:12px; font-size:11px; border-bottom:1px solid #333; padding-bottom:5px; text-shadow:0 0 3px rgba(85,85,85,0.5);\" class=\"pixel-font\">[ SYSTEM_LOGIC : 안광 시스템 ]</div>\n  <div style=\"display:flex; justify-content:space-between; text-align:center; margin-bottom:15px; padding:0 10px;\">\n    <div style=\"flex:1;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 10 10\" shape-rendering=\"crispEdges\" style=\"transform: rotate(-90deg); filter: drop-shadow(0px 0px 4px rgba(85,85,85,0.6)); margin: 0 auto 4px auto; display: block;\"><path d=\"M5,1 h-1 v1 h-1 v2 h-1 v2 h1 v2 h1 v1 h1 h-1 v-1 h-2 v-2 h-1 v-2 h1 v-2 h2 v-1 h1 z\" fill=\"#555555\"/></svg><span style=\"font-size:10px; color:#888;\" class=\"pixel-font\">대기</span></div>\n    <div style=\"flex:0.5; color:#555; text-align:center; padding-top:10px;\">▸</div>\n    <div style=\"flex:1;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 10 10\" shape-rendering=\"crispEdges\" style=\"transform: rotate(-90deg); filter: drop-shadow(0px 0px 8px #fff); margin: 0 auto 4px auto; display: block;\"><path d=\"M4,1 h2 v1 h2 v2 h1 v2 h-1 v2 h-2 v1 h-2 v-1 h-2 v-2 h-1 v-2 h1 v-2 h2 v-1 z\" fill=\"#fff\"/></svg><span style=\"font-size:10px; color:#888;\" class=\"pixel-font\">발동</span></div>\n    <div style=\"flex:0.5; color:#555; text-align:center; padding-top:10px;\">▸</div>\n    <div style=\"flex:1;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 10 10\" shape-rendering=\"crispEdges\" style=\"transform: rotate(-90deg); filter: drop-shadow(0px 0px 6px rgba(255,255,255,0.8)); margin: 0 auto 4px auto; display: block;\"><path d=\"M5,1 v8 h-1 v-1 h-2 v-2 h-1 v-2 h1 v-2 h2 v-1 h1 z\" fill=\"#555555\"/></svg><span style=\"font-size:10px; color:#888;\" class=\"pixel-font\">진행</span></div>\n    <div style=\"flex:0.5; color:#555; text-align:center; padding-top:10px;\">▸</div>\n    <div style=\"flex:1;\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 10 10\" shape-rendering=\"crispEdges\" style=\"transform: rotate(-90deg); filter: drop-shadow(0px 0px 4px rgba(85,85,85,0.6)); margin: 0 auto 4px auto; display: block;\"><path d=\"M5,1 h-1 v1 h-1 v2 h-1 v2 h1 v2 h1 v1 h1 h-1 v-1 h-2 v-2 h-1 v-2 h1 v-2 h2 v-1 h1 z\" fill=\"#555555\"/></svg><span style=\"font-size:10px; color:#888;\" class=\"pixel-font\">성취</span></div>\n  </div>\n  <div style=\"font-size:11px; color:#aaa; line-height:1.7; background:#111; padding:10px; border-radius:4px;\">\n    <span style=\"color:#555555;\">•</span> '소원'을 들은 후, '들어주겠다'고 판단을 내린 즉시 안광이 초승달에서 보름달만큼 차오른다.<br/>\n    <span style=\"color:#555555;\">•</span> 안광의 모양이 보름 ➔ 상현 ➔ 초승달 순으로 가라앉는다.<br/>\n    <span style=\"color:#555555;\">•</span> 초승달만 하게 돌아오면 <strong style=\"color:#fff;\">'소원이 이루어진 것'</strong>으로 판명한다.<br/>\n    <span style=\"color:#555555;\">•</span> 성취 시, 손의 움직임이 천천히 소강상태에 접어든다.\n  </div>\n</div>",
    },
    personality: "<span style=\"color:#777; font-weight:700;\">[ 요원 총평 ]</span>\n<em>경고: 상시 이능력 적용 중인 요원.</em>\n\n1층 프론트, 그곳의 접수 담당 요원이 바로 뉴문이다. 응대가 깔끔하고 군더더기 없이 신사적이다.\n\n특이점이 있다.\n손을 움직이지 못한다, 당신의 소원 없이는.\n어떻게 된 일인지를 물어도 대답을 썩 내켜하지는 않는다. 이 현상 자체를 일종의 부작용으로 분류함이 옳을 듯 하다.\n\n머리부터 발끝까지 인간처럼 잘생겼으나, 인간은 아니다. 손끝이 딱 굳어서 어떤 일이든 시켜달라고 찾아왔던 첫인상이 아직까지 인상적이다......",
    leaderComments: {
      qna: " <span style=\"color:#888;\">Q: ……한데 소원이 없다면 영원히 손을 못 쓰나, 그대는?\n A: 네.\n A: 별 수 있나요?</span>",
      comment: "Record: 항시 소원을 빌어줄 '상대'를 앞에 붙여둘 것.\n\n이것으로 해결이 되는 건 맞나?",
      author: "A - THEATER",
      rating: "★★★★★",
      qnaColor: "#888",
      ratingColor: "#555555"
    }
  },
  { 
    id: "idea", 
    codename: "Idea", 
    affiliation: "TUNNEL", 
    gender: "남성",
    age: "n",
    oneLiner: "난 날 때부터 동떨어진 존재입니다. 믿어도 그만, 안 믿어도 그만.",
    quote: "선역에게는 아주 많은 서사가 있습니다.",
    themeColor: "#e0e0ff",
    themeGradient: ["#0d0d12", "#e0e0ff"],
    story: "[캐릭터 스토리 1]\n대지의 퍼즐화 이후 발생한 수많은 변이체 중 가장 독특한 종족을 꼽으라면, 누구를 붙잡고 물어도 널(null)이라고 답할 것이다.\n'충족(1)'과 '공백(0)' 두 가지 감정만 가지고 태어난 것들. 그들은 오감도 모르고 공감도 몰랐다. 자가호흡을 하니까 대충 살아있는 것들이라고 인지되었을 뿐이다. 하늘에서 떨어졌다거나 인간이 저주를 받은 것이라는 소문도 있는데, 사실 그들은 균열에서 태어나는 종족이다. 미들생텀이 완전히 복구되지 않는 한 널은 불특정 균열에서 계속해서 발생할 것이다. 멸족하지 않고.\n널을 제대로 된 종족으로 취급해주기 시작한 것은 비교적 최근의 일이다. 이전까지 그들은 유기생명체로서의 권리도 가지지 못했다.\n자아가 없는 것도 아닌데 그랬다.\n\n널은 행성의 시스템이 \"여기에는 아무것도 없어야 한다\"고 판정 내린 지점에서 발생한 일종의 [ 공백 ]이다. 세계가 붕괴하며 넘쳐나는 데이터 오류 속에서 태어난, 존재 자체가 에러(Error)인 것들. 처음 그 사실을 알았을 때 000은 인상부터 찌푸렸다. 버젓이 존재하고 있는데 오류라고 규정할 것까지는 없다고 생각했다. 물론 이런 답답함을 말해도 알아듣는 널은 없었다.\n\n그들은 만지는 모든 것을 소멸시키는 기묘한 힘을 가진 종족이다. 사물이나 생명체가 가진 데이터를 먹어치워 0까지 지워버리는 것이다. 작은 재앙이었다. 뭔가 함부로 만져서도 안 되고, 한 곳에 오래 머물러서도 안 됐다. 걸어다니는 땅마다 무너뜨려 균열이 벌어지지 않을 땅도 균열로 만들어버리곤 했다. 000은 억울한 한편으로 자신의 종족이 왜 그렇게 핍박을 받는지 알 것 같은 기분이 들었다.\n그렇지 않아도 듬성듬성 갈라진 땅을 파멸로 몰고 가고 있었다. 그들이.\n\n000은 똑똑해져야 했다. 타고난 지능과 공감각을 활용할 줄 알아야 했다. 그래야 이 부당한 환경에서 벗어나 인간답게 살 수 있었다.\n이 땅에서 살아가는 '생명체' 취급을 받기 위해서 노력까지 해야하는 것이 널의 운명이었다.\n그래서 그는 성장하는 동안 본 모든 것을 배우고 체화했다. 그게 설령 감정일지라도. 그렇게 쌓은 데이터가 그를 영재에서 천재로, 보통 천재가 아니라 괴물로 만들었다. 벡터는 처음 000이라는 널과 조우했을 때, 그에게 '낙오 무리 중 최우수 개체'라는 별명을 붙였다. 맞는 말이었다. 000은 가장 다채롭고 인간다운 널이었다. 그 즈음 그의 두뇌는 최정상기를 찍고 있었는데, 말하자면 무너진 땅을 보고 앞으로 무너질 땅의 위치를 예측할 정도였다.\n그는 이 재능을 살려 미들생텀의 온 대지를 '퍼즐'이라는 수만가지 데이터 조각으로 정의하는 일종의 가설을 세웠다. 그게 현재 벡터의 구심점이 된 '피규어'의 초안이다.\n\n현재 세상을 구하고 있는 피규어와 퍼즐 시스템이 생명 취급을 받지도 못하던 한 어린 널의 손에서 탄생했다는 것이다.\n그러니 과연 세상 일은 어떻게 될지 모르는 것이라고......\n\n\n[캐릭터 스토리 2]\n코드네임 이데아의 '피규어' 개발 성과 이후 널의 평판은 한번에 뒤집혔다.\n그간 지워야 하는 오류 취급받던 과거가 무색하게도 박탈 당한 권리가 아주 쉽게 주어졌고, 복구가 진전되며 스케마가 탄생했을 때는 인간도 무엇도 아닌 그들이 첫 입주민으로 발탁되었다.\n속이 아팠다. 그때 느낀 감정을 경멸이라고 부른다는 사실은 아주 나중에 알게 되었다.\n\n이데아는 벡터의 초기 멤버다. 본부 터널에 소속되어 피규어 관리를 전담하고 있었다. 가끔 회의감에 일하던 손이 굳을 때는 있어도 언제나 대의를 위해 일했다. 그럼 맥락 따라 차별하는 벡터보다 자신이 더 낫다는 오만한 생각이 들기도 했다. 아니, 오만이 아닐지도 모르지. 부패된 모서리까지 전부 알고 있는 그의 눈에는 히어로 협회를 자처한 이 기관이 그렇게 깨끗해 보이지 않았다.\n\n이데아가 대단한 위치에서 고위험지대 터널로 소속을 옮긴 것은 꽤 파격적인 일이었다. 벡터 시초 격의 인물이 한낱 작은 지부로 내려온 것이니 눈에 띄지 않을 수가 없었다.\n\n\"불안하지는 않으셨어요?\"\n\"어떤 것이?\"\n\"개발한 시스템을 다른 사람의 손에 맡기고...... 지위를 내려놓고 여기 온다는 사실이요.\"\n코드네임 유스의 질문을 이데아는 아주 순진한 것으로 받아들였다. 내 종족이 차별 없이 살 수 있는 세상을 이미 만들었는데 더 무엇이 필요하단 말인가. 유스는 이데아를 등에 세상을 짊어지고 살아가는 신 쯤으로 생각하는 모양이었다. 덕분에 이데아의 잇새로 웃음이 터졌다.\n\n\"세상? 나는 처음부터 그런 것은 신경 쓴 적이 없습니다.\"\n\n\n[캐릭터 스토리 3]\n이데아는 소속을 옮길 당시 '본명' 란을 이틀 동안 비워두었다.\n000이라는 옛 이름을 쓰고 싶지는 않았던 탓이다.",
    intro: "니힐 엘비스,\n코드네임 <span style=\"color:#e0e0ff;font-weight:500;text-shadow:0 0 5px #e0e0ff\">이데아(Idea).</span>\n이종족 널(null)의 최우수 개체.\n본부에서 피규어를 관리하던 터널이 <span style=\"color:#e0e0ff;font-weight:400;text-shadow:0 0 8px #e0e0ff;\">A지부 수뇌 &lt;터널&gt;</span> 소속으로 재배치되었다.\n\n모든 것을 파일(.txt)로 처리하는 것이 습성인 듯 하다.\n여러모로 꺼림칙하나, 일처리만큼은 흠 잡을 데 없다.",
    vectorType: "VECTOR-A",
    appearance: {
      height: "185cm",
      features: "눈부신 백발, 투명한 흑안.\n겹겹이 걸친 의상 덕분에 오히려 호리호리한 체구가 두드러진다.\n표정이 언제나 건조하게 굳어있다. 괜찮다. 널 출신이라 그럴 뿐이지, 결코 화가 나서 그런 것은 아니다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#e0e0ff;\">[ 터널 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑정장, 긴 흑색 코트, 정장 구두</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#e0e0ff;\">[ 이데아 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">이례적으로 새하얀 정복을 입는다. 검은 셔츠 위에 긴 흰 코트를 걸치고, 그 위에 이따금 흰 망토를 한 겹 더 덧대어 입기도 한다.<br/>본부에서 지낼 때부터 가지고 있던 습관. 이능력으로 사용하는 자신의 그림자와 자신을 구별하기 위함이다.</span></div>"
    },
    psychicPower: {
      name: "관념의 박제",
      description: "<div style=\"display:flex; flex-direction:column;\">\n  <div>\n    <span style=\"display:inline-block; background-color:#e0e0ff; color:#000; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:11px; margin-bottom:12px;\">[관념]</span>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-bottom: 14px;\">\n      <div style=\"flex-shrink:0;\">🕳️</div>\n      <div>혼란을 '규격화'하고 '정돈'한다.</div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; padding-bottom: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🕳️</div>\n      <div>상대방이 발산하는 강렬한 정신적 에너지(살기, 공포, 광기 등)를 물리적인 데이터 수치로 납작하게 하여 무력화한다.</div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; padding-bottom: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🕳️</div>\n      <div>감정의 평면화: 상대방이 느끼는 극심한 정신적 고통이나 전투 의지를 순식간에 서류상의 수치로 치환한다.<br/><span style=\"color:#808080;font-size:11px;\">* 대상은 자신의 감정이 타인의 일처럼 무미건조하게 느껴지며, 목적을 상실하고 무기력증에 빠진다.</span></div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; padding-bottom: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🕳️</div>\n      <div>실체가 없는 '정신적 저장소' : 이렇게 수치화한 모든 정신적 파편과 무너진 땅의 기묘한 정보들은 자신의 분신-그림자 속에 가두어 관리한다.<br/><span style=\"color:#808080;font-size:11px;\">* 필요할 때 그림자를 개방한다. 상대에게 처리되지 않은 원시 데이터를 쏟아부어 정신을 붕괴시킬 수 있다.</span></div>\n    </div>\n  </div>\n  <div style=\"margin-top: 8px;\">\n    <span style=\"display:inline-block; background-color:#e0e0ff; color:#000; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:11px; margin-bottom:12px;\">[박제]</span>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-bottom: 14px;\">\n      <div style=\"flex-shrink:0;\">🕳️</div>\n      <div>자신을 포함한 반경 10m의 모든 것을 타인의 인식 속에서 '풍경의 일부'로 지워낸다.</div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🕳️</div>\n      <div>그 덕분에 A지부 터널 팀은 싸움의 현장에서 언제나 한발짝 떨어져 있을 수 있다.</div>\n    </div>\n  </div>\n</div>",
    },
    personality: "<div style=\"background:#0d0d12;padding:10px;border:1px solid #e0e0ff;box-shadow:0 0 15px #2a2a3a,inset 0 0 10px #1a1a2e\">\n<div style=\"color:#e0e0ff;font-weight:700;text-align:center;text-shadow:0 0 8px #e0e0ff;font-size:14px\">Null에 대하여</div>\n<div style=\"font-size:12px;color:#b0b0cc;text-align:center;padding:5px 10px\">\n널(Null).\n미들생텀이 무너지며 생긴-생겨선 안 됐던 신생 종족. 한때 벡터는 이들의 존재 자체를 에러(Error)로 규정했었다.\n\n그들의 가치는 개체 이데아가 최초로 피규어 시스템을 만듦으로써 재정의 되었다. 그는 비상한 두뇌로 자신의 종족을 에러에서 백신으로 끌어올린 셈이다.\n</div>\n</div>",
    leaderComments: {
      qna: " Q: '감정을 해부하고 수치로 뽑는다'. 이건 고문과 다를 바 없어 보인다만.\n A: 습성입니다.\n A: 사명과 철학보다 우선하는 것이 본능인 법이지요.\n Q: ......",
      comment: "나는 그의 속을 짐작할 수 없고\n그는 나의 속을 0부터 100까지 나열할 줄 안다.\n\n<span style=\"color:#e0e0ff\">Q: 그를 천재라는 단편적인 단어로 정의해도 되는가?</span>",
      author: "A - THEATER",
      rating: "★★★★★",
      qnaColor: "#7a7a9a",
      ratingColor: "#e0e0ff"
    }
  },
  { 
    id: "zero-hour", 
    codename: "Zero-Hour", 
    affiliation: "TUNNEL", 
    gender: "남성",
    age: "24세",
    oneLiner: "귀공, 번거롭지 않다면 한 번 더 말해주겠어?",
    quote: "구원자에게도 보호받을 권리가 있다.",
    themeSongs: [{ title: "Zero-Hour's Theme", url: "https://www.image2url.com/r2/default/audio/1778381449298-b52a5f1c-d0fc-4810-8a49-16fd3b5bb21e.mp3" }],
    themeColor: "#00D4E3",
    themeGradient: ["#01454F", "#00D4E3"],
    story: "[캐릭터 스토리 1]\n스케마가 설립되던 당시의 이야기다.\n중앙이 건설되어 벡터 본부를 세우고 외딴 섬처럼 고정되어 있었을 때, 그 옆에 가장 먼저 붙은 지역이 바로 서부 센마레였다. 현 시점 스케마에서 가장 크고 치안이 좋은 평화의 땅 말이다.\n그곳의 바다는 관광지이고, 교육과 행정 수준이 높으며 인구 수도 많다. 가장 먼저 발전을 이룬 것도, 가장 먼저 안정을 찾은 것도 다 센마레다. 그 항만의 대도시를 건설한 것은 고작 한 가문이었다.\n\n청.\n청은 미들생텀이 퍼즐화를 맞이하기 이전부터 온 땅을 돌며 물건을 사들이고 되팔던 유명한 상인 가문이다. 스케마에 들어와서는 이프에덴과 킨디레일에서 물건을 들이고, 에이로베이스에 파는 식으로 서부 무역 수출입을 총책임지고 있다.\n입이 떡 벌어질 정도의 부자다. 그것이 그들이 센마레를 세우고 지금까지 평화롭게 유지할 수 있는 가장 큰 이유다.\n한때 -센마레 건립 전- 그들의 수익 약 절반이 스케마 설립 초기 자본으로 기부되었는데, 그 영향으로 지금까지 정부로부터 수많은 우대 혜택을 받고 있다. 그것을 이유로 으스대지는 않는다. 그들은 대의와 도리를 최우선하는 집안이며, 나라가 흉조일 때 힘 있는 사람이 앞으로 나서야 한다는 것도 잘 알고 있으니까.\n요컨대 의리 말이다.\n\n청 가문은 전통처럼 대가족을 유지하는 지조 있는 집안이다. 몇 세대를 거쳐도 온 식구가 한 지붕에 모여살기로 유명하다.\n샤이 청은 청의 열 남매 중 막내 도련님으로, 사실 가문의 업적 같은 건 너무 어릴 때 벌어진 일이라 상단이 미들생텀과 스케마에 어떤 도움을 주었는지는 자세히 알지 못한다.\n막내라도 귀여움을 받거나 하지 않았다. 그게 그들의 생태였다. 어릴 때부터 건전한 경쟁으로 상단 후계자를 가려냈고, 단순한 대화를 할 때도 영리한 말솜씨를 부려서 서로를 시험하곤 했다. 날 때부터 장사꾼인 사람이 있는데 청의 열 남매는 열 명이 다 그랬다. 샤이는 그 작은 사회에서 살아남기 위해 어려서부터 거침없는 성격과 대쪽같은 줏대를 길렀다. 예의는 기본이고, 사람을 대할 때 꼬지 않고 보이는 대로 판단하는 대담함도 배웠다.\n\n대뜸 \"가서 세상을 구해라.\" 는 명령을 들은 것은 샤이가 성인이 되던 해였다. 상단 후계 교육으로부터 열외되어 벡터로 가라는 의미였다. 그는 딱히 이유를 묻지 않고 명에 따랐다. 나중에 알고 보니 '샤이 청' 자체가 가문에서 국가 지원에 대한 보답으로 보내는 일종의 감사 선물 같은 것이라고 했다. 효율적이고 효과적인 선택이라고 생각했다. 그는 꽤 좋은 능력을 가지고 있었기 때문이다.\n\nA지부 입사 당시 샤이가 배정받은 포지션은 일반계급 아리아였다. 이능력이 보호나 구출에 딱 맞게 발현되어 있기도 하고, 흐트러짐 없는 그 성격 또한 아리아로서 손색 없다는 것이 그 이유였다.\n\n그랬던 그가 돌연 정예 터널 팀의 보안요원으로 이직했다.\n인생을 산뜻하게 살아왔듯이, 이번에도 그렇게 복잡한 이유가 있지는 않았다.\n\n\n[캐릭터 스토리 2]\nA지부 보안요원 -경비반장- 직무가 공석이 되었다. 제로아워가 입사한 지 2년 정도 되었을 때의 이야기다.\n보안요원은 보통 지부 안에서 가장 많은 시간을 보내는 감찰직이다. 경비, 지부 규칙 지정, 안전 관리. 할당된 임무를 보면 보통 아리아가 맡을 것 같지만, 현장에 나서지 못하고 지부 안에 붙박혀 있어야 한다는 이유로 터널 팀에 소속된 직무였다. 보안요원은 프론트 데스크 담당과 마찬가지로 인기가 없다. 억지로 호명되어 몇 년 버티다 갈아치워지고, 그런 세대교체를 반복하는 것이 일종의 전통이었다. 회전율은 빠른데 지원자가 없어 항상 곤란했다. 그렇다고 공석으로 둘 수도 없는 자리이고.\n\n새 보안요원을 구한다는 공고가 터널 팀에서 한 차례 돈 모양이었다. 아리아 층까지 지원 요청이 내려온 것을 보면. 공문을 손에 든 CORE(*아리아 정예)의 팀장은 영 이해가 안 된다는 얼굴이었다.\n\"저 팀이 해결 못한 숙제를 우리 팀에 떠맡겼다고 한다. 지원자가 있는가?\"\n직설적이고 뼈 아픈 독설이긴 해도 그게 사실이었다.\n\n아리아로서는 이직까지 해야 하는 부담스러운 상황이었다. 정예팀으로 승격을 시켜준다지만, 메리트는 그것 뿐이었으니 당연히 나서는 사람이 없었다. '내가 아니라도 누군가는 하겠지.' 눈치를 보는 광경을 보아하니 다들 속으로 그런 생각을 하고 있는 것 같았다---그렇지만 그건 제로아워의 타입은 아니었다.\n그는 주변을 딱 세 번 살피고 자진해서 손을 들었다. 내가 할 수 있는 일이다, 이외의 별 생각은 없었다.\n아리아로서 2년 간 활동하면서 그도 아리아 고유능력을 길렀다. 괴력 말이다. 체력은 타고났고, 역사상 자신보다 더 힘이 센 아리아가 없다고 했으니 어쩌면 그 경비인지 뭔지 하는 업무에 잘 활용할 수 있을 것 같았다.\n예감은 적중했다. 덕분에 그는 지금까지도 '무력 쓰는 터널'이라는 이례적인 호칭으로 불리곤 한다.\n\n직무를 교체하면서 본부에서 능력 재검사를 받을 때, 그에게 이전에는 없던 이능력 부작용이 새로 생겨났다.\n그가 의문을 표하자 연구진은 \"지부 밖으로 나가지만 않는다면 발생할 일이 없다\"고 일축했다. 아리아 팀에 대한 제로아워의 미련을 우려해서인지, 제로아워가 혹독한 보안요원을 손쉽게 '때려치우는' 것을 방지하기 위해서인지.\n어쩌면 둘 다 일 수도 있었다. 제로아워는 그때 자신이 새장에 갇혔음을 직감했다.\n갑작스럽긴 하지만 큰 불만은 없었다.\n\n주어진 업무에 집중할 수 있으니 오히려 괜찮을지도 모르겠다고도 생각했다.\n\n\n[캐릭터 스토리 3]\n제로아워는 그 나잇대 어린 청년 답지 않게 고집이 적다. 말이 아주 잘 통하고, 상대가 조금 더듬거려도 참을성 있게 끝까지 듣는다.\n\"입장 잘 들었어, 귀공. 이제 내가 발언을 시작해도 될까?\"\n그는 자신의 차분함을 상대에게 전파하는 방법을 본능적으로 알고 있는 사람처럼 군다. 화법만 봐도 그렇다. 인간적이고, 감사 또는 사과에 솔직하며, 시원스러운 태도 일면에 독특한 예의가 있다.\n그런 제로아워도 매서워지는 경우가 있는데, 그건 바로 '상식 또는 정해진 규칙을 어겼을 때' 다. 안전하라고 만든 규칙을 어기면 누군가 다칠지도 모른다는 것이 그 이유다.\n\n<프론트 데스크의 요원 권리보호규정>을 작성하던 때가 대표적인 사례다.\n남들은 사소한 일로도 숨 쉬듯이 부르는 '제로아워' 한 어절을 일 년이 넘도록 한번도 부르지 않은 좋은 동료.\n웬만한 괄시도 웃어넘길 줄 아는 사교성 좋은 요정, 선하고 착한 프론트의 담당자. 뉴문이 굳은 손을 붙잡고 처음으로 \"제로아워.\" 라고 호명했을 때, 프론트로 즉각 이동한 그는 눈앞의 광경을 보고 그만 할 말을 잃었다.\n개판이었다. 무슨 난리가 있었던 것인지. 물을 맞고 뺨이 부은 요정 하나만 참한 눈으로 제로아워를 보고 있었다. 멱살 잡힌 흔적이 선명했다.\n\n\"타 지부 진상이 잠깐. 그런데 손이 이 모양이라 혼자 수습이 어렵습니다.\"\n\n익숙한 일을 겪었다는 뉴문의 표정이 제로아워의 속을 뒤집어 놓았다. 할 말이 없었다. 물을 것도. 그를 의료동으로 인계하고 프론트를 정리하면서 제로아워는 살면서 처음 '분노'를 제대로 느껴보았다.\n복지와 권리는 자동으로 챙겨지는 것이 아니다. 사각지대도 제대로 살펴야 한다. 아무도 신경쓰지 않는 당연한 자리에서 누군가 부당하게 희생하고 있을지도 몰랐다. 그게 제로아워가 규정과 지침을 그렇게나 세부적으로 검토하게 된 계기였다.\n\n현재 A지부에서 통용되는 최신 권리보호규정과 안전지침은 전부 보안요원 제로아워의 손에서 탄생했다.\n그 양이 얼마나 많은지 안다면 아마 깜짝 놀랄 것이다.",
    intro: "샤이 청,\n코드네임 <span style=\"color:#00D4E3;font-weight:500\">제로아워(Zero-Hour).</span>\n<span style=\"color:#00D4E3;font-weight:500\">A지부 수뇌 &lt;터널&gt;</span> 소속 유일한 보안요원.\n\n스케마 안팎의 질서가 아리아라면, A지부의 질서는 그로부터 만들어진다.",
    vectorType: "VECTOR-A",
    appearance: {
      height: "180cm",
      features: "암녹색 단발머리, 앞머리까지 단정하게 잘랐다. 붉은 실로 머리카락을 묶고 다닌다. 직접 만든 머리끈으로 추정된다.\n미소년의 인상을 가졌다. 표정에 분노나 불만이 적고 선선하다. 깜빡임이 적은 눈은 날카롭고, 새파랗고, 밝다. 마주치면 잘못한 것이 없어도 낱낱이 검증당할 것 같다.\n집안에서 교육을 잘 받은 티가 난다. 잔근육이 잘 잡힌 호리호리한 체격으로, 늘상 흐트러짐 없이 바른 자세를 유지한다. 장담컨대 그는 척추뼈 하나조차 휜 구석이 없을 것이다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#00D4E3;\">[ 터널 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑정장, 긴 흑색 코트, 정장 구두</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#00D4E3;\">[ 제로아워 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">붉은 실 머리끈, 은 피어싱, 정장 셔츠 위 하네스 벨트.<br/>검은 전투화를 착용하고 셔츠 소매를 팔꿈치까지 걷었다. 다소 아리아 요원 같은 인상이다. 긴 코트, 조끼 등 구조에 방해가 될만 한 거추장스러운 요소를 하나씩 덜어내다 보니 터널의 정장 타입에서는 한참 벗어나 버렸다.</span></div>"
    },
    psychicPower: {
      name: "금강차양",
      description: "<div style=\"display:flex; flex-direction:column;\">\n  <div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-bottom: 14px;\">\n      <div style=\"flex-shrink:0;\">🔖</div>\n      <div>'A지부 내에서' 이름이 불리면, 부른 사람의 위치로 즉시 이동한다.</div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; padding-bottom: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🔖</div>\n      <div>부른 즉시 이능력이 발동된다. 지부 내부에서 발생한 호출에 대해 제로아워는 거부권이 없다.</div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; padding-bottom: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🔖</div>\n      <div>이름이 불리면 눈앞에 상황의 개요가 시각화된다. 심각한 일인지 아닌지를 어느 정도 미리 인지하고 호출되기 때문에 당황하는 일이 없다.</div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; padding-bottom: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🔖</div>\n      <div>문제 상황이 종료되면 형체가 사라져, 이동 시작 지점으로 복귀한다.</div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🔖</div>\n      <div>호명이 들릴지라도, 지부 외부의 호출에는 응답하지 않는다.</div>\n    </div>\n  </div>\n  <br/>\n  <div style=\"margin-top: 8px;\">\n    <span style=\"display:inline-block; background-color:#00D4E3; color:#000; padding:2px 6px; box-shadow:1px 1px 0 rgba(0,0,0,0.5); font-weight:bold; font-size:11px; margin-bottom:12px;\">[참]</span>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-bottom: 14px;\">\n      <div style=\"flex-shrink:0;\">🔖</div>\n      <div>청의 주술의 일종</div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; padding-bottom: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🔖</div>\n      <div>저지하고자 하는 대상의 '반대' 속성을 끌어내어 방어한다.<br/><span style=\"color:#808080;font-size:11px;\">* 물 → 불 / 전류 → 방전 / 빛 → 어둠 / 고속 → 저속 / 등등</span></div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🔖</div>\n      <div>주로 [금강차양]으로 호출되었을 때, 피호출자를 보호하고 문제 상황을 빠르게 해결하기 위해 사용한다.</div>\n    </div>\n  </div>\n</div>",
    },
    personality: "<span style=\"color:#008B9C; font-weight:700;\">[ 요원 총평 ]</span>\n지부 지킴이.\n우리 같은 고위험지대 전문 팀에 아리아 외, 무력 쓰는 '터널'은 반드시 필요하다. 지부 상시잔여 가능 인원이 항상 적기 때문이다.\n\n강하고 단정하고 믿을만 하다. 현재 A지부 최신 안전 관리 지침은 전부 그의 손에서 탄생했다.",
    leaderComments: {
      qna: " <span style=\"color:#777;\">Q: 제로-\n A: -아워, 정시에 도착했어. 날 불렀어?\n Q: ......별명을 불러도 알아듣나?\n A: 응. 귀공이 정해준 이름이니까.</span>",
      comment: "흐트러진 모습을 본 적이 없다.\n덕목이 맞지만 흔한 일은 아니다.\n\n다 터놓지 않아도 쉽게 이해한다.\n드물다. 여러모로.",
      author: "A - THEATER",
      rating: "★★★★★",
      qnaColor: "#777",
      ratingColor: "#00D4E3"
    }
  },
  { 
    id: "etc", 
    codename: "Etc.", 
    affiliation: "TUNNEL", 
    gender: "남성",
    age: "30세",
    oneLiner: "오, 아주 근사한 오답입니다!",
    quote: "귀하께서 버린 것도 다- 쓸 데가 있습니다.",
    themeColor: "#db7093",
    themeGradient: ["#3d001f", "#db7093"],
    story: "[캐릭터 스토리 1]\n코드네임 에트세트라, 정적인 터널 팀의 천덕꾸러기.\n그는 터널 정예 SYNCHRONIZE의 마지막 알파벳을 맡고 있으면서도 팀의 이물질과도 같은 취급을 받는다. 그들이 물이면 그는 기름이고, 그들이 기름이면 그는 물이었다. 섞일 수가 없었다. 에트세트라 스스로는 그런 상태를 꽤 재미있다고 생각하는 모양이었으나, 코드네임 크로마는 그를 볼 때마다 질려서 창문 밖으로 뛰어내리고 싶어 한다.\n\n\"아니면 당신을 창 밖으로 던지거나. 뭐가 더 나을 것 같아요?\"\n\"오, 무슈. 눈 앞에서 벌어진 이- '저'라는- 발랄한 이벤트가 귀하로 하여금 그런 멋진 발상을 하도록 만들었다니 이건 정말 '근사한' 일이군요. 그렇지 않습니까? 직장이란 지루하고, 환경이 정적이면 사람도 재미없어지게 마련입니다. 어디 한 번 가감없이 뛰어내려 보시죠! 저는 옥상에서 구경이라도 하겠습니다. 어떻습니까?\"\n\"......집어치우고, 일이나 하세요.\"\n\n그는 끝내주는 로맨티스트이며, 탐미주의자이고, 매우 세련된 괴짜다.\n능동적으로 사건사고를 몰고 다니는데 그 규모가 항상 기분 좋게 웃어넘길 수 있는 정도에서 그친다. 몸놀림이 가볍고 사람을 홀리는 매력이 있어 혹자는 그를 두고 벡터보다는 '괴도 같다'는 평가를 내리기도 한다. 유쾌하다. 박수치며 즐거워 하는 관객을 만나면 놀라워 하면서도 덩달아 즐거워진다.\n불행히도 그가 속한 터널 정예 팀에는 그의 뛰어난 센스를 받아줄 멋진 쇼 비즈니스 파트너가 거의 존재하지 않지만.\n\n종종 업무를 팽개치고 옥상부터 남의 집 지붕까지 뛰어다니는 일종의 '땡땡이'를 취미처럼 부리기도 한다. 이건 \"커피 좀 사 올게\" 라는 핑계로 포인트노드까지 놀러나가는 코드네임 로망의 딴짓과는 스케일이 다르다.\n긴급체포담당으로 배치되는 요원은 보통 코드네임 제로아워다. 눈 하나 깜짝 하지 않고 무섭게 쫓아오는 그 새파란 눈의 어린 요원이 요즘 에트세트라의 가장 큰 즐거움이다.\n\n\"귀공, 귀공에게 할당된 검토 파일이 네 부 쌓여있어. 해결했어?\"\n보통 이런 질문이 나올 시점에는 아무런 농담따먹기도 먹히지 않는다. 양손을 주머니에 집어넣고 -아마 그가 던지는 '선물'을 받지 않겠다는 강경한 의지의 표명이리라- 일정한 속도로 보폭을 넓히기 시작하면 에트세트라의 여유로운 얼굴에도 어쩔 수 없는 긴장감이 생긴다. 잡히면 죽을 것만 같다는 본능적인 방어기제였다.\n억울하게도 제로아워는 그의 손을 잡아서 제자리로 끌고갈 뿐 상해를 입힌 적은 한 번도 없었는데도 말이다.\n\n\n[캐릭터 스토리 2]\n정신적 스트레스 0%, 대내외적으로 완벽한 인간상.\n자신의 잘남을 거침없이 인정할 정도로 자존감이 높으며 한번 저지른 행동은 구질구질하게 후회하는 법이 없다. 완숙한 기상천외함에 장난기를 왕창 쏟아부어 사람을 간단히 끌어들인다.\n안정적이다. 아무리 가까이 다가가도 진짜 얼굴을 가늠할 수가 없다.\n\n\"기분 나쁜 적은 없어? 가만 보면 인생 진짜 행복하게 사는 것 같아, 당신.\"\n코드네임 서든이 건성으로 박수를 치면서 물으면 에트세트라는 과장된 인사를 건네고 미소짓는다. \n\"한 번 사는 인생인데 싫은 것에 주목해서 시간을 낭비하는 것은 너무 아깝지 않습니까?\"\n\n흑역사 같은 것은 아무래도 없었을 것 같은데, 면접에서 솔직하게 기술한 바에 의하면 그도 이렇게 성장하기까지 흙탕물을 꽤 구른 모양이었다.\n그는 이능력을 처음 얻었던 당시를 '세상이 나를 토해내던 시절'이라고 묘사했다. \"컨트롤이 매우 미숙했지요. 페리크루(*식물 번식 체계를 따르는 화혼 종족)의 사체를 꺼낸 적도 있습니다. 물론 제 의지가 있었던 적은 단 한번도 없고, 시전 전 했던 생각이라고는 '더는 끔찍한 것이 집혀나오지 않기를' 같은 어리석은 바람이 다였습니다만.\" 예일 아모어가 잠시 말을 멈추었다. 곧 극적인 몸짓으로 일어나 가뿐하게 웃었다.\n\"그렇네요. 끔찍하다는 생각을 머릿속에 담은 것 자체가 문제였습니다, 아마. 하하하.\"\n손만 뻗어도 온갖 이상한 단어들이지만... 앗, 오타가 있었나. 다시 원문을 봅니다. \"손만 뻗어도 온갖 이상한 것이 집혀 나오니 미쳐버릴 것 같았다고 했다. 차라리 죽는 것이 더 낫겠다는 생각을 자주 했다고도. 그렇게나 즐거운 얼굴로 이야기 하니 정말 아무렇지 않은 소리인 것 같았다. 죽고 싶었다고까지 토로하는데 이상한 일이었다. 그게 예일 아모어라는 사람이 자아내는 가장 큰 재능이었다.\n\n면접을 참관하던 코드네임 이데아가 복귀 직전 그를 따로 불러냈다.\n\"지금 그렇게 변화하게 된 계기가 있습니까?\"\n자기 혐오의 구렁텅이로 굴러떨어지지 않고 호쾌한 어른으로 자라날 수 있었던 원동력을 묻는 것이었다. 예일 아모어가 선글라스를 밀어올렸다. 이런 질문을 받을 줄은 예상하지 못한 사람처럼.\n\n\"이 잡쓰레기가 세상이 제게 건네는 전리품이라고 생각하니 좀 다르게 느껴지더군요.\"\n\"전리?\"\n\"평화에서 방출되었으나 여즉 버텨 누군가의 집으로 작용하려 하고 있으니 이 땅도 일종의 전쟁을 겪는 중이지요. 그 과정에서 발생하는 것들이 전리품이 아니면 무엇이겠습니까?\"\n\"......\"\n\"페리크루의 사체든, 익명의 비석이든, 팔다리 한짝이든 죄다 토해내며 내가 이렇게 버티고 있음을 티 내고 싶어 안달이 났는데 썩 끔찍할 것까진 없다는 생각이 들었습니다.\"\n\"기왕아면 수집해서, 멋드러지게 선물하고 귀하의 웃음을 자아낼 수 있다면야 더 좋겠다고 생각했고요. 새로운 가치가 생기는 것이니까요!\"\n\n이데아가 \"쓸데없네요.\" 라는 말로 그 장황한 감성을 건조하게 압축하자 예일 아모어는 크게 웃었다. 뭐 그렇게 볼 수도 있겠습니다만.\n\"어쨌거나, 그러니, 귀하께서 버린 것도 다 쓸 데가 있을 겁니다. 어떤 방식으로든.\"",
    intro: "예일 아모어,\n코드네임 <span style=\"color:#db7093;font-weight:500\">에트세트라(Etc.).</span>\n<span style=\"color:#db7093;font-weight:500\">A지부 수뇌 &lt;터널&gt;</span> 소속 '완벽하게 즐거운 광대'이자 신출귀몰한 괴도.\n\n집무실을 숨쉬듯 이탈하고 장난을 즐기는 이런 사람도,\n......터널이다.",
    vectorType: "VECTOR-A",
    appearance: {
      height: "188cm",
      features: "얼굴만으로 이미 과도하게 화려한데, 반짝반짝한 은발을 다리까지 길러 시선이 완전히 분산되고 만다.\n앞머리를 멀끔하게 포마드로 왁스칠을 하고 유니폼을 반듯하게 챙겨 입었다. 가만히 있어도 별로 다가가고 싶지 않은 굉장한 아우라가 있다.\n반드시 어떤 사건에 휘말리고 말 것만 같은 정신없는 괴짜스러움......\n무표정일 때는 꽤 사나운 인상이나, 다행스럽게도 입가에서 미소가 떠나지 않는다.",
      clothing: "<div style=\"margin-bottom:12px; opacity:0.9;\"><strong style=\"color:#db7093;\">[ 터널 유니폼 공통사항 ]</strong><br/><span style=\"padding-left:4px;\">- 흑정장, 긴 흑색 코트, 정장 구두</span></div><div style=\"opacity:0.9;\"><strong style=\"color:#db7093;\">[ 에트세트라 스타일 ]</strong><br/><span style=\"padding-left:4px; display:inline-block;\">기다란 트랜치 타입의 정장 조끼, 그 위에 코트를 걸친다.<br/>선명한 오렌지색 눈을 와인색 선글라스로 감추었다. 문자 그대로의 멋쟁이.</span></div>"
    },
    psychicPower: {
      name: "My pleasure!",
      description: "<div style=\"display:flex; flex-direction:column;\">\n  <div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-bottom: 14px;\">\n      <div style=\"flex-shrink:0;\">🔎</div>\n      <div>반경 1m 범위의 허공에서 '물건을 꺼낸다'.</div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; padding-bottom: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🔎</div>\n      <div>나오는 아이템은 완전히 랜덤이다. 미들생텀이 터지며 발생한 데이터 부산물을 헤집어 꺼내는 것이다.<br/><span style=\"color:#808080;font-size:11px;\">* 고장난 알람시계, 잃어버린 양말, 구멍난 고무오리 등등 터무니 없고 웃긴 물건이 나오는 경우가 태반.</span></div>\n    </div>\n    <div style=\"display:flex; align-items:flex-start; gap:10px; padding-top: 14px; border-top: 1px solid rgba(128,128,128,0.3);\">\n      <div style=\"flex-shrink:0;\">🔎</div>\n      <div>실상: 에트세트라가 생각하는 물건이 집혀나오는 이능력이다. 그가 당최 무슨 생각을 하는지 알 수 없으니 대부분이 잡쓰레기처럼 보일 뿐.<br/><span style=\"color:#808080;font-size:11px;\">* 그는 꺼낸 부산물을 보물 마냥 건네고, 자연스럽게 웃음을 훔쳐가는 일을 즐거워 한다.</span></div>\n    </div>\n  </div>\n</div>",
    },
    personality: "<span style=\"color:#777; font-weight:700;\">[ 요원 총평 ]</span>\n높은 자존감, 정신적 스트레스는 0%.\n대단히 극적이다. 상황을 빠져나가는 솜씨며 본인이 보기에 재미없어 보이는 임무를 회피하는 실력이 기막히다.\n주로 날 황당하게 만들어 전의를 상실시키니, 인재라면 인재겠다.\n인재(人災).",
    leaderComments: {
      qna: " <span style=\"color:#a37d8a;\">A: 자아, 리더. 보이십니까? 이 손에 아무것도 없지요?\n Q: ?\n A: 그리고 이 손에도 아무것도 없습니다.\n Q: ......\n A: 여기를 들춰보면--. 오, 이런.\n <em style=\"color:#a79888\">*누구의 것인지 모를 검은 양말이다.*</em>\n Q: 나가!\n A: 하하하하. 분부대로!</span>",
      comment: "정신없이 휘둘리고 보면 자리를 이탈해 있다.\n\n괴짜, 스마일리, 엔터테이너.\n나는 이런 타입은 당최 어떻게 다뤄야 할지 모르겠다.",
      author: "A - THEATER",
      rating: "★★★★☆",
      qnaColor: "#a37d8a",
      ratingColor: "#a60053"
    }
  },
];

export const TEAMS = [
  { id: "central", name: "Central (센트럴)", characters: CHARACTERS.filter(c => c.affiliation === "CENTRAL") },
  { id: "area", name: "Area (아리아)", characters: CHARACTERS.filter(c => c.affiliation === "AREA") },
  { id: "line", name: "Line (라인)", characters: CHARACTERS.filter(c => c.affiliation === "LINE") },
  { id: "tunnel", name: "Tunnel (터널)", characters: CHARACTERS.filter(c => c.affiliation === "TUNNEL") },
];

export const getIdentity = (charId: string): string => {
  for (const team of TEAMS) {
    const index = team.characters.findIndex(c => c.id === charId);
    if (index !== -1) {
      const fileNum = String(index + 1).padStart(2, '0');
      const teamInitial = team.id.charAt(0).toUpperCase();
      return `VectorOZ#${fileNum}${teamInitial}-${team.characters[index].codename.toUpperCase()}`;
    }
  }
  return charId.toUpperCase();
};
