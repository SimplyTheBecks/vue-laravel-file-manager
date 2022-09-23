<template>
    <div class="fm-content d-flex flex-column">
        <disk-list v-bind:manager="manager"/>
        <breadcrumb v-bind:manager="manager"/>
        <div class="fm-content-body" ref="managerWindow" v-on:dragover="dragging = true"
             v-on:drop   ="dragging = false"
        >
            <div class="dragging" v-if="dragging"  v-on:dragleave.self="dragging = false">
                <div class="dragging-container">
                    <div class="dragging-text" v-html="lang.common.dragging"></div>
                </div>
            </div>
            <div class="forLoading" v-if="loading">
                <div class="loading">
                    <div class="loading-container">
                        <i class="fa  fa-circle-notch fa-spin"></i>
                        <div v-html="lang.common.preloader"></div>
                    </div>
                </div>
            </div>
            <table-view v-if="viewType === 'table'" v-bind:manager="manager"/>
            <grid-view v-else v-bind:manager="manager"/>
        </div>
    </div>
</template>

<script>
// Components
import DiskList from './DiskList.vue';
import Breadcrumb from './Breadcrumb.vue';
import TableView from './TableView.vue';
import GridView from './GridView.vue';
import translate from '../../mixins/translate';

export default {
  name: 'Manager',
    data(){
      return {
          dragging:false
      }
    },
  components: {
    DiskList,
    Breadcrumb,
    TableView,
    GridView,
  },
    mixins:[translate],
  props: {
    manager: { type: String, required: true },
  },
    mounted() {
        this.dragAndDropCapable = this.determineDragAndDropCapable();
        if( this.dragAndDropCapable ){
            // set managerWindow to draggable
            ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach( function( evt ) {
                this.$refs.managerWindow.addEventListener(evt, function(e){
                    e.preventDefault();
                    e.stopPropagation();
                }.bind(this), false);
            }.bind(this));
            // we need to set event listener to listen when file drop
            this.$refs.managerWindow.addEventListener('drop', function(e){
                this.$store.commit('fm/setFilesFromDragging', e.dataTransfer.files);
                // add files to store
                this.$store.commit('fm/modal/setModalState', {
                    modalName: 'Upload',
                    show: true,
                });
            }.bind(this));
        }
    },
    methods:{
        /**
         * Check if browser can use drag and drop
         */
        determineDragAndDropCapable(){
            var div = document.createElement('div');
            return ( ( 'draggable' in div )
                || ( 'ondragstart' in div && 'ondrop' in div ) )
                && 'FormData' in window
                && 'FileReader' in window;
        },
    },
  computed: {
    /**
     * view type - grid or table
     * @returns {default.computed.viewType|(function())|string}
     */
    viewType() {
      return this.$store.state.fm[this.manager].viewType;
    },

      /**
       * @returns {boolean}
       */
      loading() {
          return this.$store.state.fm.preloader;
      },
  },
};
</script>

<style lang="scss">
    .fm-content {
        height: 80vh;
        padding-left: 1rem;

        .fm-content-body {
            overflow: auto;
        }
    }
    .loading, .dragging {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        text-align: center;
        background: #ffffff  no-repeat 50% 10%;
        z-index: 1000;
        opacity: 0.5;

        i{
            font-size: 25px;
        }
    }
    .dragging-text{
        top:45%;
        position: absolute;
        width: 100%;
        font-weight: 900;
    }
    .dragging-container {
        position: absolute;
        left: 5%;
        right: 5%;
        top: 5%;
        bottom: 5%;
        border: 3px dotted;
        border-radius: 25px;
        text-align: center;
    }
    .loading-container{
        top: 45%;
        position: absolute;
        bottom: 0;
        text-align: center;
        margin: auto;
        width: 100%;
    }
</style>
