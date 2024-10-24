<script>
    import Header from "../../ui/Header.svelte";
    import Aside from '../../ui/Aside.svelte'
</script>
<div class="grid grid-cols-[17rem_1fr] grid-rows-[auto_1fr] h-[100vh]">
    <Aside></Aside>
    <Header></Header>    
<slot/>

</div>