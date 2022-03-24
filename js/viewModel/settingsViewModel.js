
Vue.component("settings", {
    template: 
        `<div id="gojuon">
            <table>
                <tr v-for="gojuonRow in gojuonList">
                    <template v-for="char in gojuonRow">
                        <td v-if="char === null" class="unselectable"></td>
                        <td v-else @click="charActiveSwitch(char)">{{char}}</td>
                    </template>
                </tr>
            </table>
        </div>`,
    data: function() {
        return {
            gojuonList: [
                ["あ", "い", "う", "え", "お"],
                ["か", "き", "く", "け", "こ"],
                ["さ", "し", "す", "せ", "そ"],
                ["た", "ち", "つ", "て", "と"],
                ["な", "に", "ぬ", "ね", "の"],
                ["は", "ひ", "ふ", "へ", "ほ"],
                ["ま", "み", "む", "め", "も"],
                ["や", null, "ゆ", null, "よ"],
                ["ら", "り", "る", "れ", "ろ"],
                ["わ", null, null, null, null],
            ]
        }
    },
    methods: {
        charActiveSwitch: function(char) {
            
        }
    },
    mounted() {
        
    }
});


