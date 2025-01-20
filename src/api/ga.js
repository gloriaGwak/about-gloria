import { logEvent } from "firebase/analytics";

/**
 * Firebase Analytics에 커스텀 이벤트를 로깅하는 함수.
 *
 * @param {string} eventName - 이벤트 이름 (예: "button_click").
 * @param {object} params - 이벤트에 포함할 파라미터 (예: { target, section, time }).
 * @param {object} analytics - Firebase analytics 인스턴스.
 */
export function logCustomEvent(analytics, eventName, params = {}) {
    try {
        logEvent(analytics, eventName, params);
        console.log(`이벤트 로깅 성공: ${eventName}`, params);
    } catch (error) {
        console.error(`이벤트 로깅 실패: ${eventName}`, error);
    }
}