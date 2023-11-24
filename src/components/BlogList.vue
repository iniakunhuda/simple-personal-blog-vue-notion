<template lang="">
    <div className="flex gap-14">
        <div @click="goToBlogDetail" className="w-[400px] h-[200px] ">
            <img
                :src="image"
                alt=""
                className="rounded-lg object-cover object-center w-full h-full"
            />
        </div>
        <div className="">
            <div @click="goToBlogDetail" className="text-xl font-medium">
                {{ title }}
            </div>
            <div className="text-xs flex items-center gap-2 mt-4 mb-6">
                <v-icon name="fa-calendar" />
                <p>{{ date }}</p>
            </div>
            <p className="text-base mb-6">
                {{ description }}
            </p>
            <div
                @click="goToBlogDetail"
                className="flex items-center gap-2 text-xs font-semibold text-[#e99355]"
            >
                <p>Continue reading</p>
                <v-icon name="fa-chevron-right" scale="0.7" />
            </div>
        </div>
    </div>
</template>
<script>
import { useRouter } from "vue-router";
export default {
    name: "BlogList",
    props: {
        id: {
            type: String,
        },
        slug: {
            type: String,
        },
        title: {
            type: String,
        },
        date: {
            type: String,
        },
        description: {
            type: String,
            default:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, error.",
        },
        image: {
            type: String,
            default:
                "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    },
    setup(props) {
        const router = useRouter(); // Initialize the router (push, etc)
        const goToBlogDetail = () => {
            router.push({
                name: "blogDetail",
                params: { slug: props.slug },
            });
        };
        return {
            goToBlogDetail,
        };
    },
};
</script>
<style lang=""></style>
