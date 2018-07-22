import * as $ from "jquery";

$(function(){
	$(".header-tab-item").click(function(){
		event.preventDefault();
		let tabActive = $(`#${$(this).data("id")}`)

		$(".header-tab-item").removeClass("active");
		$(this).addClass("active");

		$(".data-tab").removeClass("active");
		$(tabActive).addClass("active");

		//XỬ LÍ HIỆU ỨNG KHI CLICK VÀO CÁC NÚT LINK ĐIỀU HƯỚNG Ở NAVBAR
		$(".nav-link").click(function(){
			event.preventDefault();
			$("html,body").animate({ scrollTop: ($(this.hash).offset().top) }, 1500);
		});
	})
})
