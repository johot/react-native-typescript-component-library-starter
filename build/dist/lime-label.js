import * as tslib_1 from "tslib";
import React from "react";
import { Text } from "react-native";
var LimeLabel = /** @class */ (function (_super) {
    tslib_1.__extends(LimeLabel, _super);
    function LimeLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LimeLabel.prototype.render = function () {
        return <Text style={{ textShadowColor: "black", textShadowRadius: 3, textShadowOffset: { width: 1, height: 1 }, color: "lime", fontSize: 30 }}>{this.props.text}</Text>;
    };
    return LimeLabel;
}(React.Component));
export default LimeLabel;
//# sourceMappingURL=lime-label.js.map