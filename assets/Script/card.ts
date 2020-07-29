const {ccclass, property} = cc._decorator;

/**@ 牌
 */
@ccclass
export default class card extends cc.Component {
    /* ***************private*************** */
    private _selected_b: boolean = false;
    private _rise_b: boolean = false;
    /* ***************组件*************** */
    @property({ displayName: "上升高度" })
    rise_height_n = 20;
    /* -------------------------------delimiter------------------------------- */
    /* ***************功能函数*************** */
    /**获取选中状态 */
    get selected_b(): boolean {
        return this._selected_b;
    }
    /**设置选中状态 */
    set selected_b(v_b_: boolean) {
        if (this._selected_b == v_b_) {
            return;
        }
        this._selected_b = v_b_;
        this.node.color = this._selected_b ? cc.Color.GRAY : cc.Color.WHITE;
    }
    /**获取上升状态 */
    get rise_b(): boolean {
        return this._rise_b;
    }
    /**设置上升状态 */
    set rise_b(v_b_: boolean) {
        if (this._rise_b == v_b_) {
            return;
        }
        this._rise_b = v_b_;
        this.node.y = this._rise_b ? this.rise_height_n : 0;
    }
}
