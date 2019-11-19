<template>
    <div>
        <div class="text-center">
            <h1 class="text-center text-5xl text-black font-medium">
                Hello Acme
            </h1>
        </div>
        <user-list></user-list>
        <price-list></price-list>
    </div>
</template>

<script>
    import UserList from "./UserList";
    import PriceList from "./PriceList";

    export default {
        components: {PriceList, UserList},
    };
</script>
