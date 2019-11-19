<template>
    <div class="container max-w-full mx-auto py-24 px-6">
        <h2 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
            Our team
        </h2>
        <div class="flex flex-wrap">
            <div
                    v-for="(user, key, index) in users"
                    class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mx-4 my-2"
            >
                <div class="sm:flex sm:items-center px-6 py-4">
                    <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" :src="'https://randomuser.me/api/portraits/men/'+index+'.jpg'">
                    <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                        <p class="text-xl leading-tight">{{user.name}}</p>
                        <p class="text-sm leading-tight text-gray-600">{{user.role}}</p>
                        <div class="mt-4">
                            <button class="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal">Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {api} from "./../model/api";

    export default {
        data: () => ({
            users: [],
        }),
        async created() {
            this.users = await api.users();
        }
    };
</script>
