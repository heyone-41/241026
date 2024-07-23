export const shareKakao = (route, title) => {
  console.log(route, title);
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init("ID 95322");
    }

    kakao.Share.sendCustom({
      templateId: 95322,
    });
  }
};
