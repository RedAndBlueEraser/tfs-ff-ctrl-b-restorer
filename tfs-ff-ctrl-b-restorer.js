/*
 * tfs-ff-ctrl-b-restorer.js
 * Version 20180527
 * Written by Harry Wong (RedAndBlueEraser)
 */
var f;
(function () {
    if (!f) {
        f = function (e) {
            if (e.ctrlKey) {
                var k = e.which;
                if (k === 98 || k === 105 || k === 117) {
                    e.preventDefault();
                    switch (k) {
                        case 98:   // Ctrl+B
                            $(this).find(".richeditor-toolbar-bold").click();
                            break;
                        case 105:  // Ctrl+I
                            $(this).find(".richeditor-toolbar-italic").click();
                            break;
                        case 117:  // Ctrl+U
                            $(this).find(".richeditor-toolbar-underline").click();
                            break;
                    }
                }
            }
        };
        $(document).on("keypress", ".richeditor-container", f);
    }
})();
