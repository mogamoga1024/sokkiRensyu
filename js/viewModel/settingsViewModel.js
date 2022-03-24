
Vue.component("settings", {
    template: 
        `<div id="gojuon">
            <table>
                <tr v-for="gojuonRow in gojuonList">
                    <template v-for="char in gojuonRow">
                        <td v-if="char === null" class="unselectable"></td>
                        <td v-else
                            :class="{'unselected': char.isSelected === false}"
                            @click="charActiveSwitch(char)"
                        >{{char.char}}</td>
                    </template>
                </tr>
            </table>
        </div>`,
    data: function() {
        return {
            gojuonList: Gojuon.charList
        }
    },
    methods: {
        charActiveSwitch: function(char) {
            char.isSelected = !char.isSelected;
        }
    },
    mounted() {
        
    }
});


