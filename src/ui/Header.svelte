<script>
	import User from 'lucide-svelte/icons/user';
	import Eclipse from 'lucide-svelte/icons/eclipse';
	import LogOut from 'lucide-svelte/icons/log-out';
	import CircleUserRound from 'lucide-svelte/icons/circle-user-round';
</script>

<header class="flex  justify-end gap-5  px-10 py-3  bg-gray_700 items-center">
	<div class="flex items-center gap-2">
        <CircleUserRound color="#fff" strokeWidth="1" size={22} ></CircleUserRound>
		<p >demo</p>
	</div>
	<div class="flex gap-3">
		<button> <Eclipse color="#4f46e5" strokeWidth="1" size={22}></Eclipse></button>
        <button> <User color="#4f46e5" strokeWidth="1" size={22}></User></button>
		<button> <LogOut color="#4f46e5" strokeWidth="1" size={22}></LogOut></button>
	</div>

</header>
