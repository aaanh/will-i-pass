

/*
This is a UI file (.ui.qml) that is intended to be edited in Qt Design Studio only.
It is supposed to be strictly declarative and only uses a subset of QML. If you edit
this file manually, you might introduce QML code that is not supported by Qt Design Studio.
Check out https://doc.qt.io/qtcreator/creator-quick-ui-forms.html for details on .ui.qml files.
*/
import QtQuick
import QtQuick.Controls
import QtGUI

Rectangle {
    width: Constants.width
    height: Constants.height
    color: "#1b1b1b"

    Text {
        color: "#ef7689"
        text: qsTr("Will I Pass")
        horizontalAlignment: Text.AlignHCenter
        font.styleName: "Regular"
        font.family: "Be Vietnam Pro"
        font.bold: false
        font.pointSize: 68
        anchors.verticalCenterOffset: -814
        anchors.horizontalCenterOffset: 0
        anchors.centerIn: parent
    }

    Text {
        color: "#828282"
        text: qsTr("by github.com/aaanh")
        horizontalAlignment: Text.AlignHCenter
        font.family: "Be Vietnam Pro"
        anchors.horizontalCenterOffset: 1
        anchors.verticalCenterOffset: -728
        font.pointSize: 22
        font.bold: false
        font.styleName: "Regular"
        anchors.centerIn: parent
    }
}

/*##^##
Designer {
    D{i:0;formeditorZoom:0.33}D{i:2}
}
##^##*/
