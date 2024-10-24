<script>
	import Logo from '../../image/logo-dark.png';
</script>

<section class="flex justify-center items-center w-full h-full">
	<div class="flex-col flex items-center gap-3 w-4/12">
		<figure class="w-[200px]">
			<img class="block w-full h-full" src={Logo} alt="" />
		</figure>
		<h4 class="text-[2.5rem] font-bold text-white">Login to your account</h4>

		<form class="bg-gray_800 px-6 py-10 flex flex-col w-full text-slate-300 gap-4" action="">
			<div class="flex flex-col gap-2">
				<label for="">EMAIL</label>
				<input class=" p-2 rounded bg-none focus-visible:ring-4" type="text" />
			</div>
			<div class="flex flex-col gap-2">
				<label for="">Password</label>
				<input class=" p-2 rounded bg-none focus-visible:ring-4" type="text" />
			</div>
			<button class="bg-blue-600 p-2 rounded">submit</button>
		</form>
	</div>
</section>
