<template>
    <div class="container max-w-full mx-auto py-24 px-6">
        <h2 class="text-center text-4xl text-black font-medium leading-snug tracking-wider">
            Pricing
        </h2>

        <div class="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div class="relative block flex flex-col md:flex-row items-center">
                <div
                        v-for="item in pricing"
                        class="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4"
                >
                    <div class="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
                        <div class="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                            <h1 :class="[item.size > 3 ? 'text-3xl' : 'text-lg']" class="font-medium uppercase p-3 pb-0 text-center tracking-wide">
                                {{item.name}}
                            </h1>
                            <h2 class="text-gray-500 text-center pb-6 font-bold">{{item.price}} $</h2>
                            <div class="text-center">{{item.description}}</div>
                        </div>

                        <div class="flex flex-wrap mt-3 px-6">
                            <ul>
                                <li v-for="feature in item.features" class="flex items-center">
                                    <span class="text-gray-700 text-lg ml-3">✅ {{feature.name}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="block flex items-center p-8  uppercase">
                            <button class="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700">
                                Select
                            </button>
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
            pricing: [],
        }),
        async created() {
            this.pricing = await api.pricing();
        }
    };
</script>
