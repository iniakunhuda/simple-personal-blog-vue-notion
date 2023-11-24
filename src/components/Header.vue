<template lang="">
    <div className="flex flex-col items-center mt-14 mb-24">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
        </div>
        <div className="flex gap-2 text-[#333333] mt-4">
            <a href="https://instagram.com" target="_blank">
                <v-icon name="fa-instagram" fill="black" scale="1.5" />
            </a>
            <a href="https://twitter.com" target="_blank">
                <v-icon name="fa-twitter" fill="black" scale="1.5" />
            </a>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
            <h1 className="text-4xl font-bold">Bu Prani</h1>
            <div className="w-4 h-4 bg-[#E99355] rounded-full mt-2"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header"
};
</script>
<style lang=""></style>
