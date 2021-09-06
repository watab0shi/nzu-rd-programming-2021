/**
 * setTimeoutをPromiseでラップしたやーつ
 * @param {number} ms 待機時間（ミリ秒）
 * @returns {Promise<void>}
 */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export { delay };
