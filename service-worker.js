if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let f=Promise.resolve();return c[e]||(f=new Promise(async f=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=f}else importScripts(e),f()})),f.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},f=(f,c)=>{Promise.all(f.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(f)};self.define=(f,d,a)=>{c[f]||(c[f]=Promise.resolve().then(()=>{let c={};const i={uri:location.origin+f.slice(1)};return Promise.all(d.map(f=>{switch(f){case"exports":return c;case"module":return i;default:return e(f)}})).then(e=>{const f=a(...e);return c.default||(c.default=f),c})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/favicon.ico",revision:"08a50a101f84cde546dd8c89300fd0fd"},{url:"/fonts/0caf58803c6c381ccd0df026357d47e0.woff2",revision:"1fba458e376cccd9b07a8fb809070f4a"},{url:"/fonts/2772d0e92617e33d3b51ac73d13dc090.woff",revision:"acf6a784ced787d09664cb6271bd68a0"},{url:"/fonts/361757cdbdea9ba9f4189eef311676f5.woff",revision:"a8d27e43a8098fab6b058a081ad437ed"},{url:"/fonts/af0881c3b535355f7b6a49f6e8338802.woff2",revision:"a4499edcb7f6d723a7fe6117579ddfca"},{url:"/fonts/cb30b5265787b892b1912c010ee0b21c.woff",revision:"eeaae4a59356f985b6ff399409240ff7"},{url:"/fonts/f1cef66ceb534cbeef3db2c0afd664d7.woff2",revision:"a98534166c9b6f294164f9b77aa0a3c9"},{url:"/icon_128x128.11e1efed8f6dbb58b15bcfffd78fdbd9.png",revision:"11e1efed8f6dbb58b15bcfffd78fdbd9"},{url:"/icon_192x192.836e5b57b87e8cb90837db8358d920fa.png",revision:"836e5b57b87e8cb90837db8358d920fa"},{url:"/icon_256x256.8906da052648a023ba76d9d63b427d9a.png",revision:"8906da052648a023ba76d9d63b427d9a"},{url:"/icon_384x384.67abf343c2ed5c30e0c1840292f5c062.png",revision:"67abf343c2ed5c30e0c1840292f5c062"},{url:"/icon_512x512.7fd58586b7775e281a4b14c60264b1c2.png",revision:"7fd58586b7775e281a4b14c60264b1c2"},{url:"/icon_96x96.35ae95b89e95aa28c5fd2ff6a3078d6e.png",revision:"35ae95b89e95aa28c5fd2ff6a3078d6e"},{url:"/images/2dcf5b578bfa9e5a80c51084d649c5e8.svg",revision:"923b1c44841ec455cbf421322d43d158"},{url:"/images/7240efd0dd25c07099426977cab61073.svg",revision:"8e99bd5e3f909ef4a014e7a0a4774705"},{url:"/images/771361a9383839b786ac2f4e3f62c10d.png",revision:"d9f2079d1c37fbe958fc03e67c3e577a"},{url:"/images/d0514a51a7a021af2b448766c156802b.svg",revision:"c31e47453e465e3612928355524fa13a"},{url:"/images/d3643d2f1fd1d00e8cfbe0fbf2981608.svg",revision:"e5566caba94fd30de3828e06269382b2"},{url:"/images/d70fc77a7d2af7f44b28a78d3e395b95.svg",revision:"c675992855248597be5331865739bbdd"},{url:"/images/d7227de52ab6d4cf3a33ab9c3954fdca.svg",revision:"82abf80a683eab703069be22c7e6cdd0"},{url:"/images/f3fd4e003cc1a2865c5fc6889600f5e7.svg",revision:"fb1b2175e48696bd3353c4fde97d3e15"},{url:"/index.html",revision:"a25e2a2109193ccb057b68d1462ed387"},{url:"/js/entry.chunk.js",revision:"486c76b9ecf330482bd1a634fc8c75cc"},{url:"/js/forms.vendor.chunk.js",revision:"13dcd4b27fc6a91e4c731cd8fb58483e"},{url:"/js/main-feed.chunk.js",revision:"c8995c44937a433132270433303e6b1f"},{url:"/js/main.js",revision:"12ad3707ced58c1bec1cde9f97a65f0f"},{url:"/js/main.vendor.chunk.js",revision:"81dfcd89bd84fc7076b5c0a4b5d65bca"},{url:"/js/main.vendor.chunk.js.LICENSE.txt",revision:"77e7f328dacc981fca681ee4ae94d669"},{url:"/js/manage-account.chunk.js",revision:"aa99ba999b7c6794756d4e41c4c680e3"},{url:"/js/not-found.chunk.js",revision:"a830312286a85cf0adf4b7ac1afb2fde"},{url:"/js/user-feed.chunk.js",revision:"408e1d23b023c13a4cea4ee90a849e38"},{url:"/manifest.4d8f7ff2651efb7a7b6ec43fd270ff8f.json",revision:"4d8f7ff2651efb7a7b6ec43fd270ff8f"}],{})}));
