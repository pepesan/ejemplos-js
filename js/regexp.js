/*
 * Código de ejemplo de el lanzamiento
 * de una alerta mediante Javascript
 */
var text = '<html><body bgcolor=linen><p>' +
    'This is <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;

var a, i;
a = text.match(tags);
for (i = 0; i < a.length; i += 1) {
    document.writeln(('// [' + i + '] ' + a[i]).entityify());
}

// The result is
// [0] <html>
// [1] <body bgcolor=linen>
// [2] <p>
// [3] This is
// [4] <b>
// [5] bold
// [6] </b>
// [7] !
// [8] </p>
// [9] </body>
// [10] </html>

function escapeHTML(text) {
    var replacements = [["&", "&amp;"], ["\"", "&quot;"],
        ["<", "&lt;"], [">", "&gt;"]];
    forEach(replacements, function(replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}
