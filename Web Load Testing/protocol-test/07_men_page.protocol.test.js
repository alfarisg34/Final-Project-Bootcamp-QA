import http from 'k6/http'
import { Trend } from 'k6/metrics'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

import { headers } from '../config/headers.js'

const pageDuration = new Trend('page_men_duration', true)

export default function () {
	describe('07_men_page', function () {
		const responses = http.batch([
			['GET', 'https://ecommerce.tealiumdemo.com/js/lib/ccard.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/lib/jquery/jquery-1.12.1.min.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/lib/jquery/noconflict.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/mage/cookies.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/mage/translate.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/prototype/prototype.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/prototype/validation.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/scriptaculous/builder.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/scriptaculous/controls.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/scriptaculous/dragdrop.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/scriptaculous/effects.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/scriptaculous/slider.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/varien/form.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/varien/js.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/p/mpd000t.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/p/mpd003t.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/s/msj000t_2.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/s/msj003t_2.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/s/msj006t.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/s/msj012t_2.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/t/mtk000t.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/t/mtk002t.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/t/mtk004t.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/t/mtk006t.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/t/mtk009t.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/m/t/mtk012t.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/thumbnail/50x50/9df78eab33525d08d6e5fb8d27136e95/m/s/msj012t_2.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/media/black.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/media/blue.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/media/charcoal.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/media/indigo.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/media/khaki.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/media/red.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/media/royal-blue.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/media/silver.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/media/white.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/product/s/w/swatch_msj006c-charcoal.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/product/s/w/swatch_msj006c-khaki.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/product/s/w/swatch_msj006c-red.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/15x15/product/s/w/swatch_msj006c-royal-blue.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/men.html', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/base/default/images/media/logo_small.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/base/default/images/media/logo.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/base/default/js/msrp.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/images/icon_sprite.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/images/social_icons.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/app.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/configurableswatches/product-media.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/configurableswatches/swatches-list.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/lib/enquire.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/lib/imagesloaded.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/lib/jquery.cycle2.min.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/lib/jquery.cycle2.swipe.min.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/lib/matchMedia.addListener.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/lib/matchMedia.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/lib/modernizr.custom.min.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/lib/selectivizr.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/minicart.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/msrp_rwd.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/slideshow.js', headers],
		])

		for (const res of responses) {
			pageDuration.add(res.timings.duration)
			expect(res.status, 'status').is.equal(200)
		}
	})
}