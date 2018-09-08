<template>
    <div class="home" :style="{overflowY:homeScroll}">
        <v-header></v-header>
        <v-roll></v-roll>
        <v-nav></v-nav>
        <v-list></v-list>
        <v-control></v-control>
    </div>
</template>

<script>
    import Header from './header/Header';
    import Rolling from './rolling/Rolling';
    import Nav from './nav/Nav';
    import MusicList from './musicList/MusicList';
    import Control from './control/Control';

    export default {
        name:'Home',
        components: {
            'v-header' : Header,
            'v-roll' : Rolling,
            'v-nav' : Nav,
            'v-list' : MusicList,
            'v-control' : Control
        },
        data(){
            return{
                homeScroll:'visible',
            }
        },
        computed:{
            getState(){ return this.$store.state.homeScroll }
        },
        watch:{
            getState(val){ this.homeScroll = val }
        },
        mounted(){
        }
    }
</script>