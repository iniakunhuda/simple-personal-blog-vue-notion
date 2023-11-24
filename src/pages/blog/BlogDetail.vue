<template lang="">
    <div>
        <div v-if="!blogDetail && !article">Loading...</div>
        <div className="mx-[200px]" v-else>
            <div className="h-[520px]">
                <img
                    :src="blogDetail.cover[0].url"
                    className="w-full h-full object-cover object-center"
                />
            </div>
            <div className="max-w-[673px] mx-auto">
                <div className="">
                    <h1
                        className="text-[#333] text-5xl font-medium text-center mt-4 mb-3"
                    >
                        {{ blogDetail.title }}
                    </h1>
                    <div className="flex gap-3 items-center justify-center">
                        <div
                            className="flex items-center gap-2 text-xs text-[#333]"
                        >
                            <v-icon name="fa-calendar" fill="black" />
                            <p>{{ blogDetail.created_date }}</p>
                        </div>
                        <div
                            className="flex items-center gap-2 text-xs text-[#333]"
                        >
                            <v-icon name="fa-user" fill="black" />
                            <p>Bu Prani</p>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <NotionRenderer :blockMap="article" fullPage />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { NotionRenderer, getPageBlocks } from "vue-notion";
import { getBlogList, getBlogDetail } from "@/services/blog.service.js";

const route = useRoute();
const slug = ref(route.params.slug).value;

const blogDetail = ref();
const article = ref();

onMounted(async () => {
    try {
        const resultAll = await getBlogList();
        blogDetail.value = resultAll.filter((blog) => blog.slug == slug)[0];

        const result = await getBlogDetail(blogDetail.value.id);
        article.value = result;
    } catch (error) {
        console.error("Error fetching blog detail:", error);
    }
});
</script>
<style>
@import "@/pages/blog/blog.style.css";
</style>
