import http from 'k6/http'
import { Trend } from 'k6/metrics'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

import { headers } from '../config/headers.js'

const pageDuration = new Trend('page_product_duration', true)

export default function () {
	describe('04_product_page', function () {
		const responses = http.batch([
			['GET', 'https://ecommerce.tealiumdemo.com/js/calendar/calendar-setup.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/calendar/calendar.js', headers],
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
			['GET', 'https://ecommerce.tealiumdemo.com/js/varien/configurable.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/varien/form.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/varien/js.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/varien/product_options.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/js/varien/product.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/linen-blazer-590.html', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/m/s/msj012a_2.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/m/s/msj012b.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/m/s/msj012t_2.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/s/msj012t_2.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/thumbnail/75x/9df78eab33525d08d6e5fb8d27136e95/m/s/msj012a_2.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/thumbnail/75x/9df78eab33525d08d6e5fb8d27136e95/m/s/msj012b.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/product/cache/1/thumbnail/75x/9df78eab33525d08d6e5fb8d27136e95/m/s/msj012t_2.jpg', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/media/catalog/swatches/1/21x21/media/white.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/base/default/images/media/logo_small.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/base/default/images/media/logo.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/base/default/js/msrp.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/images/icon_sprite.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/images/social_icons.png', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/app.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/configurableswatches/product-media.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/configurableswatches/swatches-product.js', headers],
			['GET', 'https://ecommerce.tealiumdemo.com/skin/frontend/rwd/default/js/lib/elevatezoom/jquery.elevateZoom-3.0.8.min.js', headers],
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