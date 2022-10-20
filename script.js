// navigator.clipboard.writeText("abc");

	function remove_element() {

		switch (location.hostname){
			case 'tenki.jp':
//				navigator.clipboard.writeText("abc");

				document.querySelector('#tenki-ad-PC_CT')?.remove();
				document.querySelector('#tenki-ad-1st_PD')?.remove();
				document.querySelector('#tenki-ad-2nd_PD')?.remove();
				document.querySelector('#tenki-ad-3rd_PD')?.remove();
				document.querySelector('#tenki-ad-footer')?.remove();
				document.querySelector('body > div.ft-app.clearfix')?.remove();
				document.querySelector('#tenki-ad-3h_point_text')?.remove();
				document.querySelector('#outbrain_widget_3')?.remove();
				document.querySelector('#main-column > section > div.point-app-image-box')?.remove();
				document.querySelector('#main-column > section > section.section-wrap.mb20')?.remove();
				document.querySelector('#tenki-ad-footer2')?.remove();
				document.querySelector('#main-column > div.mb30')?.remove();
				document.querySelector('#outbrain_widget_3')?.remove();
			break;
			case 'www.jma.go.jp':
				document.querySelector('#unitmap-adsarea')?.remove();
				document.querySelector('#jma-common-adsarea')?.remove();
				document.querySelector('#main > div.ad-pc')?.remove();
				document.querySelector('#foot-navi > div > div.ad-pc')?.remove();
			break;
			case 'weather.yahoo.co.jp':
				document.querySelector('#ydn-top')?.remove();
				document.querySelector('#sub')?.remove();
				document.querySelector('#ydn-mid')?.remove();
				document.querySelector('#ad_sqb')?.remove();
				document.querySelector('#contents-footer')?.remove();
			break;
			case 'www.hokkaido-np.co.jp':
				document.querySelector('body > div.mainBnr')?.remove();
				document.querySelector('#side > div.sideTopAdsense')?.remove();
				document.querySelector('#side > ul')?.remove();
				document.querySelector('#side > div.PrPr')?.remove();
				document.querySelectorAll('#side > div.sideBottomAdsense')[1]?.remove();
				document.querySelectorAll('#side > div.sideBottomAdsense')[2]?.remove();
				document.querySelector('#content > div.contentAdsense')?.remove();
				document.querySelector('#content > div.contentAdsense2column')?.remove();
				document.querySelector('#outbrain_widget_2')?.remove();
				document.querySelector('#content > table')?.remove();
				document.querySelector('#div-gpt-ad-PC_rec_pkawari')?.remove();
				document.querySelector('#content > div.mainNews.detailSentence > div.mainNewsLeft.mainNewsLeft-detail > div[class="pr"]')?.remove();
				document.querySelector('body > div.mainBnr')?.remove();
			break;
			case '2ch-ranking.net':
				document.querySelector('#menuBox > div:nth-child(1)')?.remove();
				document.querySelector('#content > div.amazon_carousel')?.remove();
				document.querySelector('#content > div.date')?.remove();
				document.querySelector('#content > div.thre_search')?.remove();
				document.querySelectorAll('#content > div').forEach(el => el.remove());
				document.querySelector('#content > table[style="margin-top:1.5em;"]')?.remove();

			break;
			case (location.hostname.match(/.5ch.net/) || {}).input:
				document.querySelector('body > div.container.container_body.mascot > div:nth-child(18)')?.remove();
				document.querySelector('body > div.ad--right')?.remove();
				document.querySelector('#banner')?.remove();
				document.querySelectorAll('[id^="horizontalbanners"]').forEach(el => el.remove());
				document.querySelector('div.ad--bottom')?.remove();
				document.querySelector('body > div > div:nth-child(14)')?.remove();
				document.querySelector('body > div > div.ad--bottom')?.remove();
				document.querySelector('body > div > div:nth-child(16)')?.remove();

				if (location.hostname == "jump.5ch.net") {
					document.querySelectorAll('body > div').forEach(el => el.remove());
					document.querySelector('body > b > a').click();
				}

			break;
			case '2chmm.com':
				document.querySelector('div.ad')?.remove();
			break;
			case 'hokkai.hostlove.com':
				document.querySelector('#top_bottom')?.remove();
				document.querySelector('#top_ad_box')?.remove();
				document.querySelector('#sub')?.remove();
				document.querySelector('#ad_head3')?.remove();
				document.querySelector('#ad_foot_box')?.remove();
				document.querySelector('#love_ad')?.remove();
				document.querySelector('#slider_2')?.remove();
				document.querySelector('#yoru_ch')?.remove();
				document.querySelector('#love_box')?.remove();
				document.querySelector('#main > div:nth-child(12)')?.remove();
			break;
			case 'www.mudainodocument.com':
				document.querySelector('#gn_interstitial_close_icon').click();
				document.querySelector('[id^="div-gpt-ad"]')?.remove();
			break;
			case 'twitter.com':
				document.querySelectorAll('span').forEach(el => {if (el.textContent.indexOf("プロモーション") > -1) {el.closest("section > div > div > div > div")?.remove()}});
			break;
			default:
				document.querySelector('[class="adsbygoogle adsbygoogle-noablate"]')?.remove();
				document.querySelector("body > div.ff-sans.ps-fixed.z-nav-fixed.ws4.sm\\:w-auto.p32.sm\\:p16.bg-black-750.fc-white.bar-lg.b16.l16.r16.js-consent-banner")?.remove();
				document.querySelector('[id^="popmake-"]')?.remove();
				document.querySelector('[class^="wc-webchat"]')?.remove();
				document.querySelector('aside[class="PopUpBanner"]')?.remove();
			break;
		}
	}

	remove_element();

	const observer = new MutationObserver(function(mutationsList, observer) {
		observer.disconnect();
		remove_element();
		observer.observe(document,{ attributes: true, childList: true, subtree: true });
	});

	observer.observe(document,{ attributes: true, childList: true, subtree: true });
