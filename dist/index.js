"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r={checksum:function(r,t){for(var e=r.length-1,n=0,u=0;u<e;++u){n+=parseInt(r.charAt(u),10)*t[u]}var i=n%11;return(10===i?0:i)===parseInt(r.slice(-1),10)},pesel:function(r){var t=Number(r.substring(2,4));if(!t||t%20>12)return!1;var e=Number(r.substring(4,6));if(!e||e<1||e>31)return!1;if(!/^[0-9]{11}$/u.test(r))return!1;var n=[1,3,7,9],u=(""+r).split("").map((function(r){return parseInt(r,10)})),i=
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,u,i=e.call(r),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(r){u={error:r}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(u)throw u.error}}return a}(u.splice(-1),1)[0],a=u.reduce((function(r,t,e){return r+t*n[e%4]}))%10;return 10-(0===a?10:a)===i},nip:function(r){if("string"!=typeof r)return!1;var t=r.replace(/-/gu,"");if(!/^[0-9]{10}$/u.test(t))return!1;var e=String(t).split(""),n=[6,5,7,2,3,4,5,6,7].map((function(r,t){return r*parseInt(e[t],10)})),u=0;n.forEach((function(r){u+=r}));var i=u%11;return parseInt(e[9],10)===i},regon:function(t){if(!/^[0-9]{9,14}$/u.test(t))return!1;var e=[8,9,2,3,4,5,6,7];if(9===t.length)return r.checksum(t,e);return r.checksum(t.slice(0,9),e)&&r.checksum(t,[2,4,8,5,0,9,7,3,6,1,2,4,8])},identityCard:function(r){if(!r||9!==r.length)return!1;for(var t=r.toUpperCase(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n=function(r){for(var t=0,n=e.length;t<n;t++)if(r===e[t])return t;return-1},u=0;u<3;++u)if(n(t[u])<10)return!1;for(u=3;u<9;++u)if(n(t[u])<0||n(t[u])>9)return!1;var i=7*n(t[0])+3*n(t[1])+Number(n(t[2]))+7*n(t[4])+3*n(t[5])+Number(n(t[6]))+7*n(t[7])+3*n(t[8]);return(i%=10)===n(t[3])},identityCardWithSeparator:function(r){return!(!r||10!==r.length)&&((" "===r[3]||"-"===r[3])&&this.identityCard(r.replace(/[\s-]/gu,"")))}};exports.validatePolish=r;
