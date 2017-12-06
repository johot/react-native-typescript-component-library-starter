import * as tslib_1 from "tslib";
import React from "react";
import { Text } from "react-native";
var CherryLabel = /** @class */ (function (_super) {
    tslib_1.__extends(CherryLabel, _super);
    function CherryLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CherryLabel.prototype.render = function () {
        return <Text style={{ textShadowColor: "black", textShadowRadius: 3, textShadowOffset: { width: 1, height: 1 }, color: "pink", fontSize: 30 }}>{this.props.text}</Text>;
    };
    return CherryLabel;
}(React.Component));
export default CherryLabel;
//# sourceMappingURL=cherry-label.js.map