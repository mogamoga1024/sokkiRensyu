
Vue.component("settings", {
    template: 
        `<div id="gojuon">
            <table>
                <tr>
                    <td class="clear right-arrow-width"></td>
                    <td class="clear border-bottom" v-for="n in 5">
                        <div
                            class="down-arrow-button"
                            @click="colCharActiveSwitch(n - 1)"
                        ></div>
                    </td>
                </tr>
                <tr v-for="(gojuonRow, index) in gojuonTable">
                    <td class="clear border-right right-arrow-width">
                        <div 
                            class="right-arrow-button"
                            @click="rowCharActiveSwitch(index)"
                        ></div>
                        </td>
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
            gojuonTable: Gojuon.charTable
        }
    },
    methods: {
        charActiveSwitch: function(char) {
            char.isSelected = !char.isSelected;
            this.$cookies.set(char.char, char.isSelected);
        },
        rowCharActiveSwitch: function(index) {
            const isSelected = this.gojuonTable[index].filter(c => c !== null && c.isSelected).length === 0;
            this.gojuonTable[index].forEach(c => {
                if (c !== null) {
                    c.isSelected = isSelected;
                    this.$cookies.set(c.char, c.isSelected);
                }
            });
        },
        colCharActiveSwitch: function(index) {
            const isSelected = this.gojuonTable.filter(row => row[index] !== null && row[index].isSelected).length === 0;
            this.gojuonTable.forEach(row => {
                const c = row[index];
                if (c !== null) {
                    c.isSelected = isSelected;
                    this.$cookies.set(c.char, c.isSelected);
                }
            });
        }
    },
});


