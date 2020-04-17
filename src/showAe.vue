<template>
    <div>
        <Lottie :options="optionsDefault" @anim="createAnim" :width="400" :height="400"></Lottie>
        <div>
            <p>Speed: x {{animSpeed}}</p>
            <input type="range" value="1" max="3" min="0" step="0.5" @change="speedChange" v-model="animSpeed">
        </div>
        <button @click="stop">停止</button>
        <button @click="pause">暂停</button>
        <button @click="start">开始</button>
    </div>
</template>

<script>
import Lottie from './components/lottie.vue'
import * as animationData from './assets/data.json'
export default {
    name: 'showAe',
    data() {
        return {
            optionsDefault: { animationData: animationData },
            animSpeed: 1
        }
    },
    components: {
        'Lottie': Lottie
    },
    methods: {
        createAnim(anim){
            this.anim = anim;
        },
        stop(){
            this.anim.stop();
        },
        start(){
            this.anim.play();
        },
        pause(){
            this.anim.pause();
        },
        speedChange(){
            this.anim.setSpeed(this.animSpeed);
        }
    }
}
</script>

<style lang="css" scoped>

</style>