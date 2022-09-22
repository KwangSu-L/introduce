<script>
	import '../app.css';
	// @ts-ignore
	function scrollIntoView(event) {
		const el = document.querySelector(event.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<svelte:head>
	<meta name="description" content="description here" />
	<meta name="keywords" content="keywords,here" />
	<link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
	<link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" />
	<!--Totally optional :) -->
</svelte:head>
<nav class="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
	<div class="container mx-auto flex flex-wrap items-center">
		<div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
			<a class="text-white no-underline hover:text-white hover:no-underline" href="#section-1">
				<span class="text-2xl pl-2"><i class="em em-grinning" /> Brand McBrandface</span>
			</a>
		</div>
		<div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
			<ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
				<li class="mr-3">
					<a
						class="inline-block py-2 px-4 text-white no-underline"
						href="#section-1"
						on:click|preventDefault={scrollIntoView}>About Me</a
					>
				</li>
				<li class="mr-3">
					<a
						class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
						href="#section-2"
						on:click|preventDefault={scrollIntoView}>Experience</a
					>
				</li>
				<li class="mr-3">
					<a
						class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
						href="#section-3"
						on:click|preventDefault={scrollIntoView}>Education</a
					>
				</li>
				<li class="mr-3">
					<a
						class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
						href="#section-4"
						on:click|preventDefault={scrollIntoView}>Awards</a
					>
				</li>
				<li class="mr-3">
					<a
						class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
						href="#section-5"
						on:click|preventDefault={scrollIntoView}>Skills</a
					>
				</li>
				<li class="mr-3">
					<a
						class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
						href="#section-6"
						on:click|preventDefault={scrollIntoView}>Portfolio</a
					>
				</li>
			</ul>
		</div>
	</div>
</nav>
<slot />
