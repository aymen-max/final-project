var db = firebase.database().ref('commande')


$('#btnSubmitp').click(function(){
    var name = $('#namep').val()
    var address = $('#addressp').val()
    var email = $("#emailp").val()
    var tel = $("#numberp").val()
    var com = $("# textp").val()
    

    var newMsg = db.push();
    newMsg.set({
        name:name,
        address:address,
        email:email,
        phone:tel,
       commande:com,
    })
})

var db = firebase.database().ref('contact')


$('#btnSubmit').click(function(){
    var name = $('#name').val()
    var email = $("#email").val()
    var tel = $("#number").val()
    

    var newMsg = db.push();
    newMsg.set({
        name:name,
        email:email,
        phone:tel,
        
    })
})
