function yoz(raqam) {
    document.form.textview.value = document.form.textview.value + raqam
}

function hisob() {
    document.form.textview.value = eval( document.form.textview.value )
}

function tozalash() {
    document.form.textview.value = ""
}

function ochirish() {
    var exp = document.form.textview.value
    document.form.textview.value = exp.substring(0,exp.length-1)
}    