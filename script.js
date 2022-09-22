$("document").ready(function () {
	// Variables
	const rateButton = $(".rate-div");
	const submitButton = $("#btn");
	const div1 = $(".f-rate");
	const div2 = $(".s-rate");
	const div3 = $(".t-rate");
	const div4 = $(".fo-rate");
	const div5 = $(".fi-rate");
	const rateContainer = $(".container1");
	const selectedRate = $("#select");

	function hover() {
		// Div number 1
		div1
			.on("mouseenter", function () {
				$(this).css({
					color: "hsl(0, 0%, 100%)",
					"background-color": "hsl(25, 97%, 53%)",
					transition: "all .3s ease-in-out",
					cursor: "pointer",
				});
			})
			.on("mouseleave", function () {
				$(this).css({
					color: "",
					"background-color": "",
					transition: "all .1s ease-in-out",
				});
			});

		// Div number 2
		div2
			.on("mouseenter", function () {
				$(this).css({
					color: "hsl(0, 0%, 100%)",
					"background-color": "hsl(25, 97%, 53%)",
					transition: "all .3s ease-in-out",
					cursor: "pointer",
				});

				div1.css({
					color: "hsl(0, 0%, 100%)",
					"background-color": "hsl(216, 12%, 54%)",
					transition: "all .3s ease-in-out",
				});
			})
			.on("mouseleave", function () {
				$(this).css({
					color: "",
					"background-color": "",
					transition: "all .1s ease-in-out",
				});

				div1.css({
					color: "",
					"background-color": "",
					transition: "all .1s ease-in-out",
				});
			});

		// Div number 3
		div3
			.on("mouseenter", function () {
				$(this).css({
					color: "hsl(0, 0%, 100%)",
					"background-color": "hsl(25, 97%, 53%)",
					transition: "all .3s ease-in-out",
					cursor: "pointer",
				});

				div2.css({
					color: "hsl(0, 0%, 100%)",
					"background-color": "hsl(216, 12%, 54%)",
					transition: "all .3s ease-in-out",
				});
			})
			.on("mouseleave", function () {
				$(this).css({
					color: "",
					"background-color": "",
					transition: "all .1s ease-in-out",
				});

				div2.css({
					color: "",
					"background-color": "",
					transition: "all .1s ease-in-out",
				});
			});

		// Div number 4
		div4
			.on("mouseenter", function () {
				$(this).css({
					color: "hsl(0, 0%, 100%)",
					"background-color": "hsl(25, 97%, 53%)",
					transition: "all .3s ease-in-out",
					cursor: "pointer",
				});

				div3.css({
					color: "hsl(0, 0%, 100%)",
					"background-color": "hsl(216, 12%, 54%)",
					transition: "all .3s ease-in-out",
				});
			})
			.on("mouseleave", function () {
				$(this).css({
					color: "",
					"background-color": "",
					transition: "all .1s ease-in-out",
				});

				div3.css({
					color: "",
					"background-color": "",
					transition: "all .1s ease-in-out",
				});
			});

		// Div number 5
		div5
			.on("mouseenter", function () {
				$(this).css({
					color: "hsl(0, 0%, 100%)",
					"background-color": "hsl(25, 97%, 53%)",
					transition: "all .3s ease-in-out",
					cursor: "pointer",
				});

				div4.css({
					color: "hsl(0, 0%, 100%)",
					"background-color": "hsl(216, 12%, 54%)",
					transition: "all .3s ease-in-out",
				});
			})
			.on("mouseleave", function () {
				$(this).css({
					color: "",
					"background-color": "",
					transition: "all .1s ease-in-out",
				});

				div4.css({
					color: "",
					"background-color": "",
					transition: "all .1s ease-in-out",
				});
			});
	}
	hover();

	function clickRate() {
		rateButton.click(function () {
			var rate = $(this).text();
			console.log(rate);

			submitButton.click(function () {
				rateContainer.css("z-index", "0");

				selectedRate.text("You selected " + rate + " out of 5");
			});
		});
	}
	clickRate();
});
