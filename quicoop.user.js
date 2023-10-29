// ==UserScript==
// @name         quicoop
// @namespace    https://www.example.com
// @version      0.1
// @description  페이지를 변경합니다.
// @author       Your Name
// @match        https://www.costream.app/kangqui?lck=youtube
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 대상 iframe의 XPath
    const iframeXPath = '//*[@id="__nuxt"]/div/iframe[3]';
    // 변경할 URL
    const newURL = 'https://www.dostream.com/uchat2.php';

    function changeIframeSrc() {
        // iframe 요소를 선택
        const iframe = document.evaluate(iframeXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if (iframe) {
            // iframe의 src 속성을 변경
            iframe.src = newURL;
        }
    }

    // 페이지가 완전히 로드될 때까지 대기
    window.addEventListener('load', function() {
        // 대기 후 변경 함수 실행
        setTimeout(changeIframeSrc, 5000); // 3초 대기 (필요에 따라 조절)
    });
})();
