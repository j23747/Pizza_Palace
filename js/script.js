

function placeOrder() {



    var name = $("input#name").val();
    var flavor = $("#pizza-flavor").val();
    var crust = $("#pizza-crust").val();
    var size = $("#pizza-size").val();
    var number = $("#number").val();
    var toppings = [];
    $.each($('input[name="toppings"]:checked'),
        function() {
            toppings.push($(this).val());
        }
    );

/* Defining the Price in sizes */

    var sizePrice;
    if (flavor === "Bbq Beef" || flavor === "Chicken Tikka" || flavor === "Hawaiian") {
        if (size === "Small") {
            sizePrice = 400;
        } else if (size === "Medium") {
            sizePrice = 650;
        } else if (size === "Large") {
            sizePrice = 900;
        }
    } else if (flavor === "Grilled Pork" || flavor === "Margharita" || flavor === "Marinara" || flavor === "Pulled Pork") {
        if (size === "Small") {
            sizePrice = 450;
        } else if (size === "Medium") {
            sizePrice = 700;
        } else if (size === "Large") {
            sizePrice = 950;
        }
    } else if (flavor === "Mushroom" || flavor === "Original Veggie" || flavor === "Oyster" || flavor === "Pepperoni") {
        if (size === "Small") {
            sizePrice = 500;
        } else if (size === "Medium") {
            sizePrice = 800;
        } else if (size === "Large") {
            sizePrice = 1100;
        }
    }



    var crustCost;
    if (crust === "Gluten Free") {
        crustCost = 200;
    } else if (crust === "Hand Tossed") {
        crustCost = 150;
    } else if (crust === "Original") {
        crustCost = 100;
    } else if (crust === "Pan") {
        crustCost = 250;
    } else if (crust === "Stuffed") {
        crustCost = 100;
    } else if (crust === "Thin") {
        crustCost = 150;
    }

    var checkboxes = $('input[name="toppings"]:checked').length;

    if (size === "Small") {
        var toppingsCost = checkboxes * 70;
    } else if (size === "Medium") {
        var toppingsCost = checkboxes * 100;
    } else if (size === "Large") {
        var toppingsCost = checkboxes * 130;
    }


    $("input[type='checkbox']:not(:checked)").prop({
        disabled: true
    });

    $('#placeorder').prop('disabled', true);

    $("#yourorder").show();

    var price = (sizePrice + crustCost + toppingsCost);
    var totalPrice = parseInt(price * number);

    $(".clientname").text("Hey " + name + " check your recipt");
    $(".pizza-size").append('<tr><td id="pizza-size">' + size);
    $(".number").append('<tr><td id="number">' + number);
    $(".pizza-crust").append('<tr><td id="pizza-crust">' + crust);
    $(".pizza-flavor").append('<tr><td id="pizza-flavor">' + flavor);
    $(".pizzaTotal1").append('<tr><td id="pizzaTotal1">' + totalPrice);

    arrayTotal.push(totalPrice);
    if (toppings == "") {
        $(".toppings").append('<tr><td id="toppings">' + "-");
    }
    if (toppings != "") {
        $(".toppings").append('<tr><td id="toppings">' + toppings);

        $(".name").text(name);
    }




}

function deliveryConfirm() {


    $("#yourdetails").toggle(2000);


    var location = $("input#location").val();
    var phone = $("input#phone").val();

    $(".location").text(location);
    $(".phone").text(phone);
    $("#delivery").hide();


}

$(document).ready(function() {
    $("#orders").submit(function(event) {
        event.preventDefault();
        placeOrder();
    });
    $("#deliveryDetails").submit(function(event) {
        event.preventDefault();
        deliveryConfirm();
    });


});


var arrayTotal = [];


function deliveryOptions() {
    $("#deliver").toggle(2000);
    $("#deliveryOptions").show();
    $("#orderDetails").hide();


    document.getElementById("orders").reset();



    $('#placeorder').prop('disabled', false);

    var checkoutTotal = 0;
    arrayTotal.forEach(function(index) {
        checkoutTotal = checkoutTotal + index;
    });

    $(".totalPick").text(checkoutTotal);

    var checkoutTotalDel = checkoutTotal + 200;

    $(".totalDel").text(checkoutTotalDel);

}


function pickUp() {
    $("#pickUpConfirmation").toggle(2000);
    $("#deliver").hide();

}

function delivery() {
    $("#delivery").toggle(2000);
    $("#deliver").hide();

}

function deliveryConfirm() {
    $("#yourdetails").show();
    $("#delivery").hide();

}


function confirmOder() {
    location.reload();
}


function addOrder() {
    $('#placeorder').prop('disabled', false);
    $("input[type='checkbox']").prop({
        disabled: false
    });
    $("input[type='checkbox']").prop({
        checked: false
    });
}