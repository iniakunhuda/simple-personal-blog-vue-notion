<template lang="">
    <div className="mx-[200px] pb-10">
        <Header />
        <div v-if="isBlogEmpty">Loading...</div>
        <div className="flex flex-col gap-16" v-else>
            <div v-for="blog in blogList" :key="blog.id">
                <BlogList
                    :id="blog.id"
                    :slug="blog.slug"
                    :title="blog.title"
                    :date="blog.created_date"
                    :description="blog.description"
                    :image="blog.cover[0].url"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
import Header from "@/components/Header.vue";
import BlogList from "@/components/BlogList.vue";

import { ref, onMounted, computed } from "vue";
import { getBlogList } from "@/services/blog.service.js";

const blogList = ref([]);
onMounted(async () => {
    try {
        const result = await getBlogList();
        blogList.value = result;
    } catch (error) {
        console.error("Error fetching blog list:", error);
    }
});

// added function check blogList is not empty
const isBlogEmpty = computed(() => {
    return blogList.value.length == 0;
});
</script>
<style lang=""></style>
