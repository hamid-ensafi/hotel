<script>
	import Logo from '../image/logo-dark.png';
	import { MenuItems } from '../data/menu';
	import { page } from '$app/stores';
	console.log();
</script>

<aside class="flex flex-col gap-[3.2rem] bg-gray_700 w-full px-6 py-8 row-span-full">
	<div class="flex justify-center items-center">
		<img class="w-[136px]" src={Logo} alt="" />
	</div>
	<nav>
		<ul class="flex items-center flex-col">
			{#each MenuItems as item (item.id)}
				<li class="w-full rounded-[8px]" class:bg-gray_800={$page.url.pathname === item.href}>
					<a class="flex gap-3 px-6 py-2" href={item.href}>
						<item.icon
							color=" {$page.url.pathname === item.href ? '#4f46e5 ' : '#6b7280'}"
							strokeWidth="1"
							size={22}
						></item.icon>
						{item.name}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>
