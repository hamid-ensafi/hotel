import House from 'lucide-svelte/icons/house';
import Calendar from 'lucide-svelte/icons/calendar';
import HousePlus from 'lucide-svelte/icons/house-plus';
import UsersRound from 'lucide-svelte/icons/users-round';
import Settings from 'lucide-svelte/icons/settings';

type MenuItemType = {
	id: string;
	name: string;
    icon: any;
    href:string
};

export const MenuItems: MenuItemType[] = [
	{ id: '1', name: 'Home', icon: House ,href:'/home'},
	{ id: '2', name: 'Bookings', icon: Calendar, href:'/bookings'},
	{ id: '3', name: 'cabins', icon: HousePlus, href:'/cabins'},
	{ id: '4', name: 'Users', icon: UsersRound ,href:'/users'},
	{ id: '5', name: 'Settings', icon: Settings, href:'/settings'}
];
